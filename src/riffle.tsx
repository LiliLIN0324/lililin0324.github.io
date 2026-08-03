import React from 'react';

const RiffleDemo: React.FC = () => {
  return (
    <iframe
      src="https://www.riffle.games/"
      className="w-full h-full border-0"
      title="Riffle - AI Game Generation Tool"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
};

export default RiffleDemo;
