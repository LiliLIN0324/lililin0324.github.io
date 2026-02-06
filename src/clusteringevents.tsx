import React, { useState, useRef } from 'react';

export interface Photo {
  id: string;
  file: File;
  url: string;
  timestamp: number;
  mimeType: string;
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
}

export interface AnalysisResult {
  title: string;
  description: string;
  visualTags: string[];
}

interface EventCardProps {
  event: SmartEvent;
  onAnalyze: (event: SmartEvent) => void;
}

const getCategoryColor = (cat: EventCategory) => {
  switch (cat) {
    case EventCategory.FOOD: return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
    case EventCategory.ACADEMIC: return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case EventCategory.NATURE: return 'bg-green-500/20 text-green-300 border-green-500/30';
    case EventCategory.CITY: return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case EventCategory.FAMILY: return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
    case EventCategory.ART: return 'bg-red-500/20 text-red-300 border-red-500/30';
    default: return 'bg-gray-700 text-gray-300 border-gray-600';
  }
};

export const EventCard: React.FC<EventCardProps> = ({ event, onAnalyze }) => {
  const dateStr = new Date(event.startTime).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  
  const timeStr = new Date(event.startTime).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="relative group bg-gray-850 border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col md:flex-row mb-8">
      
      <div className="md:w-1/2 lg:w-2/5 p-3 grid grid-cols-2 gap-2 h-64 md:h-auto">
        {event.photos.slice(0, 4).map((photo, index) => (
           <div 
             key={photo.id} 
             className={`relative overflow-hidden rounded-xl bg-gray-800 ${
               event.photos.length === 1 ? 'col-span-2 row-span-2' : 
               event.photos.length === 2 ? 'col-span-1 row-span-2' : 
               event.photos.length === 3 && index === 0 ? 'col-span-2' : ''
             }`}
           >
             <img 
               src={photo.url} 
               alt="Event" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               loading="lazy"
             />
             {index === 3 && event.photos.length > 4 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-medium text-lg">+{event.photos.length - 4}</span>
                </div>
             )}
           </div>
        ))}
      </div>

      <div className="md:w-1/2 lg:w-3/5 p-6 flex flex-col justify-between relative">
        {event.isAnalyzing && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-transparent animate-pulse pointer-events-none" />
        )}

        <div>
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{dateStr} &bull; {timeStr}</span>
                {event.isAnalyzed && (
                     <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(event.category)}`}>
                     {event.category}
                   </span>
                )}
            </div>
            
            <h2 className={`text-2xl font-bold mb-2 ${event.isAnalyzed ? 'text-white' : 'text-gray-400 italic'}`}>
                {event.isAnalyzed ? event.title : 'Uncategorized Event'}
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
                {event.isAnalyzed ? event.description : `${event.photos.length} photos in this cluster. Analyze to get details.`}
            </p>

            {event.isAnalyzed && event.visualTags && event.visualTags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {event.visualTags.slice(0, 6).map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wide text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700/50">
                      {tag}
                    </span>
                  ))}
                  {event.visualTags.length > 6 && (
                    <span className="text-[10px] text-gray-600 px-1 py-1">+{event.visualTags.length - 6}</span>
                  )}
                </div>
              </div>
            )}
        </div>

        <div className="flex items-center gap-4">
            {!event.isAnalyzed && !event.isAnalyzing && (
                <button 
                    onClick={() => onAnalyze(event)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors text-sm shadow-lg shadow-primary-900/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813 2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>
                    Analyze Visuals
                </button>
            )}

            {event.isAnalyzing && (
                 <div className="flex items-center gap-2 text-primary-400 text-sm font-medium">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Detecting objects...
                 </div>
            )}
        </div>
      </div>
    </div>
  );
};

const ClusteringEvents: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [events, setEvents] = useState<SmartEvent[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const newPhotos: Photo[] = [];

    const fileArray = Array.from(fileList) as File[];
    for (const file of fileArray) {
      const photo: Photo = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        url: URL.createObjectURL(file),
        timestamp: file.lastModified,
        mimeType: file.type
      };
      newPhotos.push(photo);
    }

    setPhotos(prev => [...prev, ...newPhotos]);
    setIsProcessing(true);

    setTimeout(() => {
      const clusteredEvents = clusterPhotosIntoEvents(newPhotos);
      setEvents(clusteredEvents);
      setIsProcessing(false);
    }, 800);
  };

  const clusterPhotosIntoEvents = (photos: Photo[]): SmartEvent[] => {
    if (photos.length === 0) return [];

    const sortedPhotos = [...photos].sort((a, b) => a.timestamp - b.timestamp);
    const events: SmartEvent[] = [];
    let currentEvent: SmartEvent = {
      id: Math.random().toString(36).substr(2, 9),
      photos: [sortedPhotos[0]],
      startTime: sortedPhotos[0].timestamp,
      endTime: sortedPhotos[0].timestamp,
      isAnalyzed: false,
      isAnalyzing: false,
      title: '',
      description: '',
      category: EventCategory.OTHER,
      visualTags: []
    };

    const TIME_THRESHOLD = 60 * 60 * 1000;

    for (let i = 1; i < sortedPhotos.length; i++) {
      const photo = sortedPhotos[i];
      if (photo.timestamp - currentEvent.endTime < TIME_THRESHOLD) {
        currentEvent.photos.push(photo);
        currentEvent.endTime = photo.timestamp;
      } else {
        events.push(currentEvent);
        currentEvent = {
          id: Math.random().toString(36).substr(2, 9),
          photos: [photo],
          startTime: photo.timestamp,
          endTime: photo.timestamp,
          isAnalyzed: false,
          isAnalyzing: false,
          title: '',
          description: '',
          category: EventCategory.OTHER,
          visualTags: []
        };
      }
    }

    events.push(currentEvent);
    return events;
  };

  const handleAnalyzeEvent = async (event: SmartEvent) => {
    setEvents(prev => prev.map(e => e.id === event.id ? { ...e, isAnalyzing: true } : e));

    setTimeout(() => {
      setEvents(prev => prev.map(e => e.id === event.id ? {
        ...e,
        isAnalyzing: false,
        isAnalyzed: true,
        title: 'Sample Event',
        description: 'This is a sample event description.',
        category: EventCategory.NATURE,
        visualTags: ['person', 'outdoor', 'nature', 'building']
      } : e));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-primary-500/30">
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Photo Clustering</h1>
          </div>

          {events.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:block">
                {events.length} Events Found
              </span>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Your Photos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Intelligently Sorted.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Upload your raw gallery. We'll group them by time and location, and analyze visual features (objects, scenes) to determine event type.
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto mb-12 border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ease-in-out text-center cursor-pointer relative overflow-hidden group bg-gray-800/50 hover:bg-gray-800 hover:border-gray-500 border-gray-700">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFiles}
              disabled={isProcessing}
            />
            <div className="relative z-10 flex flex-col items-center gap-4" onClick={() => fileInputRef.current?.click()}>
              <div className="p-4 rounded-full bg-gray-800 transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Import Photos</h3>
                <p className="text-gray-400 max-w-sm mx-auto">
                  Drag & drop your album here, or click to select files.
                  <br/>
                  <span className="text-xs text-gray-500 mt-2 block">
                    We'll cluster them by time and use AI to tell you what happened.
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600/20 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {events.length > 0 && (
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800 hidden lg:block" />

            <h3 className="text-2xl font-bold text-white mb-8 pl-0 lg:pl-16">Your Timeline</h3>

            <div className="space-y-12">
              {events.map((event) => (
                <div key={event.id} className="relative lg:pl-16">
                  <div className="absolute left-[30px] top-8 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-gray-950 hidden lg:block" />
                  <EventCard
                    event={event}
                    onAnalyze={handleAnalyzeEvent}
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