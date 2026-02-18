import React from 'react';

const GenshotDemo: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 overflow-y-auto p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Genshot - AI Video Generation Tool</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-4">
            Genshot is an AI-powered video generation tool that transforms text prompts into high-quality visuals.
          </p>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">Visit Genshot</h2>
            <p className="text-gray-700 mb-4">
              Explore Genshot's AI video generation capabilities on their official website!
            </p>
            <a 
              href="https://genshot.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Visit Genshot Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenshotDemo;
