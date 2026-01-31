const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-BlhSiKxZ.js","assets/vendor-BipBZ3yL.js","assets/maplibre-DKOg2DWH.js","assets/vendor-Dgihpmma.css","assets/icons-DfMbvsEP.js","assets/UR-platform-Ccv40zBF.js","assets/openstreetmap-OuA5A2zx.js"])))=>i.map(i=>d[i]);
import{r as u,c as C,j as e,H as I,u as A,L as y,R as O,a as d,N as k,b as U}from"./vendor-BipBZ3yL.js";import"./maplibre-DKOg2DWH.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const E="modulepreload",D=function(r){return"/"+r},w={},v=function(n,i,c){let a=Promise.resolve();if(i&&i.length>0){let l=function(o){return Promise.all(o.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),j=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=l(i.map(o=>{if(o=D(o),o in w)return;w[o]=!0;const p=o.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":E,p||(m.as="script"),m.crossOrigin="",m.href=o,j&&m.setAttribute("nonce",j),document.head.appendChild(m),p)return new Promise((S,T)=>{m.addEventListener("load",S),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${o}`)))})}))}function t(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return a.then(l=>{for(const s of l||[])s.status==="rejected"&&t(s.reason);return n().catch(t)})},P=`import { useState,useEffect, useRef } from 'react';\r
import L from 'leaflet';\r
import 'leaflet/dist/leaflet.css';\r
import shp from 'shpjs';\r
import type React from 'react';\r
import GeoRasterLayer from 'georaster-layer-for-leaflet';\r
import parseGeoraster from 'georaster';\r
import { Shapes } from 'lucide-react';\r
import { Eye, EyeOff } from 'lucide-react';\r
\r
\r
const OpenStreetMapPage = () => {\r
    type LayerItem = {\r
        id: string;\r
        name: string;\r
        layer: L.Layer;\r
        visible: boolean;\r
        };\r
    const [layers, setLayers] = useState<LayerItem[]>([]);\r
    const mapContainerRef = useRef<HTMLDivElement | null>(null);\r
    const mapRef = useRef<L.Map | null>(null);\r
    const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);\r
    const rasterLayerRef = useRef<any>(null);\r
\r
  /* ===============================\r
   * 初始化地图（只跑一次）\r
   * =============================== */\r
  useEffect(() => {\r
    if (!mapContainerRef.current || mapRef.current) return;\r
\r
    const osm = L.tileLayer(\r
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\r
      { attribution: '© OpenStreetMap', maxZoom: 19 }\r
    );\r
\r
    const dark = L.tileLayer(\r
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',\r
      { attribution: '© CARTO', maxZoom: 19 }\r
    );\r
\r
    const light = L.tileLayer(\r
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',\r
      { attribution: '© CARTO', maxZoom: 19 }\r
    );\r
\r
    mapRef.current = L.map(mapContainerRef.current, {\r
      center: [20, 0],\r
      zoom: 2,\r
      layers: [osm],\r
      zoomControl: true, // 手动放置缩放控件\r
    });\r
    \r
    /* ---------- Controls ---------- */\r
    const baseLayers = {\r
      OpenStreetMap: osm,\r
      Dark: dark,\r
      Light: light,\r
\r
    };\r
\r
    const overlays: Record<string, L.Layer> = {};\r
    L.control.scale({ imperial: false }).addTo(mapRef.current);\r
\r
    L.control.layers(baseLayers, overlays, {\r
      position: 'topright',\r
    }).addTo(mapRef.current);\r
\r
    L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);\r
\r
    return () => {\r
      mapRef.current?.remove();\r
      mapRef.current = null;\r
    };\r
  }, []);\r
\r
/* ===============================\r
* 加载 GeoJSON\r
* =============================== */\r
const loadGeoJSON = (data: GeoJSON.GeoJsonObject, name: string) => {\r
  if (!mapRef.current) return;\r
\r
  // 清空旧图层\r
  geoJsonLayerRef.current?.remove();\r
\r
  // 创建 GeoJSON 图层\r
  const geoLayer = L.geoJSON(data, {\r
    style: {\r
      color: '#3b82f6',\r
      weight: 2,\r
      fillOpacity: 0.2,\r
    },\r
    onEachFeature: (feature, layer) => {\r
      if (layer instanceof L.Path) {\r
        layer.on({\r
          mouseover: () => layer.setStyle({ fillOpacity: 0.5 }),\r
          mouseout: () => layer.setStyle({ fillOpacity: 0.2 }),\r
        });\r
      }\r
\r
      if (feature.properties) {\r
        layer.bindPopup(\r
          Object.entries(feature.properties)\r
            .map(([k, v]) => \`\${k}: \${v}\`)\r
            .join('<br/>')\r
        );\r
      }\r
    },\r
  });\r
\r
  // **Add 到地图上（这里才 addTo）**\r
  geoLayer.addTo(mapRef.current);\r
\r
  // 保存到 ref\r
  geoJsonLayerRef.current = geoLayer;\r
\r
  // 添加到 Layer 管理数组\r
  setLayers(prev => [\r
    ...prev,\r
    {\r
      id: crypto.randomUUID(),\r
      name,\r
      layer: geoLayer,\r
      visible: true,\r
    },\r
  ]);\r
\r
  mapRef.current.fitBounds(geoLayer.getBounds());\r
};\r
\r
/* ===============================\r
* GeoJSON 上传\r
* =============================== */\r
const handleGeoJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {\r
const file = e.target.files?.[0];\r
if (!file) return;\r
\r
const reader = new FileReader();\r
reader.onload = () => {\r
const data = JSON.parse(reader.result as string);\r
loadGeoJSON(data, file.name);\r
};\r
reader.readAsText(file);\r
};\r
\r
/* ===============================\r
* Shapefile 上传（zip）\r
* =============================== */\r
const handleShapefileUpload = async (\r
e: React.ChangeEvent<HTMLInputElement>\r
) => {\r
const file = e.target.files?.[0];\r
if (!file) return;\r
\r
const arrayBuffer = await file.arrayBuffer();\r
const geojson = await shp(arrayBuffer);\r
\r
loadGeoJSON(geojson, file.name);\r
};\r
/* ===============================\r
* 加载 Raster\r
* =============================== */\r
const loadRaster = async (arrayBuffer: ArrayBuffer, name: string) => {\r
  if (!mapRef.current) return;\r
\r
  // 清除旧 raster\r
  if (rasterLayerRef.current) {\r
    mapRef.current.removeLayer(rasterLayerRef.current);\r
  }\r
\r
  const georaster = await parseGeoraster(arrayBuffer);\r
\r
  const layer = new GeoRasterLayer({\r
    georaster,\r
    opacity: 0.7,\r
    resolution: 256, // 越大越清晰，但更卡\r
  });\r
\r
  rasterLayerRef.current = layer;\r
  layer.addTo(mapRef.current);\r
\r
  setLayers(prev => [\r
    ...prev,\r
    {\r
      id: crypto.randomUUID(),\r
      name,\r
      layer,\r
      visible: true,\r
    },\r
  ]);\r
\r
  mapRef.current.fitBounds(layer.getBounds());\r
};\r
/* ===============================\r
* Raster 上传\r
* =============================== */\r
const handleRasterUpload = async (\r
  e: React.ChangeEvent<HTMLInputElement>\r
) => {\r
  const file = e.target.files?.[0];\r
  if (!file) return;\r
\r
  const buffer = await file.arrayBuffer();\r
  await loadRaster(buffer, file.name);\r
};\r
\r
    /* ===============================\r
    * 清空图层\r
    * =============================== */\r
    const clearLayers = () => {\r
    layers.forEach(l => mapRef.current?.removeLayer(l.layer));\r
    setLayers([]); // 同时清空数组\r
    rasterLayerRef.current = null;\r
    geoJsonLayerRef.current = null;\r
    };\r
\r
  return (\r
    <div className="flex w-full h-screen">\r
        {/* =============left side toolbox============= */}\r
        <div className="flex flex-col border-r h-full">\r
            {/* ================= Toolbox ================= */}\r
            <div className="w-64 border-r p-4 space-y-4 text-sm">\r
            <h3 className="font-mono text-xs uppercase text-neutral-400">Toolbox</h3>\r
\r
            <div>\r
                <label className="block mb-1">Upload GeoJSON</label>\r
                <input type="file" accept=".geojson,.json" onChange={handleGeoJsonUpload} />\r
            </div>\r
\r
            <div>\r
                <label className="block mb-1">Upload Shapefile (.zip)</label>\r
                <input type="file" accept=".zip" onChange={handleShapefileUpload} />\r
            </div>\r
            <div>\r
            <label className="block mb-1">Upload GeoTIFF</label>\r
            <input\r
                type="file"\r
                accept=".tif,.tiff"\r
                onChange={handleRasterUpload}\r
            />\r
            </div>\r
            <button\r
                onClick={clearLayers}\r
                className="px-3 py-1 border text-xs"\r
            >\r
                Clear Layers\r
            </button>\r
            </div>\r
            {/* ================= Layers 列表 ================= */}\r
            <div className="w-64 border-r p-4 space-y-4 text-sm">\r
            <h3 className="font-mono text-xs uppercase text-neutral-400">Layers</h3>\r
\r
\r
            {layers.map(l => (\r
            <div key={l.id} className="flex items-center justify-between border-r px-4 py-2">\r
            <span className="truncate">{l.name}</span>\r
            <button\r
                onClick={() => {\r
                if (!mapRef.current) return;\r
\r
                if (l.visible) {\r
                    mapRef.current.removeLayer(l.layer);\r
                } else {\r
                    l.layer.addTo(mapRef.current);\r
                }\r
\r
                setLayers(prev =>\r
                    prev.map(x =>\r
                    x.id === l.id ? { ...x, visible: !x.visible } : x\r
                    )\r
                );\r
                }}\r
            >\r
                {l.visible ? <Eye size={16} /> : <EyeOff size={16} />}\r
            </button>\r
            </div>\r
        ))}\r
        </div>\r
    </div>\r
        {/* ================= Map ================= */}\r
        <div ref={mapContainerRef} className="flex-1" />\r
    </div>\r
  );\r
};\r
\r
export default OpenStreetMapPage;\r
`,G=u.lazy(()=>v(()=>import("./App-BlhSiKxZ.js"),__vite__mapDeps([0,1,2,3,4]))),M=u.lazy(()=>v(()=>import("./UR-platform-Ccv40zBF.js"),__vite__mapDeps([5,1,2,3,4]))),_=u.lazy(()=>v(()=>import("./openstreetmap-OuA5A2zx.js"),__vite__mapDeps([6,1,2,3,4]))),N=[{id:"01",slug:"cluster-visualizer-3d",title:"Cluster Visualizer 3D",category:"Global heat mapping",year:"2024-present",description:"A 3D exploration of high-dimensional data clusters using PCA and K-Means.",tech:["Python","Three.js","React"],hasDemo:!0,component:e.jsx(G,{}),details:{abstract:"An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, the project visualizes complex data patterns in an intuitive manner.",challenge:"compressed 223 cities in global data and revel the pattern from window period of time-series data from 2017 to 2019 with both day and night time data",solution:"Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance.",logo:"./data/fig/global_logo.jpg",image:["./data/fig/global-5.jpg","./data/fig/global-12.jpg","./data/fig/global-20.jpg","./data/fig/global-26.jpg"]}},{id:"02",slug:"knowledge-graph-urban-planning",title:"Knowledge Graph Generation from Urban Planning Texts",category:"Knowledge Graph",year:"2025-present",description:"A Comparative Analysis for Climate Change Adaptation in New York and Shanghai Master Plans",tech:["Knowledge Graph","NLP"],details:{abstract:"Urban planners often struggle to learn from other cities’ master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from the master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to estimate node weights and relational edges. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their 【black box】 nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and improving climate change strategies.",solution:"Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes.",challenge:"Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation.",logo:"./data/fig/kg_logo.jpg",image:["./data/fig/kg_figure.jpg"]}},{id:"03",slug:"local-climate-zones-urban-heat-resilience",title:"Local Climate Zones and Urban Heat Resilience",category:"GIS & Spatial Analysis",year:"2025-present",description:"An empirical study in different climate zones in the United States",tech:["GIS","Spatial Analysis"],details:{abstract:"As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance.",solution:"Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies two pairs of heat events based on air temperature percentiles.",challenge:"Translating complex urban form findings into practical urban planning policies remains challenging.",logo:"./data/fig/lcz_logo.jpg",image:["./data/fig/lcz_figure.jpg"]}},{id:"04",slug:"urban-heat-resilience-machine-learning",title:"Assessing Urban Heat Resilience",category:"Machine Learning",year:"2025-present",description:"Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach",tech:["GIS","Machine Learning"],details:{abstract:"Climate change has been a pressing global issue in the recent decades as it increasingly influences human life through extreme weather,ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE).  In addition, the results indicate that the urban form factors have nonlinearity relationships with urban land surface extreme heat and the associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities. ",solution:"To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods.",challenge:"Majority of existing studies have relied on traditional regression models that assume linear relationships.",logo:"./data/fig/ml_logo.jpg",image:["./data/fig/ml_figure.jpg"]}},{id:"05",slug:"participatory-urban-regeneration-empowered-by-artificial-intelligence",title:"Participatory Urban Regeneration Empowered by Artificial Intelligence",category:"Urban regeneration, participatory urban planning",year:"2025-present",description:"Using AI techniques to buold a platform to encourage stakeholders joining in the urban regeneration",tech:["diffusion models"],hasDemo:!0,component:e.jsx(M,{}),details:{abstract:"This project integrates generative artificial intelligence techniques, including diffusion models, with large language model-based multi-agent mechanisms to develop a participatory urban regeneration framework that facilitates public interaction and multi-stakeholder engagement. Taking the area surrounding the initial development zone of Shanghai Wusong Innovation City as a case study, the framework incorporates urban spatial morphology, behavioral activity patterns, and urban heat island indicators into the early formulation of urban design guidelines, with the aim of achieving a participatory, efficient, and responsive pathway to urban regeneration.",solution:"https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm",challenge:"",logo:"./data/fig/PU_logo.jpg",image:["./data/fig/PU-1.jpg","./data/fig/PU-2.jpg"]}}],L=[{id:"01",slug:"1037pinpin",title:"1037pinpin - Campus Item Exchange Platform",category:"UI&UX Design",year:"2023",description:"A campus-based item exchange platform facilitating sustainable sharing among students.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{image:["./data/fig/1037pinpin.jpg"],logo:"./data/fig/1037pinpin_logo.jpg"}},{id:"02",slug:"perslearn",title:"persLEARN - Educational Platform for Scientific Thinking",category:"UI&UX Design",year:"2023",description:"An educational platform aimed at helping students develop scientific thinking through interactive modules.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{image:["./data/fig/persLEARN.jpg"],logo:"./data/fig/persLEARN_logo.jpg"}},{id:"03",slug:"dragon-diffussion",title:"Dragon Diffussion - AI Image Generation Tool",category:"UI&UX Design",year:"2024",description:"An AI-powered image generation tool that transforms text prompts into high-quality visuals platform.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{image:["./data/fig/DragonDiffusion.jpg"],logo:"./data/fig/DragonDiffusion_logo.jpg"}},{id:"04",slug:"genstyle",title:"Genstyle - Daily Outfit Inspiration Delivered",category:"UI&UX Design",year:"2025",description:"An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{image:["./data/fig/Genstyle.jpg"],logo:"./data/fig/Genstyle_logo.jpg"}},{id:"05",slug:"bazi-fengshui-analysis",title:"Bazi - Fengshui Analysis Application",category:"UI&UX Design",year:"2025",description:"An app that provides personalized AI Fengshui insights based on users' birth data and environmental factors.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{abstract:"This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korea users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner.",image:["./data/fig/Bazi.jpg"],logo:"./data/fig/Bazi_logo.jpg"}},{id:"06",slug:"genshot-AI-video-generation-tool",title:"Genshot - AI videos Generation Tool",category:"UI&UX Design",year:"2025",description:"An AI-powered image generation tool that transforms text prompts into high-quality visuals platform.",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{image:["./data/fig/Genshot.jpg"],logo:"./data/fig/Genshot_logo.jpg"}},{id:"07",slug:"riffle-ai-game-generation-tool",title:"Riffle - AI game Generation Tool",category:"UI&UX Design",year:"2026 - ongoing",description:"An AI-powered game generation tool",tech:["Figma","React","TypeScript"],hasDemo:!0,details:{abstract:"Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease.",image:["./data/fig/Riffle.jpg"],logo:"./data/fig/Riffle_logo.jpg"}}],R=[{id:"01",slug:"how to add openstreet map in website",title:"How to Add OpenStreetMap in Website",category:"Tutorial",year:"2026",description:"A tutorial on integrating OpenStreetMap into a website.",tech:["python","React","TypeScript"],hasDemo:!0,component:e.jsx(_,{}),details:{description:"This tutorial explains how to integrate OpenStreetMap into a website using React and JavaScript.",solution:"You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started.",challenge:"Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners.",codeComponent:P,content:"This tutorial covers the basics of adding OpenStreetMap to your website, including setting up the map container, initializing the map, adding tile layers, and incorporating markers and GeoJSON data for enhanced interactivity.",image:["./data/fig/OpenStreetMap.jpg"],logo:"./data/fig/Openstreetmap_logo.jpg"}}],f=({data:r,type:n})=>e.jsxs("div",{className:"p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-8",children:[e.jsxs("h2",{className:"text-xl font-medium text-neutral-900",children:["Selected ",n==="research"?"Research":"Design"]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:["Idx: ",r.length]})]}),e.jsx("div",{className:"grid gap-4",children:r.map(i=>e.jsxs(y,{to:`/${n}/${i.slug}`,className:"group relative border border-neutral-200 p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 cursor-pointer hover:shadow-sm flex gap-6 items-center",children:[e.jsx("div",{className:"absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx("span",{className:"text-[10px] font-mono border border-neutral-900 px-1",children:"OPEN_PROJECT ↗"})}),e.jsx("div",{className:"flex-shrink-0 w-24 h-24 border border-neutral-100 overflow-hidden bg-neutral-50",children:e.jsx("img",{src:i.details.logo,alt:i.title,className:"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",i.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:i.year})]}),e.jsx("h3",{className:"text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate",children:i.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-1",children:i.description})]})]},i.slug))})]}),x=({data:r,type:n})=>{const{id:i}=U(),[c,a]=u.useState("details"),t=r.find(l=>l.slug===i);return t?e.jsxs("div",{className:"h-full flex flex-col animate-in slide-in-from-right-4 duration-500",children:[e.jsxs("div",{className:"sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(y,{to:`/${n}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200"}),e.jsx("h2",{className:"text-sm font-bold text-neutral-900",children:t.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>a("details"),className:`px-3 py-1 text-xs font-mono ${c==="details"?"bg-white shadow-sm":"text-neutral-500"}`,children:"DOCS"}),t.hasDemo&&e.jsxs("button",{onClick:()=>a("demo"),className:`px-3 py-1 text-xs font-mono flex items-center gap-2 ${c==="demo"?"bg-white text-blue-600 shadow-sm":"text-neutral-500"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"SIMULATION"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:c==="details"?e.jsxs("div",{className:"p-6 md:p-10 max-w-screen-xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm text-neutral-600 border-b border-neutral-100 pb-8",children:[e.jsxs("div",{children:[e.jsx("span",{className:"block font-mono text-xs text-neutral-400 uppercase mb-1",children:"ID"}),"NO. ",t.id]}),e.jsxs("div",{children:[e.jsx("span",{className:"block font-mono text-xs text-neutral-400 uppercase mb-1",children:"Year"}),t.year]}),e.jsxs("div",{children:[e.jsx("span",{className:"block font-mono text-xs text-neutral-400 uppercase mb-1",children:"Category"}),t.category]}),e.jsxs("div",{children:[e.jsx("span",{className:"block font-mono text-xs text-neutral-400 uppercase mb-1",children:"Tech"}),e.jsx("span",{className:"text-xs truncate block",children:t.tech.join(", ")})]})]}),e.jsxs("div",{className:"prose prose-neutral prose-sm max-w-none",children:[e.jsx("h1",{className:"text-3xl font-light mb-6 text-neutral-900",children:t.title}),e.jsxs("div",{className:"bg-neutral-50 border-l-2 border-neutral-900 p-6 mb-8 font-serif italic text-neutral-700",children:['"',t.description,'"']}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-8",children:[e.jsxs("div",{className:"md:col-span-8 space-y-8",children:[t.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-2",children:"Abstract"}),e.jsx("p",{className:"leading-relaxed text-neutral-800",children:t.details.abstract})]}),t.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-2",children:"Methodology"}),e.jsx("p",{className:"leading-relaxed text-neutral-800",children:t.details.solution})]}),t.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-2",children:"Challenges"}),e.jsx("p",{className:"leading-relaxed text-neutral-800",children:t.details.challenge})]}),t.details.codeComponent&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-2",children:"Code Example"}),e.jsx("pre",{className:"bg-neutral-50 border border-neutral-100 p-4 overflow-x-auto text-xs",children:e.jsx("code",{children:t.details.codeComponent})})]}),t.details.image&&t.details.image.length>0&&e.jsxs("section",{id:"images",className:"space-y-6",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-2",children:"Images"}),e.jsx("div",{className:"grid gap-4",children:t.details.image.map((l,s)=>e.jsx("div",{className:"border border-neutral-100 overflow-hidden bg-neutral-50",children:e.jsx("img",{src:l,alt:`${t.title} - ${s+1}`,className:"w-full h-auto object-cover"})},s))})]})]}),e.jsx("div",{className:"md:col-span-4",children:e.jsxs("div",{className:"sticky top-24 border border-neutral-100 p-4 bg-white",children:[e.jsx("h3",{className:"text-xs font-mono uppercase text-neutral-400 mb-4",children:"Contents"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[t.details.abstract&&e.jsx("li",{children:e.jsx("button",{onClick:()=>g("abstract"),className:"text-neutral-700 hover:underline",children:"Abstract"})}),t.details.solution&&e.jsx("li",{children:e.jsx("button",{onClick:()=>g("methodology"),className:"text-neutral-700 hover:underline",children:"Methodology"})}),t.details.challenge&&e.jsx("li",{children:e.jsx("button",{onClick:()=>g("challenges"),className:"text-neutral-700 hover:underline",children:"Challenges"})}),t.details.codeComponent&&e.jsx("li",{children:e.jsx("button",{onClick:()=>g("code"),className:"text-neutral-700 hover:underline",children:"Code Example"})}),t.details.image&&t.details.image.length>0&&e.jsx("li",{children:e.jsx("button",{onClick:()=>g("images"),className:"text-neutral-700 hover:underline",children:"Images"})})]})]})})]})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 relative",children:e.jsx(u.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center h-full font-mono",children:"LOADING_MODULE..."}),children:e.jsxs("div",{className:"w-full h-full min-h-screen",children:["  ",t.component?e.jsx("div",{className:"w-full h-full",children:t.component}):e.jsx("div",{className:"flex items-center justify-center h-full text-neutral-400 font-mono",children:"NO_SIGNAL"})]})})})})]}):e.jsx("div",{className:"p-10 font-mono",children:"PROJECT_NOT_FOUND"})},g=r=>{const n=document.getElementById(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},z=()=>{const[r,n]=u.useState(!0),c=A().pathname.split("/")[1]||"research";return e.jsx("div",{className:"min-h-screen p-0 bg-neutral-100 flex justify-center items-center h-screen overflow-hidden",children:e.jsxs("div",{className:"w-full max-w-10xl h-[100vh] bg-white border border-neutral-10 shadow-xl flex flex-col relative overflow-hidden",children:[e.jsxs("header",{className:"border-b border-neutral-200 p-4 flex justify-between items-center bg-white z-10 shrink-0 h-10",children:[e.jsxs("h1",{className:"text-2xl font-bold tracking-tight text-neutral-900",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500",children:"PORTFOLIO_OS"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(b,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(b,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(b,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]}),e.jsxs("main",{className:"flex flex-1 overflow-hidden relative",children:[e.jsxs("aside",{className:`border-r border-neutral-200 bg-neutral-50/50 flex flex-col transition-all duration-500 ease-in-out relative ${r?"w-80 p-6":"w-12 py-6 items-center"}`,children:[e.jsx("button",{onClick:()=>n(!r),className:"absolute top-1/2 -right-3 w-6 h-12 bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-400 hover:text-neutral-900 z-20 rounded-r-md",children:r?"‹":"›"}),e.jsx("nav",{className:"flex flex-col gap-2 w-full",children:["research","design","tutorial","about","contact"].map(a=>e.jsx(y,{to:`/${a}`,className:`px-4 py-3 text-sm font-medium border-l-2 transition-all ${r?"":"w-8 h-8 !p-0 flex items-center justify-center"} ${c===a?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:r?a.charAt(0).toUpperCase()+a.slice(1):a.charAt(0).toUpperCase()},a))})]}),e.jsx("section",{className:"flex-1 bg-white relative overflow-y-auto",children:e.jsxs(O,{children:[e.jsx(d,{path:"/",element:e.jsx(k,{to:"/research",replace:!0})}),e.jsx(d,{path:"/research",element:e.jsx(f,{data:N,type:"research"})}),e.jsx(d,{path:"/research/:id",element:e.jsx(x,{data:N,type:"research"})}),e.jsx(d,{path:"/design",element:e.jsx(f,{data:L,type:"design"})}),e.jsx(d,{path:"/design/:id",element:e.jsx(x,{data:L,type:"design"})}),e.jsx(d,{path:"/tutorial",element:e.jsx(f,{data:R,type:"tutorial"})}),e.jsx(d,{path:"/tutorial/:id",element:e.jsx(x,{data:R,type:"tutorial"})}),e.jsx(d,{path:"/about",element:e.jsx(H,{})}),e.jsx(d,{path:"/contact",element:e.jsx(B,{})})]})})]})]})})},H=()=>e.jsxs("div",{className:"p-6 md:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-8",children:"About Me"}),e.jsxs("div",{className:"prose prose-neutral prose-sm font-light text-lg text-neutral-800 leading-relaxed",children:[e.jsxs("p",{className:"text-lg text-neutral-800 leading-relaxed mb-6 font-light",children:["I am Lili Lin, a Master’s student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"urban heat environments"}),". I received my Bachelor’s degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-lg text-neutral-800 leading-relaxed mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-lg text-neutral-800 leading-relaxed mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"UI&UX designers and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-2 gap-8 mt-12 border-t border-neutral-100 pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),B=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 transition-colors",children:"SEND_TRANSMISSION"})]}),b=({href:r,label:n})=>e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 text-xs font-mono text-neutral-500 hover:bg-neutral-900 hover:text-white transition-all",children:n}),F=C.createRoot(document.getElementById("root"));F.render(e.jsx(I,{children:e.jsx(z,{})}));
