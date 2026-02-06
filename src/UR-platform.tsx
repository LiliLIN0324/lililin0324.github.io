
import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  TreePine, 
  Waves, 
  ThermometerSun,
  Star, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Navigation,
  Plus,
  Minus,
  MessageSquare,
  User,
  ChevronDown,
  Loader2
} from 'lucide-react';
import maplibregl from 'maplibre-gl';

// Initial mock data
const INITIAL_COMMENTS = [
  { id: 1, user: 'Citizen 1', text: 'This greenland may need some adjustment.', rating: 5, avatar: 'C' },
  { id: 2, user: 'Citizen 2', text: 'Too small parking lot.', rating: 2, avatar: 'C' },
  { id: 3, user: 'Professional 1', text: 'Facade is too old, need to adjust.', rating: 15, avatar: 'P' },
  { id: 4, user: 'Government', text: 'Building is too old. 20years old, need to remodel.', rating: 4, avatar: 'G' },
];

const INITIAL_HISTORY = [
];

const SHANGHAI_CENTER: [number, number] = [121.4737, 31.4004]; //上海北边一点

const URplatform: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const anchorRef = useRef<maplibregl.LngLat | null>(null); // 用于记录选中的地理位置
  const [activeLayers, setActiveLayers] = useState<string[]>(['building', 'street', 'landuse', 'waterbodies','lst-heatmap', 'grid']);
  const [showBasemap, setShowBasemap] = useState<boolean>(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [historyItems, setHistoryItems] = useState(INITIAL_HISTORY);
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [popupPos, setPopupPos] = useState<{ x: number, y: number } | null>(null); // 弹窗屏幕位置
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<any>({
    name: 'BUILDING 1',
    type: 'Select a building on map',
    Age: '-',
    Height: '-',
    structure: '-',
    style: '-'
  });
  
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('3d');
  const [zoomLevel, setZoomLevel] = useState<number>(12);

  const toggleLayer = (layerId: string) => {
    setActiveLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(l => l !== layerId) 
        : [...prev, layerId]
    );
  };

  const toggleBasemap = () => {
    const map = mapRef.current;
    if (!map) return;

    setShowBasemap(prev => !prev);
    
    const newState = !showBasemap;
    
    if (map.getStyle()) {
      const style = map.getStyle();
      if (style && style.layers) {
        style.layers.forEach(layer => {
          try {
            map.setLayoutProperty(layer.id, 'visibility', newState ? 'visible' : 'none');
          } catch (e) {
            console.log('Error setting layer visibility:', layer.id, e);
          }
        });
      }
      
      // 设置背景颜色
      if (!newState) {
        map.addLayer({
          id: 'white-background',
          type: 'background',
          paint: { 'background-color': '#ffffff' }
        }, 'background');
      } else {
        try {
          map.removeLayer('white-background');
        } catch (e) {
          console.log('Error removing white background:', e);
        }
      }
    }
  };

  const toggleViewMode = () => {
    const newMode = viewMode === '3d' ? '2d' : '3d';
    setViewMode(newMode);
    
    const map = mapRef.current;
    if (!map) return;
    
    if (newMode === '2d') {
      // Switch to 2D view
      map.setPitch(0);
      map.setBearing(0);
      if (map.getLayer('building-3d')) {
        map.setLayoutProperty('building-3d', 'visibility', 'none');
      }
    } else {
      // Switch to 3D view
      map.setPitch(60);
      map.setBearing(45);
      if (map.getLayer('building-3d')) {
        map.setLayoutProperty('building-3d', 'visibility', activeLayers.includes('building') ? 'visible' : 'none');
      }
    }
  };

  const handleZoomChange = (zoom: number) => {
    setZoomLevel(zoom);
    const map = mapRef.current;
    if (!map) return;
    
    map.setZoom(zoom);
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
          container: mapContainer.current,
          style: 'https://api.maptiler.com/maps/toner/style.json?key=JmIyKqynNt3GiLy1siqz',
          center: SHANGHAI_CENTER,
          zoom: 12,
          preserveDrawingBuffer: true // ⭐ 必须加
        });

    map.on('load', () => {
      mapRef.current = map;
      console.log('Map loaded successfully');
      
      // 按照堆叠顺序添加：Landuse -> Water -> Street -> Building
      
      // 1. Landuse (Bottom)
      try {
        console.log('Loading landuse.geojson...');
        fetch('https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/landuse.geojson')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log('landuse.geojson fetched successfully, features count:', data.features.length);
            map.addSource('landuse', { type: 'geojson', data });
            map.addLayer({
              id: 'landuse',
              type: 'fill',
              source: 'landuse',
              layout: { visibility: activeLayers.includes('landuse') ? 'visible' : 'none' },
              paint: {
                'fill-color': [
                  'match', ['get', 'type'],
                  '居住用地', '#fdae61',
                  '工业用地', '#d7191c',
                  '公园与绿地用地', '#1a9641',
                  '商务办公用地', '#2b83ba',
                  '教育科研用地', '#abdda4',
                  '商业服务用地', '#f46d43',
                  '行政办公用地', '#8073ac',
                  '体育与文化用地', '#ffff99',
                  '医疗卫生用地', '#d9ef8b',
                  '机场设施用地', '#bdbdbd',
                  '交通场站用地', '#636363',
                  '#e5e7eb'
                ],
                'fill-opacity': 0.2
              }
            });
            console.log('landuse.geojson loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading landuse layer:', error);
          });
      } catch (error) {
        console.error('Error loading landuse layer:', error);
      }

      // 2. Waterbodies
      try {
        console.log('Loading waterbodies.geojson...');
        fetch('https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/waterbodies.geojson')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log('waterbodies.geojson fetched successfully, features count:', data.features.length);
            map.addSource('waterbodies', { type: 'geojson', data });
            map.addLayer({
              id: 'waterbodies',
              type: 'fill',
              source: 'waterbodies',
              layout: { visibility: activeLayers.includes('waterbodies') ? 'visible' : 'none' },
              paint: {
                'fill-color': '#59bdffff',
                'fill-opacity': 0.6
              }
            });
            console.log('waterbodies.geojson loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading waterbodies layer:', error);
          });
      } catch (error) {
        console.error('Error loading waterbodies layer:', error);
      }

      // 3. Street
      try {
        console.log('Loading street.geojson...');
        fetch('https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/street.geojson')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log('street.geojson fetched successfully, features count:', data.features.length);
            map.addSource('street', { type: 'geojson', data });
            map.addLayer({
              id: 'street',
              type: 'fill',
              source: 'street',
              layout: { visibility: activeLayers.includes('street') ? 'visible' : 'none' },
              paint: {
                'fill-color': [
                  'match', ['get', 'Type'],
                  '支路', '#f3f4f6',
                  '中心城区道路', '#e5e7eb',
                  '主干道路', '#d1d5db',
                  '中心城区主要道路', '#d1d5db',
                  '郊县中心城区主干道路', '#d1d5db',
                  '快速路', '#9ca3af',
                  '快速路匝道', '#9ca3af',
                  '高速', '#6b7280',
                  '高速公路匝道', '#6b7280',
                  '公路', '#4b5563',
                  '#e5e7eb'
                ],
                'fill-opacity': 0.8
              }
            });
            console.log('street.geojson loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading street layer:', error);
          });
      } catch (error) {
        console.error('Error loading street layer:', error);
      }

      // 4. Building (Top)

      try {
        console.log('Loading building.geojson...');
        fetch('https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/building.geojson')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log('building.geojson fetched successfully, features count:', data.features.length);
            data.features.forEach((f: any, i: number) => {
              f.id = i; // 👈 必须：给 feature 一个唯一 id
            });

            map.addSource('building', {
              type: 'geojson',
              data
            });

            map.addLayer({
              id: 'building-3d',
              type: 'fill-extrusion',
              source: 'building',
              layout: {
                visibility: activeLayers.includes('building') ? 'visible' : 'none'
              },
              paint: {
                'fill-extrusion-color': [
                  'match', ['get', 'Function'],
                  'Residence', '#fdc086',
                  'Office', '#8da0cb',
                  'Business', '#fc8d62',
                  'Industry', '#e78ac3',
                  'Public service', '#a6d854',
                  'Other', '#bdbdbd',
                  '#cccccc'
                ],
                'fill-extrusion-height': [
                  'coalesce',
                  ['get', 'Height'],
                  10
                ],
                'fill-extrusion-base': 0,
                'fill-extrusion-opacity': 0.9
              }
            });
            console.log('building-3d layer added successfully');
          })
          .catch((error) => {
            console.error('Error loading building layer:', error);
          });
      } catch (error) {
        console.error('Error loading building layer:', error);
      }
      // 5. LST 热力图
      try {
        console.log('Loading LST_heatmap.png...');
        map.addSource('lst-heatmap', {
          type: 'image',
          url: '/data/fig/LST_heatmap.png',
          coordinates: [
            [120.81495609, 31.89777115],
            [122.26879924, 31.89777115],
            [122.26879924, 30.65364428],
            [120.81495609, 30.65364428]
          ]
        });
        map.addLayer({
          id: 'lst-heatmap',
          type: 'raster',
          source: 'lst-heatmap',
          layout: {
          visibility: activeLayers.includes('lst-heatmap') ? 'visible' : 'none'
          },
          paint: {
            'raster-opacity': 0.3
          }
        });
        console.log('LST_heatmap.png loaded successfully');
      } catch (error) {
        console.error('Error loading lst-heatmap layer:', error);
      }
      
      // - grid（最底层虚线轮廓）
      try {
        console.log('Loading grid.geojson...');
        fetch('https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/grid.geojson')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log('grid.geojson fetched successfully, features count:', data.features.length);
            map.addSource('grid', { type: 'geojson', data });

            map.addLayer(
              {
                id: 'grid-outline',
                type: 'line',
                source: 'grid',
                layout: {
                  visibility: activeLayers.includes('grid') ? 'visible' : 'none'
                },
                paint: {
                  'line-color': '#9ca3af',
                  'line-width': 1,
                  'line-dasharray': [1, 3]
                }
              }
            );
            console.log('grid.geojson loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading grid layer:', error);
          });
      } catch (error) {
        console.error('Error loading grid layer:', error);
      }

      // —— click building
      map.on('click', 'building-3d', (e) => {
        if (!e.features || e.features.length === 0) return;

        const feature = e.features[0];
        const props = feature.properties as any;

        anchorRef.current = e.lngLat;
        setPopupPos(e.point);

        setSelectedBuilding({
          name: `BUILDING ${feature.id}`,
          type: props.Function ?? 'Unknown',
          Age: props.Age ?? 'Unknown',
          Height: `${Number(props.Height ?? 10).toFixed(2)} m`,
          structure: props.Structure ?? 'Unknown',
          style: props.Style ?? 'Unknown'
        });

        setIsCommentOpen(true);
      });

      // —— popup 跟随地图移动
      map.on('move', () => {
        if (anchorRef.current && mapRef.current) {
          setPopupPos(mapRef.current.project(anchorRef.current));
        }
      });

      // —— hover 高亮
      let hoveredStateId: number | null = null;

      map.on('mousemove', 'building-3d', (e) => {
        if (!e.features || e.features.length === 0) return;

        map.getCanvas().style.cursor = 'pointer';

        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: 'building', id: hoveredStateId },
            { hover: false }
          );
        }

        hoveredStateId = e.features[0].id as number;

        map.setFeatureState(
          { source: 'building', id: hoveredStateId },
          { hover: true }
        );
      });

      map.on('mouseleave', 'building-3d', () => {
        map.getCanvas().style.cursor = '';
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: 'building', id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
      });
    });

    map.on('error', (e) => {
        console.error('Map error:', e.error);
        if (e.error && e.error.message) {
          console.error('Error message:', e.error.message);
        }
        if (e.error && e.error.stack) {
          console.error('Error stack:', e.error.stack);
        }
      });

      // 监听地图缩放事件，更新 zoomLevel 状态
      map.on('zoom', () => {
        setZoomLevel(map.getZoom());
      });

      return () => map.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    
    // 强制地图在挂载后重新计算容器大小
    const timer = setTimeout(() => {
      mapRef.current?.resize();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 监听图层切换叠加逻辑
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;

    const layers = ['building-3d', 'landuse', 'street', 'waterbodies','lst-heatmap', 'grid-outline'];
    layers.forEach(layerId => {
      if (map.getLayer(layerId)) {
        const key = layerId === 'building-3d' ? 'building' : layerId === 'grid-outline' ? 'grid' : layerId;
        const isVisible = activeLayers.includes(key);
        map.setLayoutProperty(layerId, 'visibility', isVisible ? 'visible' : 'none');
      }
    });
  }, [activeLayers]);
  const captureMapScreenshot = (): string | null => {
    const map = mapRef.current;
    if (!map) return null;

    const canvas = map.getCanvas();
    return canvas.toDataURL('image/png');
  };

  const handleGenerate = async () => {
    if (!userInput && comments.length === 0) return;
    setIsGenerating(true);

    setTimeout(() => {
      const screenshot = captureMapScreenshot();

      const newHistoryItem = {
        id: Date.now(),
        title: "History",
        desc: userInput || "Generated based on urban analysis",
        img: screenshot ?? '' // ⭐ 用地图截图
      };

      setHistoryItems(prev => [newHistoryItem, ...prev]);
      setUserInput('');
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="flex h-full w-full bg-white overflow-hidden font-sans select-none">


      
      {/* 1. Left Sidebar */}
      <div className="w-[100px] bg-[#8247e5] flex flex-col items-center py-6 z-50 shadow-2xl shrink-0 h-full">
        <div className="w-12 h-12 rounded-full border-[3px] border-white/40 flex items-center justify-center mb-10">
          <div className="w-6 h-6 rounded-full bg-white shadow-inner"></div>
        </div>
        
        <div className="flex-1 flex flex-col gap-5 items-center text-white/70 overflow-y-auto">
        <SidebarItem 
          icon={<Building2 size={26} />} 
          active={activeLayers.includes('building')} 
          onClick={() => toggleLayer('building')}
        />
        <SidebarItem 
          icon={<Navigation size={26} className="rotate-45" />} 
          active={activeLayers.includes('street')} 
          onClick={() => toggleLayer('street')}
        />
        <SidebarItem 
          icon={<TreePine size={26} />} 
          active={activeLayers.includes('landuse')} 
          onClick={() => toggleLayer('landuse')}
        />
        <SidebarItem 
          icon={<Waves size={26} />} 
          active={activeLayers.includes('waterbodies')} 
          onClick={() => toggleLayer('waterbodies')}
        />
        <SidebarItem 
          icon={<ThermometerSun size={26} />} 
          active={activeLayers.includes('lst-heatmap')} 
          onClick={() => toggleLayer('lst-heatmap')}
        />
        <SidebarItem 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>} 
          active={activeLayers.includes('grid')} 
          onClick={() => toggleLayer('grid')}
        />
        <SidebarItem 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>} 
          active={showBasemap} 
          onClick={() => {
            setShowBasemap(!showBasemap);
            const map = mapRef.current;
            if (map) {
              map.setLayoutProperty('osm', 'visibility', !showBasemap ? 'visible' : 'none');
            }
          }}
        />
      </div>
      </div>

      {/* 2. Main Viewport */}
      <div className="flex-1 relative flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-30 px-10 flex justify-end items-center border-b border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-800 font-bold text-lg tracking-tight">Regeneration Dashboard</span>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-[#8247e5]">
              <Building2 size={22} />
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div ref={mapContainer} className="absolute inset-0 z-0 bg-[#e5e7eb]" />

          {/* Building Details Card - 动态跟随建筑 */}
          <div 
            className="relative z-30 pointer-events-none transition-all duration-75"
            style={{ 
              left: popupPos ? `${popupPos.x}px` : '50%',
              top: popupPos ? `${popupPos.y}px` : '50%',
              transform: popupPos ? 'translate(-16px, -100%)' : 'translate(-50%, -50%)',
              display: popupPos ? 'block' : 'none'
            }}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-56 overflow-hidden pointer-events-auto transition-all duration-300">
               <div className="bg-[#8247e5] text-white p-3 flex items-center gap-2">
                 <Building2 size={16} />
                 <span className="text-[11px] font-extrabold uppercase tracking-widest">{selectedBuilding.name}</span>
               </div>
               <div className="p-4 space-y-3">
                 <div className="text-[11px] text-[#8247e5] font-bold border-b border-purple-50 pb-1">{selectedBuilding.type}</div>
                 <div className="text-[11px] text-[#8247e5] font-bold border-b border-purple-50 pb-1">{selectedBuilding.Age} | {selectedBuilding.Height}</div>
                 <div className="text-[11px] text-[#8247e5] font-bold border-b border-purple-50 pb-1">{selectedBuilding.structure}</div>
                 <div className="text-[11px] text-[#8247e5] font-bold italic">{selectedBuilding.style}</div>
               </div>
            </div>
            {/* L型装饰尾部 */}
            <div className="w-12 h-12 border-l-4 border-b-4 border-[#8247e5]/30 ml-4 -mt-2"></div>
          </div>

          {/* Left Comments Panel */}
          {isCommentOpen && (
          <div className="absolute top-24 left-8 z-30 w-[320px] bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-7 border border-white">
             <div className="flex justify-between items-center mb-6 px-2">
                <X size={20} className="text-gray-300 hover:text-gray-500 cursor-pointer transition-colors" onClick={() => setIsCommentOpen(false)}/>
                {/* onClick={() => { setPopupPos(null); anchorRef.current = null; }}  */}
                <h3 className="font-extrabold text-gray-800 text-base">Comments ({comments.length})</h3>
                <div className="w-5" />
             </div>
             
             <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-4 p-3.5 rounded-[1.5rem] border border-transparent hover:border-purple-50 hover:bg-purple-50/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                      {c.avatar === 'P' ? <User size={22} className="text-blue-500" /> : <MessageSquare size={22} className="text-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className="font-extrabold text-[12px] text-gray-800">{c.user}</span>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-[10px] font-bold text-gray-400">{c.rating}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-medium">{c.text}</p>
                    </div>
                  </div>
                ))}
             </div>

             <div className="flex gap-4">
               <button className="flex-1 bg-gray-50 text-gray-400 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-colors">Advanced</button>
               <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex-1 bg-[#8247e5] text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-purple-100 hover:bg-purple-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
               >
                 {isGenerating ? <Loader2 size={16} className="animate-spin" /> : "Generate"}
               </button>
             </div>
          </div>)}

          {/* Bottom Input Bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-2/3 z-40">
            <div className="bg-purple-100/90 backdrop-blur-xl rounded-full p-2.5 flex items-center gap-4 shadow-2xl border-2 border-white/50">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                placeholder="Suggest a transformation for the selected building..." 
                className="flex-1 bg-transparent px-8 py-3 outline-none text-purple-900 placeholder:text-purple-300 font-bold text-base"
              />
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-[#8247e5] text-white px-12 py-3.5 rounded-full font-black text-sm shadow-xl hover:bg-purple-600 transition-all active:scale-95 flex items-center gap-2"
              >
                {isGenerating && <Loader2 size={18} className="animate-spin" />}
                Enter
              </button>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-12 right-12 z-40 flex flex-col items-center gap-6">
             {/* Basemap Toggle */}
             <button 
               onClick={toggleBasemap}
               className={`w-20 h-12 rounded-xl shadow-lg border-2 border-white flex items-center justify-center transition-all ${showBasemap ? 'bg-[#8247e5] text-white' : 'bg-white text-gray-400 hover:text-[#8247e5]'}`}
             >
               {showBasemap ? 'MAP' : 'OFF'}
             </button>
             
             {/* View Mode Toggle */}
             <button 
               onClick={toggleViewMode}
               className={`w-20 h-12 rounded-xl shadow-lg border-2 border-white flex items-center justify-center transition-all ${viewMode === '3d' ? 'bg-[#8247e5] text-white' : 'bg-white text-gray-400 hover:text-[#8247e5]'}`}
             >
               {viewMode === '3d' ? '3D' : '2D'}
             </button>
             
             {/* Zoom Level Slider */}
             <div className="bg-white/80 backdrop-blur rounded-full w-2 h-24 relative shadow-inner border border-gray-100 flex items-center">
                <div className="absolute top-0 w-3 h-[1px] bg-gray-300"></div>
                <div className="absolute bottom-0 w-3 h-[1px] bg-gray-300"></div>
                <input
                  type="range"
                  min="8"
                  max="18"
                  step="0.5"
                  value={zoomLevel}
                  onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
                  className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer"
                  style={{
                    writingMode: 'bt-lr',
                    direction: 'rtl',
                    WebkitAppearance: 'slider-vertical',
                    MozAppearance: 'slider-vertical',
                    appearance: 'slider-vertical'
                  }}
                />
             </div>
              
             {/* Zoom Controls */}
             <div className="flex flex-col gap-3">
               <button onClick={() => {
                 const newZoom = zoomLevel + 1;
                 setZoomLevel(newZoom);
                 mapRef.current?.setZoom(newZoom);
               }} className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-400 hover:text-[#8247e5] transition-all"><Plus size={24}/></button>
               <button onClick={() => {
                 const newZoom = zoomLevel - 1;
                 setZoomLevel(newZoom);
                 mapRef.current?.setZoom(newZoom);
               }} className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-400 hover:text-[#8247e5] transition-all"><Minus size={24}/></button>
             </div>
          </div>
        </div>
      </div>

      {/* 5. Right Panel - History */}
      <div className={`relative bg-white border-l border-gray-50 transition-all duration-500 flex flex-col z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.02)] ${isRightPanelOpen ? 'w-[300px]' : 'w-0'}`}>
        
        <button 
          onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
          className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-24 bg-white border border-gray-100 border-r-0 rounded-l-[2rem] flex items-center justify-center shadow-[-5px_0_15px_rgba(0,0,0,0.05)] text-gray-300 hover:text-[#8247e5] transition-colors"
        >
          {isRightPanelOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>

        {isRightPanelOpen && (
          <>
            <div className="p-7 border-b border-gray-50 flex justify-between items-center">
              <h2 className="text-[#8247e5] font-black text-sm uppercase tracking-widest">History Log</h2>
              <X size={18} className="text-gray-200 cursor-pointer hover:text-gray-400 transition-colors" onClick={() => setIsRightPanelOpen(false)} />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {historyItems.map(item => (
                <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-50 cursor-pointer hover:shadow-xl transition-all">
                  <div className="h-32 bg-gray-100 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-black">
                    {item.title}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[9px] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </div>
                  <div className="absolute top-3 right-3 text-yellow-400 drop-shadow-md">
                    <Star size={18} className="fill-yellow-400" />
                  </div>
                  <div className="absolute inset-0 border-[5px] border-transparent group-hover:border-[#8247e5]/30 rounded-2xl transition-all"></div>
                </div>
              ))}
            </div>

            <div className="p-7 space-y-4 bg-gray-50/50">
              <div className="flex justify-center">
                <ChevronDown size={28} className="text-purple-200 animate-bounce" />
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-white text-gray-800 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#8247e5] hover:text-white transition-all shadow-xl shadow-gray-100/50 border border-gray-100"
              >
                REGENERATE
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .maplibregl-canvas { outline: none !important; }
        
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

const SidebarItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 group cursor-pointer transition-all ${
      active ? 'text-white' : 'hover:text-white'
    }`}
  >
    <div className={`p-2 rounded-xl transition-all ${
      active ? 'bg-white/20 shadow-lg' : 'group-hover:bg-white/10'
    }`}>
      {icon}
    </div>
    <span className="text-[15px] font-bold [writing-mode:vertical-rl] tracking-[0.2em] leading-tight">
      {label}
    </span>
  </div>
);

export default URplatform;
