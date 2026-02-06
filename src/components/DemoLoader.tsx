import React, { lazy } from 'react';
import { ClusterVisualizer3D, URplatform, HeatMapper, OpenStreetMap, SequentialEvents, PhotoGeolocationMap, WeChatGameDemo,ClusteringEvents } from './DemoComponents';

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
  };

  return demoComponents[slug];
};
