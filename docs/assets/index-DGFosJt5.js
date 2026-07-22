const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-B26NuqWS.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-DsdI-g3Q.js","./PeaceEliteHustCampusDemo-CKWwrGNJ.js","./BMWMetaIslandDemo-DM2oqedJ.js","./riffle-BuqCfcTA.js","./genstyle-DuJ38oKx.js","./genshot-8Uy4GIux.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,L as ae,u as at,c as rt,d as st,e as it,f as H,H as lt,g as ot}from"./react-vendor-6zld6QO8.js";import{A as qe,m as Ae}from"./framer-DvVmTyA1.js";import{M as dt,r as ct,a as ut}from"./markdown-q3GborES.js";import{b as Ue}from"./geo-Z02C8O4I.js";import{m as Ce}from"./maplibre-BedwuVXB.js";import{U as ze,L as mt,D as ht,R as gt,M as pt,C as xt,a as ft,b as bt,X as Ge,c as Fe}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))o(b);new MutationObserver(b=>{for(const c of b)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function x(b){const c={};return b.integrity&&(c.integrity=b.integrity),b.referrerPolicy&&(c.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?c.credentials="include":b.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(b){if(b.ep)return;b.ep=!0;const c=x(b);fetch(b.href,c)}})();function vt({onFinish:i}){const[r,x]=s.useState(!0),o=s.useRef(null),b=s.useRef({x:-1e3,y:-1e3});return s.useEffect(()=>{const c=o.current;if(!c)return;const n=c.getContext("2d");if(!n)return;let t,l=[];const N=()=>{c.width=window.innerWidth,c.height=window.innerHeight},w=u=>{b.current={x:u.clientX,y:u.clientY}},U=u=>{u.touches.length>0&&(b.current={x:u.touches[0].clientX,y:u.touches[0].clientY})};window.addEventListener("resize",N),window.addEventListener("mousemove",w),window.addEventListener("touchmove",U),N();class I{constructor(){this.x=Math.random()*c.width,this.y=Math.random()*c.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>c.width)&&(this.vx*=-1),(this.y<0||this.y>c.height)&&(this.vy*=-1);let z=b.current.x-this.x,G=b.current.y-this.y,R=Math.sqrt(z*z+G*G),E=z/R,_=G/R;const $=150;let ee=($-R)/$;R<$&&(this.x-=E*ee*this.density*.5,this.y-=_*ee*this.density*.5)}draw(){n&&(n.fillStyle="rgba(255, 255, 255, 0.8)",n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fill())}}for(let u=0;u<120;u++)l.push(new I);const F=()=>{n.clearRect(0,0,c.width,c.height);for(let u=0;u<l.length;u++){l[u].update(),l[u].draw();for(let z=u+1;z<l.length;z++){const G=l[u].x-l[z].x,R=l[u].y-l[z].y,E=Math.sqrt(G*G+R*R);E<100&&(n.beginPath(),n.strokeStyle=`rgba(255, 255, 255, ${.2*(1-E/100)})`,n.lineWidth=.6,n.moveTo(l[u].x,l[u].y),n.lineTo(l[z].x,l[z].y),n.stroke())}}t=requestAnimationFrame(F)};return F(),()=>{cancelAnimationFrame(t),window.removeEventListener("resize",N),window.removeEventListener("mousemove",w),window.removeEventListener("touchmove",U)}},[]),e.jsx(qe,{onExitComplete:i,children:r&&e.jsxs(Ae.div,{onClick:()=>x(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(Ae.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(Ae.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const yt=`---
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
`,wt=`---
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
image: ["/data/fig/AAAI2025.jpg"]
---

# 效果展示

“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” 
> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/01.png)
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/02.png)

> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告![alt text]
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/03.png)
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/05.png)

> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/04.png)

![alt text](/data/fig/AAAI2025.jpg)`,jt=`---
id: "03"
slug: "local-climate-zones-urban-heat-resilience"
title: "Local Climate Zones and Urban Heat Resilience"
category: "GIS & Spatial Analysis"
year: "2025-present"
description: "An empirical study in different climate zones in United States"
tech: ["GIS","Spatial Analysis"]
icon: "/data/fig/lcz_logo.jpg"
---

# 效果展示
“局部气候区与城市热岛效应韧性：纽约实证研究”
> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告
![alt text](/data/fig/planning/03-local-climate-zones-urban-heat-resilience/01.png)

abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance."
challenge: "Translating complex urban form findings into practical urban planning policies remains challenging."
solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles."



`,kt=`---
id: "04"
slug: "urban-heat-resilience-machine-learning"
title: "Assessing Urban Heat Resilience"
category: "Machine Learning"
year: "2025-present"
description: "Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach"
tech: ["GIS","Machine Learning"]
icon: "/data/fig/ml_logo.jpg"
image: ["/data/fig/AAAI2026.jpg"]
---

“利用机器学习评估城市形态对不同尺度下热韧性的非线性影响”
> 2025.10，在美国明尼阿波利斯举行的第65届美国大学规划学院协会（ACSP）会议上作口头报告
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/01.png)<br>
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/02.png)<br>
> 2026.2，在新加坡举行的第40届AAAI城市规划人工智能研讨会上作海报展示
![alt text](/data/fig/AAAI2026.jpg)<br>
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/03.png)<br>
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/04.png)<br>
> 2025.5.10 在线上参加佛罗里达大学组织的AI和城市工作坊
> 2025.8.7 在英国剑桥大学进行工作坊交流
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/05.png)
![alt text](/data/fig/planning/04-urban-heat-resilience-machine-learning/06.png)

## abstract: 
"Climate change has been a pressing global issue in recent decades as it increasingly influences human life through extreme weather, ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE). In addition, the results indicate that urban form factors have nonlinear relationships with urban land surface extreme heat and associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities."
challenge: "The majority of existing studies have relied on traditional regression models that assume linear relationships."
solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods."

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

download link: https://earthexplorer.usgs.gov/
![alt text](usgs.png)
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

`,Nt=`---
id: "05"
slug: "participatory-urban-regeneration-empowered-by-artificial-intelligence"
title: "人工智能赋能下的参与式城市更新 Participatory Urban Regeneration Empowered by Artificial Intelligence"
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

![alt text](/data/fig/planning/05-participatory-urban-regeneration-empowered-by-artificial-intelligence/01.png)
![alt text](/data/fig/planning/05-participatory-urban-regeneration-empowered-by-artificial-intelligence/02.png)
https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm

<iframe src="https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

![效果展示](/data/fig/PU-1.jpg)

![效果展示](/data/fig/PU-2.jpg)
`,Mt=`---
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
`,Ct=`---
id: "01"
slug: "1037pinpin"
title: "1037pinpin - Campus Item Exchange Platform"
category: "UI&UX Design"
year: "2023-03-01~2024-03-01"
description: "A campus-based item exchange platform facilitating sustainable sharing among students."
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/1037pinpin_logo.jpg"
image: ["/data/fig/1037pinpin.jpg"]
---

# 效果展示

![效果展示](/data/fig/1037pinpin.jpg)

## （0）项目背景 <br>
项目时间：2023-03-01~2024-03-01 <br>
这个项目是我在本科进入华科pivot studio组后负责的主要项目，我担任主要的产品+设计的工作。在与产品、前端和移动端共同脑暴得到的方案。从低保真原型开始到最后的高保真图是我0-1独立完成的作品。也是我开始做UI design的起点。我们在计算机学院申请了大创课题。<br>
遗憾的是，由于人员架构的调整，我们的移动端、app都搭建完成后，由于运营入手的不足。我们最终转而搭建了更易维护的QQ社群。<br>

## （1）产品的介绍<br>
拼拼，是由pivotstudio团队孵化的⼀款校园平台类产品，是⼀个⾯向华科学⽣的招募、拼团平台。<br>
⽤户可以通过这款软件发布⾃⼰的招募、拼团需求（包括⽐赛队友招募、游戏拼团、剧本杀拼⻋等），浏览⽅与发帖⽅可通过私聊、个⼈主⻚快速了解对⽅，进⾏双向选择，满意就拼，效率较⾼。<br>

## （2）产品的定位<br>
拼拼是⼀种新型的”校园拼单”模式，基于对朵朵校友圈、表⽩墙等校园产品的思考，针对华科校园，囊括多种”拼单”情景，为同学们搭建起能⾼效沟通、双向选择、信息对等的平台，提升同学们的”拼单”效率，便捷、丰富同学们的⽣活。<br>
Slogan：拼拼⼀下，就差你了！<br>

## (3)产品的特点<br>
随时随地，想拼就拼。只要通过校园认证，就可⽆门槛发布拼单信息、参与别⼈的拼单活动，认识更多志同道合的朋友，更会学习更会玩。<br>
采⽤校园邮箱验证，确保⽤户全为华科学⽣；⽤学号辨认学⽣⾝份，使得每⼀次拼单都安全可靠、可追根朔源。<br>
采⽤“到截⽌⽇期拼拼贴⾃动删除”的⽅式，保证了在相应时间段⾸⻚中出现的均为真需求，提⾼了信息有效率。显⽰实时参与拼拼的⼈员数量，更浓烈的社区氛围，更强的参与感。<br>
采⽤标签选择的功能，使⽤户能精准筛选需求，节省时间，拼单成功率⾼。<br>
设置个⼈主⻚，让⽤户展⽰⾃⼰的个性，更快找到志同道合的朋友，提升拼单效率与满意度。<br>
设置私聊功能，优化了交易流程，不仅提升⽤户拼单体验，也解决了部分⽤户的社交需求。<br>

## （4）⽤户群体分析<br>
拼拼是⼀款⾯向华中科技⼤学全体学⼦的应⽤。 受众群体具有⼀定的⾼素质、 ⾼质量， 并且⽤户注册与校园邮箱即个⼈⾝份绑定， 使⽤应⽤时的⾔⾏会受到约束。 学⽣与校园邮箱⼀⼀对应， 从根源上解决了⼀⼈多号⽽形成的诈骗、 营销等事件。<br>

## （5）⽬前， ⼤学⽣社交困难。 主要包含下⾯五个⽅⾯的困难：<br>
缺少社交途径； ⼤学校园⼤、 ⼈数多、 充斥的⽂化更加多样、 不可控的事物增多、 ⼈们之间的联系也不再像初中⾼中时那般紧密。 许多同学在进⼊⼤学后⽆法很好适应校园， 缺少途径去结交新朋友， 不乏有许多⼤学⽣⼤学四年都”独来独往“， 缺少知⼼朋友。<br>
⽆法跨出社交第⼀步： 受⽂化等因素的影响， 许多同学在进⼊⼤学前， 缺少对于社交能⼒的锻炼， 如何与新认识的朋友开启⼀段愉悦的对话成为他们的难题。 许多⼤学⽣能通过社团、 学⽣组织加上许多新朋友的联系⽅式， 他们渴望与很多⼈成为好朋友，但⼏乎不知道如何与他们开启⼀段有意义的对话， 使得最后只是和他们成为了”社团同事“。<br>
忧虑陌⽣⼈社交的安全性： ⽬前学校有表⽩墙等途径帮助同学们进⾏”拼单“信息发布， 但没有⼈能监管这些消息， ⽆法辨别这些信息是否是诈骗或营销， 使得许多⼤学⽣尤其是⼥⽣主动放弃与陌⽣⼈社交的途径。<br>
拒绝过度社交： Z时代的年轻⼈是很不⼀样的⼀代， 许多当代⼤学⽣以⾃我为中⼼， 强调边界， 重视⾃⼰的精神世界建设， 拒绝⽆⽤的社交。 这类⽤户会跟别⼈进⾏”拼单“， 但绝不是出于社交需求， ⽽是为了寻求”便宜“”⾼效“等。 他们需要⼀种途径， 让拼单仅仅是拼单， 拒绝对⽅进⼊⾃⼰的朋友圈， 拒绝暴露⾃⼰过多隐私， 拒绝过度社交。<br>
拼拼将迎合以上⽤户的痛点， 以拼单事件为载体， 提供私聊功能， 为⽤户提供⼀个安全⾼效、 能双向选择、 信息对等的平台， 提升同学们的”拼单”效率， 便捷、 丰富同学们的⽣活。<br>`,At=`---
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
`,It=`---
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
image: ["/data/fig/Genshot-v2.jpg"]
---

# 效果展示

![效果展示](/data/fig/Genshot-v2.jpg)
`,Pt=`---
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
`,Et=`---\r
id: "01"\r
slug: "72-hour-game-jam"\r
title: "腾讯×华科72小时极限开发挑战赛"\r
category: "Game"\r
year: "2022-5-27~2022-5-30"\r
description: "腾讯×华科72小时极限开发挑战赛！一款在 72 小时 Game Jam 中完成的物资配送主题游戏，向疫情期间默默付出的配送人员与志愿者致敬。"\r
tech: ["Game Design", "Level Design", "Puzzle Mechanics"]\r
challenge: "如何在短时间内完成一款兼具主题表达与可玩性的 Game Jam 作品，并让玩家感受到配送工作的责任与挑战。"\r
solution: "以物资配送为核心玩法，玩家通过连接道路、避开障碍并在限定时间内完成投送任务，在轻量的解谜体验中向城市无名英雄致敬。"\r
hasDemo: true\r
icon: "/data/fig/Gamejam_logo.jpg"\r
image: ["/data/fig/Gamejam.png"]\r
---\r
\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/NamelessRoad.mp4"></video>\r
</div>\r
\r
![效果展示](/data/fig/Gamejam.png)\r
\r
# 2022 Tencent Games × HUST 72-Hour Game Jam\r
\r
## 项目背景\r
\r
2022 年正值疫情时期，许多人因居家隔离无法外出，而一批默默无闻的配送人员和志愿者承担起了保障居民生活物资供应的重要职责。相比聚焦疫情本身，我们更希望通过游戏向这些为城市正常运转默默付出的“无名英雄”致敬，让玩家体验他们在配送过程中的责任与挑战。这个项目获得了金奖。\r
\r
## 项目时间\r
\r
2022-5-27 ~ 2022-5-30\r
\r
## 我的角色\r
\r
本项目开发于 2022 腾讯游戏 × 华中科技大学游戏极限开发挑战赛（72-Hour Game Jam）期间。我主要担任游戏策划（Game Designer），负责游戏主题、核心玩法策划和关卡设计。\r
\r
## 核心玩法\r
\r
游戏以物资配送为核心玩法。玩家需要将生活物资安全送往指定居民家中。在运输过程中，道路上会随机出现路障、树木等各种障碍物，玩家需要灵活规划路线并避开障碍，在限定时间内顺利完成配送任务。\r
\r
## 设计目标\r
\r
希望玩家在轻松有趣的游戏体验中，感受到疫情期间物流配送工作的不易，以及每一位配送人员背后默默承担的社会责任。\r
\r
## Project Overview\r
\r
This project was developed during the 2022 Tencent Games × Huazhong University of Science and Technology 72-Hour Game Jam. I served as the Game Designer, responsible for the game concept, core gameplay, and level design.\r
\r
Inspired by the COVID-19 pandemic, the game pays tribute to delivery workers and volunteers who ensured essential supplies reached residents during lockdowns.\r
\r
The gameplay is based on a road-connection and delivery route mechanic. Players build delivery paths, avoid obstacles such as roadblocks and fallen trees, and deliver supplies to residents within a limited time. Through this simple puzzle experience, the game highlights the challenges and social value of emergency logistics during the pandemic.\r
`,Tt=`---\r
id: "02"\r
slug: "peace-elite-hust-campus"\r
title: "和平精英绿洲世界 × 华中科技大学高校共建"\r
category: "Game"\r
year: "2022-09-01~2023-06-30"\r
description: "参与华中科技大学联动和平精英绿洲世界高校共建项目，完成南一楼数字化复原、场景设计与多级 LOD 优化。"\r
tech: ["3D Modeling", "Oasis Engine", "UE4 Workflow", "LOD Optimization", "Scene Design"]\r
challenge: "如何在自营绿洲引擎工作流下完成高精度校园地标复原，并在性能限制下实现可用的多级细节模型。"\r
solution: "基于测绘资料完成南一楼三维建模、材质制作与场景优化，经过多轮蓝图讨论和 LOD 调整，最终实现兼顾精度与性能的校园数字资产。"\r
hasDemo: true\r
icon: "/data/fig/GameforPeace&HUST_logo.jpg"\r
image: ["/data/fig/GameforPeace&HUST.png"]\r
---\r
\r
# 和平精英绿洲世界 × 华中科技大学高校共建\r
\r
## 项目时间\r
2022-09-01 ~ 2023-06-30\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_1.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_2.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_3.mp4"></video>\r
</div>\r
\r
![效果展示](/data/fig/GameforPeace&HUST.png)\r
\r
## 项目概述\r
\r
我参与了华中科技大学联动“和平精英绿洲世界”的高校合作共建项目，负责华科地标建筑“南一楼”的数字化复原与场景设计。\r
\r
基于建筑测绘资料完成建筑三维建模、材质制作及场景优化，实现校园地标在虚拟世界中的高精度还原。学习并使用绿洲引擎（基于 UE4 逻辑）完成模型导入、贴图适配及 LOD 优化，解决跨软件工作流中的技术问题。\r
\r
与新闻传播学院及跨学科团队协同合作，参与校园数字文化资产建设，探索虚拟空间中的校园记忆表达与人文叙事。\r
\r
## 实际开发过程\r
\r
实际过程中，耗时漫长，因为和平精英采用了一套自营的绿洲引擎，需要一定的学习成本。\r
\r
此外，在早期的校园蓝图上，有多轮讨论。尽管我很擅长建模工作，但是真正用到游戏引擎里面的时候，需要设计多个 LOD 模式。一开始设计了很高精度的模型，随着需求一点点降低精度，达到了最终可以实现多精度的场景建模需求。\r
\r
## 项目感言\r
\r
高校不只是吃饭、睡觉、学习的地方，它更是一个天然的社交空间。我们希望通过绿洲启元创作工具等数字化技术手段，把校园社交文化落在绿洲世界里，创造一个理想的第二校园生活。\r
\r
“毕业，并不意味着故事结束。”\r
\r
在华科建筑学五年的经历始终是我人生中难忘的留恋。感谢和平精英、新闻学院熊硕老师和项目组的朋友们，拥有属于我的毕业短片，也拥有了在游戏世界的数字资产。\r
\r
\r
## 绿洲高校贴文链接\r
https://mp.weixin.qq.com/s/IcG4OHyM48ZXQ3_6--Ii1w\r
https://gp.qq.com/gicp/news/684/18323914.html\r
https://www.9game.cn/news/7868658.html\r
\r
`,_t=`---\r
id: "03"\r
slug: "bmw-meta-island"\r
title: "同济& BMW 联合挑战营 - 一杯咖啡的游戏旅程"\r
category: "Game"\r
year: "2022-10-10~2022-12-10"\r
description: "同济与 BMW 联合挑战营中的元宇宙品牌营销方案，以人格测试、场景探索与 O2O 联动建立年轻用户与品牌之间的情感连接。"\r
tech: ["Unity", "Blender", "Figma", "Metaverse Design", "O2O Marketing"]\r
challenge: "如何让 Z 世代在数字化体验中自然感知 BMW 的品牌价值，并愿意从线上体验继续走向线下互动。"\r
solution: "以咖啡联名作为现实入口，结合人格测试、车型匹配、森林与城市探索、BMW 元素收集和 Carbon Energy 机制，构建完整的 Meta Island 沉浸式品牌体验。"\r
hasDemo: true\r
icon: "/data/fig/BMW&TJ_logo.jpg"\r
image: ["/data/fig/BMW&TJ.png"]\r
---\r
\r
# BMW Meta Island\r
\r
<div style="display:flex; gap:40px; align-items:flex-start; flex-wrap:wrap;">\r
<div style="flex:1 1 720px; min-width:0;">\r
\r
<p style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#94a3b8; margin-bottom:12px;">\r
Project Overview\r
</p>\r
<p><strong>项目时间：</strong>2022-10-10 ~ 2022-12-10</p>\r
<p>这个项目是我在本科大三期间参加的同济大学与 BMW 联合挑战营。</p>\r
<p>当时元宇宙（Metaverse）概念正处于高速发展阶段，因此挑战营围绕\r
"Metaverse 下汽车行业的新体验、新场景、新产品" 展开创新设计。\r
</p>\r
<p>我们最终选择了 <strong>Experience</strong> 赛道，希望打造线上线下融合的品牌体验旅程，\r
将 BMW 的品牌文化、可持续理念以及数字体验结合起来。\r
</p>\r
<p>我担任项目组长，负责整体方案设计、项目管理以及最终英文路演展示。</p>\r
<br />\r
\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_1.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_2.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_3.mp4"></video>\r
</div>\r
\r
![效果展示](/data/fig/BMW&TJ.png)\r
\r
<br />\r
<h2>项目背景</h2>\r
<p>随着 Z 世代逐渐成为汽车消费市场的重要群体，传统品牌宣传方式已难以建立年轻用户与品牌之间的情感联系。相比产品本身，他们更加关注体验、兴趣驱动以及社交互动，并习惯于通过数字平台获取品牌信息。\r
</p>\r
<p>\r
因此，我们围绕\r
<strong>「如何让年轻用户在数字化体验中感受 BMW 品牌价值，并建立长期情感连接」</strong>\r
这一问题，提出了融合元宇宙、游戏化设计以及 O2O 营销模式的品牌体验方案——\r
<strong>Meta Island</strong>。\r
</p>\r
<br />\r
<h2>项目方案</h2>\r
<p>\r
Meta Island 以“一杯咖啡的时间”作为现实世界入口，与咖啡品牌联名，\r
在咖啡杯上放置二维码，引导用户进入线上元宇宙世界。\r
</p>\r
<p>\r
用户首先完成人格测试，系统根据测试结果生成专属角色，并匹配最符合其性格特征的 BMW 车型，\r
使车型推荐更加个性化且富有趣味性。\r
</p>\r
<p>\r
随后玩家进入 Meta Island，在森林、城市等多个场景中自由探索，\r
收集车辆零件、BMW 品牌元素以及 Carbon Energy（碳能量），逐步完成游戏任务。\r
</p>\r
<p>\r
游戏结束后，玩家利用收集到的零件组装属于自己的 BMW，\r
并进入最终驾驶体验，形成完整的品牌互动闭环。\r
</p>\r
<br />\r
<h2>商业模式</h2>\r
<p>项目采用 Online-to-Offline（O2O）模式。</p>\r
<p>\r
一方面，通过咖啡品牌合作，将年轻用户碎片化时间转化为品牌体验入口；\r
另一方面，游戏中获得的 Carbon Credits 可在线下 BMW 门店兑换礼品、\r
试驾体验及品牌活动资格，实现线上流量向线下消费的自然转化。\r
</p>\r
<br />\r
<h2>项目创新</h2>\r
<p>本项目最大的创新点并非游戏本身，而是将 BMW 品牌价值贯穿整个体验流程。</p>\r
<p>\r
从人格测试、车型推荐，到品牌元素探索，再到 Carbon Energy 可持续奖励机制，\r
每一个交互都围绕 BMW 品牌理念展开，使用户在游戏过程中自然理解品牌文化，\r
而不是被动接受广告宣传。\r
</p>\r
<br />\r
<h2>技术实现与落地</h2>\r
<p>\r
项目采用 Blender 完成三维场景建模，Unity 负责游戏开发，\r
Figma 完成整体交互与 UI 原型设计。\r
</p>\r
<p>\r
整体开发重点包括场景搭建、角色交互、任务系统以及积分兑换机制。\r
若由成熟游戏团队开发，预计整体周期约 3–6 个月，具有较高商业落地可行性。\r
</p>\r
</div>\r
\r
`,Rt=`---\r
id: "04"\r
slug: "guangzhou-xinyuan-tech"\r
title: "广州心源科技有限公司（Bilibili 游戏子公司）"\r
category: "Game"\r
year: "2023-7-5~2023-9-1"\r
description: "我在广州心源科技有限公司完成的第一段正式游戏实习，完整参与了主场景概念设计、单体制作与 UE5 场景搭建的全流程。"\r
tech: ["Scene Concept Design", "Polygon Modeling", "UV Unwrapping", "Texture Painting", "UE5", "Stable Diffusion"]\r
abstract: "这是我第一段正式游戏实习，也是第一次完整参与游戏主场景概念设计与制作流程。"\r
challenge: "如何将大湾区文化、磁带未来与科幻军事等元素整合为具有明确空间特征的主场景概念，并在后续制作中完成从概念到 UE5 落地的完整闭环。"\r
solution: "先尝试将广州城市元素整合为宏观地图，随后在评审后聚焦广州琶醍，以工业遗产和滨江空间为基础，结合建模与 Stable Diffusion 完成未来场景概设；在制作阶段再通过单体原画、Polygon 建模、UV、贴图与 UE5 场景搭建打通完整流程。"\r
icon: "/data/fig/bilibili_logo.jpg"\r
image: ["/data/fig/bilibili.png"]\r
---\r
\r
# 广州心源科技有限公司（Bilibili 游戏子公司）\r
\r
## 项目时间\r
\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/bilibili_1.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/bilibili_2.mp4"></video>\r
</div>\r
\r
![效果展示](/data/fig/bilibili.png)\r
\r
2023-7-5 ~ 2023-9-1\r
\r
## 项目概述\r
这是我第一段正式游戏实习，也是第一次完整参与游戏主场景概念设计与制作流程。从世界观构思、场景概设，到单体制作和 UE5 场景搭建，我系统体验了游戏场景从概念到落地的全过程。\r
\r
## 场景概设（第一个月）\r
项目主题围绕“**大湾区文化 × 磁带未来 × 科幻军事**”展开。我最初尝试将广州城市元素整合成宏观地图，但在评审中意识到场景缺乏鲜明的空间特征。随后我重新聚焦广州琶醍，以工业遗产和滨江空间为基础，结合建模与 Stable Diffusion 完成未来场景概设。\r
\r
这一阶段让我理解到，场景概设的核心并非绘制一张漂亮的图，而是通过空间塑造世界观、视觉风格和情绪体验。同时，我也重新认识了 AI 与传统设计工具的关系，它们都是设计表达的媒介，真正重要的是设计思考本身。\r
\r
## 美术制作（第二个月）\r
\r
第二个月进入完整制作流程，包括单体原画、Polygon 建模、UV 展开、贴图绘制以及 UE5 场景搭建。\r
\r
通过大量实践，我能够独立完成从建模到材质制作的完整流程，并逐渐掌握 UE5 中资源组织、灯光、氛围及场景表达的方法。我也意识到，地编不仅是资源摆放，更重要的是利用有限资产塑造世界观与空间叙事。\r
\r
## 收获\r
\r
这次实习让我完成了从建筑设计思维向游戏场景设计思维的第一次转换。相比建筑设计强调空间逻辑和功能，游戏主场景更加关注剪影、构图、氛围以及玩家的视觉体验。\r
\r
同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。`,Bt=`---
id: "05"
slug: "kittylovecarrots"
title: "指萝卜 - 个人开发微信小游戏"
category: "Game"
year: "2026-2 - on going"
description: "指萝卜小游戏与微信小游戏完整开发流程合并展示。"
tech: ["WeChat Mini Program", "游戏开发", "Figma", "AI生图"]
abstract: " "
challenge: "设计一款既有趣又具有教育意义的儿童游戏，同时兼顾游戏开发过程中的技术实现与设计难点。"
solution: "我们开发了一款名为 Kitty Love Carrots 的节奏小游戏，通过鼓点节奏（drum rhythm）的互动玩法，引导儿童认识胡萝卜相关知识。游戏采用简单易上手且富有趣味性的机制，让孩子们能够在轻松愉快的游戏体验中，以互动探索的方式学习和了解胡萝卜。"
hasDemo: true
icon: "/data/fig/Kittylovecarrots_logo.jpg"
image: ["/data/fig/kittylovecarrots-1.png","/data/fig/kittylovecarrots-2.png"]
---

# 效果展示

![效果展示](/data/fig/kittylovecarrots-1.png)

![效果展示](/data/fig/kittylovecarrots-2.png)

## 一个人怎么做游戏

这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。

### 为什么把这两个内容合并？

指萝卜本体是一个微信小游戏项目，而下面这部分是同一套开发路径的复盘，记录了从设计、开发到上线的完整过程。

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

## 02 微信小游戏 code

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

由于微信小程序的界面对代码的大小有一定的限制，所以我们不能把所有的图片素材都内置，我是直接把素材放在了Cloudflare上访问。Cloudflare R2 免费有每月10G 存储，100 万次 A 类操作，1000 万次 B 类操作，对于个人用户来说完全足够了。

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
5. **ICP备案审核** - 根据政策政策进行ICP备案
![alt text](/data/fig/games/wechat-mini-game-verification.png)
![审核通知时间线](/data/fig/games/wechat-mini-game-review-timeline.png)

> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。

发布到正式版之后，就可以开始看游戏的用户流量情况了。
![alt text](/data/fig/games/wechat-mini-game-data-visual.png)


## godot引擎，辅助游戏。
我意识到我可能需要更复杂的
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

## 源码目录介绍
\`\`\`
----godot-loader.js              //引擎加载器
+---engine
|       demo-pck.bin             //Demo场景资源包, .bin就是.pck文件, 把你自己的资源文件打包成.pck文件更改后缀名为.bin, 然后放到这里就可以了, 要改名字则修改game.js中的资源路径
|       game.js                  //godot 引擎主程序
|       godot-sdk.js             //godot适配微信sdk
|       godot.js                 //godot 引擎主程序
|       godot.wasm.br            //wasm文件
|
+---images
        background.jpg           //游戏背景图片
        logo.png                 //游戏logo图片

\`\`\`

## 其它说明
ios运行请在小游戏后台开通高性能+模式, 操作方法: 功能->游戏能力地图->研发能力->生成提效包->高性能模式




## 04微信小游戏软著

> 📌 **参考阅读**  
> [CSDN：小游戏软著申请全流程](https://blog.csdn.net/oSuiFeng788/article/details/143061373?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-143061373-blog-100574718.235^v43^pc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.3&utm_relevant_index=6)
> [软著知乎经验分享帖] https://zhuanlan.zhihu.com/p/681006624

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
`,Ut=`---\r
id: "06"\r
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
https://learn.u3d.cn/tutorial/instant-game-joker?chapterId=64f5962ca571d50021bb3afb&sectionId=64f5962ca571d50021bb3afa`,zt=`---
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
`,Gt=`---
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
`,Ft=`---
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
`,Ot=`---
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
`,Wt=`---
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
`,Vt=`---
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
`,Ht=`---
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
`,$t=`---
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

## 04 日常使用。`,qt=`---
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
`,Kt=`---
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

`,Qt=`---
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

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,Xt=`---\r
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
> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function Zt(i){const r=/^---\r?\n([\s\S]*?)\r?\n---/,x=i.match(r);let o={},b=i;if(x){const c=x[1];b=i.slice(x[0].length).trim();const n=c.split(/\r?\n/);let t=null,l=[];n.forEach(N=>{if(N.trim()==="")return;const U=N.indexOf(":");if(U!==-1&&!N.startsWith(" ")){t&&(o[t]=l.join(`
`)),t=N.slice(0,U).trim();let I=N.slice(U+1).trim();I==="|"?l=[]:(o[t]=I,t=null,l=[])}else t&&N.startsWith("  ")&&l.push(N.slice(2))}),t&&l.length>0&&(o[t]=l.join(`
`)),Object.keys(o).forEach(N=>{let w=o[N];if(typeof w=="string")if(w=w.trim(),w.startsWith('"')&&w.endsWith('"')&&(w=w.slice(1,-1)),w.startsWith("[")&&w.endsWith("]"))try{o[N]=JSON.parse(w)}catch{o[N]=[w.slice(1,-1).trim()]}else w==="true"?o[N]=!0:w==="false"?o[N]=!1:!isNaN(Number(w))&&w.trim()!==""?o[N]=Number(w):o[N]=w})}return{id:o.id||"",slug:o.slug||"",title:o.title||"",category:o.category||"",year:o.year||"",description:o.description||"",tech:o.tech||[],abstract:o.abstract||"",challenge:o.challenge||"",solution:o.solution||"",hasDemo:o.hasDemo||!1,icon:o.icon||"",code:o.code||"",logo:o.icon||"",image:o.image||[],content:b}}function T(i){const r=Zt(i);return{id:r.id,slug:r.slug,title:r.title,category:r.category,year:r.year,description:r.description,tech:r.tech,hasDemo:r.hasDemo,details:{abstract:r.abstract,description:r.description,challenge:r.challenge,solution:r.solution,logo:r.logo,icon:r.icon,code:r.code,image:r.image,content:r.content}}}const ge=[T(yt),T(wt),T(jt),T(kt),T(Nt),T(Mt)],pe=[T(Ct),T(At),T(It),T(St),T(Lt),T(Dt),T(Pt)],xe=[T(Et),T(Tt),T(_t),T(Rt),T(Bt),T(Ut)],fe=[T(zt),T(Gt),T(Ft)],be=[T(Ot),T(Wt),T(Vt),T(Ht),T($t),T(qt),T(Kt),T(Qt),T(Xt)],ke=({data:i,type:r})=>{const[x,o]=s.useState("grid"),[b,c]=s.useState(1);return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[r==="design"?e.jsxs("div",{className:"flex flex-col gap-6 lg:gap-8",children:[!1,e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Selected Designs"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>o("grid"),className:`px-2 py-1 text-xs font-mono ${x==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>o("list"),className:`px-2 py-1 text-xs font-mono ${x==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",i.length]})]})]}),e.jsx("div",{children:x==="list"?e.jsx("div",{className:"space-y-4",children:i.map(t=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(ae,{to:`/${r}/${t.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:t.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",t.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:t.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 truncate",children:t.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-1",children:t.description})]})]}),t.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${r}/${t.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},t.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:i.map(t=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(ae,{to:`/${r}/${t.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-4",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:t.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",t.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:t.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 line-clamp-2",children:t.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",children:t.description})]})]}),t.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${r}/${t.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},t.slug))})})]})]}):e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:["Selected ",r==="research"?"Researches":r==="game"?"Games":r==="planning"?"Planning":r==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>o("grid"),className:`px-3 py-1 text-xs font-mono ${x==="grid"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"GRID"}),e.jsx("button",{onClick:()=>o("list"),className:`px-3 py-1 text-xs font-mono ${x==="list"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Idx: ",i.length]})]})]}),r!=="design"&&(x==="list"?e.jsx("div",{className:"space-y-4",children:i.map(t=>e.jsx("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(ae,{to:`/${r}/${t.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:t.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",t.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:t.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 truncate",children:t.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-1",children:t.description})]})]}),t.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${r}/${t.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},t.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:i.map(t=>e.jsxs("div",{className:"group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col",children:[e.jsxs(ae,{to:`/${r}/${t.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-4",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:t.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:["NO. ",t.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500 dark:text-neutral-400",children:t.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 line-clamp-2",children:t.title}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",children:t.description})]})]}),t.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${r}/${t.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},t.slug))}))]})},Yt="modulepreload",Jt=function(i,r){return new URL(i,r).href},Oe={},W=function(r,x,o){let b=Promise.resolve();if(x&&x.length>0){let n=function(w){return Promise.all(w.map(U=>Promise.resolve(U).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};const t=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),N=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));b=n(x.map(w=>{if(w=Jt(w,o),w in Oe)return;Oe[w]=!0;const U=w.endsWith(".css"),I=U?'[rel="stylesheet"]':"";if(!!o)for(let z=t.length-1;z>=0;z--){const G=t[z];if(G.href===w&&(!U||G.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${w}"]${I}`))return;const u=document.createElement("link");if(u.rel=U?"stylesheet":Yt,U||(u.as="script"),u.crossOrigin="",u.href=w,N&&u.setAttribute("nonce",N),document.head.appendChild(u),U)return new Promise((z,G)=>{u.addEventListener("load",z),u.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${w}`)))})}))}function c(n){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=n,window.dispatchEvent(t),!t.defaultPrevented)throw n}return b.then(n=>{for(const t of n||[])t.status==="rejected"&&c(t.reason);return r().catch(c)})},en=s.lazy(()=>W(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),tn=s.lazy(()=>W(()=>import("./UR-platform-B26NuqWS.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),nn=s.lazy(()=>W(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),an=s.lazy(()=>W(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),rn=s.lazy(()=>W(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),sn=s.lazy(()=>W(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),ln=s.lazy(()=>W(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));s.lazy(()=>W(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const on=s.lazy(()=>W(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),dn=s.lazy(()=>W(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),We=s.lazy(()=>W(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),cn=s.lazy(()=>W(()=>import("./72HourGameJamDemo-DsdI-g3Q.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),un=s.lazy(()=>W(()=>import("./PeaceEliteHustCampusDemo-CKWwrGNJ.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),mn=s.lazy(()=>W(()=>import("./BMWMetaIslandDemo-DM2oqedJ.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),hn=s.lazy(()=>W(()=>import("./riffle-BuqCfcTA.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),gn=s.lazy(()=>W(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),pn=s.lazy(()=>W(()=>import("./genshot-8Uy4GIux.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),xn=i=>({"cluster-visualizer-3d":en,"participatory-urban-regeneration-empowered-by-artificial-intelligence":tn,heatmapper:nn,"how-to-add-openstreetmap-in-website":an,"how-to-get-sequential-events-from-photo-by-phone":rn,"how-to-visualize-photo-geolocation-data-on-map":sn,kittylovecarrots:We,"how-to-build-game-in-wechat-mini-program":We,"72-hour-game-jam":cn,"peace-elite-hust-campus":un,"bmw-meta-island":mn,"how-to-conduct-time-geo-sequential-clustering-from-album":ln,"box-up-my-stuff-in-cyberspace":on,"epstein-mystery-archive":dn,"riffle-ai-game-generation-tool":hn,genstyle:gn,"genshot-AI-video-generation-tool":pn})[i],Ve={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
const highScore = wx.getStorageSync('highScore');`,kittylovecarrots:`// 微信小程序游戏开发基本步骤

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
}`},He=({images:i,captions:r})=>{const[x,o]=s.useState(0),b=()=>{o(t=>t===0?i.length-1:t-1)},c=()=>{o(t=>t===i.length-1?0:t+1)},n=r==null?void 0:r[x];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:i[x],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:n||`Carousel Image ${x+1}`}),e.jsx("button",{onClick:b,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:c,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:i.map((t,l)=>e.jsx("button",{onClick:()=>o(l),className:`h-1.5 rounded-full transition-all duration-300 ${x===l?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${l+1}`},l))})]}),n&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:n}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[x+1," / ",i.length]})]}),!n&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[x+1," / ",i.length]})]})},fn=({src:i,...r})=>{const[x,o]=s.useState(!1),[b,c]=s.useState(!1),n=()=>{o(!0),c(!0)},t=()=>{o(!1),c(!0)};return s.useEffect(()=>{const l=setTimeout(()=>{b||(o(!1),c(!0))},3e3);return()=>clearTimeout(l)},[b]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:i,onLoad:n,onError:t,style:{display:"none"},title:"detector"}),!b&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})}),b&&x&&e.jsx("div",{className:"w-full my-6",children:e.jsx("iframe",{src:i,className:"w-full h-96 rounded-lg shadow-md border border-neutral-200",allowFullScreen:!0,...r})}),b&&!x&&e.jsx("div",{className:"w-full my-4",children:e.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"访问链接"]})})]})},Ne=({data:i,type:r})=>{const{id:x}=at(),[o,b]=s.useState("details"),c=i.find(n=>n.slug===x);return s.useEffect(()=>{const n=()=>{window.location.hash.includes("demo")?b("demo"):b("details")};return n(),window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[x]),c?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(ae,{to:`/${r}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate max-w-[120px] md:max-w-[200px]",children:c.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700",children:[e.jsx("button",{onClick:()=>b("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${o==="details"?"bg-white dark:bg-neutral-700 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:"DOCS"}),c.hasDemo&&e.jsxs("button",{onClick:()=>b("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${o==="demo"?"bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm":"text-neutral-500 dark:text-neutral-400"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:`flex-1 ${o==="details"?"overflow-y-auto":"overflow-hidden"}`,children:o==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:c.tech.map((n,t)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-sm",children:n},t))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",c.id]}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:c.year}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("span",{children:c.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight",children:c.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 border-l-4 border-neutral-900 dark:border-neutral-500 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic",children:['"',c.description,'"']})})]}),e.jsx("div",{className:"w-full flex-grow",children:e.jsxs("div",{className:"space-y-8 md:space-y-10 max-w-4xl mx-auto",children:[c.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:c.details.abstract})]}),c.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:c.details.challenge})]}),c.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal",children:c.details.solution})]}),c.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Content"}),e.jsx("div",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 prose prose-neutral dark:prose-invert max-w-none",children:e.jsx(dt,{remarkPlugins:[ut],rehypePlugins:[ct],components:{iframe:({src:n,title:t,...l})=>e.jsx(fn,{src:n,title:t||"Embedded content",...l}),imagecarousel:({images:n,captions:t})=>{const l=(n||"").split(",").map(w=>w.trim()).filter(Boolean),N=t?t.split("|").map(w=>w.trim()):void 0;return e.jsx(He,{images:l,captions:N})},imageCarousel:({images:n,captions:t})=>{const l=(n||"").split(",").map(w=>w.trim()).filter(Boolean),N=t?t.split("|").map(w=>w.trim()):void 0;return e.jsx(He,{images:l,captions:N})},table:({children:n})=>e.jsx("table",{className:"min-w-full border-collapse border border-neutral-300 dark:border-neutral-600",children:n}),thead:({children:n})=>e.jsx("thead",{className:"bg-neutral-50 dark:bg-neutral-800",children:n}),th:({children:n})=>e.jsx("th",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-left font-semibold text-neutral-900 dark:text-neutral-100 text-sm",children:n}),td:({children:n})=>e.jsx("td",{className:"border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-neutral-700 dark:text-neutral-300 text-sm",children:n}),h1:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:N,className:"text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100",...t,children:n})},h2:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:N,className:"text-xl font-bold mb-6 mt-8 text-neutral-800 dark:text-neutral-200",...t,children:n})},h3:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:N,className:"text-lg font-semibold mb-4 mt-6 text-neutral-800 dark:text-neutral-200",...t,children:n})},h4:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h4",{id:N,className:"text-base font-semibold mb-3 mt-4 text-neutral-700 dark:text-neutral-300",...t,children:n})},h5:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h5",{id:N,className:"text-sm font-semibold mb-2 mt-3 text-neutral-700 dark:text-neutral-300",...t,children:n})},h6:({children:n,...t})=>{const N=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h6",{id:N,className:"text-xs font-semibold mb-2 mt-2 text-neutral-600 dark:text-neutral-400",...t,children:n})},p:({children:n,...t})=>e.jsx("p",{className:"mb-4 leading-relaxed",...t,children:n}),a:({children:n,href:t,...l})=>e.jsx("a",{href:t,className:"text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium",target:"_blank",rel:"noopener noreferrer",...l,children:n}),img:({src:n,alt:t,...l})=>{var w;return((w=l.className)==null?void 0:w.includes("h-32"))||(t==null?void 0:t.includes("BCR"))||(t==null?void 0:t.includes("BHV"))||(t==null?void 0:t.includes("SVF"))||(t==null?void 0:t.includes("NDVI"))||(t==null?void 0:t.includes("EV"))||(t==null?void 0:t.includes("WR"))||(t==null?void 0:t.includes("Dist_"))?e.jsx("img",{src:n,alt:t,className:"max-w-full h-32 object-cover rounded-lg shadow-sm",...l}):e.jsx("img",{src:n,alt:t,className:"w-full max-w-full h-auto rounded-lg shadow-md my-6",...l})}},children:c.details.content})})]}),(c.details.code||c.details.codeComponent||Ve[c.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:Ve[c.slug]||c.details.codeComponent||`// Code file: ${c.details.code}`})})})]})]})})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 dark:bg-neutral-900 relative",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"Loading demo..."}),children:(()=>{const n=xn(c.slug);return n?e.jsx(n,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},bn=[{id:"kg-aaai-philadelphia",title:"Knowledge Graph Generation from Urban Planning Texts",subtitle:"Poster presentation at 39th AAAI Workshop - AI for Urban Planning",event:"39th AAAI Workshop - AI for Urban Planning",location:"Philadelphia, PA, USA",date:"February 28 - March 3, 2025",format:"Poster",image:"/data/fig/AAAI2026.jpg",summary:"A poster stop that connected text mining, planning knowledge extraction, and questions from urban AI researchers.",news:"This poster presentation introduced an early version of my knowledge graph pipeline for urban planning texts. The discussions were especially useful for clarifying how planning concepts can be structured, filtered, and linked across documents, and how the method can become a reusable research infrastructure rather than a one-off demo.",highlights:["Presented the text-to-graph workflow","Discussed entity extraction and relation design","Received feedback on reproducible annotation rules"]},{id:"kg-cupum-london",title:"Knowledge Graph Generation from Urban Planning Texts",subtitle:"Oral presentation at CUPUM",event:"Computational Urban Planning and Urban Management Conference (CUPUM)",location:"London, UK",date:"June 23 - 27, 2025",format:"Oral",image:"/data/fig/kg_figure.jpg",summary:"An oral session that pushed the work from a static poster into a sharper methodological narrative.",news:"At CUPUM I presented the same research as a more compact oral story, focusing on the problem statement, the graph construction logic, and the potential for urban policy reading support. The session helped me refine the research framing for an international planning audience.",highlights:["Strengthened the oral narrative","Explained the graph construction logic","Collected comments on planning applications"]},{id:"kg-iacp-xiamen",title:"Knowledge Graph Generation from Urban Planning Texts",subtitle:"Oral presentation at IACP Annual Conference",event:"19th International Association for China Planning Conference (IACP)",location:"Xiamen, China",date:"July 3 - 7, 2025",format:"Oral",image:"/data/fig/global-5.jpg",summary:"The China planning audience offered a different lens on how the method could connect theory, policy, and local planning data.",news:"This talk shifted the focus toward how knowledge graphs can support planning knowledge organization and discussion. Questions from the audience were particularly valuable for thinking about data sources, domain coverage, and how the method might scale to broader Chinese-language planning texts.",highlights:["Reframed the method for a planning audience","Discussed data scope and domain transfer","Got questions on future Chinese-language corpora"]},{id:"heat-icua-vancouver",title:"Local Climate Zone and Urban Heat Resilience: An Empirical Study in New York",subtitle:"Oral presentation at ICUA",event:"52nd International Conference on Urban Affairs (ICUA)",location:"Vancouver, Canada",date:"April 15 - 19, 2025",format:"Oral",image:"/data/fig/LST_heatmap.png",summary:"A presentation centered on heat resilience, climate zoning, and the empirical logic behind the NYC study.",news:"In Vancouver I shared the NYC heat resilience study with a stronger emphasis on local climate zones, empirical evidence, and how spatial statistics can support climate-adaptive planning. The talk was useful for connecting urban morphology with concrete resilience discussions.",highlights:["Presented the NYC LCZ study","Connected morphology with heat resilience","Received feedback on spatial scaling"]},{id:"heat-acsp-minneapolis",title:"Reveal nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach",subtitle:"Oral presentation at ACSP",event:"65th Association of Collegiate Schools of Planning Annual Conference (ACSP)",location:"Minneapolis, MN, USA",date:"October 23 - 25, 2025",format:"Oral",image:"/data/fig/heatmapper-1.png",summary:"This talk emphasized explainable machine learning as a way to reveal non-linear heat relationships without losing interpretability.",news:"The ACSP presentation focused on why urban form variables often act nonlinearly and why explainability matters when translating machine learning outputs into planning insights. The discussion helped me sharpen the policy relevance of the work and how to communicate model behavior more clearly.",highlights:["Explained the non-linear modeling strategy","Highlighted interpretability for planners","Connected model output to planning action"]},{id:"heat-aaai-singapore",title:"Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning",subtitle:"Poster presentation at 39th AAAI Workshop - AI for Urban Planning",event:"39th AAAI Workshop - AI for Urban Planning",location:"Singapore",date:"January 26, 2026",format:"Poster",image:"/data/fig/heatmapper-2.png",summary:"A poster version of the heat resilience work, tuned for quick visual reading and deeper one-on-one discussion.",news:"In Singapore the poster helped me show the multi-scale structure of the heat resilience research in a compact way. It was a good format for conversations about variable selection, scale effects, and how to keep the analysis rigorous while still readable for a broad AI audience.",highlights:["Presented the multi-scale heat study","Discussed scale effects and variable design","Collected feedback on poster storytelling"]},{id:"heat-iacp-xian",title:"Nonlinear Impacts of Urban Form on Urban Heat Islands: A Machine Learning Analysis Across Scales and Weather Conditions in Seoul",subtitle:"Oral presentation at IACP Annual Conference",event:"20th International Association for China Planning (IACP)",location:"Xi'an, China",date:"July 10 - 13, 2026",format:"Oral",image:"/data/fig/photogeomap.png",summary:"A talk that broadened the heat island work across scales and weather conditions with a planning-oriented message.",news:"This presentation focused on the Seoul case and how urban heat island behavior changes under different scales and weather conditions. The audience response was helpful for strengthening the comparative logic and for thinking about how to present multi-factor analysis with less noise.",highlights:["Focused on Seoul across scales","Compared weather-condition effects","Refined the comparative framing"]},{id:"neurotopia-udik-seoul",title:"Decentralized future urban design based on the biological characteristics of neurons",subtitle:"Oral presentation at UDIK Autumn Conference",event:"Urban Design Institute of Korea (UDIK) Autumn Conference",location:"Seoul, South Korea",date:"October 10, 2024",format:"Oral",image:"/data/fig/photogeo.png",summary:"An earlier urban design talk that helped anchor the broader research narrative around future-oriented urban systems.",news:"This talk explored a more speculative design direction, using neuronal characteristics as a conceptual basis for decentralized urban form. It remains an important part of my work because it connects design imagination with computational thinking.",highlights:["Presented a speculative design concept","Linked biology and urban form","Opened a broader research narrative"]}],vn=()=>{const[i,r]=s.useState(null);return s.useEffect(()=>{if(!i)return;const x=o=>{o.key==="Escape"&&r(null)};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow=""}},[i]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"font-light text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-none",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300 dark:border-neutral-600",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700 dark:text-neutral-300",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})}),e.jsxs("div",{className:"mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8",children:[e.jsxs("div",{className:"flex flex-col gap-3 md:gap-4 mb-5 md:mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 flex-wrap",children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase",children:"Conference Presentations"}),e.jsx("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:"Click any card for the news note"})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4",children:[e.jsx("div",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-100",children:"8"}),e.jsx("div",{className:"text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1",children:"talks"})]}),e.jsxs("div",{className:"rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4",children:[e.jsx("div",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-100",children:"5"}),e.jsx("div",{className:"text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1",children:"cities"})]}),e.jsxs("div",{className:"rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4",children:[e.jsx("div",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-100",children:"3"}),e.jsx("div",{className:"text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1",children:"countries"})]}),e.jsxs("div",{className:"rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4",children:[e.jsx("div",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-100",children:"2"}),e.jsx("div",{className:"text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1",children:"formats"})]})]})]}),e.jsx("div",{className:"columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4",children:bn.map(x=>e.jsx("button",{type:"button",onClick:()=>r(x),className:"group block w-full break-inside-avoid overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",children:e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("img",{src:x.image,alt:x.title,className:"h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"}),e.jsxs("div",{className:"absolute left-4 right-4 bottom-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[e.jsx("span",{className:"rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-sm",children:x.format}),e.jsx("span",{className:"rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-sm",children:x.location})]}),e.jsx("h5",{className:"text-lg font-semibold text-white leading-snug",children:x.title}),e.jsx("p",{className:"mt-2 text-sm leading-6 text-neutral-200",children:x.summary}),e.jsxs("div",{className:"mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-neutral-300",children:[e.jsx("span",{children:x.date}),e.jsx("span",{className:"opacity-80",children:"Open story"})]})]})]})},x.id))})]})]}),i&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/75 backdrop-blur-md px-4 py-6",onClick:()=>r(null),children:e.jsxs("div",{className:"relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-white dark:bg-neutral-950 shadow-2xl",onClick:x=>x.stopPropagation(),children:[e.jsx("button",{type:"button",onClick:()=>r(null),className:"absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-800","aria-label":"Close conference news",children:e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("div",{className:"grid gap-0 lg:grid-cols-[1.1fr_0.9fr]",children:[e.jsxs("div",{className:"relative bg-neutral-100 dark:bg-neutral-900",children:[e.jsx("img",{src:i.image,alt:i.title,className:"h-full w-full object-cover max-h-[420px] lg:max-h-none"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/0 to-transparent"}),e.jsxs("div",{className:"absolute left-0 right-0 bottom-0 p-6 text-white",children:[e.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[e.jsx("span",{className:"rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] backdrop-blur-sm",children:i.format}),e.jsx("span",{className:"rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] backdrop-blur-sm",children:i.date})]}),e.jsx("h3",{className:"text-2xl md:text-3xl font-semibold leading-tight",children:i.title}),e.jsx("p",{className:"mt-2 text-sm text-neutral-200",children:i.subtitle})]})]}),e.jsxs("div",{className:"p-6 md:p-8 lg:p-10",children:[e.jsxs("div",{className:"mb-5 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400",children:[e.jsx("span",{className:"rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1",children:i.event}),e.jsx("span",{className:"rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1",children:i.location})]}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200",children:i.news}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h4",{className:"text-sm font-mono uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500 mb-3",children:"News highlights"}),e.jsx("ul",{className:"space-y-3",children:i.highlights.map(x=>e.jsxs("li",{className:"flex gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300",children:[e.jsx("span",{className:"mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100 shrink-0"}),e.jsx("span",{children:x})]},x))})]})]})]})]})})]})},yn=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 dark:border-neutral-600 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 dark:bg-neutral-700 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors",children:"SEND_TRANSMISSION"})]}),Ee=({href:i,label:r})=>e.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all rounded-sm text-xs font-mono",children:r}),wn=()=>{const[i,r]=s.useState("all"),[x,o]=s.useState("/data/fig/lili/lili_01.png"),b={all:"/data/fig/lili/lili_01.png",design:"/data/fig/lili/lili_05.png",planning:"/data/fig/lili/lili_06.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png"},c={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"设计、开发、游戏和城市规划"}),"领域的项目。"]}),design:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"设计"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"游戏"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{children:"教程"}),"领域的项目。"]})};s.useEffect(()=>{o(b[i]||b.all)},[i]);const n=(()=>{const j={all:[...pe.map(h=>({...h,type:"design"})),...ge.map(h=>({...h,type:"planning"})),...xe.map(h=>({...h,type:"game"})),...fe.map(h=>({...h,type:"platform"})),...be.map(h=>({...h,type:"tutorial"}))],design:pe.map(h=>({...h,type:"design"})),planning:ge.map(h=>({...h,type:"planning"})),game:xe.map(h=>({...h,type:"game"})),platform:fe.map(h=>({...h,type:"platform"})),tutorial:be.map(h=>({...h,type:"tutorial"}))};return j[i]||j.all})(),[t,l]=s.useState(0),N=n.length-1,[w,U]=s.useState(0),I=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260305-222003.mp4",title:"Welcome to My Portfolio",subtitle:"Explore my projects in urban planning, design, game development, and AI tutorials."},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260304_heatmap_2.mp4",title:"Data Visualization",subtitle:"Interactive heatmaps and spatial analysis for urban research."}],[F,u]=s.useState(0),[z,G]=s.useState({}),[R,E]=s.useState(1),_=20,$=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],ee=(j,h)=>{var K,ye;const C=j;if(console.log(`Checking audio for video ${h}:`,{audioTracks:(K=C.audioTracks)==null?void 0:K.length,mozHasAudio:C.mozHasAudio,webkitAudioDecodedByteCount:C.webkitAudioDecodedByteCount,videoTracks:(ye=C.videoTracks)==null?void 0:ye.length,readyState:C.readyState}),C.audioTracks&&C.audioTracks.length>0){const V=Array.from(C.audioTracks).some(q=>q.enabled);console.log(`Video ${h} has audioTracks:`,V),G(q=>({...q,[h]:V}));return}if("mozHasAudio"in C){const V=C.mozHasAudio;console.log(`Video ${h} mozHasAudio:`,V),G(q=>({...q,[h]:V}));return}const O=C.webkitAudioDecodedByteCount;if(typeof O=="number"&&O>0){console.log(`Video ${h} webkitAudioDecodedByteCount:`,O),G(V=>({...V,[h]:!0}));return}if(C.readyState>=3){setTimeout(()=>{const V=C.webkitAudioDecodedByteCount,q=C.mozHasAudio,J=V>0||q===!0;console.log(`Video ${h} delayed check:`,{delayedWebkitAudio:V,delayedMozAudio:q,hasAudio:J}),G(oe=>({...oe,[h]:J}))},500);return}console.log(`Video ${h} default to has audio`),G(V=>({...V,[h]:!0}))};s.useEffect(()=>{const j=setInterval(()=>{U(h=>(h+1)%I.length)},8e3);return()=>clearInterval(j)},[I.length]);const ve=s.useRef(null);return s.useEffect(()=>{const j=ve.current;if(!j)return;const h=C=>{const O=C.target;j.contains(O)&&(C.preventDefault(),l(K=>C.deltaY>0?Math.min(K+1,N):Math.max(K-1,0)))};return j.addEventListener("wheel",h,{passive:!1}),()=>j.removeEventListener("wheel",h)},[N]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"flex flex-col items-center border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8 gap-4",children:e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[e.jsx("img",{src:x,alt:"Lili Avatar",className:"w-32 h-32 md:w-48 md:h-48 object-contain"}),e.jsxs("div",{className:"relative bg-white dark:bg-neutral-800 rounded-2xl px-6 py-4 shadow-lg max-w-xs md:max-w-md",children:[e.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white dark:border-r-neutral-800 border-b-8 border-b-transparent"}),e.jsxs("p",{className:"text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed",children:["你好！我是林丽丽，欢迎来到我的作品集。",c[i]||c.all,"              "]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center mb-3",children:[e.jsxs("button",{onClick:()=>{r("all"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="all"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["All (",pe.length+ge.length+xe.length+fe.length+be.length,")"]}),e.jsxs("button",{onClick:()=>{r("design"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="design"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["Design (",pe.length,")"]}),e.jsxs("button",{onClick:()=>{r("planning"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="planning"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["Planning (",ge.length,")"]}),e.jsxs("button",{onClick:()=>{r("game"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="game"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["Game (",xe.length,")"]}),e.jsxs("button",{onClick:()=>{r("platform"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="platform"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["Platform (",fe.length,")"]}),e.jsxs("button",{onClick:()=>{r("tutorial"),l(0)},className:`px-3 py-1.5 rounded transition-all ${i==="tutorial"?"text-lg font-bold text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100":"text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"}`,children:["Tutorial (",be.length,")"]})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[t+1," / ",n.length]})]})}),e.jsx("div",{ref:ve,className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10 mb-10 md:mb-12",children:n.map((j,h)=>{var J;const C=h-t;if(C<-2||C>3)return null;const O=1-Math.abs(C)*.08,K=C*60,ye=-Math.abs(C)*120,V=C*-6,q=C===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${K+20}px)
                  translateZ(${ye}px)
                  rotateX(${V}deg)
                  scale(${O})
                `,opacity:q,zIndex:100-Math.abs(C)},children:e.jsx("div",{className:"bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:j.details.logo,alt:j.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded",children:j.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400 dark:text-neutral-500",children:j.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100",children:j.title}),e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3",children:j.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(J=j.tech)==null?void 0:J.slice(0,3).map((oe,re)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded",children:oe},re))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${j.type}/${j.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-200 rounded",children:"VIEW"}),j.hasDemo&&e.jsx("a",{href:`#/${j.type}/${j.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${j.type}-${j.slug}`)})}),e.jsxs("div",{className:"relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-10 shadow-2xl",children:[I.map((j,h)=>e.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 ${h===w?"opacity-100":"opacity-0"}`,children:e.jsx("video",{className:"absolute inset-0 w-full h-full object-cover",src:j.src,autoPlay:!0,muted:!0,loop:!0,playsInline:!0})},h)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10",children:[e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3",children:I[w].title}),e.jsx("p",{className:"text-base md:text-lg text-white/80 max-w-2xl",children:I[w].subtitle})]}),e.jsx("div",{className:"absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-2",children:I.map((j,h)=>e.jsx("button",{onClick:()=>U(h),className:`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${h===w?"bg-white w-6 md:w-8":"bg-white/50 hover:bg-white/80"}`},h))}),e.jsx("button",{onClick:()=>U(j=>(j-1+I.length)%I.length),className:"absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>U(j=>(j+1)%I.length),className:"absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100",style:{opacity:.7},children:e.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsxs("div",{className:"mb-10 md:mb-12",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Video Gallery"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:[F+1," / ",$.length]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>u(j=>(j-1+$.length)%$.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>u(j=>(j+1)%$.length),className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})]}),e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("div",{className:"flex transition-transform duration-500 ease-out",style:{transform:`translateX(-${F*(100/4)}%)`},children:$.map((j,h)=>e.jsx("div",{className:"w-1/4 flex-shrink-0 px-2",children:e.jsxs("div",{className:"relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 group cursor-pointer",onMouseEnter:C=>{const O=C.currentTarget.querySelector("video");O&&O.play().catch(K=>console.log("Video play failed:",K))},onMouseLeave:C=>{const O=C.currentTarget.querySelector("video");O&&O.pause()},children:[e.jsx("video",{className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",src:j.src,muted:!0,loop:!0,playsInline:!0,preload:"metadata",onCanPlay:C=>ee(C.currentTarget,h)}),z[h]&&e.jsx("div",{className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("div",{className:"absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx("p",{className:"text-white text-xs font-medium truncate",children:j.title})})]})},h))})}),e.jsx("div",{className:"flex justify-center gap-2 mt-4",children:Array.from({length:Math.ceil($.length/4)}).map((j,h)=>e.jsx("button",{onClick:()=>u(h*4),className:`h-2 rounded-full transition-all duration-300 ${Math.floor(F/4)===h?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2"}`},h))})]}),e.jsxs("div",{className:"mb-10 md:mb-12",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100",children:"Portfolio PDF"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono text-neutral-400 dark:text-neutral-500",children:["Pages ",R,"-",Math.min(R+1,_)," / ",_]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>E(j=>Math.max(1,j-2)),disabled:R<=1,className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>E(j=>Math.min(_,j+2)),disabled:R>=_-1,className:"w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("a",{href:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf",target:"_blank",rel:"noopener noreferrer",className:"p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"Open in new window",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})]}),e.jsx("div",{className:"max-w-5xl mx-auto relative group/pdf",children:e.jsxs("div",{className:"grid grid-cols-2 gap-0 relative overflow-hidden px-10",children:[e.jsx(qe,{mode:"wait",children:e.jsxs(Ae.div,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"grid grid-cols-2 gap-0 col-span-2",children:[e.jsxs("div",{className:"relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-l-lg overflow-hidden shadow-md border-y border-l border-neutral-200 dark:border-neutral-700",children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${R}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"absolute w-[105%] h-[105%] pointer-events-none",title:`Portfolio PDF Page ${R}`,style:{border:"none",maxWidth:"none",left:"-1%",top:"-0.4%",transform:"none"}}),e.jsx("div",{className:"absolute inset-0 bg-transparent z-10"})]}),e.jsx("div",{className:"relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-r-lg overflow-hidden shadow-md border-y border-r border-neutral-200 dark:border-neutral-700",children:R+1<=_?e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${R+1}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`,className:"absolute w-[105%] h-[103%] pointer-events-none",title:`Portfolio PDF Page ${R+1}`,style:{border:"none",maxWidth:"none",left:"-1%",top:"-0.4%",transform:"none"}}),e.jsx("div",{className:"absolute inset-0 bg-transparent z-10"})]}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-400 font-mono text-sm",children:"END"})})]},`page-container-${R}`)}),e.jsx("button",{onClick:()=>E(j=>Math.max(1,j-2)),disabled:R<=1,className:"absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>E(j=>Math.min(_,j+2)),disabled:R>=_-1,className:"absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})}),e.jsx("div",{className:"flex justify-center gap-1 mt-6 flex-wrap",children:Array.from({length:Math.ceil(_/2)}).map((j,h)=>{const C=h*2+1,O=R===C||R===C-1;return e.jsx("button",{onClick:()=>E(C),className:`h-1.5 rounded-full transition-all duration-300 ${O?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,title:`Pages ${C}-${Math.min(C+1,_)}`},h)})})]})]})},jn=()=>{const[i,r]=s.useState(!1);s.useEffect(()=>{const o=localStorage.getItem("theme"),b=window.matchMedia("(prefers-color-scheme: dark)").matches;(o==="dark"||!o&&b)&&(r(!0),document.documentElement.classList.add("dark"))},[]);const x=()=>{const o=!i;r(o),o?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return e.jsx("button",{onClick:x,className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:i?"切换到日间模式":"切换到夜间模式",children:i?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},$e="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",kn="/data/223_cities_cluster_with_index_deciles.csv",ue=i=>{const r=i.replace("#",""),x=parseInt(r.slice(0,2),16),o=parseInt(r.slice(2,4),16),b=parseInt(r.slice(4,6),16);return[x,o,b]},me=(i,r,x)=>{const o=Math.round(i[0]+(r[0]-i[0])*x),b=Math.round(i[1]+(r[1]-i[1])*x),c=Math.round(i[2]+(r[2]-i[2])*x);return`rgb(${o}, ${b}, ${c})`},he=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],Nn=()=>{var Be;const i=s.useRef(null),r=s.useRef(null),[x,o]=s.useState(!0),[b,c]=s.useState(0),[n,t]=s.useState(null),[l,N]=s.useState(null),[w,U]=s.useState([]),[I,F]=s.useState(null),[u,z]=s.useState("K_12"),[G,R]=s.useState(!0),[E,_]=s.useState(null),[$,ee]=s.useState(null),[ve,j]=s.useState(!1),[h,C]=s.useState(null),[O,K]=s.useState(!1),[ye,V]=s.useState(null),[q,J]=s.useState(!1),[oe,re]=s.useState(0),[Ke,de]=s.useState(""),[Ie,Qe]=s.useState(!1),[we,Xe]=s.useState(!0),[Te,_e]=s.useState(!0),[Se,Ze]=s.useState({}),[An,In]=s.useState(!1),[Z,Ye]=s.useState("global"),Me=s.useRef(null),Re=s.useRef(null),Je=s.useRef(!1),je=s.useRef(null),et=(a,g)=>{let k=a.features;I!==null&&(k=k.filter(p=>{var m;const y=(m=p.properties)==null?void 0:m.Place;return y!==void 0&&Number(y)===Number(I)}));const v=k.map(p=>{var y;return(y=p.properties)==null?void 0:y[g]}).filter(p=>{if(p==null)return!1;if(typeof p=="string"){const m=p.trim();if(m===""||/^(na|nan|null)$/i.test(m))return!1}const y=Number(p);return!(Number.isNaN(y)||y===-9999)}).map(p=>Number(p)),D=k.reduce((p,y)=>{var A;const m=(A=y.properties)==null?void 0:A[g];let d=!1;if(m==null)d=!0;else if(typeof m=="string"){const S=m.trim();if(S===""||/^(na|nan|null)$/i.test(S))d=!0;else{const B=Number(m);(Number.isNaN(B)||B===-9999)&&(d=!0)}}else{const S=Number(m);(Number.isNaN(S)||S===-9999)&&(d=!0)}return p+(d?1:0)},0);let L=NaN,M=NaN,f=0;if(v.length>0){L=v[0],M=v[0],f=v[0];for(let p=1;p<v.length;p++){const y=v[p];y<L&&(L=y),y>M&&(M=y),f+=y}}return{count:k.length,min:L,max:M,mean:v.length>0?f/v.length:NaN,nanCount:D}};s.useEffect(()=>{(async()=>{try{const v=(await(await fetch(kn)).text()).trim().split(`
