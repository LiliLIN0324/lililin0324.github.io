import React from 'react';

const HeatMapper: React.FC = () => {
  return (
    <div className="heatmapper-container" style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://geomapper-pi.vercel.app/"
        title="HeatMapper - Global Heat Monitoring"
        style={{ width: '100%', height: '100%', border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};

export default HeatMapper;