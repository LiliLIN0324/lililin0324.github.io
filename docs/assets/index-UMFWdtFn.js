const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-wcGO4Osm.js","./vendor-crHWKeSW.js","./maplibre-BkiGPtbL.js","./maplibre-PhPnDjd-.css","./vendor-Dgihpmma.css","./icons-CgSqI4NK.js","./UR-platform-Cu-r45u-.js","./heatmapper-CXmUYFv5.js","./openstreetmap-BSxgW8Dt.js","./photogeo-BT_AJHmu.js","./photogeomap-DRPoeAt9.js","./clusteringevents-D3zghNTm.js","./litflow-3_s9HW8y.js","./boxupcyberspace-GUt7T_Ci.js","./epsteinscret-CA1xk4Lo.js","./wechatgame-Cv9iwI3m.js","./riffle-D84mkK7n.js","./genstyle-GYPDpE_-.js","./genshot-Dx8CE5Ld.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,A as Qe,m as ve,L as Y,u as et,M as tt,a as nt,b as at,g as Re,c as st,d as it,R as rt,e as O,H as ot,f as lt}from"./vendor-crHWKeSW.js";import{m as he}from"./maplibre-BkiGPtbL.js";import{U as ze,L as ct,D as dt,R as ut,M as mt,C as ht,a as pt,b as gt,X as Fe,c as Oe}from"./icons-CgSqI4NK.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const b of a)if(b.type==="childList")for(const j of b.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function D(a){const b={};return a.integrity&&(b.integrity=a.integrity),a.referrerPolicy&&(b.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?b.credentials="include":a.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(a){if(a.ep)return;a.ep=!0;const b=D(a);fetch(a.href,b)}})();function ft({onFinish:v}){const[i,D]=o.useState(!0),c=o.useRef(null),a=o.useRef({x:-1e3,y:-1e3});return o.useEffect(()=>{const b=c.current;if(!b)return;const j=b.getContext("2d");if(!j)return;let l,p=[];const I=()=>{b.width=window.innerWidth,b.height=window.innerHeight},k=s=>{a.current={x:s.clientX,y:s.clientY}},E=s=>{s.touches.length>0&&(a.current={x:s.touches[0].clientX,y:s.touches[0].clientY})};window.addEventListener("resize",I),window.addEventListener("mousemove",k),window.addEventListener("touchmove",E),I();class t{constructor(){this.x=Math.random()*b.width,this.y=Math.random()*b.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>b.width)&&(this.vx*=-1),(this.y<0||this.y>b.height)&&(this.vy*=-1);let w=a.current.x-this.x,R=a.current.y-this.y,F=Math.sqrt(w*w+R*R),_=w/F,J=R/F;const Q=150;let z=(Q-F)/Q;F<Q&&(this.x-=_*z*this.density*.5,this.y-=J*z*this.density*.5)}draw(){j&&(j.fillStyle="rgba(255, 255, 255, 0.8)",j.beginPath(),j.arc(this.x,this.y,this.size,0,Math.PI*2),j.fill())}}for(let s=0;s<120;s++)p.push(new t);const h=()=>{j.clearRect(0,0,b.width,b.height);for(let s=0;s<p.length;s++){p[s].update(),p[s].draw();for(let w=s+1;w<p.length;w++){const R=p[s].x-p[w].x,F=p[s].y-p[w].y,_=Math.sqrt(R*R+F*F);_<100&&(j.beginPath(),j.strokeStyle=`rgba(255, 255, 255, ${.2*(1-_/100)})`,j.lineWidth=.6,j.moveTo(p[s].x,p[s].y),j.lineTo(p[w].x,p[w].y),j.stroke())}}l=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",I),window.removeEventListener("mousemove",k),window.removeEventListener("touchmove",E)}},[]),e.jsx(Qe,{onExitComplete:v,children:i&&e.jsxs(ve.div,{onClick:()=>D(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:c,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(ve.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(ve.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const xt=`---
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
`,vt=`---
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
`,kt=`---
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
`,Lt=`---
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
`,St=`---
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
`,Pt=`---
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
`,_t=`---
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
`,At=`---
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
<iframe src="https://drive.google.com/file/d/12l_mgFf2lW-gvfE1kfiu7GTBpLxtls5q/preview" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

![效果展示](/data/fig/epsteinscret-1.png)
![效果展示](/data/fig/epsteinscret-2.png)
`,Et=`---
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
`,Ft=`---
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

## 01 Docker 打开
\`\`\`powershell
# 打开 Docker Desktop
Start-Process "C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe"
\`\`\`

## 01 本地部署 Dify
**链接**: https://dify.ai/

<iframe src="https://dify.ai/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**GitHub**: https://github.com/langgenius/dify

<iframe src="https://github.com/langgenius/dify" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Dify 介绍
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。

### b. 本地部署步骤
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

> **注意**：每次使用前需要运行

\`\`\`powershell
docker compose down
docker compose up -d
\`\`\`


## 02 配置 Ollama 本地模型
**链接**: https://ollama.com/

<iframe src="https://ollama.com/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama

<iframe src="https://marketplace.dify.ai/plugin/langgenius/ollama" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

### a. Ollama 介绍
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：
- 完全本地运行，无需联网
- 无需 API Key，数据隐私安全
- 支持多种开源模型

### b. 安装配置步骤

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
   # 下载对话模型
   ollama pull llama3.2
   
   # 下载嵌入模型（用于知识库向量化）
   ollama pull mxbai-embed-large
   ollama pull nomic-embed-text
   \`\`\`
   > **注意**：目前 Ollama 官方库中暂无专门的 Rerank 模型。可以使用嵌入模型的相似度排序作为替代方案。（推荐使用）

### c. 在 Dify 中配置 Ollama

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

### d. 关于 Rerank 模型

**当前状态**：目前 Ollama 官方库中暂无专门的 Rerank 模型可用。


4. **部署和测试**：
   \`\`\`bash
   # 启动本地 Rerank 服务
   python rerank_service.py
   
   # 测试服务
   curl -X POST http://localhost:5002/rerank \\
     -H "Content-Type: application/json" \\
     -d '{
       "query": "What is machine learning?",
       "documents": [
         "Machine learning is a subset of artificial intelligence.",
         "Deep learning uses neural networks with multiple layers.",
         "Python is a popular programming language for data science."
       ]
     }'
   \`\`\`



### f. Python 集成（可选）
\`\`\`bash
# 创建专用环境
conda create -n ollama python=3.9 -y
conda activate ollama
pip install ollama

# 验证模型
ollama list
\`\`\`

## 03 创建知识库和工作流

### a. 创建知识库

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

### g. 部署独立 MinerU 服务

**参考教程**：https://zhuanlan.zhihu.com/p/1905282812648613610

<iframe src="https://zhuanlan.zhihu.com/p/1905282812648613610" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

**部署步骤**：
03 使用 Dify 中 MinerU 插件的常见问题
本地部署的 Dify，在执行过程中遇到如下错误怎么办？

1Run failed: Failed to transform tool message: PluginInvokeError: {"args":{},"error_type":"Exception","message":"Error extracting page from PDF: Request URL is missing an 'http://' or 'https://' protocol."}
（报错示意）

为了解决上述问题，接下来你需要设置 Dify 的配置文件：

1. 找到 Dify 部署目录，打开 .env 文件，修改 FILES_URL 配置项，依据你的部署方式填写：

● Docker Compose 部署：FILES_URL 设置为 ‘http://api:5001'

● 其他部署方式：FILES_URL 设置为 'http://Dify宿主机IP:5001'

（如 http://192.168.1.100:5001，这里的 IP 通常是运行 Dify 的机器的 IP，即前文提到的“本地IP”端口。5001 是 Dify API 服务的默认端口）。

2. 确认 Dify API 服务的 5001 端口已对外暴露（可检查 docker-compose.yaml 文件的端口映射）。

3. 保存 .env 文件。

4. 重启 Dify 服务以使配置生效。

### b. 构建工作流

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

### c. 实战示例：文档问答助手

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

### e. 故障排除

**常见问题及解决方案**：

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

### f. 最佳实践

**模型选择策略**：
- **对话任务**：使用 \`llama3.2\` 系列，平衡性能和资源消耗
- **嵌入任务**：\`mxbai-embed-large\` 适合中文，\`nomic-embed-text\` 适合英文
- **重排序任务**：目前使用嵌入模型的相似度排序，调整检索参数优化效果
- **语音任务**：本地 Whisper（隐私）vs 云端 API（便捷）

**知识库优化**：
- 定期更新文档内容，保持信息时效性
- 合理设置分块大小，避免信息丢失或上下文过长
- 使用清晰的文档结构和标题，提高检索准确性

**工作流设计原则**：
- 保持流程简洁，避免不必要的复杂节点
- 合理使用变量和条件分支，提高复用性
- 添加错误处理机制，提升系统稳定性

**语音功能优化**：
- 选择合适的 Whisper 模型大小（tiny/base/small/medium/large）
- 优化音频输入质量，减少背景噪音
- 合理设置音频格式和采样率
- 考虑音频缓存和预加载策略

**性能优化建议**：
- 监控 API 调用次数和响应时间
- 合理设置缓存策略，减少重复计算
- 定期清理无用数据和应用
- 语音处理考虑异步化，避免阻塞主流程

**安全考虑**：
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

`,Bt=`---
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

`;function Gt(v){const i=/^---\r?\n([\s\S]*?)\r?\n---/,D=v.match(i);let c={},a=v;if(D){const b=D[1];a=v.slice(D[0].length).trim();const j=b.split(/\r?\n/);let l=null,p=[];j.forEach(I=>{if(I.trim()==="")return;const E=I.indexOf(":");if(E!==-1&&!I.startsWith(" ")){l&&(c[l]=p.join(`
`)),l=I.slice(0,E).trim();let t=I.slice(E+1).trim();t==="|"?p=[]:(c[l]=t,l=null,p=[])}else l&&I.startsWith("  ")&&p.push(I.slice(2))}),l&&p.length>0&&(c[l]=p.join(`
`)),Object.keys(c).forEach(I=>{let k=c[I];if(typeof k=="string")if(k=k.trim(),k.startsWith('"')&&k.endsWith('"')&&(k=k.slice(1,-1)),k.startsWith("[")&&k.endsWith("]"))try{c[I]=JSON.parse(k)}catch{c[I]=[k.slice(1,-1).trim()]}else k==="true"?c[I]=!0:k==="false"?c[I]=!1:!isNaN(Number(k))&&k.trim()!==""?c[I]=Number(k):c[I]=k})}return{id:c.id||"",slug:c.slug||"",title:c.title||"",category:c.category||"",year:c.year||"",description:c.description||"",tech:c.tech||[],abstract:c.abstract||"",challenge:c.challenge||"",solution:c.solution||"",hasDemo:c.hasDemo||!1,icon:c.icon||"",code:c.code||"",logo:c.icon||"",image:c.image||[],content:a}}function T(v){const i=Gt(v);return{id:i.id,slug:i.slug,title:i.title,category:i.category,year:i.year,description:i.description,tech:i.tech,hasDemo:i.hasDemo,details:{abstract:i.abstract,description:i.description,challenge:i.challenge,solution:i.solution,logo:i.logo,icon:i.icon,code:i.code,image:i.image,content:i.content}}}const Ne=[T(xt),T(bt),T(yt),T(vt),T(jt),T(wt)],ke=[T(Nt),T(kt),T(Mt),T(Lt),T(St),T(Dt),T(Ct)],Me=[T(It),T(Pt)],Le=[T(_t),T(At),T(Tt)],Se=[T(Et),T(Rt),T(zt),T(Ft),T(Ot),T(Ut),T(Bt)],ce=({data:v,type:i})=>{const[D,c]=o.useState("grid");return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:["Selected ",i==="research"?"Researches":i==="design"?"Designs":i==="game"?"Games":i==="planning"?"Planning":i==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>c("grid"),className:`px-3 py-1 text-xs font-mono ${D==="grid"?"bg-white shadow-sm":"text-neutral-500"}`,children:"GRID"}),e.jsx("button",{onClick:()=>c("list"),className:`px-3 py-1 text-xs font-mono ${D==="list"?"bg-white shadow-sm":"text-neutral-500"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:["Idx: ",v.length]})]})]}),D==="list"?e.jsx("div",{className:"space-y-4",children:v.map(a=>e.jsx("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(Y,{to:`/${i}/${a.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 overflow-hidden bg-neutral-50",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate",children:a.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-1",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${a.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},a.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:v.map(a=>e.jsxs("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm flex flex-col",children:[e.jsxs(Y,{to:`/${i}/${a.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 overflow-hidden bg-neutral-50 mb-4",children:a.details.logo?e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",a.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:a.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 line-clamp-2",children:a.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-2",children:a.description})]})]}),a.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${a.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},a.slug))})]})},pe=v=>{const i=document.getElementById(v);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},Ht="modulepreload",Vt=function(v,i){return new URL(v,i).href},Ue={},U=function(i,D,c){let a=Promise.resolve();if(D&&D.length>0){let j=function(k){return Promise.all(k.map(E=>Promise.resolve(E).then(t=>({status:"fulfilled",value:t}),t=>({status:"rejected",reason:t}))))};const l=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),I=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));a=j(D.map(k=>{if(k=Vt(k,c),k in Ue)return;Ue[k]=!0;const E=k.endsWith(".css"),t=E?'[rel="stylesheet"]':"";if(!!c)for(let w=l.length-1;w>=0;w--){const R=l[w];if(R.href===k&&(!E||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${k}"]${t}`))return;const s=document.createElement("link");if(s.rel=E?"stylesheet":Ht,E||(s.as="script"),s.crossOrigin="",s.href=k,I&&s.setAttribute("nonce",I),document.head.appendChild(s),E)return new Promise((w,R)=>{s.addEventListener("load",w),s.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${k}`)))})}))}function b(j){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=j,window.dispatchEvent(l),!l.defaultPrevented)throw j}return a.then(j=>{for(const l of j||[])l.status==="rejected"&&b(l.reason);return i().catch(b)})},Wt=o.lazy(()=>U(()=>import("./ClusterVisualizer-wcGO4Osm.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),$t=o.lazy(()=>U(()=>import("./UR-platform-Cu-r45u-.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)),qt=o.lazy(()=>U(()=>import("./heatmapper-CXmUYFv5.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)),Kt=o.lazy(()=>U(()=>import("./openstreetmap-BSxgW8Dt.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)),Xt=o.lazy(()=>U(()=>import("./photogeo-BT_AJHmu.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url)),Zt=o.lazy(()=>U(()=>import("./photogeomap-DRPoeAt9.js"),__vite__mapDeps([10,1,2,3,4]),import.meta.url)),Yt=o.lazy(()=>U(()=>import("./clusteringevents-D3zghNTm.js"),__vite__mapDeps([11,1,2,3,4]),import.meta.url));o.lazy(()=>U(()=>import("./litflow-3_s9HW8y.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url));const Jt=o.lazy(()=>U(()=>import("./boxupcyberspace-GUt7T_Ci.js"),__vite__mapDeps([13,1,2,3,4]),import.meta.url)),Qt=o.lazy(()=>U(()=>import("./epsteinscret-CA1xk4Lo.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url)),en=o.lazy(()=>U(()=>import("./wechatgame-Cv9iwI3m.js"),__vite__mapDeps([15,1,2,3,4]),import.meta.url)),tn=o.lazy(()=>U(()=>import("./riffle-D84mkK7n.js"),__vite__mapDeps([16,1,2,3,4]),import.meta.url)),nn=o.lazy(()=>U(()=>import("./genstyle-GYPDpE_-.js"),__vite__mapDeps([17,1,2,3,4]),import.meta.url)),an=o.lazy(()=>U(()=>import("./genshot-Dx8CE5Ld.js"),__vite__mapDeps([18,1,2,3,4]),import.meta.url)),sn=v=>({"cluster-visualizer-3d":Wt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":$t,heatmapper:qt,"how-to-add-openstreetmap-in-website":Kt,"how-to-get-sequential-events-from-photo-by-phone":Xt,"how-to-visualize-photo-geolocation-data-on-map":Zt,"how-to-build-game-in-wechat-mini-program":en,"how-to-conduct-time-geo-sequential-clustering-from-album":Yt,"box-up-my-stuff-in-cyberspace":Jt,"epstein-mystery-archive":Qt,"riffle-ai-game-generation-tool":tn,genstyle:nn,"genshot-AI-video-generation-tool":an})[v],je={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},rn=({src:v,...i})=>{const[D,c]=o.useState(!1),[a,b]=o.useState(!1),j=()=>{c(!0),b(!0)},l=()=>{c(!1),b(!0)};return o.useEffect(()=>{const p=setTimeout(()=>{a||(c(!1),b(!0))},3e3);return()=>clearTimeout(p)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:v,onLoad:j,onError:l,style:{display:"none"},title:"detector"}),!a&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})}),a&&D&&e.jsx("div",{className:"w-full my-6",children:e.jsx("iframe",{src:v,className:"w-full h-96 rounded-lg shadow-md border border-neutral-200",allowFullScreen:!0,...i})}),a&&!D&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})})]})},de=({data:v,type:i})=>{var E;const{id:D}=et(),[c,a]=o.useState("details"),[b,j]=o.useState(!1),l=v.find(t=>t.slug===D),p=t=>{const h=/^(#{1,6})\s+(.+)$/gm,s=[];let w;for(;(w=h.exec(t))!==null;){const R=w[1].length,F=w[2].trim(),_=F.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");s.push({level:R,text:F,id:_})}return s},I=(E=l==null?void 0:l.details)!=null&&E.content?p(l.details.content):[],k=t=>{const h=document.getElementById(t);h&&h.scrollIntoView({behavior:"smooth",block:"start"})};return o.useEffect(()=>{const t=()=>{window.location.hash.includes("demo")?a("demo"):a("details")};return t(),window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[D]),l?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(Y,{to:`/${i}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 truncate max-w-[120px] md:max-w-[200px]",children:l.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>a("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${c==="details"?"bg-white shadow-sm":"text-neutral-500"}`,children:"DOCS"}),l.hasDemo&&e.jsxs("button",{onClick:()=>a("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${c==="demo"?"bg-white text-blue-600 shadow-sm":"text-neutral-500"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:`flex-1 ${c==="details"?"overflow-y-auto":"overflow-hidden"}`,children:c==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:l.tech.map((t,h)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-sm",children:t},h))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",l.id]}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:l.year}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:l.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 tracking-tight",children:l.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 to-white border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 leading-relaxed italic",children:['"',l.description,'"']})})]}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow",children:[e.jsxs("div",{className:"md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10",children:[l.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:l.details.abstract})]}),l.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:l.details.challenge})]}),l.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:l.details.solution})]}),l.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Content"}),e.jsx("div",{className:"text-base md:text-lg leading-relaxed text-neutral-800 prose prose-neutral max-w-none",children:e.jsx(tt,{remarkPlugins:[at],rehypePlugins:[nt],components:{table:({children:t})=>e.jsx("table",{className:"min-w-full border-collapse border border-neutral-300",children:t}),thead:({children:t})=>e.jsx("thead",{className:"bg-neutral-50",children:t}),th:({children:t})=>e.jsx("th",{className:"border border-neutral-300 px-3 py-2 text-left font-semibold text-neutral-900 text-sm",children:t}),td:({children:t})=>e.jsx("td",{className:"border border-neutral-300 px-3 py-2 text-neutral-700 text-sm",children:t}),h1:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:w,className:"text-2xl font-bold mb-4 text-neutral-900",...h,children:t})},h2:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:w,className:"text-xl font-bold mb-6 mt-8 text-neutral-800",...h,children:t})},h3:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:w,className:"text-lg font-semibold mb-4 mt-6 text-neutral-800",...h,children:t})},h4:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h4",{id:w,className:"text-base font-semibold mb-3 mt-4 text-neutral-700",...h,children:t})},h5:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h5",{id:w,className:"text-sm font-semibold mb-2 mt-3 text-neutral-700",...h,children:t})},h6:({children:t,...h})=>{const w=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h6",{id:w,className:"text-xs font-semibold mb-2 mt-2 text-neutral-600",...h,children:t})},p:({children:t,...h})=>e.jsx("p",{className:"mb-4 leading-relaxed",...h,children:t}),a:({children:t,href:h,...s})=>e.jsx("a",{href:h,className:"text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium",target:"_blank",rel:"noopener noreferrer",...s,children:t}),img:({src:t,alt:h,...s})=>{var R;return((R=s.className)==null?void 0:R.includes("h-32"))||(h==null?void 0:h.includes("BCR"))||(h==null?void 0:h.includes("BHV"))||(h==null?void 0:h.includes("SVF"))||(h==null?void 0:h.includes("NDVI"))||(h==null?void 0:h.includes("EV"))||(h==null?void 0:h.includes("WR"))||(h==null?void 0:h.includes("Dist_"))?e.jsx("img",{src:t,alt:h,className:"max-w-full h-32 object-cover rounded-lg shadow-sm",...s}):e.jsx("img",{src:t,alt:h,className:"w-full max-w-full h-auto rounded-lg shadow-md my-6",...s})},iframe:({src:t,title:h,...s})=>e.jsx(rn,{src:t,title:h||"Embedded content",...s})},children:l.details.content})})]}),(l.details.code||l.details.codeComponent||je[l.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:je[l.slug]||l.details.codeComponent||`// Code file: ${l.details.code}`})})})]})]}),e.jsx("div",{className:"md:col-span-12 lg:col-span-4 hidden lg:block",children:e.jsxs("div",{className:"sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-neutral-200",children:[e.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-neutral-400",children:"Contents"}),e.jsx("button",{onClick:()=>j(!b),className:"text-neutral-400 hover:text-neutral-600 transition-colors",children:e.jsx("svg",{className:`w-4 h-4 transform transition-transform ${b?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:`${b?"max-h-0":"max-h-96"} overflow-hidden transition-all duration-300`,children:e.jsxs("div",{className:"p-4 space-y-2 overflow-y-auto max-h-80",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Overview"}),l.details.abstract&&e.jsx("button",{onClick:()=>pe("abstract"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left text-left",children:"Abstract"})]}),I.length>0&&e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Content Sections"}),I.map((t,h)=>e.jsx("button",{onClick:()=>k(t.id),className:`text-sm hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left block ${t.level===1?"font-semibold text-neutral-800":t.level===2?"font-medium text-neutral-700 ml-2":t.level===3?"text-neutral-600 ml-4":t.level===4?"text-neutral-600 ml-6":t.level===5?"text-neutral-500 ml-8":"text-neutral-500 ml-10"}`,children:t.text},h))]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Methodology"}),l.details.solution&&e.jsx("button",{onClick:()=>pe("methodology"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Approach"}),l.details.challenge&&e.jsx("button",{onClick:()=>pe("challenges"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Challenges"})]}),e.jsxs("div",{className:"space-y-1 mt-4",children:[e.jsx("h4",{className:"text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2",children:"Resources"}),(l.details.code||l.details.codeComponent||je[l.slug])&&e.jsx("button",{onClick:()=>pe("code"),className:"text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left",children:"Code Example"})]})]})})]})})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 relative",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"Loading demo..."}),children:(()=>{const t=sn(l.slug);return t?e.jsx(t,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},on=()=>e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"prose prose-neutral prose-sm font-light text-base md:text-lg text-neutral-800 leading-relaxed",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),ln=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 transition-colors",children:"SEND_TRANSMISSION"})]}),we=({href:v,label:i})=>e.jsx("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all rounded-sm text-xs font-mono",children:i}),cn=()=>{const v=[...Ne.map(a=>({...a,type:"planning"})),...ke.map(a=>({...a,type:"design"})),...Me.map(a=>({...a,type:"game"})),...Le.map(a=>({...a,type:"platform"})),...Se.map(a=>({...a,type:"tutorial"}))],[i,D]=o.useState(0),c=v.length-1;return o.useEffect(()=>{const a=b=>{b.preventDefault(),D(j=>b.deltaY>0?Math.min(j+1,c):Math.max(j-1,0))};return window.addEventListener("wheel",a,{passive:!1}),()=>window.removeEventListener("wheel",a)},[c]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:"All Projects"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:[i+1," / ",v.length]})]}),e.jsx("div",{className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10",children:v.map((a,b)=>{var t;const j=b-i;if(j<-2||j>3)return null;const l=1-Math.abs(j)*.08,p=j*60,I=-Math.abs(j)*120,k=j*-6,E=j===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${p+20}px)
                  translateZ(${I}px)
                  rotateX(${k}deg)
                  scale(${l})
                `,opacity:E,zIndex:100-Math.abs(j)},children:e.jsx("div",{className:"bg-white border border-neutral-200 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:a.details.logo,alt:a.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 rounded",children:a.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400",children:a.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-neutral-600 mb-4 line-clamp-3",children:a.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(t=a.tech)==null?void 0:t.slice(0,3).map((h,s)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 text-blue-700 rounded",children:h},s))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${a.type}/${a.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 hover:bg-neutral-300 rounded",children:"VIEW"}),a.hasDemo&&e.jsx("a",{href:`#/${a.type}/${a.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${a.type}-${a.slug}`)})})]})},Be="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",dn="/data/223_cities_cluster_with_index_deciles.csv",ne=v=>{const i=v.replace("#",""),D=parseInt(i.slice(0,2),16),c=parseInt(i.slice(2,4),16),a=parseInt(i.slice(4,6),16);return[D,c,a]},ae=(v,i,D)=>{const c=Math.round(v[0]+(i[0]-v[0])*D),a=Math.round(v[1]+(i[1]-v[1])*D),b=Math.round(v[2]+(i[2]-v[2])*D);return`rgb(${c}, ${a}, ${b})`},se=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],un=()=>{var Ee;const v=o.useRef(null),i=o.useRef(null),[D,c]=o.useState(!0),[a,b]=o.useState(0),[j,l]=o.useState(null),[p,I]=o.useState(null),[k,E]=o.useState([]),[t,h]=o.useState(null),[s,w]=o.useState("K_12"),[R,F]=o.useState(!0),[_,J]=o.useState(null),[Q,z]=o.useState(null),[De,ie]=o.useState(!1),[W,Ge]=o.useState(null),[He,Ce]=o.useState(!1),[pn,gn]=o.useState(null),[Ie,ue]=o.useState(!1),[Pe,re]=o.useState(0),[Ve,ee]=o.useState(""),[ge,We]=o.useState(!1),[oe,$e]=o.useState(!0),[_e,Ae]=o.useState(!0),[fe,qe]=o.useState({}),[fn,xn]=o.useState(!1),[H,Ke]=o.useState("global"),me=o.useRef(null),Te=o.useRef(null),Xe=o.useRef(!1),le=o.useRef(null),Ze=(n,u)=>{let y=n.features;t!==null&&(y=y.filter(m=>{var d;const x=(d=m.properties)==null?void 0:d.Place;return x!==void 0&&Number(x)===Number(t)}));const f=y.map(m=>{var x;return(x=m.properties)==null?void 0:x[u]}).filter(m=>{if(m==null)return!1;if(typeof m=="string"){const d=m.trim();if(d===""||/^(na|nan|null)$/i.test(d))return!1}const x=Number(m);return!(Number.isNaN(x)||x===-9999)}).map(m=>Number(m)),C=y.reduce((m,x)=>{var M;const d=(M=x.properties)==null?void 0:M[u];let r=!1;if(d==null)r=!0;else if(typeof d=="string"){const L=d.trim();if(L===""||/^(na|nan|null)$/i.test(L))r=!0;else{const A=Number(d);(Number.isNaN(A)||A===-9999)&&(r=!0)}}else{const L=Number(d);(Number.isNaN(L)||L===-9999)&&(r=!0)}return m+(r?1:0)},0);let S=NaN,N=NaN,g=0;if(f.length>0){S=f[0],N=f[0],g=f[0];for(let m=1;m<f.length;m++){const x=f[m];x<S&&(S=x),x>N&&(N=x),g+=x}}return{count:y.length,min:S,max:N,mean:f.length>0?g/f.length:NaN,nanCount:C}};o.useEffect(()=>{(async()=>{try{const f=(await(await fetch(dn)).text()).trim().split(`
`);if(f.length<2)return;const C=f[0].split(",").map(d=>d.trim()),S={},g=f[f.length-1].split(","),x=f[1].split(",");C.forEach((d,r)=>{if(d===""||d.includes("Place")||d.includes("Sum")||d.includes("FID")||d.includes("index"))return;const M=parseFloat(x[r]),L=parseFloat(g[r]);!isNaN(M)&&!isNaN(L)&&L>M&&(S[d]={min:M,max:L})}),console.log("Loaded attribute ranges:",S),qe(S)}catch(u){console.error("Failed to load deciles:",u)}})()},[]),o.useEffect(()=>{!ge&&!p&&(async()=>{var u;c(!0),b(0),l(null);try{b(10),console.log("开始下载..."),me.current=new AbortController;const y=await fetch(Be,{signal:me.current.signal});if(console.log("响应状态:",y.status),!y.ok)throw new Error(`HTTP error! status: ${y.status}`);b(30);const f=y.headers.get("content-length"),C=f?parseInt(f):null;console.log("预期文件大小:",C);const S=(u=y.body)==null?void 0:u.getReader();if(!S)throw new Error("无法读取响应流");let N=0;const g=[];for(;;){const{done:A,value:P}=await S.read();if(A)break;g.push(P),N+=P.length,b(C?30+Math.round(N/C*60):50)}console.log("下载完成, 收到:",N),C&&N!==C&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const m=new Uint8Array(N);let x=0;for(const A of g)m.set(A,x),x+=A.length;if(b(90),ge){console.log("本地数据已加载，跳过网络数据"),c(!1);return}console.log("开始解析 Shapefile...");const d=await Re(m);console.log("Shapefile 解析完成:",d);let r=[];if(d.type==="FeatureCollection"?r=d.features:Array.isArray(d)?r=d:d.type==="Feature"&&(r=[d]),console.log("解析完成，特征数量:",r==null?void 0:r.length),ge)return;const M={type:"FeatureCollection",features:r||[]};I(M),b(100);const L=new Map;M.features.forEach(A=>{var $;const P=Number((($=A.properties)==null?void 0:$.Place)??0);L.has(P)||L.set(P,{id:P,name:`Place ${P}`,featureCount:0});const B=L.get(P);B&&B.featureCount++}),E(Array.from(L.values()).sort((A,P)=>A.id-P.id)),c(!1)}catch(y){if(y.name==="AbortError"){console.log("网络请求已取消");return}l(y instanceof Error?y.message:"Failed to load"),c(!1)}})()},[]),o.useEffect(()=>{p&&J(Ze(p,s))},[p,t,s,H,fe]),o.useEffect(()=>{if(!p)return;const n=i.current;if(!n)return;const u=()=>{var f,C,S,N;if(p.features.forEach((g,m)=>{g.id===void 0&&(g.id=m)}),n.getSource("cluster"))n.getSource("cluster").setData(p);else{console.log("初始化 cluster 数据源..."),n.addSource("cluster",{type:"geojson",data:p,generateId:!0}),n.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),n.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),n.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),n.on("click","cluster-fill",m=>{var x;if(m.features&&m.features.length>0){const d=m.features[0],r=d.id;le.current!==null&&le.current!==void 0&&n.setFeatureState({source:"cluster",id:le.current},{selected:!1}),r!==void 0?(n.setFeatureState({source:"cluster",id:r},{selected:!0}),le.current=r):le.current=null,Ge(d),Ce(!0),((x=d.properties)==null?void 0:x.Place)!==void 0&&h(Number(d.properties.Place))}}),n.on("mouseenter","cluster-fill",()=>{n.getCanvas().style.cursor="pointer"}),n.on("mouseleave","cluster-fill",()=>{n.getCanvas().style.cursor=""});const g=p.features;if(g.length>0)try{const m=new he.LngLatBounds,x=Math.max(1,Math.floor(g.length/2e3));for(let d=0;d<g.length;d+=x){const r=g[d];if(!((f=r.geometry)!=null&&f.coordinates))continue;const M=r.geometry.type,L=r.geometry.coordinates;M==="Point"?m.extend(L):M==="LineString"||M==="MultiPoint"?L.forEach(A=>m.extend(A)):M==="Polygon"||M==="MultiLineString"?(C=L[0])==null||C.forEach(A=>m.extend(A)):M==="MultiPolygon"&&((N=(S=L[0])==null?void 0:S[0])==null||N.forEach(A=>m.extend(A)))}m.isEmpty()||n.fitBounds(m,{padding:50,duration:1e3})}catch(m){console.error("Fit bounds error:",m)}}},y=()=>{var P;if(!n.getLayer("cluster-fill"))return;const f=null;n.setFilter("cluster-fill",f),n.setFilter("cluster-line",f),n.setFilter("cluster-highlight",f);const C=(()=>{var xe;let B=1/0,$=-1/0;for(const be of p.features){const q=Number((xe=be.properties)==null?void 0:xe[s]);Number.isNaN(q)||q===-9999||(q<B&&(B=q),q>$&&($=q))}return{min:B===1/0?0:B,max:$===-1/0?0:$}})(),S=t!==null&&_?{min:_.min,max:_.max}:C,N=H==="city"?S:C,g=N.min,m=N.max;let x;if(s.includes("K_")){const B=Math.round(((P=fe[s])==null?void 0:P.max)??m),$=Array.from({length:26},(te,ye)=>{const V=ye/25;let K,X,Z;if(V<.167){const G=V/.167;K=0,X=0,Z=Math.round(139+116*G)}else if(V<.333){const G=(V-.167)/.167;K=0,X=Math.round(255*G),Z=255}else if(V<.5){const G=(V-.333)/.167;K=0,X=Math.round(255-128*G),Z=Math.round(255-255*G)}else if(V<.667){const G=(V-.5)/.167;K=Math.round(255*G),X=255,Z=0}else if(V<.833){const G=(V-.667)/.167;K=255,X=Math.round(255-128*G),Z=0}else{const G=(V-.833)/.167;K=255,X=Math.round(127-127*G),Z=0}return`#${K.toString(16).padStart(2,"0")}${X.toString(16).padStart(2,"0")}${Z.toString(16).padStart(2,"0")}`}),be=Array.from({length:B+1},(te,ye)=>$[Math.round(ye*25/B)]).slice(0,B+1),q=["interpolate",["linear"],["get",s]];for(let te=0;te<=B;te++)q.push(te,be[te]);x=q}else s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?x=["interpolate",["linear"],["get",s],g,"#3182bd",m,"#e6550d"]:s.includes("elev")||s.includes("slope")?x=["interpolate",["linear"],["get",s],g,"#31a354",m,"#756bb1"]:x=["interpolate",["linear"],["get",s],g,"#31a354",m,"#756bb1"];n.setPaintProperty("cluster-fill","fill-color",x);const d=t!==null,r=Number(t),A=["case",["any",["==",["get",s],-9999],["==",["get",s],null]],0,d?["case",["==",["to-number",["get","Place"]],r],.8,.15]:.7];n.setPaintProperty("cluster-fill","fill-opacity",A)};n.isStyleLoaded()?(u(),y()):n.once("load",()=>{u(),y()})},[p,t,s]),o.useEffect(()=>{var y,f,C,S;if(!p||t===null)return;const n=i.current;if(!n)return;const u=p.features.filter(N=>{var m;const g=(m=N.properties)==null?void 0:m.Place;return g!==void 0&&Number(g)===Number(t)});if(u.length!==0)try{const N=new he.LngLatBounds;let g=0;const m=Math.max(1,Math.floor(u.length/2e3));for(let x=0;x<u.length;x+=m){const d=u[x];if(!((y=d.geometry)!=null&&y.coordinates))continue;const r=d.geometry.type,M=d.geometry.coordinates;r==="Point"?(N.extend(M),g++):r==="LineString"||r==="MultiPoint"?(M.forEach(L=>N.extend(L)),g++):r==="Polygon"||r==="MultiLineString"?((f=M[0])==null||f.forEach(L=>N.extend(L)),g++):r==="MultiPolygon"&&((S=(C=M[0])==null?void 0:C[0])==null||S.forEach(L=>N.extend(L)),g++)}!N.isEmpty()&&g>0&&n.fitBounds(N,{padding:50,duration:1e3})}catch(N){console.error("Fly to error:",N)}},[t]),o.useEffect(()=>((async()=>{(!v.current||i.current)&&console.log("开始初始化地图...");try{const u=new he.Map({container:v.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});u.addControl(new he.NavigationControl,"top-right"),u.on("load",()=>{console.log("地图样式加载完成")}),u.on("error",y=>{var S;const f=String(((S=y==null?void 0:y.error)==null?void 0:S.message)||(y==null?void 0:y.message)||"");f.includes("ERR_ABORTED")||f.includes("AbortError")||f.includes("Canceled")||f.includes("cancelled")||console.error("地图错误:",y)}),i.current=u,console.log("地图初始化完成")}catch(u){console.error("地图初始化错误:",u)}})(),()=>{i.current&&(i.current.remove(),i.current=null,Xe.current=!1)}),[]),o.useEffect(()=>{const n=i.current;if(!n)return;const u=()=>{n.getLayer("simple-tiles")&&n.setLayoutProperty("simple-tiles","visibility",oe?"visible":"none")};n.isStyleLoaded()?u():n.once("style.load",u)},[oe]);const Ye=async n=>{var y;const u=(y=n.target.files)==null?void 0:y[0];if(u){me.current&&me.current.abort(),ue(!0),re(0),ee("正在读取文件..."),l(null),ie(!0),z(URL.createObjectURL(u));try{console.log("开始读取文件:",u.name,"大小:",u.size);let f=[];const C=u.name.endsWith(".zip"),S=u.name.endsWith(".shp");if(!C&&!S){l("请上传 .zip 文件 (包含 Shapefile)"),ue(!1);return}ee("正在读取文件...");const N=await u.arrayBuffer();re(30),ee("正在解析 Shapefile...");const g=await Re(N);console.log("Shapefile 解析完成:",g),g.type==="FeatureCollection"?f=g.features:Array.isArray(g)?f=g:g.type==="Feature"&&(f=[g]),console.log("解析到的 features 数量:",f.length),re(95),ee(`已解析 ${f.length} 个 Features...`);const m={type:"FeatureCollection",features:f};re(98),ee("正在处理 Place 数据...");const x=new Map;m.features.forEach(d=>{var L;const r=Number(((L=d.properties)==null?void 0:L.Place)??0);x.has(r)||x.set(r,{id:r,name:`Place ${r}`,featureCount:0});const M=x.get(r);M&&M.featureCount++}),re(100),ee("加载完成!"),setTimeout(()=>{We(!0),I(m),E(Array.from(x.values()).sort((d,r)=>d.id-r.id)),ue(!1),ie(!1),c(!1)},500)}catch(f){const C=f instanceof Error?f.message:"未知错误";l(`加载失败: ${C}`),ue(!1),c(!1)}}},Je=se.reduce((n,u)=>(n[u.category]||(n[u.category]=[]),n[u.category].push(u),n),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[Ie&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(ze,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:Ve}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Pe}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Pe,"%"]})]})}),D&&!Ie?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(ct,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${a}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[a,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:Be,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(dt,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var n;return(n=Te.current)==null?void 0:n.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(ze,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Te,type:"file",accept:".shp,.zip",onChange:Ye,className:"hidden"})]})}):null,j&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:j}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(ut,{size:14}),"刷新重试"]})})]}),R&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(mt,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>F(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(ht,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>$e(!oe),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${oe?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${oe?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:t??"",onChange:n=>h(n.target.value?Number(n.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Ee=p==null?void 0:p.features)==null?void 0:Ee.length)??0,")"]}),k.map(n=>e.jsxs("option",{value:n.id,children:[n.name," (",n.featureCount,")"]},n.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:s,onChange:n=>w(n.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Je).map(([n,u])=>[e.jsx("optgroup",{label:n.charAt(0).toUpperCase()+n.slice(1),children:u.map(y=>e.jsx("option",{value:y.key,children:y.label},y.key))},n)])})]}),_&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(pt,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:_.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:_.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:_.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:_.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:_.nanCount})]})]})]})]})]}),!R&&e.jsx("button",{onClick:()=>F(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(gt,{size:18})}),He&&W&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[W.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",W.properties.Place]}),W.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",W.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",W.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>Ce(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Fe,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:se.map(n=>{var y;const u=(y=W.properties)==null?void 0:y[n.key];return u==null?null:e.jsxs("button",{onClick:()=>w(n.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${s===n.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:n.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof u=="number"?u.toFixed(2):u})]},n.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>h(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:v,className:"w-full h-full"}),_e&&p&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Oe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>Ae(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Fe,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Ke(H==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${H==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:H==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:s.includes("K_")?(()=>{var f,C;const n=Math.round(((f=fe[s])==null?void 0:f.max)??30),u=Array.from({length:26},(S,N)=>{const g=N/25;let m,x,d;if(g<.167){const r=g/.167;m=0,x=0,d=Math.round(139+116*r)}else if(g<.333){const r=(g-.167)/.167;m=0,x=Math.round(255*r),d=255}else if(g<.5){const r=(g-.333)/.167;m=0,x=Math.round(255-128*r),d=Math.round(255-255*r)}else if(g<.667){const r=(g-.5)/.167;m=Math.round(255*r),x=255,d=0}else if(g<.833){const r=(g-.667)/.167;m=255,x=Math.round(255-128*r),d=0}else{const r=(g-.833)/.167;m=255,x=Math.round(127-127*r),d=0}return`#${m.toString(16).padStart(2,"0")}${x.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}`}),y=Array.from({length:n+1},(S,N)=>u[Math.round(N*25/n)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((C=se.find(S=>S.key===s))==null?void 0:C.label)||s}),e.jsx("div",{className:"flex flex-wrap gap-px",children:y.map((S,N)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:S}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:N})]},N))})]})})():s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?(()=>{var d;const n=(()=>{var L;let r=1/0,M=-1/0;for(const A of p.features){const P=Number((L=A.properties)==null?void 0:L[s]);Number.isNaN(P)||P===-9999||(P<r&&(r=P),P>M&&(M=P))}return{min:r===1/0?0:r,max:M===-1/0?0:M}})(),u=t!==null&&_?{min:_.min,max:_.max}:n,y=((d=se.find(r=>r.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(u.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(u.max-n.min)/(n.max-n.min))):0,S=Math.max(0,C-f),N=ne("#3182bd"),g=ne("#e6550d"),m=ae(N,g,f),x=ae(N,g,C);return e.jsxs("div",{children:[H==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${S*100}%`,background:`linear-gradient(to right, ${m}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:u.min.toFixed(2)}),e.jsx("span",{children:u.max.toFixed(2)})]})]}),H==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(2)}),e.jsx("span",{children:n.max.toFixed(2)})]})]})]})})():s.includes("elev")||s.includes("slope")?(()=>{var d;const n=(()=>{var L;let r=1/0,M=-1/0;for(const A of p.features){const P=Number((L=A.properties)==null?void 0:L[s]);Number.isNaN(P)||P===-9999||(P<r&&(r=P),P>M&&(M=P))}return{min:r===1/0?0:r,max:M===-1/0?0:M}})(),u=t!==null&&_?{min:_.min,max:_.max}:n,y=((d=se.find(r=>r.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(u.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(u.max-n.min)/(n.max-n.min))):0,S=Math.max(0,C-f),N=ne("#31a354"),g=ne("#756bb1"),m=ae(N,g,f),x=ae(N,g,C);return e.jsxs("div",{children:[H==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${S*100}%`,background:`linear-gradient(to right, ${m}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:u.min.toFixed(1)}),e.jsxs("span",{children:[u.max.toFixed(0),"+"]})]})]}),H==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(1)}),e.jsxs("span",{children:[n.max.toFixed(0),"+"]})]})]})]})})():(()=>{var d;const n=(()=>{var L;let r=1/0,M=-1/0;for(const A of p.features){const P=Number((L=A.properties)==null?void 0:L[s]);Number.isNaN(P)||P===-9999||(P<r&&(r=P),P>M&&(M=P))}return{min:r===1/0?0:r,max:M===-1/0?0:M}})(),u=t!==null&&_?{min:_.min,max:_.max}:n,y=((d=se.find(r=>r.key===s))==null?void 0:d.label)||s,f=n.max>n.min?Math.max(0,Math.min(1,(u.min-n.min)/(n.max-n.min))):0,C=n.max>n.min?Math.max(0,Math.min(1,(u.max-n.min)/(n.max-n.min))):0,S=Math.max(0,C-f),N=ne("#31a354"),g=ne("#756bb1"),m=ae(N,g,f),x=ae(N,g,C);return e.jsxs("div",{children:[H==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[y,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:t!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${f*100}%`,width:`${S*100}%`,background:`linear-gradient(to right, ${m}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:u.min.toFixed(2)}),e.jsx("span",{children:u.max.toFixed(2)})]})]}),H==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[y,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:n.min.toFixed(2)}),e.jsx("span",{children:n.max.toFixed(2)})]})]})]})})()})]}),!_e&&e.jsx("button",{onClick:()=>Ae(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Oe,{size:18})})]})},mn=()=>{const[v,i]=o.useState(!1),[D,c]=o.useState(!1),[a,b]=o.useState(!1),[j,l]=o.useState({x:0,y:0}),[p,I]=o.useState("/data/fig/lili/lili_01.png"),[k,E]=o.useState("Exploring the intersection of technology and creativity."),t=st(),h=it(),w=t.pathname.split("/").filter(Boolean)[0]||"",R={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},F=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],_=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],J=()=>{const z=Math.floor(Math.random()*F.length);return F[z]},Q=()=>{const z=Math.floor(Math.random()*_.length);return _[z]};return o.useEffect(()=>{w===""?I(J()):R[w]?I(R[w]):I(J()),E(Q())},[w]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 flex flex-col ",children:e.jsxs("div",{className:"w-full bg-white border border-neutral-10 flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b p-4 flex justify-between items-center bg-white z-30 shrink-0 relative",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>i(!v),className:"md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900",children:"☰"}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("button",{onClick:()=>{b(!0);const z=j.x+360*2+Math.random()*360,De=j.y+360*2+Math.random()*360;l({x:z,y:De}),setTimeout(()=>{const ie=["planning","design","game","platform","tutorial","about"],W=ie[Math.floor(Math.random()*ie.length)];h(`/${W}`),b(!1)},1e3)},className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all",title:"🎲 Explore a random project",children:[e.jsx("div",{className:"w-5 h-5",style:{perspective:"100px"},children:e.jsxs("div",{className:"w-full h-full relative transition-transform duration-1000 ease-out",style:{transform:`rotateX(${j.x}deg) rotateY(${j.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"5px",height:"5px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(180deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-5 marg w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:" rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"})]}),e.jsx("div",{className:"absolute w-full h-full bg-white border-gray-400  justify-center rounded flex  p-0.5",style:{transform:"rotateX(90deg) translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3 border w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateX(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]})]})}),e.jsx("span",{className:"text-sm font-medium",children:"Jump"})]}),e.jsxs("nav",{className:"hidden sm:flex gap-0",children:[e.jsx(Y,{to:"/",onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${w===""?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:"Home"})}),[{key:"planning",label:"Planning",short:"Planning"},{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(z=>e.jsx(Y,{to:`/${z.key}`,onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${w===z.key?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:z.label})},z.key))]}),e.jsxs("div",{className:"sm:hidden relative",children:[e.jsxs("button",{onClick:()=>c(!D),className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 text-neutral-900 hover:text-neutral-900 hover:bg-neutral-50",children:[e.jsx("span",{className:"text-sm font-medium",children:w===""?"Home":w.charAt(0).toUpperCase()+w.slice(1)}),D?"✕":"▼"]}),D&&e.jsxs("div",{className:"absolute right-0 top-10 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 min-w-[160px]",children:[e.jsx(Y,{to:"/",onClick:()=>{c(!1),i(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${w===""?"bg-neutral-100 text-neutral-900":"text-neutral-600 hover:bg-neutral-50"}`,children:"Home"}),[{key:"planning",label:"Planning"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}].map(z=>e.jsx(Y,{to:`/${z.key}`,onClick:()=>{c(!1),i(!0)},className:`block px-4 py-3 text-sm font-medium transition-all ${w===z.key?"bg-neutral-100 text-neutral-900":"text-neutral-600 hover:bg-neutral-50"}`,children:z.label},z.key))]})]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[v&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 bg-white w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[p&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:p,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 italic mb-3",children:['"',k,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 bg-white flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[p&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:p,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(we,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(we,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(we,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 italic",children:['"',k,'"']})})]})]})}),e.jsx("section",{className:"flex-1 bg-white relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(rt,{children:[e.jsx(O,{path:"/",element:e.jsx(cn,{})}),e.jsx(O,{path:"/planning",element:e.jsx(ce,{data:Ne,type:"planning"})}),e.jsx(O,{path:"/planning/:id",element:e.jsx(de,{data:Ne,type:"planning"})}),e.jsx(O,{path:"/design",element:e.jsx(ce,{data:ke,type:"design"})}),e.jsx(O,{path:"/design/:id",element:e.jsx(de,{data:ke,type:"design"})}),e.jsx(O,{path:"/game",element:e.jsx(ce,{data:Me,type:"game"})}),e.jsx(O,{path:"/game/:id",element:e.jsx(de,{data:Me,type:"game"})}),e.jsx(O,{path:"/platform",element:e.jsx(ce,{data:Le,type:"platform"})}),e.jsx(O,{path:"/platform/:id",element:e.jsx(de,{data:Le,type:"platform"})}),e.jsx(O,{path:"/tutorial",element:e.jsx(ce,{data:Se,type:"tutorial"})}),e.jsx(O,{path:"/tutorial/:id",element:e.jsx(de,{data:Se,type:"tutorial"})}),e.jsx(O,{path:"/clusteringeomap",element:e.jsx(un,{})}),e.jsx(O,{path:"/about",element:e.jsx(on,{})}),e.jsx(O,{path:"/contact",element:e.jsx(ln,{})})]})})]})]})})};function hn(){const[v,i]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ot,{children:e.jsx(mn,{})}),!v&&e.jsx(ft,{onFinish:()=>i(!0)})]})}lt.createRoot(document.getElementById("root")).render(e.jsx(hn,{}));
