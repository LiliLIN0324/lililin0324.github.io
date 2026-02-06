import { createRoot } from "react-dom/client";

import { HashRouter as Router, Routes, Route, Link, Outlet, useParams, useLocation, Navigate } from 'react-router-dom';
import './src/index.css';
// 1. 修改 import 方式
import React, { useState, useEffect, Suspense, lazy } from "react"; // 增加 Suspense 和 lazy
import { on } from "events";

// 使用 lazy 动态导入
const ClusterVisualizer3D = lazy(() => import("./src/App.tsx"));
const URplatform = lazy(() => import("./src/UR-platform.tsx"));
const OpenStreetMap = lazy(() => import("./src/openstreetmap"));
const SequentialEvents = lazy(() => import("./src/photogeo"));
const PhotoGeolocationMap = lazy(() => import("./src/photogeomap"));
const WeChatGameDemo = lazy (() => import("./src/wechatgame"));
import openStreetMapSource from './src/openstreetmap?raw';
import SequentialEventsSource from './src/photogeo?raw';
import PhotoGeolocationMapSource from './src/photogeomap?raw';
import WeChatGameDemoSource from './src/wechatgame?raw';
import { Component } from "lucide-react";

// 数据部分保持不变
const projects = [
    {
      id: "01",
      slug: "cluster-visualizer-3d",
      title: "Cluster Visualizer 3D",
      category: "Global heat mapping",
      year: "2024-present",
      description: "A 3D exploration of high-dimensional data clusters using PCA and K-Means.",
      tech: ["Python", "Three.js", "React"],
      hasDemo: true,
      component: <ClusterVisualizer3D />,
      details: {
        abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, the project visualizes complex data patterns in an intuitive manner.",
        challenge: "compressed 223 cities in global data and revel the pattern from window period of time-series data from 2017 to 2019 with both day and night time data",
        solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance.",
        logo: "./data/fig/global_logo.jpg",
        image: ["./data/fig/global-5.jpg",  "./data/fig/global-12.jpg", "./data/fig/global-20.jpg" , "./data/fig/global-26.jpg"],
      },
    },
    {
      id: "02",
      slug: "knowledge-graph-urban-planning",
      title: "Knowledge Graph Generation from Urban Planning Texts",
      category: "Knowledge Graph",
      year: "2025-present",
      description: "A Comparative Analysis for Climate Change Adaptation in New York and Shanghai Master Plans",
      tech: ["Knowledge Graph", "NLP"],
      details: {
        abstract: "Urban planners often struggle to learn from other cities’ master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from the master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to estimate node weights and relational edges. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their 【black box】 nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and improving climate change strategies.",
        solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes.",
        challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation.",
        logo: "./data/fig/kg_logo.jpg",
        image: ["./data/fig/kg_figure.jpg"],
      },  
    },
    {
      id: "03",
      slug: "local-climate-zones-urban-heat-resilience",
      title: "Local Climate Zones and Urban Heat Resilience",
      category: "GIS & Spatial Analysis",
      year: "2025-present",
      description: "An empirical study in different climate zones in the United States",
      tech: ["GIS", "Spatial Analysis"],
      details: {
        abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance.",
        solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies two pairs of heat events based on air temperature percentiles.",
        challenge: "Translating complex urban form findings into practical urban planning policies remains challenging.",
        logo: "./data/fig/lcz_logo.jpg",
        image: ["./data/fig/lcz_figure.jpg"],
      }, 
    },
    {
      id: "04",
      slug: "urban-heat-resilience-machine-learning",
      title: "Assessing Urban Heat Resilience",
      category: "Machine Learning",
      year: "2025-present",
      description: "Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach",
      tech: ["GIS", "Machine Learning"],
      details: {
        abstract: "Climate change has been a pressing global issue in the recent decades as it increasingly influences human life through extreme weather,ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE).  In addition, the results indicate that the urban form factors have nonlinearity relationships with urban land surface extreme heat and the associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities. ",

        solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods.",
        challenge: "Majority of existing studies have relied on traditional regression models that assume linear relationships.",
        logo: "./data/fig/ml_logo.jpg",
        image: ["./data/fig/AAAI2026.jpg"],
      }
    },
    {
      id: "05",
      slug: "participatory-urban-regeneration-empowered-by-artificial-intelligence",
      title: "Participatory Urban Regeneration Empowered by Artificial Intelligence",
      category: "Urban regeneration, participatory urban planning",
      year: "2025-present",
      description: "Using AI techniques to buold a platform to encourage stakeholders joining in the urban regeneration",
      tech: ["diffusion models"],
      hasDemo: true,
      component: <URplatform />,
      details: {
        abstract: "This project integrates generative artificial intelligence techniques, including diffusion models, with large language model-based multi-agent mechanisms to develop a participatory urban regeneration framework that facilitates public interaction and multi-stakeholder engagement. Taking the area surrounding the initial development zone of Shanghai Wusong Innovation City as a case study, the framework incorporates urban spatial morphology, behavioral activity patterns, and urban heat island indicators into the early formulation of urban design guidelines, with the aim of achieving a participatory, efficient, and responsive pathway to urban regeneration.",
        solution: "https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm",
        challenge: "",
        logo: "./data/fig/PU_logo.jpg",
        image: ["./data/fig/PU-1.jpg","./data/fig/PU-2.jpg"],
      }
    } 
];

