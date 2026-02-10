import React from 'react';

const BoxUpMyStuffInCyberspace: React.FC = () => {
  return (
    <div className="litflow-container" style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="box-up-stuff-in-cyberspace.vercel.app"
        title="LitFlow - Research Hub"
        style={{ width: '100%', height: '100%', border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};

export default BoxUpMyStuffInCyberspace;
