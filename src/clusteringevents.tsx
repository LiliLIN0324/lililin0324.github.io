import React, { useState, useRef, useEffect } from 'react';
import exifr from 'exifr';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Reorder, motion, AnimatePresence } from 'framer-motion';

// Fix Leaflet icon issue
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export interface Photo {
  id: string;
  file: File;
  url: string;
  timestamp: number;
  mimeType: string;
  location?: {
    lat: number;
    lng: number;
  };
  ip?: string;
}

export enum EventCategory {
  FOOD = 'Food & Dining',
  ACADEMIC = 'Academic & Professional',
  NATURE = 'Nature & Outdoors',
  CITY = 'Urban & City Walk',
  FAMILY = 'Family & Friends',
  ART = 'Art & Culture',
  OTHER = 'General Event'
}

export interface SmartEvent {
  id: string;
  title: string;
  category: EventCategory;
  description: string;
  photos: Photo[];
  visualTags: string[];
  startTime: number;
  endTime: number;
  isAnalyzing: boolean;
  isAnalyzed: boolean;
  centerLocation?: {
    lat: number;
    lng: number;
  };
  clusterIp?: string;
  // Hierarchical clustering fields
  microEvents?: SmartEvent[];
  duration?: number;
  isMacro?: boolean;
  fusionReason?: string;
  // User customizations
  userTitle?: string;
  userDescription?: string;
}

export interface AnalysisResult {
  title: string;
  description: string;
  visualTags: string[];
}

interface EventCardProps {
  event: SmartEvent;
  onAnalyze: (event: SmartEvent) => void;
  onUpdateEvent: (id: string, updates: Partial<SmartEvent>) => void;
  onSplit: (id: string) => void;
  onSelect: (id: string) => void;
  onReorderPhotos: (id: string, newPhotos: Photo[]) => void;
  onMovePhoto: (photoId: string, fromEventId: string, toEventId: string) => void;
  isSelected: boolean;
  selectionMode: boolean;
}

const getCategoryColor = (cat: EventCategory) => {
  switch (cat) {
    case EventCategory.FOOD: return 'bg-[#ff5f1f]/10 text-[#ff5f1f] border-[#ff5f1f]/30 shadow-[0_0_15px_rgba(255,95,31,0.2)]';
    case EventCategory.ACADEMIC: return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30 shadow-[0_0_15px_rgba(0,212,255,0.2)]';
    case EventCategory.NATURE: return 'bg-[#39ff14]/10 text-[#39ff14] border-[#39ff14]/30 shadow-[0_0_15px_rgba(57,255,20,0.2)]';
    case EventCategory.CITY: return 'bg-[#bc13fe]/10 text-[#bc13fe] border-[#bc13fe]/30 shadow-[0_0_15px_rgba(188,19,254,0.2)]';
    case EventCategory.FAMILY: return 'bg-[#ff31b8]/10 text-[#ff31b8] border-[#ff31b8]/30 shadow-[0_0_15px_rgba(255,49,184,0.2)]';
    case EventCategory.ART: return 'bg-[#ff073a]/10 text-[#ff073a] border-[#ff073a]/30 shadow-[0_0_15px_rgba(255,7,58,0.2)]';
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  }
};

