import React from 'react';

const GenStyleDemo: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 overflow-y-auto p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">GenStyle - Daily Outfit Inspiration Delivered</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-4">
            GenStyle is an AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends.
          </p>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">Download GenStyle</h2>
            <p className="text-gray-700 mb-4">
              Get the GenStyle app on the App Store and discover your perfect style!
            </p>
            <a 
              href="https://apps.apple.com/ca/app/genstyle/id6744721458" 
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
              <li>• AI Virtual Try-On: Instantly see how outfits look on you with realistic virtual fitting</li>
              <li>• AI Color Analysis: Get your personalized color palette tailored to your skin tone</li>
              <li>• Personalized Outfit Recommendations: Enjoy curated looks for every occasion</li>
              <li>• AI Digital Wardrobe: Organize your clothes and get fresh outfit ideas</li>
              <li>• Upload a selfie to instantly reveal your color and body shape</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenStyleDemo;
