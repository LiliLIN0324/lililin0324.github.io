import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import Plot from 'react-plotly.js';
import { AVAILABLE_KS } from './constants';
import { fetchLocalClusterData } from './dataLoader';
import { Cluster } from './types';
import { Maximize2, Pause, Play, Layers, MousePointer2, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


export type AppProps = {
  initialK?: number;
  providedClusters?: Cluster[];
  isEmbedded?: boolean;
};

const ClusterVisualizer3D: React.FC<AppProps> = ({ initialK = 5, providedClusters, isEmbedded = false }) => {
  // App.tsx 中的状态
  const [k, setK] = useState<number>(initialK);
  const [isCustomData, setIsCustomData] = useState<boolean>(!!(providedClusters && providedClusters.length));
  const [loadedClusters, setLoadedClusters] = useState<Cluster[]>([]);
  const [customClusters, setCustomClusters] = useState<Cluster[]>(providedClusters ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedClusterId, setSelectedClusterId] = useState<number | null>(null);
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);
  const [showAllAttributes, setShowAllAttributes] = useState<boolean>(false);

  // ClusterVisualizer.tsx 中的状态
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [activeClusterIds, setActiveClusterIds] = useState<number[]>([]);

  const lastCameraRef = useRef<{ x: number; y: number; z: number }>({
    x: 2.12, y: 2.12, z: 1.5
  });
  const requestRef = useRef<number>();

  const activeClusters = isCustomData ? customClusters : loadedClusters;

  // 数据加载逻辑
  useEffect(() => {
    if (providedClusters && providedClusters.length) {
      setCustomClusters(providedClusters);
      setIsCustomData(true);
      return;
    }

    if (isCustomData) return;

    const loadData = async () => {
      setIsLoading(true);
      setErrorMsg(null);
      setLoadedClusters([]);
      handleReset();
      try {
        const data = await fetchLocalClusterData(k, showAllAttributes);
        if (data.length === 0) {
          setErrorMsg(`No data found for K=${k}.`);
        } else {
          setLoadedClusters(data);
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Failed to load data files.");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [k, isCustomData, providedClusters, showAllAttributes]);

  useEffect(() => {
    if (providedClusters && providedClusters.length) {
      setCustomClusters(providedClusters);
      setIsCustomData(true);
    } else {
      setCustomClusters([]);
      setIsCustomData(false);
    }
  }, [providedClusters]);

  // 自动旋转逻辑
  useEffect(() => {
    if (!isAutoRotating) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }
    const radius = 2.12;
    const animate = () => {
      setRotationAngle((prev) => {
        const next = prev + 0.005;
        lastCameraRef.current = {
          x: radius * Math.cos(next),
          y: radius * Math.sin(next),
          z: 1.5
        };
        return next;
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isAutoRotating]);

  const handleClusterSelect = (clusterId: number, pointIndex: number) => {
    setSelectedClusterId(clusterId);
    setSelectedPointIndex(pointIndex);
  };

  const handleReset = () => {
    setSelectedClusterId(null);
    setSelectedPointIndex(null);
  };

  const switchToLocal = (val: number) => {
    setK(val);
    setIsCustomData(false);
  };

  // 3D可视化的traces
  const traces = useMemo(() => {
    const plotTraces: any[] = [];

    activeClusters.forEach((cluster) => {
      const isSelected = isMultiSelectMode 
        ? activeClusterIds.includes(cluster.id)
        : selectedClusterId === cluster.id;
      
      const isVisible = isMultiSelectMode
        ? (activeClusterIds.length === 0 || activeClusterIds.includes(cluster.id))
        : (selectedClusterId === null || selectedClusterId === cluster.id);

      const xValues = cluster.data.map(d => d.date);
      const yValues = cluster.data.map(d => d.meanDay);
      const zValues = cluster.data.map(d => d.meanNight);

      plotTraces.push({
        type: 'scatter3d',
        mode: 'lines',
        name: cluster.name,
        meta: { clusterId: cluster.id },
        opacity: isVisible ? (isSelected ? 1 : 0.6) : 0.1,
        x: xValues,
        y: yValues,
        z: zValues,
        line: { color: cluster.color, width: isSelected ? 6 : 3 },
        customdata: cluster.data.map((_, idx) => ({ clusterId: cluster.id, pointIndex: idx })),
        hovertemplate: `<b>${cluster.name}</b><br>Mean_Day: %{y:.2f}<br>Mean_Night: %{z:.2f}<br>Date: %{x}<extra></extra>`,
        showlegend: true,
      });

      if (showAllAttributes) {
        const extraKeys = [
          { yKey: 'P10Day', zKey: 'P10Night', name: 'P10' },
          { yKey: 'P25Day', zKey: 'P25Night', name: 'P25' },
          { yKey: 'P75Day', zKey: 'P75Night', name: 'P75' },
          { yKey: 'P90Day', zKey: 'P90Night', name: 'P90' }
        ];
        extraKeys.forEach(config => {
          const yExtra = cluster.data.map(d => (d as any)[config.yKey] ?? d.meanDay);
          const zExtra = cluster.data.map(d => (d as any)[config.zKey] ?? d.meanNight);

          plotTraces.push({
            type: 'scatter3d',
            mode: 'lines',
            name: `${cluster.name} - ${config.name}`,
            meta: { clusterId: cluster.id },
            visible: isVisible,
            x: xValues,
            y: yExtra,
            z: zExtra,
            line: { color: cluster.color, width: 1.5 },
            opacity: isSelected ? 0.8 : 0.2,
            showlegend: true,
            clickinfo: 'skip'
          });
        });
      }
    });

    if (!isMultiSelectMode && selectedClusterId !== null && selectedPointIndex !== null) {
      const cluster = activeClusters.find(c => c.id === selectedClusterId);
      if (cluster && cluster.data[selectedPointIndex]) {
        const point = cluster.data[selectedPointIndex];
        plotTraces.push({
          type: 'scatter3d',
          mode: 'markers',
          name: 'Selected Point',
          x: [point.date],
          y: [point.meanDay],
          z: [point.meanNight],
          marker: {
            size: 6,
            color: 'white',
            line: { color: cluster.color, width: 10 },
            symbol: 'circle'
          },
          showlegend: true
        });
      }
    }

    return plotTraces;
  }, [activeClusters, selectedClusterId, selectedPointIndex, showAllAttributes, isMultiSelectMode, activeClusterIds]);

  // 3D场景布局
  const sceneLayout = useMemo(() => ({
        xaxis: { 
            title: { text: 'Date', font: { color: '#ffffff', size: 16 } },
            backgroundcolor: '#000000', 
            gridcolor: '#ffffffff', 
            showbackground: false,
            color: '#ffffff',
            titlefont: { color: '#ffffff' },
            tickfont: { color: '#ffffff' },
            zerolinecolor: '#ffffff', 
            dtick: 90,         
        },
        yaxis: { 
            title: { text: 'Mean_Day', font: { color: '#ffffff', size: 16 } },
            backgroundcolor: '#000000', 
            gridcolor: '#ffffffff', 
            showbackground: false,
            color: '#ffffff',
            titlefont: { color: '#ffffff' },
            tickfont: { color: '#ffffff' },
            zerolinecolor: '#ffffff', 
            range: [-7, 9],
            dtick: 2
        },
        zaxis: { 
            title: { text: 'Mean_Night', font: { color: '#ffffff', size: 16 } },
            backgroundcolor: '#000000', 
            gridcolor: '#ffffffff', 
            showbackground: false,
            color: '#ffffff',
            titlefont: { color: '#ffffff' },
            tickfont: { color: '#ffffff' },
            zerolinecolor: '#ffffff', 
            range: [-9, 6],
            dtick: 2
        },
        dragmode: 'turntable',
        aspectmode: 'cube',
        camera: { 
        eye: isAutoRotating 
        ? { 
            x: 2.12 * Math.cos(rotationAngle), 
            y: 2.12 * Math.sin(rotationAngle), 
            z: 1.5 
          } 
        : {x: lastCameraRef.current.x, y: lastCameraRef.current.y, z: lastCameraRef.current.z},

      projection: { type: 'perspective' as const }
      },
    }), [isAutoRotating, rotationAngle]);

  const layout: any = useMemo(() => ({
    autosize: true,
    showlegend: true,
    paper_bgcolor: '#000000',
    plot_bgcolor: '#000000',
    margin: { l: 0, r: 0, b: 0, t: 0, pad: 0 },
    legend: {
      x: 1.05, y: 0.9, xanchor: 'right', yanchor: 'top',
      bgcolor: 'rgba(15, 15, 15, 0)',
      font: { size: 14, color: '#ffffff' },
      orientation: 'v'
    },
    uirevision: 'true',
    scene: sceneLayout
  }), [sceneLayout]);

  // 点击事件处理
  const handlePlotClick = useCallback((event: any) => {
    if (!event.points || event.points.length === 0) return;
    setIsAutoRotating(false); 
    const point = event.points[0];
    const meta = point.customdata;
    if (meta) {
      if (isMultiSelectMode) {
        setActiveClusterIds(prev => 
          prev.includes(meta.clusterId) 
            ? prev.filter(id => id !== meta.clusterId) 
            : [...prev, meta.clusterId]
        );
      } else {
        handleClusterSelect(meta.clusterId, meta.pointIndex);
      }
    }
  }, [handleClusterSelect, isMultiSelectMode]);

  // 图例点击事件
  const handleLegendClick = (event: any) => {
    const clickedTrace = traces[event.curveNumber];
    if (clickedTrace && clickedTrace.meta && clickedTrace.meta.clusterId !== undefined) {
      const targetId = clickedTrace.meta.clusterId;
      
      if (isMultiSelectMode) {
        setActiveClusterIds(prev => 
          prev.includes(targetId) ? prev.filter(id => id !== targetId) : [...prev, targetId]
        );
      } else {
        handleClusterSelect(targetId, 0);
      }
    }
    return false;
  };

  return (
    <div className="absolute inset-0 bg-black overflow-hidden ">
      {/* K值选择控制 */}
      {!isEmbedded && (
        <div className="absolute top-8 left-8 z-30 flex items-center gap-8 bg-gray-1000 text-white px-4 py-2 rounded-lg border border-gray-700 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Select K:</span>
            {AVAILABLE_KS.map((val) => (
              <button
                key={val}
                onClick={() => switchToLocal(val)}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  !isCustomData && k === val
                    ? 'bg-white text-black shadow'
                    : 'bg-gray-1000 text-white hover:bg-gray-800'
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 加载状态和错误提示 */}
      {isLoading && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-white backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
        </div>
      )}
      {errorMsg && !isLoading && (
        <div className="absolute top-20 left-10 z-50 bg-red-50 text-red-700 px-4 py-3 rounded-md border border-red-200 shadow-sm flex items-center gap-2">
          <AlertCircle size={20} />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      {/* 属性显示控制 */}
      <div className="absolute bottom-8 right-8 z-30">
        <button
          onClick={() => setShowAllAttributes(prev => !prev)}
          className="px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-300 transition-colors text-sm flex items-center gap-2"
        >
          {showAllAttributes ? <> Show Mean Attributes</> : <> Show All Attributes</>}
        </button>
      </div>

      {/* 3D可视化控制按钮 */}
      <div className="absolute left-4 bottom-8 z-50 flex flex-col gap-2">
        <button
          onClick={() => {
            setIsMultiSelectMode(!isMultiSelectMode);
            setActiveClusterIds([]); 
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition-all text-sm font-medium border border-white/10 ${
            isMultiSelectMode ? 'bg-blue-600 text-white' : 'bg-white text-black'
          }`}
        >
          {isMultiSelectMode ? <><Layers size={16} /> Mode: Multi</> : <><MousePointer2 size={16} /> Mode: Single</>}
        </button>

        {selectedClusterId !== null && (
          <button onClick={handleReset} className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg text-sm">
            <Maximize2 size={20} /> Reset View
          </button> 
        )}
        
        <button onClick={() => setIsAutoRotating(!isAutoRotating)} className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm">
          {isAutoRotating ? <>Stop <Pause size={16} /></> : <>Play <Play size={16} /></>}
        </button>
        
        <Link to="/clusteringeomap" className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
          Geo Map
        </Link>
      </div>

      {/* 3D可视化组件 */}
      <div className="absolute inset-0">
        <Plot
          data={traces}
          layout={layout}
          style={{ width: '100%', height: '100%' }}
          onClick={handlePlotClick}
          onLegendClick={handleLegendClick} 
          config={{ displayModeBar: true, displaylogo: false }}
        />
      </div>

    </div>
  );
};

export default ClusterVisualizer3D;
