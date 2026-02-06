import { useState,useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import shp from 'shpjs';
import type React from 'react';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import parseGeoraster from 'georaster';
import { Shapes } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';


const OpenStreetMapPage = () => {
    type LayerItem = {
        id: string;
        name: string;
        layer: L.Layer;
        visible: boolean;
        };
    const [layers, setLayers] = useState<LayerItem[]>([]);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
    const rasterLayerRef = useRef<any>(null);

  /* ===============================
   * 初始化地图（只跑一次）
   * =============================== */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '© OpenStreetMap', maxZoom: 19 }
    );

    const dark = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      { attribution: '© CARTO', maxZoom: 19 }
    );

    const light = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      { attribution: '© CARTO', maxZoom: 19 }
    );

    mapRef.current = L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      layers: [osm],
      zoomControl: true, // 手动放置缩放控件
    });
    
    /* ---------- Controls ---------- */
    const baseLayers = {
      OpenStreetMap: osm,
      Dark: dark,
      Light: light,

    };

    const overlays: Record<string, L.Layer> = {};
    L.control.scale({ imperial: false }).addTo(mapRef.current);

    L.control.layers(baseLayers, overlays, {
      position: 'topright',
    }).addTo(mapRef.current);

    L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

/* ===============================
* 加载 GeoJSON
* =============================== */
const loadGeoJSON = (data: GeoJSON.GeoJsonObject, name: string) => {
  if (!mapRef.current) return;

  // 清空旧图层
  geoJsonLayerRef.current?.remove();

  // 创建 GeoJSON 图层
  const geoLayer = L.geoJSON(data, {
    style: {
      color: '#3b82f6',
      weight: 2,
      fillOpacity: 0.2,
    },
    onEachFeature: (feature, layer) => {
      if (layer instanceof L.Path) {
        layer.on({
          mouseover: () => layer.setStyle({ fillOpacity: 0.5 }),
          mouseout: () => layer.setStyle({ fillOpacity: 0.2 }),
        });
      }

      if (feature.properties) {
        layer.bindPopup(
          Object.entries(feature.properties)
            .map(([k, v]) => `${k}: ${v}`)
            .join('<br/>')
        );
      }
    },
  });

  // **Add 到地图上（这里才 addTo）**
  geoLayer.addTo(mapRef.current);

  // 保存到 ref
  geoJsonLayerRef.current = geoLayer;

  // 添加到 Layer 管理数组
  setLayers(prev => [
    ...prev,
    {
      id: crypto.randomUUID(),
      name,
      layer: geoLayer,
      visible: true,
    },
  ]);

  mapRef.current.fitBounds(geoLayer.getBounds());
};

/* ===============================
* GeoJSON 上传
* =============================== */
const handleGeoJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files?.[0];
if (!file) return;

const reader = new FileReader();
reader.onload = () => {
const data = JSON.parse(reader.result as string);
loadGeoJSON(data, file.name);
};
reader.readAsText(file);
};

/* ===============================
* Shapefile 上传（zip）
* =============================== */
const handleShapefileUpload = async (
e: React.ChangeEvent<HTMLInputElement>
) => {
const file = e.target.files?.[0];
if (!file) return;

const arrayBuffer = await file.arrayBuffer();
const geojson = await shp(arrayBuffer);

loadGeoJSON(geojson, file.name);
};
/* ===============================
* 加载 Raster
* =============================== */
const loadRaster = async (arrayBuffer: ArrayBuffer, name: string) => {
  if (!mapRef.current) return;

  // 清除旧 raster
  if (rasterLayerRef.current) {
    mapRef.current.removeLayer(rasterLayerRef.current);
  }

  const georaster = await parseGeoraster(arrayBuffer);

  const layer = new GeoRasterLayer({
    georaster,
    opacity: 0.7,
    resolution: 256, // 越大越清晰，但更卡
  });

  rasterLayerRef.current = layer;
  layer.addTo(mapRef.current);

  setLayers(prev => [
    ...prev,
    {
      id: crypto.randomUUID(),
      name,
      layer,
      visible: true,
    },
  ]);

  mapRef.current.fitBounds(layer.getBounds());
};
/* ===============================
* Raster 上传
* =============================== */
const handleRasterUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const buffer = await file.arrayBuffer();
  await loadRaster(buffer, file.name);
};

    /* ===============================
    * 清空图层
    * =============================== */
    const clearLayers = () => {
    layers.forEach(l => mapRef.current?.removeLayer(l.layer));
    setLayers([]); // 同时清空数组
    rasterLayerRef.current = null;
    geoJsonLayerRef.current = null;
    };

  return (
    <div className="flex w-full h-screen">
        {/* =============left side toolbox============= */}
        <div className="flex flex-col border-r h-full">
            {/* ================= Toolbox ================= */}
            <div className="w-64 border-r p-4 space-y-4 text-sm">
            <h3 className="font-mono text-xs uppercase text-neutral-400">Toolbox</h3>

            <div>
                <label className="block mb-1">Upload GeoJSON</label>
                <input type="file" accept=".geojson,.json" onChange={handleGeoJsonUpload} />
            </div>

            <div>
                <label className="block mb-1">Upload Shapefile (.zip)</label>
                <input type="file" accept=".zip" onChange={handleShapefileUpload} />
            </div>
            <div>
            <label className="block mb-1">Upload GeoTIFF</label>
            <input
                type="file"
                accept=".tif,.tiff"
                onChange={handleRasterUpload}
            />
            </div>
            <button
                onClick={clearLayers}
                className="px-3 py-1 border text-xs"
            >
                Clear Layers
            </button>
            </div>
            {/* ================= Layers 列表 ================= */}
            <div className="w-64 border-r p-4 space-y-4 text-sm">
            <h3 className="font-mono text-xs uppercase text-neutral-400">Layers</h3>


            {layers.map(l => (
            <div key={l.id} className="flex items-center justify-between border-r px-4 py-2">
            <span className="truncate">{l.name}</span>
            <button
                onClick={() => {
                if (!mapRef.current) return;

                if (l.visible) {
                    mapRef.current.removeLayer(l.layer);
                } else {
                    l.layer.addTo(mapRef.current);
                }

                setLayers(prev =>
                    prev.map(x =>
                    x.id === l.id ? { ...x, visible: !x.visible } : x
                    )
                );
                }}
            >
                {l.visible ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
            </div>
        ))}
        </div>
    </div>
        {/* ================= Map ================= */}
        <div ref={mapContainerRef} className="flex-1" />
    </div>
  );
};

export default OpenStreetMapPage;
