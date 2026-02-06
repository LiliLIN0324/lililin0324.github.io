import React, { useRef, useState } from 'react';
import { Photo } from '../types';
import { generateId } from '../utils/imageProcessing';

interface PhotoUploaderProps {
  onPhotosUploaded: (photos: Photo[]) => void;
  isProcessing: boolean;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onPhotosUploaded, isProcessing }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const processFiles = async (files: FileList | null) => {
    if (!files) return;

    const newPhotos: Photo[] = [];
    
    // Convert FileList to array for processing
    const fileArray = Array.from(files);

    for (const file of fileArray) {
        // We rely on lastModified as a proxy for "Date Taken" 
        // In a real production app, we would use an EXIF library like 'exifreader' here.
        // For this demo, file.lastModified ensures it works without external deps immediately.
        const photo: Photo = {
            id: generateId(),
            file,
            url: URL.createObjectURL(file),
            timestamp: file.lastModified,
            mimeType: file.type
        };
        newPhotos.push(photo);
    }

    onPhotosUploaded(newPhotos);
    
    // Reset input
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div 
      className={`w-full max-w-3xl mx-auto mb-12 border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ease-in-out text-center cursor-pointer relative overflow-hidden group
        ${dragActive 
          ? 'border-primary-400 bg-primary-500/10 scale-[1.02]' 
          : 'border-gray-700 hover:border-gray-500 bg-gray-800/50'
        }
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => processFiles(e.target.files)}
        disabled={isProcessing}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className={`p-4 rounded-full bg-gray-800 transition-transform duration-500 ${dragActive ? 'rotate-12 scale-110' : 'group-hover:scale-110'}`}>
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

      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600/20 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