`);if(v.length<2)return;const D=v[0].split(",").map(m=>m.trim()),L={},f=v[v.length-1].split(","),y=v[1].split(",");D.forEach((m,d)=>{if(m===""||m.includes("Place")||m.includes("Sum")||m.includes("FID")||m.includes("index"))return;const A=parseFloat(y[d]),S=parseFloat(f[d]);!isNaN(A)&&!isNaN(S)&&S>A&&(L[m]={min:A,max:S})}),console.log("Loaded attribute ranges:",L),Ze(L)}catch(g){console.error("Failed to load deciles:",g)}})()},[]),s.useEffect(()=>{!Ie&&!l&&(async()=>{var g;o(!0),c(0),t(null);try{c(10),console.log("开始下载..."),Me.current=new AbortController;const k=await fetch($e,{signal:Me.current.signal});if(console.log("响应状态:",k.status),!k.ok)throw new Error(`HTTP error! status: ${k.status}`);c(30);const v=k.headers.get("content-length"),D=v?parseInt(v):null;console.log("预期文件大小:",D);const L=(g=k.body)==null?void 0:g.getReader();if(!L)throw new Error("无法读取响应流");let M=0;const f=[];for(;;){const{done:B,value:P}=await L.read();if(B)break;f.push(P),M+=P.length,c(D?30+Math.round(M/D*60):50)}console.log("下载完成, 收到:",M),D&&M!==D&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const p=new Uint8Array(M);let y=0;for(const B of f)p.set(B,y),y+=B.length;if(c(90),Ie){console.log("本地数据已加载，跳过网络数据"),o(!1);return}console.log("开始解析 Shapefile...");const m=await Ue(p);console.log("Shapefile 解析完成:",m);let d=[];if(m.type==="FeatureCollection"?d=m.features:Array.isArray(m)?d=m:m.type==="Feature"&&(d=[m]),console.log("解析完成，特征数量:",d==null?void 0:d.length),Ie)return;const A={type:"FeatureCollection",features:d||[]};N(A),c(100);const S=new Map;A.features.forEach(B=>{var te;const P=Number(((te=B.properties)==null?void 0:te.Place)??0);S.has(P)||S.set(P,{id:P,name:`Place ${P}`,featureCount:0});const Q=S.get(P);Q&&Q.featureCount++}),U(Array.from(S.values()).sort((B,P)=>B.id-P.id)),o(!1)}catch(k){if(k.name==="AbortError"){console.log("网络请求已取消");return}t(k instanceof Error?k.message:"Failed to load"),o(!1)}})()},[]),s.useEffect(()=>{l&&_(et(l,u))},[l,I,u,Z,Se]),s.useEffect(()=>{if(!l)return;const a=r.current;if(!a)return;const g=()=>{var v,D,L,M;if(l.features.forEach((f,p)=>{f.id===void 0&&(f.id=p)}),a.getSource("cluster"))a.getSource("cluster").setData(l);else{console.log("初始化 cluster 数据源..."),a.addSource("cluster",{type:"geojson",data:l,generateId:!0}),a.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),a.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),a.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),a.on("click","cluster-fill",p=>{var y;if(p.features&&p.features.length>0){const m=p.features[0],d=m.id;je.current!==null&&je.current!==void 0&&a.setFeatureState({source:"cluster",id:je.current},{selected:!1}),d!==void 0?(a.setFeatureState({source:"cluster",id:d},{selected:!0}),je.current=d):je.current=null,C(m),K(!0),((y=m.properties)==null?void 0:y.Place)!==void 0&&F(Number(m.properties.Place))}}),a.on("mouseenter","cluster-fill",()=>{a.getCanvas().style.cursor="pointer"}),a.on("mouseleave","cluster-fill",()=>{a.getCanvas().style.cursor=""});const f=l.features;if(f.length>0)try{const p=new Ce.LngLatBounds,y=Math.max(1,Math.floor(f.length/2e3));for(let m=0;m<f.length;m+=y){const d=f[m];if(!((v=d.geometry)!=null&&v.coordinates))continue;const A=d.geometry.type,S=d.geometry.coordinates;A==="Point"?p.extend(S):A==="LineString"||A==="MultiPoint"?S.forEach(B=>p.extend(B)):A==="Polygon"||A==="MultiLineString"?(D=S[0])==null||D.forEach(B=>p.extend(B)):A==="MultiPolygon"&&((M=(L=S[0])==null?void 0:L[0])==null||M.forEach(B=>p.extend(B)))}p.isEmpty()||a.fitBounds(p,{padding:50,duration:1e3})}catch(p){console.error("Fit bounds error:",p)}}},k=()=>{var P;if(!a.getLayer("cluster-fill"))return;const v=null;a.setFilter("cluster-fill",v),a.setFilter("cluster-line",v),a.setFilter("cluster-highlight",v);const D=(()=>{var Le;let Q=1/0,te=-1/0;for(const De of l.features){const ne=Number((Le=De.properties)==null?void 0:Le[u]);Number.isNaN(ne)||ne===-9999||(ne<Q&&(Q=ne),ne>te&&(te=ne))}return{min:Q===1/0?0:Q,max:te===-1/0?0:te}})(),L=I!==null&&E?{min:E.min,max:E.max}:D,M=Z==="city"?L:D,f=M.min,p=M.max;let y;if(u.includes("K_")){const Q=Math.round(((P=Se[u])==null?void 0:P.max)??p),te=Array.from({length:26},(ce,Pe)=>{const Y=Pe/25;let se,ie,le;if(Y<.167){const X=Y/.167;se=0,ie=0,le=Math.round(139+116*X)}else if(Y<.333){const X=(Y-.167)/.167;se=0,ie=Math.round(255*X),le=255}else if(Y<.5){const X=(Y-.333)/.167;se=0,ie=Math.round(255-128*X),le=Math.round(255-255*X)}else if(Y<.667){const X=(Y-.5)/.167;se=Math.round(255*X),ie=255,le=0}else if(Y<.833){const X=(Y-.667)/.167;se=255,ie=Math.round(255-128*X),le=0}else{const X=(Y-.833)/.167;se=255,ie=Math.round(127-127*X),le=0}return`#${se.toString(16).padStart(2,"0")}${ie.toString(16).padStart(2,"0")}${le.toString(16).padStart(2,"0")}`}),De=Array.from({length:Q+1},(ce,Pe)=>te[Math.round(Pe*25/Q)]).slice(0,Q+1),ne=["interpolate",["linear"],["get",u]];for(let ce=0;ce<=Q;ce++)ne.push(ce,De[ce]);y=ne}else u==="CoverRatio"||u==="ISF"||u==="GreenRatio"?y=["interpolate",["linear"],["get",u],f,"#3182bd",p,"#e6550d"]:u.includes("elev")||u.includes("slope")?y=["interpolate",["linear"],["get",u],f,"#31a354",p,"#756bb1"]:y=["interpolate",["linear"],["get",u],f,"#31a354",p,"#756bb1"];a.setPaintProperty("cluster-fill","fill-color",y);const m=I!==null,d=Number(I),B=["case",["any",["==",["get",u],-9999],["==",["get",u],null]],0,m?["case",["==",["to-number",["get","Place"]],d],.8,.15]:.7];a.setPaintProperty("cluster-fill","fill-opacity",B)};a.isStyleLoaded()?(g(),k()):a.once("load",()=>{g(),k()})},[l,I,u]),s.useEffect(()=>{var k,v,D,L;if(!l||I===null)return;const a=r.current;if(!a)return;const g=l.features.filter(M=>{var p;const f=(p=M.properties)==null?void 0:p.Place;return f!==void 0&&Number(f)===Number(I)});if(g.length!==0)try{const M=new Ce.LngLatBounds;let f=0;const p=Math.max(1,Math.floor(g.length/2e3));for(let y=0;y<g.length;y+=p){const m=g[y];if(!((k=m.geometry)!=null&&k.coordinates))continue;const d=m.geometry.type,A=m.geometry.coordinates;d==="Point"?(M.extend(A),f++):d==="LineString"||d==="MultiPoint"?(A.forEach(S=>M.extend(S)),f++):d==="Polygon"||d==="MultiLineString"?((v=A[0])==null||v.forEach(S=>M.extend(S)),f++):d==="MultiPolygon"&&((L=(D=A[0])==null?void 0:D[0])==null||L.forEach(S=>M.extend(S)),f++)}!M.isEmpty()&&f>0&&a.fitBounds(M,{padding:50,duration:1e3})}catch(M){console.error("Fly to error:",M)}},[I]),s.useEffect(()=>((async()=>{(!i.current||r.current)&&console.log("开始初始化地图...");try{const g=new Ce.Map({container:i.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});g.addControl(new Ce.NavigationControl,"top-right"),g.on("load",()=>{console.log("地图样式加载完成")}),g.on("error",k=>{var L;const v=String(((L=k==null?void 0:k.error)==null?void 0:L.message)||(k==null?void 0:k.message)||"");v.includes("ERR_ABORTED")||v.includes("AbortError")||v.includes("Canceled")||v.includes("cancelled")||console.error("地图错误:",k)}),r.current=g,console.log("地图初始化完成")}catch(g){console.error("地图初始化错误:",g)}})(),()=>{r.current&&(r.current.remove(),r.current=null,Je.current=!1)}),[]),s.useEffect(()=>{const a=r.current;if(!a)return;const g=()=>{a.getLayer("simple-tiles")&&a.setLayoutProperty("simple-tiles","visibility",we?"visible":"none")};a.isStyleLoaded()?g():a.once("style.load",g)},[we]);const tt=async a=>{var k;const g=(k=a.target.files)==null?void 0:k[0];if(g){Me.current&&Me.current.abort(),J(!0),re(0),de("正在读取文件..."),t(null),j(!0),ee(URL.createObjectURL(g));try{console.log("开始读取文件:",g.name,"大小:",g.size);let v=[];const D=g.name.endsWith(".zip"),L=g.name.endsWith(".shp");if(!D&&!L){t("请上传 .zip 文件 (包含 Shapefile)"),J(!1);return}de("正在读取文件...");const M=await g.arrayBuffer();re(30),de("正在解析 Shapefile...");const f=await Ue(M);console.log("Shapefile 解析完成:",f),f.type==="FeatureCollection"?v=f.features:Array.isArray(f)?v=f:f.type==="Feature"&&(v=[f]),console.log("解析到的 features 数量:",v.length),re(95),de(`已解析 ${v.length} 个 Features...`);const p={type:"FeatureCollection",features:v};re(98),de("正在处理 Place 数据...");const y=new Map;p.features.forEach(m=>{var S;const d=Number(((S=m.properties)==null?void 0:S.Place)??0);y.has(d)||y.set(d,{id:d,name:`Place ${d}`,featureCount:0});const A=y.get(d);A&&A.featureCount++}),re(100),de("加载完成!"),setTimeout(()=>{Qe(!0),N(p),U(Array.from(y.values()).sort((m,d)=>m.id-d.id)),J(!1),j(!1),o(!1)},500)}catch(v){const D=v instanceof Error?v.message:"未知错误";t(`加载失败: ${D}`),J(!1),o(!1)}}},nt=he.reduce((a,g)=>(a[g.category]||(a[g.category]=[]),a[g.category].push(g),a),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[q&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(ze,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:Ke}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${oe}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[oe,"%"]})]})}),x&&!q?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(mt,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${b}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[b,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:$e,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(ht,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var a;return(a=Re.current)==null?void 0:a.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(ze,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Re,type:"file",accept:".shp,.zip",onChange:tt,className:"hidden"})]})}):null,n&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:n}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(gt,{size:14}),"刷新重试"]})})]}),G&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(pt,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>R(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(xt,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Xe(!we),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${we?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${we?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:I??"",onChange:a=>F(a.target.value?Number(a.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Be=l==null?void 0:l.features)==null?void 0:Be.length)??0,")"]}),w.map(a=>e.jsxs("option",{value:a.id,children:[a.name," (",a.featureCount,")"]},a.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:u,onChange:a=>z(a.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(nt).map(([a,g])=>[e.jsx("optgroup",{label:a.charAt(0).toUpperCase()+a.slice(1),children:g.map(k=>e.jsx("option",{value:k.key,children:k.label},k.key))},a)])})]}),E&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(ft,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:E.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:E.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:E.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:E.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:E.nanCount})]})]})]})]})]}),!G&&e.jsx("button",{onClick:()=>R(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(bt,{size:18})}),O&&h&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[h.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",h.properties.Place]}),h.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",h.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",h.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>K(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Ge,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:he.map(a=>{var k;const g=(k=h.properties)==null?void 0:k[a.key];return g==null?null:e.jsxs("button",{onClick:()=>z(a.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${u===a.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:a.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof g=="number"?g.toFixed(2):g})]},a.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>F(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:i,className:"w-full h-full"}),Te&&l&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Fe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>_e(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Ge,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Ye(Z==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${Z==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:Z==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:u.includes("K_")?(()=>{var v,D;const a=Math.round(((v=Se[u])==null?void 0:v.max)??30),g=Array.from({length:26},(L,M)=>{const f=M/25;let p,y,m;if(f<.167){const d=f/.167;p=0,y=0,m=Math.round(139+116*d)}else if(f<.333){const d=(f-.167)/.167;p=0,y=Math.round(255*d),m=255}else if(f<.5){const d=(f-.333)/.167;p=0,y=Math.round(255-128*d),m=Math.round(255-255*d)}else if(f<.667){const d=(f-.5)/.167;p=Math.round(255*d),y=255,m=0}else if(f<.833){const d=(f-.667)/.167;p=255,y=Math.round(255-128*d),m=0}else{const d=(f-.833)/.167;p=255,y=Math.round(127-127*d),m=0}return`#${p.toString(16).padStart(2,"0")}${y.toString(16).padStart(2,"0")}${m.toString(16).padStart(2,"0")}`}),k=Array.from({length:a+1},(L,M)=>g[Math.round(M*25/a)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((D=he.find(L=>L.key===u))==null?void 0:D.label)||u}),e.jsx("div",{className:"flex flex-wrap gap-px",children:k.map((L,M)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:L}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:M})]},M))})]})})():u==="CoverRatio"||u==="ISF"||u==="GreenRatio"?(()=>{var m;const a=(()=>{var S;let d=1/0,A=-1/0;for(const B of l.features){const P=Number((S=B.properties)==null?void 0:S[u]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>A&&(A=P))}return{min:d===1/0?0:d,max:A===-1/0?0:A}})(),g=I!==null&&E?{min:E.min,max:E.max}:a,k=((m=he.find(d=>d.key===u))==null?void 0:m.label)||u,v=a.max>a.min?Math.max(0,Math.min(1,(g.min-a.min)/(a.max-a.min))):0,D=a.max>a.min?Math.max(0,Math.min(1,(g.max-a.min)/(a.max-a.min))):0,L=Math.max(0,D-v),M=ue("#3182bd"),f=ue("#e6550d"),p=me(M,f,v),y=me(M,f,D);return e.jsxs("div",{children:[Z==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[k,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:I!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${y})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:g.min.toFixed(2)}),e.jsx("span",{children:g.max.toFixed(2)})]})]}),Z==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[k,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(2)}),e.jsx("span",{children:a.max.toFixed(2)})]})]})]})})():u.includes("elev")||u.includes("slope")?(()=>{var m;const a=(()=>{var S;let d=1/0,A=-1/0;for(const B of l.features){const P=Number((S=B.properties)==null?void 0:S[u]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>A&&(A=P))}return{min:d===1/0?0:d,max:A===-1/0?0:A}})(),g=I!==null&&E?{min:E.min,max:E.max}:a,k=((m=he.find(d=>d.key===u))==null?void 0:m.label)||u,v=a.max>a.min?Math.max(0,Math.min(1,(g.min-a.min)/(a.max-a.min))):0,D=a.max>a.min?Math.max(0,Math.min(1,(g.max-a.min)/(a.max-a.min))):0,L=Math.max(0,D-v),M=ue("#31a354"),f=ue("#756bb1"),p=me(M,f,v),y=me(M,f,D);return e.jsxs("div",{children:[Z==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[k,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:I!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${y})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:g.min.toFixed(1)}),e.jsxs("span",{children:[g.max.toFixed(0),"+"]})]})]}),Z==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[k,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(1)}),e.jsxs("span",{children:[a.max.toFixed(0),"+"]})]})]})]})})():(()=>{var m;const a=(()=>{var S;let d=1/0,A=-1/0;for(const B of l.features){const P=Number((S=B.properties)==null?void 0:S[u]);Number.isNaN(P)||P===-9999||(P<d&&(d=P),P>A&&(A=P))}return{min:d===1/0?0:d,max:A===-1/0?0:A}})(),g=I!==null&&E?{min:E.min,max:E.max}:a,k=((m=he.find(d=>d.key===u))==null?void 0:m.label)||u,v=a.max>a.min?Math.max(0,Math.min(1,(g.min-a.min)/(a.max-a.min))):0,D=a.max>a.min?Math.max(0,Math.min(1,(g.max-a.min)/(a.max-a.min))):0,L=Math.max(0,D-v),M=ue("#31a354"),f=ue("#756bb1"),p=me(M,f,v),y=me(M,f,D);return e.jsxs("div",{children:[Z==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[k,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:I!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${L*100}%`,background:`linear-gradient(to right, ${p}, ${y})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:g.min.toFixed(2)}),e.jsx("span",{children:g.max.toFixed(2)})]})]}),Z==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[k,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:a.min.toFixed(2)}),e.jsx("span",{children:a.max.toFixed(2)})]})]})]})})()})]}),!Te&&e.jsx("button",{onClick:()=>_e(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Fe,{size:18})})]})},Mn=()=>{const[i,r]=s.useState(!1),[x,o]=s.useState(!1),[b,c]=s.useState({x:0,y:0}),[n,t]=s.useState("/data/fig/lili/lili_01.png"),[l,N]=s.useState("Exploring the intersection of technology and creativity."),w=rt(),U=st(),F=w.pathname.split("/").filter(Boolean)[0]||"",u={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},z=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],G=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],R=()=>{const _=Math.floor(Math.random()*z.length);return z[_]},E=()=>{const _=Math.floor(Math.random()*G.length);return G[_]};return s.useEffect(()=>{F===""?t(R()):u[F]?t(u[F]):t(R()),N(E())},[F]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 dark:bg-neutral-900 flex flex-col",children:e.jsxs("div",{className:"w-full flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b border-neutral-200 dark:border-neutral-800 p-4 flex justify-between items-center bg-white dark:bg-neutral-900 z-30 shrink-0 relative",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("button",{onClick:()=>r(!i),className:"relative w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-[0px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100","aria-label":i?"Hide profile panel":"Show profile panel",title:i?"Hide profile panel":"Show profile panel",children:[e.jsxs("span",{className:"absolute inset-0 flex flex-col items-center justify-center gap-1",children:[e.jsx("span",{className:"block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400"}),e.jsx("span",{className:"block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400"}),e.jsx("span",{className:"block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400"})]}),"☰"]}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500 dark:text-neutral-400",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("nav",{className:"hidden sm:flex gap-0",children:[e.jsx(ae,{to:"/",onClick:()=>{window.innerWidth<768&&r(!1)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${F===""?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:"Home"})}),[{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"planning",label:"Planning",short:"Planning"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(_=>e.jsx(ae,{to:`/${_.key}`,onClick:()=>{window.innerWidth<768&&r(!1)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${F===_.key?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:_.label})},_.key))]}),e.jsxs("nav",{className:"sm:hidden flex gap-0",children:[e.jsx(ae,{to:"/",onClick:()=>{window.innerWidth<768&&r(!1)},className:`px-3 py-2 text-sm font-medium border-b-4 transition-all ${F===""?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:"Home"})}),[{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}].map(_=>e.jsx(ae,{to:`/${_.key}`,onClick:()=>{window.innerWidth<768&&r(!1)},className:`px-3 py-2 text-sm font-medium border-b-4 transition-all ${F===_.key?"border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950":"border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"}`,children:e.jsx("span",{children:_.label})},_.key))]}),e.jsx(jn,{}),e.jsxs("button",{onClick:()=>{o(!0);const _=b.x+360*2+Math.random()*360,$=b.y+360*2+Math.random()*360;c({x:_,y:$}),setTimeout(()=>{const ee=["planning","design","game","platform","tutorial","about"],ve=ee[Math.floor(Math.random()*ee.length)];U(`/${ve}`),o(!1)},1e3)},className:"flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all",title:"🎲 Explore a random project",children:[e.jsx("div",{className:"w-5 h-5",style:{perspective:"100px"},children:e.jsxs("div",{className:"w-full h-full relative transition-transform duration-1000 ease-out",style:{transform:`rotateX(${b.x}deg) rotateY(${b.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"5px",height:"5px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(180deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-3  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-5 marg w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-5  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateY(90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{}),e.jsx("div",{className:" rounded-full justify-center",style:{width:"4px",height:"4px",backgroundColor:"#dc2626"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-1  w-full h-full justify-center"})]}),e.jsx("div",{className:"absolute w-full h-full bg-white border-gray-400  justify-center rounded flex  p-0.5",style:{transform:"rotateX(90deg) translateZ(10px)"},children:e.jsxs("div",{className:"grid grid-cols-3 border w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]})}),e.jsxs("div",{className:"absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center",style:{transform:"rotateX(-90deg) translateZ(10px)"},children:[e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsxs("div",{className:"grid grid-cols-3  w-full h-full justify-center",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{children:e.jsx("div",{})}),e.jsx("div",{className:"bg-gray-800 rounded-full justify-center",style:{width:"4px",height:"4px"}}),e.jsx("div",{})]}),e.jsx("div",{className:"grid grid-cols-5  w-full h-full justify-center"})]})]})}),e.jsx("span",{className:"text-sm font-medium",children:"Jump"})]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[i&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[n&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:n,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic mb-3",children:['"',l,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300 dark:text-neutral-600",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),i&&e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4 black",children:[n&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:n,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(Ee,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Ee,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Ee,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 dark:border-neutral-800 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-400 italic",children:['"',l,'"']})})]})]})}),e.jsx("section",{className:"flex-1 relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(it,{children:[e.jsx(H,{path:"/",element:e.jsx(wn,{})}),e.jsx(H,{path:"/planning",element:e.jsx(ke,{data:ge,type:"planning"})}),e.jsx(H,{path:"/planning/:id",element:e.jsx(Ne,{data:ge,type:"planning"})}),e.jsx(H,{path:"/design",element:e.jsx(ke,{data:pe,type:"design"})}),e.jsx(H,{path:"/design/:id",element:e.jsx(Ne,{data:pe,type:"design"})}),e.jsx(H,{path:"/game",element:e.jsx(ke,{data:xe,type:"game"})}),e.jsx(H,{path:"/game/:id",element:e.jsx(Ne,{data:xe,type:"game"})}),e.jsx(H,{path:"/platform",element:e.jsx(ke,{data:fe,type:"platform"})}),e.jsx(H,{path:"/platform/:id",element:e.jsx(Ne,{data:fe,type:"platform"})}),e.jsx(H,{path:"/tutorial",element:e.jsx(ke,{data:be,type:"tutorial"})}),e.jsx(H,{path:"/tutorial/:id",element:e.jsx(Ne,{data:be,type:"tutorial"})}),e.jsx(H,{path:"/clusteringeomap",element:e.jsx(Nn,{})}),e.jsx(H,{path:"/about",element:e.jsx(vn,{})}),e.jsx(H,{path:"/contact",element:e.jsx(yn,{})})]})})]})]})})};function Cn(){const[i,r]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(lt,{children:e.jsx(Mn,{})}),!i&&e.jsx(vt,{onFinish:()=>r(!0)})]})}ot.createRoot(document.getElementById("root")).render(e.jsx(Cn,{}));
