const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-B26NuqWS.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./riffle-BuqCfcTA.js","./genstyle-DuJ38oKx.js","./genshot-8Uy4GIux.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,L as Q,u as tt,c as nt,d as at,e as rt,f as V,H as st,g as it}from"./react-vendor-6zld6QO8.js";import{A as He,m as ve}from"./framer-DvVmTyA1.js";import{M as lt,r as ot,a as dt}from"./markdown-q3GborES.js";import{b as Fe}from"./geo-Z02C8O4I.js";import{m as fe}from"./maplibre-BedwuVXB.js";import{U as Be,L as ct,D as ut,R as mt,M as ht,C as gt,a as pt,b as xt,X as Ge,c as Oe}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const y of b.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function C(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function o(p){if(p.ep)return;p.ep=!0;const b=C(p);fetch(p.href,b)}})();function ft({onFinish:g}){const[s,C]=l.useState(!0),o=l.useRef(null),p=l.useRef({x:-1e3,y:-1e3});return l.useEffect(()=>{const b=o.current;if(!b)return;const y=b.getContext("2d");if(!y)return;let i,n=[];const P=()=>{b.width=window.innerWidth,b.height=window.innerHeight},N=r=>{p.current={x:r.clientX,y:r.clientY}},D=r=>{r.touches.length>0&&(p.current={x:r.touches[0].clientX,y:r.touches[0].clientY})};window.addEventListener("resize",P),window.addEventListener("mousemove",N),window.addEventListener("touchmove",D),P();class t{constructor(){this.x=Math.random()*b.width,this.y=Math.random()*b.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>b.width)&&(this.vx*=-1),(this.y<0||this.y>b.height)&&(this.vy*=-1);let k=p.current.x-this.x,R=p.current.y-this.y,u=Math.sqrt(k*k+R*R),m=k/u,S=R/u;const G=150;let z=(G-u)/G;u<G&&(this.x-=m*z*this.density*.5,this.y-=S*z*this.density*.5)}draw(){y&&(y.fillStyle="rgba(255, 255, 255, 0.8)",y.beginPath(),y.arc(this.x,this.y,this.size,0,Math.PI*2),y.fill())}}for(let r=0;r<120;r++)n.push(new t);const d=()=>{y.clearRect(0,0,b.width,b.height);for(let r=0;r<n.length;r++){n[r].update(),n[r].draw();for(let k=r+1;k<n.length;k++){const R=n[r].x-n[k].x,u=n[r].y-n[k].y,m=Math.sqrt(R*R+u*u);m<100&&(y.beginPath(),y.strokeStyle=`rgba(255, 255, 255, ${.2*(1-m/100)})`,y.lineWidth=.6,y.moveTo(n[r].x,n[r].y),y.lineTo(n[k].x,n[k].y),y.stroke())}}i=requestAnimationFrame(d)};return d(),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",P),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",D)}},[]),e.jsx(He,{onExitComplete:g,children:s&&e.jsxs(ve.div,{onClick:()=>C(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(ve.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(ve.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const bt=`---
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

# 效果展示

![效果展示](/data/fig/global-5.jpg)

![效果展示](/data/fig/global-12.jpg)

![效果展示](/data/fig/global-20.jpg)

![效果展示](/data/fig/global-26.jpg)
`,vt=`---
id: "02"
slug: "knowledge-graph-urban-planning"
title: "Knowledge Graph Generation from Urban Planning Texts"
category: "Knowledge Graph"
year: "2025-present"
description: "A Comparative Analysis for Climate Change Adaptation in New York and Shanghai Master Plans"
tech: ["Knowledge Graph","NLP"]
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to generate and compare the edges connecting these nodes. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city learning for climate resilience."
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."
icon: "/data/fig/kg_logo.jpg"
image: ["/data/fig/kg_figure.jpg"]
---

# 效果展示

![效果展示](/data/fig/kg_figure.jpg)
`,yt=`---
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

# 效果展示

![效果展示](/data/fig/lcz_figure.jpg)
`,jt=`---
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

---

## 4 - Research Results and Visualization

![Research Results](/data/fig/AAAI2026.jpg)

This poster summarizes the key findings of our study on urban heat resilience using machine learning approaches. The visualization demonstrates the nonlinear relationships between urban form factors and extreme heat events.

`,wt=`---
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

https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm

<iframe src="https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

![效果展示](/data/fig/PU-1.jpg)

![效果展示](/data/fig/PU-2.jpg)
`,kt=`---
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

# 效果展示

![效果展示](/data/fig/heatmapper-1.png)

![效果展示](/data/fig/heatmapper-2.png)
`,Nt=`---
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

# 效果展示

![效果展示](/data/fig/1037pinpin.jpg)
`,Mt=`---
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

# 效果展示

![效果展示](/data/fig/persLEARN.jpg)
`,Ct=`---
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

# 效果展示

![效果展示](/data/fig/DragonDiffusion.jpg)
`,St=`---
id: "04"
slug: "genstyle"
title: "Genstyle - Daily Outfit Inspiration Delivered"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "/data/fig/Genstyle_logo.jpg"
image: ["/data/fig/Genstyle.jpg"]
---

# 效果展示

![效果展示](/data/fig/Genstyle.jpg)
`,It=`---
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

# 效果展示

![效果展示](/data/fig/Bazi.jpg)
`,Lt=`---
id: "06"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "/data/fig/Genshot_logo.jpg"
image: ["/data/fig/Genshot.jpg"]
---

# 效果展示

![效果展示](/data/fig/Genshot.jpg)
`,Dt=`---
id: "07"
slug: "riffle-ai-game-generation-tool"
title: "Riffle - AI game Generation Tool"
category: "UI&UX Design"
year: "2026"
description: "An AI-powered game generation tool"
tech: ["Figma","React","TypeScript"]
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."
icon: "/data/fig/Riffle_logo.jpg"
image: ["/data/fig/Riffle.jpg"]
hasDemo: true
---

# 效果展示

![效果展示](/data/fig/Riffle.jpg)
`,At=`---
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

# 效果展示

![效果展示](/data/fig/kittylovecarrots-1.png)

![效果展示](/data/fig/kittylovecarrots-2.png)
`,Pt=`---
id: "02"
slug: "how-to-build-game-in-wechat-mini-program"
title: "How to build game in wechat mini program"
category: "Game"
year: "2026-2-9"
description: "从设计到发布，一人独立完成微信小程序游戏的全流程实战经验分享。"
tech: ["微信小程序","游戏开发","Figma","AI生图"]
challenge: "独立开发者如何在有限资源下，快速完成从设计、开发到发布的完整游戏项目。"
solution: "采用轻量级技术栈，结合AI工具降低美术门槛，模块化代码架构实现1-2周快速迭代。从架构设计到审核上线的全流程指南。"
hasDemo: true
icon: "/data/fig/wechatgame_logo.jpg"
code: "wechatgame.tsx"
image: ["/data/fig/wechatgame.png"]
---

# 一个人怎么做游戏

这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。

## 为什么选择这个架构？

作为独立开发者，资源有限，需要：

- **快速验证想法** - 不需要复杂的工程化配置
- **低维护成本** - 代码结构清晰，易于理解和修改
- **全栈可控** - 从前端到后端到部署，一个人能 hold 住

## 技术选型思路

| 层面 | 选择 | 原因 |
|------|------|------|
| **前端框架** | 原生 JavaScript | 微信小游戏环境原生支持，无需额外构建工具 |
| **游戏引擎** | 微信小游戏引擎 | 平台原生，文档完善，性能有保障 |
| **后端服务** | Cloudflare Workers | 免费额度充足，部署简单，全球 CDN |
| **开发工具** | Trae CN + 微信开发者工具 | AI 辅助编码 + 原生调试，效率最高 |
| **设计工具** | Figma + AI 生图 | 快速出图，降低美术门槛 |

## 开发流程

\`\`\`
想法 → Figma 原型 → AI 生图/修图 → 微信开发者工具编码 → 真机测试 → 提交审核
\`\`\`

整个流程可以在 **1-2 周** 内完成一个 MVP 版本，非常适合独立开发者快速试错。

---

# 工作流拆解

## 01 设计

### 设计稿 figma

https://www.figma.com/ 下载，打开打开到本地。注册账号并且登录，尽量不要使用qq邮箱。

在这里，我们会开始画项目的设计稿。

<imagecarousel images="/data/fig/games/wechat-mini-game-01.png,/data/fig/games/wechat-mini-game-02.png,/data/fig/games/wechat-mini-game-03.png,/data/fig/games/wechat-mini-game-04.png" captions="Figma design draft - main interface|Figma design draft - game elements|Figma design draft - 具体的流程添加示意|Figma design draft - final output"></imagecarousel>

### ai跑图

#### chatgpt/gemini
使用chatgpt/gemini nano bannana等ai工具，根据设计稿生成对应的图片。

<imagecarousel images="/data/fig/games/wechat-mini-game-chatgpt.png,/data/fig/games/wechat-mini-game-gemini.png" captions="chatgpt|gemini nanobanna"></imagecarousel>
#### lovart.ai
推荐使用lovart.ai。每天有免费的5张图的图片生成额度。
https://www.lovart.ai/

可以生成对应的游戏ui和游戏插画，此处我示意了对应的帽子的设计。
![AI generated cat with hats](/data/fig/games/wechat-mini-game-ai-image.png)

#### figma professional
可以尝试使用figma professional对图片进行微调。
figma professional version中，新增了对图片的处理，支持裁剪、去除背景、局部抠图（局部清理）、prompt编辑、矢量化（！！！）
<imagecarousel images="/data/fig/games/wechat-mini-game-figma-edit-01.png,/data/fig/games/wechat-mini-game-figma-edit-02.png,/data/fig/games/wechat-mini-game-figma-edit-03.png" captions="Figma AI image editing - selecting the cat|Figma AI image editing - adding prompt|Figma AI image editing - model selection"></imagecarousel>


## 02 微信小游戏code

### 微信小游戏项目结构

打开微信开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![下载页面](/data/fig/games/wechat-mini-game-devtools-03.png)

下载到本地，如果在本地，可以看到。

![微信开发者工具界面](/data/fig/games/wechat-mini-game-devtools-01.png)

![微信开发者工具项目结构](/data/fig/games/wechat-mini-game-devtools-02.png)

### 01 使用vibe三方平台打开微信小程序编译代码

这里我一般用的是trae CN, trae 也可以，但是我个人比较喜欢trae CN, 因为trae CN 目前的免费模型比较好。可以考虑使用windsurf代替。

https://www.trae.cn/

在三方平台打开，虽然还是得打开微信开发者工具去编辑，但是不会太复杂。

好了。让我们看看我们目前的游戏项目框架。

微信小游戏基于的游戏语言是：JavaScript。但是微信小游戏的游戏引擎是：微信小游戏引擎。

**目录概览**

\`\`\`
├── audio/                           音频资源
│   ├── background.mp3
│   ├── carrot.mp3
│   ├── ...
├── images/                          图片资源
│   ├── card.png                     卡片背景
│   ├── ...(后续将图片素材完全迁移，通过CDN访问)
├── js/
│   ├── base/                        基础能力
│   │   ├── animation.js             帧动画
│   │   ├── pool.js                  对象池
│   │   └── sprite.js                精灵结构
│   ├── components/                  复用组件
│   │   ├── Cat.js
│   │   ├── DraggableItem.js
│   │   └── scene-items.js
│   ├── libs/
│   │   └── tinyemitter.js           事件库
│   ├── runtime/                     运行时支持
│   │   ├── background.js
│   │   ├── cloudflareApi.js         远端接口封装
│   │   ├── gameinfo.js
│   │   ├── music.js
│   │   ├── objectPool.js
│   │   └── resourceManager.js
│   ├── sprites/                     主要场景与页面
│   │   ├── saytheword.js            词语节奏游戏
│   │   ├── dress.js                 换装页逻辑
│   │   ├── homeEvent.js             主页触控事件封装
│   │   └── closeButton.js           通用关闭按钮
│   └── render.js                    基础渲染信息
├── .vscode/settings.json            IDE 设置
├── .eslintrc.js                     代码规范
├── Cloudflare-Workers-指南.md       云端部署与联调说明
├── README.md                        项目说明
├── game.js                          主入口与场景管理
├── game.json                        运行时配置
├── project.config.json              微信开发者工具配置
└── project.private.config.json      个人配置
\`\`\`

具体的功能有空补上。那么就可以开始做一些小游戏了！
注意：资产文件的限制比较多，一开始不要设计太大的图片。demo做完了之后，可以参考02 CDN资产配置，将素材上传到Cloudflare R2库中。

### 02 CDN资产配置 (免费图床)
CDN（内容分发网络）资产是指分布在不同地理位置的服务器节点及其缓存的内容，旨在将HTML、图像、视频等静态/动态数据缓存到靠近用户的边缘节点，从而实现加速访问、降低源站带宽压力、提高可靠性并防御DDoS攻击。其核心价值在于提升用户体验。
由于微信小程序的界面对代码的大小有一定的限制，所以我们不能把所有的图片素材都内置，我是直接把素材放在了Cloudflare上访问。Cloudflare R2 免费有每月10G 存储，100 万次A 类操作，1000 万次B 类操作，对于个人用户来说完全足够了。
在cloudflare中的R2库里面添加一个文件夹，把所有的图片素材上传到那里，然后在game.json中配置对应的路径。
![CDN资产](/data/fig/games/wechat-mini-game-cdn.png)

## 03 发布与审核

### 测试版、开发版、正式版
在微信开发者工具中，我们可以发布不同的版本：

- **测试版** - 用于内部测试，不面向公众
- **开发版** - 面向公众测试，可邀请好友测试
- **正式版** - 正式发布，面向所有用户

个人开发者只能有15个测试用户。发布到正式版的审核很严格，需要完成

### 审核流程与时间

微信小程序的审核流程比较严格，从首次提交到最终通过审核大约需要 **一个月** 的时间。审核流程包括：

1. **微信认证** - 企业/个人主体认证
2. **小游戏资质审核** - 游戏类目需要额外的资质
3. **代码发布审核** - 每次代码更新都需要审核
4. **适龄审核** - 游戏内容分级审核
5. **ICP备案审核** - 根据政策要求进行ICP备案
![alt text](/data/fig/games/wechat-mini-game-verification.png)
![审核通知时间线](/data/fig/games/wechat-mini-game-review-timeline.png)

> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。

发布到正式版之后，就可以开始看游戏的用户流量情况了。
![alt text](/data/fig/games/wechat-mini-game-data-visual.png)


## 04微信小游戏软著
> 📌 **参考阅读**  
> [CSDN：小游戏软著申请全流程](https://blog.csdn.net/oSuiFeng788/article/details/143061373?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-143061373-blog-100574718.235^v43^pc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.3&utm_relevant_index=6)

---

### 🎮 为什么一定要申请软著？
| 平台 | 上线前是否必须软著 |
|------|--------------------|
| 微信小程序 | ❌ 可后补 |
| 抖音小游戏 | ✅ 强制提交 |
| OPPO、vivo、小米等 | ✅ 强制提交 |

> ⚠️ 依据《计算机软件著作权登记办法》第 20 条，**受理后 60 日内**完成审查，**请至少提前 2 个月准备**。

---

### 🚀 全流程线上 · 0 跑腿
1. 注册 + 实名认证（1–3 个工作日）  
![alt text](/data/fig/games/object-storage.png)
![alt text](/data/fig/games/copyright-protection-center.png)

2. 在线填报 + 电子签章  
3. 审查通过后**直接下载电子证书**  
   → 无需邮寄纸质材料，**全程免费**。

---

### 🧩 材料一览（可点击展开）
<details>
<summary>1️⃣ 程序鉴别资料（源码）</summary>

- **连续前 30 页 + 后 30 页**（每页 ≥ 50 行）  
- 若总代码 ≤ 60 页，**全部提交**  
- 页眉：软件名称 + 版本号（与申请表一致）  
- 页脚：居中页码（1–60）

> 工具推荐：  
> \`cloc\` / \`git log --stat\` 快速统计行数 → 导出 PDF
</details>

<details>
<summary>2️⃣ 文档鉴别资料（说明书 / 流程图 / 用户手册 三选一）</summary>

- **连续前 30 页 + 后 30 页**（每页 ≥ 30 行）  
- 建议直接导出**Figma 交互原型 + 文字说明** → PDF  
- 页码规则同上
</details>

<details>
<summary>3️⃣ 其余常规资料</summary>

- 申请表（系统自动生成）  
- 身份证正反面 + 手持照（实名认证）  
- 软件名称、版本号、开发完成日期、权利范围等
</details>

---

### 📝 六步极速填报
1. 选择办理身份（个人 / 企业）  
2. 填写软件基本信息  
3. 填写开发信息（团队、时间、软硬件环境）  
4. **软件功能与特点**（⚠️ 最多字数，建议提前写好）  
5. 确认信息 → 生成**签章页**  
6. 打印 → 手写签名 → 扫描上传 → **提交**

---

### ⏱️ 关键时间节点
| 阶段 | 时长 | 备注 |
|------|------|------|
| 实名认证 | 1–3 工作日 | 一次性通过 |
| 材料准备 | 1–3 天 | 用脚本导出 PDF 最快 |
| 审查周期 | **60 日内** | 无补正情况下 |
| 补正材料 | +30 日 | 收到通知后需重新提交 |

---

### 🎉 审查通过
- 短信 + 邮件提醒  
- 登录后台即可**下载电子证书**（带官方水印）  
- 后续平台上线时**直接上传 PDF** 即可。
`,Et=`---\r
id: "03"\r
slug: "how-to-use-unity-making-wechat-minigames"\r
title: "How to use Unity making wechat minigames"\r
category: "Game"\r
year: "2026-3-17"\r
description: "Unity游戏部署在微信的全流程实战经验分享。"\r
tech: ["Unity","游戏开发","wechat minigame"]\r
challenge:\r
solution:\r
icon: "/data/fig/unity_logo.jpg"\r
code: "unitygame.tsx"\r
image: ["/data/fig/unitygame.png"]\r
---\r
\r
\r
下载，打开Unity平台\r
unity online service, 打造了一系列针对微信小游戏的管理、云服务等多个系列的内容。\r
![alt text](/data/fig/games/copyright-unity-onlineservices.png)\r
<inframe src='https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html'></inframe>\r
https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html\r
\r
<inframe src="https://www.bilibili.com/video/BV1ey411i7hc"></inframe>\r
\r
教程视频\r
https://www.bilibili.com/video/BV1Df421q7br?spm_id_from=333.788.videopod.sections&bvid=BV1ey411i7hc\r
\r
具体怎么在Unity中部署微信小游戏的tutorial\r
https://learn.u3d.cn/tutorial/instant-game-joker?chapterId=64f5962ca571d50021bb3afb&sectionId=64f5962ca571d50021bb3afa`,_t=`---
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

# 效果展示

![效果展示](/data/fig/litflow (1).png)

![效果展示](/data/fig/litflow (2).png)

![效果展示](/data/fig/litflow (3).png)

![效果展示](/data/fig/litflow (4).png)

![效果展示](/data/fig/litflow (5).png)

![效果展示](/data/fig/litflow (6).png)
`,Tt=`---
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

# 效果展示

![效果展示](/data/fig/boxupcyberspace-1.png)

![效果展示](/data/fig/boxupcyberspace-2.png)
`,Rt=`---
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

# Background
## Overview
**Oversight Committee Releases Epstein Records Provided by the Department of Justice** 
https://oversight.house.gov/release/oversight-committee-releases-epstein-records-provided-by-the-department-of-justice/

WASHINGTON — Sep 2, 2025, the House Committee on Oversight and Government Reform released **33,295** pages of Epstein-related records that were provided by the U.S. Department of Justice. On August 5, Chairman Comer issued a subpoena for records related to Mr. Jeffrey Epstein, and the Department of Justice has indicated it will continue producing those records while ensuring the redaction of **victim identities and any child sexual abuse material**.
## Details
Original datasat released by US government. -> google drive

<iframe src="https://drive.google.com/embeddedfolderview?id=15T3gys6zGFDE-Fth6S6H4CFCOtfMXebq#grid" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

for example, the file "12l_mgFf2lW-gvfE1kfiu7GTBpLxtls5q" is the record of Mr. Epstein's sexual assault case.
<iframe src="https://drive.google.com/file/d/12l_mgFf2lW-gvfE1kfiu7GTBpLxtls5q/preview" width="100%" height="600" frameborder="0" allowfullscreen"></iframe>

## Google OAuth
https://console.cloud.google.com/

**Why we need Google OAuth:**
1. **Secure Authentication**: Provides a secure and trusted authentication mechanism for users
2. **No Password Management**: Users don't need to create or remember another password
3. **Account Verification**: Ensures users have a valid Google account before accessing sensitive documents
4. **Access Control**: Helps manage who can view and interact with the archive materials
5. **Audit Trail**: Tracks user activity and access patterns for security purposes

**Setup Steps:**
1. Go to Google Cloud Console
2. Create a new project
3. Enable Google OAuth API
4. Configure OAuth consent screen
5. Create OAuth 2.0 Client ID
6. Add authorized redirect URIs
7. Implement OAuth flow in your application

## IMAGES/IMAGES001
https://drive.google.com/drive/folders/1hbt7DnoeoWY5AFqNIMxQ6JfUrIwuFbVw
## IMAGES/IMAGES002
https://drive.google.com/drive/folders/1YtByjZ7msxaTUsMWV5pFzDVfZMUMVDRb
## IMAGES/IMAGES003
https://drive.google.com/drive/folders/169W0-Sgw4ZN61eSq-mO6mE7i4F2tbiCM
## IMAGES/IMAGES004
https://drive.google.com/drive/folders/1c3n-TjtumvyfDkrzH1vs1-oHMVc3tyci
## IMAGES/IMAGES005
https://drive.google.com/drive/folders/1FGWhpp1Yxm-RT8G3Ie-v7Ftd-zFha0qz
## IMAGES/IMAGES006
https://drive.google.com/drive/folders/1dxC6GaePcwvy953fXwKznKVwL3u4l4es
## IMAGES/IMAGES007
https://drive.google.com/drive/folders/1axUXaIs4XT3IQkNMRpHpDX_sg4znEgC8
## IMAGES/IMAGES008
https://drive.google.com/drive/folders/1hno5jSW--phzhefZuzmKlgxrSFdmgYMn
## IMAGES/IMAGES009
https://drive.google.com/drive/folders/11K6xnVKr2xGcd9Cgww1OMmgfwsvvwXht
## IMAGES/IMAGES010
https://drive.google.com/drive/folders/15g91IdhyX4uocwGj5N_W_A9g0EAOjkk3
## IMAGES/IMAGES011
https://drive.google.com/drive/folders/13ZyhRCXC_cL1eX34GV9benUj_RD--PZM
## IMAGES/IMAGES012
https://drive.google.com/drive/folders/1__354BbVLSciR40xa8B0wgBhyLL1Scp3

![效果展示](/data/fig/epsteinscret-1.png)
![效果展示](/data/fig/epsteinscret-2.png)
`,zt=`---
id: "01"
slug: "how-to-add-openstreetmap-in-website"
title: "How to Add OpenStreetMap in Website"
category: "Tutorial"
year: "2026-2-1"
description: "A tutorial on integrating OpenStreetMap into a website."
tech: ["python","React","TypeScript"]
challenge: "Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key."
solution: "You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started."
hasDemo: true
icon: "/data/fig/useOpenstreetMap_logo.jpg"
code: "openstreetmap.tsx"
image: ["/data/fig/openstreetmap.png"]
---

# 效果展示

![效果展示](/data/fig/openstreetmap.png)
`,Ft=`---
id: "02"
slug: "how-to-get-sequential-events-from-photo-by-phone"
title: "How to get sequential events from photo by phone"
category: "Tutorial"
year: "2026-2-2"
description: "A tutorial on extracting sequential events from photos taken on a phone."
tech: ["Computer Vision","Image Processing"]
challenge: "Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events."
solution: "By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process."
hasDemo: true
icon: "/data/fig/Geophoto_logo.jpg"
code: "photogeo.tsx"
image: ["/data/fig/photogeo.png"]
---

# 效果展示

![效果展示](/data/fig/photogeo.png)
`,Bt=`---
id: "03"
slug: "how-to-visualize-photo-geolocation-data-on-map"
title: "How to visualize photo geolocation data on map"
category: "Tutorial"
year: "2026-2-3"
description: "A tutorial on visualizing photo geolocation data on a map."
tech: ["Mapping","Image Processing"]
challenge: "Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data."
solution: "By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations."
hasDemo: true
icon: "/data/fig/GeophotoMap_logo.jpg"
code: "photogeomap.tsx"
image: ["/data/fig/photogeomap.png"]
---

# 效果展示

![效果展示](/data/fig/photogeomap.png)
`,Gt=`---
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

# 效果展示

![效果展示](/data/fig/photocluster-1.jpg)

![效果展示](/data/fig/photocluster-2.jpg)
`,Ot=`---
id: "05"
slug: "how-to-construct-docker"
title: "如何构建docker"
category: "Tutorial"
year: "2026-2-14"
description: "本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。"
tech: ["Docker", "Linux", "DevOps"]
icon: "/data/fig/Docker_logo.jpg"
abstract: |
  本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。
  本教程适用于Windows 10/11用户，假设用户已经具备基本的Windows操作技能。
  本教程将引导用户完成docker的安装和配置，以及如何使用docker构建和运行容器。


---

## 01 下载docker
https://www.docker.com/

<iframe src="https://www.docker.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
## 02 安装适用于docker的linux系统
适用于Linux的Windows 子系统(WSL)是一个在Windows 10/11上运行Linux环境的功能。它允许用户在Windows上运行Linux应用程序和工具，而无需安装虚拟机或双引导。
打开Windows powershell，输入
<code>
wsl --update
</code>

## 03 打开设置，把文件的默认存储换到e盘
Settings> Resources > Advanced 
Disk image location -> 修改到需要的盘。

## 04 日常使用。`,Ut=`---
id: "06"
slug: "how-to-construct-workflow-in-dify"
title: "How to construct workflow in Dify"
category: "Tutorial"
year: "2026-2-15"
description: "本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署、知识库创建和工作流设计。"
tech: ["Dify", "Docker", "Ollama", "AI Workflow", "Local LLM"]
icon: "/data/fig/Dify_logo.jpg"
abstract: |
  本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署 Dify、配置 Ollama 本地模型、创建知识库和设计自动化工作流。
---

# 01-03 Dify 工作流构建
Docker +  Dify  + Ollama + 知识库 + 工作流
实现本地 AI 工作流的完整搭建：环境部署、模型配置、知识管理、流程自动化

---

## 第一次使用 Dify（完整安装配置）

### 1. 打开 Docker
\`\`\`powershell
# 打开 Docker Desktop
Start-Process "C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe"
\`\`\`

### 2. 本地部署 Dify
**链接**: https://dify.ai/

<iframe src="https://dify.ai/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**GitHub**: https://github.com/langgenius/dify

<iframe src="https://github.com/langgenius/dify" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

#### a. Dify 介绍
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。

#### b. 本地部署步骤
1. **环境准备**：确保已安装 Docker 和 Docker Compose
2. **克隆项目**：
   \`\`\`bash
   git clone https://github.com/langgenius/dify.git
   \`\`\`
3. **配置环境**：
   \`\`\`bash
   cd E:/dify-project
   cd dify-new/docker
   cp .env.example .env
   \`\`\`
4. **启动服务**：
   \`\`\`bash
   docker compose up -d
   \`\`\`
5. **访问应用**：打开浏览器访问 \`http://localhost/install\`

### 3. 配置 Ollama 本地模型

#### a. Ollama 介绍
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：
- 完全本地运行，无需联网
- 无需 API Key，数据隐私安全
- 支持多种开源模型

**链接**: https://ollama.com/

<iframe src="https://ollama.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama

<iframe src="https://marketplace.dify.ai/plugin/langgenius/ollama" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

#### b. 安装配置步骤

1. **下载安装**：访问 https://ollama.com/download 下载对应系统版本

<iframe src="https://ollama.com/download" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

2. **设置模型存储路径**（重要）：
   \`\`\`powershell
   # 设置环境变量，将模型存储到 E 盘
   [Environment]::SetEnvironmentVariable("OLLAMA_MODELS", "E:\\ollama_models", "User")
   \`\`\`
3. **创建模型目录**：
   \`\`\`powershell
   mkdir E:\\ollama_models
   \`\`\`
4. **启动服务**：
   \`\`\`bash
   ollama serve
   \`\`\`
   服务地址：\`http://127.0.0.1:11434\`
5. **下载模型**：
   \`\`\`bash
   # 下载LLM model
   ollama pull llama3.2
   
   # 下载Embedded model（用于知识库向量化）
   ollama pull mxbai-embed-large
   ollama pull nomic-embed-text
   \`\`\`
   > **注意**：目前 Ollama 官方库中暂无专门的 Rerank 模型。可以使用嵌入模型的相似度排序作为替代方案。（推荐使用）

#### c. 在 Dify 中配置 Ollama

1. **进入模型提供商配置**：
   - 登录 Dify 后，点击右上角 \`设置\` → \`模型提供商\`
   - 找到 \`Ollama\` 并点击 \`配置\`

2. **配置 API 端点**（重要）：
   \`\`\`
   API Base URL: http://host.docker.internal:11434
   \`\`\`
   > **注意**：必须使用 \`host.docker.internal\` 而不是 \`127.0.0.1\`，因为 Dify 运行在 Docker 容器中

3. **验证连接**：
   - 点击 \`验证连接\` 按钮
   - 成功后应该能看到已安装的模型：\`llama3.2\`、\`mxbai-embed-large\`、\`nomic-embed-text\`

4. **保存配置**：点击 \`保存\` 完成配置

#### d. 关于 Rerank 模型

**当前状态**：目前 Ollama 官方库中暂无专门的 Rerank 模型可用。

#### e. Python 集成（可选）
\`\`\`bash
# 创建专用环境
conda create -n ollama python=3.9 -y
conda activate ollama
pip install ollama

# 验证模型
ollama list
\`\`\`

### 4. 创建知识库和工作流

#### a. 创建知识库

1. **登录 Dify**：访问 \`http://localhost\` 并完成初始设置

2. **创建知识库**：
   - 点击左侧菜单"知识库"
   - 点击"创建知识库"按钮
   - 输入知识库名称（如："AI工作流文档库"）
   - 选择知识库类型：\`文本知识库\`

3. **配置文档解析方式**：
   - 选择 \`Complex PDF with Images & Tables\` 启用 MinerU 解析
   - MinerU：开源 PDF 解析工具，擅长处理图片、表格等复杂内容
   - GitHub: https://github.com/opendatalab/MinerU

<iframe src="https://github.com/opendatalab/MinerU" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

   - Docker 部署: https://opendatalab.github.io/MinerU/zh/quick_start/docker_deployment/#docker-compose

<iframe src="https://opendatalab.github.io/MinerU/zh/quick_start/docker_deployment/#docker-compose" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

4. **配置索引设置**：
   - **向量化模型**：\`nomic-embed-text\`（你当前使用的）
   - **分块设置**：800 字符，重叠 80 字符（复杂文档建议）
   - **检索设置**：语义检索，Top K 3，相似度阈值 0.7

5. **上传 PDF 文档**：
   - 拖拽或点击上传 PDF 文件
   - MinerU 自动解析文档结构，需等待 5-10 分钟
   - 等待状态显示"已索引"

6. **MinerU 连接问题**：
   - **当前问题**：MinerU 插件内部连接错误 \`[Errno 111] Connection refused\`
   - **根本原因**：MinerU 服务未正确启动或配置缺失
   - **解决方案**：配置独立 MinerU 服务

#### b. 部署独立 MinerU 服务

**参考教程**：https://zhuanlan.zhihu.com/p/19052812648613610

<iframe src="https://zhuanlan.zhihu.com/p/19052812648613610" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**部署步骤**：
03 使用 Dify 中 MinerU 插件的常见问题
本地部署的 Dify，在执行过程中遇到如下错误怎么办？

1Run failed: Failed to transform tool message: PluginInvokeError: {"args":{},"error_type":"Exception","message":"Error extracting page from PDF: Request URL is missing an 'http://' or 'https://' protocol."}
（报错示意）

为了解决上述问题，接下来你需要设置 Dify 的配置文件：

1. 找到 Dify 部署目录，打开 .env 文件，修改 FILES_URL 配置项，依据你的部署方式填写：

● Docker Compose 部署：FILES_URL 设置为 ‘http://api:5001'

● 其他部署方式：FILES_URL 设置为 'http://Dify宿主机IP:5001'

（如 http://192.168.1.100:5001，这里的 IP 通常是运行 Dify 的机器的 IP，即前文提到的"本地IP"端口。5001 是 Dify API 服务的默认端口）。

2. 确认 Dify API 服务的 5001 端口已对外暴露（可检查 docker-compose.yaml 文件的端口映射）。

3. 保存 .env 文件。

4. 重启 Dify 服务以使配置生效。

#### c. 构建工作流

1. **创建工作流**：
   - 点击左侧菜单"工作室"
   - 点击"创建应用" → 选择"工作流"
   - 输入应用名称（如："智能问答助手"）

2. **设计基本流程**：
   - **开始节点**：设置输入变量（如：\`user_question\`）
   - **知识库检索节点**：
     - 选择之前创建的知识库
     - 检索查询：\`{{user_question}}\`
     - Top K：3
   - **LLM 节点**：
     - 模型选择：\`llama3.2\`
     - 系统提示词：
       \`\`\`
       你是一个专业的问答助手。基于以下检索到的文档内容回答用户问题：
       
       检索内容：{{#retrieval#}}
       
       用户问题：{{user_question}}
       
       请基于检索内容提供准确、详细的回答。如果检索内容中没有相关信息，请礼貌地说明。
       \`\`\`
   - **结束节点**：输出 LLM 的回答

3. **添加条件判断**（可选）：
   - **变量节点**：检查检索结果数量
   - **条件节点**：
     - 如果检索到内容 → 执行 LLM 回答
     - 如果未检索到内容 → 返回默认回复

4. **测试工作流**：
   - 点击"运行"按钮
   - 输入测试问题
   - 检查各节点执行结果
   - 根据需要调整参数

5. **发布应用**：
   - 点击右上角"发布"
   - 选择发布方式：Web 应用、API
   - 配置访问权限和域名

#### d. 实战示例：文档问答助手

**目标**：创建一个基于上传文档的智能问答系统

**完整工作流设计**：
\`\`\`
开始 → 知识库检索 → 条件判断 → LLM处理 → 结束
                    ↓
                默认回复
\`\`\`

**详细配置**：
1. **输入变量**：\`user_question\`（文本类型）
2. **知识库检索**：
   - 数据集：选择已创建的知识库
   - 检索查询：\`{{user_question}}\`
   - Top K：3
   - 相似度阈值：0.7
3. **条件判断**：
   - 条件：\`{{#retrieval#}}\` 不为空
   - 真分支：执行 LLM 处理
   - 假分支：输出"抱歉，我没有找到相关信息"
4. **LLM 配置**：
   - 模型：\`llama3.2\`
   - 温度：0.1（保证回答稳定性）
   - 最大长度：1000

---

## 以后每次打开 Dify（日常使用）

### 1. 打开 Docker Desktop
\`\`\`powershell
# 打开 Docker Desktop
Start-Process "C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe"
\`\`\`
//这一步其实可有可无，因为可以设置docker开机自启。

### 2. 启动 Dify 服务
\`\`\`bash
# 进入 Dify docker 目录
cd E:/dify-project/dify-new/docker

# 重启服务
docker compose down
docker compose up -d
\`\`\`

### 3. 启动 Ollama 服务（如果需要使用本地模型）
\`\`\`bash
ollama serve
\`\`\`
服务地址：\`http://127.0.0.1:11434\`

### 4. 访问 Dify
打开浏览器访问：\`http://localhost\`

---

## 故障排除

### 常见问题及解决方案：

1. **Ollama 连接失败**：
   - 检查 Ollama 服务：\`ollama list\`
   - 确认 API 地址：\`http://host.docker.internal:11434\`
   - 重启 Docker 容器：\`docker compose restart\`

2. **知识库检索效果差**：
   - 调整分块大小（尝试 500-1500）
   - 降低相似度阈值（0.5-0.7）
   - 启用 Rerank 模型
   - 检查文档质量和格式

3. **工作流执行失败**：
   - 检查变量名称是否正确
   - 确认各节点参数配置
   - 查看执行日志定位问题

4. **模型响应慢**：
   - 使用较小的模型（如 llama3.2:1b）
   - 减少 max_tokens 设置
   - 考虑使用量化模型

5. **语音功能问题**：
   - **Whisper 安装失败**：确保 \`pip install openai-whisper\` 和 \`ffmpeg\` 已安装
   - **音频格式不支持**：转换为 WAV 或 MP3 格式
   - **TTS API 调用失败**：检查 API 密钥和网络连接
   - **浏览器录音权限**：确保 HTTPS 环境或 localhost

6. **MinerU 和文件处理问题**：
   - **FILES_URL 错误解决**：
     \`\`\`bash
     # 1. 进入 Dify docker 目录
     cd e:/lililin0324.github.io/dify/docker
     
     # 2. 编辑 .env 文件
     notepad .env
     
     # 3. 添加或修改以下配置
     FILES_URL=http://localhost:5001
     CONSOLE_WEB_URL=http://localhost
     APP_WEB_URL=http://localhost
     
     # 4. 重启服务
     docker compose down
     docker compose up -d
     \`\`\`
   - **MinerU 解析失败**：
     - 检查 PDF 文件大小（建议 < 50MB）
     - 确保文件不是扫描版图片
     - 尝试使用 Adobe Acrobat 重新保存 PDF
     - 分割大文件为多个小文件
   - **处理超时**：
     - 复杂文档处理需要 5-10 分钟，请耐心等待
     - 检查 Docker 容器资源使用情况
     - 必要时增加容器内存限制

---

## 最佳实践

### 模型选择策略：
- **对话任务**：使用 \`llama3.2\` 系列，平衡性能和资源消耗
- **嵌入任务**：\`mxbai-embed-large\` 适合中文，\`nomic-embed-text\` 适合英文
- **重排序任务**：目前使用嵌入模型的相似度排序，调整检索参数优化效果
- **语音任务**：本地 Whisper（隐私）vs 云端 API（便捷）

### 知识库优化：
- 定期更新文档内容，保持信息时效性
- 合理设置分块大小，避免信息丢失或上下文过长
- 使用清晰的文档结构和标题，提高检索准确性

### 工作流设计原则：
- 保持流程简洁，避免不必要的复杂节点
- 合理使用变量和条件分支，提高复用性
- 添加错误处理机制，提升系统稳定性

### 语音功能优化：
- 选择合适的 Whisper 模型大小（tiny/base/small/medium/large）
- 优化音频输入质量，减少背景噪音
- 合理设置音频格式和采样率
- 考虑音频缓存和预加载策略

### 性能优化建议：
- 监控 API 调用次数和响应时间
- 合理设置缓存策略，减少重复计算
- 定期清理无用数据和应用
- 语音处理考虑异步化，避免阻塞主流程

### 安全考虑：
- 定期备份重要的知识库和工作流配置
- 设置适当的访问权限和API密钥管理
- 避免在提示词中包含敏感信息
- 语音数据注意隐私保护和合规性

---

## 总结

本教程涵盖了 Dify 本地部署的完整流程：

1. **环境搭建**：Docker 部署 Dify + Ollama 本地模型服务
2. **模型配置**：对话、嵌入模型配置，以及 Rerank 和语音功能的替代方案
3. **知识库构建**：文档上传、索引配置、检索优化
4. **工作流开发**：从简单问答到复杂业务流程的设计
5. **语音功能扩展**：ASR 和 TTS 的集成方案与实战示例
6. **故障排除**：常见问题的诊断和解决方案

通过这套方案，你可以构建完全本地化的 AI 应用，确保数据隐私和定制化需求，同时支持文本和语音多模态交互。
`,Vt=`---
id: "07"
slug: "how-to-construct-light-backend-workflow"
title: "How to construct the light backend workflow "
category: "Tutorial"
year: "2026-2-16"
description: "本教程将介绍如何构建轻量级后端工作流。"
tech: ["vercel", "neon", "clerk", "cloudflare r2", "resend"]
icon: "/data/fig/Backend_logo.jpg"
abstract: |
  本教程将介绍如何构建轻量级后端工作流。
  部署在vercel； 数据库在Neon； 认证在clerk； 存储在Cloudflare R2； 邮件在Resend
---
# 01-05 云服务配置
vercel -> neon -> clerk -> cloudflare r2 -> resend
实现全栈应用的快速开发和部署：前端部署、数据库、认证、存储、邮件

## 01 部署在vercel
link: https://vercel.com/

<iframe src="https://vercel.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
### a. vercel介绍
vercel是一个云平台，可以快速部署和托管web应用。

### b. vercel部署步骤
1. vercel 和GitHub联动，因此只需要上传到github即可
2. 在vercel中连接github仓库，选择要部署的分支
3. 配置环境变量，包括数据库连接字符串、API密钥等

## 02 数据库在Neon
link: https://neon.tech/

<iframe src="https://neon.tech/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Neon数据库介绍
Neon是一个云数据库平台，提供PostgreSQL数据库服务。

### b. Neon数据库步骤
1. 创建数据库
2. 获取数据库连接字符串

## 03 认证在clerk
link: https://clerk.com/

<iframe src="https://clerk.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Clerk认证介绍
Clerk是一个云认证平台，提供用户认证和授权服务。

### b. Clerk认证步骤
1. 创建应用
2. 配置认证方式

## 04 存储在Cloudflare R2
link: https://www.cloudflare.com/developer-platform/products/r2/

<iframe src="https://www.cloudflare.com/developer-platform/products/r2/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Cloudflare R2介绍
Cloudflare R2是一个云存储平台，提供对象存储服务。

### b. Cloudflare R2步骤
1. 创建存储桶
2. 配置访问密钥 和 私钥

## 05 邮件在Resend
link: https://resend.com/

<iframe src="https://resend.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Resend邮件介绍
Resend是一个云邮件平台，提供邮件发送服务。

### b. Resend邮件步骤
1. 创建应用
2. 配置邮件发送

`,Wt=`---
id: "08"
slug: "whats-mcp"
title: "什么是 MCP？—— 让 AI 学会使用工具的「通用语言」"
category: "Tutorial"
year: "2026-2-25"
description: "面向非计算机背景学生的 MCP 入门教程，用通俗的语言解释 Model Context Protocol 是什么、为什么需要它、以及如何使用它。"
tech: ["MCP", "AI", "Claude", "LLM"]
icon: "/data/fig/mcp_logo.jpg"
abstract: |
  MCP（Model Context Protocol）是一种让 AI 助手与外部工具和数据源连接的标准协议。本教程用通俗的语言，帮助没有计算机背景的学生理解 MCP 的概念、工作原理和实际应用。
---

# 什么是 MCP？—— 让 AI 学会使用工具的「通用语言」

## 一句话理解 MCP

**MCP 就像是 AI 的「万能转接头」**，让不同的 AI 助手（如 Trae、Windsurf、VS Code 中的 AI）能够统一地连接和使用各种外部工具（如查天气、操作文件、访问数据库）。

---

## 01 为什么需要 MCP？

### 场景一：没有 MCP 的时候

想象一下，你正在使用一个 AI 助手，你想让它帮你：

1. **查今天的天气** → AI 说：「抱歉，我没有联网功能」
2. **读取你的项目文件** → AI 说：「我无法直接操作文件」
3. **执行终端命令** → AI 说：「我无法运行命令」

**问题**：每个 AI 助手都是「孤岛」，无法与外部世界连接。

### 场景二：开发者想给 AI 添加功能

假设你是一个开发者，你想让 AI 能够：
- 查询数据库中的客户信息
- 控制智能家居设备
- 操作 Photoshop 进行设计

**没有 MCP 时**：
- 给 Trae 写一个插件 → 需要学一套接口
- 给 Windsurf 写一个插件 → 需要学另一套接口  
- 给 VS Code 的 Copilot 写一个插件 → 又要学第三套接口...

**有了 MCP 后**：
- 写一次工具，所有支持 MCP 的 AI 都能用！

---

## 02 MCP 是什么？

### 正式定义

> **MCP（Model Context Protocol，模型上下文协议）** 是由 Anthropic 公司推出的开放协议，它标准化了 AI 助手与外部数据源、工具之间的连接方式。

### 通俗比喻

| 比喻 | 解释 |
|------|------|
| **USB 接口** | 就像 USB 让各种设备（U盘、鼠标、键盘）都能插到电脑上，MCP 让各种工具都能被 AI 使用 |
| **翻译官** | AI 和工具说不同的「语言」，MCP 充当翻译，让它们能互相理解 |
| **万能遥控器** | 一个遥控器可以控制电视、空调、音响，MCP 让 AI 能统一控制各种工具 |

---

## 03 MCP 的工作原理（超简单版）

### 核心组件
┌─────────────────────────────────────────────────────────┐
│                      用户提问                             │
│              「帮我查一下北京的天气」                       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              AI 助手（如 Trae、Windsurf）                  │
│              「我需要调用天气查询工具」                      │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              MCP 协议（统一的沟通标准）                     │
│         「把 AI 的请求翻译成工具能理解的格式」                │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              MCP 服务器（天气查询服务）                     │
│              「调用天气 API，获取数据」                     │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              返回结果给 AI → 整理后回答用户                 │
│              「北京今天晴天，25°C」                        │
└─────────────────────────────────────────────────────────┘

### 三个关键角色

| 角色 | 作用 | 类比 |
|------|------|------|
| **MCP Host** | 运行 AI 的程序（如 VS Code、Trae、Windsurf） | 手机 |
| **MCP Client** | AI 助手本身 | 手机里的 App |
| **MCP Server** | 提供具体功能的工具服务 | 充电宝、耳机等外设 |

---

## 04 MCP 能做什么？—— 实际应用场景

### 场景 1：文件管理助手
- **问题**：你有一个文件夹，里面有很多文件，你想让 AI 帮你管理它们。
- **解决办法**：写一个 MCP 插件，连接到文件管理工具（如 Dropbox、Google Drive），AI 就可以调用它来操作文件了。

### 场景 2：数据库查询助手
- **问题**：你有一个数据库，里面存储着客户信息、订单记录等。你想让 AI 帮你查询这些数据。
- **解决办法**：写一个 MCP 插件，连接到数据库（如 MySQL、PostgreSQL），AI 就可以调用它来查询数据了。

### 场景 3：智能家居控制助手
- **问题**：你有一个智能家居系统，里面有各种设备（如智能灯、智能插座）。你想让 AI 帮你控制它们。
- **解决办法**：写一个 MCP 插件，连接到智能家居系统（如 Home Assistant、SmartThings），AI 就可以调用它来控制设备了。

用户：「分析这个 Excel 表格里的销售趋势」

AI → MCP → 数据库工具
→ 读取文件 → 提取数据 → 生成图表 → 给出分析结论

### 场景 4：生活助手
用户：「查一下我下周的日程，如果有雨提醒我带伞」

AI → MCP → 日历工具 + 天气工具
→ 读取日程 → 查询天气 → 条件判断 → 发送提醒

---

## 05 如何使用 MCP？

### 第一步：确认你的 AI 助手支持 MCP

目前支持 MCP 的 AI 客户端：
- ✅ **Trae**（字节跳动的 AI IDE，内置 MCP 支持）
- ✅ **Windsurf**（Codeium 的 AI IDE，支持 MCP）
- ✅ **VS Code + Cline/Roo Code**（通过插件支持 MCP）
- ✅ **Cursor**（代码编辑器，支持 MCP）
- ✅ **Claude Desktop**（官方支持最完善）
- ✅ **Cursor**（代码编辑器）
- ✅ **Continue**（VS Code 插件）
- ✅ **其他兼容客户端**

### 第二步：安装 MCP 服务器

以 **Trae** 为例（VS Code 和 Windsurf 类似）：

1. **打开 Trae**
2. **进入设置** → 找到 MCP 配置入口（通常在 AI 助手设置中）
3. **编辑配置文件**，添加你想要的工具：

\`\`\`json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/Users/username/Downloads"
      ]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
\`\`\`

### 第三步：开始使用！

配置完成后，你的 AI 助手（Trae/Windsurf/VS Code）就能：
- 📁 **读取和编辑你项目中的文件**
- 🌐 **访问网页并提取内容**
- 🗄️ **查询数据库**
- 🖥️ **执行终端命令**
- 🔧 **操作各种开发工具**
- 等等...

---

## 06 常用 MCP 工具推荐

| 工具名称 | 功能 | 适用场景 |
|---------|------|---------|
| **filesystem** | 文件读写 | 管理本地文件、批量重命名、整理文档 |
| **fetch** | 网页抓取 | 获取网页内容、监控网站变化 |
| **sqlite** | 数据库查询 | 数据分析、记录管理 |
| **puppeteer** | 浏览器自动化 | 网页截图、自动化测试 |
| **github** | GitHub 操作 | 代码管理、Issue 追踪 |
| **slack** | 消息发送 | 团队协作、自动通知 |

---

## 07 MCP vs 传统方式的优势

| 对比项 | 传统插件 | MCP |
|--------|---------|-----|
| **开发成本** | 每个 AI 平台都要单独开发 | 一次开发，多平台通用 |
| **安全性** | 权限控制不统一 | 标准化的权限管理 |
| **灵活性** | 功能固定 | 可动态发现和切换工具 |
| **生态** | 各自为政 | 开放共享的生态系统 |

---

## 08 总结

### 核心要点

1. **MCP 是一个协议** → 就像 USB 是一种接口标准
2. **让 AI 能使用工具** → 打破 AI 的「孤岛」状态
3. **一次开发，到处使用** → 开发者写一次，所有 AI 都能用
4. **安全可控** → 用户可以决定 AI 能访问什么

### 适合谁用？

- 👩‍🎓 **学生**：让 AI 帮你整理资料、分析数据、管理文件
- 👨‍💼 **办公人员**：自动化重复性工作，提高效率
- 🎨 **设计师**：用自然语言控制设计软件
- 🏠 **普通用户**：打造个性化的 AI 助手

### 下一步

1. 确认你的 IDE 支持 MCP（Trae、Windsurf 或 VS Code + 插件）
2. 尝试配置一个简单的 MCP 工具（如 filesystem 或 terminal）
3. 体验 AI 直接操作项目文件的神奇感觉！
4. 探索更多 MCP 工具，打造你的专属编程助手

---

## 参考资源

- **官方文档**: https://modelcontextprotocol.io/
- **GitHub 仓库**: https://github.com/modelcontextprotocol
- **工具市场**: https://github.com/modelcontextprotocol/servers
- **Claude 官方介绍**: https://www.anthropic.com/news/model-context-protocol

---

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,Ht=`---\r
id: "09"\r
slug: "how-to-choose-suitable-database"\r
title: "数据库选择指南——什么情况用什么数据库"\r
category: "Tutorial"\r
year: "2026-3-17"\r
description: "简单明了的数据库选择指南，帮助你根据项目需求快速选择合适的数据库。"\r
tech: ["数据库", "MySQL", "PostgreSQL", "MongoDB", "Redis"]\r
icon: "/data/fig/database_logo.jpg"\r
abstract: |\r
  选择合适的数据库是项目成功的关键。本指南用简单的语言告诉你，在不同场景下应该选择哪种数据库，让你不再为数据库选择而困惑。\r
---\r
\r
# 数据库选择指南\r
\r
## 01 快速选择指南\r
\r
### 什么是数据库？\r
\r
**数据库**就是用来存储和管理数据的系统，就像一个电子化的文件柜。不同类型的数据库适合不同的场景。\r
\r
### 一句话选择\r
\r
| 场景 | 推荐数据库 | 理由 |\r
|------|------------|------|\r
| **一般网站/应用** | MySQL | 简单易用，适合大多数中小项目 |\r
| **复杂企业系统** | PostgreSQL | 功能强大，支持复杂业务逻辑 |\r
| **社交/内容应用** | MongoDB | 灵活的数据结构，适合用户数据 |\r
| **需要速度的场景** | Redis | 内存存储，速度极快 |\r
\r
---\r
\r
## 02 主流数据库适用场景\r
\r
### MySQL\r
\r
**最适合**：\r
- 中小型网站和应用\r
- 电商网站\r
- 企业内部系统\r
- 内容管理系统\r
\r
**为什么选它**：\r
- 容易学习和使用\r
- 免费且稳定\r
- 社区支持好\r
- 与PHP等语言配合默契\r
\r
**例子**：\r
- 小型电商网站的产品和订单管理\r
- 企业内部的员工信息系统\r
- 个人博客或内容网站\r
\r
---\r
\r
### PostgreSQL\r
\r
**最适合**：\r
- 复杂的企业应用\r
- 数据仓库和分析\r
- 地理信息系统\r
- 需要高级功能的场景\r
\r
**为什么选它**：\r
- 功能非常强大\r
- 支持复杂查询\r
- 数据一致性好\r
- 适合处理复杂数据\r
\r
**例子**：\r
- 银行的交易系统\r
- 医院的 patient 管理系统\r
- 城市的地理信息系统\r
\r
---\r
\r
### MongoDB\r
\r
**最适合**：\r
- 社交应用\r
- 内容管理系统\r
- 物联网应用\r
- 移动应用后端\r
\r
**为什么选它**：\r
- 数据结构灵活，不需要固定格式\r
- 适合存储各种类型的数据\r
- 可以轻松处理大量数据\r
- 开发速度快\r
\r
**例子**：\r
- 社交网络的用户资料和动态\r
- 内容平台的文章和评论\r
- 物联网设备的传感器数据\r
\r
---\r
\r
### Redis\r
\r
**最适合**：\r
- 缓存系统\r
- 会话管理\r
- 实时计数器\r
- 排行榜\r
- 消息队列\r
\r
**为什么选它**：\r
- 速度极快（内存存储）\r
- 支持多种数据类型\r
- 适合处理实时数据\r
- 可以减轻数据库压力\r
\r
**例子**：\r
- 网站的页面缓存\r
- 电商网站的购物车\r
- 游戏的实时排行榜\r
- 直播平台的弹幕系统\r
\r
---\r
\r
## 03 组合使用\r
\r
### 常见组合\r
\r
| 场景 | 推荐组合 | 效果 |\r
|------|----------|------|\r
| **一般Web应用** | MySQL + Redis | MySQL存数据，Redis做缓存 |\r
| **社交应用** | MongoDB + Redis | MongoDB存用户数据，Redis处理实时功能 |\r
| **企业系统** | PostgreSQL + Redis | PostgreSQL处理复杂业务，Redis提高速度 |\r
\r
### 例子\r
\r
**电商网站**：\r
- MySQL：存储产品、订单、用户信息\r
- Redis：缓存热门产品，管理购物车\r
\r
**社交应用**：\r
- MongoDB：存储用户资料、动态、评论\r
- Redis：处理实时通知、在线状态\r
\r
---\r
\r
## 04 选择的核心原则\r
\r
### 考虑因素\r
\r
1. **数据结构**：\r
   - 整齐的表格数据 → MySQL/PostgreSQL\r
   - 灵活的非结构化数据 → MongoDB\r
   - 简单的键值对 → Redis\r
\r
2. **性能需求**：\r
   - 一般应用 → MySQL\r
   - 复杂查询 → PostgreSQL\r
   - 速度优先 → Redis\r
\r
3. **数据量**：\r
   - 小数据量 → MySQL\r
   - 大数据量 → MongoDB\r
   - 超大数据量 → 分布式数据库\r
\r
4. **团队能力**：\r
   - 新手团队 → MySQL\r
   - 有经验团队 → PostgreSQL/MongoDB\r
\r
---\r
\r
## 05 云数据库\r
\r
### 为什么用云数据库？\r
\r
- **不用自己维护**：云服务商负责硬件和软件\r
- **随用随扩**：根据需要调整资源\r
- **高可靠性**：自动备份和故障转移\r
- **按需付费**：只付实际使用的费用\r
\r
### 推荐的云数据库服务\r
\r
- **AWS RDS**：支持MySQL、PostgreSQL\r
- **阿里云RDS**：国内稳定，价格合理\r
- **腾讯云TencentDB**：与微信生态集成好\r
\r
---\r
\r
## 06 总结\r
\r
### 快速决策表\r
\r
| 需求 | 首选数据库 |\r
|------|------------|\r
| 简单网站/应用 | MySQL |\r
| 复杂企业系统 | PostgreSQL |\r
| 社交/内容应用 | MongoDB |\r
| 缓存/实时功能 | Redis |\r
| 混合需求 | 组合使用 |\r
\r
### 最终建议\r
\r
- **从小开始**：先选择简单的数据库，随着业务增长再调整\r
- **混合使用**：不同场景用不同的数据库\r
- **考虑未来**：选择能支持业务增长的数据库\r
- **团队熟悉**：优先选择团队熟悉的技术\r
\r
> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function $t(g){const s=/^---\r?\n([\s\S]*?)\r?\n---/,C=g.match(s);let o={},p=g;if(C){const b=C[1];p=g.slice(C[0].length).trim();const y=b.split(/\r?\n/);let i=null,n=[];y.forEach(P=>{if(P.trim()==="")return;const D=P.indexOf(":");if(D!==-1&&!P.startsWith(" ")){i&&(o[i]=n.join(`
`)),i=P.slice(0,D).trim();let t=P.slice(D+1).trim();t==="|"?n=[]:(o[i]=t,i=null,n=[])}else i&&P.startsWith("  ")&&n.push(P.slice(2))}),i&&n.length>0&&(o[i]=n.join(`
`)),Object.keys(o).forEach(P=>{let N=o[P];if(typeof N=="string")if(N=N.trim(),N.startsWith('"')&&N.endsWith('"')&&(N=N.slice(1,-1)),N.startsWith("[")&&N.endsWith("]"))try{o[P]=JSON.parse(N)}catch{o[P]=[N.slice(1,-1).trim()]}else N==="true"?o[P]=!0:N==="false"?o[P]=!1:!isNaN(Number(N))&&N.trim()!==""?o[P]=Number(N):o[P]=N})}return{id:o.id||"",slug:o.slug||"",title:o.title||"",category:o.category||"",year:o.year||"",description:o.description||"",tech:o.tech||[],abstract:o.abstract||"",challenge:o.challenge||"",solution:o.solution||"",hasDemo:o.hasDemo||!1,icon:o.icon||"",code:o.code||"",logo:o.icon||"",image:o.image||[],content:p}}function F(g){const s=$t(g);return{id:s.id,slug:s.slug,title:s.title,category:s.category,year:s.year,description:s.description,tech:s.tech,hasDemo:s.hasDemo,details:{abstract:s.abstract,description:s.description,challenge:s.challenge,solution:s.solution,logo:s.logo,icon:s.icon,code:s.code,image:s.image,content:s.content}}}const Se=[F(bt),F(vt),F(yt),F(jt),F(wt),F(kt)],Ie=[F(Nt),F(Mt),F(Ct),F(St),F(It),F(Lt),F(Dt)],Le=[F(At),F(Pt),F(Et)],De=[F(_t),F(Tt),F(Rt)],Ae=[F(zt),F(Ft),F(Bt),F(Gt),F(Ot),F(Ut),F(Vt),F(Wt),F(Ht)],me=({data:g,type:s})=>{const[C,o]=l.useState("grid"),[p,b]=l.useState(1),y=55,i={2:{text:"Self-introduction",link:"/about"},5:{text:"View 1037pinpin Project",link:"/design/1037pinpin"},11:{text:"View Perslearn Project",link:"/design/perslearn"},21:{text:"View Dragon Diffusion Project",link:"/design/dragon-diffussion"},27:{text:"View Genstyle Project",link:"/design/genstyle"},43:{text:"View Luoshu Project",link:"/design/bazi-fengshui-analysis"},48:{text:"View Genshot Project",link:"/design/genshot"}};return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[s==="design"?e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 lg:gap-8",children:[e.jsxs("div",{className:"flex-1 lg:flex-shrink-0 lg:w-[55%]",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Portfolio PDF"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Page ",p," / ",y]})]}),e.jsxs("div",{className:"relative flex items-center justify-center gap-2",children:[e.jsx("button",{onClick:()=>b(n=>Math.max(1,n-1)),disabled:p<=1,className:"flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("div",{className:"relative flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-600",style:{aspectRatio:"4/2.8"},children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_ui_portfolio.pdf#page=${p}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"absolute inset-0 w-[110%] h-[110%] pointer-events-none",title:"Portfolio PDF",style:{border:"none",transform:"translate(-2.5%, -5%)"}},p),e.jsx("div",{className:"absolute inset-0 bg-transparent z-10",style:{pointerEvents:"none"}})]}),e.jsx("button",{onClick:()=>b(n=>Math.min(y,n+1)),disabled:p>=y,className:"flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:"flex justify-center gap-1 mt-4 flex-wrap",children:Array.from({length:y}).map((n,P)=>{const N=P+1,D=p===N,t=i[N];return e.jsx("button",{onClick:()=>b(N),className:`h-1.5 rounded-full transition-all duration-300 ${D?"bg-neutral-800 dark:bg-neutral-200 w-6":t?"bg-blue-500 w-1.5 hover:bg-blue-600":"bg-neutral-300 dark:bg-neutral-600 w-1.5 hover:bg-neutral-400"}`,title:t?i[N].text:`Page ${N}`},P)})}),i[p]&&e.jsx("div",{className:"mt-3 flex justify-center",children:e.jsxs(Q,{to:i[p].link,className:"inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition-colors shadow-md hover:shadow-lg",children:[e.jsx("span",{children:i[p].text}),e.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]}),e.jsxs("div",{className:"flex-1 lg:w-[45%]",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Selected Designs"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>o("grid"),className:`px-2 py-1 text-xs font-mono ${C==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>o("list"),className:`px-2 py-1 text-xs font-mono ${C==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",g.length]})]})]}),e.jsx("div",{className:"overflow-y-auto",style:{aspectRatio:"4/2.7"},children:C==="list"?e.jsx("div",{className:"space-y-0",children:g.map(n=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-3 items-center flex-1",children:[e.jsxs(Q,{to:`/${s}/${n.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-3 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:n.year})]}),e.jsx("h3",{className:"text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 truncate",children:n.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${n.slug}#demo`},className:"flex-shrink-0 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},n.slug))}):e.jsx("div",{className:"grid grid-cols-2 gap-3",children:g.map(n=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(Q,{to:`/${s}/${n.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-2",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:n.year})]}),e.jsx("h3",{className:"text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 line-clamp-2",children:n.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-xs line-clamp-2",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${n.slug}#demo`},className:"flex-shrink-0 w-full mt-2 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},n.slug))})})]})]}):e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:["Selected ",s==="research"?"Researches":s==="game"?"Games":s==="planning"?"Planning":s==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>o("grid"),className:`px-3 py-1 text-xs font-mono ${C==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>o("list"),className:`px-3 py-1 text-xs font-mono ${C==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",g.length]})]})]}),s!=="design"&&(C==="list"?e.jsx("div",{className:"space-y-4",children:g.map(n=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(Q,{to:`/${s}/${n.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:n.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 truncate",children:n.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-1",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${n.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},n.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:g.map(n=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(Q,{to:`/${s}/${n.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-4",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:n.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 line-clamp-2",children:n.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${n.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},n.slug))}))]})},be=g=>{const s=document.getElementById(g);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},qt="modulepreload",Kt=function(g,s){return new URL(g,s).href},Ue={},W=function(s,C,o){let p=Promise.resolve();if(C&&C.length>0){let y=function(N){return Promise.all(N.map(D=>Promise.resolve(D).then(t=>({status:"fulfilled",value:t}),t=>({status:"rejected",reason:t}))))};const i=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),P=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));p=y(C.map(N=>{if(N=Kt(N,o),N in Ue)return;Ue[N]=!0;const D=N.endsWith(".css"),t=D?'[rel="stylesheet"]':"";if(!!o)for(let k=i.length-1;k>=0;k--){const R=i[k];if(R.href===N&&(!D||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${N}"]${t}`))return;const r=document.createElement("link");if(r.rel=D?"stylesheet":qt,D||(r.as="script"),r.crossOrigin="",r.href=N,P&&r.setAttribute("nonce",P),document.head.appendChild(r),D)return new Promise((k,R)=>{r.addEventListener("load",k),r.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${N}`)))})}))}function b(y){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=y,window.dispatchEvent(i),!i.defaultPrevented)throw y}return p.then(y=>{for(const i of y||[])i.status==="rejected"&&b(i.reason);return s().catch(b)})},Qt=l.lazy(()=>W(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Xt=l.lazy(()=>W(()=>import("./UR-platform-B26NuqWS.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),Zt=l.lazy(()=>W(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Yt=l.lazy(()=>W(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Jt=l.lazy(()=>W(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),en=l.lazy(()=>W(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),tn=l.lazy(()=>W(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));l.lazy(()=>W(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const nn=l.lazy(()=>W(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),an=l.lazy(()=>W(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),rn=l.lazy(()=>W(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),sn=l.lazy(()=>W(()=>import("./riffle-BuqCfcTA.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),ln=l.lazy(()=>W(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),on=l.lazy(()=>W(()=>import("./genshot-8Uy4GIux.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),dn=g=>({"cluster-visualizer-3d":Qt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Xt,heatmapper:Zt,"how-to-add-openstreetmap-in-website":Yt,"how-to-get-sequential-events-from-photo-by-phone":Jt,"how-to-visualize-photo-geolocation-data-on-map":en,"how-to-build-game-in-wechat-mini-program":rn,"how-to-conduct-time-geo-sequential-clustering-from-album":tn,"box-up-my-stuff-in-cyberspace":nn,"epstein-mystery-archive":an,"riffle-ai-game-generation-tool":sn,genstyle:ln,"genshot-AI-video-generation-tool":on})[g],Me={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},Ve=({images:g,captions:s})=>{const[C,o]=l.useState(0),p=()=>{o(i=>i===0?g.length-1:i-1)},b=()=>{o(i=>i===g.length-1?0:i+1)},y=s==null?void 0:s[C];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:g[C],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:y||`Carousel Image ${C+1}`}),e.jsx("button",{onClick:p,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:b,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:g.map((i,n)=>e.jsx("button",{onClick:()=>o(n),className:`h-1.5 rounded-full transition-all duration-300 ${C===n?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${n+1}`},n))})]}),y&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:y}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[C+1," / ",g.length]})]}),!y&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[C+1," / ",g.length]})]})},cn=({src:g,...s})=>{const[C,o]=l.useState(!1),[p,b]=l.useState(!1),y=()=>{o(!0),b(!0)},i=()=>{o(!1),b(!0)};return l.useEffect(()=>{const n=setTimeout(()=>{p||(o(!1),b(!0))},3e3);return()=>clearTimeout(n)},[p]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:g,onLoad:y,onError:i,style:{display:"none"},title:"detector"}),!p&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})}),p&&C&&e.jsx("div",{className:"w-full my-6",children:e.jsx("iframe",{src:g,className:"w-full h-96 rounded-lg shadow-md border border-neutral-200",allowFullScreen:!0,...s})}),p&&!C&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})})]})},he=({data:g,type:s})=>{var D;const{id:C}=tt(),[o,p]=l.useState("details"),[b,y]=l.useState(!1),i=g.find(t=>t.slug===C),n=t=>{const d=/^(#{1,6})\s+(.+)$/gm,r=[];let k;for(;(k=d.exec(t))!==null;){const R=k[1].length,u=k[2].trim(),m=u.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");r.push({level:R,text:u,id:m})}return r},P=(D=i==null?void 0:i.details)!=null&&D.content?n(i.details.content):[],N=t=>{const d=document.getElementById(t);d&&d.scrollIntoView({behavior:"smooth",block:"start"})};return l.useEffect(()=>{const t=()=>{window.location.hash.includes("demo")?p("demo"):p("details")};return t(),window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[C]),i?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(Q,{to:`/${s}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate max-w-[120px] md:max-w-[200px]",children:i.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>p("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${o==="details"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"DOCS"}),i.hasDemo&&e.jsxs("button",{onClick:()=>p("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${o==="demo"?"bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:`flex-1 ${o==="details"?"overflow-y-auto":"overflow-hidden"}`,children:o==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:i.tech.map((t,d)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-sm",children:t},d))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",i.id]}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:i.year}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:i.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight",children:i.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 border-l-4 border-neutral-900 dark:border-neutral-500 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic",children:['"',i.description,'"']})})]}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow",children:[e.jsxs("div",{className:"md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10",children:[i.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:i.details.abstract})]}),i.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:i.details.challenge})]}),i.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:i.details.solution})]}),i.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Content"}),e.jsx("div",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 prose prose-neutral dark:prose-invert max-w-none",children:e.jsx(lt,{remarkPlugins:[dt],rehypePlugins:[ot],components:{iframe:({src:t,title:d,...r})=>e.jsx(cn,{src:t,title:d||"Embedded content",...r}),imagecarousel:({images:t,captions:d})=>{const r=(t||"").split(",").map(R=>R.trim()).filter(Boolean),k=d?d.split("|").map(R=>R.trim()):void 0;return e.jsx(Ve,{images:r,captions:k})},imageCarousel:({images:t,captions:d})=>{const r=(t||"").split(",").map(R=>R.trim()).filter(Boolean),k=d?d.split("|").map(R=>R.trim()):void 0;return e.jsx(Ve,{images:r,captions:k})},table:({children:t})=>e.jsx("table",{className:"min-w-full border-collapse border border-neutral-300 dark:border-neutral-600",children:t}),thead:({children:t})=>e.jsx("thead",{className:"bg-neutral-50 dark:bg-neutral-800",children:t}),th:({children:t})=>e.jsx("th",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-left font-semibold text-neutral-900 dark:text-neutral-100 text-sm",children:t}),td:({children:t})=>e.jsx("td",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-neutral-700 dark:text-neutral-300 text-sm",children:t}),h1:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:k,className:"text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100",...d,children:t})},h2:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:k,className:"text-xl font-bold mb-6 mt-8 text-neutral-800 dark:text-neutral-200",...d,children:t})},h3:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:k,className:"text-lg font-semibold mb-4 mt-6 text-neutral-800 dark:text-neutral-200",...d,children:t})},h4:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h4",{id:k,className:"text-base font-semibold mb-3 mt-4 text-neutral-700 dark:text-neutral-300",...d,children:t})},h5:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h5",{id:k,className:"text-sm font-semibold mb-2 mt-3 text-neutral-700 dark:text-neutral-300",...d,children:t})},h6:({children:t,...d})=>{const k=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h6",{id:k,className:"text-xs font-semibold mb-2 mt-2 text-neutral-600 dark:text-neutral-400",...d,children:t})},p:({children:t,...d})=>e.jsx("p",{className:"mb-4 leading-relaxed",...d,children:t}),a:({children:t,href:d,...r})=>e.jsx("a",{href:d,className:"text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium",target:"_blank",rel:"noopener noreferrer",...r,children:t}),img:({src:t,alt:d,...r})=>{var R;return((R=r.className)==null?void 0:R.includes("h-32"))||(d==null?void 0:d.includes("BCR"))||(d==null?void 0:d.includes("BHV"))||(d==null?void 0:d.includes("SVF"))||(d==null?void 0:d.includes("NDVI"))||(d==null?void 0:d.includes("EV"))||(d==null?void 0:d.includes("WR"))||(d==null?void 0:d.includes("Dist_"))?e.jsx("img",{src:t,alt:d,className:"max-w-full h-32 object-cover rounded-lg shadow-sm",...r}):e.jsx("img",{src:t,alt:d,className:"w-full max-w-full h-auto rounded-lg shadow-md my-6",...r})}},children:i.details.content})})]}),(i.details.code||i.details.codeComponent||Me[i.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:Me[i.slug]||i.details.codeComponent||`// Code file: ${i.details.code}`})})})]})]}),e.jsx("div",{className:"md:col-span-12 lg:col-span-4 hidden lg:block",children:e.jsxs("div",{className:"sticky top-24 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500",children:"Contents"}),e.jsx("button",{onClick:()=>y(!b),className:"text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",children:e.jsx("svg",{className:`w-4 h-4 transform transition-transform ${b?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:`${b?"max-h-0":"max-h-96"} overflow-hidden transition-all duration-300`,children:e.jsxs("div",{className:"p-4 space-y-2 overflow-y-auto max-h-80",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Overview"}),i.details.abstract&&e.jsx("button",{onClick:()=>be("abstract"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left text-left",children:"Abstract"})]}),P.length>0&&e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Content Sections"}),P.map((t,d)=>e.jsx("button",{onClick:()=>N(t.id),className:`text-sm hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left block ${t.level===1?"font-semibold text-neutral-800 dark:text-neutral-200":t.level===2?"font-medium text-neutral-700 dark:text-neutral-300 ml-2":t.level===3?"text-neutral-600 dark:text-neutral-400 ml-4":t.level===4?"text-neutral-600 dark:text-neutral-400 ml-6":t.level===5?"text-neutral-500 dark:text-neutral-500 ml-8":"text-neutral-500 dark:text-neutral-500 ml-10"}`,children:t.text},d))]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Methodology"}),i.details.solution&&e.jsx("button",{onClick:()=>be("methodology"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Approach"}),i.details.challenge&&e.jsx("button",{onClick:()=>be("challenges"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Challenges"})]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Resources"}),(i.details.code||i.details.codeComponent||Me[i.slug])&&e.jsx("button",{onClick:()=>be("code"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Code Example"})]})]})})]})})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 dark:bg-neutral-900 relative",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"Loading demo..."}),children:(()=>{const t=dn(i.slug);return t?e.jsx(t,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},un=()=>e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"font-light text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-none",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700 dark:text-neutral-300",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),mn=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 dark:border-neutral-600 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 dark:bg-neutral-700 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors",children:"SEND_TRANSMISSION"})]}),Ce=({href:g,label:s})=>e.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all rounded-sm text-xs font-mono",children:s}),hn=()=>{const g=[...Se.map(u=>({...u,type:"planning"})),...Ie.map(u=>({...u,type:"design"})),...Le.map(u=>({...u,type:"game"})),...De.map(u=>({...u,type:"platform"})),...Ae.map(u=>({...u,type:"tutorial"}))],[s,C]=l.useState(0),o=g.length-1,[p,b]=l.useState(0),y=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260305-222003.mp4",title:"Welcome to My Portfolio",subtitle:"Explore my projects in urban planning, design, game development, and AI tutorials."},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260304_heatmap_2.mp4",title:"Data Visualization",subtitle:"Interactive heatmaps and spatial analysis for urban research."}],[i,n]=l.useState(0),[P,N]=l.useState({}),[D,t]=l.useState(1),d=20,r=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],k=(u,m)=>{var z,Y;const S=u;if(console.log(`Checking audio for video ${m}:`,{audioTracks:(z=S.audioTracks)==null?void 0:z.length,mozHasAudio:S.mozHasAudio,webkitAudioDecodedByteCount:S.webkitAudioDecodedByteCount,videoTracks:(Y=S.videoTracks)==null?void 0:Y.length,readyState:S.readyState}),S.audioTracks&&S.audioTracks.length>0){const O=Array.from(S.audioTracks).some(U=>U.enabled);console.log(`Video ${m} has audioTracks:`,O),N(U=>({...U,[m]:O}));return}if("mozHasAudio"in S){const O=S.mozHasAudio;console.log(`Video ${m} mozHasAudio:`,O),N(U=>({...U,[m]:O}));return}const G=S.webkitAudioDecodedByteCount;if(typeof G=="number"&&G>0){console.log(`Video ${m} webkitAudioDecodedByteCount:`,G),N(O=>({...O,[m]:!0}));return}if(S.readyState>=3){setTimeout(()=>{const O=S.webkitAudioDecodedByteCount,U=S.mozHasAudio,J=O>0||U===!0;console.log(`Video ${m} delayed check:`,{delayedWebkitAudio:O,delayedMozAudio:U,hasAudio:J}),N(oe=>({...oe,[m]:J}))},500);return}console.log(`Video ${m} default to has audio`),N(O=>({...O,[m]:!0}))};l.useEffect(()=>{const u=setInterval(()=>{b(m=>(m+1)%y.length)},8e3);return()=>clearInterval(u)},[y.length]);const R=l.useRef(null);return l.useEffect(()=>{const u=R.current;if(!u)return;const m=S=>{const G=S.target;u.contains(G)&&(S.preventDefault(),C(z=>S.deltaY>0?Math.min(z+1,o):Math.max(z-1,0)))};return u.addEventListener("wheel",m,{passive:!1}),()=>u.removeEventListener("wheel",m)},[o]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-10 shadow-2xl",children:[y.map((u,m)=>e.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 ${m===p?"opacity-100":"opacity-0"}`,children:e.jsx("video",{className:"absolute inset-0 w-full h-full object-cover",src:u.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})},m)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10",children:[e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3",children:y[p].title}),e.jsx("p",{className:"text-base md:text-lg text-white/80 max-w-2xl",children:y[p].subtitle})]}),e.jsx("div",{className:"absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-2",children:y.map((u,m)=>e.jsx("button",{onClick:()=>b(m),className:`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${m===p?"bg-white w-6 md:w-8":"bg-white/50 hover:bg-white/80"}`},m))}),e.jsx("button",{onClick:()=>b(u=>(u-1+y.length)%y.length),className:"absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>b(u=>(u+1)%y.length),className:"absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsxs("div",{className:"mb-10 md:mb-12",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Video Gallery"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[i+1," / ",r.length]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>n(u=>(u-1+r.length)%r.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>n(u=>(u+1)%r.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})]}),e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-out",style:{transform:`translateX(-${i*(100/4)}%)`},children:r.map((u,m)=>e.jsx("div",{className:"w-1/4 flex-shrink-0 px-2",children:e.jsxs("div",{className:"relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 group cursor-pointer",onMouseEnter:S=>{const G=S.currentTarget.querySelector("video");G&&G.play().catch(z=>console.log("Video play failed:",z))},onMouseLeave:S=>{const G=S.currentTarget.querySelector("video");G&&G.pause()},children:[e.jsx("video",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",src:u.src,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onCanPlay:S=>k(S.currentTarget,m)}),P[m]&&e.jsx("div",{className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("div",{className:"absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx("p",{className:"text-white text-xs font-medium truncate",children:u.title})})]})},m))})}),e.jsx("div",{className:"flex justify-center gap-2 mt-4",children:Array.from({length:Math.ceil(r.length/4)}).map((u,m)=>e.jsx("button",{onClick:()=>n(m*4),className:`h-2 rounded-full transition-all duration-300 ${Math.floor(i/4)===m?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2"}`},m))})]}),e.jsxs("div",{className:"mb-10 md:mb-12",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Portfolio PDF"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Pages ",D,"-",Math.min(D+1,d)," / ",d]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>t(u=>Math.max(1,u-2)),disabled:D<=1,className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>t(u=>Math.min(d,u+2)),disabled:D>=d-1,className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("a",{href:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf",target:"_blank",rel:"noopener noreferrer",className:"p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"Open in new window",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})]}),e.jsx("div",{className:"max-w-5xl mx-auto relative group/pdf",children:e.jsxs("div",{className:"grid grid-cols-2 gap-0 relative overflow-hidden px-10",children:[e.jsx(He,{mode:"wait",children:e.jsxs(ve.div,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"grid grid-cols-2 gap-0 col-span-2",children:[e.jsxs("div",{className:"relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-l-lg overflow-hidden shadow-md border-y border-l border-neutral-200 dark:border-neutral-700",children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${D}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"absolute w-[105%] h-[105%] pointer-events-none",title:`Portfolio PDF Page ${D}`,style:{border:"none",maxWidth:"none",left:"-1%",top:"-0.4%",transform:"none"}}),e.jsx("div",{className:"absolute inset-0 bg-transparent z-10"})]}),e.jsx("div",{className:"relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-r-lg overflow-hidden shadow-md border-y border-r border-neutral-200 dark:border-neutral-700",children:D+1<=d?e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${D+1}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"absolute w-[105%] h-[103%] pointer-events-none",title:`Portfolio PDF Page ${D+1}`,style:{border:"none",maxWidth:"none",left:"-1%",top:"-0.4%",transform:"none"}}),e.jsx("div",{className:"absolute inset-0 bg-transparent z-10"})]}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-400 font-mono text-sm",children:"END"})})]},`page-container-${D}`)}),e.jsx("button",{onClick:()=>t(u=>Math.max(1,u-2)),disabled:D<=1,className:"absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>t(u=>Math.min(d,u+2)),disabled:D>=d-1,className:"absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})}),e.jsx("div",{className:"flex justify-center gap-1 mt-6 flex-wrap",children:Array.from({length:Math.ceil(d/2)}).map((u,m)=>{const S=m*2+1,G=D===S||D===S-1;return e.jsx("button",{onClick:()=>t(S),className:`h-1.5 rounded-full transition-all duration-300 ${G?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,title:`Pages ${S}-${Math.min(S+1,d)}`},m)})})]}),e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"All Projects"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[s+1," / ",g.length]})]}),e.jsx("div",{ref:R,className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10",children:g.map((u,m)=>{var J;const S=m-s;if(S<-2||S>3)return null;const G=1-Math.abs(S)*.08,z=S*60,Y=-Math.abs(S)*120,O=S*-6,U=S===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${z+20}px)
                  translateZ(${Y}px)
                  rotateX(${O}deg)
                  scale(${G})
                `,opacity:U,zIndex:100-Math.abs(S)},children:e.jsx("div",{className:"bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:u.details.logo,alt:u.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded",children:u.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:u.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100",children:u.title}),e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3",children:u.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(J=u.tech)==null?void 0:J.slice(0,3).map((oe,ge)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded",children:oe},ge))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${u.type}/${u.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded",children:"VIEW"}),u.hasDemo&&e.jsx("a",{href:`#/${u.type}/${u.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${u.type}-${u.slug}`)})})]})},gn=()=>{const[g,s]=l.useState(!1);l.useEffect(()=>{const o=localStorage.getItem("theme"),p=window.matchMedia("(prefers-color-scheme: dark)").matches;(o==="dark"||!o&&p)&&(s(!0),document.documentElement.classList.add("dark"))},[]);const C=()=>{const o=!g;s(o),o?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return e.jsx("button",{onClick:C,className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:g?"切换到日间模式":"切换到夜间模式",children:g?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},We="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",pn="/data/223_cities_cluster_with_index_deciles.csv",se=g=>{const s=g.replace("#",""),C=parseInt(s.slice(0,2),16),o=parseInt(s.slice(2,4),16),p=parseInt(s.slice(4,6),16);return[C,o,p]},ie=(g,s,C)=>{const o=Math.round(g[0]+(s[0]-g[0])*C),p=Math.round(g[1]+(s[1]-g[1])*C),b=Math.round(g[2]+(s[2]-g[2])*C);return`rgb(${o}, ${p}, ${b})`},le=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],xn=()=>{var ze;const g=l.useRef(null),s=l.useRef(null),[C,o]=l.useState(!0),[p,b]=l.useState(0),[y,i]=l.useState(null),[n,P]=l.useState(null),[N,D]=l.useState([]),[t,d]=l.useState(null),[r,k]=l.useState("K_12"),[R,u]=l.useState(!0),[m,S]=l.useState(null),[G,z]=l.useState(null),[Y,O]=l.useState(!1),[U,J]=l.useState(null),[oe,ge]=l.useState(!1),[vn,yn]=l.useState(null),[Pe,pe]=l.useState(!1),[Ee,de]=l.useState(0),[$e,ae]=l.useState(""),[ye,qe]=l.useState(!1),[ce,Ke]=l.useState(!0),[_e,Te]=l.useState(!0),[je,Qe]=l.useState({}),[jn,wn]=l.useState(!1),[q,Xe]=l.useState("global"),xe=l.useRef(null),Re=l.useRef(null),Ze=l.useRef(!1),ue=l.useRef(null),Ye=(a,x)=>{let M=a.features;t!==null&&(M=M.filter(f=>{var h;const w=(h=f.properties)==null?void 0:h.Place;return w!==void 0&&Number(w)===Number(t)}));const j=M.map(f=>{var w;return(w=f.properties)==null?void 0:w[x]}).filter(f=>{if(f==null)return!1;if(typeof f=="string"){const h=f.trim();if(h===""||/^(na|nan|null)$/i.test(h))return!1}const w=Number(f);return!(Number.isNaN(w)||w===-9999)}).map(f=>Number(f)),_=M.reduce((f,w)=>{var L;const h=(L=w.properties)==null?void 0:L[x];let c=!1;if(h==null)c=!0;else if(typeof h=="string"){const A=h.trim();if(A===""||/^(na|nan|null)$/i.test(A))c=!0;else{const B=Number(h);(Number.isNaN(B)||B===-9999)&&(c=!0)}}else{const A=Number(h);(Number.isNaN(A)||A===-9999)&&(c=!0)}return f+(c?1:0)},0);let E=NaN,I=NaN,v=0;if(j.length>0){E=j[0],I=j[0],v=j[0];for(let f=1;f<j.length;f++){const w=j[f];w<E&&(E=w),w>I&&(I=w),v+=w}}return{count:M.length,min:E,max:I,mean:j.length>0?v/j.length:NaN,nanCount:_}};l.useEffect(()=>{(async()=>{try{const j=(await(await fetch(pn)).text()).trim().split(`
`);if(j.length<2)return;const _=j[0].split(",").map(h=>h.trim()),E={},v=j[j.length-1].split(","),w=j[1].split(",");_.forEach((h,c)=>{if(h===""||h.includes("Place")||h.includes("Sum")||h.includes("FID")||h.includes("index"))return;const L=parseFloat(w[c]),A=parseFloat(v[c]);!isNaN(L)&&!isNaN(A)&&A>L&&(E[h]={min:L,max:A})}),console.log("Loaded attribute ranges:",E),Qe(E)}catch(x){console.error("Failed to load deciles:",x)}})()},[]),l.useEffect(()=>{!ye&&!n&&(async()=>{var x;o(!0),b(0),i(null);try{b(10),console.log("开始下载..."),xe.current=new AbortController;const M=await fetch(We,{signal:xe.current.signal});if(console.log("响应状态:",M.status),!M.ok)throw new Error(`HTTP error! status: ${M.status}`);b(30);const j=M.headers.get("content-length"),_=j?parseInt(j):null;console.log("预期文件大小:",_);const E=(x=M.body)==null?void 0:x.getReader();if(!E)throw new Error("无法读取响应流");let I=0;const v=[];for(;;){const{done:B,value:T}=await E.read();if(B)break;v.push(T),I+=T.length,b(_?30+Math.round(I/_*60):50)}console.log("下载完成, 收到:",I),_&&I!==_&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const f=new Uint8Array(I);let w=0;for(const B of v)f.set(B,w),w+=B.length;if(b(90),ye){console.log("本地数据已加载，跳过网络数据"),o(!1);return}console.log("开始解析 Shapefile...");const h=await Fe(f);console.log("Shapefile 解析完成:",h);let c=[];if(h.type==="FeatureCollection"?c=h.features:Array.isArray(h)?c=h:h.type==="Feature"&&(c=[h]),console.log("解析完成，特征数量:",c==null?void 0:c.length),ye)return;const L={type:"FeatureCollection",features:c||[]};P(L),b(100);const A=new Map;L.features.forEach(B=>{var X;const T=Number(((X=B.properties)==null?void 0:X.Place)??0);A.has(T)||A.set(T,{id:T,name:`Place ${T}`,featureCount:0});const H=A.get(T);H&&H.featureCount++}),D(Array.from(A.values()).sort((B,T)=>B.id-T.id)),o(!1)}catch(M){if(M.name==="AbortError"){console.log("网络请求已取消");return}i(M instanceof Error?M.message:"Failed to load"),o(!1)}})()},[]),l.useEffect(()=>{n&&S(Ye(n,r))},[n,t,r,q,je]),l.useEffect(()=>{if(!n)return;const a=s.current;if(!a)return;const x=()=>{var j,_,E,I;if(n.features.forEach((v,f)=>{v.id===void 0&&(v.id=f)}),a.getSource("cluster"))a.getSource("cluster").setData(n);else{console.log("初始化 cluster 数据源..."),a.addSource("cluster",{type:"geojson",data:n,generateId:!0}),a.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),a.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),a.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),a.on("click","cluster-fill",f=>{var w;if(f.features&&f.features.length>0){const h=f.features[0],c=h.id;ue.current!==null&&ue.current!==void 0&&a.setFeatureState({source:"cluster",id:ue.current},{selected:!1}),c!==void 0?(a.setFeatureState({source:"cluster",id:c},{selected:!0}),ue.current=c):ue.current=null,J(h),ge(!0),((w=h.properties)==null?void 0:w.Place)!==void 0&&d(Number(h.properties.Place))}}),a.on("mouseenter","cluster-fill",()=>{a.getCanvas().style.cursor="pointer"}),a.on("mouseleave","cluster-fill",()=>{a.getCanvas().style.cursor=""});const v=n.features;if(v.length>0)try{const f=new fe.LngLatBounds,w=Math.max(1,Math.floor(v.length/2e3));for(let h=0;h<v.length;h+=w){const c=v[h];if(!((j=c.geometry)!=null&&j.coordinates))continue;const L=c.geometry.type,A=c.geometry.coordinates;L==="Point"?f.extend(A):L==="LineString"||L==="MultiPoint"?A.forEach(B=>f.extend(B)):L==="Polygon"||L==="MultiLineString"?(_=A[0])==null||_.forEach(B=>f.extend(B)):L==="MultiPolygon"&&((I=(E=A[0])==null?void 0:E[0])==null||I.forEach(B=>f.extend(B)))}f.isEmpty()||a.fitBounds(f,{padding:50,duration:1e3})}catch(f){console.error("Fit bounds error:",f)}}},M=()=>{var T;if(!a.getLayer("cluster-fill"))return;const j=null;a.setFilter("cluster-fill",j),a.setFilter("cluster-line",j),a.setFilter("cluster-highlight",j);const _=(()=>{var we;let H=1/0,X=-1/0;for(const ke of n.features){const Z=Number((we=ke.properties)==null?void 0:we[r]);Number.isNaN(Z)||Z===-9999||(Z<H&&(H=Z),Z>X&&(X=Z))}return{min:H===1/0?0:H,max:X===-1/0?0:X}})(),E=t!==null&&m?{min:m.min,max:m.max}:_,I=q==="city"?E:_,v=I.min,f=I.max;let w;if(r.includes("K_")){const H=Math.round(((T=je[r])==null?void 0:T.max)??f),X=Array.from({length:26},(re,Ne)=>{const K=Ne/25;let ee,te,ne;if(K<.167){const $=K/.167;ee=0,te=0,ne=Math.round(139+116*$)}else if(K<.333){const $=(K-.167)/.167;ee=0,te=Math.round(255*$),ne=255}else if(K<.5){const $=(K-.333)/.167;ee=0,te=Math.round(255-128*$),ne=Math.round(255-255*$)}else if(K<.667){const $=(K-.5)/.167;ee=Math.round(255*$),te=255,ne=0}else if(K<.833){const $=(K-.667)/.167;ee=255,te=Math.round(255-128*$),ne=0}else{const $=(K-.833)/.167;ee=255,te=Math.round(127-127*$),ne=0}return`#${ee.toString(16).padStart(2,"0")}${te.toString(16).padStart(2,"0")}${ne.toString(16).padStart(2,"0")}`}),ke=Array.from({length:H+1},(re,Ne)=>X[Math.round(Ne*25/H)]).slice(0,H+1),Z=["interpolate",["linear"],["get",r]];for(let re=0;re<=H;re++)Z.push(re,ke[re]);w=Z}else r==="CoverRatio"||r==="ISF"||r==="GreenRatio"?w=["interpolate",["linear"],["get",r],v,"#3182bd",f,"#e6550d"]:r.includes("elev")||r.includes("slope")?w=["interpolate",["linear"],["get",r],v,"#31a354",f,"#756bb1"]:w=["interpolate",["linear"],["get",r],v,"#31a354",f,"#756bb1"];a.setPaintProperty("cluster-fill","fill-color",w);const h=t!==null,c=Number(t),B=["case",["any",["==",["get",r],-9999],["==",["get",r],null]],0,h?["case",["==",["to-number",["get","Place"]],c],.8,.15]:.7];a.setPaintProperty("cluster-fill","fill-opacity",B)};a.isStyleLoaded()?(x(),M()):a.once("load",()=>{x(),M()})},[n,t,r]),l.useEffect(()=>{var M,j,_,E;if(!n||t===null)return;const a=s.current;if(!a)return;const x=n.features.filter(I=>{var f;const v=(f=I.properties)==null?void 0:f.Place;return v!==void 0&&Number(v)===Number(t)});if(x.length!==0)try{const I=new fe.LngLatBounds;let v=0;const f=Math.max(1,Math.floor(x.length/2e3));for(let w=0;w<x.length;w+=f){const h=x[w];if(!((M=h.geometry)!=null&&M.coordinates))continue;const c=h.geometry.type,L=h.geometry.coordinates;c==="Point"?(I.extend(L),v++):c==="LineString"||c==="MultiPoint"?(L.forEach(A=>I.extend(A)),v++):c==="Polygon"||c==="MultiLineString"?((j=L[0])==null||j.forEach(A=>I.extend(A)),v++):c==="MultiPolygon"&&((E=(_=L[0])==null?void 0:_[0])==null||E.forEach(A=>I.extend(A)),v++)}!I.isEmpty()&&v>0&&a.fitBounds(I,{padding:50,duration:1e3})}catch(I){console.error("Fly to error:",I)}},[t]),l.useEffect(()=>((async()=>{(!g.current||s.current)&&console.log("开始初始化地图...");try{const x=new fe.Map({container:g.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});x.addControl(new fe.NavigationControl,"top-right"),x.on("load",()=>{console.log("地图样式加载完成")}),x.on("error",M=>{var E;const j=String(((E=M==null?void 0:M.error)==null?void 0:E.message)||(M==null?void 0:M.message)||"");j.includes("ERR_ABORTED")||j.includes("AbortError")||j.includes("Canceled")||j.includes("cancelled")||console.error("地图错误:",M)}),s.current=x,console.log("地图初始化完成")}catch(x){console.error("地图初始化错误:",x)}})(),()=>{s.current&&(s.current.remove(),s.current=null,Ze.current=!1)}),[]),l.useEffect(()=>{const a=s.current;if(!a)return;const x=()=>{a.getLayer("simple-tiles")&&a.setLayoutProperty("simple-tiles","visibility",ce?"visible":"none")};a.isStyleLoaded()?x():a.once("style.load",x)},[ce]);const Je=async a=>{var M;const x=(M=a.target.files)==null?void 0:M[0];if(x){xe.current&&xe.current.abort(),pe(!0),de(0),ae("正在读取文件..."),i(null),O(!0),z(URL.createObjectURL(x));try{console.log("开始读取文件:",x.name,"大小:",x.size);let j=[];const _=x.name.endsWith(".zip"),E=x.name.endsWith(".shp");if(!_&&!E){i("请上传 .zip 文件 (包含 Shapefile)"),pe(!1);return}ae("正在读取文件...");const I=await x.arrayBuffer();de(30),ae("正在解析 Shapefile...");const v=await Fe(I);console.log("Shapefile 解析完成:",v),v.type==="FeatureCollection"?j=v.features:Array.isArray(v)?j=v:v.type==="Feature"&&(j=[v]),console.log("解析到的 features 数量:",j.length),de(95),ae(`已解析 ${j.length} 个 Features...`);const f={type:"FeatureCollection",features:j};de(98),ae("正在处理 Place 数据...");const w=new Map;f.features.forEach(h=>{var A;const c=Number(((A=h.properties)==null?void 0:A.Place)??0);w.has(c)||w.set(c,{id:c,name:`Place ${c}`,featureCount:0});const L=w.get(c);L&&L.featureCount++}),de(100),ae("加载完成!"),setTimeout(()=>{qe(!0),P(f),D(Array.from(w.values()).sort((h,c)=>h.id-c.id)),pe(!1),O(!1),o(!1)},500)}catch(j){const _=j instanceof Error?j.message:"未知错误";i(`加载失败: ${_}`),pe(!1),o(!1)}}},et=le.reduce((a,x)=>(a[x.category]||(a[x.category]=[]),a[x.category].push(x),a),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[Pe&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Be,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:$e}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Ee}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Ee,"%"]})]})}),C&&!Pe?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(ct,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${p}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[p,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:We,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(ut,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var a;return(a=Re.current)==null?void 0:a.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Be,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Re,type:"file",accept:".shp,.zip",onChange:Je,className:"hidden"})]})}):null,y&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:y}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(mt,{size:14}),"刷新重试"]})})]}),R&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(ht,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>u(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(gt,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Ke(!ce),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${ce?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ce?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:t??"",onChange:a=>d(a.target.value?Number(a.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((ze=n==null?void 0:n.features)==null?void 0:ze.length)??0,")"]}),N.map(a=>e.jsxs("option",{value:a.id,children:[a.name," (",a.featureCount,")"]},a.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:r,onChange:a=>k(a.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(et).map(([a,x])=>[e.jsx("optgroup",{label:a.charAt(0).toUpperCase()+a.slice(1),children:x.map(M=>e.jsx("option",{value:M.key,children:M.label},M.key))},a)])})]}),m&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(pt,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:m.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:m.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:m.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:m.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:m.nanCount})]})]})]})]})]}),!R&&e.jsx("button",{onClick:()=>u(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(xt,{size:18})}),oe&&U&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[U.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",U.properties.Place]}),U.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",U.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",U.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>ge(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Ge,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:le.map(a=>{var M;const x=(M=U.properties)==null?void 0:M[a.key];return x==null?null:e.jsxs("button",{onClick:()=>k(a.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${r===a.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:a.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof x=="number"?x.toFixed(2):x})]},a.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>d(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:g,className:"w-full h-full"}),_e&&n&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Oe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>Te(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Ge,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Xe(q==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${q==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:q==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:r.includes("K_")?(()=>{var j,_;const a=Math.round(((j=je[r])==null?void 0:j.max)??30),x=Array.from({length:26},(E,I)=>{const v=I/25;let f,w,h;if(v<.167){const c=v/.167;f=0,w=0,h=Math.round(139+116*c)}else if(v<.333){const c=(v-.167)/.167;f=0,w=Math.round(255*c),h=255}else if(v<.5){const c=(v-.333)/.167;f=0,w=Math.round(255-128*c),h=Math.round(255-255*c)}else if(v<.667){const c=(v-.5)/.167;f=Math.round(255*c),w=255,h=0}else if(v<.833){const c=(v-.667)/.167;f=255,w=Math.round(255-128*c),h=0}else{const c=(v-.833)/.167;f=255,w=Math.round(127-127*c),h=0}return`#${f.toString(16).padStart(2,"0")}${w.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}`}),M=Array.from({length:a+1},(E,I)=>x[Math.round(I*25/a)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((_=le.find(E=>E.key===r))==null?void 0:_.label)||r}),e.jsx("div",{className:"flex flex-wrap gap-px",children:M.map((E,I)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:E}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:I})]},I))})]})})():r==="CoverRatio"||r==="ISF"||r==="GreenRatio"?(()=>{var h;const a=(()=>{var A;let c=1/0,L=-1/0;for(const B of n.features){const T=Number((A=B.properties)==null?void 0:A[r]);Number.isNaN(T)||T===-9999||(T<c&&(c=T),T>L&&(L=T))}return{min:c===1/0?0:c,max:L===-1/0?0:L}})(),x=t!==null&&m?{min:m.min,max:m.max}:a,M=((h=le.find(c=>c.key===r))==null?void 0:h.label)||r,j=a.max>a.min?Math.max(0,Math.min(1,(x.min-a.min)/(a.max-a.min))):0,_=a.max>a.min?Math.max(0,Math.min(1,(x.max-a.min)/(a.max-a.min))):0,E=Math.max(0,_-j),I=se("#3182bd"),v=se("#e6550d"),f=ie(I,v,j),w=ie(I,v,_);return e.jsxs("div",{children:[q==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${j*100}%`,width:`${E*100}%`,background:`linear-gradient(to right, ${f}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),q==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(2)}),e.jsx("span",{children:a.max.toFixed(2)})]})]})]})})():r.includes("elev")||r.includes("slope")?(()=>{var h;const a=(()=>{var A;let c=1/0,L=-1/0;for(const B of n.features){const T=Number((A=B.properties)==null?void 0:A[r]);Number.isNaN(T)||T===-9999||(T<c&&(c=T),T>L&&(L=T))}return{min:c===1/0?0:c,max:L===-1/0?0:L}})(),x=t!==null&&m?{min:m.min,max:m.max}:a,M=((h=le.find(c=>c.key===r))==null?void 0:h.label)||r,j=a.max>a.min?Math.max(0,Math.min(1,(x.min-a.min)/(a.max-a.min))):0,_=a.max>a.min?Math.max(0,Math.min(1,(x.max-a.min)/(a.max-a.min))):0,E=Math.max(0,_-j),I=se("#31a354"),v=se("#756bb1"),f=ie(I,v,j),w=ie(I,v,_);return e.jsxs("div",{children:[q==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${j*100}%`,width:`${E*100}%`,background:`linear-gradient(to right, ${f}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(1)}),e.jsxs("span",{children:[x.max.toFixed(0),"+"]})]})]}),q==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(1)}),e.jsxs("span",{children:[a.max.toFixed(0),"+"]})]})]})]})})():(()=>{var h;const a=(()=>{var A;let c=1/0,L=-1/0;for(const B of n.features){const T=Number((A=B.properties)==null?void 0:A[r]);Number.isNaN(T)||T===-9999||(T<c&&(c=T),T>L&&(L=T))}return{min:c===1/0?0:c,max:L===-1/0?0:L}})(),x=t!==null&&m?{min:m.min,max:m.max}:a,M=((h=le.find(c=>c.key===r))==null?void 0:h.label)||r,j=a.max>a.min?Math.max(0,Math.min(1,(x.min-a.min)/(a.max-a.min))):0,_=a.max>a.min?Math.max(0,Math.min(1,(x.max-a.min)/(a.max-a.min))):0,E=Math.max(0,_-j),I=se("#31a354"),v=se("#756bb1"),f=ie(I,v,j),w=ie(I,v,_);return e.jsxs("div",{children:[q==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${j*100}%`,width:`${E*100}%`,background:`linear-gradient(to right, ${f}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),q==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(2)}),e.jsx("span",{children:a.max.toFixed(2)})]})]})]})})()})]}),!_e&&e.jsx("button",{onClick:()=>Te(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Oe,{size:18})})]})},fn=()=>{const[g,s]=l.useState(!1),[C,o]=l.useState(!1),[p,b]=l.useState(!1),[y,i]=l.useState({x:0,y:0}),[n,P]=l.useState("/data/fig/lili/lili_01.png"),[N,D]=l.useState("Exploring the intersection of technology and creativity."),t=nt(),d=at(),k=t.pathname.split("/").filter(Boolean)[0]||"",R={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},u=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],m=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],S=()=>{const z=Math.floor(Math.random()*u.length);return u[z]},G=()=>{const z=Math.floor(Math.random()*m.length);return m[z]};return l.useEffect(()=>{k===""?P(S()):R[k]?P(R[k]):P(S()),D(G())},[k]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 dark:bg-neutral-900 flex flex-col",children:e.jsxs("div",{className:"w-full flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b border-neutral-200 dark:border-neutral-800 p-4 flex justify-between items-center bg-white dark:bg-neutral-900 z-30 shrink-0 relative",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>s(!g),className:"md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",children:"☰"}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500 dark:text-neutral-400",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(gn,{}),e.jsxs("button",{onClick:()=>{b(!0);const z=y.x+360*2+Math.random()*360,Y=y.y+360*2+Math.random()*360;i({x:z,y:Y}),setTimeout(()=>{const O=["planning","design","game","platform","tutorial","about"],U=O[Math.floor(Math.random()*O.length)];d(`/${U}`),b(!1)},1e3)},className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:"🎲 Explore a random project",children:[e.jsx("div",{className:"w-5 h-5",style:{perspective:"100px"},children:e.jsxs("div",{className:"w-full h-full relative transition-transform duration-1000 ease-out",style:{transform:`rotateX(${y.x}deg) rotateY(${y.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"5px",height:"5px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(180deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-5 marg w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:" rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"})]}),e.jsx("div",{className:"absolute w-full h-full bg-white border-gray-400  justify-center rounded flex  p-0.5",style:{transform:"rotateX(90deg) translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3 border w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateX(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]})]})}),e.jsx("span",{className:"text-sm font-medium",children:"Jump"})]}),e.jsxs("nav",{className:"hidden sm:flex gap-0",children:[e.jsx(Q,{to:"/",onClick:()=>{window.innerWidth<768&&s(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${k===""?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:"Home"})}),[{key:"planning",label:"Planning",short:"Planning"},{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(z=>e.jsx(Q,{to:`/${z.key}`,onClick:()=>{window.innerWidth<768&&s(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${k===z.key?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:z.label})},z.key))]}),e.jsxs("div",{className:"sm:hidden relative",children:[e.jsxs("button",{onClick:()=>o(!C),className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800",children:[e.jsx("span",{className:"text-sm font-medium",children:k===""?"Home":k.charAt(0).toUpperCase()+k.slice(1)}),C?"✕":"▼"]}),C&&e.jsxs("div",{className:"absolute right-0 top-10 bg-neutral-900 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-600 rounded-lg shadow-lg z-50 min-w-[160px]",children:[e.jsx(Q,{to:"/",onClick:()=>{o(!1),s(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${k===""?"bg-neutral-700 dark:bg-neutral-700 text-white":"text-neutral-300 dark:text-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-700"}`,children:"Home"}),[{key:"planning",label:"Planning"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}].map(z=>e.jsx(Q,{to:`/${z.key}`,onClick:()=>{o(!1),s(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${k===z.key?"bg-neutral-700 dark:bg-neutral-700 text-white":"text-neutral-300 dark:text-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-700"}`,children:z.label},z.key))]})]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[g&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[n&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:n,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic mb-3",children:['"',N,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4 black",children:[n&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:n,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(Ce,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Ce,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Ce,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 dark:border-neutral-800 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic",children:['"',N,'"']})})]})]})}),e.jsx("section",{className:"flex-1 relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(rt,{children:[e.jsx(V,{path:"/",element:e.jsx(hn,{})}),e.jsx(V,{path:"/planning",element:e.jsx(me,{data:Se,type:"planning"})}),e.jsx(V,{path:"/planning/:id",element:e.jsx(he,{data:Se,type:"planning"})}),e.jsx(V,{path:"/design",element:e.jsx(me,{data:Ie,type:"design"})}),e.jsx(V,{path:"/design/:id",element:e.jsx(he,{data:Ie,type:"design"})}),e.jsx(V,{path:"/game",element:e.jsx(me,{data:Le,type:"game"})}),e.jsx(V,{path:"/game/:id",element:e.jsx(he,{data:Le,type:"game"})}),e.jsx(V,{path:"/platform",element:e.jsx(me,{data:De,type:"platform"})}),e.jsx(V,{path:"/platform/:id",element:e.jsx(he,{data:De,type:"platform"})}),e.jsx(V,{path:"/tutorial",element:e.jsx(me,{data:Ae,type:"tutorial"})}),e.jsx(V,{path:"/tutorial/:id",element:e.jsx(he,{data:Ae,type:"tutorial"})}),e.jsx(V,{path:"/clusteringeomap",element:e.jsx(xn,{})}),e.jsx(V,{path:"/about",element:e.jsx(un,{})}),e.jsx(V,{path:"/contact",element:e.jsx(mn,{})})]})})]})]})})};function bn(){const[g,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(st,{children:e.jsx(fn,{})}),!g&&e.jsx(ft,{onFinish:()=>s(!0)})]})}it.createRoot(document.getElementById("root")).render(e.jsx(bn,{}));
