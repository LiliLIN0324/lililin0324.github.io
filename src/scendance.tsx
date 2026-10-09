import React from 'react';

const ScendanceDemo: React.FC = () => {
  return (
    <iframe
      src="https://scendance-scene-planner-ewz.pages.dev"
      className="w-full h-full border-0"
      title="幕景 Scendance - AI 活动布置工作台"
      allow="clipboard-write; fullscreen"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
    />
  );
};

export default ScendanceDemo;
