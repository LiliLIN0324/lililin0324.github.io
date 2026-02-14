/**
 * ClusteringGeoMap 组件
 * 
 * 功能说明：
 * - 显示基于 GeoJSON 数据的城市聚类地图
 * - 支持动态选择不同的属性进行可视化（如高程、建筑覆盖率、聚类标签等）
 * - 支持从云端或本地加载 Shapefile 数据
 * - 支持交互式选择单个 Place 区域进行详细查看
 * 
 * 主要特性：
 * - 聚类可视化（K_5, K_12, K_20, K_26）
 * - 地形属性可视化（elev_mean, slope_mean 等）
 * - 城市属性可视化（FAR, CoverRatio, GreenRatio 等）
 * - 实时统计信息显示
 * - 自定义颜色映射
 */

import React, { useState, useEffect, useRef } from 'react';

/** shpjs: 用于解析 Shapefile 格式的地理数据 */
import shp from 'shpjs';

/** maplibre-gl: 开源的 WebGL 地图库 */
import maplibregl from 'maplibre-gl';

/** 引入 MapLibre 的 CSS 样式 */
import 'maplibre-gl/dist/maplibre-gl.css';

/** 
 * lucide-react: 图标组件库
 * - MapIcon: 地图图标
 * - Download: 下载图标
 * - ChevronDown/ChevronUp: 面板展开/收起图标
 * - BarChart3: 统计图表图标
 * - Loader2: 加载动画图标
 * - Upload: 上传图标
 * - X: 关闭图标
 * - MousePointer2: 指针图标
 * - RefreshCcw: 刷新图标
 * - Layers: 图层/图例图标
 */
import { Map as MapIcon, Download, ChevronDown, ChevronUp, BarChart3, Loader2, Upload, X, MousePointer2, RefreshCcw, Layers } from 'lucide-react';

/** 云端 Shapefile 数据的 URL 地址（包含 223 个城市的聚类数据） */
const CLUSTER_URL = 'https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip';

/** 本地 CSV 文件路径，包含各属性的分位数信息（用于确定颜色映射范围） */
const DECILES_URL = '/data/223_cities_cluster_with_index_deciles.csv';

/**
 * 属性范围接口
 * 用于定义每个可视化属性的最小值和最大值
 */
interface AttributeRange {
  min: number;
  max: number;
}

/**
 * 地点信息接口
 * 表示一个 Place（城市/区域）的基本信息
 */
