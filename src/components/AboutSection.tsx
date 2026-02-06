import React from 'react';

export const AboutSection = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8">About Me</h2>
      <div className="prose prose-neutral prose-sm font-light text-base md:text-lg text-neutral-800 leading-relaxed">
        <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
          I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on <span className="font-medium border-b border-neutral-300">AI-assisted urban planning</span>, especially on <span className="font-medium border-b border-neutral-300">urban heat environments</span>. I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology.
        </p>
        <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
          In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul.
        </p>
        <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
          I am also <span className="font-medium border-b border-neutral-300">UI&UX designer and front-end developer</span> passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 pt-6 md:pt-8">
          <div>
            <h4 className="font-mono text-xs text-neutral-400 uppercase mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Urban Climate & Resilience</li>
              <li>AI-Assisted Urban Planning</li>
              <li>Machine Learning & Data Analysis</li>
              <li>Spatial Statistics & GIS</li>
              <li>React / Next.js ecosystem</li>
              <li>TypeScript Architecture</li>
              <li>WebGL / Three.js</li>
              <li>UI Systems Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
