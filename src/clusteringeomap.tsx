import React, { useState, useEffect, useRef } from 'react';
import JSZip from 'jszip';
import shp from 'shpjs';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Map as MapIcon, Download, ChevronDown, ChevronUp, BarChart3, Loader2, Upload, X, MousePointer2, RefreshCcw, Layers } from 'lucide-react';

const CLUSTER_URL = 'https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip';
const DECILES_URL = '/data/223_cities_cluster_with_index_deciles.csv';

interface AttributeRange {
  min: number;
  max: number;
}

interface PlaceInfo {
  id: number;
  name: string;
  featureCount: number;
}

export const ATTRIBUTES = [
  // ===== Cluster =====
  { key: 'K_5', label: 'Cluster K=5', category: 'cluster', type: 'number' },
  { key: 'K_12', label: 'Cluster K=12', category: 'cluster', type: 'number' },
  { key: 'K_20', label: 'Cluster K=20', category: 'cluster', type: 'number' },
  { key: 'K_26', label: 'Cluster K=26', category: 'cluster', type: 'number' },

  // ===== Terrain =====
  { key: 'elev_mean', label: 'Elevation Mean', category: 'terrain', type: 'number' },
  { key: 'elev_std', label: 'Elevation Std', category: 'terrain', type: 'number' },
  { key: 'elev_range', label: 'Elevation Range', category: 'terrain', type: 'number' },
  { key: 'slope_mean', label: 'Slope Mean', category: 'terrain', type: 'number' },
  { key: 'slope_std', label: 'Slope Std', category: 'terrain', type: 'number' },
  { key: 'slope_rang', label: 'Slope Range', category: 'terrain', type: 'number' },

  // ===== Urban =====
  { key: 'FAR', label: 'Floor Area Ratio', category: 'urban', type: 'number' },
  { key: 'CoverRatio', label: 'Building Coverage', category: 'urban', type: 'number' },
  { key: 'GreenRatio', label: 'Green Ratio', category: 'urban', type: 'number' },
  { key: 'GrVolRatio', label: 'Green Volume Ratio', category: 'urban', type: 'number' },
  { key: 'ISF', label: 'Impervious Surface Fraction', category: 'urban', type: 'number' },

  // ===== Meta =====
  { key: 'Place', label: 'Place', category: 'meta', type: 'string' },
  { key: 'City Name', label: 'City Name', category: 'meta', type: 'string' }
];

/**
 * 健壮的流式 GeoJSON 解析器
 * 能够处理大型标准 GeoJSON 和 GeoJSONL
 */
