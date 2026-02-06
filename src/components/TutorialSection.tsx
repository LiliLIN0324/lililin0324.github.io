import React from 'react';

export const TutorialSection = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8">Tutorials</h2>
      <div className="text-center py-16">
        <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center mx-auto mb-6">
          📚
        </div>
        <h3 className="text-xl font-medium text-neutral-900 mb-2">Tutorials Section</h3>
        <p className="text-neutral-500">Coming soon with educational content</p>
      </div>
    </div>
  );
};
