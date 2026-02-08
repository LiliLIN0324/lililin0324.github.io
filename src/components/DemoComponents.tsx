import React, { lazy } from "react";

export const ClusterVisualizer3D = lazy(() => import("../demos/cluster-visualizer/ClusterVisualizer.tsx"));
export const URplatform = lazy(() => import("../UR-platform.tsx"));
export const HeatMapper = lazy(() => import("../heatmapper.tsx"));
export const OpenStreetMap = lazy(() => import("../openstreetmap.tsx"));
export const SequentialEvents = lazy(() => import("../photogeo.tsx"));
export const PhotoGeolocationMap = lazy(() => import("../photogeomap.tsx"));
export const ClusteringEvents = lazy(() => import("../clusteringevents.tsx"));
export const LitFlowDemo = lazy(() => import("../litflow.tsx"));
export const WeChatGameDemo = lazy(() => import("../wechatgame.tsx"));
