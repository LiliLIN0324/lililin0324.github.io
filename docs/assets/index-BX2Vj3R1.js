const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-B26NuqWS.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./riffle-BuqCfcTA.js","./genstyle-DuJ38oKx.js","./genshot-8Uy4GIux.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,L as K,u as Qe,c as et,d as tt,e as nt,f as B,H as at,g as rt}from"./react-vendor-6zld6QO8.js";import{A as st,m as je}from"./framer-DvVmTyA1.js";import{M as it,r as lt,a as ot}from"./markdown-q3GborES.js";import{b as Re}from"./geo-Z02C8O4I.js";import{m as ge}from"./maplibre-BedwuVXB.js";import{U as ze,L as dt,D as ct,R as ut,M as mt,C as ht,a as gt,b as pt,X as Ge,c as Fe}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function S(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(p){if(p.ep)return;p.ep=!0;const b=S(p);fetch(p.href,b)}})();function xt({onFinish:f}){const[s,S]=l.useState(!0),c=l.useRef(null),p=l.useRef({x:-1e3,y:-1e3});return l.useEffect(()=>{const b=c.current;if(!b)return;const w=b.getContext("2d");if(!w)return;let o,a=[];const I=()=>{b.width=window.innerWidth,b.height=window.innerHeight},k=t=>{p.current={x:t.clientX,y:t.clientY}},T=t=>{t.touches.length>0&&(p.current={x:t.touches[0].clientX,y:t.touches[0].clientY})};window.addEventListener("resize",I),window.addEventListener("mousemove",k),window.addEventListener("touchmove",T),I();class n{constructor(){this.x=Math.random()*b.width,this.y=Math.random()*b.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>b.width)&&(this.vx*=-1),(this.y<0||this.y>b.height)&&(this.vy*=-1);let i=p.current.x-this.x,y=p.current.y-this.y,R=Math.sqrt(i*i+y*y),D=i/R,H=y/R;const F=150;let _=(F-R)/F;R<F&&(this.x-=D*_*this.density*.5,this.y-=H*_*this.density*.5)}draw(){w&&(w.fillStyle="rgba(255, 255, 255, 0.8)",w.beginPath(),w.arc(this.x,this.y,this.size,0,Math.PI*2),w.fill())}}for(let t=0;t<120;t++)a.push(new n);const h=()=>{w.clearRect(0,0,b.width,b.height);for(let t=0;t<a.length;t++){a[t].update(),a[t].draw();for(let i=t+1;i<a.length;i++){const y=a[t].x-a[i].x,R=a[t].y-a[i].y,D=Math.sqrt(y*y+R*R);D<100&&(w.beginPath(),w.strokeStyle=`rgba(255, 255, 255, ${.2*(1-D/100)})`,w.lineWidth=.6,w.moveTo(a[t].x,a[t].y),w.lineTo(a[i].x,a[i].y),w.stroke())}}o=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",I),window.removeEventListener("mousemove",k),window.removeEventListener("touchmove",T)}},[]),e.jsx(st,{onExitComplete:f,children:s&&e.jsxs(je.div,{onClick:()=>S(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:c,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(je.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(je.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const ft=`---
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
`,bt=`---
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
`,vt=`---
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
`,yt=`---
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

`,jt=`---
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
`,wt=`---
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
`,kt=`---
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
`,Nt=`---
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
`,Mt=`---
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
`,Lt=`---
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
`,Dt=`---
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
`,Ct=`---
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
`,It=`---
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
`,At=`---
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

# 效果展示

![效果展示](/data/fig/wechatgame.png)
`,Et=`---
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
`,Pt=`---
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
`,Tt=`---
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
`,_t=`---
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
`,Rt=`---
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
`,zt=`---
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
`,Ft=`---
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

## 04 日常使用。`,Bt=`---
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
`,Ot=`---
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

`;function Vt(f){const s=/^---\r?\n([\s\S]*?)\r?\n---/,S=f.match(s);let c={},p=f;if(S){const b=S[1];p=f.slice(S[0].length).trim();const w=b.split(/\r?\n/);let o=null,a=[];w.forEach(I=>{if(I.trim()==="")return;const T=I.indexOf(":");if(T!==-1&&!I.startsWith(" ")){o&&(c[o]=a.join(`
`)),o=I.slice(0,T).trim();let n=I.slice(T+1).trim();n==="|"?a=[]:(c[o]=n,o=null,a=[])}else o&&I.startsWith("  ")&&a.push(I.slice(2))}),o&&a.length>0&&(c[o]=a.join(`
`)),Object.keys(c).forEach(I=>{let k=c[I];if(typeof k=="string")if(k=k.trim(),k.startsWith('"')&&k.endsWith('"')&&(k=k.slice(1,-1)),k.startsWith("[")&&k.endsWith("]"))try{c[I]=JSON.parse(k)}catch{c[I]=[k.slice(1,-1).trim()]}else k==="true"?c[I]=!0:k==="false"?c[I]=!1:!isNaN(Number(k))&&k.trim()!==""?c[I]=Number(k):c[I]=k})}return{id:c.id||"",slug:c.slug||"",title:c.title||"",category:c.category||"",year:c.year||"",description:c.description||"",tech:c.tech||[],abstract:c.abstract||"",challenge:c.challenge||"",solution:c.solution||"",hasDemo:c.hasDemo||!1,icon:c.icon||"",code:c.code||"",logo:c.icon||"",image:c.image||[],content:p}}function G(f){const s=Vt(f);return{id:s.id,slug:s.slug,title:s.title,category:s.category,year:s.year,description:s.description,tech:s.tech,hasDemo:s.hasDemo,details:{abstract:s.abstract,description:s.description,challenge:s.challenge,solution:s.solution,logo:s.logo,icon:s.icon,code:s.code,image:s.image,content:s.content}}}const Ne=[G(ft),G(bt),G(vt),G(yt),G(jt),G(wt)],Me=[G(kt),G(Nt),G(Mt),G(St),G(Lt),G(Dt),G(Ct)],Se=[G(It),G(At)],Le=[G(Et),G(Pt),G(Tt)],De=[G(_t),G(Rt),G(zt),G(Gt),G(Ft),G(Bt),G(Ot)],ce=({data:f,type:s})=>{const[S,c]=l.useState("grid"),[p,b]=l.useState(1),w=55,o={2:{text:"Self-introduction",link:"/about"},5:{text:"View 1037pinpin Project",link:"/design/1037pinpin"},11:{text:"View Perslearn Project",link:"/design/perslearn"},21:{text:"View Dragon Diffusion Project",link:"/design/dragon-diffussion"},27:{text:"View Genstyle Project",link:"/design/genstyle"},43:{text:"View Luoshu Project",link:"/design/bazi-fengshui-analysis"},48:{text:"View Genshot Project",link:"/design/genshot"}};return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[s==="design"?e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 lg:gap-8",children:[e.jsxs("div",{className:"flex-1 lg:flex-shrink-0 lg:w-[55%]",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Portfolio PDF"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Page ",p," / ",w]})]}),e.jsxs("div",{className:"relative flex items-center justify-center gap-2",children:[e.jsx("button",{onClick:()=>b(a=>Math.max(1,a-1)),disabled:p<=1,className:"flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("div",{className:"relative flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-600",style:{aspectRatio:"4/2.8"},children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_ui_portfolio.pdf#page=${p}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"w-full h-full",title:"Portfolio PDF",style:{border:"none",overflow:"hidden",scrollbarWidth:"none",msOverflowStyle:"none"}},p),e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-4 bg-neutral-100 dark:bg-neutral-800 z-10",style:{pointerEvents:"none"}}),e.jsx("div",{className:"absolute left-0 right-0 bottom-0 h-4 bg-neutral-100 dark:bg-neutral-800 z-10",style:{pointerEvents:"none"}})]}),e.jsx("button",{onClick:()=>b(a=>Math.min(w,a+1)),disabled:p>=w,className:"flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:"flex justify-center gap-1 mt-4 flex-wrap",children:Array.from({length:w}).map((a,I)=>{const k=I+1,T=p===k,n=o[k];return e.jsx("button",{onClick:()=>b(k),className:`h-1.5 rounded-full transition-all duration-300 ${T?"bg-neutral-800 dark:bg-neutral-200 w-6":n?"bg-blue-500 w-1.5 hover:bg-blue-600":"bg-neutral-300 dark:bg-neutral-600 w-1.5 hover:bg-neutral-400"}`,title:n?o[k].text:`Page ${k}`},I)})}),o[p]&&e.jsx("div",{className:"mt-3 flex justify-center",children:e.jsxs(K,{to:o[p].link,className:"inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition-colors shadow-md hover:shadow-lg",children:[e.jsx("span",{children:o[p].text}),e.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]}),e.jsxs("div",{className:"flex-1 lg:w-[45%]",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Selected Designs"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>c("grid"),className:`px-2 py-1 text-xs font-mono ${S==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>c("list"),className:`px-2 py-1 text-xs font-mono ${S==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",f.length]})]})]}),e.jsx("div",{className:"overflow-y-auto",style:{aspectRatio:"4/2.7"},children:S==="list"?e.jsx("div",{className:"space-y-0",children:f.map(a=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-3 items-center flex-1",children:[e.jsxs(K,{to:`/${s}/${a.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-3 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 truncate",children:a.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${a.slug}#demo`},className:"flex-shrink-0 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},a.slug))}):e.jsx("div",{className:"grid grid-cols-2 gap-3",children:f.map(a=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(K,{to:`/${s}/${a.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-2",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 line-clamp-2",children:a.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-xs line-clamp-2",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${a.slug}#demo`},className:"flex-shrink-0 w-full mt-2 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},a.slug))})})]})]}):e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:["Selected ",s==="research"?"Researches":s==="game"?"Games":s==="planning"?"Planning":s==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>c("grid"),className:`px-3 py-1 text-xs font-mono ${S==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>c("list"),className:`px-3 py-1 text-xs font-mono ${S==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",f.length]})]})]}),s!=="design"&&(S==="list"?e.jsx("div",{className:"space-y-4",children:f.map(a=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(K,{to:`/${s}/${a.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 truncate",children:a.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-1",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${a.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},a.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:f.map(a=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(K,{to:`/${s}/${a.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-4",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 line-clamp-2",children:a.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${s}/${a.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},a.slug))}))]})},pe=f=>{const s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth",block:"start"})},Ut="modulepreload",Ht=function(f,s){return new URL(f,s).href},Be={},O=function(s,S,c){let p=Promise.resolve();if(S&&S.length>0){let w=function(k){return Promise.all(k.map(T=>Promise.resolve(T).then(n=>({status:"fulfilled",value:n}),n=>({status:"rejected",reason:n}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),I=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));p=w(S.map(k=>{if(k=Ht(k,c),k in Be)return;Be[k]=!0;const T=k.endsWith(".css"),n=T?'[rel="stylesheet"]':"";if(!!c)for(let i=o.length-1;i>=0;i--){const y=o[i];if(y.href===k&&(!T||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${k}"]${n}`))return;const t=document.createElement("link");if(t.rel=T?"stylesheet":Ut,T||(t.as="script"),t.crossOrigin="",t.href=k,I&&t.setAttribute("nonce",I),document.head.appendChild(t),T)return new Promise((i,y)=>{t.addEventListener("load",i),t.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${k}`)))})}))}function b(w){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=w,window.dispatchEvent(o),!o.defaultPrevented)throw w}return p.then(w=>{for(const o of w||[])o.status==="rejected"&&b(o.reason);return s().catch(b)})},$t=l.lazy(()=>O(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Wt=l.lazy(()=>O(()=>import("./UR-platform-B26NuqWS.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),qt=l.lazy(()=>O(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Kt=l.lazy(()=>O(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Xt=l.lazy(()=>O(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),Zt=l.lazy(()=>O(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),Yt=l.lazy(()=>O(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));l.lazy(()=>O(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const Jt=l.lazy(()=>O(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),Qt=l.lazy(()=>O(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),en=l.lazy(()=>O(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),tn=l.lazy(()=>O(()=>import("./riffle-BuqCfcTA.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),nn=l.lazy(()=>O(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),an=l.lazy(()=>O(()=>import("./genshot-8Uy4GIux.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),rn=f=>({"cluster-visualizer-3d":$t,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Wt,heatmapper:qt,"how-to-add-openstreetmap-in-website":Kt,"how-to-get-sequential-events-from-photo-by-phone":Xt,"how-to-visualize-photo-geolocation-data-on-map":Zt,"how-to-build-game-in-wechat-mini-program":en,"how-to-conduct-time-geo-sequential-clustering-from-album":Yt,"box-up-my-stuff-in-cyberspace":Jt,"epstein-mystery-archive":Qt,"riffle-ai-game-generation-tool":tn,genstyle:nn,"genshot-AI-video-generation-tool":an})[f],we={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},sn=({src:f,...s})=>{const[S,c]=l.useState(!1),[p,b]=l.useState(!1),w=()=>{c(!0),b(!0)},o=()=>{c(!1),b(!0)};return l.useEffect(()=>{const a=setTimeout(()=>{p||(c(!1),b(!0))},3e3);return()=>clearTimeout(a)},[p]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:f,onLoad:w,onError:o,style:{display:"none"},title:"detector"}),!p&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})}),p&&S&&e.jsx("div",{className:"w-full my-6",children:e.jsx("iframe",{src:f,className:"w-full h-96 rounded-lg shadow-md border border-neutral-200",allowFullScreen:!0,...s})}),p&&!S&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})})]})},ue=({data:f,type:s})=>{var T;const{id:S}=Qe(),[c,p]=l.useState("details"),[b,w]=l.useState(!1),o=f.find(n=>n.slug===S),a=n=>{const h=/^(#{1,6})\s+(.+)$/gm,t=[];let i;for(;(i=h.exec(n))!==null;){const y=i[1].length,R=i[2].trim(),D=R.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");t.push({level:y,text:R,id:D})}return t},I=(T=o==null?void 0:o.details)!=null&&T.content?a(o.details.content):[],k=n=>{const h=document.getElementById(n);h&&h.scrollIntoView({behavior:"smooth",block:"start"})};return l.useEffect(()=>{const n=()=>{window.location.hash.includes("demo")?p("demo"):p("details")};return n(),window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[S]),o?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(K,{to:`/${s}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate max-w-[120px] md:max-w-[200px]",children:o.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>p("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${c==="details"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"DOCS"}),o.hasDemo&&e.jsxs("button",{onClick:()=>p("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${c==="demo"?"bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:`flex-1 ${c==="details"?"overflow-y-auto":"overflow-hidden"}`,children:c==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.tech.map((n,h)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-sm",children:n},h))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",o.id]}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:o.year}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:o.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight",children:o.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 border-l-4 border-neutral-900 dark:border-neutral-500 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic",children:['"',o.description,'"']})})]}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow",children:[e.jsxs("div",{className:"md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10",children:[o.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:o.details.abstract})]}),o.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:o.details.challenge})]}),o.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:o.details.solution})]}),o.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Content"}),e.jsx("div",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 prose prose-neutral dark:prose-invert max-w-none",children:e.jsx(it,{remarkPlugins:[ot],rehypePlugins:[lt],components:{table:({children:n})=>e.jsx("table",{className:"min-w-full border-collapse border border-neutral-300 dark:border-neutral-600",children:n}),thead:({children:n})=>e.jsx("thead",{className:"bg-neutral-50 dark:bg-neutral-800",children:n}),th:({children:n})=>e.jsx("th",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-left font-semibold text-neutral-900 dark:text-neutral-100 text-sm",children:n}),td:({children:n})=>e.jsx("td",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-neutral-700 dark:text-neutral-300 text-sm",children:n}),h1:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:i,className:"text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100",...h,children:n})},h2:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:i,className:"text-xl font-bold mb-6 mt-8 text-neutral-800 dark:text-neutral-200",...h,children:n})},h3:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:i,className:"text-lg font-semibold mb-4 mt-6 text-neutral-800 dark:text-neutral-200",...h,children:n})},h4:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h4",{id:i,className:"text-base font-semibold mb-3 mt-4 text-neutral-700 dark:text-neutral-300",...h,children:n})},h5:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h5",{id:i,className:"text-sm font-semibold mb-2 mt-3 text-neutral-700 dark:text-neutral-300",...h,children:n})},h6:({children:n,...h})=>{const i=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h6",{id:i,className:"text-xs font-semibold mb-2 mt-2 text-neutral-600 dark:text-neutral-400",...h,children:n})},p:({children:n,...h})=>e.jsx("p",{className:"mb-4 leading-relaxed",...h,children:n}),a:({children:n,href:h,...t})=>e.jsx("a",{href:h,className:"text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium",target:"_blank",rel:"noopener noreferrer",...t,children:n}),img:({src:n,alt:h,...t})=>{var y;return((y=t.className)==null?void 0:y.includes("h-32"))||(h==null?void 0:h.includes("BCR"))||(h==null?void 0:h.includes("BHV"))||(h==null?void 0:h.includes("SVF"))||(h==null?void 0:h.includes("NDVI"))||(h==null?void 0:h.includes("EV"))||(h==null?void 0:h.includes("WR"))||(h==null?void 0:h.includes("Dist_"))?e.jsx("img",{src:n,alt:h,className:"max-w-full h-32 object-cover rounded-lg shadow-sm",...t}):e.jsx("img",{src:n,alt:h,className:"w-full max-w-full h-auto rounded-lg shadow-md my-6",...t})},iframe:({src:n,title:h,...t})=>e.jsx(sn,{src:n,title:h||"Embedded content",...t})},children:o.details.content})})]}),(o.details.code||o.details.codeComponent||we[o.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:we[o.slug]||o.details.codeComponent||`// Code file: ${o.details.code}`})})})]})]}),e.jsx("div",{className:"md:col-span-12 lg:col-span-4 hidden lg:block",children:e.jsxs("div",{className:"sticky top-24 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700",children:[e.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500",children:"Contents"}),e.jsx("button",{onClick:()=>w(!b),className:"text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",children:e.jsx("svg",{className:`w-4 h-4 transform transition-transform ${b?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:`${b?"max-h-0":"max-h-96"} overflow-hidden transition-all duration-300`,children:e.jsxs("div",{className:"p-4 space-y-2 overflow-y-auto max-h-80",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Overview"}),o.details.abstract&&e.jsx("button",{onClick:()=>pe("abstract"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left text-left",children:"Abstract"})]}),I.length>0&&e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Content Sections"}),I.map((n,h)=>e.jsx("button",{onClick:()=>k(n.id),className:`text-sm hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left block ${n.level===1?"font-semibold text-neutral-800 dark:text-neutral-200":n.level===2?"font-medium text-neutral-700 dark:text-neutral-300 ml-2":n.level===3?"text-neutral-600 dark:text-neutral-400 ml-4":n.level===4?"text-neutral-600 dark:text-neutral-400 ml-6":n.level===5?"text-neutral-500 dark:text-neutral-500 ml-8":"text-neutral-500 dark:text-neutral-500 ml-10"}`,children:n.text},h))]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Methodology"}),o.details.solution&&e.jsx("button",{onClick:()=>pe("methodology"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Approach"}),o.details.challenge&&e.jsx("button",{onClick:()=>pe("challenges"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Challenges"})]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2",children:"Resources"}),(o.details.code||o.details.codeComponent||we[o.slug])&&e.jsx("button",{onClick:()=>pe("code"),className:"text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-700 px-2 py-1 rounded transition-all w-full text-left",children:"Code Example"})]})]})})]})})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 dark:bg-neutral-900 relative",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"Loading demo..."}),children:(()=>{const n=rn(o.slug);return n?e.jsx(n,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},ln=()=>e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"font-light text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-none",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700 dark:text-neutral-300",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),on=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 dark:border-neutral-600 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 dark:bg-neutral-700 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors",children:"SEND_TRANSMISSION"})]}),ke=({href:f,label:s})=>e.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all rounded-sm text-xs font-mono",children:s}),dn=()=>{const f=[...Ne.map(t=>({...t,type:"planning"})),...Me.map(t=>({...t,type:"design"})),...Se.map(t=>({...t,type:"game"})),...Le.map(t=>({...t,type:"platform"})),...De.map(t=>({...t,type:"tutorial"}))],[s,S]=l.useState(0),c=f.length-1,[p,b]=l.useState(0),w=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260305-222003.mp4",title:"Welcome to My Portfolio",subtitle:"Explore my projects in urban planning, design, game development, and AI tutorials."},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260304_heatmap_2.mp4",title:"Data Visualization",subtitle:"Interactive heatmaps and spatial analysis for urban research."}],[o,a]=l.useState(0),[I,k]=l.useState({}),T=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Video Title 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Video Title 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],n=(t,i)=>{var D,H;const y=t;if(console.log(`Checking audio for video ${i}:`,{audioTracks:(D=y.audioTracks)==null?void 0:D.length,mozHasAudio:y.mozHasAudio,webkitAudioDecodedByteCount:y.webkitAudioDecodedByteCount,videoTracks:(H=y.videoTracks)==null?void 0:H.length,readyState:y.readyState}),y.audioTracks&&y.audioTracks.length>0){const F=Array.from(y.audioTracks).some(_=>_.enabled);console.log(`Video ${i} has audioTracks:`,F),k(_=>({..._,[i]:F}));return}if("mozHasAudio"in y){const F=y.mozHasAudio;console.log(`Video ${i} mozHasAudio:`,F),k(_=>({..._,[i]:F}));return}const R=y.webkitAudioDecodedByteCount;if(typeof R=="number"&&R>0){console.log(`Video ${i} webkitAudioDecodedByteCount:`,R),k(F=>({...F,[i]:!0}));return}if(y.readyState>=3){setTimeout(()=>{const F=y.webkitAudioDecodedByteCount,_=y.mozHasAudio,J=F>0||_===!0;console.log(`Video ${i} delayed check:`,{delayedWebkitAudio:F,delayedMozAudio:_,hasAudio:J}),k(X=>({...X,[i]:J}))},500);return}console.log(`Video ${i} default to has audio`),k(F=>({...F,[i]:!0}))};l.useEffect(()=>{const t=setInterval(()=>{b(i=>(i+1)%w.length)},8e3);return()=>clearInterval(t)},[w.length]);const h=l.useRef(null);return l.useEffect(()=>{const t=h.current;if(!t)return;const i=y=>{const R=y.target;t.contains(R)&&(y.preventDefault(),S(D=>y.deltaY>0?Math.min(D+1,c):Math.max(D-1,0)))};return t.addEventListener("wheel",i,{passive:!1}),()=>t.removeEventListener("wheel",i)},[c]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-10 shadow-2xl",children:[w.map((t,i)=>e.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 ${i===p?"opacity-100":"opacity-0"}`,children:e.jsx("video",{className:"absolute inset-0 w-full h-full object-cover",src:t.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})},i)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10",children:[e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3",children:w[p].title}),e.jsx("p",{className:"text-base md:text-lg text-white/80 max-w-2xl",children:w[p].subtitle})]}),e.jsx("div",{className:"absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-2",children:w.map((t,i)=>e.jsx("button",{onClick:()=>b(i),className:`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i===p?"bg-white w-6 md:w-8":"bg-white/50 hover:bg-white/80"}`},i))}),e.jsx("button",{onClick:()=>b(t=>(t-1+w.length)%w.length),className:"absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>b(t=>(t+1)%w.length),className:"absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsxs("div",{className:"mb-10 md:mb-12",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Video Gallery"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[o+1," / ",T.length]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>a(t=>(t-1+T.length)%T.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>a(t=>(t+1)%T.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})]}),e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-out",style:{transform:`translateX(-${o*(100/4)}%)`},children:T.map((t,i)=>e.jsx("div",{className:"w-1/4 flex-shrink-0 px-2",children:e.jsxs("div",{className:"relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 group cursor-pointer",onMouseEnter:y=>{const R=y.currentTarget.querySelector("video");R&&R.play().catch(D=>console.log("Video play failed:",D))},onMouseLeave:y=>{const R=y.currentTarget.querySelector("video");R&&R.pause()},children:[e.jsx("video",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",src:t.src,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onCanPlay:y=>n(y.currentTarget,i)}),I[i]&&e.jsx("div",{className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("div",{className:"absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx("p",{className:"text-white text-xs font-medium truncate",children:t.title})})]})},i))})}),e.jsx("div",{className:"flex justify-center gap-2 mt-4",children:Array.from({length:Math.ceil(T.length/4)}).map((t,i)=>e.jsx("button",{onClick:()=>a(i*4),className:`h-2 rounded-full transition-all duration-300 ${Math.floor(o/4)===i?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2"}`},i))})]}),e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"All Projects"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[s+1," / ",f.length]})]}),e.jsx("div",{ref:h,className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10",children:f.map((t,i)=>{var J;const y=i-s;if(y<-2||y>3)return null;const R=1-Math.abs(y)*.08,D=y*60,H=-Math.abs(y)*120,F=y*-6,_=y===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${D+20}px)
                  translateZ(${H}px)
                  rotateX(${F}deg)
                  scale(${R})
                `,opacity:_,zIndex:100-Math.abs(y)},children:e.jsx("div",{className:"bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:t.details.logo,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded",children:t.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:t.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100",children:t.title}),e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(J=t.tech)==null?void 0:J.slice(0,3).map((X,$)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded",children:X},$))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${t.type}/${t.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded",children:"VIEW"}),t.hasDemo&&e.jsx("a",{href:`#/${t.type}/${t.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${t.type}-${t.slug}`)})})]})},cn=()=>{const[f,s]=l.useState(!1);l.useEffect(()=>{const c=localStorage.getItem("theme"),p=window.matchMedia("(prefers-color-scheme: dark)").matches;(c==="dark"||!c&&p)&&(s(!0),document.documentElement.classList.add("dark"))},[]);const S=()=>{const c=!f;s(c),c?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return e.jsx("button",{onClick:S,className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:f?"切换到日间模式":"切换到夜间模式",children:f?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},Oe="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",un="/data/223_cities_cluster_with_index_deciles.csv",re=f=>{const s=f.replace("#",""),S=parseInt(s.slice(0,2),16),c=parseInt(s.slice(2,4),16),p=parseInt(s.slice(4,6),16);return[S,c,p]},se=(f,s,S)=>{const c=Math.round(f[0]+(s[0]-f[0])*S),p=Math.round(f[1]+(s[1]-f[1])*S),b=Math.round(f[2]+(s[2]-f[2])*S);return`rgb(${c}, ${p}, ${b})`},ie=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],mn=()=>{var _e;const f=l.useRef(null),s=l.useRef(null),[S,c]=l.useState(!0),[p,b]=l.useState(0),[w,o]=l.useState(null),[a,I]=l.useState(null),[k,T]=l.useState([]),[n,h]=l.useState(null),[t,i]=l.useState("K_12"),[y,R]=l.useState(!0),[D,H]=l.useState(null),[F,_]=l.useState(null),[J,X]=l.useState(!1),[$,Ve]=l.useState(null),[Ue,Ce]=l.useState(!1),[pn,xn]=l.useState(null),[Ie,me]=l.useState(!1),[Ae,le]=l.useState(0),[He,ne]=l.useState(""),[xe,$e]=l.useState(!1),[oe,We]=l.useState(!0),[Ee,Pe]=l.useState(!0),[fe,qe]=l.useState({}),[fn,bn]=l.useState(!1),[W,Ke]=l.useState("global"),he=l.useRef(null),Te=l.useRef(null),Xe=l.useRef(!1),de=l.useRef(null),Ze=(r,m)=>{let N=r.features;n!==null&&(N=N.filter(g=>{var u;const j=(u=g.properties)==null?void 0:u.Place;return j!==void 0&&Number(j)===Number(n)}));const v=N.map(g=>{var j;return(j=g.properties)==null?void 0:j[m]}).filter(g=>{if(g==null)return!1;if(typeof g=="string"){const u=g.trim();if(u===""||/^(na|nan|null)$/i.test(u))return!1}const j=Number(g);return!(Number.isNaN(j)||j===-9999)}).map(g=>Number(g)),E=N.reduce((g,j)=>{var L;const u=(L=j.properties)==null?void 0:L[m];let d=!1;if(u==null)d=!0;else if(typeof u=="string"){const C=u.trim();if(C===""||/^(na|nan|null)$/i.test(C))d=!0;else{const z=Number(u);(Number.isNaN(z)||z===-9999)&&(d=!0)}}else{const C=Number(u);(Number.isNaN(C)||C===-9999)&&(d=!0)}return g+(d?1:0)},0);let A=NaN,M=NaN,x=0;if(v.length>0){A=v[0],M=v[0],x=v[0];for(let g=1;g<v.length;g++){const j=v[g];j<A&&(A=j),j>M&&(M=j),x+=j}}return{count:N.length,min:A,max:M,mean:v.length>0?x/v.length:NaN,nanCount:E}};l.useEffect(()=>{(async()=>{try{const v=(await(await fetch(un)).text()).trim().split(`
`);if(v.length<2)return;const E=v[0].split(",").map(u=>u.trim()),A={},x=v[v.length-1].split(","),j=v[1].split(",");E.forEach((u,d)=>{if(u===""||u.includes("Place")||u.includes("Sum")||u.includes("FID")||u.includes("index"))return;const L=parseFloat(j[d]),C=parseFloat(x[d]);!isNaN(L)&&!isNaN(C)&&C>L&&(A[u]={min:L,max:C})}),console.log("Loaded attribute ranges:",A),qe(A)}catch(m){console.error("Failed to load deciles:",m)}})()},[]),l.useEffect(()=>{!xe&&!a&&(async()=>{var m;c(!0),b(0),o(null);try{b(10),console.log("开始下载..."),he.current=new AbortController;const N=await fetch(Oe,{signal:he.current.signal});if(console.log("响应状态:",N.status),!N.ok)throw new Error(`HTTP error! status: ${N.status}`);b(30);const v=N.headers.get("content-length"),E=v?parseInt(v):null;console.log("预期文件大小:",E);const A=(m=N.body)==null?void 0:m.getReader();if(!A)throw new Error("无法读取响应流");let M=0;const x=[];for(;;){const{done:z,value:P}=await A.read();if(z)break;x.push(P),M+=P.length,b(E?30+Math.round(M/E*60):50)}console.log("下载完成, 收到:",M),E&&M!==E&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const g=new Uint8Array(M);let j=0;for(const z of x)g.set(z,j),j+=z.length;if(b(90),xe){console.log("本地数据已加载，跳过网络数据"),c(!1);return}console.log("开始解析 Shapefile...");const u=await Re(g);console.log("Shapefile 解析完成:",u);let d=[];if(u.type==="FeatureCollection"?d=u.features:Array.isArray(u)?d=u:u.type==="Feature"&&(d=[u]),console.log("解析完成，特征数量:",d==null?void 0:d.length),xe)return;const L={type:"FeatureCollection",features:d||[]};I(L),b(100);const C=new Map;L.features.forEach(z=>{var Z;const P=Number(((Z=z.properties)==null?void 0:Z.Place)??0);C.has(P)||C.set(P,{id:P,name:`Place ${P}`,featureCount:0});const V=C.get(P);V&&V.featureCount++}),T(Array.from(C.values()).sort((z,P)=>z.id-P.id)),c(!1)}catch(N){if(N.name==="AbortError"){console.log("网络请求已取消");return}o(N instanceof Error?N.message:"Failed to load"),c(!1)}})()},[]),l.useEffect(()=>{a&&H(Ze(a,t))},[a,n,t,W,fe]),l.useEffect(()=>{if(!a)return;const r=s.current;if(!r)return;const m=()=>{var v,E,A,M;if(a.features.forEach((x,g)=>{x.id===void 0&&(x.id=g)}),r.getSource("cluster"))r.getSource("cluster").setData(a);else{console.log("初始化 cluster 数据源..."),r.addSource("cluster",{type:"geojson",data:a,generateId:!0}),r.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),r.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),r.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),r.on("click","cluster-fill",g=>{var j;if(g.features&&g.features.length>0){const u=g.features[0],d=u.id;de.current!==null&&de.current!==void 0&&r.setFeatureState({source:"cluster",id:de.current},{selected:!1}),d!==void 0?(r.setFeatureState({source:"cluster",id:d},{selected:!0}),de.current=d):de.current=null,Ve(u),Ce(!0),((j=u.properties)==null?void 0:j.Place)!==void 0&&h(Number(u.properties.Place))}}),r.on("mouseenter","cluster-fill",()=>{r.getCanvas().style.cursor="pointer"}),r.on("mouseleave","cluster-fill",()=>{r.getCanvas().style.cursor=""});const x=a.features;if(x.length>0)try{const g=new ge.LngLatBounds,j=Math.max(1,Math.floor(x.length/2e3));for(let u=0;u<x.length;u+=j){const d=x[u];if(!((v=d.geometry)!=null&&v.coordinates))continue;const L=d.geometry.type,C=d.geometry.coordinates;L==="Point"?g.extend(C):L==="LineString"||L==="MultiPoint"?C.forEach(z=>g.extend(z)):L==="Polygon"||L==="MultiLineString"?(E=C[0])==null||E.forEach(z=>g.extend(z)):L==="MultiPolygon"&&((M=(A=C[0])==null?void 0:A[0])==null||M.forEach(z=>g.extend(z)))}g.isEmpty()||r.fitBounds(g,{padding:50,duration:1e3})}catch(g){console.error("Fit bounds error:",g)}}},N=()=>{var P;if(!r.getLayer("cluster-fill"))return;const v=null;r.setFilter("cluster-fill",v),r.setFilter("cluster-line",v),r.setFilter("cluster-highlight",v);const E=(()=>{var be;let V=1/0,Z=-1/0;for(const ve of a.features){const Y=Number((be=ve.properties)==null?void 0:be[t]);Number.isNaN(Y)||Y===-9999||(Y<V&&(V=Y),Y>Z&&(Z=Y))}return{min:V===1/0?0:V,max:Z===-1/0?0:Z}})(),A=n!==null&&D?{min:D.min,max:D.max}:E,M=W==="city"?A:E,x=M.min,g=M.max;let j;if(t.includes("K_")){const V=Math.round(((P=fe[t])==null?void 0:P.max)??g),Z=Array.from({length:26},(ae,ye)=>{const q=ye/25;let Q,ee,te;if(q<.167){const U=q/.167;Q=0,ee=0,te=Math.round(139+116*U)}else if(q<.333){const U=(q-.167)/.167;Q=0,ee=Math.round(255*U),te=255}else if(q<.5){const U=(q-.333)/.167;Q=0,ee=Math.round(255-128*U),te=Math.round(255-255*U)}else if(q<.667){const U=(q-.5)/.167;Q=Math.round(255*U),ee=255,te=0}else if(q<.833){const U=(q-.667)/.167;Q=255,ee=Math.round(255-128*U),te=0}else{const U=(q-.833)/.167;Q=255,ee=Math.round(127-127*U),te=0}return`#${Q.toString(16).padStart(2,"0")}${ee.toString(16).padStart(2,"0")}${te.toString(16).padStart(2,"0")}`}),ve=Array.from({length:V+1},(ae,ye)=>Z[Math.round(ye*25/V)]).slice(0,V+1),Y=["interpolate",["linear"],["get",t]];for(let ae=0;ae<=V;ae++)Y.push(ae,ve[ae]);j=Y}else t==="CoverRatio"||t==="ISF"||t==="GreenRatio"?j=["interpolate",["linear"],["get",t],x,"#3182bd",g,"#e6550d"]:t.includes("elev")||t.includes("slope")?j=["interpolate",["linear"],["get",t],x,"#31a354",g,"#756bb1"]:j=["interpolate",["linear"],["get",t],x,"#31a354",g,"#756bb1"];r.setPaintProperty("cluster-fill","fill-color",j);const u=n!==null,d=Number(n),z=["case",["any",["==",["get",t],-9999],["==",["get",t],null]],0,u?["case",["==",["to-number",["get","Place"]],d],.8,.15]:.7];r.setPaintProperty("cluster-fill","fill-opacity",z)};r.isStyleLoaded()?(m(),N()):r.once("load",()=>{m(),N()})},[a,n,t]),l.useEffect(()=>{var N,v,E,A;if(!a||n===null)return;const r=s.current;if(!r)return;const m=a.features.filter(M=>{var g;const x=(g=M.properties)==null?void 0:g.Place;return x!==void 0&&Number(x)===Number(n)});if(m.length!==0)try{const M=new ge.LngLatBounds;let x=0;const g=Math.max(1,Math.floor(m.length/2e3));for(let j=0;j<m.length;j+=g){const u=m[j];if(!((N=u.geometry)!=null&&N.coordinates))continue;const d=u.geometry.type,L=u.geometry.coordinates;d==="Point"?(M.extend(L),x++):d==="LineString"||d==="MultiPoint"?(L.forEach(C=>M.extend(C)),x++):d==="Polygon"||d==="MultiLineString"?((v=L[0])==null||v.forEach(C=>M.extend(C)),x++):d==="MultiPolygon"&&((A=(E=L[0])==null?void 0:E[0])==null||A.forEach(C=>M.extend(C)),x++)}!M.isEmpty()&&x>0&&r.fitBounds(M,{padding:50,duration:1e3})}catch(M){console.error("Fly to error:",M)}},[n]),l.useEffect(()=>((async()=>{(!f.current||s.current)&&console.log("开始初始化地图...");try{const m=new ge.Map({container:f.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});m.addControl(new ge.NavigationControl,"top-right"),m.on("load",()=>{console.log("地图样式加载完成")}),m.on("error",N=>{var A;const v=String(((A=N==null?void 0:N.error)==null?void 0:A.message)||(N==null?void 0:N.message)||"");v.includes("ERR_ABORTED")||v.includes("AbortError")||v.includes("Canceled")||v.includes("cancelled")||console.error("地图错误:",N)}),s.current=m,console.log("地图初始化完成")}catch(m){console.error("地图初始化错误:",m)}})(),()=>{s.current&&(s.current.remove(),s.current=null,Xe.current=!1)}),[]),l.useEffect(()=>{const r=s.current;if(!r)return;const m=()=>{r.getLayer("simple-tiles")&&r.setLayoutProperty("simple-tiles","visibility",oe?"visible":"none")};r.isStyleLoaded()?m():r.once("style.load",m)},[oe]);const Ye=async r=>{var N;const m=(N=r.target.files)==null?void 0:N[0];if(m){he.current&&he.current.abort(),me(!0),le(0),ne("正在读取文件..."),o(null),X(!0),_(URL.createObjectURL(m));try{console.log("开始读取文件:",m.name,"大小:",m.size);let v=[];const E=m.name.endsWith(".zip"),A=m.name.endsWith(".shp");if(!E&&!A){o("请上传 .zip 文件 (包含 Shapefile)"),me(!1);return}ne("正在读取文件...");const M=await m.arrayBuffer();le(30),ne("正在解析 Shapefile...");const x=await Re(M);console.log("Shapefile 解析完成:",x),x.type==="FeatureCollection"?v=x.features:Array.isArray(x)?v=x:x.type==="Feature"&&(v=[x]),console.log("解析到的 features 数量:",v.length),le(95),ne(`已解析 ${v.length} 个 Features...`);const g={type:"FeatureCollection",features:v};le(98),ne("正在处理 Place 数据...");const j=new Map;g.features.forEach(u=>{var C;const d=Number(((C=u.properties)==null?void 0:C.Place)??0);j.has(d)||j.set(d,{id:d,name:`Place ${d}`,featureCount:0});const L=j.get(d);L&&L.featureCount++}),le(100),ne("加载完成!"),setTimeout(()=>{$e(!0),I(g),T(Array.from(j.values()).sort((u,d)=>u.id-d.id)),me(!1),X(!1),c(!1)},500)}catch(v){const E=v instanceof Error?v.message:"未知错误";o(`加载失败: ${E}`),me(!1),c(!1)}}},Je=ie.reduce((r,m)=>(r[m.category]||(r[m.category]=[]),r[m.category].push(m),r),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[Ie&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(ze,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:He}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Ae}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Ae,"%"]})]})}),S&&!Ie?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(dt,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${p}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[p,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:Oe,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(ct,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var r;return(r=Te.current)==null?void 0:r.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(ze,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Te,type:"file",accept:".shp,.zip",onChange:Ye,className:"hidden"})]})}):null,w&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:w}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(ut,{size:14}),"刷新重试"]})})]}),y&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(mt,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>R(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(ht,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>We(!oe),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${oe?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${oe?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:n??"",onChange:r=>h(r.target.value?Number(r.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((_e=a==null?void 0:a.features)==null?void 0:_e.length)??0,")"]}),k.map(r=>e.jsxs("option",{value:r.id,children:[r.name," (",r.featureCount,")"]},r.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:t,onChange:r=>i(r.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Je).map(([r,m])=>[e.jsx("optgroup",{label:r.charAt(0).toUpperCase()+r.slice(1),children:m.map(N=>e.jsx("option",{value:N.key,children:N.label},N.key))},r)])})]}),D&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(gt,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:D.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:D.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:D.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:D.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:D.nanCount})]})]})]})]})]}),!y&&e.jsx("button",{onClick:()=>R(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(pt,{size:18})}),Ue&&$&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[$.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",$.properties.Place]}),$.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",$.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",$.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>Ce(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Ge,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:ie.map(r=>{var N;const m=(N=$.properties)==null?void 0:N[r.key];return m==null?null:e.jsxs("button",{onClick:()=>i(r.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${t===r.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:r.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof m=="number"?m.toFixed(2):m})]},r.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>h(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:f,className:"w-full h-full"}),Ee&&a&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Fe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>Pe(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Ge,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Ke(W==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${W==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:W==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:t.includes("K_")?(()=>{var v,E;const r=Math.round(((v=fe[t])==null?void 0:v.max)??30),m=Array.from({length:26},(A,M)=>{const x=M/25;let g,j,u;if(x<.167){const d=x/.167;g=0,j=0,u=Math.round(139+116*d)}else if(x<.333){const d=(x-.167)/.167;g=0,j=Math.round(255*d),u=255}else if(x<.5){const d=(x-.333)/.167;g=0,j=Math.round(255-128*d),u=Math.round(255-255*d)}else if(x<.667){const d=(x-.5)/.167;g=Math.round(255*d),j=255,u=0}else if(x<.833){const d=(x-.667)/.167;g=255,j=Math.round(255-128*d),u=0}else{const d=(x-.833)/.167;g=255,j=Math.round(127-127*d),u=0}return`#${g.toString(16).padStart(2,"0")}${j.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}),N=Array.from({length:r+1},(A,M)=>m[Math.round(M*25/r)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((E=ie.find(A=>A.key===t))==null?void 0:E.label)||t}),e.jsx("div",{className:"flex flex-wrap gap-px",children:N.map((A,M)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:A}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:M})]},M))})]})})():t==="CoverRatio"||t==="ISF"||t==="GreenRatio"?(()=>{var u;const r=(()=>{var C;let d=1/0,L=-1/0;for(const z of a.features){const P=Number((C=z.properties)==null?void 0:C[t]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>L&&(L=P))}return{min:d===1/0?0:d,max:L===-1/0?0:L}})(),m=n!==null&&D?{min:D.min,max:D.max}:r,N=((u=ie.find(d=>d.key===t))==null?void 0:u.label)||t,v=r.max>r.min?Math.max(0,Math.min(1,(m.min-r.min)/(r.max-r.min))):0,E=r.max>r.min?Math.max(0,Math.min(1,(m.max-r.min)/(r.max-r.min))):0,A=Math.max(0,E-v),M=re("#3182bd"),x=re("#e6550d"),g=se(M,x,v),j=se(M,x,E);return e.jsxs("div",{children:[W==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:n!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${A*100}%`,background:`linear-gradient(to right, ${g}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),W==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:r.min.toFixed(2)}),e.jsx("span",{children:r.max.toFixed(2)})]})]})]})})():t.includes("elev")||t.includes("slope")?(()=>{var u;const r=(()=>{var C;let d=1/0,L=-1/0;for(const z of a.features){const P=Number((C=z.properties)==null?void 0:C[t]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>L&&(L=P))}return{min:d===1/0?0:d,max:L===-1/0?0:L}})(),m=n!==null&&D?{min:D.min,max:D.max}:r,N=((u=ie.find(d=>d.key===t))==null?void 0:u.label)||t,v=r.max>r.min?Math.max(0,Math.min(1,(m.min-r.min)/(r.max-r.min))):0,E=r.max>r.min?Math.max(0,Math.min(1,(m.max-r.min)/(r.max-r.min))):0,A=Math.max(0,E-v),M=re("#31a354"),x=re("#756bb1"),g=se(M,x,v),j=se(M,x,E);return e.jsxs("div",{children:[W==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:n!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${A*100}%`,background:`linear-gradient(to right, ${g}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(1)}),e.jsxs("span",{children:[m.max.toFixed(0),"+"]})]})]}),W==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:r.min.toFixed(1)}),e.jsxs("span",{children:[r.max.toFixed(0),"+"]})]})]})]})})():(()=>{var u;const r=(()=>{var C;let d=1/0,L=-1/0;for(const z of a.features){const P=Number((C=z.properties)==null?void 0:C[t]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>L&&(L=P))}return{min:d===1/0?0:d,max:L===-1/0?0:L}})(),m=n!==null&&D?{min:D.min,max:D.max}:r,N=((u=ie.find(d=>d.key===t))==null?void 0:u.label)||t,v=r.max>r.min?Math.max(0,Math.min(1,(m.min-r.min)/(r.max-r.min))):0,E=r.max>r.min?Math.max(0,Math.min(1,(m.max-r.min)/(r.max-r.min))):0,A=Math.max(0,E-v),M=re("#31a354"),x=re("#756bb1"),g=se(M,x,v),j=se(M,x,E);return e.jsxs("div",{children:[W==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:n!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${A*100}%`,background:`linear-gradient(to right, ${g}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),W==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:r.min.toFixed(2)}),e.jsx("span",{children:r.max.toFixed(2)})]})]})]})})()})]}),!Ee&&e.jsx("button",{onClick:()=>Pe(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Fe,{size:18})})]})},hn=()=>{const[f,s]=l.useState(!1),[S,c]=l.useState(!1),[p,b]=l.useState(!1),[w,o]=l.useState({x:0,y:0}),[a,I]=l.useState("/data/fig/lili/lili_01.png"),[k,T]=l.useState("Exploring the intersection of technology and creativity."),n=et(),h=tt(),i=n.pathname.split("/").filter(Boolean)[0]||"",y={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},R=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],D=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],H=()=>{const _=Math.floor(Math.random()*R.length);return R[_]},F=()=>{const _=Math.floor(Math.random()*D.length);return D[_]};return l.useEffect(()=>{i===""?I(H()):y[i]?I(y[i]):I(H()),T(F())},[i]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 dark:bg-neutral-900 flex flex-col",children:e.jsxs("div",{className:"w-full flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b border-neutral-200 dark:border-neutral-800 p-4 flex justify-between items-center bg-white dark:bg-neutral-900 z-30 shrink-0 relative",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>s(!f),className:"md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",children:"☰"}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500 dark:text-neutral-400",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(cn,{}),e.jsxs("button",{onClick:()=>{b(!0);const _=w.x+360*2+Math.random()*360,J=w.y+360*2+Math.random()*360;o({x:_,y:J}),setTimeout(()=>{const X=["planning","design","game","platform","tutorial","about"],$=X[Math.floor(Math.random()*X.length)];h(`/${$}`),b(!1)},1e3)},className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:"🎲 Explore a random project",children:[e.jsx("div",{className:"w-5 h-5",style:{perspective:"100px"},children:e.jsxs("div",{className:"w-full h-full relative transition-transform duration-1000 ease-out",style:{transform:`rotateX(${w.x}deg) rotateY(${w.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"5px",height:"5px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(180deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-5 marg w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:" rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"})]}),e.jsx("div",{className:"absolute w-full h-full bg-white border-gray-400  justify-center rounded flex  p-0.5",style:{transform:"rotateX(90deg) translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3 border w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateX(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]})]})}),e.jsx("span",{className:"text-sm font-medium",children:"Jump"})]}),e.jsxs("nav",{className:"hidden sm:flex gap-0",children:[e.jsx(K,{to:"/",onClick:()=>{window.innerWidth<768&&s(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${i===""?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:"Home"})}),[{key:"planning",label:"Planning",short:"Planning"},{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(_=>e.jsx(K,{to:`/${_.key}`,onClick:()=>{window.innerWidth<768&&s(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${i===_.key?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:_.label})},_.key))]}),e.jsxs("div",{className:"sm:hidden relative",children:[e.jsxs("button",{onClick:()=>c(!S),className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800",children:[e.jsx("span",{className:"text-sm font-medium",children:i===""?"Home":i.charAt(0).toUpperCase()+i.slice(1)}),S?"✕":"▼"]}),S&&e.jsxs("div",{className:"absolute right-0 top-10 bg-neutral-900 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-600 rounded-lg shadow-lg z-50 min-w-[160px]",children:[e.jsx(K,{to:"/",onClick:()=>{c(!1),s(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${i===""?"bg-neutral-700 dark:bg-neutral-700 text-white":"text-neutral-300 dark:text-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-700"}`,children:"Home"}),[{key:"planning",label:"Planning"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}].map(_=>e.jsx(K,{to:`/${_.key}`,onClick:()=>{c(!1),s(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${i===_.key?"bg-neutral-700 dark:bg-neutral-700 text-white":"text-neutral-300 dark:text-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-700"}`,children:_.label},_.key))]})]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[f&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[a&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:a,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic mb-3",children:['"',k,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4 black",children:[a&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:a,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(ke,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(ke,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(ke,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 dark:border-neutral-800 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic",children:['"',k,'"']})})]})]})}),e.jsx("section",{className:"flex-1 relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(nt,{children:[e.jsx(B,{path:"/",element:e.jsx(dn,{})}),e.jsx(B,{path:"/planning",element:e.jsx(ce,{data:Ne,type:"planning"})}),e.jsx(B,{path:"/planning/:id",element:e.jsx(ue,{data:Ne,type:"planning"})}),e.jsx(B,{path:"/design",element:e.jsx(ce,{data:Me,type:"design"})}),e.jsx(B,{path:"/design/:id",element:e.jsx(ue,{data:Me,type:"design"})}),e.jsx(B,{path:"/game",element:e.jsx(ce,{data:Se,type:"game"})}),e.jsx(B,{path:"/game/:id",element:e.jsx(ue,{data:Se,type:"game"})}),e.jsx(B,{path:"/platform",element:e.jsx(ce,{data:Le,type:"platform"})}),e.jsx(B,{path:"/platform/:id",element:e.jsx(ue,{data:Le,type:"platform"})}),e.jsx(B,{path:"/tutorial",element:e.jsx(ce,{data:De,type:"tutorial"})}),e.jsx(B,{path:"/tutorial/:id",element:e.jsx(ue,{data:De,type:"tutorial"})}),e.jsx(B,{path:"/clusteringeomap",element:e.jsx(mn,{})}),e.jsx(B,{path:"/about",element:e.jsx(ln,{})}),e.jsx(B,{path:"/contact",element:e.jsx(on,{})})]})})]})]})})};function gn(){const[f,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(at,{children:e.jsx(hn,{})}),!f&&e.jsx(xt,{onFinish:()=>s(!0)})]})}rt.createRoot(document.getElementById("root")).render(e.jsx(gn,{}));
