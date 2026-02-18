import React from 'react';

export const ContactSection = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-16 h-16 border border-neutral-300 dark:border-neutral-600 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500">
        ✉️
      </div>
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">CONTACT_FOR_COLLABORATION</h2>
      <a
        href="mailto:lily1326685527@gmail.com?subject=Research%20Collaboration"
        className="bg-neutral-900 dark:bg-neutral-700 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors"
      >
        SEND_TRANSMISSION
      </a>
    </div>
  );
};
