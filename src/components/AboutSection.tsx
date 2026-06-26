import React from 'react';

export const AboutSection = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8">About Me</h2>
      <div className="font-light text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-none">
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">AI-assisted urban planning</span>, especially on <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">urban heat environments</span>. I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology.
        </p>
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul.
        </p>
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          I am also <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">UI&UX designer and front-end developer</span> passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8">
          <div>
            <h4 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
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

        <div className="mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8">
          <h4 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4">Conference Presentations</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 mb-3">Knowledge Graph Generation from Urban Planning Texts</h5>
              <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 pl-2">
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Poster presentation at 39th AAAI Workshop - AI for Urban Planning, Philadelphia, PA, USA, February 28-March 3, 2025</p>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Oral presentation at Computational Urban Planning and Urban Management Conference (CUPUM), London, UK, June 23-27, 2025</p>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Oral presentation at the 19th International Association for China Planning Conference (IACP) Annual Conference, Xiamen, China, July 3-7, 2025</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 mb-3">Urban Form & Heat Resilience</h5>
              <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 pl-2">
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">"Local Climate Zone and Urban Heat Resilience: An Empirical Study in New York"</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Oral presentation at the 52nd International Conference on Urban Affairs (ICUA), Vancouver, Canada, April 15-19, 2025</p>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">"Reveal nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach"</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Oral presentation at 65th Association of Collegiate Schools of Planning Annual Conference (ACSP), Minneapolis, MN, USA, October 23-25, 2025</p>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">"Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning"</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Poster presentation at 39th AAAI Workshop - AI for Urban Planning, Singapore, January 26, 2026</p>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">"Nonlinear Impacts of Urban Form on Urban Heat Islands: A Machine Learning Analysis Across Scales and Weather Conditions in Seoul"</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Oral presentation at the 20th International Association for China Planning (IACP) Annual Conference, Xi'an, China, July 10-13, 2026</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 mb-3">NEUROTOPIA</h5>
              <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 pl-2">
                <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
                  <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">"Decentralized future urban design based on the biological characteristics of neurons"</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Oral presentation at Urban Design Institute of Korea (UDIK) Autumn Conference, Seoul, South Korea, October 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