async function parseLargeGeoJSON(uint8array: Uint8Array, onProgress: (percent: number) => void): Promise<any[]> {
  const features: any[] = [];
  const decoder = new TextDecoder();
  let i = 0;
  let braceDepth = 0;
  let inString = false;
  let escapeNext = false;
  let startIdx = -1;
  const len = uint8array.length;
  
  // 优化 1: 增加进度更新间隔，每 5MB 或 2% 更新一次，减少回调开销
  const progressStep = Math.max(5 * 1024 * 1024, Math.floor(len / 50));
  let nextProgressIdx = progressStep;
  let lastYieldTime = Date.now();

  // 优化 2: 预先缓存常用字符代码，减少属性访问
  const BYTE_BACKSLASH = 92;
  const BYTE_QUOTE = 34;
  const BYTE_LBRACE = 123;
  const BYTE_RBRACE = 125;
  const BYTE_LBRACKET = 91; // [
  const BYTE_RBRACKET = 93; // ]

  // 状态机变量
  let bracketDepth = 0; // [] 深度
  
  while (i < len) {
    const byte = uint8array[i];
    
    if (escapeNext) {
      escapeNext = false;
    } else if (byte === BYTE_BACKSLASH) {
      escapeNext = true;
    } else if (byte === BYTE_QUOTE) {
      inString = !inString;
    } else if (!inString) {
      if (byte === BYTE_LBRACE) { // {
        if (startIdx === -1 && braceDepth === 0 && bracketDepth <= 1) {
          // 只有在顶级或者 features 数组内开始记录
          startIdx = i;
        }
        braceDepth++;
      } else if (byte === BYTE_RBRACE) { // }
        braceDepth--;
        // 优化 3: 只有当可能是完整对象结束时才尝试解析
        if (startIdx !== -1 && braceDepth === 0) {
          // 优化 4: 简单的启发式检查，避免无效的 slice 和 decode
          if (i - startIdx > 10) { // 放宽长度限制
             try {
               const chunk = uint8array.subarray(startIdx, i + 1);
               const text = decoder.decode(chunk);
               
               // 优化 5: 尝试解析
               // 只有当看起来包含 type 属性时才解析，提高命中率
               if (text.includes('"type"')) {
                 const obj = JSON.parse(text);
                 if (obj.type === 'Feature') {
                   features.push(obj);
                   // 成功解析后重置，避免重复解析外层对象
                   startIdx = -1;
                 } else if (obj.features && Array.isArray(obj.features)) {
                   // 如果解析到了 FeatureCollection，提取其 features
                   features.push(...obj.features);
                   startIdx = -1;
                 }
               }
            } catch (e) {
              // 忽略解析错误（可能是中间状态）
            }
          }
          startIdx = -1; // 无论成功失败，当前对象结束，重置
        }
      } else if (byte === BYTE_LBRACKET) {
        bracketDepth++;
      } else if (byte === BYTE_RBRACKET) {
        bracketDepth--;
      }
    }
    
    i++;
    
    if (i >= nextProgressIdx) {
      onProgress(i / len);
      nextProgressIdx += progressStep;
      
      const now = Date.now();
      if (now - lastYieldTime > 50) {
        await new Promise(resolve => setTimeout(resolve, 0));
        lastYieldTime = Date.now();
      }
    }
  }
  
  // 兜底逻辑：对于超大文件，尝试不同的解析策略
  if (features.length === 0 && len > 0) {
    console.log('流式解析未发现特征，尝试整体解析...');
    console.log('文件大小:', len, 'bytes');
    
    try {
      const fullText = decoder.decode(uint8array);
      console.log('文件前 1000 字符:', fullText.substring(0, 1000));
      console.log('文件末尾 500 字符:', fullText.substring(fullText.length - 500));
      
      const fullObj = JSON.parse(fullText);
      console.log('JSON 解析后的类型:', fullObj.type);
      console.log('JSON 是否有 features:', !!fullObj.features);
      console.log('JSON features 数量:', fullObj.features?.length);
      
      if (fullObj.features) return fullObj.features;
      if (Array.isArray(fullObj)) return fullObj;
      if (fullObj.type === 'Feature') return [fullObj];
    } catch (e) {
      console.error('整体解析失败了:', e);
    }
  }
  
  return features;
}

const ClusteringGeoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [geojsonData, setGeojsonData] = useState<any>(null);
  const [places, setPlaces] = useState<PlaceInfo[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const [activeAttribute, setActiveAttribute] = useState('K_12');
  const [showPanel, setShowPanel] = useState(true);
  const [stats, setStats] = useState<{ min: number; max: number; mean: number; count: number } | null>(null);
  const [localFileUrl, setLocalFileUrl] = useState<string | null>(null);
  const [uploadMode, setUploadMode] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [showFeaturePopup, setShowFeaturePopup] = useState(false);
  const [highlightedPlace, setHighlightedPlace] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [localDataLoaded, setLocalDataLoaded] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [attributeRanges, setAttributeRanges] = useState<Record<string, AttributeRange>>({});
  const abortControllerRef = useRef<AbortController | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isMapInitialized = useRef(false);

  const calculateStats = (data: any, attr: string) => {
    let features = data.features;
    if (selectedPlace !== null) {
      features = features.filter((f: any) => Number(f.properties?.Place) === Number(selectedPlace));
    }
    const values = features.map((f: any) => f.properties?.[attr] ?? 0).filter((v: any) => !isNaN(v));
    if (values.length === 0) return null;
    
    let min = values[0];
    let max = values[0];
    let sum = values[0];
    for (let i = 1; i < values.length; i++) {
      const v = values[i];
      if (v < min) min = v;
      if (v > max) max = v;
      sum += v;
    }
    
    return {
      count: features.length,
      min,
      max,
      mean: sum / values.length,
    };
  };

  useEffect(() => {
    // 加载 deciles CSV 配置
    const loadDeciles = async () => {
      try {
        const response = await fetch(DECILES_URL);
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        if (lines.length < 2) return;
        
        const headers = lines[0].split(',').map(h => h.trim());
        const ranges: Record<string, AttributeRange> = {};
        
        // 从 100% 行获取最大值
        const maxLine = lines[lines.length - 1];
        const maxValues = maxLine.split(',');
        
        // 从 0% 行获取最小值
        const minLine = lines[1];
        const minValues = minLine.split(',');
        
        // 跳过第一列（索引）和 Place 相关的列，获取所有数值型属性
        headers.forEach((key, idx) => {
          if (key === '' || key.includes('Place') || key.includes('Sum') || key.includes('FID') || key.includes('index')) return;
          
          const minVal = parseFloat(minValues[idx]);
          const maxVal = parseFloat(maxValues[idx]);
          
          if (!isNaN(minVal) && !isNaN(maxVal) && maxVal > minVal) {
            ranges[key] = { min: minVal, max: maxVal };
          }
        });
        
        console.log('Loaded attribute ranges:', ranges);
        setAttributeRanges(ranges);
      } catch (err) {
        console.error('Failed to load deciles:', err);
      }
    };
    
    loadDeciles();
  }, []);

  useEffect(() => {
    // 只有在没有加载本地数据且没有已有 geojsonData 时才尝试云加载
    if (localDataLoaded || geojsonData) return;

    const loadData = async () => {
      setIsLoading(true);
      setLoadProgress(0);
      setError(null);
      
      try {
        setLoadProgress(10);
        console.log('开始下载...');
        
        abortControllerRef.current = new AbortController();
        const response = await fetch(CLUSTER_URL, { 
          signal: abortControllerRef.current.signal 
        });
        
        console.log('响应状态:', response.status);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        setLoadProgress(30);

        const contentLength = response.headers.get('content-length');
        const expectedSize = contentLength ? parseInt(contentLength) : null;
        console.log('预期文件大小:', expectedSize);
        
        const reader = response.body?.getReader();
        if (!reader) throw new Error('无法读取响应流');
        
        let receivedLength = 0;
        const chunks: Uint8Array[] = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          receivedLength += value.length;
          
          if (expectedSize) {
            setLoadProgress(30 + Math.round((receivedLength / expectedSize) * 60));
          } else {
            setLoadProgress(50);
          }
        }
        
        console.log('下载完成, 收到:', receivedLength);
        
        if (expectedSize && receivedLength !== expectedSize) {
          console.log('警告: 文件大小不匹配 (可能压缩传输)');
        }
        
        const allChunks = new Uint8Array(receivedLength);
        let pos = 0;
        for (const chunk of chunks) {
          allChunks.set(chunk, pos);
          pos += chunk.length;
        }
        setLoadProgress(90);
        
        if (localDataLoaded) {
          console.log('本地数据已加载，跳过网络数据');
          setIsLoading(false);
          return;
        }
        
        // 优化 1: 如果是 ZIP，解压。如果是 GeoJSON/L，直接解析
        // 检查文件头或 content-type
        const isZip = allChunks[0] === 0x50 && allChunks[1] === 0x4B;
        
        let features: any[] = [];
        
        if (isZip) {
          console.log('开始解析 ZIP...');
          const zip = await JSZip.loadAsync(allChunks);
          console.log('ZIP 文件列表:', Object.keys(zip.files));
          
          const geojsonFile = Object.values(zip.files).find((file: any) => 
            file.name.endsWith('.geojson') || file.name.endsWith('.geojsonl')
          );
          if (!geojsonFile) throw new Error(`ZIP 中未找到 .geojson 或 .geojsonl 文件。包含: ${Object.keys(zip.files).join(', ')}`);
          
          console.log('找到文件:', geojsonFile.name);
          const uint8array = await geojsonFile.async('uint8array');
          
          if (uint8array.length < 50 * 1024 * 1024) {
             const text = new TextDecoder().decode(uint8array);
             const json = JSON.parse(text);
             features = json.features || (Array.isArray(json) ? json : []);
          } else {
             features = await parseLargeGeoJSON(uint8array, (p) => setLoadProgress(90 + Math.round(p * 0.1)));
          }
        } else {
          // 假设是 GeoJSON/L
          if (allChunks.length < 50 * 1024 * 1024) {
             const text = new TextDecoder().decode(allChunks);
             try {
               const json = JSON.parse(text);
               features = json.features || (Array.isArray(json) ? json : []);
             } catch(e) {
               // 可能是 GeoJSONL，尝试 parseLargeGeoJSON
               features = await parseLargeGeoJSON(allChunks, (p) => setLoadProgress(90 + Math.round(p * 0.1)));
             }
          } else {
             features = await parseLargeGeoJSON(allChunks, (p) => setLoadProgress(90 + Math.round(p * 0.1)));
          }
        }

        console.log('解析完成，特征数量:', features?.length);

        if (localDataLoaded) return;

        const geojson = {
          type: 'FeatureCollection' as const,
          features: features || []
        };
        
        setGeojsonData(geojson);
        setLoadProgress(100);

        const placeMap = new Map<number, PlaceInfo>();
        geojson.features.forEach((feature: any) => {
          const placeId = feature.properties?.Place ?? 0;
          if (!placeMap.has(placeId)) {
            placeMap.set(placeId, { id: placeId, name: `Place ${placeId}`, featureCount: 0 });
          }
          const place = placeMap.get(placeId);
          if (place) place.featureCount++;
        });
        setPlaces(Array.from(placeMap.values() as Iterable<PlaceInfo>).sort((a, b) => a.id - b.id));
        setIsLoading(false);
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          console.log('网络请求已取消');
          return;
        }
        setError(err instanceof Error ? err.message : 'Failed to load');
        setIsLoading(false);
      }
    };
    // 只有在没有加载本地数据且没有已有 geojsonData 时才尝试云加载
    if (!localDataLoaded && !geojsonData) {
      loadData();
    }
  }, []); // 只在组件挂载时执行一次

  useEffect(() => {
    if (!geojsonData) return;
    setStats(calculateStats(geojsonData, activeAttribute));
  }, [geojsonData, selectedPlace, activeAttribute]);

  useEffect(() => {
    if (!geojsonData) return;
    const map = mapRef.current;
    if (!map) return;
    
    console.log('开始添加图层...');
    console.log('GeoJSON 特征数:', geojsonData.features.length);
    if (geojsonData.features.length > 0) {
      console.log('第一个特征示例:', JSON.stringify(geojsonData.features[0]).substring(0, 500));
    }

    const updateMapLayers = () => {
      console.log('updateMapLayers 被调用');
      console.log('geojsonData:', geojsonData);
      console.log('geojsonData.features 长度:', geojsonData?.features?.length);

      if (!geojsonData?.features || geojsonData.features.length === 0) {
        console.warn('geojsonData 没有 features');
        return;
      }

      console.log('第一个特征的属性:', geojsonData.features[0]?.properties);
      console.log('第一个特征的 geometry:', geojsonData.features[0]?.geometry);

      if (map.getSource('cluster')) {
        if (map.getLayer('cluster-fill')) map.removeLayer('cluster-fill');
        if (map.getLayer('cluster-line')) map.removeLayer('cluster-line');
        if (map.getLayer('cluster-debug')) map.removeLayer('cluster-debug');
        map.removeSource('cluster');
      }

      const allFeatures = geojsonData.features;
      console.log('selectedPlace:', selectedPlace);
      console.log('总特征数:', allFeatures.length);

      if (allFeatures.length === 0) {
        console.warn('没有特征可显示');
        return;
      }

      const geojson = { type: 'FeatureCollection' as const, features: allFeatures };
      
      try {
        map.addSource('cluster', { type: 'geojson', data: geojson });
      } catch (e) {
        console.error('添加 source 失败:', e);
        return;
      }

      const isPlaceSelected = selectedPlace !== null;
      const selectedPlaceNum = Number(selectedPlace);
      const isHighlighted = highlightedPlace !== null;
      const highlightedPlaceNum = Number(highlightedPlace);
      
      const range = attributeRanges[activeAttribute] || { min: 0, max: 1 };
      const rangeMin = range?.min ?? 0;
      const rangeMax = range?.max ?? 1;
      
      let fillColor: any;
      if (activeAttribute.includes('K_')) {
        const kMax = Math.round(rangeMax);
        const allColors = Array.from({ length: 26 }, (_, i) => {
          const t = i / 25;
          let r: number, g: number, b: number;
          if (t < 0.167) {
            const s = t / 0.167;
            r = 0; g = 0; b = Math.round(139 + (255 - 139) * s);
          } else if (t < 0.333) {
            const s = (t - 0.167) / 0.167;
            r = 0; g = Math.round(255 * s); b = 255;
          } else if (t < 0.5) {
            const s = (t - 0.333) / 0.167;
            r = 0; g = Math.round(255 - 128 * s); b = Math.round(255 - 255 * s);
          } else if (t < 0.667) {
            const s = (t - 0.5) / 0.167;
            r = Math.round(255 * s); g = 255; b = 0;
          } else if (t < 0.833) {
            const s = (t - 0.667) / 0.167;
            r = 255; g = Math.round(255 - 128 * s); b = 0;
          } else {
            const s = (t - 0.833) / 0.167;
            r = 255; g = Math.round(127 - 127 * s); b = 0;
          }
          return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        });
        const kColors = Array.from({ length: kMax + 1 }, (_, i) => allColors[Math.round(i * 25 / kMax)]);
        const selectedColors = kColors.slice(0, kMax + 1);
        const colorSteps: any[] = ['interpolate', ['linear'], ['get', activeAttribute]];
        for (let k = 0; k <= kMax; k++) {
          colorSteps.push(k, selectedColors[k]);
        }
        fillColor = colorSteps;
      } else if (activeAttribute === 'CoverRatio' || activeAttribute === 'ISF' || activeAttribute === 'GreenRatio') {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#3182bd', rangeMax, '#e6550d'];
      } else if (activeAttribute.includes('elev') || activeAttribute.includes('slope')) {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#31a354', rangeMax, '#756bb1'];
      } else {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#31a354', rangeMax, '#756bb1'];
      }

      const fillOpacity = isPlaceSelected 
        ? ['case', ['==', ['to-number', ['get', 'Place']], selectedPlaceNum], 0.8, 0.15]
        : 0.7;

      map.addLayer({
        id: 'cluster-fill',
        type: 'fill',
        source: 'cluster',
        layout: {},
        paint: { 'fill-color': fillColor, 'fill-opacity': fillOpacity },
      });

      const lineOpacity = isPlaceSelected 
        ? ['case', ['==', ['to-number', ['get', 'Place']], selectedPlaceNum], 1, 0.2]
        : isHighlighted
          ? ['case', ['==', ['to-number', ['get', 'Place']], highlightedPlaceNum], 1, 0.5]
          : 1;

      const lineColor = isPlaceSelected
        ? ['case', ['==', ['to-number', ['get', 'Place']], selectedPlaceNum], '#a0a0a0ff', '#2d3436']
        : isHighlighted
          ? ['case', ['==', ['to-number', ['get', 'Place']], highlightedPlaceNum], '#ff0000', '#2d3436']
          : '#2d3436';

      map.addLayer({
        id: 'cluster-line',
        type: 'line',
        source: 'cluster',
        layout: {},
        paint: { 'line-color': lineColor, 'line-width': 1, 'line-opacity': lineOpacity },
      });
      
      map.on('click', 'cluster-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          setSelectedFeature(feature);
          setShowFeaturePopup(true);

          if (feature.properties?.Place) {
            const placeNum = Number(feature.properties.Place);
            setSelectedPlace(placeNum);
            setHighlightedPlace(placeNum);
          }
        }
      });
      
      map.on('mouseenter', 'cluster-fill', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'cluster-fill', () => {
        map.getCanvas().style.cursor = '';
      });
      
      console.log('图层添加成功');

      if (allFeatures.length > 0) {
        try {
          const bounds = new maplibregl.LngLatBounds();
          let validCoordsCount = 0;
          
          const sampleStep = Math.max(1, Math.floor(allFeatures.length / 2000));
          
          for (let i = 0; i < allFeatures.length; i += sampleStep) {
            const feature = allFeatures[i];
            if (!feature.geometry?.coordinates) continue;
            
            const type = feature.geometry.type;
            const coords = feature.geometry.coordinates;
            
            if (type === 'Point') {
              bounds.extend(coords as [number, number]);
              validCoordsCount++;
            } else if (type === 'LineString' || type === 'MultiPoint') {
              (coords as any[]).forEach(c => bounds.extend(c));
              validCoordsCount++;
            } else if (type === 'Polygon' || type === 'MultiLineString') {
              (coords as any[])[0]?.forEach((c: any) => bounds.extend(c));
              validCoordsCount++;
            } else if (type === 'MultiPolygon') {
              (coords as any[])[0]?.[0]?.forEach((c: any) => bounds.extend(c));
              validCoordsCount++;
            }
          }
          
          if (!bounds.isEmpty() && validCoordsCount > 0) {
            console.log('Fit bounds to:', bounds.toArray());
            if (!isMapInitialized.current) {
              map.fitBounds(bounds, { padding: 50, duration: 1000 });
              isMapInitialized.current = true;
            }
          } else {
            console.warn('无法计算有效的边界框');
          }
        } catch (e) {
          console.error('Fit bounds error:', e);
        }
      }
    };

    console.log('地图样式是否加载完成:', map.isStyleLoaded());
    console.log('总 features:', geojsonData.features.length);
    console.log('当前 selectedPlace:', selectedPlace);
    
    if (!map.isStyleLoaded()) {
      console.log('等待地图样式加载完成...');
      map.once('style.load', updateMapLayers);
    } else {
      updateMapLayers();
    }
  }, [geojsonData, selectedPlace, activeAttribute]);

  useEffect(() => {
    if (!geojsonData || selectedPlace === null) return;
    const map = mapRef.current;
    if (!map) return;
    
    const features = geojsonData.features.filter(
      (f: any) => Number(f.properties?.Place) === Number(selectedPlace)
    );
    
    if (features.length === 0) return;
    
    try {
      const bounds = new maplibregl.LngLatBounds();
      let validCoordsCount = 0;
      
      const sampleStep = Math.max(1, Math.floor(features.length / 2000));
      
      for (let i = 0; i < features.length; i += sampleStep) {
        const feature = features[i];
        if (!feature.geometry?.coordinates) continue;
        
        const type = feature.geometry.type;
        const coords = feature.geometry.coordinates;
        
        if (type === 'Point') {
          bounds.extend(coords as [number, number]);
          validCoordsCount++;
        } else if (type === 'LineString' || type === 'MultiPoint') {
          (coords as any[]).forEach(c => bounds.extend(c));
          validCoordsCount++;
        } else if (type === 'Polygon' || type === 'MultiLineString') {
          (coords as any[])[0]?.forEach((c: any) => bounds.extend(c));
          validCoordsCount++;
        } else if (type === 'MultiPolygon') {
          (coords as any[])[0]?.[0]?.forEach((c: any) => bounds.extend(c));
          validCoordsCount++;
        }
      }
      
      if (!bounds.isEmpty() && validCoordsCount > 0) {
        console.log('Fly to place:', selectedPlace, bounds.toArray());
        map.fitBounds(bounds, { padding: 50, duration: 1000 });
      }
    } catch (e) {
      console.error('Fly to error:', e);
    }
  }, [selectedPlace]);

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainer.current || mapRef.current) return;
      console.log('开始初始化地图...');
      try {
        const map = new maplibregl.Map({
          container: mapContainer.current,
          style: {
            version: 8,
            sources: {
              'osm-tiles': {
                type: 'raster',
                tiles: [
                  'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                ],
                tileSize: 256,
                attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
              }
            },
            layers: [
              {
                id: 'simple-tiles',
                type: 'raster',
                source: 'osm-tiles',
                minzoom: 0,
                maxzoom: 19
              }
            ]
          },
          center: [4.75, 45.75],
          zoom: 10,
        });
        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        map.on('load', () => {
          console.log('地图样式加载完成');
        });

        map.on('error', (e) => {
          console.error('地图错误:', e);
        });

        mapRef.current = map;
        console.log('地图初始化完成');
      } catch (e) {
        console.error('地图初始化错误:', e);
      }
    };
    initMap();
    return () => { if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; } };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    
    const updateMapVisibility = () => {
      if (map.getLayer('simple-tiles')) {
        map.setLayoutProperty(
          'simple-tiles',
          'visibility',
          showMap ? 'visible' : 'none'
        );
      }
    };
    
    if (map.isStyleLoaded()) {
      updateMapVisibility();
    } else {
      map.once('style.load', updateMapVisibility);
    }
  }, [showMap]);

  const handleLocalFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    setUploadStatus('正在读取文件...');
    setError(null);
    setUploadMode(true);
    setLocalFileUrl(URL.createObjectURL(file));
    
    try {
      console.log('开始读取文件:', file.name, '大小:', file.size);
      
      let features: any[] = [];
      const isZip = file.name.endsWith('.zip');
      const isShp = file.name.endsWith('.shp');
      
      if (!isZip && !isShp) {
        setError('请上传 .shp 或 .zip 文件 (包含 Shapefile)');
        setIsUploading(false);
        return;
      }
      
      setUploadStatus('正在读取文件...');
      const arrayBuffer = await file.arrayBuffer();
      setUploadProgress(30);
      
      setUploadStatus('正在解析 Shapefile...');
      const geojson = await shp(arrayBuffer);
      console.log('Shapefile 解析完成:', geojson);
      
      if (geojson.type === 'FeatureCollection') {
        features = geojson.features;
      } else if (Array.isArray(geojson)) {
        features = geojson;
      } else if (geojson.type === 'Feature') {
        features = [geojson];
      }
      console.log('解析到的 features 数量:', features.length);
      
      setUploadProgress(95);
      setUploadStatus(`已解析 ${features.length} 个 Features...`);
      
      const geojsonDataNew = {
        type: 'FeatureCollection' as const,
        features: features
      };
      
      setUploadProgress(98);
      setUploadStatus('正在处理 Place 数据...');

      const placeMap = new Map<number, PlaceInfo>();
      geojsonDataNew.features.forEach((feature: any) => {
        const placeId = feature.properties?.Place ?? 0;
        if (!placeMap.has(placeId)) {
          placeMap.set(placeId, { id: placeId, name: `Place ${placeId}`, featureCount: 0 });
        }
        const place = placeMap.get(placeId);
        if (place) place.featureCount++;
      });
      
      setUploadProgress(100);
      setUploadStatus('加载完成!');
      
      setTimeout(() => {
        setLocalDataLoaded(true);
        setGeojsonData(geojsonDataNew);
        setPlaces(Array.from(placeMap.values() as Iterable<PlaceInfo>).sort((a, b) => a.id - b.id));
        setIsUploading(false);
        setUploadMode(false);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '未知错误';
      setError(`加载失败: ${errorMessage}`);
      setIsUploading(false);
      setIsLoading(false); // 出错也要确保关闭加载状态
    }
  };

  const handleResetToDefault = () => {
    setLocalFileUrl(null);
    setUploadMode(false);
    setError(null);
    setGeojsonData(null);
    setPlaces([]);
    setSelectedPlace(null);
    setActiveAttribute('K_12');
    window.location.reload();
  };

  const groupedAttributes = ATTRIBUTES.reduce((acc, attr) => {
    if (!acc[attr.category]) acc[attr.category] = [];
    acc[attr.category].push(attr);
    return acc;
  }, {} as Record<string, typeof ATTRIBUTES>);

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {isUploading && (
        <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Upload className="text-purple-600" size={24} />
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-3">{uploadStatus}</p>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400">{uploadProgress}%</p>
          </div>
        </div>
      )}

      {isLoading && !isUploading ? (
        <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="animate-spin h-12 w-12 text-purple-600 mx-auto mb-4" />
            <p className="text-gray-600">正在加载 Shapefile...</p>
            <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden">
              <div className="h-full bg-purple-600 transition-all duration-300" style={{ width: `${loadProgress}%` }} />
            </div>
            <p className="text-xs text-gray-400 mt-2">{loadProgress}%</p>
            <div className="flex gap-2 mt-4 justify-center">
              <a
                href={CLUSTER_URL}
                download="223_cities_cluster_with_index.zip"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors"
              >
                <Download size={14} />
                下载本地
              </a>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors"
                title="支持 .zip (Shapefile)"
              >
                <Upload size={14} />
                加载 Shapefile
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">支持 .zip (Shapefile)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".shp,.zip"
              onChange={handleLocalFileUpload}
              className="hidden"
            />
          </div>
        </div>
      ) : null}

      {error && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg">
          <p className="text-red-600 font-medium">加载失败</p>
          <p className="text-red-400 text-sm mt-1 mb-4">{error}</p>
          <div className="flex gap-2">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors"
            >
              <RefreshCcw size={14} />
              刷新重试
            </button>
          </div>
        </div>
      )}

      {showPanel && (
        <div className="absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <MapIcon size={18} />
              Cluster Map
            </h2>
            <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600">
              <ChevronDown size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">显示地图底图</span>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showMap ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showMap ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1">Place ID</label>
              <select
                value={selectedPlace ?? ''}
                onChange={(e) => setSelectedPlace(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                <option value="">All Places ({geojsonData?.features?.length ?? 0})</option>
                {places.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.featureCount})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1">Attribute</label>
              <select
                value={activeAttribute}
                onChange={(e) => setActiveAttribute(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                {Object.entries(groupedAttributes).map(([category, attrs]) => [
                  <optgroup key={category} label={category.charAt(0).toUpperCase() + category.slice(1)}>
                    {attrs.map((a) => (
                      <option key={a.key} value={a.key}>{a.label}</option>
                    ))}
                  </optgroup>
                ])}
              </select>
            </div>

            {stats && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 size={14} className="text-purple-500" />
                  <span className="text-xs font-medium text-gray-500">Statistics</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-gray-400">Count:</span> <span className="font-medium">{stats.count}</span></div>
                  <div><span className="text-gray-400">Min:</span> <span className="font-medium">{stats.min.toFixed(2)}</span></div>
                  <div><span className="text-gray-400">Max:</span> <span className="font-medium">{stats.max.toFixed(2)}</span></div>
                  <div><span className="text-gray-400">Mean:</span> <span className="font-medium">{stats.mean.toFixed(2)}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!showPanel && (
        <button
          onClick={() => setShowPanel(true)}
          className="absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors"
        >
          <ChevronUp size={18} />
        </button>
      )}

      {showFeaturePopup && selectedFeature && (
        <div className="absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Feature Details</div>
              <div className="text-lg font-semibold text-purple-600 mb-3">Place {selectedFeature.properties.Place}</div>
            </div>
            <button 
              onClick={() => setShowFeaturePopup(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="space-y-2">
            {ATTRIBUTES.map((attr) => {
              const value = selectedFeature.properties?.[attr.key];
              if (value === undefined || value === null) return null;
              return (
                <button
                  key={attr.key}
                  onClick={() => setActiveAttribute(attr.key)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeAttribute === attr.key
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{attr.label}</span>
                  <span className="font-mono font-medium">{typeof value === 'number' ? value.toFixed(2) : value}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <button
              onClick={() => setSelectedPlace(null)}
              className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors"
            >
              显示全部区域
            </button>
          </div>
        </div>
      )}

      <div ref={mapContainer} className="w-full h-full" />
      
      {showLegend && geojsonData && (
        <div className="absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Layers size={16} />
              图例
            </h3>
            <button onClick={() => setShowLegend(false)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            {activeAttribute.includes('K_') ? (
              (() => {
                const kMax = Math.round(attributeRanges[activeAttribute]?.max ?? 30);
                const allColors = Array.from({ length: 26 }, (_, i) => {
                  const t = i / 25;
                  let r: number, g: number, b: number;
                  if (t < 0.167) {
                    const s = t / 0.167;
                    r = 0; g = 0; b = Math.round(139 + (255 - 139) * s);
                  } else if (t < 0.333) {
                    const s = (t - 0.167) / 0.167;
                    r = 0; g = Math.round(255 * s); b = 255;
                  } else if (t < 0.5) {
                    const s = (t - 0.333) / 0.167;
                    r = 0; g = Math.round(255 - 128 * s); b = Math.round(255 - 255 * s);
                  } else if (t < 0.667) {
                    const s = (t - 0.5) / 0.167;
                    r = Math.round(255 * s); g = 255; b = 0;
                  } else if (t < 0.833) {
                    const s = (t - 0.667) / 0.167;
                    r = 255; g = Math.round(255 - 128 * s); b = 0;
                  } else {
                    const s = (t - 0.833) / 0.167;
                    r = 255; g = Math.round(127 - 127 * s); b = 0;
                  }
                  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                });
                const selectedColors = Array.from({ length: kMax + 1 }, (_, i) => allColors[Math.round(i * 25 / kMax)]);
                return (
                  <div>
                    <div className="text-xs text-gray-500 mb-2">{ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute}</div>
                    <div className="flex flex-wrap gap-px">
                      {selectedColors.map((color, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }}></div>
                          <span className="text-[6px] text-gray-400">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()
            ) : activeAttribute === 'CoverRatio' || activeAttribute === 'ISF' || activeAttribute === 'GreenRatio' ? (
              (() => {
                const r = attributeRanges[activeAttribute] || { min: 0, max: 1 };
                return (
                  <div>
                    <div className="text-xs text-gray-500 mb-2">{ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute}</div>
                    <div className="h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, #3182bd, #e6550d)' }}></div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{r.min.toFixed(2)}</span>
                      <span>{r.max.toFixed(2)}</span>
                    </div>
                  </div>
                );
              })()
            ) : activeAttribute.includes('elev') || activeAttribute.includes('slope') ? (
              (() => {
                const r = attributeRanges[activeAttribute] || { min: 0, max: 500 };
                return (
                  <div>
                    <div className="text-xs text-gray-500 mb-2">{ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute}</div>
                    <div className="h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, #31a354, #756bb1)' }}></div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{r.min.toFixed(1)}</span>
                      <span>{r.max.toFixed(0)}+</span>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="text-xs text-gray-500">
                {ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute}
              </div>
            )}
            
            {stats && (
              <div className="pt-2 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-gray-400">Count:</span> <span className="font-medium">{stats.count}</span></div>
                  <div><span className="text-gray-400">Min:</span> <span className="font-medium">{stats.min.toFixed(2)}</span></div>
                  <div><span className="text-gray-400">Max:</span> <span className="font-medium">{stats.max.toFixed(2)}</span></div>
                  <div><span className="text-gray-400">Mean:</span> <span className="font-medium">{stats.mean.toFixed(2)}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {!showLegend && (
        <button
          onClick={() => setShowLegend(true)}
          className="absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors"
        >
          <Layers size={18} />
        </button>
      )}
    </div>
  );
};

export default ClusteringGeoMap;
