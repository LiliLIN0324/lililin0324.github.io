const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-BCAC7P5O.js","./vendor-4iUo1Xrn.js","./maplibre-BkiGPtbL.js","./maplibre-PhPnDjd-.css","./vendor-Dgihpmma.css","./icons-ynunxgIJ.js","./UR-platform-BwrjfpxS.js","./heatmapper-Bfa7hiaA.js","./openstreetmap-DbwSf1Fz.js","./photogeo-CjRomodT.js","./photogeomap-CCj6Cxoe.js","./clusteringevents-Dakq0jTh.js","./litflow-CjFgStnu.js","./boxupcyberspace-1DilvgnP.js","./epsteinscret-UIyKjVrn.js","./wechatgame-Gg9Mkaii.js"])))=>i.map(i=>d[i]);
import{r as c,j as e,A as Qe,m as ye,L as oe,u as Je,M as et,a as tt,g as Ae,b as nt,R as at,c as z,H as st,d as rt}from"./vendor-4iUo1Xrn.js";import{m as ue}from"./maplibre-BkiGPtbL.js";import{U as Re,L as it,D as ot,R as lt,M as ct,C as dt,a as mt,b as ut,X as ze,c as Fe}from"./icons-ynunxgIJ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const b of a)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&l(w)}).observe(document,{childList:!0,subtree:!0});function I(a){const b={};return a.integrity&&(b.integrity=a.integrity),a.referrerPolicy&&(b.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?b.credentials="include":a.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function l(a){if(a.ep)return;a.ep=!0;const b=I(a);fetch(a.href,b)}})();function pt({onFinish:v}){const[i,I]=c.useState(!0),l=c.useRef(null),a=c.useRef({x:-1e3,y:-1e3});return c.useEffect(()=>{const b=l.current;if(!b)return;const w=b.getContext("2d");if(!w)return;let r,g=[];const _=()=>{b.width=window.innerWidth,b.height=window.innerHeight},N=s=>{a.current={x:s.clientX,y:s.clientY}},T=s=>{s.touches.length>0&&(a.current={x:s.touches[0].clientX,y:s.touches[0].clientY})};window.addEventListener("resize",_),window.addEventListener("mousemove",N),window.addEventListener("touchmove",T),_();class t{constructor(){this.x=Math.random()*b.width,this.y=Math.random()*b.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>b.width)&&(this.vx*=-1),(this.y<0||this.y>b.height)&&(this.vy*=-1);let M=a.current.x-this.x,R=a.current.y-this.y,F=Math.sqrt(M*M+R*R),P=M/F,pe=R/F;const le=150;let ce=(le-F)/le;F<le&&(this.x-=P*ce*this.density*.5,this.y-=pe*ce*this.density*.5)}draw(){w&&(w.fillStyle="rgba(255, 255, 255, 0.8)",w.beginPath(),w.arc(this.x,this.y,this.size,0,Math.PI*2),w.fill())}}for(let s=0;s<120;s++)g.push(new t);const u=()=>{w.clearRect(0,0,b.width,b.height);for(let s=0;s<g.length;s++){g[s].update(),g[s].draw();for(let M=s+1;M<g.length;M++){const R=g[s].x-g[M].x,F=g[s].y-g[M].y,P=Math.sqrt(R*R+F*F);P<100&&(w.beginPath(),w.strokeStyle=`rgba(255, 255, 255, ${.2*(1-P/100)})`,w.lineWidth=.6,w.moveTo(g[s].x,g[s].y),w.lineTo(g[M].x,g[M].y),w.stroke())}}r=requestAnimationFrame(u)};return u(),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",_),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",T)}},[]),e.jsx(Qe,{onExitComplete:v,children:i&&e.jsxs(ye.div,{onClick:()=>I(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:l,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(ye.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(ye.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const gt=`---
id: "01"
slug: "cluster-visualizer-3d"
title: "Cluster Visualizer 3D"
category: "Global heat mapping"
year: "2024-present"
description: "A 3D exploration of high-dimensional data clusters using PCA and K-Means."
tech: ["Python","Three.js","React"]
abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, project visualizes complex data patterns in an intuitive manner."
challenge: "compressed 223 cities in global data and revelas pattern from window period of time-series data from 2017 to 2019 with both day and night time data"
solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance."
hasDemo: true
icon: "/data/fig/global_logo.jpg"
image: ["/data/fig/global-5.jpg","/data/fig/global-12.jpg","/data/fig/global-20.jpg","/data/fig/global-26.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/global-5.jpg)

![效果展示](/data/fig/global-12.jpg)

![效果展示](/data/fig/global-20.jpg)

![效果展示](/data/fig/global-26.jpg)
`,ht=`---
id: "02"
slug: "knowledge-graph-urban-planning"
title: "Knowledge Graph Generation from Urban Planning Texts"
category: "Knowledge Graph"
year: "2025-present"
description: "A Comparative Analysis for Climate Change Adaptation in New York and Shanghai Master Plans"
tech: ["Knowledge Graph","NLP"]
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to estimate node weights and relational edges. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city knowledge transfer."
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."
icon: "/data/fig/kg_logo.jpg"
image: ["/data/fig/kg_figure.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/kg_figure.jpg)
`,ft=`---
id: "03"
slug: "local-climate-zones-urban-heat-resilience"
title: "Local Climate Zones and Urban Heat Resilience"
category: "GIS & Spatial Analysis"
year: "2025-present"
description: "An empirical study in different climate zones in United States"
tech: ["GIS","Spatial Analysis"]
abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance."
challenge: "Translating complex urban form findings into practical urban planning policies remains challenging."
solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles."
icon: "/data/fig/lcz_logo.jpg"
image: ["/data/fig/lcz_figure.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/lcz_figure.jpg)
`,xt=`---
id: "04"
slug: "urban-heat-resilience-machine-learning"
title: "Assessing Urban Heat Resilience"
category: "Machine Learning"
year: "2025-present"
description: "Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach"
tech: ["GIS","Machine Learning"]
abstract: "Climate change has been a pressing global issue in recent decades as it increasingly influences human life through extreme weather, ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE). In addition, the results indicate that urban form factors have nonlinear relationships with urban land surface extreme heat and associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities."
challenge: "The majority of existing studies have relied on traditional regression models that assume linear relationships."
solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods."
icon: "/data/fig/ml_logo.jpg"
image: ["/data/fig/AAAI2026.jpg"]
---

## 1 - Extreme Heat Days and Normal Heat Days Identification

### 1.1 Extreme Heat Day Definition

This section defines the criteria for identifying extreme heat days and normal heat days in the study area.

| Aspect | Details |
|--------|---------|
| **Official Definition** | Extreme heat is defined as a period during which the apparent temperature exceeds 33°C for at least two consecutive days, or when rapid temperature increases or prolonged heatwaves are expected to result in significant or widespread harm, based on the Korea Meteorological Administration (KMA). |
| **Selection Criteria** | Based on duration, intensity, and potential damage impact |
| **Reference Links** | [KMA Wind Chill Data](https://data.kma.go.kr/climate/windChill/selectWindChillChart.do?pgmNo=111) |
| **Temporal Scope** | In Korea, summer spans May to September. Therefore, percentile analysis uses data from months 5-9 |
| **Data Source** | [KMA Statistical Data](https://data.kma.go.kr/climate/RankState/selectRankStatisticsDivisionList.do?pgmNo=179) |
| **Extreme Heat Threshold** | Apparent Temperature (AT) > 95th percentile |
| **Normal Heat Range** | Apparent Temperature (AT) between 40th-60th percentile |

## 2 - Weather Station Selection and Data Processing

### 2.1 Station Selection Process

For accurate temperature analysis, we selected the weather station with the most comprehensive data coverage. After evaluating available stations, **Station ID 108** was chosen for its complete historical records.

![Air Station Selection](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/air_station_select.png?raw=true)

### 2.2 Temperature Data Analysis (2015-2024)

The analysis revealed challenges in finding suitable comparison days. For instance, June 16th, 2023, initially appeared to be a normal heat day, but heavy rainfall two days prior significantly affected the temperature patterns.

![Weather Conditions](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/其他天情况.png?raw=true) 
![Weather Condition Pairs](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/weather_condition_on_pairs.png?raw=true) 

#### Final Comparison Pairs:
- **20160924 vs 20160807** (Extreme vs Normal heat day)
- **20230616 vs 20230819** (Extreme vs Normal heat day)

## 3 - Landsat Data Processing and Feature Variables

### 3.1 Landsat Surface Temperature Data

After identifying extreme heat days (apparent temperature >33°C and percentile >95%), we downloaded corresponding satellite data from Landsat Collection 2 Level-2 8/9.

**Data Source:** [USGS Landsat Collection 2 Surface Temperature](https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature)

#### Temperature Conversion Formula
To properly interpret Landsat Collection 2 Surface Temperature (ST) data, users must apply a scaling factor to convert digital numbers (DN) to temperature values in Kelvin:

\`\`\`bash
ST = (DN * 0.00341802) + 149.0
\`\`\`

### 3.2 Urban Form Feature Variables

#### 3.2.1 Building Data Processing

| Processing Step | Details |
|------------------|---------|
| **Data Source** | [National Geographic Information Institute (NGII)](https://map.ngii.go.kr/ms/map/NlipMap.do) |
| **Initial Processing** | The original shapefile contained visible seams, which were merged into a single unified file |
| **Data Cleaning** | **Step 1**: Applied area threshold ≥ 5 m² using \`data[data['area'] >= 5]\` |
| | **Step 2**: Excluded temporary structures \`['무벽건물', '가건물']\` |
| | **Step 3**: Final building types \`['주택외건물', '일반주택', '연립주택', '공사중건물', '아파트', '온실']\` |

##### Final Building Dataset (area ≥ 5 m²)

| Building Type | Count |
|---------------|--------|
| General Housing (일반주택) | 271,724 |
| Non-residential Buildings (주택외건물) | 238,633 |
| Row Housing (연립주택) | 98,280 |
| Apartments (아파트) | 24,716 |
| Buildings Under Construction (공사중건물) | 1,848 |
| Greenhouses (온실) | 1,306 |


#### 02_NDVI (Normalized Difference Vegetation Index)

| Item | Details |
|------|---------|
| **Data Source** | https://landsat.gsfc.nasa.gov/satellites/landsat-8/landsat-8-bands/ |
| **Formula** | NDVI = (NIR - Red) / (NIR + Red) |
| **Bands** | band 4 = Red, band 5 = NIR, Landsat 8/9 Surface Reflectance Band 5 & Band 4 from Collection 2 Level-2 |


#### 03_Parks

| Criteria | Details |
|----------|---------|
| **Area Filter** | Area ≥ 100,000㎡ |

#### 04_Elevation

| Data Source | Details |
|-------------|---------|
| **Elevation** | Digital Elevation Model (DEM) data |


### 03 Urban Form Variables Overview

#### 01_Building-Related Variables

| Variable | Description | Visual |
|----------|-------------|--------|
| BCR | Building cover ratio | ![BCR](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_2building.png?raw=true) |
| BHV | Building shpfile with height | ![BHV](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_2bh.png?raw=true) |
| SVF | Sky view factors | ![SVF](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_3svf.png?raw=true) |

#### 02_Environmental Variables

| Variable | Description | Visual |
|----------|-------------|--------|
| NDVI | Normalized difference vegetation index | ![NDVI](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_7ndvi.png?raw=true) |
| EV | Elevation | ![EV](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_8ev.png?raw=true) |
| WR | Waterbodies file | ![WR](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_4wb.png?raw=true) |

#### 03_Distance Variables

| Variable | Description | Visual |
|----------|-------------|--------|
| Dist_W | Waterbodies file | ![Dist_W](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_4wb.png?raw=true) |
| Dist_P | Parks file | ![Dist_P](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_5bp.png?raw=true) |
| Dist_M | Mountain file | ![Dist_M](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_6mt.png?raw=true) |

#### 04_Variable Indicators Summary

| No. | Indicator | Unit | Formula | Data Source |
|-----|-----------|------|---------|-------------|
| 01 | BCR | % | BCR = Built-up Area / Total Land Area | 국토지리정보원 (NGII) |
| 01 | BHV | m | BHV = SD(Building Heights within unit) | 국토지리정보원 (NGII) |
| 01 | SVF | N/A | SVF = Visible Sky Hemisphere Area / Total Hemisphere Area | 국가정보포털 (NSDI) |
| 02 | NDVI | N/A | NDVI = (NIR - Red) / (NIR + Red) | USGS - Landsat 8 Operational Land Imager (OLI) surface reflectance from Bands 4 and 5 |
| 02 | EV | m | Elevation(x,y)=DEM(x,y) | 국토지리정보원 (NGII) |
| 02 | WR | % | WR = Water Surface Area / Total Unit Area | 국가정보포털 (NSDI) |
| 03 | Dist_P | km | Euclidean_Distance(Centroid, Nearest Park) | Seoul Open Data |
| 03 | Dist_M | km | Euclidean_Distance(Centroid, Nearest Mountain) | 국가정보포털 (NSDI) |
| 03 | Dist_W  |km  |Euclidean_Distance(*Centroid*, Nearest Waterbody)        |국가정보포털 (NSDI)  |

`,bt=`---
id: "05"
slug: "participatory-urban-regeneration-empowered-by-artificial-intelligence"
title: "Participatory Urban Regeneration Empowered by Artificial Intelligence"
category: "Urban regeneration, participatory urban planning"
year: "2025-present"
description: "Using AI techniques to build a platform to encourage stakeholders joining in urban regeneration"
tech: ["diffusion models"]
abstract: "This project integrates generative artificial intelligence techniques, including diffusion models, with large language model-based multi-agent mechanisms to develop a participatory urban regeneration framework that facilitates public interaction and multi-stakeholder engagement. Taking the area surrounding the initial development zone of Shanghai Wusong Innovation City as a case study, the framework incorporates urban spatial morphology, behavioral activity patterns, and urban heat island indicators into the early formulation of urban design guidelines, with the aim of achieving a participatory, efficient, and responsive pathway to urban regeneration."
solution: "https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm"
hasDemo: true
icon: "/data/fig/PU_logo.jpg"
image: ["/data/fig/PU-1.jpg","/data/fig/PU-2.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/PU-1.jpg)

![效果展示](/data/fig/PU-2.jpg)
`,yt=`---
id: "06"
slug: "heatmapper"
title: "HeatMapper - Global Heat Monitoring"
category: "urban heat island, extreme heat, participation"
year: "2025-present"
description: "A web-based platform for global heat monitoring and visualization"
tech: ["React","Three.js","D3.js","Node.js"]
abstract: "HeatMapper is a comprehensive web platform designed to monitor and visualize global heat patterns. It provides real-time data on urban heat islands, extreme heat events, and temperature trends across different regions. The platform aims to raise awareness about heat-related issues and support informed decision-making for urban planning and climate adaptation."
challenge: "Integrating real-time temperature data from multiple sources and presenting it in an intuitive, interactive visualization that allows users to explore heat patterns at different scales."
solution: "Developed a responsive web application using React for the frontend, Three.js for 3D visualizations, D3.js for data visualizations, and Node.js for the backend. Implemented data integration pipelines to aggregate temperature data from various sources and created interactive maps and charts for user exploration."
hasDemo: true
icon: "/data/fig/HeatMapper_logo.jpg"
image: ["/data/fig/heatmapper-1.png","/data/fig/heatmapper-2.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/heatmapper-1.png)

![效果展示](/data/fig/heatmapper-2.png)
`,vt=`---
id: "01"
slug: "1037pinpin"
title: "1037pinpin - Campus Item Exchange Platform"
category: "UI&UX Design"
year: "2023"
description: "A campus-based item exchange platform facilitating sustainable sharing among students."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/1037pinpin_logo.jpg"
image: ["/data/fig/1037pinpin.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/1037pinpin.jpg)
`,wt=`---
id: "02"
slug: "perslearn"
title: "persLEARN - Educational Platform for Scientific Thinking"
category: "UI&UX Design"
year: "2023"
description: "An educational platform aimed at helping students develop scientific thinking through interactive modules."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/persLEARN_logo.jpg"
image: ["/data/fig/persLEARN.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/persLEARN.jpg)
`,jt=`---
id: "03"
slug: "dragon-diffussion"
title: "Dragon Diffussion - AI Image Generation Tool"
category: "UI&UX Design"
year: "2024"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/DragonDiffusion_logo.jpg"
image: ["/data/fig/DragonDiffusion.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/DragonDiffusion.jpg)
`,Nt=`---
id: "04"
slug: "genstyle"
title: "Genstyle - Daily Outfit Inspiration Delivered"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/Genstyle_logo.jpg"
image: ["/data/fig/Genstyle.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/Genstyle.jpg)
`,kt=`---
id: "05"
slug: "bazi-fengshui-analysis"
title: "Bazi - Fengshui Analysis Application"
category: "UI&UX Design"
year: "2025"
description: "An app that provides personalized AI Fengshui insights based on users' birth data and environmental factors."
tech: ["Figma","React","TypeScript"]
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."
icon: "/data/fig/Bazi_logo.jpg"
image: ["/data/fig/Bazi.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/Bazi.jpg)
`,St=`---
id: "06"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/Genshot_logo.jpg"
image: ["/data/fig/Genshot.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/Genshot.jpg)
`,Mt=`---
id: "07"
slug: "riffle-ai-game-generation-tool"
title: "Riffle - AI game Generation Tool"
category: "UI&UX Design"
year: "2026 - ongoing"
description: "An AI-powered game generation tool"
tech: ["Figma","React","TypeScript"]
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."
icon: "/data/fig/Riffle_logo.jpg"
image: ["/data/fig/Riffle.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/Riffle.jpg)
`,Lt=`---
id: "01"
slug: "kittylovecarrots"
title: "kittylovecarrots - found out carrots with drum rhythm"
category: "Game"
year: "2026-2 - on going"
description: "minigame in wechat."
tech: ["WeChat Mini Program"]
abstract: " "
challenge: "Designing a game that is both fun and educational for children while also considering the challenges of game development."
solution: "We developed a minigame called 'kittylovecarrots' that uses a drum rhythm to help children learn about carrots. The game features a simple yet engaging gameplay that allows children to explore the world of carrots in a fun and interactive way."
icon: "/data/fig/Kittylovecarrots_logo.jpg"
image: ["/data/fig/kittylovecarrots-1.png","/data/fig/kittylovecarrots-2.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/kittylovecarrots-1.png)

![效果展示](/data/fig/kittylovecarrots-2.png)
`,Ct=`---
id: "02"
slug: "how-to-build-game-in-wechat-mini-program"
title: "How to build game in wechat mini program"
category: "Game"
year: "2026"
description: "A tutorial on building games in WeChat Mini Programs."
tech: ["WeChat Mini Program","Game Development"]
challenge: "Developing games for WeChat Mini Programs requires understanding both the platform-specific APIs and general game development principles."
solution: "By following the WeChat Mini Program development guidelines and utilizing game development libraries, you can create engaging games for the WeChat platform. This tutorial provides step-by-step instructions and code examples to help you get started."
hasDemo: true
icon: "/data/fig/wechatgame_logo.jpg"
code: "wechatgame.tsx"
image: ["/data/fig/wechatgame.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/wechatgame.png)
`,It=`---
id: "01"
slug: "litflow"
title: "LitFlow - Research Hub"
category: "Platform"
year: "2026-1-13 ongoing"
description: "A platform for researchers to visualize their papers with summaries and keywords bubbles."
tech: ["python","React","TypeScript"]
abstract: "LitFlow is a platform designed to facilitate the sharing and discovery of research papers. It provides a platform for researchers to copy the links of papers, and for users to search and filter papers based on various criteria."
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of researchers and users."
solution: "We developed LitFlow using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."
hasDemo: true
icon: "/data/fig/LitFlow_logo.jpg"
code: "litflow.tsx"
image: ["/data/fig/litflow (1).png","/data/fig/litflow (2).png","/data/fig/litflow (3).png","/data/fig/litflow (4).png","/data/fig/litflow (5).png","/data/fig/litflow (6).png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/litflow (1).png)

![效果展示](/data/fig/litflow (2).png)

![效果展示](/data/fig/litflow (3).png)

![效果展示](/data/fig/litflow (4).png)

![效果展示](/data/fig/litflow (5).png)

![效果展示](/data/fig/litflow (6).png)
`,Dt=`---
id: "02"
slug: "box-up-my-stuff-in-cyberspace"
title: "Box up my stuff in cyberspace"
category: "Platform"
year: "2026-2-8"
description: "an App that people could box up their belongings in cyberspace"
tech: ["python","React","TypeScript"]
abstract: "Box up my stuff in cyberspace is an App that people could box up their belongings in cyberspace. It provides a platform for users to upload their belongings, and for other users to find and download them."
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of users."
solution: "We developed Box up my stuff in cyberspace using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."
hasDemo: true
icon: "/data/fig/Boxupcyberspace_logo.jpg"
code: "boxupcyberspace.tsx"
image: ["/data/fig/boxupcyberspace-1.png","/data/fig/boxupcyberspace-2.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/boxupcyberspace-1.png)

![效果展示](/data/fig/boxupcyberspace-2.png)
`,_t=`---
id: "03"
slug: "epstein-mystery-archive"
title: "Epstein Mystery Archive"
category: "Platform"
year: "2026-2-11 on going"
description: "An archive of the Epstein Mystery, a case of sexual assault perpetrated by a man in 1983."
tech: ["python","React","TypeScript"]
abstract: "The Epstein Mystery Archive is an online platform that provides a detailed account of the case of sexual assault perpetrated by a man in 1983. It features a chronological timeline, interviews with suspects and authorities, and a collection of photographs to support the case."
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of users."
solution: "We developed the Epstein Mystery Archive using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."
hasDemo: true
icon: "/data/fig/EpsteinScret_logo.jpg"
code: "epsteinscret.tsx"
image: ["/data/fig/epsteinscret-1.png","/data/fig/epsteinscret-2.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/epsteinscret-1.png)

![效果展示](/data/fig/epsteinscret-2.png)
`,Tt=`---
id: "01"
slug: "how-to-add-openstreetmap-in-website"
title: "How to Add OpenStreetMap in Website"
category: "Tutorial"
year: "2026"
description: "A tutorial on integrating OpenStreetMap into a website."
tech: ["python","React","TypeScript"]
challenge: "Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key."
solution: "You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started."
hasDemo: true
icon: "/data/fig/useOpenstreetMap_logo.jpg"
code: "openstreetmap.tsx"
image: ["/data/fig/openstreetmap.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/openstreetmap.png)
`,Pt=`---
id: "02"
slug: "how-to-get-sequential-events-from-photo-by-phone"
title: "How to get sequential events from photo by phone"
category: "Tutorial"
year: "2026"
description: "A tutorial on extracting sequential events from photos taken on a phone."
tech: ["Computer Vision","Image Processing"]
challenge: "Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events."
solution: "By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process."
hasDemo: true
icon: "/data/fig/Geophoto_logo.jpg"
code: "photogeo.tsx"
image: ["/data/fig/photogeo.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/photogeo.png)
`,Et=`---
id: "03"
slug: "how-to-visualize-photo-geolocation-data-on-map"
title: "How to visualize photo geolocation data on map"
category: "Tutorial"
year: "2026"
description: "A tutorial on visualizing photo geolocation data on a map."
tech: ["Mapping","Image Processing"]
challenge: "Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data."
solution: "By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations."
hasDemo: true
icon: "/data/fig/GeophotoMap_logo.jpg"
code: "photogeomap.tsx"
image: ["/data/fig/photogeomap.png"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/photogeomap.png)
`,At=`---
id: "04"
slug: "how-to-conduct-time-geo-sequential-clustering-from-album"
title: "How to conduct time-geo-sequential clustering from album"
category: "Tutorial"
year: "2026-2-6"
description: "A tutorial on conducting time-geo-sequential clustering from a photo album."
tech: ["python","Clustering","Geospatial Data Processing"]
abstract: "This tutorial explains how to conduct time-geo-sequential clustering from a photo album using clustering algorithms and geospatial data processing techniques."
challenge: "Dealing with large datasets and ensuring accurate clustering results can be challenging when working with time-geo-sequential data."
solution: "By leveraging clustering algorithms such as K-means or DBSCAN, you can group photos based on their temporal and spatial characteristics. This tutorial provides practical examples and code snippets to guide you through the process."
hasDemo: true
icon: "/data/fig/Clusteringevents_logo.jpg"
code: "clusteringevents.tsx"
image: ["/data/fig/photocluster-1.jpg","/data/fig/photocluster-2.jpg"]
---

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/photocluster-1.jpg)

![效果展示](/data/fig/photocluster-2.jpg)
`,Rt=`---\r
id: "05"\r
slug: "how-to-construct-docker"\r
title: "如何构建docker"\r
category: "Tutorial"\r
year: "2026"\r
description: "本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。"\r
tech: ["Docker", "Linux", "DevOps"]\r
abstract: |\r
  本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。\r
  本教程适用于Windows 10/11用户，假设用户已经具备基本的Windows操作技能。\r
  本教程将引导用户完成docker的安装和配置，以及如何使用docker构建和运行容器。\r
---\r
\r
## 01 下载docker\r
https://www.docker.com/\r
## 02 安装适用于docker的linux系统\r
适用于Linux的Windows 子系统(WSL)是一个在Windows 10/11上运行Linux环境的功能。它允许用户在Windows上运行Linux应用程序和工具，而无需安装虚拟机或双引导。\r
打开Windows powershell，输入\r
<code>\r
wsl --update\r
</code>\r
\r
## 03 打开设置，把文件的默认存储换到e盘\r
Settings> Resources > Advanced \r
Disk image location -> 修改到需要的盘。\r
\r
## 04 日常使用。`,zt=`---\r
id: "06"\r
slug: "how-to-construct-workflow-in-dify"\r
title: "How to construct workflow in Dify"\r
category: "Tutorial"\r
year: "2026-2-15"\r
description: "本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署、知识库创建和工作流设计。"\r
tech: ["Dify", "Docker", "Ollama", "AI Workflow", "Local LLM"]\r
abstract: |\r
  本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署 Dify、配置 Ollama 本地模型、创建知识库和设计自动化工作流。\r
---\r
\r
# 01-03 Dify 工作流构建\r
Dify + Docker + Ollama + 知识库 + 工作流\r
实现本地 AI 工作流的完整搭建：环境部署、模型配置、知识管理、流程自动化\r
## 01 本地部署 Dify\r
**链接**: https://dify.ai/\r
**GitHub**: https://github.com/langgenius/dify\r
\r
### a. Dify 介绍\r
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。\r
\r
### b. 本地部署步骤\r
1. **环境准备**：确保已安装 Docker 和 Docker Compose\r
2. **克隆项目**：\r
   \`\`\`bash\r
   git clone https://github.com/langgenius/dify.git\r
   cd dify/docker\r
   \`\`\`\r
3. **配置环境**：\r
   \`\`\`bash\r
   cp .env.example .env\r
   \`\`\`\r
4. **启动服务**：\r
   \`\`\`bash\r
   docker compose up -d\r
   \`\`\`\r
5. **访问应用**：打开浏览器访问 \`http://localhost/install\`\r
\r
> **注意**：每次使用前需要运行 \`docker compose up -d\` 启动服务\r
\r
\r
## 02 配置 Ollama 本地模型\r
**链接**: https://ollama.com/\r
**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama\r
\r
### a. Ollama 介绍\r
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：\r
- 完全本地运行，无需联网\r
- 无需 API Key，数据隐私安全\r
- 支持多种开源模型\r
\r
### b. 安装配置步骤\r
\r
1. **下载安装**：访问 https://ollama.com/download 下载对应系统版本\r
2. **设置模型存储路径**（重要）：\r
   \`\`\`powershell\r
   # 设置环境变量，将模型存储到 E 盘\r
   [Environment]::SetEnvironmentVariable("OLLAMA_MODELS", "E:\\ollama_models", "User")\r
   \`\`\`\r
3. **创建模型目录**：\r
   \`\`\`powershell\r
   mkdir E:\\ollama_models\r
   \`\`\`\r
4. **启动服务**：\r
   \`\`\`bash\r
   ollama serve\r
   \`\`\`\r
   服务地址：\`http://127.0.0.1:11434\`\r
5. **下载模型**：\r
   \`\`\`bash\r
   # 下载对话模型\r
   ollama pull llama3.2\r
   \r
   # 下载嵌入模型（用于知识库向量化）\r
   ollama pull mxbai-embed-large\r
   ollama pull nomic-embed-text\r
   \`\`\`\r
\r
### c. Python 集成（可选）\r
\`\`\`bash\r
# 创建专用环境\r
conda create -n ollama python=3.9 -y\r
conda activate ollama\r
pip install ollama\r
\r
# 验证模型\r
ollama list\r
\`\`\`\r
\r
\r
\r
## 03 创建知识库和工作流\r
\r
### a. 创建知识库\r
1. **登录 Dify**：访问本地 Dify 实例\r
2. **创建知识库**：\r
   - 点击"知识库"菜单\r
   - 选择"创建知识库"\r
   - 上传文档或输入文本内容\r
3. **配置索引方式**：\r
   - 选择向量化模型\r
   - 设置分块大小和重叠\r
   - 配置检索策略\r
\r
### b. 构建工作流\r
1. **创建工作流**：\r
   - 点击"工作流"菜单\r
   - 选择"创建工作流"\r
2. **设计流程**：\r
   - 添加开始节点\r
   - 配置 LLM 节点（选择 Ollama 模型）\r
   - 添加知识库检索节点\r
   - 设置条件分支和循环\r
3. **测试部署**：\r
   - 调试工作流\r
   - 发布为 API 或 Web 应用\r
\r
### c. 最佳实践\r
- **模型选择**：根据任务复杂度选择合适的模型大小\r
- **知识库管理**：定期更新和优化文档结构\r
- **工作流优化**：使用变量和条件逻辑提高效率\r
- **监控日志**：关注执行日志和性能指标\r
\r
`,Ft=`---\r
id: "07"\r
slug: "how-to-construct-light-backend-workflow"\r
title: "How to construct the light backend workflow "\r
category: "Tutorial"\r
year: "2026-2-16"\r
description: "本教程将介绍如何构建轻量级后端工作流。"\r
tech: ["vercel", "neon", "clerk", "cloudflare r2", "resend"]\r
abstract: |\r
  本教程将介绍如何构建轻量级后端工作流。\r
  部署在vercel； 数据库在Neon； 认证在clerk； 存储在Cloudflare R2； 邮件在Resend\r
---\r
# 01-05 云服务配置\r
vercel -> neon -> clerk -> cloudflare r2 -> resend\r
实现全栈应用的快速开发和部署：前端部署、数据库、认证、存储、邮件\r
\r
## 01 部署在vercel\r
link: https://vercel.com/\r
### a. vercel介绍\r
vercel是一个云平台，可以快速部署和托管web应用。\r
\r
### b. vercel部署步骤\r
1. vercel 和GitHub联动，因此只需要上传到github即可\r
2. 在vercel中连接github仓库，选择要部署的分支\r
3. 配置环境变量，包括数据库连接字符串、API密钥等\r
\r
## 02 数据库在Neon\r
link: https://neon.tech/\r
\r
### a. Neon数据库介绍\r
Neon是一个云数据库平台，提供PostgreSQL数据库服务。\r
\r
### b. Neon数据库步骤\r
1. 创建数据库\r
2. 获取数据库连接字符串\r
\r
## 03 认证在clerk\r
link: https://clerk.com/\r
\r
### a. Clerk认证介绍\r
Clerk是一个云认证平台，提供用户认证和授权服务。\r
\r
### b. Clerk认证步骤\r
1. 创建应用\r
2. 配置认证方式\r
\r
## 04 存储在Cloudflare R2\r
link: https://www.cloudflare.com/developer-platform/products/r2/\r
\r
### a. Cloudflare R2介绍\r
Cloudflare R2是一个云存储平台，提供对象存储服务。\r
\r
### b. Cloudflare R2步骤\r
1. 创建存储桶\r
2. 配置访问密钥 和 私钥\r
\r
## 05 邮件在Resend\r
link: https://resend.com/\r
\r
### a. Resend邮件介绍\r
Resend是一个云邮件平台，提供邮件发送服务。\r
\r
### b. Resend邮件步骤\r
1. 创建应用\r
2. 配置邮件发送\r
\r
`;function Bt(v){const i=/^---\n([\s\S]*?)\n---/,I=v.match(i);let l={},a=v;if(I){const b=I[1];a=v.slice(I[0].length).trim();const w=b.split(`
`);let r=null,g=[];w.forEach(_=>{if(_.trim()===""){r&&g.length>0&&(l[r]=g.join(`
`),r=null,g=[]);return}const T=_.indexOf(":");if(T!==-1&&!_.startsWith(" ")){r&&(l[r]=g.join(`
`)),r=_.slice(0,T).trim();let t=_.slice(T+1).trim();t==="|"?g=[]:(l[r]=t,r=null,g=[])}else r&&_.startsWith("  ")&&g.push(_.slice(2))}),r&&(l[r]=g.join(`
`)),Object.keys(l).forEach(_=>{let N=l[_];if(typeof N=="string")if(N=N.trim(),N.startsWith('"')&&N.endsWith('"')&&(N=N.slice(1,-1)),N.startsWith("[")&&N.endsWith("]"))try{l[_]=JSON.parse(N)}catch{l[_]=[N.slice(1,-1).trim()]}else N==="true"?l[_]=!0:N==="false"?l[_]=!1:!isNaN(Number(N))&&N.trim()!==""?l[_]=Number(N):l[_]=N})}return{id:l.id||"",slug:l.slug||"",title:l.title||"",category:l.category||"",year:l.year||"",description:l.description||"",tech:l.tech||[],abstract:l.abstract||"",challenge:l.challenge||"",solution:l.solution||"",hasDemo:l.hasDemo||!1,icon:l.icon||"",code:l.code||"",logo:l.icon||"",image:l.image||[],content:a}}function A(v){const i=Bt(v);return{id:i.id,slug:i.slug,title:i.title,category:i.category,year:i.year,description:i.description,tech:i.tech,hasDemo:i.hasDemo,details:{abstract:i.abstract,description:i.description,challenge:i.challenge,solution:i.solution,logo:i.logo,icon:i.icon,code:i.code,image:i.image,content:i.content}}}const je=[A(gt),A(ht),A(ft),A(xt),A(bt),A(yt)],Ne=[A(vt),A(wt),A(jt),A(Nt),A(kt),A(St),A(Mt)],ke=[A(Lt),A(Ct)],Se=[A(It),A(Dt),A(_t)],Me=[A(Tt),A(Pt),A(Et),A(At),A(Rt),A(zt),A(Ft)],se=({data:v,type:i})=>{const[I,l]=c.useState("grid");return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:["Selected ",i==="research"?"Researches":i==="design"?"Designs":i==="game"?"Games":i==="planning"?"Planning":i==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>l("grid"),className:`px-3 py-1 text-xs font-mono ${I==="grid"?"bg-white shadow-sm":"text-neutral-500"}`,children:"GRID"}),e.jsx("button",{onClick:()=>l("list"),className:`px-3 py-1 text-xs font-mono ${I==="list"?"bg-white shadow-sm":"text-neutral-500"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:["Idx: ",v.length]})]})]}),I==="list"?e.jsx("div",{className:"space-y-4",children:v.map(a=>e.jsx("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(oe,{to:`/${i}/${a.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 overflow-hidden bg-neutral-50",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate",children:a.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-1",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${a.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},a.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:v.map(a=>e.jsxs("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm flex flex-col",children:[e.jsxs(oe,{to:`/${i}/${a.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 overflow-hidden bg-neutral-50 mb-4",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 line-clamp-2",children:a.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-2",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${a.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},a.slug))})]})},re=v=>{const i=document.getElementById(v);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},Gt="modulepreload",Ot=function(v,i){return new URL(v,i).href},Be={},H=function(i,I,l){let a=Promise.resolve();if(I&&I.length>0){let w=function(N){return Promise.all(N.map(T=>Promise.resolve(T).then(t=>({status:"fulfilled",value:t}),t=>({status:"rejected",reason:t}))))};const r=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),_=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));a=w(I.map(N=>{if(N=Ot(N,l),N in Be)return;Be[N]=!0;const T=N.endsWith(".css"),t=T?'[rel="stylesheet"]':"";if(!!l)for(let M=r.length-1;M>=0;M--){const R=r[M];if(R.href===N&&(!T||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${N}"]${t}`))return;const s=document.createElement("link");if(s.rel=T?"stylesheet":Gt,T||(s.as="script"),s.crossOrigin="",s.href=N,_&&s.setAttribute("nonce",_),document.head.appendChild(s),T)return new Promise((M,R)=>{s.addEventListener("load",M),s.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${N}`)))})}))}function b(w){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=w,window.dispatchEvent(r),!r.defaultPrevented)throw w}return a.then(w=>{for(const r of w||[])r.status==="rejected"&&b(r.reason);return i().catch(b)})},Ut=c.lazy(()=>H(()=>import("./ClusterVisualizer-BCAC7P5O.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Ht=c.lazy(()=>H(()=>import("./UR-platform-BwrjfpxS.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)),Vt=c.lazy(()=>H(()=>import("./heatmapper-Bfa7hiaA.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)),$t=c.lazy(()=>H(()=>import("./openstreetmap-DbwSf1Fz.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)),Wt=c.lazy(()=>H(()=>import("./photogeo-CjRomodT.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url)),qt=c.lazy(()=>H(()=>import("./photogeomap-CCj6Cxoe.js"),__vite__mapDeps([10,1,2,3,4]),import.meta.url)),Kt=c.lazy(()=>H(()=>import("./clusteringevents-Dakq0jTh.js"),__vite__mapDeps([11,1,2,3,4]),import.meta.url));c.lazy(()=>H(()=>import("./litflow-CjFgStnu.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url));const Xt=c.lazy(()=>H(()=>import("./boxupcyberspace-1DilvgnP.js"),__vite__mapDeps([13,1,2,3,4]),import.meta.url)),Zt=c.lazy(()=>H(()=>import("./epsteinscret-UIyKjVrn.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url)),Yt=c.lazy(()=>H(()=>import("./wechatgame-Gg9Mkaii.js"),__vite__mapDeps([15,1,2,3,4]),import.meta.url)),Qt=v=>({"cluster-visualizer-3d":Ut,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Ht,heatmapper:Vt,"how-to-add-openstreetmap-in-website":$t,"how-to-get-sequential-events-from-photo-by-phone":Wt,"how-to-visualize-photo-geolocation-data-on-map":qt,"how-to-build-game-in-wechat-mini-program":Yt,"how-to-conduct-time-geo-sequential-clustering-from-album":Kt,"box-up-my-stuff-in-cyberspace":Xt,"epstein-mystery-archive":Zt})[v],ve={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 2. 初始化地图
const map = L.map('map').setView([31.2304, 121.4737], 12);

// 3. 添加底图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 4. 添加标记
const marker = L.marker([31.2304, 121.4737]).addTo(map);
marker.bindPopup("Hello World!").openPopup();`,"how-to-get-sequential-events-from-photo-by-phone":`// 1. 从照片中提取元数据（时间、位置等）
const extractMetadata = (photo) => {
  return {
    timestamp: photo.exif.timestamp,
    location: photo.exif.location,
    // 其他元数据...
  };
};

// 2. 按时间排序照片
const sortedPhotos = photos.sort((a, b) => 
  a.timestamp.getTime() - b.timestamp.getTime()
);

// 3. 聚类照片为事件
const clusterEvents = (sortedPhotos) => {
  const events = [];
  let currentEvent = {
    id: 1,
    startTime: sortedPhotos[0].timestamp,
    endTime: sortedPhotos[0].timestamp,
    photos: [sortedPhotos[0]]
  };

  for (let i = 1; i < sortedPhotos.length; i++) {
    const timeDiff = sortedPhotos[i].timestamp.getTime() - currentEvent.endTime.getTime();
    const hoursDiff = timeDiff / (1000 * 60 * 60);

    if (hoursDiff <= 1) {
      // 同一事件
      currentEvent.endTime = sortedPhotos[i].timestamp;
      currentEvent.photos.push(sortedPhotos[i]);
    } else {
      // 新事件
      events.push(currentEvent);
      currentEvent = {
        id: events.length + 1,
        startTime: sortedPhotos[i].timestamp,
        endTime: sortedPhotos[i].timestamp,
        photos: [sortedPhotos[i]]
      };
    }
  }

  events.push(currentEvent);
  return events;
};`,"how-to-visualize-photo-geolocation-data-on-map":`// 1. 从照片中提取地理定位数据
const extractGeolocation = (photo) => {
  return {
    lat: photo.exif.latitude,
    lng: photo.exif.longitude,
    timestamp: photo.exif.timestamp,
    // 其他数据...
  };
};

// 2. 初始化地图
const map = L.map('map').setView([31.2304, 121.4737], 12);

// 3. 添加底图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 4. 添加照片标记
photos.forEach((photo) => {
  const marker = L.marker([photo.lat, photo.lng]).addTo(map);
  marker.bindPopup(\`
    <div>
      <h3>\${photo.description}</h3>
      <img src="\${photo.imageUrl}" alt="\${photo.description}" />
      <p>\${photo.timestamp.toLocaleString()}</p>
    </div>
  \`);
});

// 5. 添加连线（可选）
const latlngs = photos.map((photo) => [photo.lat, photo.lng]);
L.polyline(latlngs, { color: 'blue' }).addTo(map);`,"how-to-build-game-in-wechat-mini-program":`// 微信小程序游戏开发基本步骤

// 1. 初始化游戏画布
const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');

// 2. 游戏主循环
function gameLoop() {
  update(); // 更新游戏状态
  render(); // 渲染游戏画面
  requestAnimationFrame(gameLoop);
}

// 3. 碰撞检测
function checkCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

// 4. 触摸事件处理
wx.onTouchStart(function(res) {
  const touch = res.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  // 处理触摸事件
});

// 5. 音频播放
const audio = wx.createInnerAudioContext();
audio.src = 'path/to/audio.mp3';
audio.play();

// 6. 数据存储
wx.setStorageSync('highScore', score);
const highScore = wx.getStorageSync('highScore');`,"how-to-conduct-time-geo-sequential-clustering-from-album":`// 时间地理序列聚类算法

// 1. 提取照片的时间戳和位置信息
interface Photo {
  id: string;
  timestamp: number;
  location?: { lat: number; lng: number };
  ip?: string;
}

// 2. 计算两点之间的距离（km）
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // 地球半径
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// 3. 聚类参数
const MICRO_TIME_THRESHOLD = 1.5 * 60 * 60 * 1000; // 1.5小时
const MICRO_DISTANCE_THRESHOLD = 0.5; // 500米
const MACRO_TIME_THRESHOLD = 12 * 60 * 60 * 1000; // 12小时
const MACRO_DISTANCE_THRESHOLD = 50; // 50公里

// 4. 主聚类算法
function clusterPhotosIntoEvents(photos: Photo[]): SmartEvent[] {
  const sortedPhotos = [...photos].sort((a, b) => a.timestamp - b.timestamp);
  const microEvents: SmartEvent[] = [];
  
  let currentMicro: SmartEvent = {
    id: generateId(),
    photos: [sortedPhotos[0]],
    startTime: sortedPhotos[0].timestamp,
    endTime: sortedPhotos[0].timestamp,
    // ...其他属性
  };

  // 生成微事件
  for (let i = 1; i < sortedPhotos.length; i++) {
    const timeDiff = sortedPhotos[i].timestamp - currentMicro.endTime;
    const distDiff = sortedPhotos[i].location && currentMicro.centerLocation
      ? getDistance(
          sortedPhotos[i].location.lat, sortedPhotos[i].location.lng,
          currentMicro.centerLocation.lat, currentMicro.centerLocation.lng
        )
      : 0;

    if (timeDiff < MICRO_TIME_THRESHOLD && 
        distDiff < MICRO_DISTANCE_THRESHOLD &&
        sortedPhotos[i].ip === currentMicro.clusterIp) {
      currentMicro.photos.push(sortedPhotos[i]);
      currentMicro.endTime = sortedPhotos[i].timestamp;
    } else {
      microEvents.push(currentMicro);
      currentMicro = { ...currentMicro, id: generateId(), photos: [sortedPhotos[i]] };
    }
  }
  microEvents.push(currentMicro);

  // 合并为宏事件
  return mergeMicroToMacroEvents(microEvents);
}`},ie=({data:v,type:i})=>{var T;const{id:I}=Je(),[l,a]=c.useState("details"),[b,w]=c.useState(!1),r=v.find(t=>t.slug===I),g=t=>{const u=/^(#{1,6})\s+(.+)$/gm,s=[];let M;for(;(M=u.exec(t))!==null;){const R=M[1].length,F=M[2].trim(),P=F.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");s.push({level:R,text:F,id:P})}return s},_=(T=r==null?void 0:r.details)!=null&&T.content?g(r.details.content):[],N=t=>{const u=document.getElementById(t);u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return c.useEffect(()=>{const t=()=>{window.location.hash.includes("demo")?a("demo"):a("details")};return t(),window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[I]),r?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(oe,{to:`/${i}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 truncate max-w-[120px] md:max-w-[200px]",children:r.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>a("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${l==="details"?"bg-white shadow-sm":"text-neutral-500"}`,children:"DOCS"}),r.hasDemo&&e.jsxs("button",{onClick:()=>a("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${l==="demo"?"bg-white text-blue-600 shadow-sm":"text-neutral-500"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:l==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:r.tech.map((t,u)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-sm",children:t},u))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",r.id]}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:r.year}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:r.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 tracking-tight",children:r.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 to-white border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 leading-relaxed italic",children:['"',r.description,'"']})})]}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow",children:[e.jsxs("div",{className:"md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10",children:[r.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:r.details.abstract})]}),r.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Content"}),e.jsx("div",{className:"text-base md:text-lg leading-relaxed text-neutral-800 prose prose-neutral max-w-none",children:e.jsx(et,{remarkPlugins:[tt],components:{table:({children:t})=>e.jsx("table",{className:"min-w-full border-collapse border border-neutral-300",children:t}),thead:({children:t})=>e.jsx("thead",{className:"bg-neutral-50",children:t}),th:({children:t})=>e.jsx("th",{className:"border border-neutral-300 px-3 py-2 text-left font-semibold text-neutral-900 text-sm",children:t}),td:({children:t})=>e.jsx("td",{className:"border border-neutral-300 px-3 py-2 text-neutral-700 text-sm",children:t}),h1:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:M,className:"text-2xl font-bold mb-4 text-neutral-900",...u,children:t})},h2:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:M,className:"text-xl font-bold mb-6 mt-8 text-neutral-800",...u,children:t})},h3:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:M,className:"text-lg font-semibold mb-4 mt-6 text-neutral-800",...u,children:t})},h4:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h4",{id:M,className:"text-base font-semibold mb-3 mt-4 text-neutral-700",...u,children:t})},h5:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h5",{id:M,className:"text-sm font-semibold mb-2 mt-3 text-neutral-700",...u,children:t})},h6:({children:t,...u})=>{const M=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h6",{id:M,className:"text-xs font-semibold mb-2 mt-2 text-neutral-600",...u,children:t})},p:({children:t,...u})=>e.jsx("p",{className:"mb-4 leading-relaxed",...u,children:t}),a:({children:t,href:u,...s})=>e.jsx("a",{href:u,className:"text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium",target:"_blank",rel:"noopener noreferrer",...s,children:t}),img:({src:t,alt:u,...s})=>{var R;return((R=s.className)==null?void 0:R.includes("h-32"))||(u==null?void 0:u.includes("BCR"))||(u==null?void 0:u.includes("BHV"))||(u==null?void 0:u.includes("SVF"))||(u==null?void 0:u.includes("NDVI"))||(u==null?void 0:u.includes("EV"))||(u==null?void 0:u.includes("WR"))||(u==null?void 0:u.includes("Dist_"))?e.jsx("img",{src:t,alt:u,className:"max-w-full h-32 object-cover rounded-lg shadow-sm",...s}):e.jsx("img",{src:t,alt:u,className:"w-full max-w-full h-auto rounded-lg shadow-md my-6",...s})}},children:r.details.content})})]}),r.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:r.details.solution})]}),r.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:r.details.challenge})]}),(r.details.code||r.details.codeComponent||ve[r.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:ve[r.slug]||r.details.codeComponent||`// Code file: ${r.details.code}`})})})]}),r.details.image&&r.details.image.length>0&&e.jsxs("section",{id:"images",className:"space-y-6",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Images"}),e.jsx("div",{className:"space-y-6",children:r.details.image.map((t,u)=>t?e.jsx("div",{className:"border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:e.jsx("img",{src:t,alt:`${r.title} - ${u+1}`,className:"w-full h-auto object-cover"})},u):null)})]})]}),e.jsx("div",{className:"md:col-span-12 lg:col-span-4 hidden lg:block",children:e.jsxs("div",{className:"sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-neutral-200",children:[e.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-neutral-400",children:"Contents"}),e.jsx("button",{onClick:()=>w(!b),className:"text-neutral-400 hover:text-neutral-600 transition-colors",children:e.jsx("svg",{className:`w-4 h-4 transform transition-transform ${b?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:`${b?"max-h-0":"max-h-96"} overflow-hidden transition-all duration-300`,children:e.jsxs("div",{className:"p-4 space-y-2 overflow-y-auto max-h-80",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Overview"}),r.details.abstract&&e.jsx("button",{onClick:()=>re("abstract"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left text-left",children:"Abstract"})]}),_.length>0&&e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Content Sections"}),_.map((t,u)=>e.jsx("button",{onClick:()=>N(t.id),className:`text-sm hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left block ${t.level===1?"font-semibold text-neutral-800":t.level===2?"font-medium text-neutral-700 ml-2":t.level===3?"text-neutral-600 ml-4":t.level===4?"text-neutral-600 ml-6":t.level===5?"text-neutral-500 ml-8":"text-neutral-500 ml-10"}`,children:t.text},u))]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Methodology"}),r.details.solution&&e.jsx("button",{onClick:()=>re("methodology"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Approach"}),r.details.challenge&&e.jsx("button",{onClick:()=>re("challenges"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Challenges"})]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Resources"}),(r.details.code||r.details.codeComponent||ve[r.slug])&&e.jsx("button",{onClick:()=>re("code"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Code Example"}),r.details.image&&r.details.image.length>0&&e.jsx("button",{onClick:()=>re("images"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Images"})]})]})})]})})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 relative",children:e.jsx(c.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"Loading demo..."}),children:(()=>{const t=Qt(r.slug);return t?e.jsx(t,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},Jt=()=>e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"prose prose-neutral prose-sm font-light text-base md:text-lg text-neutral-800 leading-relaxed",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),en=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 transition-colors",children:"SEND_TRANSMISSION"})]}),we=({href:v,label:i})=>e.jsx("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all rounded-sm text-xs font-mono",children:i}),tn=()=>{const v=[...je.map(a=>({...a,type:"planning"})),...Ne.map(a=>({...a,type:"design"})),...ke.map(a=>({...a,type:"game"})),...Se.map(a=>({...a,type:"platform"})),...Me.map(a=>({...a,type:"tutorial"}))],[i,I]=c.useState(0),l=v.length-1;return c.useEffect(()=>{const a=b=>{b.preventDefault(),I(w=>b.deltaY>0?Math.min(w+1,l):Math.max(w-1,0))};return window.addEventListener("wheel",a,{passive:!1}),()=>window.removeEventListener("wheel",a)},[l]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:"All Projects"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:[i+1," / ",v.length]})]}),e.jsx("div",{className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10",children:v.map((a,b)=>{var t;const w=b-i;if(w<-2||w>3)return null;const r=1-Math.abs(w)*.08,g=w*60,_=-Math.abs(w)*120,N=w*-6,T=w===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${g+20}px)
                  translateZ(${_}px)
                  rotateX(${N}deg)
                  scale(${r})
                `,opacity:T,zIndex:100-Math.abs(w)},children:e.jsx("div",{className:"bg-white border border-neutral-200 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 rounded",children:a.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-neutral-600 mb-4 line-clamp-3",children:a.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(t=a.tech)==null?void 0:t.slice(0,3).map((u,s)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 text-blue-700 rounded",children:u},s))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${a.type}/${a.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 hover:bg-neutral-300 rounded",children:"VIEW"}),a.hasDemo&&e.jsx("a",{href:`#/${a.type}/${a.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${a.type}-${a.slug}`)})})]})},Ge="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",nn="/data/223_cities_cluster_with_index_deciles.csv",Q=v=>{const i=v.replace("#",""),I=parseInt(i.slice(0,2),16),l=parseInt(i.slice(2,4),16),a=parseInt(i.slice(4,6),16);return[I,l,a]},J=(v,i,I)=>{const l=Math.round(v[0]+(i[0]-v[0])*I),a=Math.round(v[1]+(i[1]-v[1])*I),b=Math.round(v[2]+(i[2]-v[2])*I);return`rgb(${l}, ${a}, ${b})`},ee=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],an=()=>{var Ee;const v=c.useRef(null),i=c.useRef(null),[I,l]=c.useState(!0),[a,b]=c.useState(0),[w,r]=c.useState(null),[g,_]=c.useState(null),[N,T]=c.useState([]),[t,u]=c.useState(null),[s,M]=c.useState("K_12"),[R,F]=c.useState(!0),[P,pe]=c.useState(null),[le,ce]=c.useState(null),[ln,Le]=c.useState(!1),[W,Oe]=c.useState(null),[Ue,Ce]=c.useState(!1),[cn,dn]=c.useState(null),[Ie,de]=c.useState(!1),[De,te]=c.useState(0),[He,Z]=c.useState(""),[ge,Ve]=c.useState(!1),[ne,$e]=c.useState(!0),[_e,Te]=c.useState(!0),[he,We]=c.useState({}),[mn,un]=c.useState(!1),[O,qe]=c.useState("global"),me=c.useRef(null),Pe=c.useRef(null),Ke=c.useRef(!1),ae=c.useRef(null),Xe=(n,m)=>{let y=n.features;t!==null&&(y=y.filter(p=>{var d;const x=(d=p.properties)==null?void 0:d.Place;return x!==void 0&&Number(x)===Number(t)}));const f=y.map(p=>{var x;return(x=p.properties)==null?void 0:x[m]}).filter(p=>{if(p==null)return!1;if(typeof p=="string"){const d=p.trim();if(d===""||/^(na|nan|null)$/i.test(d))return!1}const x=Number(p);return!(Number.isNaN(x)||x===-9999)}).map(p=>Number(p)),C=y.reduce((p,x)=>{var k;const d=(k=x.properties)==null?void 0:k[m];let o=!1;if(d==null)o=!0;else if(typeof d=="string"){const S=d.trim();if(S===""||/^(na|nan|null)$/i.test(S))o=!0;else{const E=Number(d);(Number.isNaN(E)||E===-9999)&&(o=!0)}}else{const S=Number(d);(Number.isNaN(S)||S===-9999)&&(o=!0)}return p+(o?1:0)},0);let L=NaN,j=NaN,h=0;if(f.length>0){L=f[0],j=f[0],h=f[0];for(let p=1;p<f.length;p++){const x=f[p];x<L&&(L=x),x>j&&(j=x),h+=x}}return{count:y.length,min:L,max:j,mean:f.length>0?h/f.length:NaN,nanCount:C}};c.useEffect(()=>{(async()=>{try{const f=(await(await fetch(nn)).text()).trim().split(`
`);if(f.length<2)return;const C=f[0].split(",").map(d=>d.trim()),L={},h=f[f.length-1].split(","),x=f[1].split(",");C.forEach((d,o)=>{if(d===""||d.includes("Place")||d.includes("Sum")||d.includes("FID")||d.includes("index"))return;const k=parseFloat(x[o]),S=parseFloat(h[o]);!isNaN(k)&&!isNaN(S)&&S>k&&(L[d]={min:k,max:S})}),console.log("Loaded attribute ranges:",L),We(L)}catch(m){console.error("Failed to load deciles:",m)}})()},[]),c.useEffect(()=>{!ge&&!g&&(async()=>{var m;l(!0),b(0),r(null);try{b(10),console.log("开始下载..."),me.current=new AbortController;const y=await fetch(Ge,{signal:me.current.signal});if(console.log("响应状态:",y.status),!y.ok)throw new Error(`HTTP error! status: ${y.status}`);b(30);const f=y.headers.get("content-length"),C=f?parseInt(f):null;console.log("预期文件大小:",C);const L=(m=y.body)==null?void 0:m.getReader();if(!L)throw new Error("无法读取响应流");let j=0;const h=[];for(;;){const{done:E,value:D}=await L.read();if(E)break;h.push(D),j+=D.length,b(C?30+Math.round(j/C*60):50)}console.log("下载完成, 收到:",j),C&&j!==C&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const p=new Uint8Array(j);let x=0;for(const E of h)p.set(E,x),x+=E.length;if(b(90),ge){console.log("本地数据已加载，跳过网络数据"),l(!1);return}console.log("开始解析 Shapefile...");const d=await Ae(p);console.log("Shapefile 解析完成:",d);let o=[];if(d.type==="FeatureCollection"?o=d.features:Array.isArray(d)?o=d:d.type==="Feature"&&(o=[d]),console.log("解析完成，特征数量:",o==null?void 0:o.length),ge)return;const k={type:"FeatureCollection",features:o||[]};_(k),b(100);const S=new Map;k.features.forEach(E=>{var V;const D=Number(((V=E.properties)==null?void 0:V.Place)??0);S.has(D)||S.set(D,{id:D,name:`Place ${D}`,featureCount:0});const B=S.get(D);B&&B.featureCount++}),T(Array.from(S.values()).sort((E,D)=>E.id-D.id)),l(!1)}catch(y){if(y.name==="AbortError"){console.log("网络请求已取消");return}r(y instanceof Error?y.message:"Failed to load"),l(!1)}})()},[]),c.useEffect(()=>{g&&pe(Xe(g,s))},[g,t,s,O,he]),c.useEffect(()=>{if(!g)return;const n=i.current;if(!n)return;const m=()=>{var f,C,L,j;if(g.features.forEach((h,p)=>{h.id===void 0&&(h.id=p)}),n.getSource("cluster"))n.getSource("cluster").setData(g);else{console.log("初始化 cluster 数据源..."),n.addSource("cluster",{type:"geojson",data:g,generateId:!0}),n.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),n.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),n.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),n.on("click","cluster-fill",p=>{var x;if(p.features&&p.features.length>0){const d=p.features[0],o=d.id;ae.current!==null&&ae.current!==void 0&&n.setFeatureState({source:"cluster",id:ae.current},{selected:!1}),o!==void 0?(n.setFeatureState({source:"cluster",id:o},{selected:!0}),ae.current=o):ae.current=null,Oe(d),Ce(!0),((x=d.properties)==null?void 0:x.Place)!==void 0&&u(Number(d.properties.Place))}}),n.on("mouseenter","cluster-fill",()=>{n.getCanvas().style.cursor="pointer"}),n.on("mouseleave","cluster-fill",()=>{n.getCanvas().style.cursor=""});const h=g.features;if(h.length>0)try{const p=new ue.LngLatBounds,x=Math.max(1,Math.floor(h.length/2e3));for(let d=0;d<h.length;d+=x){const o=h[d];if(!((f=o.geometry)!=null&&f.coordinates))continue;const k=o.geometry.type,S=o.geometry.coordinates;k==="Point"?p.extend(S):k==="LineString"||k==="MultiPoint"?S.forEach(E=>p.extend(E)):k==="Polygon"||k==="MultiLineString"?(C=S[0])==null||C.forEach(E=>p.extend(E)):k==="MultiPolygon"&&((j=(L=S[0])==null?void 0:L[0])==null||j.forEach(E=>p.extend(E)))}p.isEmpty()||n.fitBounds(p,{padding:50,duration:1e3})}catch(p){console.error("Fit bounds error:",p)}}},y=()=>{var D;if(!n.getLayer("cluster-fill"))return;const f=null;n.setFilter("cluster-fill",f),n.setFilter("cluster-line",f),n.setFilter("cluster-highlight",f);const C=(()=>{var fe;let B=1/0,V=-1/0;for(const xe of g.features){const $=Number((fe=xe.properties)==null?void 0:fe[s]);Number.isNaN($)||$===-9999||($<B&&(B=$),$>V&&(V=$))}return{min:B===1/0?0:B,max:V===-1/0?0:V}})(),L=t!==null&&P?{min:P.min,max:P.max}:C,j=O==="city"?L:C,h=j.min,p=j.max;let x;if(s.includes("K_")){const B=Math.round(((D=he[s])==null?void 0:D.max)??p),V=Array.from({length:26},(Y,be)=>{const U=be/25;let q,K,X;if(U<.167){const G=U/.167;q=0,K=0,X=Math.round(139+116*G)}else if(U<.333){const G=(U-.167)/.167;q=0,K=Math.round(255*G),X=255}else if(U<.5){const G=(U-.333)/.167;q=0,K=Math.round(255-128*G),X=Math.round(255-255*G)}else if(U<.667){const G=(U-.5)/.167;q=Math.round(255*G),K=255,X=0}else if(U<.833){const G=(U-.667)/.167;q=255,K=Math.round(255-128*G),X=0}else{const G=(U-.833)/.167;q=255,K=Math.round(127-127*G),X=0}return`#${q.toString(16).padStart(2,"0")}${K.toString(16).padStart(2,"0")}${X.toString(16).padStart(2,"0")}`}),xe=Array.from({length:B+1},(Y,be)=>V[Math.round(be*25/B)]).slice(0,B+1),$=["interpolate",["linear"],["get",s]];for(let Y=0;Y<=B;Y++)$.push(Y,xe[Y]);x=$}else s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?x=["interpolate",["linear"],["get",s],h,"#3182bd",p,"#e6550d"]:s.includes("elev")||s.includes("slope")?x=["interpolate",["linear"],["get",s],h,"#31a354",p,"#756bb1"]:x=["interpolate",["linear"],["get",s],h,"#31a354",p,"#756bb1"];n.setPaintProperty("cluster-fill","fill-color",x);const d=t!==null,o=Number(t),E=["case",["any",["==",["get",s],-9999],["==",["get",s],null]],0,d?["case",["==",["to-number",["get","Place"]],o],.8,.15]:.7];n.setPaintProperty("cluster-fill","fill-opacity",E)};n.isStyleLoaded()?(m(),y()):n.once("load",()=>{m(),y()})},[g,t,s]),c.useEffect(()=>{var y,f,C,L;if(!g||t===null)return;const n=i.current;if(!n)return;const m=g.features.filter(j=>{var p;const h=(p=j.properties)==null?void 0:p.Place;return h!==void 0&&Number(h)===Number(t)});if(m.length!==0)try{const j=new ue.LngLatBounds;let h=0;const p=Math.max(1,Math.floor(m.length/2e3));for(let x=0;x<m.length;x+=p){const d=m[x];if(!((y=d.geometry)!=null&&y.coordinates))continue;const o=d.geometry.type,k=d.geometry.coordinates;o==="Point"?(j.extend(k),h++):o==="LineString"||o==="MultiPoint"?(k.forEach(S=>j.extend(S)),h++):o==="Polygon"||o==="MultiLineString"?((f=k[0])==null||f.forEach(S=>j.extend(S)),h++):o==="MultiPolygon"&&((L=(C=k[0])==null?void 0:C[0])==null||L.forEach(S=>j.extend(S)),h++)}!j.isEmpty()&&h>0&&n.fitBounds(j,{padding:50,duration:1e3})}catch(j){console.error("Fly to error:",j)}},[t]),c.useEffect(()=>((async()=>{(!v.current||i.current)&&console.log("开始初始化地图...");try{const m=new ue.Map({container:v.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});m.addControl(new ue.NavigationControl,"top-right"),m.on("load",()=>{console.log("地图样式加载完成")}),m.on("error",y=>{var L;const f=String(((L=y==null?void 0:y.error)==null?void 0:L.message)||(y==null?void 0:y.message)||"");f.includes("ERR_ABORTED")||f.includes("AbortError")||f.includes("Canceled")||f.includes("cancelled")||console.error("地图错误:",y)}),i.current=m,console.log("地图初始化完成")}catch(m){console.error("地图初始化错误:",m)}})(),()=>{i.current&&(i.current.remove(),i.current=null,Ke.current=!1)}),[]),c.useEffect(()=>{const n=i.current;if(!n)return;const m=()=>{n.getLayer("simple-tiles")&&n.setLayoutProperty("simple-tiles","visibility",ne?"visible":"none")};n.isStyleLoaded()?m():n.once("style.load",m)},[ne]);const Ze=async n=>{var y;const m=(y=n.target.files)==null?void 0:y[0];if(m){me.current&&me.current.abort(),de(!0),te(0),Z("正在读取文件..."),r(null),Le(!0),ce(URL.createObjectURL(m));try{console.log("开始读取文件:",m.name,"大小:",m.size);let f=[];const C=m.name.endsWith(".zip"),L=m.name.endsWith(".shp");if(!C&&!L){r("请上传 .zip 文件 (包含 Shapefile)"),de(!1);return}Z("正在读取文件...");const j=await m.arrayBuffer();te(30),Z("正在解析 Shapefile...");const h=await Ae(j);console.log("Shapefile 解析完成:",h),h.type==="FeatureCollection"?f=h.features:Array.isArray(h)?f=h:h.type==="Feature"&&(f=[h]),console.log("解析到的 features 数量:",f.length),te(95),Z(`已解析 ${f.length} 个 Features...`);const p={type:"FeatureCollection",features:f};te(98),Z("正在处理 Place 数据...");const x=new Map;p.features.forEach(d=>{var S;const o=Number(((S=d.properties)==null?void 0:S.Place)??0);x.has(o)||x.set(o,{id:o,name:`Place ${o}`,featureCount:0});const k=x.get(o);k&&k.featureCount++}),te(100),Z("加载完成!"),setTimeout(()=>{Ve(!0),_(p),T(Array.from(x.values()).sort((d,o)=>d.id-o.id)),de(!1),Le(!1),l(!1)},500)}catch(f){const C=f instanceof Error?f.message:"未知错误";r(`加载失败: ${C}`),de(!1),l(!1)}}},Ye=ee.reduce((n,m)=>(n[m.category]||(n[m.category]=[]),n[m.category].push(m),n),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[Ie&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Re,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:He}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${De}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[De,"%"]})]})}),I&&!Ie?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(it,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${a}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[a,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:Ge,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(ot,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var n;return(n=Pe.current)==null?void 0:n.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Re,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Pe,type:"file",accept:".shp,.zip",onChange:Ze,className:"hidden"})]})}):null,w&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:w}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(lt,{size:14}),"刷新重试"]})})]}),R&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(ct,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>F(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(dt,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>$e(!ne),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${ne?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ne?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:t??"",onChange:n=>u(n.target.value?Number(n.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Ee=g==null?void 0:g.features)==null?void 0:Ee.length)??0,")"]}),N.map(n=>e.jsxs("option",{value:n.id,children:[n.name," (",n.featureCount,")"]},n.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:s,onChange:n=>M(n.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Ye).map(([n,m])=>[e.jsx("optgroup",{label:n.charAt(0).toUpperCase()+n.slice(1),children:m.map(y=>e.jsx("option",{value:y.key,children:y.label},y.key))},n)])})]}),P&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(mt,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:P.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:P.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:P.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:P.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:P.nanCount})]})]})]})]})]}),!R&&e.jsx("button",{onClick:()=>F(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(ut,{size:18})}),Ue&&W&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[W.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",W.properties.Place]}),W.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",W.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",W.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>Ce(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(ze,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:ee.map(n=>{var y;const m=(y=W.properties)==null?void 0:y[n.key];return m==null?null:e.jsxs("button",{onClick:()=>M(n.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${s===n.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:n.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof m=="number"?m.toFixed(2):m})]},n.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>u(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:v,className:"w-full h-full"}),_e&&g&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Fe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>Te(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(ze,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>qe(O==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${O==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:O==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:s.includes("K_")?(()=>{var f,C;const n=Math.round(((f=he[s])==null?void 0:f.max)??30),m=Array.from({length:26},(L,j)=>{const h=j/25;let p,x,d;if(h<.167){const o=h/.167;p=0,x=0,d=Math.round(139+116*o)}else if(h<.333){const o=(h-.167)/.167;p=0,x=Math.round(255*o),d=255}else if(h<.5){const o=(h-.333)/.167;p=0,x=Math.round(255-128*o),d=Math.round(255-255*o)}else if(h<.667){const o=(h-.5)/.167;p=Math.round(255*o),x=255,d=0}else if(h<.833){const o=(h-.667)/.167;p=255,x=Math.round(255-128*o),d=0}else{const o=(h-.833)/.167;p=255,x=Math.round(127-127*o),d=0}return`#${p.toString(16).padStart(2,"0")}${x.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`}),y=Array.from({length:n+1},(L,j)=>m[Math.round(j*25/n)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((C=ee.find(L=>L.key===s))==null?void 0:C.label)||s}),e.jsx("div",{className:"flex flex-wrap gap-px",children:y.map((L,j)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:L}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:j})]},j))})]})})():s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?(()=>{var d;const n=(()=>{var S;let o=1/0,k=-1/0;for(const E of g.features){const D=Number((S=E.properties)==null?void 0:S[s]);Number.isNaN(D)||D===-9999||(D<o&&(o=D),D>k&&(k=D))}return{min:o===1/0?0:o,max:k===-1/0?0:k}})(),m=t!==null&&P?{min:P.min,max:P.max}:n,y=((d=ee.find(o=>o.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(m.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(m.max-n.min)/(n.max-n.min))):0,L=Math.max(0,C-f),j=Q("#3182bd"),h=Q("#e6550d"),p=J(j,h,f),x=J(j,h,C);return e.jsxs("div",{children:[O==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),O==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(2)}),e.jsx("span",{children:n.max.toFixed(2)})]})]})]})})():s.includes("elev")||s.includes("slope")?(()=>{var d;const n=(()=>{var S;let o=1/0,k=-1/0;for(const E of g.features){const D=Number((S=E.properties)==null?void 0:S[s]);Number.isNaN(D)||D===-9999||(D<o&&(o=D),D>k&&(k=D))}return{min:o===1/0?0:o,max:k===-1/0?0:k}})(),m=t!==null&&P?{min:P.min,max:P.max}:n,y=((d=ee.find(o=>o.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(m.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(m.max-n.min)/(n.max-n.min))):0,L=Math.max(0,C-f),j=Q("#31a354"),h=Q("#756bb1"),p=J(j,h,f),x=J(j,h,C);return e.jsxs("div",{children:[O==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(1)}),e.jsxs("span",{children:[m.max.toFixed(0),"+"]})]})]}),O==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(1)}),e.jsxs("span",{children:[n.max.toFixed(0),"+"]})]})]})]})})():(()=>{var d;const n=(()=>{var S;let o=1/0,k=-1/0;for(const E of g.features){const D=Number((S=E.properties)==null?void 0:S[s]);Number.isNaN(D)||D===-9999||(D<o&&(o=D),D>k&&(k=D))}return{min:o===1/0?0:o,max:k===-1/0?0:k}})(),m=t!==null&&P?{min:P.min,max:P.max}:n,y=((d=ee.find(o=>o.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(m.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(m.max-n.min)/(n.max-n.min))):0,L=Math.max(0,C-f),j=Q("#31a354"),h=Q("#756bb1"),p=J(j,h,f),x=J(j,h,C);return e.jsxs("div",{children:[O==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),O==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(2)}),e.jsx("span",{children:n.max.toFixed(2)})]})]})]})})()})]}),!_e&&e.jsx("button",{onClick:()=>Te(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Fe,{size:18})})]})},sn=()=>{const v=c.useRef(null),i=c.useRef(!1);return c.useEffect(()=>i.current||!v.current?void 0:(i.current=!0,(()=>{const l=document.createElement("script");l.type="text/javascript",l.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",l.async=!0,window.googleTranslateElementInit=()=>{new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,zh-CN,zh-TW",layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:!1},"google_translate_element"),setTimeout(()=>{const a=document.getElementById("google_translate_element");a&&(a.style.display="inline-block",a.querySelectorAll("div").forEach(r=>{r.style.display="inline-flex",r.style.flexDirection="row",r.style.alignItems="center"}),a.querySelectorAll("span").forEach(r=>{r.style.display="inline",r.style.verticalAlign="middle"}))},100)},document.body.appendChild(l)})(),()=>{const l=document.getElementById("google_translate_element");l&&(l.innerHTML="");const a=document.querySelector('script[src*="translate.google.com"]');a&&a.remove();const b=document.querySelector(".skiptranslate");b&&b.remove();const w=document.querySelector("#goog-gt-tt");w&&w.remove(),document.body.style.top="",i.current=!1}),[]),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{id:"google_translate_element",ref:v,className:"flex items-center",style:{display:"inline-block",minWidth:"100px"}}),e.jsx("style",{children:`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        #google_translate_element {
          display: inline-block !important;
        }
        #google_translate_element * {
          display: inline !important;
          float: none !important;
        }
        #google_translate_element .goog-te-gadget {
          display: inline-block !important;
          margin: 0 !important;
        }
        #google_translate_element .goog-te-gadget-simple {
          background-color: transparent !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 4px !important;
          padding: 2px 6px !important;
          display: inline-block !important;
          white-space: nowrap !important;
          margin: 0 !important;
          line-height: normal !important;
        }
        #google_translate_element .goog-te-gadget-simple a {
          display: inline !important;
          text-decoration: none !important;
        }
        #google_translate_element .goog-te-gadget-simple span {
          color: #525252 !important;
          font-size: 11px !important;
          display: inline !important;
          vertical-align: middle !important;
        }
        #google_translate_element .goog-te-gadget-icon {
          display: none !important;
        }
        #google_translate_element .goog-te-gadget-simple img {
          display: none !important;
        }
      `})]})},rn=()=>{const[v,i]=c.useState(!0),[I,l]=c.useState("/data/fig/lili/lili_01.png"),[a,b]=c.useState("Exploring the intersection of technology and creativity."),g=nt().pathname.split("/").filter(Boolean)[0]||"",_={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},N=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],T=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],t=()=>{const s=Math.floor(Math.random()*N.length);return N[s]},u=()=>{const s=Math.floor(Math.random()*T.length);return T[s]};return c.useEffect(()=>{g===""?l(t()):_[g]?l(_[g]):l(t()),b(u())},[g]),c.useEffect(()=>{const s=()=>{window.innerWidth<300,i(!0)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 flex flex-col ",children:e.jsxs("div",{className:"w-full bg-white border border-neutral-10 flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b p-4 flex justify-between items-center bg-white z-30 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>i(!v),className:"md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900",children:"☰"}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(sn,{}),e.jsxs("nav",{className:"flex md:flex gap-0",children:[e.jsx(oe,{to:"/",onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${g===""?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:"Home"})}),[{key:"planning",label:"Planning",short:"Planning"},{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(s=>e.jsx(oe,{to:`/${s.key}`,onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${g===s.key?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:s.label})},s.key))]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[v&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 bg-white w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[I&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:I,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 italic mb-3",children:['"',a,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 bg-white flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[I&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:I,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(we,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(we,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(we,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 italic",children:['"',a,'"']})})]})]})}),e.jsx("section",{className:"flex-1 bg-white relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(at,{children:[e.jsx(z,{path:"/",element:e.jsx(tn,{})}),e.jsx(z,{path:"/planning",element:e.jsx(se,{data:je,type:"planning"})}),e.jsx(z,{path:"/planning/:id",element:e.jsx(ie,{data:je,type:"planning"})}),e.jsx(z,{path:"/design",element:e.jsx(se,{data:Ne,type:"design"})}),e.jsx(z,{path:"/design/:id",element:e.jsx(ie,{data:Ne,type:"design"})}),e.jsx(z,{path:"/game",element:e.jsx(se,{data:ke,type:"game"})}),e.jsx(z,{path:"/game/:id",element:e.jsx(ie,{data:ke,type:"game"})}),e.jsx(z,{path:"/platform",element:e.jsx(se,{data:Se,type:"platform"})}),e.jsx(z,{path:"/platform/:id",element:e.jsx(ie,{data:Se,type:"platform"})}),e.jsx(z,{path:"/tutorial",element:e.jsx(se,{data:Me,type:"tutorial"})}),e.jsx(z,{path:"/tutorial/:id",element:e.jsx(ie,{data:Me,type:"tutorial"})}),e.jsx(z,{path:"/clusteringeomap",element:e.jsx(an,{})}),e.jsx(z,{path:"/about",element:e.jsx(Jt,{})}),e.jsx(z,{path:"/contact",element:e.jsx(en,{})})]})})]})]})})};function on(){const[v,i]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(st,{children:e.jsx(rn,{})}),!v&&e.jsx(pt,{onFinish:()=>i(!0)})]})}rt.createRoot(document.getElementById("root")).render(e.jsx(on,{}));
