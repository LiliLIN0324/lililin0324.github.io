import React from 'react';

const LitFlowDemo: React.FC = () => {
  return (
    <div className="litflow-container" style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://litflow-one.vercel.app/"
        title="LitFlow - Research Hub"
        style={{ width: '100%', height: '100%', border: 'none' }}
        loading="lazy"
      />
    </div>
  );
};

export default LitFlowDemo;
