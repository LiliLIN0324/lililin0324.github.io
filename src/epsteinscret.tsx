import React from 'react';

const EpsteinScretArchive: React.FC = () => {
  return (
    <div className="heatmapper-container" style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://epstein-mystery-archive.vercel.app/"
        title="HeatMapper - Global Heat Monitoring"
        style={{ width: '100%', height: '100%', border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};

export default EpsteinScretArchive;