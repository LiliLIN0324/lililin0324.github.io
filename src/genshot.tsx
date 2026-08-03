import React from 'react';

const GenshotDemo: React.FC = () => {
  return (
    <iframe
      src="https://genshot.ai/"
      className="w-full h-full border-0"
      title="Genshot - AI Video Generation Tool"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
};

export default GenshotDemo;