const designProjects = [
    {
      id: "01",
      slug: "1037pinpin",
      title: "1037pinpin - Campus Item Exchange Platform",
      category: "UI&UX Design",
      year: "2023",
      description: "A campus-based item exchange platform facilitating sustainable sharing among students.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        image: ["./data/fig/1037pinpin.jpg"],
        logo: "./data/fig/1037pinpin_logo.jpg",
      }
    },
    {
      id: "02",
      slug: "perslearn",
      title: "persLEARN - Educational Platform for Scientific Thinking",
      category: "UI&UX Design",
      year: "2023",
      description: "An educational platform aimed at helping students develop scientific thinking through interactive modules.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        image: ["./data/fig/persLEARN.jpg"],
        logo: "./data/fig/persLEARN_logo.jpg",
      }
    },
    {
      id: "03",
      slug: "dragon-diffussion",
      title: "Dragon Diffussion - AI Image Generation Tool",
      category: "UI&UX Design",
      year: "2024",
      description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        image: ["./data/fig/DragonDiffusion.jpg"],
        logo: "./data/fig/DragonDiffusion_logo.jpg",
      }
    },
    {
      id: "04",
      slug: "genstyle",
      title: "Genstyle - Daily Outfit Inspiration Delivered",
      category: "UI&UX Design",
      year: "2025",
      description: "An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        image: ["./data/fig/Genstyle.jpg"],
        logo: "./data/fig/Genstyle_logo.jpg",
      }
    },
    {
      id: "05",
      slug: "bazi-fengshui-analysis",
      title: "Bazi - Fengshui Analysis Application",
      category: "UI&UX Design",
      year: "2025",
      description: "An app that provides personalized AI Fengshui insights based on users' birth data and environmental factors.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korea users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner.",
        image: ["./data/fig/Bazi.jpg"],
        logo: "./data/fig/Bazi_logo.jpg",
      }
    },
    {
      id: "06",
      slug:"genshot-AI-video-generation-tool",
      title: "Genshot - AI videos Generation Tool",
      category: "UI&UX Design",
      year: "2025",
      description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform.",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        image: ["./data/fig/Genshot.jpg"],
        logo: "./data/fig/Genshot_logo.jpg",
      }
    },
    {
      id: "07",
      slug:"riffle-ai-game-generation-tool",
      title: "Riffle - AI game Generation Tool",
      category: "UI&UX Design",
      year: "2026 - ongoing",
      description: "An AI-powered game generation tool",
      tech: ["Figma", "React", "TypeScript"],
      details: {
        abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease.",
        image: ["./data/fig/Riffle.jpg"],
        logo: "./data/fig/Riffle_logo.jpg",
      }
    }
];