interface PlaceInfo {
  id: number;              // Place 的唯一标识符
  name: string;            // Place 的显示名称（如 "Place 1"）
  featureCount: number;    // 该 Place 包含的地理要素数量
}

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return [r, g, b];
};
const lerpColor = (start: [number, number, number], end: [number, number, number], t: number): string => {
  const r = Math.round(start[0] + (end[0] - start[0]) * t);
  const g = Math.round(start[1] + (end[1] - start[1]) * t);
  const b = Math.round(start[2] + (end[2] - start[2]) * t);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * 属性配置数组
 * 定义了所有可用于可视化的属性
 * 
 * 分类说明：
 * - cluster: 聚类结果（K_5, K_12, K_20, K_26）
 * - terrain: 地形属性（elev_mean, slope_mean 等）
 * - urban: 城市属性（FAR, CoverRatio, GreenRatio 等）
 * - meta: 元数据（Place, City Name）
 */
export const ATTRIBUTES = [
  // ===== Cluster: 聚类结果 =====
  { key: 'K_5', label: 'Cluster K=5', category: 'cluster', type: 'number' },
  { key: 'K_12', label: 'Cluster K=12', category: 'cluster', type: 'number' },
  { key: 'K_20', label: 'Cluster K=20', category: 'cluster', type: 'number' },
  { key: 'K_26', label: 'Cluster K=26', category: 'cluster', type: 'number' },

  // ===== Terrain: 地形属性 =====
  { key: 'elev_mean', label: 'Elevation Mean(m)', category: 'terrain', type: 'number' },
  { key: 'elev_std', label: 'Elevation Std(m)', category: 'terrain', type: 'number' },
  { key: 'elev_range', label: 'Elevation Range(m)', category: 'terrain', type: 'number' },
  { key: 'slope_mean', label: 'Slope Mean(°)', category: 'terrain', type: 'number' },
  { key: 'slope_std', label: 'Slope Std(N/A)', category: 'terrain', type: 'number' },
  { key: 'slope_rang', label: 'Slope Range(N/A)', category: 'terrain', type: 'number' },

  // ===== Urban: 城市属性 =====
  { key: 'LandArea', label: 'Land Area', category: 'urban', type: 'number' },
  { key: 'Buiheight', label: 'Building Height(m)', category: 'urban', type: 'number' },
  { key: 'BldArea', label: 'Building Area(m²)', category: 'urban', type: 'number' },
  { key: 'CoverRatio', label: 'Building Coverage', category: 'urban', type: 'number' },
  { key: 'FAR', label: 'Floor Area Ratio(N/A)', category: 'urban', type: 'number' },
  { key: 'GreenArea', label: 'Green Area(m²)', category: 'urban', type: 'number' },
  { key: 'GrHeight', label: 'Green Height(m)', category: 'urban', type: 'number' },
  { key: 'GreenRatio', label: 'Green Ratio(N/A)', category: 'urban', type: 'number' },
  { key: 'GrVolRatio', label: 'Green Volume Ratio(N/A)', category: 'urban', type: 'number' },
  { key: 'ISF', label: 'Impervious Surface Fraction(N/A)', category: 'urban', type: 'number' },
  { key: 'MIN_DistWB', label: 'Mini Distance to WaterBody(m)', category: 'urban', type: 'number' },
  { key: 'MIN_DistGL', label: 'Mini Distance to GreenLand(m)', category: 'urban', type: 'number' },
  { key: 'MIN_DistMT', label: 'Mini Distance to Mountain(m)', category: 'urban', type: 'number' },
  
  // // ===== Meta: 元数据 =====
  // { key: 'Place', label: 'Place', category: 'meta', type: 'string' },
  // { key: 'Place ID', label: 'Place ID', category: 'meta', type: 'string' },
  // { key: 'City Name', label: 'City Name', category: 'meta', type: 'string' }
];

/**
 * ClusteringGeoMap 主组件
 * 
 * 状态说明：
 * - isLoading: 是否正在加载数据
 * - loadProgress: 数据加载进度（0-100）
 * - error: 错误信息
 * - mapData: GeoJSON 格式的地图数据
 * - places: 所有可用的 Place 列表
 * - selectedPlace: 当前选中的 Place ID（用于筛选）
 * - activeAttribute: 当前可视化的属性
 * - showPanel: 是否显示控制面板
 * - stats: 当前属性的统计信息
 * - localFileUrl: 本地文件的 URL
 * - uploadMode: 是否处于上传模式
 * - selectedFeature: 当前选中的地理要素
 * - showFeaturePopup: 是否显示要素详情弹窗
 * - highlightedPlace: 高亮显示的 Place
 * - isUploading: 是否正在上传文件
 * - uploadProgress: 文件上传进度
 * - uploadStatus: 上传状态文本
 * - localDataLoaded: 是否已加载本地数据
 * - showMap: 是否显示地图底图
 * - showLegend: 是否显示图例
 * - attributeRanges: 各属性的数值范围
 */
const ClusteringGeoMap: React.FC = () => {
  /** 地图容器的 DOM 引用 */
  const mapContainer = useRef<HTMLDivElement>(null);
  
  /** MapLibre 地图实例的引用 */
  const mapRef = useRef<maplibregl.Map | null>(null);
  
  /** 是否正在加载数据（网络请求或文件解析） */
  const [isLoading, setIsLoading] = useState(true);
  
  /** 数据加载进度（0-100） */
  const [loadProgress, setLoadProgress] = useState(0);
  
  /** 错误信息（如加载失败） */
  const [error, setError] = useState<string | null>(null);
  
  /** GeoJSON 格式的地图数据（FeatureCollection） */
  const [mapData, setMapData] = useState<any>(null);
  
  /** 所有 Place 的列表 */
  const [places, setPlaces] = useState<PlaceInfo[]>([]);
  
  /** 当前选中的 Place ID（用于筛选显示特定城市/区域） */
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  
  /** 当前可视化的属性键名（如 'K_12', 'elev_mean' 等） */
  const [activeAttribute, setActiveAttribute] = useState('K_12');
  
  /** 是否显示左侧控制面板 */
  const [showPanel, setShowPanel] = useState(true);
  
  /** 当前属性的统计信息（最小值、最大值、平均值、总数） */
  const [stats, setStats] = useState<{ min: number; max: number; mean: number; count: number; nanCount: number } | null>(null);
  
  /** 本地文件的对象 URL（用于预览） */
  const [localFileUrl, setLocalFileUrl] = useState<string | null>(null);
  
  /** 是否处于本地文件上传模式 */
  const [uploadMode, setUploadMode] = useState(false);
  
  /** 当前点击选中的地理要素（用于显示详情） */
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  
  /** 是否显示要素详情弹窗 */
  const [showFeaturePopup, setShowFeaturePopup] = useState(false);
  
  /** 当前鼠标悬停高亮的 Place ID */
  const [highlightedPlace, setHighlightedPlace] = useState<number | null>(null);
  
  /** 是否正在上传文件 */
  const [isUploading, setIsUploading] = useState(false);
  
  /** 文件上传进度（0-100） */
  const [uploadProgress, setUploadProgress] = useState(0);
  
  /** 文件上传状态文本（如"正在读取文件..."） */
  const [uploadStatus, setUploadStatus] = useState('');
  
  /** 是否已从本地文件加载数据（避免重复网络请求） */
  const [localDataLoaded, setLocalDataLoaded] = useState(false);
  
  /** 是否显示 OSM 地图底图 */
  const [showMap, setShowMap] = useState(true);
  
  /** 是否显示右侧图例 */
  const [showLegend, setShowLegend] = useState(true);
  
  /** 各属性的数值范围（从 CSV 分位数文件加载） */
  const [attributeRanges, setAttributeRanges] = useState<Record<string, AttributeRange>>({});
  const [showGlobalRange, setShowGlobalRange] = useState(false);
  const [colorScaleMode, setColorScaleMode] = useState<'global' | 'city'>('global');
  
  /** AbortController 引用，用于取消网络请求 */
  const abortControllerRef = useRef<AbortController | null>(null);
  
  /** 文件输入框的引用（用于触发文件选择） */
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  /** 地图是否已初始化完成（用于控制自动定位） */
  const isMapInitialized = useRef(false);

  /** 当前选中特征的 ID（用于跨渲染周期追踪高亮状态） */
  const selectedFeatureIdRef = useRef<string | number | null>(null);

  /**
   * 计算指定属性的统计信息
   * 
   * @param data - GeoJSON 数据
   * @param attr - 属性键名
   * @returns 统计信息对象（包含 count, min, max, mean）或 null
   */
  const calculateStats = (data: any, attr: string) => {
    // 获取所有要素（或按 selectedPlace 筛选）
    let features = data.features;
    if (selectedPlace !== null) {
      features = features.filter((f: any) => {
        const city = f.properties?.Place;
        return city !== undefined && Number(city) === Number(selectedPlace);
      });
    }
    
    // 提取属性值并过滤无效值（忽略 -9999）
    const values = features
      .map((f: any) => f.properties?.[attr])
      .filter((v: any) => {
        if (v === undefined || v === null) return false;
        if (typeof v === 'string') {
          const s = v.trim();
          if (s === '' || /^(na|nan|null)$/i.test(s)) return false;
        }
        const n = Number(v);
        return !(Number.isNaN(n) || n === -9999);
      })
      .map((v: any) => Number(v));
    const nanCount = features.reduce((acc: number, f: any) => {
      const raw = f.properties?.[attr];
      let invalid = false;
      if (raw === undefined || raw === null) {
        invalid = true;
      } else if (typeof raw === 'string') {
        const s = raw.trim();
        if (s === '' || /^(na|nan|null)$/i.test(s)) {
          invalid = true;
        } else {
          const n = Number(raw);
          if (Number.isNaN(n) || n === -9999) invalid = true;
        }
      } else {
        const n = Number(raw);
        if (Number.isNaN(n) || n === -9999) invalid = true;
      }
      return acc + (invalid ? 1 : 0);
    }, 0);
    
    // 手动计算统计值（避免使用 reduce 可能带来的性能问题）
    let min = NaN;
    let max = NaN;
    let sum = 0;
    if (values.length > 0) {
      min = values[0];
      max = values[0];
      sum = values[0];
      for (let i = 1; i < values.length; i++) {
        const v = values[i];
        if (v < min) min = v;
        if (v > max) max = v;
        sum += v;
      }
    }
    
    return {
      count: features.length,
      min,
      max,
      mean: values.length > 0 ? (sum / values.length) : NaN,
      nanCount,
    };
  };

  /**
   * Effect 1: 组件挂载时加载分位数配置
   * 
   * 从本地 CSV 文件加载各属性的数值范围（最小值和最大值）
   * 这些范围用于确定颜色映射的渐变区间
   */
  useEffect(() => {
    // 加载 deciles CSV 配置
    const loadDeciles = async () => {
      try {
        // 获取 CSV 文件
        const response = await fetch(DECILES_URL);
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        // CSV 文件至少有表头和一行数据
        if (lines.length < 2) return;
        
        // 解析表头
        const headers = lines[0].split(',').map(h => h.trim());
        const ranges: Record<string, AttributeRange> = {};
        
        // 从最后一行（100% 分位数）获取最大值
        const maxLine = lines[lines.length - 1];
        const maxValues = maxLine.split(',');
        
        // 从第二行（0% 分位数）获取最小值
        const minLine = lines[1];
        const minValues = minLine.split(',');
        
        // 遍历所有列，跳过非数值型属性，解析数值范围
        headers.forEach((key, idx) => {
          // 跳过索引列、Place 相关列和其他非数值列
          if (key === '' || key.includes('Place') || key.includes('Sum') || key.includes('FID') || key.includes('index')) return;
          
          const minVal = parseFloat(minValues[idx]);
          const maxVal = parseFloat(maxValues[idx]);
          
          // 只有有效的数值范围才保存
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

  /**
   * Effect 2: 从云端加载 Shapefile 数据
   * 
   * 仅在以下条件满足时执行：
   * - 未加载本地数据（localDataLoaded === false）
   * - 尚未有地图数据（mapData === null）
   * 
   * 执行流程：
   * 1. 下载远程 ZIP 文件
   * 2. 使用 shpjs 解析 Shapefile
   * 3. 转换为 GeoJSON 格式
   * 4. 提取 Place 信息并更新状态
   */
  useEffect(() => {
    // 只有在没有加载本地数据且没有已有 mapData 时才尝试云加载

    const loadData = async () => {
      // 设置加载状态
      setIsLoading(true);
      setLoadProgress(0);
      setError(null);
      
      try {
        // 阶段1: 开始下载（10%）
        setLoadProgress(10);
        console.log('开始下载...');
        
        // 创建 AbortController 用于可能的取消操作
        abortControllerRef.current = new AbortController();
        
        // 获取远程文件
        const response = await fetch(CLUSTER_URL, { 
          signal: abortControllerRef.current.signal 
        });
        
        console.log('响应状态:', response.status);
        // HTTP 错误处理
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        // 阶段2: 准备接收数据（30%）
        setLoadProgress(30);

        // 获取文件大小用于进度计算
        const contentLength = response.headers.get('content-length');
        const expectedSize = contentLength ? parseInt(contentLength) : null;
        console.log('预期文件大小:', expectedSize);
        
        // 创建读取器流式接收数据
        const reader = response.body?.getReader();
        if (!reader) throw new Error('无法读取响应流');
        
        // 分块接收数据
        let receivedLength = 0;
        const chunks: Uint8Array[] = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          receivedLength += value.length;
          
          // 更新下载进度（30% - 90%）
          if (expectedSize) {
            setLoadProgress(30 + Math.round((receivedLength / expectedSize) * 60));
          } else {
            setLoadProgress(50);
          }
        }
        
        console.log('下载完成, 收到:', receivedLength);
        
        // 警告：解压后的实际大小可能与 HTTP Content-Length 不同
        if (expectedSize && receivedLength !== expectedSize) {
          console.log('警告: 文件大小不匹配 (可能压缩传输)');
        }
        
        // 合并所有数据块
        const allChunks = new Uint8Array(receivedLength);
        let pos = 0;
        for (const chunk of chunks) {
          allChunks.set(chunk, pos);
          pos += chunk.length;
        }
        
        // 阶段3: 解析 Shapefile（90%）
        setLoadProgress(90);
        
        // 检查是否已加载本地数据（避免覆盖）
        if (localDataLoaded) {
          console.log('本地数据已加载，跳过网络数据');
          setIsLoading(false);
          return;
        }
        
        console.log('开始解析 Shapefile...');
        
        // 使用 shpjs 解析 Shapefile 为 GeoJSON
        const shpData = await shp(allChunks);
        console.log('Shapefile 解析完成:', shpData);
        
        // 规范化数据格式为 FeatureCollection
        let features: any[] = [];
        if (shpData.type === 'FeatureCollection') {
          features = shpData.features;
        } else if (Array.isArray(shpData)) {
          features = shpData;
        } else if (shpData.type === 'Feature') {
          features = [shpData];
        }
        
        console.log('解析完成，特征数量:', features?.length);

        // 再次检查本地数据状态
        if (localDataLoaded) return;

        // 创建最终的 GeoJSON 数据
        const mapDataNew = {
          type: 'FeatureCollection' as const,
          features: features || []
        };
        
        // 更新地图数据
        setMapData(mapDataNew);
        setLoadProgress(100);

        // 提取 Place（城市ID）信息用于下拉选择
        const placeMap = new Map<number, PlaceInfo>();
        mapDataNew.features.forEach((feature: any) => {
          const cityId = Number(feature.properties?.Place ?? 0);
          if (!placeMap.has(cityId)) {
            placeMap.set(cityId, { id: cityId, name: `Place ${cityId}`, featureCount: 0 });
          }
          const place = placeMap.get(cityId);
          if (place) place.featureCount++;
        });
        setPlaces(Array.from(placeMap.values() as Iterable<PlaceInfo>).sort((a, b) => a.id - b.id));
        setIsLoading(false);
      } catch (err) {
        // 处理 AbortError（用户取消请求）
        if ((err as Error).name === 'AbortError') {
          console.log('网络请求已取消');
          return;
        }
        // 设置错误信息
        setError(err instanceof Error ? err.message : 'Failed to load');
        setIsLoading(false);
      }
    };
    
    // 只有在没有加载本地数据且没有已有 mapData 时才尝试云加载
    if (!localDataLoaded && !mapData) {
      loadData();
    }
  }, []); // 只在组件挂载时执行一次

  /**
   * Effect 3: 当地图数据、选中Place或属性变化时更新统计信息
   */
  useEffect(() => {
    if (!mapData) return;
    setStats(calculateStats(mapData, activeAttribute));
  }, [mapData, selectedPlace, activeAttribute, colorScaleMode, attributeRanges]);

  /**
   * Effect 4: 更新地图图层
   * 
   * 当以下任一状态变化时重新渲染地图图层：
   * - mapData: 地图数据
   * - selectedPlace: 选中的 Place（用于筛选）
   * - activeAttribute: 可视化属性（改变颜色映射）
   * 
   * 主要功能：
   * 1. 添加/更新 GeoJSON 数据源
   * 2. 根据属性类型设置不同的颜色映射
   * 3. 处理选中 Place 的高亮效果
   * 4. 自动计算并调整地图视野
   */
  useEffect(() => {
    if (!mapData) return;
    const map = mapRef.current;
    if (!map) return;
    
    // 1. 初始化/更新数据源（仅当 mapData 变化时）
    const updateSource = () => {
      // 确保每个 feature 都有唯一的 id
      mapData.features.forEach((f: any, index: number) => {
        if (f.id === undefined) f.id = index;
      });

      if (!map.getSource('cluster')) {
        console.log('初始化 cluster 数据源...');
        map.addSource('cluster', { 
          type: 'geojson', 
          data: mapData,
          generateId: true // 自动生成 feature id 备用
        });

        // 初始化静态图层结构
        // 填充层
        map.addLayer({
          id: 'cluster-fill',
          type: 'fill',
          source: 'cluster',
          layout: {},
          paint: { 'fill-opacity': 0.7 },
        });

        // 边框层
        map.addLayer({
          id: 'cluster-line',
          type: 'line',
          source: 'cluster',
          layout: {},
          paint: { 'line-color': '#7e7f80ff', 'line-width': 1 },
        });

        // 高亮层
        map.addLayer({
          id: 'cluster-highlight',
          type: 'line',
          source: 'cluster',
          layout: {},
          paint: {
            'line-color': '#632ffdff',
            'line-width': 3,
            'line-opacity': ['case', ['boolean', ['feature-state', 'selected'], false], 1, 0]
          }
        });

        // 绑定交互事件
        map.on('click', 'cluster-fill', (e) => {
          if (e.features && e.features.length > 0) {
            const feature = e.features[0];
            const featureId = feature.id; 
            
            if (selectedFeatureIdRef.current !== null && selectedFeatureIdRef.current !== undefined) {
              map.setFeatureState({ source: 'cluster', id: selectedFeatureIdRef.current }, { selected: false });
            }

            if (featureId !== undefined) {
              map.setFeatureState({ source: 'cluster', id: featureId }, { selected: true });
              selectedFeatureIdRef.current = featureId;
            } else {
              selectedFeatureIdRef.current = null;
            }

            setSelectedFeature(feature);
            setShowFeaturePopup(true);

            if (feature.properties?.Place !== undefined) {
              setSelectedPlace(Number(feature.properties.Place));
            }
          }
        });
        
        map.on('mouseenter', 'cluster-fill', () => { map.getCanvas().style.cursor = 'pointer'; });
        map.on('mouseleave', 'cluster-fill', () => { map.getCanvas().style.cursor = ''; });

        // 自动缩放
        const allFeatures = mapData.features;
        if (allFeatures.length > 0) {
          try {
            const bounds = new maplibregl.LngLatBounds();
            const sampleStep = Math.max(1, Math.floor(allFeatures.length / 2000));
            for (let i = 0; i < allFeatures.length; i += sampleStep) {
              const feature = allFeatures[i];
              if (!feature.geometry?.coordinates) continue;
              const type = feature.geometry.type;
              const coords = feature.geometry.coordinates;
              if (type === 'Point') bounds.extend(coords as [number, number]);
              else if (type === 'LineString' || type === 'MultiPoint') (coords as any[]).forEach(c => bounds.extend(c));
              else if (type === 'Polygon' || type === 'MultiLineString') (coords as any[])[0]?.forEach((c: any) => bounds.extend(c));
              else if (type === 'MultiPolygon') (coords as any[])[0]?.[0]?.forEach((c: any) => bounds.extend(c));
            }
            if (!bounds.isEmpty()) {
              map.fitBounds(bounds, { padding: 50, duration: 1000 });
            }
          } catch (e) { console.error('Fit bounds error:', e); }
        }

      } else {
        // 更新已有数据源
        const source = map.getSource('cluster') as maplibregl.GeoJSONSource;
        source.setData(mapData);
      }
    };

    // 2. 更新样式（颜色、筛选）
    const updateStyles = () => {
      if (!map.getLayer('cluster-fill')) return;

      // 更新筛选
      const filter = null;
      
      map.setFilter('cluster-fill', filter);
      map.setFilter('cluster-line', filter);
      map.setFilter('cluster-highlight', filter);

      // 更新颜色
      const rGlobal = attributeRanges[activeAttribute] ?? (() => {
        let min = Infinity, max = -Infinity;
        for (const f of mapData.features) {
          const v = Number(f.properties?.[activeAttribute]);
          if (Number.isNaN(v) || v === -9999) continue;
          if (v < min) min = v;
          if (v > max) max = v;
        }
        return { min: min === Infinity ? 0 : min, max: max === -Infinity ? 0 : max };
      })();
      const rCity = selectedPlace !== null && stats ? { min: stats.min, max: stats.max } : rGlobal;
      const rActive = colorScaleMode === 'city' ? rCity : rGlobal;
      const rangeMin = rActive.min;
      const rangeMax = rActive.max;
      
      let fillColor: any;
      if (activeAttribute.includes('K_')) {
        const kMax = Math.round((attributeRanges[activeAttribute]?.max ?? rangeMax));
        const allColors = Array.from({ length: 26 }, (_, i) => {
           const t = i / 25;
           let r: number, g: number, b: number;
           if (t < 0.167) { const s = t / 0.167; r = 0; g = 0; b = Math.round(139 + (255 - 139) * s); }
           else if (t < 0.333) { const s = (t - 0.167) / 0.167; r = 0; g = Math.round(255 * s); b = 255; }
           else if (t < 0.5) { const s = (t - 0.333) / 0.167; r = 0; g = Math.round(255 - 128 * s); b = Math.round(255 - 255 * s); }
           else if (t < 0.667) { const s = (t - 0.5) / 0.167; r = Math.round(255 * s); g = 255; b = 0; }
           else if (t < 0.833) { const s = (t - 0.667) / 0.167; r = 255; g = Math.round(255 - 128 * s); b = 0; }
           else { const s = (t - 0.833) / 0.167; r = 255; g = Math.round(127 - 127 * s); b = 0; }
           return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        });
        const kColors = Array.from({ length: kMax + 1 }, (_, i) => allColors[Math.round(i * 25 / kMax)]);
        const selectedColors = kColors.slice(0, kMax + 1);
        const colorSteps: any[] = ['interpolate', ['linear'], ['get', activeAttribute]];
        for (let k = 0; k <= kMax; k++) { colorSteps.push(k, selectedColors[k]); }
        fillColor = colorSteps;
      } else if (activeAttribute === 'CoverRatio' || activeAttribute === 'ISF' || activeAttribute === 'GreenRatio') {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#3182bd', rangeMax, '#e6550d'];
      } else if (activeAttribute.includes('elev') || activeAttribute.includes('slope')) {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#31a354', rangeMax, '#756bb1'];
      } else {
        fillColor = ['interpolate', ['linear'], ['get', activeAttribute], rangeMin, '#31a354', rangeMax, '#756bb1'];
      }
      
      map.setPaintProperty('cluster-fill', 'fill-color', fillColor);
      
      // 更新透明度
      const isPlaceSelected = selectedPlace !== null;
      const selectedPlaceNum = Number(selectedPlace);
      const baseOpacity: any = isPlaceSelected 
        ? ['case', ['==', ['to-number', ['get', 'Place']], selectedPlaceNum], 0.8, 0.15]
        : 0.7;
      const invalidValue: any = ['any',
        ['==', ['get', activeAttribute], -9999],
        ['==', ['get', activeAttribute], null]
      ];
      const finalOpacity: any = ['case', invalidValue, 0, baseOpacity];
      map.setPaintProperty('cluster-fill', 'fill-opacity', finalOpacity);
    };

    if (map.isStyleLoaded()) {
      updateSource();
      updateStyles();
    } else {
      map.once('load', () => {
        updateSource();
        updateStyles();
      });
    }
  }, [mapData, selectedPlace, activeAttribute]);

  /**
   * Effect 5: 当选中 Place 变化时飞向该区域
   * 
   * 当地图数据存在且用户选择了特定 Place 时，
   * 自动将地图视角飞行到该 Place 所在区域
   */
  useEffect(() => {
    if (!mapData || selectedPlace === null) return;
    const map = mapRef.current;
    if (!map) return;
    
    const features = mapData.features.filter((f: any) => {
      const city = f.properties?.Place;
      return city !== undefined && Number(city) === Number(selectedPlace);
    });
    
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
        map.fitBounds(bounds, { padding: 50, duration: 1000 });
      }
    } catch (e) {
      console.error('Fly to error:', e);
    }
  }, [selectedPlace]);

  /**
   * Effect 6: 初始化 MapLibre 地图
   * 
   * 创建地图实例并配置：
   * - 底图源（OSM/CARTO）
   * - 初始视野（法国里昂附近）
   * - 导航控件
   */
  useEffect(() => {
    const initMap = async () => {
      // 防止重复初始化
      if (!mapContainer.current || mapRef.current)
      console.log('开始初始化地图...');
      try {
        // 创建 MapLibre 地图实例
        const map = new maplibregl.Map({
          container: mapContainer.current,
          // 使用 CARTO 提供的浅色底图样式
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
          // 默认中心点：法国里昂（示例数据所在地）
          center: [4.75, 45.75],
          zoom: 10,
        });
        
        // 添加缩放/旋转控件
        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        // 地图样式加载完成回调
        map.on('load', () => {
          console.log('地图样式加载完成');
        });

        // 地图错误处理
        map.on('error', (e: any) => {
          const msg = String(e?.error?.message || e?.message || '');
          const aborted =
            msg.includes('ERR_ABORTED') ||
            msg.includes('AbortError') ||
            msg.includes('Canceled') ||
            msg.includes('cancelled');
          if (aborted) return;
          console.error('地图错误:', e);
        });

        // 保存地图实例引用
        mapRef.current = map;
        console.log('地图初始化完成');
      } catch (e) {
        console.error('地图初始化错误:', e);
      }
    };
    
    // 初始化地图
    initMap();
    
    // 组件卸载时清理地图实例
    return () => { 
      if (mapRef.current) { 
        mapRef.current.remove(); 
        mapRef.current = null; 
        // 重置初始化状态，允许重新创建地图
        isMapInitialized.current = false;
      } 
    };
  }, []);

  /**
   * Effect 7: 控制地图底图的显示/隐藏
   */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    
    /**
     * 更新底图可见性
     */
    const updateMapVisibility = () => {
      if (map.getLayer('simple-tiles')) {
        map.setLayoutProperty(
          'simple-tiles',
          'visibility',
          showMap ? 'visible' : 'none'
        );
      }
    };
    
    // 等待样式加载完成
    if (map.isStyleLoaded()) {
      updateMapVisibility();
    } else {
      map.once('style.load', updateMapVisibility);
    }
  }, [showMap]);

  /**
   * 处理本地文件上传
   * 
   * 用户选择本地 Shapefile 文件后调用的处理函数：
   * 1. 验证文件类型（仅支持 .zip 或 .shp）
   * 2. 读取文件为 ArrayBuffer
   * 3. 使用 shpjs 解析为 GeoJSON
   * 4. 提取 Place 信息
   * 5. 更新地图数据
   * 
   * @param event - 文件 input 的 change 事件
   */
  const handleLocalFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // 获取用户选择的文件
    const file = event.target.files?.[0];
    if (!file) return;

    // 取消任何进行中的网络请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // 设置上传状态
    setIsUploading(true);
    setUploadProgress(0);
    setUploadStatus('正在读取文件...');
    setError(null);
    setUploadMode(true);
    // 创建对象 URL 用于后续处理
    setLocalFileUrl(URL.createObjectURL(file));
    
    try {
      console.log('开始读取文件:', file.name, '大小:', file.size);
      
      let features: any[] = [];
      // 验证文件扩展名
      const isZip = file.name.endsWith('.zip');
      const isShp = file.name.endsWith('.shp');
      
      // 不支持的格式
      if (!isZip && !isShp) {
        setError('请上传 .zip 文件 (包含 Shapefile)');
        setIsUploading(false);
        return;
      }
      
      // 阶段1: 读取文件
      setUploadStatus('正在读取文件...');
      const arrayBuffer = await file.arrayBuffer();
      setUploadProgress(30);
      
      // 阶段2: 解析 Shapefile
      setUploadStatus('正在解析 Shapefile...');
      const shpData = await shp(arrayBuffer);
      console.log('Shapefile 解析完成:', shpData);
      
      // 规范化为 FeatureCollection 格式
      if (shpData.type === 'FeatureCollection') {
        features = shpData.features;
      } else if (Array.isArray(shpData)) {
        features = shpData;
      } else if (shpData.type === 'Feature') {
        features = [shpData];
      }
      console.log('解析到的 features 数量:', features.length);
      
      // 阶段3: 准备数据
      setUploadProgress(95);
      setUploadStatus(`已解析 ${features.length} 个 Features...`);
      
      const mapDataNew = {
        type: 'FeatureCollection' as const,
        features: features
      };
      
      // 阶段4: 处理 Place 信息
      setUploadProgress(98);
      setUploadStatus('正在处理 Place 数据...');

      // 统计每个 Place 包含的要素数量
      const placeMap = new Map<number, PlaceInfo>();
      mapDataNew.features.forEach((feature: any) => {
        const cityId = Number(feature.properties?.Place ?? 0);
        if (!placeMap.has(cityId)) {
          placeMap.set(cityId, { id: cityId, name: `Place ${cityId}`, featureCount: 0 });
        }
        const place = placeMap.get(cityId);
        if (place) place.featureCount++;
      });
      
      // 完成
      setUploadProgress(100);
      setUploadStatus('加载完成!');
      
      // 短暂延迟后更新状态，让用户看到"加载完成"
      setTimeout(() => {
        setLocalDataLoaded(true);
        setMapData(mapDataNew);
        setPlaces(Array.from(placeMap.values() as Iterable<PlaceInfo>).sort((a, b) => a.id - b.id));
        setIsUploading(false);
        setUploadMode(false);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      // 错误处理
      const errorMessage = err instanceof Error ? err.message : '未知错误';
      setError(`加载失败: ${errorMessage}`);
      setIsUploading(false);
      setIsLoading(false);
    }
  };

  /**
   * 重置为默认设置
   * 
   * 清除所有本地数据状态，刷新页面以重新加载默认云端数据
   */
  const handleResetToDefault = () => {
    // 清除本地状态
    setLocalFileUrl(null);
    setUploadMode(false);
    setError(null);
    setMapData(null);
    setPlaces([]);
    setSelectedPlace(null);
    setActiveAttribute('K_12');
    // 刷新页面重新加载
    window.location.reload();
  };

  /**
   * 将属性按类别分组
   * 
   * 用于在属性选择下拉框中按分类显示选项
   * 分类：cluster, terrain, urban, meta
   */
  const groupedAttributes = ATTRIBUTES.reduce((acc, attr) => {
    if (!acc[attr.category]) acc[attr.category] = [];
    acc[attr.category].push(attr);
    return acc;
  }, {} as Record<string, typeof ATTRIBUTES>);

  /**
   * 主渲染函数
   * 
   * JSX 结构说明：
   * 1. 上传进度弹窗（isUploading 时显示）
   * 2. 加载进度弹窗（isLoading 时显示）
   * 3. 错误提示弹窗（error 存在时显示）
   * 4. 左侧控制面板（showPanel 时显示）
   * 5. 地图容器
   * 6. 右侧图例（showLegend 时显示）
   */
  return (
    // 主容器：占满父容器高度，灰色背景
    <div className="relative w-full h-full bg-gray-100">
      {/* ===== 条件渲染 1: 文件上传进度弹窗 ===== */}
      {isUploading && (
        <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
            {/* 旋转加载动画图标 */}
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Upload className="text-purple-600" size={24} />
              </div>
            </div>
            {/* 状态文本 */}
            <p className="text-gray-800 font-medium mb-3">{uploadStatus}</p>
            {/* 进度条 */}
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

      {/* ===== 条件渲染 2: 初始加载进度弹窗 ===== */}
      {isLoading && !isUploading ? (
        <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            {/* 加载动画 */}
            <Loader2 className="animate-spin h-12 w-12 text-purple-600 mx-auto mb-4" />
            <p className="text-gray-600">正在加载 Shapefile...</p>
            {/* 进度条 */}
            <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden">
              <div className="h-full bg-purple-600 transition-all duration-300" style={{ width: `${loadProgress}%` }} />
            </div>
            <p className="text-xs text-gray-400 mt-2">{loadProgress}%</p>
            
            {/* 操作按钮：下载本地或上传文件 */}
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
            {/* 隐藏的文件输入框 */}
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

      {/* ===== 条件渲染 3: 错误提示弹窗 ===== */}
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

      {/* ===== 条件渲染 4: 左侧控制面板 ===== */}
      {showPanel && (
        <div className="absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72">
          {/* 面板标题 */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <MapIcon size={18} />
              Cluster Map
            </h2>
            {/* 收起按钮 */}
            <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* 底图显示开关 */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">显示地图底图</span>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showMap ? 'bg-purple-600' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showMap ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>

          {/* 选择控件区域 */}
          <div className="space-y-3">
            {/* Place 选择 */}
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1">Place (Count)</label>
              <select
                value={selectedPlace ?? ''}
                onChange={(e) => setSelectedPlace(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                <option value="">All Places ({mapData?.features?.length ?? 0})</option>
                {places.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.featureCount})</option>
                ))}
              </select>
            </div>

            {/* 属性选择 */}
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

            {/* 统计信息显示 */}
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
                  <div><span className="text-gray-400">NaN:</span> <span className="font-medium">{stats.nanCount}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== 条件渲染 5: 收起状态下的面板展开按钮 ===== */}
      {!showPanel && (
        <button
          onClick={() => setShowPanel(true)}
          className="absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors"
        >
          <ChevronUp size={18} />
        </button>
      )}

      {/* ===== 条件渲染 6: 要素详情弹窗 ===== */}
      {showFeaturePopup && selectedFeature && (
        <div className="absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Feature Details</div>
              <div className="mb-3">
                {selectedFeature.properties.Place && (
                  <div className="text-lg font-semibold text-purple-600">
                    Place: {selectedFeature.properties.Place}
                  </div>
                )}
                {selectedFeature.properties['City Name'] && (
                  <div className="text-sm font-medium text-gray-700">
                    City: {selectedFeature.properties['City Name']}
                  </div>
                )}
                <div className="text-sm font-medium text-gray-500">
                   Place ID: {selectedFeature.properties['Place ID'] ?? 'N/A'}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowFeaturePopup(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* 属性列表：点击可切换可视化属性 */}
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

          {/* 显示全部区域按钮 */}
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

      {/* ===== 地图容器 ===== */}
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* ===== 条件渲染 7: 右侧图例 ===== */}
      {showLegend && mapData && (
        <div className="absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64">
          {/* 图例标题 */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Layers size={16} />
              Legend
            </h3>
            <button onClick={() => setShowLegend(false)} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">颜色映射</span>
            <button
              onClick={() => setColorScaleMode(colorScaleMode === 'global' ? 'city' : 'global')}
              className={`text-xs px-2 py-1 rounded ${colorScaleMode === 'global' ? 'bg-gray-200 text-gray-700' : 'bg-purple-100 text-purple-700'}`}
            >
              {colorScaleMode === 'global' ? '全局' : '城市'}
            </button>
          </div>
          
          {/* 图例内容：根据属性类型显示不同的颜色条 */}
          <div className="space-y-3">
            {/* 聚类属性：离散颜色块 */}
            {activeAttribute.includes('K_') ? (
              (() => {
                const kMax = Math.round(attributeRanges[activeAttribute]?.max ?? 30);
                // 生成彩虹色谱
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
                // 根据 K 值选择颜色
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
            ) 
            // 覆盖率属性：蓝到橙渐变
            : activeAttribute === 'CoverRatio' || activeAttribute === 'ISF' || activeAttribute === 'GreenRatio' ? (
              (() => {
                const rGlobal = attributeRanges[activeAttribute] ?? (() => {
                  let min = Infinity, max = -Infinity;
                  for (const f of mapData.features) {
                    const v = Number(f.properties?.[activeAttribute]);
                    if (Number.isNaN(v) || v === -9999) continue;
                    if (v < min) min = v;
                    if (v > max) max = v;
                  }
                  return { min: min === Infinity ? 0 : min, max: max === -Infinity ? 0 : max };
                })();
                const rCity = selectedPlace !== null && stats ? { min: stats.min, max: stats.max } : rGlobal;
                const label = ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute;
                const startPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.min - rGlobal.min) / (rGlobal.max - rGlobal.min))) : 0;
                const widthPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.max - rCity.min) / (rGlobal.max - rGlobal.min))) : 0;
                const baseStart = hexToRgb('#3182bd');
                const baseEnd = hexToRgb('#e6550d');
                const startColor = lerpColor(baseStart, baseEnd, startPct);
                const endColor = lerpColor(baseStart, baseEnd, Math.min(1, startPct + widthPct));
                return (
                  <div>
                    {colorScaleMode === 'city' && (
                      <>
                        <div className="text-xs text-gray-500 mb-2">{label}（城市区间）</div>
                        <div className="relative h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))' }}>
                          {selectedPlace !== null && (
                            <div
                              className="absolute top-0 h-3 rounded ring-1 ring-black/20"
                              style={{ left: `${startPct * 100}%`, width: `${widthPct * 100}%`, background: `linear-gradient(to right, ${startColor}, ${endColor})` }}
                            />
                          )}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rCity.min.toFixed(2)}</span>
                          <span>{rCity.max.toFixed(2)}</span>
                        </div>
                      </>
                    )}
                    {colorScaleMode === 'global' && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-500 mb-1">{label}（全局）</div>
                        <div className="h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, #3182bd, #e6550d)' }}></div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rGlobal.min.toFixed(2)}</span>
                          <span>{rGlobal.max.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            ) 
            // 高程/坡度属性：绿到紫渐变
            : activeAttribute.includes('elev') || activeAttribute.includes('slope') ? (
              (() => {
                const rGlobal = attributeRanges[activeAttribute] ?? (() => {
                  let min = Infinity, max = -Infinity;
                  for (const f of mapData.features) {
                    const v = Number(f.properties?.[activeAttribute]);
                    if (Number.isNaN(v) || v === -9999) continue;
                    if (v < min) min = v;
                    if (v > max) max = v;
                  }
                  return { min: min === Infinity ? 0 : min, max: max === -Infinity ? 0 : max };
                })();
                const rCity = selectedPlace !== null && stats ? { min: stats.min, max: stats.max } : rGlobal;
                const label = ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute;
                const startPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.min - rGlobal.min) / (rGlobal.max - rGlobal.min))) : 0;
                const widthPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.max - rCity.min) / (rGlobal.max - rGlobal.min))) : 0;
                const baseStart = hexToRgb('#31a354');
                const baseEnd = hexToRgb('#756bb1');
                const startColor = lerpColor(baseStart, baseEnd, startPct);
                const endColor = lerpColor(baseStart, baseEnd, Math.min(1, startPct + widthPct));
                return (
                  <div>
                    {colorScaleMode === 'city' && (
                      <>
                        <div className="text-xs text-gray-500 mb-2">{label}（城市区间，映射到全局色带）</div>
                        <div className="relative h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))' }}>
                          {selectedPlace !== null && (
                            <div
                              className="absolute top-0 h-3 rounded ring-1 ring-black/20"
                              style={{ left: `${startPct * 100}%`, width: `${widthPct * 100}%`, background: `linear-gradient(to right, ${startColor}, ${endColor})` }}
                            />
                          )}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rCity.min.toFixed(1)}</span>
                          <span>{rCity.max.toFixed(0)}+</span>
                        </div>
                      </>
                    )}
                    {colorScaleMode === 'global' && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-500 mb-1">{label}（全局）</div>
                        <div className="h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, #31a354, #756bb1)' }}></div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rGlobal.min.toFixed(1)}</span>
                          <span>{rGlobal.max.toFixed(0)}+</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            ) 
            // 默认：灰度渐变
            : (
              (() => {
                const rGlobal = attributeRanges[activeAttribute] ?? (() => {
                  let min = Infinity, max = -Infinity;
                  for (const f of mapData.features) {
                    const v = Number(f.properties?.[activeAttribute]);
                    if (Number.isNaN(v) || v === -9999) continue;
                    if (v < min) min = v;
                    if (v > max) max = v;
                  }
                  return { min: min === Infinity ? 0 : min, max: max === -Infinity ? 0 : max };
                })();
                const rCity = selectedPlace !== null && stats ? { min: stats.min, max: stats.max } : rGlobal;
                const label = ATTRIBUTES.find(a => a.key === activeAttribute)?.label || activeAttribute;
                const startPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.min - rGlobal.min) / (rGlobal.max - rGlobal.min))) : 0;
                const widthPct = rGlobal.max > rGlobal.min ? Math.max(0, Math.min(1, (rCity.max - rCity.min) / (rGlobal.max - rGlobal.min))) : 0;
                const baseStart = hexToRgb('#31a354');
                const baseEnd = hexToRgb('#756bb1');
                const startColor = lerpColor(baseStart, baseEnd, startPct);
                const endColor = lerpColor(baseStart, baseEnd, Math.min(1, startPct + widthPct));
                return (
                  <div>
                    {colorScaleMode === 'city' && (
                      <>
                        <div className="text-xs text-gray-500 mb-2">{label}（城市区间，映射到全局色带）</div>
                        <div className="relative h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))' }}>
                          {selectedPlace !== null && (
                            <div
                              className="absolute top-0 h-3 rounded ring-1 ring-black/20"
                              style={{ left: `${startPct * 100}%`, width: `${widthPct * 100}%`, background: `linear-gradient(to right, ${startColor}, ${endColor})` }}
                            />
                          )}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rCity.min.toFixed(2)}</span>
                          <span>{rCity.max.toFixed(2)}</span>
                        </div>
                      </>
                    )}
                    {colorScaleMode === 'global' && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-500 mb-1">{label}（全局）</div>
                        <div className="h-3 rounded overflow-hidden" style={{ background: 'linear-gradient(to right, #31a354, #756bb1)' }}></div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{rGlobal.min.toFixed(2)}</span>
                          <span>{rGlobal.max.toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()
            )}


          </div>
        </div>
      )}
      
      {/* ===== 条件渲染 8: 收起状态下的图例展开按钮 ===== */}
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
