import React, { lazy } from 'react';
import { ClusterVisualizer3D, URplatform, HeatMapper, OpenStreetMap, SequentialEvents, PhotoGeolocationMap, WeChatGameDemo,ClusteringEvents, BoxUpMyStuffInCyberspace, EpsteinScretArchive, RiffleDemo, GenStyleDemo, GenshotDemo } from './DemoComponents';

// 根据slug获取对应的demo组件
export const getDemoComponent = (slug: string) => {
  const demoComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType> } = {
    //  
    'cluster-visualizer-3d': ClusterVisualizer3D,
    'participatory-urban-regeneration-empowered-by-artificial-intelligence': URplatform,
    'heatmapper': HeatMapper,
    // 教程项目的slug映射
    'how-to-add-openstreetmap-in-website': OpenStreetMap,
    'how-to-get-sequential-events-from-photo-by-phone': SequentialEvents,
    'how-to-visualize-photo-geolocation-data-on-map': PhotoGeolocationMap,
    'how-to-build-game-in-wechat-mini-program': WeChatGameDemo,
    'how-to-conduct-time-geo-sequential-clustering-from-album': ClusteringEvents,
    'box-up-my-stuff-in-cyberspace': BoxUpMyStuffInCyberspace,
    'epstein-mystery-archive': EpsteinScretArchive,
    'riffle-ai-game-generation-tool': RiffleDemo,
    'genstyle': GenStyleDemo,
    'genshot-AI-video-generation-tool': GenshotDemo,
  };

  return demoComponents[slug];
};