// 智能颜色生成器 - 为每个事件生成独特的颜色
const generateEventColor = (eventId: string): string => {
  // 使用事件ID作为种子生成一致的颜色
  let hash = 0;
  for (let i = 0; i < eventId.length; i++) {
    hash = eventId.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // 使用黄金比例来确保色相分布均匀
  const goldenRatio = 0.618033988749895;
  const hue = (hash * goldenRatio * 360) % 360;
  
  // 生成HSL颜色，确保足够的饱和度和亮度
  const saturation = 70 + (Math.abs(hash % 30)); // 70-100%
  const lightness = 50 + (Math.abs(hash % 20)); // 50-70%
  
  return `hsl(${Math.abs(hue)}, ${saturation}%, ${lightness}%)`;
};

// 生成适合事件卡片的颜色样式
const getEventColorStyle = (eventId: string): string => {
  const baseColor = generateEventColor(eventId);
  return `bg-opacity-10 border-opacity-30 text-opacity-90`;
};

// 类别默认颜色（备用）
const getCategoryHexColor = (cat: EventCategory) => {
  switch (cat) {
    case EventCategory.FOOD: return '#ff5f1f'; // 霓虹橙 - 活力
    case EventCategory.ACADEMIC: return '#00d4ff'; // 霓虹蓝 - 专业
    case EventCategory.NATURE: return '#39ff14'; // 霓虹绿 - 自然
    case EventCategory.CITY: return '#bc13fe'; // 霓虹紫 - 城市
    case EventCategory.FAMILY: return '#ff31b8'; // 霓虹粉 - 亲情
    case EventCategory.ART: return '#ff073a'; // 霓虹红 - 艺术
    default: return '#94a3b8'; // 蓝灰 - 其他
  }
};

const MapBoundsAdjuster = ({ events }: { events: SmartEvent[] }) => {
  const map = useMap();
  
  useEffect(() => {
    if (events.length > 0) {
      const locations = events
        .filter(e => e.centerLocation)
        .map(e => [e.centerLocation!.lat, e.centerLocation!.lng] as [number, number]);
      
      if (locations.length > 0) {
        const bounds = L.latLngBounds(locations);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [events, map]);
  
  return null;
};

// Removed MetaballPane as we are switching to layered transparency for better visual clarity

export const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  onAnalyze, 
  onUpdateEvent, 
  onSplit, 
  onSelect, 
  onReorderPhotos,
  onMovePhoto,
  isSelected, 
  selectionMode 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPhotoManager, setShowPhotoManager] = useState(true);
  const [tempTitle, setTempTitle] = useState(event.userTitle || event.title);
  const [tempDesc, setTempDesc] = useState(event.userDescription || event.description);
  const [draggedPhoto, setDraggedPhoto] = useState<Photo | null>(null);

  const dateStr = new Date(event.startTime).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  
  const timeStr = new Date(event.startTime).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleSave = () => {
    onUpdateEvent(event.id, { userTitle: tempTitle, userDescription: tempDesc });
    setIsEditing(false);
  };

  const handleReorder = (newPhotos: Photo[]) => {
    onReorderPhotos(event.id, newPhotos);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative group bg-slate-900/40 backdrop-blur-3xl border rounded-[3rem] overflow-hidden transition-all duration-700 flex flex-col md:flex-row mb-12 ${
        isSelected 
          ? 'border-blue-500/50 shadow-[0_0_100px_rgba(59,130,246,0.2)] scale-[1.02] z-10' 
          : 'border-white/[0.05] hover:border-white/10 hover:bg-slate-900/60'
      }`}
    >
      {/* Dynamic Glow Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${generateEventColor(event.id)}15 0%, transparent 80%)`
        }}
      />
      
      {/* Selection Border Glow */}
      {isSelected && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-[3rem] border border-blue-400/20 shadow-[inset_0_0_40px_rgba(59,130,246,0.1)]"
        />
      )}
      {selectionMode && (
        <div 
          onClick={() => onSelect(event.id)}
          className="absolute top-8 left-8 z-20 w-8 h-8 rounded-2xl border-2 border-white/10 cursor-pointer flex items-center justify-center bg-slate-950/60 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300"
        >
          {isSelected && (
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-4 h-4 rounded-lg bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]" 
            />
          )}
        </div>
      )}

      {/* Photo Preview Section - Horizontal Sequence View */}
      <div 
        className="md:w-1/2 lg:w-2/5 p-5 bg-slate-950/40 relative overflow-hidden"
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (draggedPhoto && draggedPhoto.id) {
            onMovePhoto(draggedPhoto.id, event.id, event.id);
          }
        }}
      >
        <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar" style={{ maxHeight: '320px' }}>
          {event.photos.map((photo, index) => (
            <div 
              key={photo.id}
              draggable
              onDragStart={(e) => {
                setDraggedPhoto(photo);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onDragEnd={() => setDraggedPhoto(null)}
              className="relative flex-shrink-0 w-48 h-64 rounded-2xl overflow-hidden bg-slate-900/80 group/photo cursor-grab active:cursor-grabbing shadow-2xl border border-white/5 hover:border-white/10 transition-all hover:scale-105"
            >
              <img 
                src={photo.url} 
                alt={`Photo ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover/photo:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] font-black text-white truncate">{photo.file.name}</p>
                <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-wider">
                  {new Date(photo.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-950/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-black text-white">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 lg:w-3/5 p-10 flex flex-col justify-between relative overflow-hidden">
        {event.isAnalyzing && (
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" 
            />
        )}

        <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-[0.4em] mb-1.5">{dateStr}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{timeStr}</span>
              </div>
              <div className="flex gap-4 items-center">
                {event.isAnalyzed && (
                     <span 
                       className="px-5 py-2 rounded-2xl text-[9px] font-black tracking-[0.2em] uppercase border backdrop-blur-3xl transition-all duration-700"
                       style={{
                         backgroundColor: `${generateEventColor(event.id)}15`,
                         borderColor: `${generateEventColor(event.id)}30`,
                         color: generateEventColor(event.id),
                         boxShadow: `0 0 15px ${generateEventColor(event.id)}20`
                       }}
                     >
                     {event.category}
                   </span>
                )}
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-3 text-slate-500 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-500 group/edit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover/edit:scale-110">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
              </div>
          </div>
            
            {isEditing ? (
              <div className="space-y-5 mb-8">
                <input 
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] px-6 py-4 text-white font-black text-2xl outline-none focus:border-blue-500/40 focus:bg-white/[0.05] transition-all"
                  placeholder="Event Title"
                />
                <textarea 
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] px-6 py-4 text-slate-300 text-sm outline-none focus:border-blue-500/40 focus:bg-white/[0.05] min-h-[120px] transition-all leading-relaxed"
                  placeholder="Tell your story..."
                />
                <div className="flex items-center justify-between pt-2">
                  <button 
                    onClick={() => setShowPhotoManager(!showPhotoManager)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-blue-300 flex items-center gap-2.5 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:scale-110">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    {showPhotoManager ? 'Hide Details' : 'Sort Photos'}
                  </button>
                  <div className="flex gap-4">
                    <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Cancel</button>
                    <button onClick={handleSave} className="px-7 py-2.5 text-[11px] font-black uppercase tracking-widest bg-blue-600 text-white rounded-full hover:bg-blue-500 shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all">Update</button>
                  </div>
                </div>

                <AnimatePresence>
                  {showPhotoManager && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-8 pt-8 border-t border-white/[0.05]"
                    >
                      <Reorder.Group axis="y" values={event.photos} onReorder={handleReorder} className="space-y-4 max-h-80 overflow-y-auto pr-4 custom-scrollbar">
                        {event.photos.map((photo) => (
                          <Reorder.Item 
                            key={photo.id} 
                            value={photo}
                            className="flex items-center gap-5 p-4 bg-white/[0.02] rounded-2xl border border-white/[0.03] cursor-grab active:cursor-grabbing hover:bg-white/[0.05] hover:border-white/10 transition-all"
                          >
                            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-2xl border border-white/5">
                              <img src={photo.url} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-black text-slate-200 truncate tracking-tight">{photo.file.name}</p>
                              <p className="text-[10px] text-slate-500 font-bold mt-1.5 uppercase tracking-wider">{new Date(photo.timestamp).toLocaleTimeString()}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-700">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                          </Reorder.Item>
                        ))}
                      </Reorder.Group>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="space-y-5 mb-10">
                <h2 className={`text-4xl font-black tracking-tighter leading-tight ${event.isAnalyzed || event.userTitle ? 'text-white' : 'text-white/20 italic'}`}>
                    {event.userTitle || (event.isAnalyzed ? event.title : 'Discovery Cluster')}
                </h2>

                {event.isMacro && event.microEvents && event.microEvents.length > 1 && (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        Macro Event
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Fused from {event.microEvents.length} neural clusters
                      </span>
                    </div>
                    {event.fusionReason && (
                      <div className="relative pl-4 py-1 border-l-2 border-slate-800">
                        <span className="text-[11px] text-slate-500 font-medium italic leading-relaxed block">
                          &ldquo;{event.fusionReason}&rdquo;
                        </span>
                      </div>
                    )}
                  </div>
                )}
                
                <p className="text-slate-400 leading-relaxed text-[15px] font-medium max-w-xl">
                    {event.userDescription || (event.isAnalyzed ? event.description : `An unexplored collection of ${event.photos.length} moments. Start the neural analysis to reveal the story.`)}
                </p>
              </div>
            )}

            {event.isAnalyzed && event.visualTags && event.visualTags.length > 0 && (
              <div className="mb-10">
                <div className="flex flex-wrap gap-3">
                  {event.visualTags.slice(0, 8).map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/[0.05] hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300">
                      #{tag}
                    </span>
                  ))}
                  {event.visualTags.length > 8 && (
                    <span className="text-[10px] font-black text-slate-600 px-2 py-2 self-center">+{event.visualTags.length - 8}</span>
                  )}
                </div>
              </div>
            )}
        </div>

        <div className="flex items-center gap-8 pt-4">
            {!event.isAnalyzed && !event.isAnalyzing && (
                <button 
                  onClick={() => onAnalyze(event)}
                  className="group relative flex items-center gap-4 px-8 py-4 bg-white text-slate-950 hover:bg-blue-500 hover:text-white rounded-2xl font-black transition-all duration-500 text-[11px] uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813 2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>
                    Start Analysis
                </button>
            )}

            {event.photos.length > 1 && (
              <button 
                onClick={() => onSplit(event.id)}
                className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-300 group/split"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] group-hover/split:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                Split Cluster
              </button>
            )}

            {event.isAnalyzing && (
                 <div className="flex items-center gap-4 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
                    <div className="relative w-5 h-5">
                      <svg className="animate-spin h-5 w-5 absolute inset-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    Neural Mapping...
                 </div>
            )}
        </div>
      </div>
    </motion.div>
  );
};

const ClusteringEvents: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [events, setEvents] = useState<SmartEvent[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSelectedEvent = (id: string) => selectedEventIds.includes(id);

  const handleUpdateEvent = (id: string, updates: Partial<SmartEvent>) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e));
  };

  const handleReorderPhotos = (id: string, newPhotos: Photo[]) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, photos: newPhotos } : e));
  };

  const handleMovePhoto = (photoId: string, fromEventId: string, toEventId: string) => {
    if (fromEventId === toEventId) return;

    setEvents(prev => {
      const fromEvent = prev.find(e => e.id === fromEventId);
      const toEvent = prev.find(e => e.id === toEventId);
      
      if (!fromEvent || !toEvent) return prev;

      const photoToMove = fromEvent.photos.find(p => p.id === photoId);
      if (!photoToMove) return prev;

      const updatedFromEvent = {
        ...fromEvent,
        photos: fromEvent.photos.filter(p => p.id !== photoId),
        startTime: fromEvent.photos.length > 1 ? fromEvent.photos.find(p => p.id !== photoId)!.timestamp : fromEvent.startTime,
        endTime: fromEvent.photos.length > 1 ? fromEvent.photos.filter(p => p.id !== photoId)[fromEvent.photos.length - 2]?.timestamp : fromEvent.endTime
      };

      const updatedToEvent = {
        ...toEvent,
        photos: [...toEvent.photos, photoToMove].sort((a, b) => a.timestamp - b.timestamp),
        startTime: Math.min(toEvent.startTime, photoToMove.timestamp),
        endTime: Math.max(toEvent.endTime, photoToMove.timestamp)
      };

      return prev.map(e => {
        if (e.id === fromEventId) return updatedFromEvent;
        if (e.id === toEventId) return updatedToEvent;
        return e;
      });
    });
  };

  const handleSplitEvent = (id: string) => {
    const eventToSplit = events.find(e => e.id === id);
    if (!eventToSplit || eventToSplit.photos.length <= 1) return;

    const photos = eventToSplit.photos;
    const midPoint = Math.ceil(photos.length / 2);

    let bestSplitIndex = -1;
    let bestScore = 0;
    let bestDistance = 0;
    let bestIpChange = false;
    let bestTimeGap = 0;

    for (let i = 0; i < photos.length - 1; i++) {
      const p1 = photos[i];
      const p2 = photos[i + 1];

      let dist = 0;
      if (p1.location && p2.location) {
        dist = getDistance(
          p1.location.lat, p1.location.lng,
          p2.location.lat, p2.location.lng
        );
      }

      const ipChanged = !!p1.ip && !!p2.ip && p1.ip !== p2.ip;
      const timeGap = p2.timestamp - p1.timestamp;

      let score = dist;
      if (ipChanged) {
        score += 50;
      }
      if (timeGap > 30 * 60 * 1000) {
        score += timeGap / (60 * 1000);
      }

      if (score > bestScore) {
        bestScore = score;
        bestDistance = dist;
        bestIpChange = ipChanged;
        bestTimeGap = timeGap;
        bestSplitIndex = i + 1;
      }
    }

    let splitIndex = midPoint;
    const CROSS_CITY_DISTANCE_KM = 80;
    const LONG_JUMP_DISTANCE_KM = 30;
    const SIGNIFICANT_TIME_GAP = 2 * 60 * 60 * 1000;

    if (bestSplitIndex > 0) {
      if (bestDistance >= CROSS_CITY_DISTANCE_KM || 
          (bestDistance >= LONG_JUMP_DISTANCE_KM && bestIpChange) ||
          bestTimeGap >= SIGNIFICANT_TIME_GAP) {
        splitIndex = bestSplitIndex;
      }
    }

    const photos1 = photos.slice(0, splitIndex);
    const photos2 = photos.slice(splitIndex);

    const computeCenterLocation = (subset: Photo[]) => {
      const withLocation = subset.filter(p => p.location);
      if (withLocation.length === 0) return undefined;
      const sum = withLocation.reduce(
        (acc, p) => {
          return {
            lat: acc.lat + (p.location ? p.location.lat : 0),
            lng: acc.lng + (p.location ? p.location.lng : 0)
          };
        },
        { lat: 0, lng: 0 }
      );
      return {
        lat: sum.lat / withLocation.length,
        lng: sum.lng / withLocation.length
      };
    };

    const computeClusterIp = (subset: Photo[]) => {
      const photoWithIp = subset.find(p => p.ip && p.ip !== 'Unknown');
      return photoWithIp?.ip || eventToSplit.clusterIp;
    };

    const buildEventFromSubset = (subset: Photo[], suffix: string, overrides?: Partial<SmartEvent>): SmartEvent => {
      const startTime = subset[0].timestamp;
      const endTime = subset[subset.length - 1].timestamp;
      const centerLocation = computeCenterLocation(subset);
      const clusterIp = computeClusterIp(subset);
      
      const newEventId = Math.random().toString(36).substr(2, 9) + '-' + suffix;
      
      return {
        ...eventToSplit,
        ...overrides,
        id: newEventId,
        photos: subset,
        startTime,
        endTime,
        centerLocation,
        clusterIp,
        isMacro: false,
        microEvents: undefined,
        duration: endTime - startTime,
        fusionReason: undefined
      };
    };

    const newEvent1: SmartEvent = buildEventFromSubset(photos1, '1', {
      userTitle: eventToSplit.userTitle,
      userDescription: eventToSplit.userDescription
    });

    const newEvent2: SmartEvent = buildEventFromSubset(photos2, '2', {
      title: 'New Split Event',
      userTitle: 'New Split Event',
      userDescription: 'Split from a larger event.',
      isAnalyzed: false
    });

    setEvents(prev => {
      const index = prev.findIndex(e => e.id === id);
      const newEvents = [...prev];
      newEvents.splice(index, 1, newEvent1, newEvent2);
      return newEvents.sort((a, b) => a.startTime - b.startTime);
    });
  };

  const handleMergeEvents = () => {
    if (selectedEventIds.length < 2) return;

    const eventsToMerge = events.filter(e => selectedEventIds.includes(e.id));
    const otherEvents = events.filter(e => !selectedEventIds.includes(e.id));

    eventsToMerge.sort((a, b) => a.startTime - b.startTime);

    const mergedEvent: SmartEvent = {
      id: `merged-${Date.now()}`,
      title: 'Merged Story',
      userTitle: 'Our Combined Story',
      category: eventsToMerge[0].category,
      description: `A combined story of ${eventsToMerge.length} events.`,
      photos: eventsToMerge.flatMap(e => e.photos).sort((a, b) => a.timestamp - b.timestamp),
      visualTags: Array.from(new Set(eventsToMerge.flatMap(e => e.visualTags))),
      startTime: eventsToMerge[0].startTime,
      endTime: eventsToMerge[eventsToMerge.length - 1].endTime,
      isAnalyzing: false,
      isAnalyzed: eventsToMerge.some(e => e.isAnalyzed),
      isMacro: true,
      microEvents: eventsToMerge,
      fusionReason: 'Manual User Merge'
    };

    setEvents([mergedEvent, ...otherEvents].sort((a, b) => a.startTime - b.startTime));
    setSelectedEventIds([]);
  };

  const toggleSelectEvent = (id: string) => {
    setSelectedEventIds(prev => 
      prev.includes(id) ? prev.filter(eid => eid !== id) : [...prev, id]
    );
  };


  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    setIsProcessing(true);
    const newPhotos: Photo[] = [];
    
    // Get current IP as a baseline
    let currentIp = 'Unknown';
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      currentIp = data.ip;
    } catch (err) {
      console.warn('Failed to fetch IP:', err);
    }

    const fileArray = Array.from(fileList) as File[];
    for (const file of fileArray) {
      let location = undefined;
      try {
        const gps = await exifr.gps(file);
        if (gps) {
          location = { lat: gps.latitude, lng: gps.longitude };
        }
      } catch (err) {
        console.warn('Failed to extract GPS:', err);
      }

      const photo: Photo = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        url: URL.createObjectURL(file),
        timestamp: file.lastModified,
        mimeType: file.type,
        location,
        ip: currentIp
      };
      newPhotos.push(photo);
    }

    setPhotos(prev => [...prev, ...newPhotos]);

    setTimeout(() => {
      const clusteredEvents = clusterPhotosIntoEvents([...photos, ...newPhotos]);
      setEvents(clusteredEvents);
      setIsProcessing(false);
    }, 800);
  };

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const clusterPhotosIntoEvents = (photos: Photo[]): SmartEvent[] => {
    if (photos.length === 0) return [];

    // --- Step 1: Generate Micro-Events (Hard Constraints) ---
    const sortedPhotos = [...photos].sort((a, b) => a.timestamp - b.timestamp);
    const microEvents: SmartEvent[] = [];
    
    let firstPhoto = sortedPhotos[0];
    let currentMicro: SmartEvent = {
      id: Math.random().toString(36).substr(2, 9),
      photos: [firstPhoto],
      startTime: firstPhoto.timestamp,
      endTime: firstPhoto.timestamp,
      isAnalyzed: false,
      isAnalyzing: false,
      title: '',
      description: '',
      category: EventCategory.OTHER,
      visualTags: [],
      centerLocation: firstPhoto.location,
      clusterIp: firstPhoto.ip,
      duration: 0,
      isMacro: false
    };

    const MICRO_TIME_THRESHOLD = 1.5 * 60 * 60 * 1000; // 1.5 hours
    const MICRO_DISTANCE_THRESHOLD = 0.5; // 0.5 km (500m)

    for (let i = 1; i < sortedPhotos.length; i++) {
      const photo = sortedPhotos[i];
      const timeDiff = photo.timestamp - currentMicro.endTime;
      let distDiff = 0;
      
      if (photo.location && currentMicro.centerLocation) {
        distDiff = getDistance(
          photo.location.lat, photo.location.lng,
          currentMicro.centerLocation.lat, currentMicro.centerLocation.lng
        );
      }

      const ipChanged = photo.ip !== currentMicro.clusterIp;

      if (timeDiff < MICRO_TIME_THRESHOLD && distDiff < MICRO_DISTANCE_THRESHOLD && !ipChanged) {
        currentMicro.photos.push(photo);
        currentMicro.endTime = photo.timestamp;
        
        if (photo.location) {
          if (!currentMicro.centerLocation) {
            currentMicro.centerLocation = photo.location;
          } else {
            const count = currentMicro.photos.length;
            currentMicro.centerLocation = {
              lat: (currentMicro.centerLocation.lat * (count - 1) + photo.location.lat) / count,
              lng: (currentMicro.centerLocation.lng * (count - 1) + photo.location.lng) / count
            };
          }
        }
      } else {
        currentMicro.duration = currentMicro.endTime - currentMicro.startTime;
        microEvents.push(currentMicro);
        currentMicro = {
          id: Math.random().toString(36).substr(2, 9),
          photos: [photo],
          startTime: photo.timestamp,
          endTime: photo.timestamp,
          isAnalyzed: false,
          isAnalyzing: false,
          title: '',
          description: '',
          category: EventCategory.OTHER,
          visualTags: [],
          centerLocation: photo.location,
          clusterIp: photo.ip,
          duration: 0,
          isMacro: false
        };
      }
    }
    currentMicro.duration = currentMicro.endTime - currentMicro.startTime;
    microEvents.push(currentMicro);

    // --- Step 3: Hierarchical Agglomerative Merging (Soft Constraints) ---
    return mergeMicroToMacroEvents(microEvents);
  };

  const getJaccardSimilarity = (tags1: string[], tags2: string[]) => {
    if (tags1.length === 0 || tags2.length === 0) return 0;
    const s1 = new Set(tags1);
    const s2 = new Set(tags2);
    const intersection = new Set([...s1].filter(x => s2.has(x)));
    const union = new Set([...s1, ...s2]);
    return intersection.size / union.size;
  };

  const mergeMicroToMacroEvents = (micros: SmartEvent[]): SmartEvent[] => {
    if (micros.length <= 1) return micros;

    const macros: SmartEvent[] = [];
    let currentMacro: SmartEvent = { ...micros[0], isMacro: true, microEvents: [micros[0]], fusionReason: 'Initial Cluster' };

    const MACRO_TIME_THRESHOLD = 12 * 60 * 60 * 1000; // 12 hours soft gap
    const MACRO_DISTANCE_THRESHOLD = 50; // 50km (Travel range)
    const SEMANTIC_SIMILARITY_THRESHOLD = 0.4; // 40% tags overlap

    for (let i = 1; i < micros.length; i++) {
      const micro = micros[i];
      
      const timeGap = micro.startTime - currentMacro.endTime;
      let distGap = 0;
      if (micro.centerLocation && currentMacro.centerLocation) {
        distGap = getDistance(
          micro.centerLocation.lat, micro.centerLocation.lng,
          currentMacro.centerLocation.lat, currentMacro.centerLocation.lng
        );
      }

      // --- Fusion Possibilities (Merging Logic) ---
      
      const isSameDay = new Date(micro.startTime).toDateString() === new Date(currentMacro.endTime).toDateString();
      const withinTravelRange = distGap < MACRO_DISTANCE_THRESHOLD;
      const withinTimeWindow = timeGap < MACRO_TIME_THRESHOLD;
      
      // 1. Semantic Similarity Merge (Even if location/time gap is slightly larger)
      const semanticSim = getJaccardSimilarity(micro.visualTags, currentMacro.visualTags);
      const isSemanticallySimilar = semanticSim > SEMANTIC_SIMILARITY_THRESHOLD;

      // 2. IP Continuity (Stayed in same network)
      const sameNetwork = micro.clusterIp === currentMacro.clusterIp && micro.clusterIp !== 'Unknown';

      // --- Split Possibilities (Splitting Logic) ---
      
      // 1. "Night Gap" Split (Crosses midnight with a significant gap)
      const isNextDay = new Date(micro.startTime).getDate() !== new Date(currentMacro.endTime).getDate();
      const longGap = timeGap > 6 * 60 * 60 * 1000; // 6 hours
      const shouldSplitByNight = isNextDay && longGap;

      // 2. "Environment Shock" Split (Sudden huge distance + IP change)
      const environmentShock = distGap > 200 && micro.clusterIp !== currentMacro.clusterIp;

      // Decision Logic
      let shouldMerge = false;
      let reason = '';

      if (shouldSplitByNight) {
        shouldMerge = false;
      } else if (environmentShock) {
        shouldMerge = false;
      } else if (withinTimeWindow && withinTravelRange) {
        shouldMerge = true;
        reason = 'Temporal & Spatial Continuity';
      } else if (isSameDay && withinTravelRange) {
        shouldMerge = true;
        reason = 'Same Day Activity';
      } else if (isSemanticallySimilar && withinTravelRange) {
        shouldMerge = true;
        reason = 'Visual Semantic Similarity';
      } else if (sameNetwork && withinTimeWindow) {
        shouldMerge = true;
        reason = 'Network Continuity (Same Wi-Fi)';
      }

      if (shouldMerge) {
        currentMacro.photos = [...currentMacro.photos, ...micro.photos];
        currentMacro.endTime = Math.max(currentMacro.endTime, micro.endTime);
        currentMacro.microEvents = [...(currentMacro.microEvents || []), micro];
        currentMacro.visualTags = Array.from(new Set([...currentMacro.visualTags, ...micro.visualTags]));
        currentMacro.fusionReason = reason;
        
        if (micro.centerLocation) {
          if (!currentMacro.centerLocation) {
            currentMacro.centerLocation = micro.centerLocation;
          } else {
            const totalPhotos = currentMacro.photos.length;
            const microPhotos = micro.photos.length;
            const prevPhotos = totalPhotos - microPhotos;
            currentMacro.centerLocation = {
              lat: (currentMacro.centerLocation.lat * prevPhotos + micro.centerLocation.lat * microPhotos) / totalPhotos,
              lng: (currentMacro.centerLocation.lng * prevPhotos + micro.centerLocation.lng * microPhotos) / totalPhotos
            };
          }
        }
      } else {
        currentMacro.duration = currentMacro.endTime - currentMacro.startTime;
        macros.push(currentMacro);
        currentMacro = { ...micro, isMacro: true, microEvents: [micro], fusionReason: 'New Activity Sequence' };
      }
    }
    
    currentMacro.duration = currentMacro.endTime - currentMacro.startTime;
    macros.push(currentMacro);
    return macros;
  };

  const handleAnalyzeEvent = async (event: SmartEvent) => {
    setEvents(prev => prev.map(e => e.id === event.id ? { ...e, isAnalyzing: true } : e));
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const results: Record<string, AnalysisResult> = {
      'merged': { title: 'Travel Journey', description: 'A collection of memories across multiple locations.', visualTags: ['Travel', 'Adventure', 'Journey'] },
      'split': { title: 'Local Moment', description: 'Focusing on a specific part of your day.', visualTags: ['Detail', 'Focus'] }
    };
    
    const result = results[event.id.includes('merged') ? 'merged' : 'split'] || {
      title: 'City Exploration',
      description: 'Discovering the beauty and energy of the urban environment.',
      visualTags: ['City', 'Street', 'Architecture', 'Daylight']
    };

    setEvents(prev => prev.map(e => e.id === event.id ? { 
      ...e, 
      ...result, 
      isAnalyzing: false, 
      isAnalyzed: true 
    } : e));
  };

  const displayEvents = isStoryMode && events.length > 0 
    ? [{
        id: 'story-mode-all',
        title: 'Your Complete Journey',
        userTitle: 'The Whole Story',
        category: EventCategory.OTHER,
        description: 'A seamless narrative of all your captured moments.',
        photos: events.flatMap(e => e.photos).sort((a, b) => a.timestamp - b.timestamp),
        visualTags: Array.from(new Set(events.flatMap(e => e.visualTags))),
        startTime: Math.min(...events.map(e => e.startTime)),
        endTime: Math.max(...events.map(e => e.endTime)),
        isAnalyzing: false,
        isAnalyzed: true,
        isMacro: true,
        fusionReason: 'Full Timeline Aggregation'
      }] as SmartEvent[]
    : events;

  return (
    <div className="min-h-screen bg-[#020617] text-gray-100 font-sans selection:bg-blue-500/30">
      <style>{`
        .leaflet-container {
          background: #020617 !important;
        }
        .bubble-aura {
          filter: blur(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bubble-glow {
          filter: blur(12px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .connection-glow {
          filter: blur(6px);
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(2, 6, 23, 0.85) !important;
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 2rem;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          width: auto !important;
        }
        .custom-popup .leaflet-popup-tip {
          background: #020617 !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .bubble-body {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            filter: blur(6px) brightness(1);
            opacity: 0.3;
          }
          50% { 
            filter: blur(8px) brightness(1.2);
            opacity: 0.5;
          }
        }
        @keyframes flow-energy {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(40px) saturate(150%);
          -webkit-backdrop-filter: blur(40px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .hover-lift {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
      <header className="sticky top-0 z-[1000] bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white leading-none">NEURAL GALAXY</h1>
              <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em] mt-1">PHOTO CLUSTERING AI</p>
            </div>
          </div>

          {events.length > 0 && (
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {selectedEventIds.length > 1 && (
                  <motion.button 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onClick={handleMergeEvents}
                    className="px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-black shadow-xl shadow-blue-500/40 hover:bg-blue-500 transition-all flex items-center gap-2 border border-blue-400/30"
                  >
                    MERGE {selectedEventIds.length} EVENTS
                  </motion.button>
                )}
              </AnimatePresence>
              <button 
                onClick={() => setIsStoryMode(!isStoryMode)}
                className={`px-5 py-2 rounded-full text-xs font-black transition-all border ${
                  isStoryMode 
                    ? 'bg-purple-600 text-white border-purple-400/50 shadow-lg shadow-purple-500/30' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {isStoryMode ? 'MULTI-STORY' : 'SINGLE STORY'}
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Map Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">Memories.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Upload your raw gallery. Our AI clusters them by time, location, and visual features into a molecular narrative.
            </p>
          </div>

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full max-w-3xl mx-auto mb-16 border border-white/10 rounded-[3rem] p-20 transition-all duration-700 ease-in-out text-center cursor-pointer relative overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_100px_rgba(59,130,246,0.1)]"
          >
            {/* Background Molecular Grid Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFiles}
              disabled={isProcessing}
            />
            <div className="relative z-10 flex flex-col items-center gap-8" onClick={() => fileInputRef.current?.click()}>
              <div className="p-8 rounded-[2.5rem] bg-slate-950/50 border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500/40 group-hover:shadow-blue-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Initialize Neural Map</h3>
                <p className="text-slate-400 max-w-sm mx-auto font-bold text-sm tracking-wide leading-relaxed">
                  Drop your raw album here to begin the molecular clustering process.
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </div>

        {events.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group relative bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-700 hover:border-blue-500/40">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Corner Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full transition-all duration-700 group-hover:bg-blue-500/20" />
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.3em] mb-4 relative z-10">Neural Clusters</p>
                <div className="flex items-baseline gap-3 relative z-10">
                  <p className="text-5xl font-black text-white tracking-tighter">{photos.length}</p>
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Nodes</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
              
              <div className="group relative bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden transition-all duration-700 hover:border-purple-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full transition-all duration-700 group-hover:bg-purple-500/20" />
                <p className="text-[10px] text-purple-400 font-black uppercase tracking-[0.3em] mb-4 relative z-10">Macro Events</p>
                <div className="flex items-baseline gap-3 relative z-10">
                  <p className="text-5xl font-black text-white tracking-tighter">{events.length}</p>
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Stories</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 font-black italic uppercase tracking-wider opacity-60 relative z-10">
                  Aggregated from {events.reduce((acc, e) => acc + (e.microEvents?.length || 0), 0)} micro-clusters
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
              
              <div className="group relative bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-700 hover:border-pink-500/40">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 blur-[60px] rounded-full transition-all duration-700 group-hover:bg-pink-500/20" />
                <p className="text-[10px] text-pink-400 font-black uppercase tracking-[0.3em] mb-4 relative z-10">GPS Hotspots</p>
                <div className="flex items-baseline gap-3 relative z-10">
                  <p className="text-5xl font-black text-white tracking-tighter">
                    {new Set(events.filter(e => e.centerLocation).map(e => `${e.centerLocation?.lat},${e.centerLocation?.lng}`)).size}
                  </p>
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Coordinates</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500/50 to-orange-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </div>

            <div className="h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mb-12 relative group/map">
              {/* Map Vignette Overlay */}
              <div className="absolute inset-0 pointer-events-none z-[400] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] rounded-[3rem]" />
              
              <MapContainer 
                center={[20, 0]} 
                zoom={2} 
                scrollWheelZoom={true} 
                style={{ height: '100%', width: '100%', background: '#020617' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                {events.map((event) => {
                  const locationsWithGPS = event.photos
                    .filter(p => p.location)
                    .map(p => p.location!);
                  
                  if (locationsWithGPS.length === 0) return null;

                  const uniqueLocs = locationsWithGPS.reduce((acc: {lat: number, lng: number}[], curr) => {
                    if (!acc.find(l => l.lat === curr.lat && l.lng === curr.lng)) {
                      acc.push(curr);
                    }
                    return acc;
                  }, []);

                  const eventColor = generateEventColor(event.id);
                  const isSelected = isSelectedEvent(event.id);

                  const popupContent = (
                    <Popup className="custom-popup">
                      <div className="p-3 min-w-[200px] bg-slate-950 text-white rounded-xl border border-white/10 shadow-2xl">
                        <div className="flex flex-col gap-2 mb-3">
                          <h4 className="font-black text-[13px] leading-tight tracking-tight uppercase text-white/90">
                            {event.userTitle || event.title || 'Clustered Event'}
                          </h4>
                          <span 
                          className="self-start text-[9px] px-2 py-0.5 rounded-md font-black tracking-widest uppercase border backdrop-blur-md"
                          style={{
                            backgroundColor: `${generateEventColor(event.id)}15`,
                            borderColor: `${generateEventColor(event.id)}30`,
                            color: generateEventColor(event.id)
                          }}
                        >
                            {event.category}
                          </span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto mb-4 pb-1 scrollbar-hide">
                          {event.photos.slice(0, 4).map(p => (
                            <img key={p.id} src={p.url} className="w-16 h-16 object-cover rounded-xl shadow-lg border border-white/5 flex-shrink-0" alt="" />
                          ))}
                        </div>
                        <button 
                          onClick={() => toggleSelectEvent(event.id)}
                          className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                            isSelected
                              ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                              : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {isSelected ? 'Deselect' : 'Select Event'}
                        </button>
                      </div>
                    </Popup>
                  );

                  return (
                    <React.Fragment key={event.id}>
                      {/* Enhanced Neural Energy Bonds with Multi-Layer Glow */}
                      {locationsWithGPS.length > 1 && (
                        <>
                          {/* Layer A: Massive Outer Energy Field */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: eventColor, 
                              weight: isSelected ? 80 : 60, 
                              opacity: isSelected ? 0.03 : 0.015, 
                              lineCap: 'round',
                              className: 'connection-glow transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer B: Wide Diffusion Field */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: eventColor, 
                              weight: isSelected ? 50 : 40, 
                              opacity: isSelected ? 0.05 : 0.025, 
                              lineCap: 'round',
                              className: 'transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer C: Middle Energy Glow */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: eventColor, 
                              weight: isSelected ? 25 : 18, 
                              opacity: isSelected ? 0.1 : 0.05, 
                              lineCap: 'round',
                              className: 'transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer D: Main Energy Beam */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: eventColor, 
                              weight: isSelected ? 10 : 7, 
                              opacity: isSelected ? 0.25 : 0.15, 
                              lineCap: 'round',
                              className: 'transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer E: Inner Core - Pulsing Energy */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: 'white', 
                              weight: isSelected ? 3 : 2, 
                              opacity: isSelected ? 0.5 : 0.3, 
                              dashArray: isSelected ? undefined : '8, 20',
                              className: 'transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer F: White Hot Core - Maximum Intensity */}
                          <Polyline 
                            positions={locationsWithGPS.map(l => [l.lat, l.lng])}
                            pathOptions={{ 
                              color: 'white', 
                              weight: isSelected ? 1.5 : 1, 
                              opacity: isSelected ? 0.9 : 0.6, 
                              dashArray: '3, 12',
                              className: 'transition-all duration-500'
                            }}
                          />
                        </>
                      )}

                      {/* 2. Layered Bubble Nodes with Enhanced Fusion Effect */}
                      {uniqueLocs.map((loc, idx) => (
                        <React.Fragment key={`${event.id}-node-${idx}`}>
                          {/* Layer A: Massive Outer Aura - Maximum Fusion Halo */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={isSelected ? 2000 : 1500}
                            pathOptions={{ 
                              fillColor: eventColor, 
                              fillOpacity: isSelected ? 0.02 : 0.01, 
                              weight: 0,
                              className: 'bubble-aura transition-all duration-1000'
                            }}
                          />
                          
                          {/* Layer B: Wide Diffusion - Soft Integration Zone */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={isSelected ? 1200 : 1000}
                            pathOptions={{ 
                              fillColor: eventColor, 
                              fillOpacity: isSelected ? 0.03 : 0.015, 
                              weight: 0,
                              className: 'transition-all duration-1000'
                            }}
                          />
                          
                          {/* Layer C: Inner Diffusion - Strengthening Fusion */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={isSelected ? 700 : 600}
                            pathOptions={{ 
                              fillColor: eventColor, 
                              fillOpacity: isSelected ? 0.05 : 0.025, 
                              weight: 0,
                              className: 'transition-all duration-700'
                            }}
                          />
                          
                          {/* Layer D: Protoplasm / Membrane - Main Shell */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={isSelected ? 400 : 350}
                            pathOptions={{ 
                              fillColor: eventColor, 
                              fillOpacity: isSelected ? 0.12 : 0.08, 
                              color: eventColor,
                              weight: isSelected ? 3 : 2,
                              opacity: isSelected ? 0.4 : 0.25,
                              className: isSelected ? 'animate-pulse' : 'transition-all duration-700'
                            }}
                          >
                            {popupContent}
                          </Circle>

                          {/* Layer E: Nucleus - Inner Glow */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={150}
                            pathOptions={{ 
                              fillColor: eventColor, 
                              fillOpacity: isSelected ? 0.35 : 0.25, 
                              color: 'white',
                              weight: 1.5,
                              opacity: isSelected ? 0.5 : 0.35
                            }}
                          />
                          
                          {/* Layer F: Core Center - Bright Core */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={50}
                            pathOptions={{ 
                              fillColor: 'white', 
                              fillOpacity: isSelected ? 0.4 : 0.3, 
                              color: eventColor,
                              weight: 2,
                              opacity: isSelected ? 0.9 : 0.7
                            }}
                          />
                          
                          {/* Layer G: Anchor Point - Sharp GPS Pin */}
                          <Circle 
                            center={[loc.lat, loc.lng]}
                            radius={8}
                            pathOptions={{ 
                              fillColor: 'white', 
                              fillOpacity: 1, 
                              color: eventColor,
                              weight: 3,
                              opacity: 1
                            }}
                          />
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  );
                })}
                <MapBoundsAdjuster events={events} />
              </MapContainer>
            </div>
          </div>
        )}

        {events.length > 0 && (
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden lg:block" />

            <div className="flex items-center gap-4 mb-12 pl-0 lg:pl-16">
              <div className="w-8 h-px bg-blue-500/50 hidden lg:block" />
              <h3 className="text-3xl font-black text-white tracking-tight uppercase">The Timeline</h3>
            </div>

            <div className="space-y-16">
              {displayEvents.map((event) => (
                <div key={event.id} className="relative lg:pl-16">
                  <div className="absolute left-[28px] top-10 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] hidden lg:block" />
                  <EventCard
                    event={event}
                    onAnalyze={handleAnalyzeEvent}
                    onUpdateEvent={handleUpdateEvent}
                    onSplit={handleSplitEvent}
                    onSelect={toggleSelectEvent}
                    onReorderPhotos={handleReorderPhotos}
                    onMovePhoto={handleMovePhoto}
                    isSelected={selectedEventIds.includes(event.id)}
                    selectionMode={selectedEventIds.length > 0}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {events.length === 0 && !isProcessing && (
          <div className="text-center mt-20 pb-20 opacity-50">
            <p className="text-sm text-gray-600">Privacy First: Photos are processed locally for clustering. <br/>Only representative samples are sent to AI for analysis.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClusteringEvents;
