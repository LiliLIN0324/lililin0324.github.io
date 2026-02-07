import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProjectListView = ({ data, type }: { data: any[], type: string }) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-medium text-neutral-900">Selected {type === 'research' ? 'Researches' : type === 'design' ? 'Designs' : type === 'game' ? 'Games' : type === 'planning' ? 'Planning' : 'Tutorials' }</h2>
        <div className="flex items-center gap-4">
          <div className="flex bg-neutral-100 p-1 rounded-sm border border-neutral-200">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-xs font-mono ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}
            >
              GRID
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-xs font-mono ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}
            >
              LIST
            </button>

          </div>
          <span className="text-xs font-mono text-neutral-400">Idx: {data.length}</span>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        <div className="space-y-4">
          {data.map((project) => (
            <div 
              key={project.slug} 
              className="group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm"
            >
              <div className="flex flex-row gap-4 md:gap-6 items-center flex-1">
                <Link 
                  to={`/${type}/${project.slug}`}
                  className="flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 overflow-hidden bg-neutral-50">
                    <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-neutral-400">NO. {project.id}</span>
                      <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate">{project.title}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-1">{project.description}</p>
                  </div>
                </Link>
                {project.hasDemo && (
                  <button 
                    onClick={() => {
                      window.location.href = `#/${type}/${project.slug}#demo`;
                    }}
                    className="flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                  >
                    DEMO
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {data.map((project) => (
            <div 
              key={project.slug} 
              className="group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm flex flex-col"
            >
              <Link 
                to={`/${type}/${project.slug}`}
                className="flex flex-col h-full"
              >
                <div className="flex-shrink-0 w-full aspect-square border border-neutral-100 overflow-hidden bg-neutral-50 mb-4">
                  <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">NO. {project.id}</span>
                    <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 line-clamp-2">{project.title}</h3>
                  <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
              {project.hasDemo && (
                <button 
                  onClick={() => {
                    window.location.href = `#/${type}/${project.slug}#demo`;
                  }}
                  className="flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                >
                  DEMO
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