const tutorialProjects = [
    {
      id: "01",
      slug: "how-to-add-openstreetmap-in-website",
      title: "How to Add OpenStreetMap in Website",
      category: "Tutorial",
      year: "2026",
      description: "A tutorial on integrating OpenStreetMap into a website.",
      tech: ["python", "React", "TypeScript"],
      hasDemo: true, 
      component: <OpenStreetMap />,
      details: {
        description: "This tutorial explains how to integrate OpenStreetMap into a website using React and JavaScript.",
        solution: "You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started.",
        challenge: "Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners." ,
        codeComponent: openStreetMapSource,
        content: "This tutorial covers the basics of adding OpenStreetMap to your website, including setting up the map container, initializing the map, adding tile layers, and incorporating markers and GeoJSON data for enhanced interactivity.",
        image: ["./data/fig/openstreetmap.png"],
        logo: "./data/fig/Openstreetmap_logo.jpg",
      },
    },
    {
      id: "02",
      slug: "how-to-get-sequential-events-from-photo-by-phone",
      title: "How to get sequential events from photo by phone",
      category: "Tutorial",
      year: "2026",
      description: "A tutorial on extracting sequential events from photos taken on a phone.",
      tech: ["Computer Vision", "Image Processing"],
      hasDemo: true,
      component:<SequentialEvents />,
      details: {
        description: "This tutorial explains how to extract sequential events from photos taken on a phone using computer vision techniques.",
        solution: "By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process.",
        challenge: "Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events.",
        codeComponent: SequentialEventsSource,
        image: ["./data/fig/photogeo.png"],
        logo: "./data/fig/Geophoto_logo.jpg",
    }
    },
    {
      id: "03",
      slug: "how-to-visualize-photo-geolocation-data-on-map",
      title: "How to visualize photo geolocation data on map",
      category: "Tutorial",
      year: "2026",
      description: "A tutorial on visualizing photo geolocation data on a map.",
      tech: ["Mapping", "Image Processing"],
      hasDemo: true,
      component:<PhotoGeolocationMap />,
      details: {
        description: "This tutorial explains how to visualize photo geolocation data on a map using mapping libraries and geospatial data processing techniques.",
        solution: "By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations.",
        challenge: "Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data.",
        codeComponent: PhotoGeolocationMapSource,
        image: ["./data/fig/photogeomap.png"],
        logo: "./data/fig/GeophotoMap_logo.jpg",
    }
    },
    {
      id: "04",
      slug: "how-to-build-game-in-wechat-mini-program",
      title: "How to build game in wechat mini program",
      category: "Tutorial",
      year: "2026",
      description: "A tutorial on building games in WeChat Mini Programs.",
      tech: ["WeChat Mini Program", "Game Development"],  
      hasDemo: true,
      component: <WeChatGameDemo />,
      details: {
        description: "This tutorial explains how to build games in WeChat Mini Programs using the WeChat development framework and game development techniques.",
        solution: "By following the WeChat Mini Program development guidelines and utilizing game development libraries, you can create engaging games for the WeChat platform. This tutorial provides step-by-step instructions and code examples to help you get started.", 
        challenge: `Vibecoding 走的是标准的现代工程化路线。它以 TypeScript 为核心，配合现代前端框架和成熟的工具链，提供了极佳的类型检查和调试体验。虽然前期存在一定的学习成本，但换来的是更高密度的开发效率和代码健壮性。相比之下，微信小程序原生开发依赖 JS，虽然简单，但缺乏 TS 那种严谨的开发约束。在微信开发平台上，无法像 Web 那样顺畅地使用 npm 包管理，很多时候仍需依赖 wx.require 引入，且对 ES6 模块化语法的支持不够彻底，导致代码复用和迁移成本极高; 受限于微信的底层架构，Canvas 渲染性能有限，尤其在处理复杂交互或高频渲染时，调试起来非常不便，开发者需要花费大量精力去适应微信特有的生态规则和用户习惯;微信对代码体积和性能有着极其严苛的限制。`,
        codeComponent: WeChatGameDemoSource,
        image: ["./data/fig/wechatgame.png"],
        logo: "./data/fig/WeChatGame_logo.jpg",
      },
    }
];

