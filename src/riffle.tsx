import React from 'react';

const RiffleDemo: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 overflow-y-auto p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Riffle - AI Game Generation Tool</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-4">
            Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences.
          </p>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">Download Riffle</h2>
            <p className="text-gray-700 mb-4">
              Get the Riffle app on the App Store and start creating interactive experiences!
            </p>
            <a 
              href="https://apps.apple.com/ca/app/riffle-swipe-vibe-memes/id6757701493" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Download on App Store
            </a>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Features</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Create vibe meme in seconds using our AI vibe engine</li>
              <li>• Infinite Interactive Feed where every swipe is a new playable experience</li>
              <li>• Remix support - create secondary works based on existing Vibes</li>
              <li>• Enhanced editor with image and audio embedding</li>
              <li>• Dark Mode support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiffleDemo;
