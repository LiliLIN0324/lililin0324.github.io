import React from 'react';

const AnyRealDemo: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f5f7fb]">
      <iframe
        src="/demos/anyreal.html"
        className="h-full w-full border-0"
        title="AnyReal — AI 虚拟影棚项目文档"
        allowFullScreen
      />
    </div>
  );
};

export default AnyRealDemo;