const ProjectListView = ({ data, type }: { data: any[], type: string }) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-medium text-neutral-900">Selected {type === 'research' ? 'Researches' : type === 'design' ? 'Designs' : 'Tutorials' }</h2>
        <div className="flex items-center gap-4">
          <div className="flex bg-neutral-100 p-1 rounded-sm border border-neutral-200">
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-xs font-mono ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}
            >
              LIST
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-xs font-mono ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}
            >
              GRID
            </button>
          </div>
          <span className="text-xs font-mono text-neutral-400">Idx: {data.length}</span>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        <div className="space-y-4">
          {data.map((project) => (
            <div 
              key={project.slug} 
              className="group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm"
            >
              <div className="flex flex-row gap-4 md:gap-6 items-center flex-1">
                <Link 
                  to={`/${type}/${project.slug}`}
                  className="flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 overflow-hidden bg-neutral-50">
                    <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-neutral-400">NO. {project.id}</span>
                      <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate">{project.title}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-1">{project.description}</p>
                  </div>
                </Link>
                {project.hasDemo && (
                  <button 
                    onClick={() => {
                      window.location.href = `#/${type}/${project.slug}#demo`;
                    }}
                    className="flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                  >
                    DEMO
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {data.map((project) => (
            <div 
              key={project.slug} 
              className="group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm flex flex-col"
            >
              <Link 
                to={`/${type}/${project.slug}`}
                className="flex flex-col h-full"
              >
                <div className="flex-shrink-0 w-full aspect-square border border-neutral-100 overflow-hidden bg-neutral-50 mb-4">
                  <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">NO. {project.id}</span>
                    <span className="text-[10px] font-mono text-neutral-500">{project.year}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 line-clamp-2">{project.title}</h3>
                  <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
              {project.hasDemo && (
                <button 
                  onClick={() => {
                    window.location.href = `#/${type}/${project.slug}#demo`;
                  }}
                  className="flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                >
                  DEMO
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetailView = ({ data, type }: { data: any[], type: string }) => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<'details' | 'demo'>('details');
  const project = data.find(p => p.slug === id);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('#demo')) {
        setViewMode('demo');
      } else {
        setViewMode('details');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id]);

  if (!project) return <div className="p-4 md:p-10 font-mono">PROJECT_NOT_FOUND</div>;

  return (
    <div className="flex flex-col animate-in slide-in-from-right-4 duration-500 min-h-screen">
      <div className="sticky top-0 z-5 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to={`/${type}`} className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider">← Index</Link>
          <div className="h-4 w-px bg-neutral-200 hidden md:block"></div>
          <h2 className="text-xs md:text-sm font-bold text-neutral-900 truncate max-w-[120px] md:max-w-[200px]">{project.title}</h2>
        </div>
        <div className="flex bg-neutral-100 p-1 rounded-sm border border-neutral-200">
          <button onClick={() => setViewMode('details')} className={`px-2 md:px-3 py-1 text-xs font-mono ${viewMode === 'details' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}>DOCS</button>
          {project.hasDemo && (
            <button onClick={() => setViewMode('demo')} className={`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${viewMode === 'demo' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-500'}`}>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-blue-500"></span></span>
              DEMO
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {viewMode === 'details' ? (
          <div className="flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto">
             <div className="mb-8 md:mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, index: number) => (
                    <span key={index} className="px-2 py-1 text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wide">NO. {project.id}</span>
                  <span className="text-neutral-300">|</span>
                  <span>{project.year}</span>
                  <span className="text-neutral-300">|</span>
                  <span>{project.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-6 text-neutral-900 tracking-tight">{project.title}</h1>
                <div className="bg-gradient-to-r from-neutral-50 to-white border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-lg">
                  <p className="font-serif text-base md:text-lg text-neutral-700 leading-relaxed italic">
                    "{project.description}"
                  </p>
                </div>
             </div>
                <div className="grid gap-6 md:gap-8 w-full flex-grow">
                  {/* 这里是左侧的内容页 */}
                  <div className="md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10">
                    {project.details.abstract && (
                      <section id="abstract">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Abstract
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.abstract}
                        </p>
                      </section>
                    )}

                    {project.details.solution && (
                      <section id="methodology">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Methodology
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.solution}
                        </p>
                      </section>
                    )}

                    {project.details.challenge && (
                      <section id="challenges">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Challenges
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.challenge}
                        </p>
                      </section>
                    )}
                    {project.details.codeComponent && (
                      <section id="code">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Code Example
                        </h3>
                        <div className="bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto">
                          <pre className="text-sm font-mono leading-relaxed">
                            <code>{project.details.codeComponent}</code>
                          </pre>
                        </div>
                      </section>
                    )}
                    {project.details.image && project.details.image.length > 0 && (
                      <section id="images" className="space-y-6">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">          
                          Images
                        </h3>
                        <div className="space-y-6">
                          {project.details.image.map((imgSrc: string, index: number) => (
                            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                              <img src={imgSrc} alt={`${project.title} - ${index + 1}`} className="w-full h-auto object-cover" />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                    

                {/* 这里是右侧的目录栏 */}
                <div className="md:col-span-12 lg:col-span-4 hidden lg:block">
                  <div className="sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 pb-3 border-b border-neutral-200">
                      Contents
                    </h3>

                    <ul className="space-y-3">
                      {project.details.abstract && (
                        <li>
                          <button
                            onClick={() => scrollToSection("abstract")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Abstract
                          </button>
                        </li>
                      )}
                      {project.details.solution && (
                        <li>
                          <button
                            onClick={() => scrollToSection("methodology")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Methodology
                          </button>
                        </li>
                      )}
                      {project.details.challenge && (
                        <li>
                          <button
                            onClick={() => scrollToSection("challenges")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Challenges
                          </button>
                        </li>
                      )}
                      {project.details.codeComponent && (
                        <li>
                          <button
                            onClick={() => scrollToSection("code")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Code Example
                          </button>
                        </li>
                      )}
                      {project.details.image && project.details.image.length > 0 && (
                        <li>
                          <button
                            onClick={() => scrollToSection("images")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Images
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
             </div>
          </div>
        ) : (
      <div className="w-full h-[80vh] bg-neutral-100 relative">
        
        {/* 使用 Suspense 包裹异步组件 */}
        <Suspense fallback={<div className="flex items-center justify-center h-full font-mono">LOADING...</div>}>
          <div className="w-full h-full">
            {project.component ? (
              <div className="w-full h-full">{project.component}</div>
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-400 font-mono">NO DEMO</div>
            )}
          </div>
        </Suspense>
      </div>
      )}
      </div>
    </div>
  );
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeTab = location.pathname.split('/')[1] || 'research';

  return (
    <div className="min-h-screen p-0 bg-neutral-100 flex flex-col">
      <div className="w-full bg-white border border-neutral-10 flex flex-col relative flex-1">
        <header className="border-b border-neutral-200 p-4 flex justify-between items-center bg-white z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900"
            >
              ☰
            </button>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
              Lili Lin <span className="text-neutral-300 font-light mx-2">/</span> <span className="text-sm font-mono font-normal text-neutral-500">PORTFOLIO_OS</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/lililin0324" label="GH" />
            <SocialLink href="mailto:lili0324@snu.ac.kr" label="EM" />
            <SocialLink href="https://www.linkedin.com/in/lililin0324" label="LK" />
          </div>
        </header>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-20">
            <div className="absolute left-0 top-0 h-full w-64 bg-white border-r border-neutral-200">
              <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
                <h3 className="text-sm font-mono text-neutral-500">MENU</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-400 hover:text-neutral-900">×</button>
              </div>
              <nav className="flex flex-col gap-2 p-4">
                {['research', 'design', 'tutorial', 'about', 'contact'].map((tab) => (
                  <Link
                    key={tab}
                    to={`/${tab}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium border-l-2 transition-all ${activeTab === tab ? 'border-neutral-900 text-neutral-900 bg-white' : 'border-transparent text-neutral-500 hover:bg-neutral-200'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        <main className="flex flex-1 relative">
          <aside className={`hidden md:flex border-r border-neutral-200 bg-neutral-50/50 flex-col transition-all duration-500 ease-in-out relative ${isSidebarOpen ? 'w-80 p-6' : 'w-12 py-6 items-center'}`}>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute top-1/2 -right-3 w-6 h-12 bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-400 hover:text-neutral-900 z-10 rounded-r-md">{isSidebarOpen ? '‹' : '›'}</button>
            <nav className="flex flex-col gap-2 w-full">
              {['research', 'design', 'tutorial', 'about', 'contact'].map((tab) => (
                <Link
                  key={tab}
                  to={`/${tab}`}
                  className={`px-4 py-3 text-sm font-medium border-l-2 transition-all ${isSidebarOpen ? '' : 'w-8 h-8 !p-0 flex items-center justify-center'} ${activeTab === tab ? 'border-neutral-900 text-neutral-900 bg-white' : 'border-transparent text-neutral-500 hover:bg-neutral-200'}`}
                >
                  {isSidebarOpen ? tab.charAt(0).toUpperCase() + tab.slice(1) : tab.charAt(0).toUpperCase()}
                </Link>
              ))}
            </nav>
          </aside>

          <section className="flex-1 bg-white relative w-full h-full">
            <Routes>
              <Route path="/" element={<Navigate to="/research" replace />} />
              <Route path="/research" element={<ProjectListView data={projects} type="research" />} />
              <Route path="/research/:id" element={<ProjectDetailView data={projects} type="research" />} />
              <Route path="/design" element={<ProjectListView data={designProjects} type="design" />} />
              <Route path="/design/:id" element={<ProjectDetailView data={designProjects} type="design" />} />
              <Route path="/tutorial" element={<ProjectListView data={tutorialProjects} type="tutorial" />} />
              <Route path="/tutorial/:id" element={<ProjectDetailView data={tutorialProjects} type="tutorial" />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
          </section>
        </main>
      </div>
    </div>
  );
};
const TutorialSection = () => (
  <div className="p-6 md:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4">
    <h2 className="text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-8">Tutorials</h2> 
    <div className="prose prose-neutral prose-sm font-light text-lg text-neutral-800 leading-relaxed">
      <p className="text-lg text-neutral-800 leading-relaxed mb-6 font-light">
      Tutorials on various topics related to urban planning, AI, and web development. Each tutorial provides step-by-step guidance and practical examples to help you understand and implement the concepts effectively.
      </p>
    </div>
  </div>
);
// 辅助组件
const AboutSection = () => (
  <div className="p-4 md:p-6 lg:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4">
    <h2 className="text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8">About Me</h2>
    <div className="prose prose-neutral prose-sm font-light text-base md:text-lg text-neutral-800 leading-relaxed">
      <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
      I am Lili Lin, a Master’s student at Seoul National University in the City Energy Lab, where my research focuses on <span className="font-medium border-b border-neutral-300">AI-assisted urban planning</span>, especially on <span className="font-medium border-b border-neutral-300">urban heat environments</span>. I received my Bachelor’s degree in Architecture from Huazhong University of Science and Technology.
      </p>
      <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
      In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul.
      </p>
      <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light">
      I am also <span className="font-medium border-b border-neutral-300">UI&UX designers and front-end developer</span> passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma.
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 pt-6 md:pt-8">
    <div>
    <h4 className="font-mono text-xs text-neutral-400 uppercase mb-4">Core Competencies</h4>
    <ul className="space-y-2 text-sm text-neutral-700">
    <li>Urban Climate & Resilience</li>
    <li>AI-Assisted Urban Planning</li>
    <li>Machine Learning & Data Analysis</li>
    <li>Spatial Statistics & GIS</li>
    <li>React / Next.js ecosystem</li>
    <li>TypeScript Architecture</li>
    <li>WebGL / Three.js</li>
    <li>UI Systems Design</li>
    </ul>
    </div>
    </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500">
                  ✉️
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">CONTACT_FOR_COLLABORATION</h2>
                <a
                  href="mailto:lily1326685527@gmail.com?subject=Research%20Collaboration"
                  className="bg-neutral-900 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 transition-colors"
                >
                  SEND_TRANSMISSION
                </a>
              </div>
);

const SocialLink = ({ href, label }: { href: string, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-neutral-200 text-xs font-mono text-neutral-500 hover:bg-neutral-900 hover:text-white transition-all">{label}</a>
);

export default MainPage;


