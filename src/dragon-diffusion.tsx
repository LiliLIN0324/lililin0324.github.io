import React from 'react';

const DragonDiffusionDemo: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#0b0d12]">
      <iframe
        src="/demos/dragon-diffusion.html"
        className="h-full w-full border-0"
        title="Dragon Diffusion - 版本演进与贡献图谱"
        allowFullScreen
      />
    </div>
  );
};

export default DragonDiffusionDemo;
