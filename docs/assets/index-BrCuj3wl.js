const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-B26NuqWS.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-DsdI-g3Q.js","./PeaceEliteHustCampusDemo-CKWwrGNJ.js","./BMWMetaIslandDemo-DM2oqedJ.js","./riffle-BuqCfcTA.js","./genstyle-DuJ38oKx.js","./genshot-8Uy4GIux.js","./dragon-diffusion-Dj4t-WNK.js","./anyreal-DKKTpW8w.js"])))=>i.map(i=>d[i]);
import{r,j as e,L as te,u as mn,R as fn,c as hn,d as xn,e as bn,f as O,H as yn,g as jn}from"./react-vendor-6zld6QO8.js";import{A as vn,m as qe}from"./framer-DvVmTyA1.js";import{M as wn,r as Nn,a as kn}from"./markdown-q3GborES.js";import{b as Ye}from"./geo-Z02C8O4I.js";import{m as Pe}from"./maplibre-BedwuVXB.js";import{U as Qe,L as _n,D as Dn,R as An,M as Mn,C as Sn,a as Cn,b as In,X as Je,c as en}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const x of d)if(x.type==="childList")for(const b of x.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function p(d){const x={};return d.integrity&&(x.integrity=d.integrity),d.referrerPolicy&&(x.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?x.credentials="include":d.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function s(d){if(d.ep)return;d.ep=!0;const x=p(d);fetch(d.href,x)}})();function Ln({onFinish:n}){const[a,p]=r.useState(!0),s=r.useRef(null),d=r.useRef({x:-1e3,y:-1e3});return r.useEffect(()=>{const x=s.current;if(!x)return;const b=x.getContext("2d");if(!b)return;let h,j=[];const C=()=>{x.width=window.innerWidth,x.height=window.innerHeight},_=u=>{d.current={x:u.clientX,y:u.clientY}},k=u=>{u.touches.length>0&&(d.current={x:u.touches[0].clientX,y:u.touches[0].clientY})};window.addEventListener("resize",C),window.addEventListener("mousemove",_),window.addEventListener("touchmove",k),C();class D{constructor(){this.x=Math.random()*x.width,this.y=Math.random()*x.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>x.width)&&(this.vx*=-1),(this.y<0||this.y>x.height)&&(this.vy*=-1);let P=d.current.x-this.x,G=d.current.y-this.y,F=Math.sqrt(P*P+G*G),E=P/F,U=G/F;const B=150;let M=(B-F)/B;F<B&&(this.x-=E*M*this.density*.5,this.y-=U*M*this.density*.5)}draw(){b&&(b.fillStyle="rgba(255, 255, 255, 0.8)",b.beginPath(),b.arc(this.x,this.y,this.size,0,Math.PI*2),b.fill())}}for(let u=0;u<120;u++)j.push(new D);const R=()=>{b.clearRect(0,0,x.width,x.height);for(let u=0;u<j.length;u++){j[u].update(),j[u].draw();for(let P=u+1;P<j.length;P++){const G=j[u].x-j[P].x,F=j[u].y-j[P].y,E=Math.sqrt(G*G+F*F);E<100&&(b.beginPath(),b.strokeStyle=`rgba(255, 255, 255, ${.2*(1-E/100)})`,b.lineWidth=.6,b.moveTo(j[u].x,j[u].y),b.lineTo(j[P].x,j[P].y),b.stroke())}}h=requestAnimationFrame(R)};return R(),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",C),window.removeEventListener("mousemove",_),window.removeEventListener("touchmove",k)}},[]),e.jsx(vn,{onExitComplete:n,children:a&&e.jsxs(qe.div,{onClick:()=>p(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(qe.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(qe.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const Rn=`---
id: "00"
slug: "chicken-utopia"
title: "CHICKEN UTOPIA"
category: "planning"
year: "2022.4-2022.7"
description: ""
tech: ["Rhino", "建筑设计"]
abstract: "随着城市规模的扩大，乡村生活和田园风光离我们的生活越来越远。在武汉，年均鸡肉消费量达10.2万吨，需要约6万只鸡的供应。这些鸡全部来自远离城市的农村地区，养殖条件可能不卫生，运输和加工过程也无法得到保障。同时，鸡肉品质和销售渠道也存在相关问题。"
solution: "因此，我们旨在通过 CHICKEN TOPIA 项目将鸡肉养殖产业带入城市。透明的工业建筑和建筑结构可以解决高效养鸡、健康鸡肉消费的问题，同时为城市居民提供乡村记忆。为了尽量减少城市土地的占用，该结构采用垂直发展方向，并按照产业链逻辑划分为养殖区、生产区和综合商业区，所有这些区域共享一定的拓扑联系，从而模糊建筑空间，创造出折叠飞扬的空间结构。在建筑内部，每个区域由更小的模块组成，这些模块可以根据场地条件及时调整建筑的内部功能。"
hasDemo: false
icon: "/data/fig/ChickenTopia_logo.jpg"

---

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/ChickenUtopia.mp4"></video>

# 效果展示

![效果展示](/data/fig/ChickenUtopia_(1).jpg)
![效果展示](/data/fig/ChickenUtopia_(2).jpg)
![效果展示](/data/fig/ChickenUtopia_(3).jpg)
`,Pn=`---\r
id: "01"\r
slug: "neurotopia"\r
title: "neurotopia"\r
category: "planning"\r
year: "2023"\r
description: ""\r
tech: ["Rhino","Grasshopper","design"]\r
abstract: "Neurotopia aims to provide shared living and entrepreneurial spaces primarily for young people. This urban design project is located in a former industrial area in Hanyang District, Wuhan, Hubei Province, China. By creating a new metaverse for animation enterprises in Hanyang, the project seeks to revitalize the site and establish a decentralized future community based on the theories of neuronal biological properties and complex systems adaptation."\r
solution: "Specifically, the design introduces the concept of neurons, dividing the space into three categories: "nodes," "connections," and "voids“. Vertical transportation hubs are established at the nodes, connecting prefabricated modular units to each node, promoting a smart city design concept that integrates new transportation and intelligent community systems. In the voids between the nodes, incubator modular units are created to accommodate the evolving scale of enterprises, fostering a dynamic, shared, and co-creative living environment. "\r
hasDemo: false\r
icon: "/data/fig/Neurotopia_logo.jpg"\r
\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Neurotopia.mp4"></video>\r
</div>\r
\r
# 效果展示\r
\r
![效果展示](/data/fig/Neurotopia_(1).jpg)\r
![效果展示](/data/fig/Neurotopia_(2).jpg)\r
![效果展示](/data/fig/Neurotopia_(3).jpg)\r
![效果展示](/data/fig/Neurotopia_(4).jpg)\r
![效果展示](/data/fig/Neurotopia_(5).jpg)\r
\r
---`,En=`---
id: "07"
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
`,Tn=`---
id: "03"
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

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/KnowledgeGraph.mp4"></video>
</div>

![alt text](/data/fig/AAAI2025.jpg)

> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>

![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/01.png)
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/02.png)

> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/03.png)
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/04.png)
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/05.png)

> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告
![alt text](/data/fig/planning/02-knowledge-graph-urban-planning/06.png)
`,Gn=`---
id: "04"
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

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Local%20Climate%20Zone.mp4"></video>
</div>

> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告
![alt text](/data/fig/planning/03-local-climate-zones-urban-heat-resilience/01.png)
![alt text](/data/fig/planning/03-local-climate-zones-urban-heat-resilience/02.png)

abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance."
challenge: "Translating complex urban form findings into practical urban planning policies remains challenging."
solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles."



`,Bn=`---
id: "05"
slug: "urban-heat-resilience-machine-learning"
title: "Assessing Urban Heat Resilience"
category: "Machine Learning"
year: "2025-present"
description: "Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach"
tech: ["GIS","Machine Learning"]
icon: "/data/fig/ml_logo.jpg"
image: ["/data/fig/AAAI2026.jpg"]
---
# Research topic 1 
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

# Research topic 2
“利用机器学习评估城市形态对不同天气状况下热韧性的非线性影响”
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/GBDT2.mp4"></video>
</div>`,zn=`---
id: "06"
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
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/PARTICIPATORY%20URBAN%20REGENERATION%20EMPOWERED%20BY%20ARTIFICAL%20INTELLIGENCE.mp4"></video>
</div>

![alt text](/data/fig/planning/05-participatory-urban-regeneration-empowered-by-artificial-intelligence/01.png)
![alt text](/data/fig/planning/05-participatory-urban-regeneration-empowered-by-artificial-intelligence/02.png)
https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm


![效果展示](/data/fig/PU-1.jpg)
![效果展示](/data/fig/PU-2.jpg)
`,Fn=`---
id: "08"
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
`,Un=`---
id: "01"
slug: "dragon-diffussion"
title: "Dragon Diffussion - AI 创意生产平台"
category: "UI&UX Design"
year: "2023.10-2024.9"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "/data/fig/DragonDiffusion_logo.jpg"
image:["/data/fig/dragon-diffusion-slides/DiffusionProduct_(1).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(2).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(3).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(4).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(5).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(6).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(7).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(8).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(9).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(10).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(11).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(12).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(13).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(14).jpg","/data/fig/dragon-diffusion-slides/DiffusionProduct_(15).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(1).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(2).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(3).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(4).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(5).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(6).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(7).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(8).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(9).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(10).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(11).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(12).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(13).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(14).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(15).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(16).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(17).jpg","/data/fig/dragon-diffusion-slides/DiffusionDesign_(18).jpg"]

---
# 效果展示
<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(1).mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(2).mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(3).mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion.mp4"></video>
</div>

# PPT 汇报

![slide 01](/data/fig/dragon-diffusion-slides/DiffusionProduct_(1).jpg)
![slide 02](/data/fig/dragon-diffusion-slides/DiffusionProduct_(2).jpg)
![slide 03](/data/fig/dragon-diffusion-slides/DiffusionProduct_(3).jpg)
![slide 04](/data/fig/dragon-diffusion-slides/DiffusionProduct_(4).jpg)
![slide 05](/data/fig/dragon-diffusion-slides/DiffusionProduct_(5).jpg)
![slide 06](/data/fig/dragon-diffusion-slides/DiffusionProduct_(6).jpg)
![slide 07](/data/fig/dragon-diffusion-slides/DiffusionProduct_(7).jpg)
![slide 08](/data/fig/dragon-diffusion-slides/DiffusionProduct_(8).jpg)
![slide 09](/data/fig/dragon-diffusion-slides/DiffusionProduct_(9).jpg)
![slide 10](/data/fig/dragon-diffusion-slides/DiffusionProduct_(10).jpg)
![slide 11](/data/fig/dragon-diffusion-slides/DiffusionProduct_(11).jpg)
![slide 12](/data/fig/dragon-diffusion-slides/DiffusionProduct_(12).jpg)
![slide 13](/data/fig/dragon-diffusion-slides/DiffusionProduct_(13).jpg)
![slide 14](/data/fig/dragon-diffusion-slides/DiffusionProduct_(14).jpg)
![slide 15](/data/fig/dragon-diffusion-slides/DiffusionProduct_(15).jpg)
![slide 16](/data/fig/dragon-diffusion-slides/DiffusionProduct_(16).jpg)
![slide 17](/data/fig/dragon-diffusion-slides/DiffusionProduct_(17).jpg)
![slide 18](/data/fig/dragon-diffusion-slides/DiffusionProduct_(18).jpg)
![slide 19](/data/fig/dragon-diffusion-slides/DiffusionProduct_(19).jpg)
![slide 20](/data/fig/dragon-diffusion-slides/DiffusionProduct_(20).jpg)
![slide 21](/data/fig/dragon-diffusion-slides/DiffusionProduct_(21).jpg)
![slide 22](/data/fig/dragon-diffusion-slides/DiffusionProduct_(22).jpg)
![slide 23](/data/fig/dragon-diffusion-slides/DiffusionProduct_(23).jpg)

![slide 24](/data/fig/dragon-diffusion-slides/DiffusionDesign_(1).jpg)
![slide 25](/data/fig/dragon-diffusion-slides/DiffusionDesign_(2).jpg)
![slide 26](/data/fig/dragon-diffusion-slides/DiffusionDesign_(3).jpg)
![slide 27](/data/fig/dragon-diffusion-slides/DiffusionDesign_(4).jpg)
![slide 28](/data/fig/dragon-diffusion-slides/DiffusionDesign_(5).jpg)
![slide 29](/data/fig/dragon-diffusion-slides/DiffusionDesign_(6).jpg)
![slide 30](/data/fig/dragon-diffusion-slides/DiffusionDesign_(7).jpg)
![slide 31](/data/fig/dragon-diffusion-slides/DiffusionDesign_(8).jpg)
![slide 32](/data/fig/dragon-diffusion-slides/DiffusionDesign_(9).jpg)
![slide 33](/data/fig/dragon-diffusion-slides/DiffusionDesign_(10).jpg)
![slide 34](/data/fig/dragon-diffusion-slides/DiffusionDesign_(11).jpg)
![slide 35](/data/fig/dragon-diffusion-slides/DiffusionDesign_(12).jpg)
![slide 36](/data/fig/dragon-diffusion-slides/DiffusionDesign_(13).jpg)
![slide 37](/data/fig/dragon-diffusion-slides/DiffusionDesign_(14).jpg)
![slide 38](/data/fig/dragon-diffusion-slides/DiffusionDesign_(15).jpg)
![slide 39](/data/fig/dragon-diffusion-slides/DiffusionDesign_(16).jpg)
---`,On=`---
id: "02"
slug: "anyreal"
title: "AnyRealAI 虚拟影棚"
category: "UI&UX Design"
year: "2024"
description: "三步生成高真实度商品营销图的 AIGC 内容生产引擎，面向电商与品牌营销场景。"
tech: ["Figma","AI Product Design","SaaS"]
abstract: "AnyReal 是一款面向电商与品牌营销场景的 AI 虚拟影棚 / AIGC 营销内容生产引擎，解决商品营销物料生产成本高、周期长、门槛高的痛点。底层依托自研视觉大模型与 AIGC 联合实验室的科研能力，以真实场景 + 可控可调 + AI 模特为核心差异。"
challenge: "传统商品图拍摄需要 10-20 天、成本 8000-20000 元。市面 AI 工具多为背景替换，无法改变商品展示角度，光影不变，效果不真实。"
solution: "设计了三步生图工作流：上传 3D 资产 → 选场景模板 → 调角度大小生成。搭配背景模版中台、文生图/图生图、图像后处理、视频生成等模块，将生图效率从"天级"降到"分钟级"。"
hasDemo: true
icon: "/data/fig/AnyReal_logo.jpg"
image:["/data/fig/AnyReal/01.jpg","/data/fig/AnyReal/02.jpg","/data/fig/AnyReal/03.jpg","/data/fig/AnyReal/04.jpg","/data/fig/AnyReal/05.jpg","/data/fig/AnyReal/06.jpg","/data/fig/AnyReal/07.jpg","/data/fig/AnyReal/08.jpg","/data/fig/AnyReal/09.jpg","/data/fig/AnyReal/10.jpg","/data/fig/AnyReal/11.jpg","/data/fig/AnyReal/12.jpg","/data/fig/AnyReal/13.jpg","/data/fig/AnyReal/14.jpg","/data/fig/AnyReal/15.jpg","/data/fig/AnyReal/16.jpg","/data/fig/AnyReal/17.jpg","/data/fig/AnyReal/18.jpg","/data/fig/AnyReal/19.jpg","/data/fig/AnyReal/20.jpg","/data/fig/AnyReal/21.jpg","/data/fig/AnyReal/22.jpg","/data/fig/AnyReal/23.jpg","/data/fig/AnyReal/24.jpg"]
---

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/AnyReal.mp4"></video>
</div>

![AnyReal](/data/fig/AnyReal/01.jpg)
![AnyReal](/data/fig/AnyReal/02.jpg)
![AnyReal](/data/fig/AnyReal/03.jpg)
![AnyReal](/data/fig/AnyReal/04.jpg)
![AnyReal](/data/fig/AnyReal/05.jpg)
![AnyReal](/data/fig/AnyReal/06.jpg)
![AnyReal](/data/fig/AnyReal/07.jpg)
![AnyReal](/data/fig/AnyReal/08.jpg)
![AnyReal](/data/fig/AnyReal/09.jpg)
![AnyReal](/data/fig/AnyReal/10.jpg)
![AnyReal](/data/fig/AnyReal/11.jpg)
![AnyReal](/data/fig/AnyReal/12.jpg)
![AnyReal](/data/fig/AnyReal/13.jpg)
![AnyReal](/data/fig/AnyReal/14.jpg)
![AnyReal](/data/fig/AnyReal/15.jpg)
![AnyReal](/data/fig/AnyReal/16.jpg)
![AnyReal](/data/fig/AnyReal/17.jpg)
![AnyReal](/data/fig/AnyReal/18.jpg)
![AnyReal](/data/fig/AnyReal/19.jpg)
![AnyReal](/data/fig/AnyReal/20.jpg)
![AnyReal](/data/fig/AnyReal/21.jpg)
![AnyReal](/data/fig/AnyReal/22.jpg)
![AnyReal](/data/fig/AnyReal/23.jpg)
![AnyReal](/data/fig/AnyReal/24.jpg)

---

# AnyReal 项目文档

## 1. 项目概述

### 1.1 项目背景

AnyReal 是一款面向电商与品牌营销场景的 **AI 虚拟影棚 / AIGC 营销内容生产引擎**，解决"商品营销物料生产成本高、周期长、门槛高"的痛点。底层依托自研**视觉大模型**与 AIGC 联合实验室的科研能力，以真实场景 + 可控可调 + AI 模特为核心差异化优势。

### 1.2 产品定位

- 产品名：**AnyReal AI 虚拟影棚**
- 一句话定位：**三步生成高真实度商品营销图，并延伸至品牌营销视频的 AIGC 内容生产引擎**。
- 核心价值：把传统"10–20 天、数千到上万元"的棚拍/3D 渲染流程，压缩为"数分钟、百元级"的 SaaS 化生成。

### 1.3 目标用户与价值

| 维度 | 说明 |
| --- | --- |
| 核心用户 | 电商商家、品牌方、营销/广告 agencies、家居/泛零售品类运营 |
| 核心痛点 | 商品图拍摄贵、3D 渲染慢且不真实、现有 AI 工具仅背景替换效果差 |
| 交付价值 | 低成本、高真实、可个性化、可批量的营销图文视频产能 |

## 2. 产品功能架构

\`\`\`
AnyReal
├── 商品资产（3D 资产上传 / 训练）
│   ├── 公共商品页 / 我的商品页
│   ├── 上传商品（信息填充、模型上传）
│   └── 3D 模型预览 → 启动训练
├── 工作台（核心生图）
│   ├── 物品模块（分类、搜索）
│   ├── 生图参数（调整角度、调整大小）
│   ├── 结果图展示
│   └── 图片详情页（去水印高清下载 = 主要扣费点）
├── 背景能力
│   ├── 背景模版库
│   ├── 用户上传背景
│   ├── 文生图 / 图生图
│   └── 背景模版中台
├── 图像后处理
│   └── 局部重绘 / 局部擦除 / 贴图迁移 / 尺寸拓展 / 高清放大
├── 视频生成
│   ├── 图生视频 / 物体生视频
│   └── 模板视频
└── 资产库,   ├── 物品库 / 背景库,   └── 广场
\`\`\`

## 3. AI 生图「三步法」

1. **商品上传**：上传商品 3D 模型，环拍视频启动 AI 训练。
2. **场景创建**：从海量场景模板库中选择。
3. **参数调节**：选择商品摆放角度与大小，生成高真实度场景图。

## 4. 竞品对比

| 维度 | 传统棚拍 | 3D 渲染 | AnyReal |
| --- | --- | --- | --- |
| 时间 | 10–20 天 | 3–5 天 | **数分钟** |
| 成本 | 8000–20000 元 | 2000 元 | **0.5 元/张生成，100 元/张高清下载** |
| 门槛 | 专业门槛高 | 设计门槛高 | **低门槛、低学习成本** |

### AnyReal 三大自研优势

| 优势 | 说明 |
| --- | --- |
| **真实场景** | 使用真实场景图而非 AI 生成场景，最终效果更具真实感 |
| **可控可调** | 光影、比例、角度算法自适应，且支持手动精准调整 |
| **添加模特** | 可生成 AI 模特与家具的交互，真实生活气息强 |

## 5. 商业模式

- 商品训练服务：**1000 元/件**
- 商品图生成：**0.5 元/张**
- 高清商品图下载：**100 元/张**

---

*说明：本文档为基于 AnyReal 产品介绍材料的项目综述，涉及量化经营指标请以内部最新数据为准。*
`,Wn=`---
id: "03"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "/data/fig/Genshot_logo.jpg"
image:["/data/fig/genshot/Genshot_(1).jpg","/data/fig/genshot/Genshot_(2).jpg","/data/fig/genshot/Genshot_(3).jpg","/data/fig/genshot/Genshot_(4).jpg","/data/fig/genshot/Genshot_(5).jpg","/data/fig/genshot/Genshot_(6).jpg","/data/fig/genshot/Genshot_(7).jpg","/data/fig/genshot/Genshot_(8).jpg","/data/fig/genshot/Genshot_(9).jpg","/data/fig/genshot/Genshot_(10).jpg","/data/fig/genshot/Genshot_(11).jpg","/data/fig/genshot/Genshot_(12).jpg","/data/fig/genshot/Genshot_(13).jpg","/data/fig/genshot/Genshot_(14).jpg","/data/fig/genshot/Genshot_(15).jpg","/data/fig/genshot/Genshot_(16).jpg","/data/fig/genshot/Genshot_(17).jpg","/data/fig/genshot/Genshot_(18).jpg","/data/fig/genshot/Genshot_(19).jpg","/data/fig/genshot/Genshot_(20).jpg","/data/fig/genshot/Genshot_(21).jpg","/data/fig/genshot/Genshot_(22).jpg","/data/fig/genshot/Genshot_(23).jpg","/data/fig/genshot/Genshot_(24).jpg","/data/fig/genshot/Genshot_(25).jpg","/data/fig/genshot/Genshot_(26).jpg","/data/fig/genshot/Genshot_(27).jpg","/data/fig/genshot/Genshot_(28).jpg"]

---
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Genshot.mp4"></video>
</div>
![Genshot1](/data/fig/genshot/Genshot_(1).jpg)
![Genshot2](/data/fig/genshot/Genshot_(2).jpg)
![Genshot3](/data/fig/genshot/Genshot_(3).jpg)
![Genshot4](/data/fig/genshot/Genshot_(4).jpg)
![Genshot5](/data/fig/genshot/Genshot_(5).jpg)
![Genshot6](/data/fig/genshot/Genshot_(6).jpg)
![Genshot7](/data/fig/genshot/Genshot_(7).jpg)
![Genshot8](/data/fig/genshot/Genshot_(8).jpg)
![Genshot9](/data/fig/genshot/Genshot_(9).jpg)
![Genshot10](/data/fig/genshot/Genshot_(10).jpg)
![Genshot11](/data/fig/genshot/Genshot_(11).jpg)
![Genshot12](/data/fig/genshot/Genshot_(12).jpg)
![Genshot13](/data/fig/genshot/Genshot_(13).jpg)
![Genshot14](/data/fig/genshot/Genshot_(14).jpg)
![Genshot15](/data/fig/genshot/Genshot_(15).jpg)
![Genshot16](/data/fig/genshot/Genshot_(16).jpg)
![Genshot17](/data/fig/genshot/Genshot_(17).jpg)
![Genshot18](/data/fig/genshot/Genshot_(18).jpg)
![Genshot19](/data/fig/genshot/Genshot_(19).jpg)
![Genshot20](/data/fig/genshot/Genshot_(20).jpg)
![Genshot21](/data/fig/genshot/Genshot_(21).jpg)
![Genshot22](/data/fig/genshot/Genshot_(22).jpg)
![Genshot23](/data/fig/genshot/Genshot_(23).jpg)
![Genshot24](/data/fig/genshot/Genshot_(24).jpg)
![Genshot25](/data/fig/genshot/Genshot_(25).jpg)
![Genshot26](/data/fig/genshot/Genshot_(26).jpg)
![Genshot27](/data/fig/genshot/Genshot_(27).jpg)
![Genshot28](/data/fig/genshot/Genshot_(28).jpg)`,Vn=`---
id: "04"
slug: "genstyle"
title: "Genstyle - Daily Outfit Inspiration Delivered"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "/data/fig/Genstyle_logo.jpg"
image: ["/data/fig/genstyle/genstyle_(1).jpg","/data/fig/genstyle/genstyle_(2).jpg","/data/fig/genstyle/genstyle_(3).jpg","/data/fig/genstyle/genstyle_(4).jpg","/data/fig/genstyle/genstyle_(5).jpg","/data/fig/genstyle/genstyle_(6).jpg","/data/fig/genstyle/genstyle_(7).jpg","/data/fig/genstyle/genstyle_(8).jpg","/data/fig/genstyle/genstyle_(9).jpg","/data/fig/genstyle/genstyle_(10).jpg","/data/fig/genstyle/genstyle_(11).jpg","/data/fig/genstyle/genstyle_(12).jpg","/data/fig/genstyle/genstyle_(13).jpg","/data/fig/genstyle/genstyle_(14).jpg","/data/fig/genstyle/genstyle_(15).jpg","/data/fig/genstyle/genstyle_(16).jpg","/data/fig/genstyle/genstyle_(17).jpg","/data/fig/genstyle/genstyle_(18).jpg","/data/fig/genstyle/genstyle_(19).jpg","/data/fig/genstyle/genstyle_(20).jpg","/data/fig/genstyle/genstyle_(21).jpg","/data/fig/genstyle/genstyle_(22).jpg","/data/fig/genstyle/genstyle_(23).jpg","/data/fig/genstyle/genstyle_(24).jpg","/data/fig/genstyle/genstyle_(25).jpg","/data/fig/genstyle/genstyle_(26).jpg","/data/fig/genstyle/genstyle_(27).jpg","/data/fig/genstyle/genstyle_(28).jpg","/data/fig/genstyle/genstyle_(29).jpg","/data/fig/genstyle/genstyle_(30).jpg","/data/fig/genstyle/genstyle_(31).jpg","/data/fig/genstyle/genstyle_(32).jpg","/data/fig/genstyle/genstyle_(33).jpg","/data/fig/genstyle/genstyle_(34).jpg","/data/fig/genstyle/genstyle_(35).jpg","/data/fig/genstyle/genstyle_(36).jpg"
]

---


# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/genstyle.mp4"></video>
</div>

![genstyle](/data/fig/genstyle/genstyle_(1).jpg)
![genstyle](/data/fig/genstyle/genstyle_(2).jpg)
![genstyle](/data/fig/genstyle/genstyle_(3).jpg)
![genstyle](/data/fig/genstyle/genstyle_(4).jpg)
![genstyle](/data/fig/genstyle/genstyle_(5).jpg)
![genstyle](/data/fig/genstyle/genstyle_(6).jpg)
![genstyle](/data/fig/genstyle/genstyle_(7).jpg)
![genstyle](/data/fig/genstyle/genstyle_(8).jpg)
![genstyle](/data/fig/genstyle/genstyle_(9).jpg)
![genstyle](/data/fig/genstyle/genstyle_(10).jpg)
![genstyle](/data/fig/genstyle/genstyle_(11).jpg)
![genstyle](/data/fig/genstyle/genstyle_(12).jpg)
![genstyle](/data/fig/genstyle/genstyle_(13).jpg)
![genstyle](/data/fig/genstyle/genstyle_(14).jpg)
![genstyle](/data/fig/genstyle/genstyle_(15).jpg)
![genstyle](/data/fig/genstyle/genstyle_(16).jpg)
![genstyle](/data/fig/genstyle/genstyle_(17).jpg)
![genstyle](/data/fig/genstyle/genstyle_(18).jpg)
![genstyle](/data/fig/genstyle/genstyle_(19).jpg)
![genstyle](/data/fig/genstyle/genstyle_(20).jpg)
![genstyle](/data/fig/genstyle/genstyle_(21).jpg)
![genstyle](/data/fig/genstyle/genstyle_(22).jpg)
![genstyle](/data/fig/genstyle/genstyle_(23).jpg)
![genstyle](/data/fig/genstyle/genstyle_(24).jpg)
![genstyle](/data/fig/genstyle/genstyle_(25).jpg)
![genstyle](/data/fig/genstyle/genstyle_(26).jpg)
![genstyle](/data/fig/genstyle/genstyle_(27).jpg)
![genstyle](/data/fig/genstyle/genstyle_(28).jpg)
![genstyle](/data/fig/genstyle/genstyle_(29).jpg)
![genstyle](/data/fig/genstyle/genstyle_(30).jpg)
![genstyle](/data/fig/genstyle/genstyle_(31).jpg)
![genstyle](/data/fig/genstyle/genstyle_(32).jpg)
![genstyle](/data/fig/genstyle/genstyle_(33).jpg)
![genstyle](/data/fig/genstyle/genstyle_(34).jpg)
![genstyle](/data/fig/genstyle/genstyle_(35).jpg)
![genstyle](/data/fig/genstyle/genstyle_(36).jpg)`,Hn=`---
id: "05"
slug: "riffle-ai-game-generation-tool"
title: "Riffle - AI game Generation Tool"
category: "UI&UX Design"
year: "2026"
description: "An AI-powered game generation tool"
tech: ["Figma","React","TypeScript"]
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."
icon: "/data/fig/Riffle_logo.jpg"
hasDemo: true
image:["/data/fig/riffle/Riffle_(1).jpg","/data/fig/riffle/Riffle_(2).jpg","/data/fig/riffle/Riffle_(3).jpg","/data/fig/riffle/Riffle_(4).jpg","/data/fig/riffle/Riffle_(9).jpg","/data/fig/riffle/Riffle_(10).jpg","/data/fig/riffle/Riffle_(11).jpg","/data/fig/riffle/Riffle_(12).jpg","/data/fig/riffle/Riffle_(13).jpg","/data/fig/riffle/Riffle_(14).jpg","/data/fig/riffle/Riffle_(15).jpg","/data/fig/riffle/Riffle_(16).jpg","/data/fig/riffle/Riffle_(17).jpg","/data/fig/riffle/Riffle_(18).jpg","/data/fig/riffle/Riffle_(19).jpg","/data/fig/riffle/Riffle_(20).jpg","/data/fig/riffle/Riffle_(21).jpg"]

---
# 项目网页链接
https://www.riffle.games/

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Riffle.mp4"></video>
</div>
![效果展示](/data/fig/riffle/Riffle_(1).jpg)
![效果展示](/data/fig/riffle/Riffle_(2).jpg)
![效果展示](/data/fig/riffle/Riffle_(3).jpg)
![效果展示](/data/fig/riffle/Riffle_(4).jpg)
![效果展示](/data/fig/riffle/Riffle_(9).jpg)
![效果展示](/data/fig/riffle/Riffle_(10).jpg)
![效果展示](/data/fig/riffle/Riffle_(11).jpg)
![效果展示](/data/fig/riffle/Riffle_(12).jpg)
![效果展示](/data/fig/riffle/Riffle_(13).jpg)
![效果展示](/data/fig/riffle/Riffle_(14).jpg)
![效果展示](/data/fig/riffle/Riffle_(15).jpg)
![效果展示](/data/fig/riffle/Riffle_(16).jpg)
![效果展示](/data/fig/riffle/Riffle_(17).jpg)
![效果展示](/data/fig/riffle/Riffle_(18).jpg)
![效果展示](/data/fig/riffle/Riffle_(19).jpg)
![效果展示](/data/fig/riffle/Riffle_(20).jpg)
![效果展示](/data/fig/riffle/Riffle_(21).jpg)

---`,$n=`---
id: "06"
slug: "bazi-fengshui-analysis"
title: "Bazi - Fengshui Analysis Application"
category: "UI&UX Design"
year: "2025"
description: "An app that provides personalized AI Fengshui insights based on users' birth data and environmental factors."
tech: ["Figma","React","TypeScript"]
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."
icon: "/data/fig/Bazi_logo.jpg"
image:["/data/fig/bazi/01.jpg", "/data/fig/bazi/02.jpg", "/data/fig/bazi/03.jpg", "/data/fig/bazi/04.jpg", "/data/fig/bazi/05.jpg", "/data/fig/bazi/06.jpg"]

---

# 效果展示

![效果展示](/data/fig/bazi/01.jpg)
![效果展示](/data/fig/bazi/02.jpg)
![效果展示](/data/fig/bazi/03.jpg)
![效果展示](/data/fig/bazi/04.jpg)
![效果展示](/data/fig/bazi/05.jpg)
![效果展示](/data/fig/bazi/06.jpg)
`,qn=`---
id: "07"
slug: "early-campus-experience"
title: "早期校园经历 — 1037拼拼 & persLEARN"
category: "UI&UX Design"
year: "2023-03-01~2024-03-01"
description: "本科期间在华科Pivot Studio的校园产品设计与实践，涵盖校园拼团平台与科学思维教育平台。"
tech: ["Figma","React","TypeScript"]
icon: "/data/fig/1037pinpin_logo.jpg"
image:["/data/fig/1037pinpin-slides/1037pinpin_(1).jpg","/data/fig/1037pinpin-slides/1037pinpin_(2).jpg","/data/fig/1037pinpin-slides/1037pinpin_(3).jpg","/data/fig/1037pinpin-slides/1037pinpin_(4).jpg","/data/fig/1037pinpin-slides/1037pinpin_(5).jpg","/data/fig/1037pinpin-slides/1037pinpin_(6).jpg","/data/fig/1037pinpin-slides/1037pinpin_(7).jpg","/data/fig/1037pinpin-slides/1037pinpin_(8).jpg","/data/fig/1037pinpin-slides/1037pinpin_(9).jpg","/data/fig/1037pinpin-slides/1037pinpin_(10).jpg","/data/fig/1037pinpin-slides/1037pinpin_(11).jpg","/data/fig/1037pinpin-slides/1037pinpin_(12).jpg","/data/fig/1037pinpin-slides/1037pinpin_(13).jpg"]

---

# 效果展示

## 1037拼拼

![slide 01](/data/fig/1037pinpin-slides/1037pinpin_(1).jpg)
![slide 02](/data/fig/1037pinpin-slides/1037pinpin_(2).jpg)
![slide 03](/data/fig/1037pinpin-slides/1037pinpin_(3).jpg)
![slide 04](/data/fig/1037pinpin-slides/1037pinpin_(4).jpg)
![slide 05](/data/fig/1037pinpin-slides/1037pinpin_(5).jpg)
![slide 06](/data/fig/1037pinpin-slides/1037pinpin_(6).jpg)
![slide 07](/data/fig/1037pinpin-slides/1037pinpin_(7).jpg)
![slide 08](/data/fig/1037pinpin-slides/1037pinpin_(8).jpg)
![slide 09](/data/fig/1037pinpin-slides/1037pinpin_(9).jpg)
![slide 10](/data/fig/1037pinpin-slides/1037pinpin_(10).jpg)
![slide 11](/data/fig/1037pinpin-slides/1037pinpin_(11).jpg)
![slide 12](/data/fig/1037pinpin-slides/1037pinpin_(12).jpg)
![slide 12](/data/fig/1037pinpin-slides/1037pinpin_(13).jpg)

## persLEARN — 论文文献平台
项目时间：2023年

persLEARN 是我在本科期间参与的另一个教育类产品设计项目，旨在通过互动模块帮助学生培养科学思维能力。
![persLEARN效果展示](/data/fig/perslearn/01.jpg)
![persLEARN效果展示](/data/fig/perslearn/02.jpg)
![persLEARN效果展示](/data/fig/perslearn/03.jpg)
![persLEARN效果展示](/data/fig/perslearn/04.jpg)
![persLEARN效果展示](/data/fig/perslearn/05.jpg)
![persLEARN效果展示](/data/fig/perslearn/06.jpg)
![persLEARN效果展示](/data/fig/perslearn/07.jpg)
![persLEARN效果展示](/data/fig/perslearn/08.jpg)
![persLEARN效果展示](/data/fig/perslearn/09.jpg)
![persLEARN效果展示](/data/fig/perslearn/10.jpg)

---
`,Kn=`---\r
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
`,Xn=`---\r
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
`,Zn=`---\r
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
`,Yn=`---\r
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
同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。`,Qn=`---\r
id: "05"\r
slug: "kittylovecarrots"\r
title: "指萝卜 - 个人开发微信小游戏"\r
category: "Game"\r
year: "2026-2 - on going"\r
description: "指萝卜小游戏与微信小游戏完整开发流程合并展示。"\r
tech: ["WeChat Mini Program", "游戏开发", "Figma", "AI生图"]\r
abstract: " "\r
challenge: "设计一款既有趣又具有教育意义的儿童游戏，同时兼顾游戏开发过程中的技术实现与设计难点。"\r
solution: "我们开发了一款名为 Kitty Love Carrots 的节奏小游戏，通过鼓点节奏（drum rhythm）的互动玩法，引导儿童认识胡萝卜相关知识。游戏采用简单易上手且富有趣味性的机制，让孩子们能够在轻松愉快的游戏体验中，以互动探索的方式学习和了解胡萝卜。"\r
hasDemo: true\r
icon: "/data/fig/Kittylovecarrots_logo.jpg"\r
image: ["/data/fig/kittylovecarrots-1.png","/data/fig/kittylovecarrots-2.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](/data/fig/kittylovecarrots-1.png)
![效果展示](/data/fig/kittylovecarrots-2.png)\r
\r
## 一个人怎么做游戏\r
\r
这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。\r
\r
### 为什么把这两个内容合并？\r
\r
指萝卜本体是一个微信小游戏项目，而下面这部分是同一套开发路径的复盘，记录了从设计、开发到上线的完整过程。\r
\r
## 01 设计\r
\r
### 设计稿 figma\r
\r
https://www.figma.com/ 下载，打开打开到本地。注册账号并且登录，尽量不要使用qq邮箱。\r
\r
在这里，我们会开始画项目的设计稿。\r
\r
<imagecarousel images="/data/fig/games/wechat-mini-game-01.png,/data/fig/games/wechat-mini-game-02.png,/data/fig/games/wechat-mini-game-03.png,/data/fig/games/wechat-mini-game-04.png" captions="Figma design draft - main interface|Figma design draft - game elements|Figma design draft - 具体的流程添加示意|Figma design draft - final output"></imagecarousel>\r
\r
### ai跑图\r
\r
#### chatgpt/gemini\r
使用chatgpt/gemini nano bannana等ai工具，根据设计稿生成对应的图片。\r
\r
<imagecarousel images="/data/fig/games/wechat-mini-game-chatgpt.png,/data/fig/games/wechat-mini-game-gemini.png" captions="chatgpt|gemini nanobanna"></imagecarousel>\r
\r
#### lovart.ai\r
推荐使用lovart.ai。每天有免费的5张图的图片生成额度。\r
https://www.lovart.ai/\r
\r
可以生成对应的游戏ui和游戏插画，此处我示意了对应的帽子的设计。\r
![AI generated cat with hats](/data/fig/games/wechat-mini-game-ai-image.png)\r
\r
#### figma professional\r
可以尝试使用figma professional对图片进行微调。\r
figma professional version中，新增了对图片的处理，支持裁剪、去除背景、局部抠图（局部清理）、prompt编辑、矢量化（！！！）\r
<imagecarousel images="/data/fig/games/wechat-mini-game-figma-edit-01.png,/data/fig/games/wechat-mini-game-figma-edit-02.png,/data/fig/games/wechat-mini-game-figma-edit-03.png" captions="Figma AI image editing - selecting the cat|Figma AI image editing - adding prompt|Figma AI image editing - model selection"></imagecarousel>\r
\r
## 02 微信小游戏 code\r
\r
### 微信小游戏项目结构\r
\r
打开微信开发者工具\r
\r
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html\r
\r
![下载页面](/data/fig/games/wechat-mini-game-devtools-03.png)\r
\r
下载到本地，如果在本地，可以看到。\r
\r
![微信开发者工具界面](/data/fig/games/wechat-mini-game-devtools-01.png)
![微信开发者工具项目结构](/data/fig/games/wechat-mini-game-devtools-02.png)\r
\r
### 01 使用vibe三方平台打开微信小程序编译代码\r
\r
这里我一般用的是trae CN, trae 也可以，但是我个人比较喜欢trae CN, 因为trae CN 目前的免费模型比较好。可以考虑使用windsurf代替。\r
\r
https://www.trae.cn/\r
\r
在三方平台打开，虽然还是得打开微信开发者工具去编辑，但是不会太复杂。\r
\r
好了。让我们看看我们目前的游戏项目框架。\r
\r
微信小游戏基于的游戏语言是：JavaScript。但是微信小游戏的游戏引擎是：微信小游戏引擎。\r
\r
**目录概览**\r
\r
\`\`\`\r
├── audio/                           音频资源\r
│   ├── background.mp3\r
│   ├── carrot.mp3\r
│   ├── ...\r
├── images/                          图片资源\r
│   ├── card.png                     卡片背景\r
│   ├── ...(后续将图片素材完全迁移，通过CDN访问)\r
├── js/\r
│   ├── base/                        基础能力\r
│   │   ├── animation.js             帧动画\r
│   │   ├── pool.js                  对象池\r
│   │   └── sprite.js                精灵结构\r
│   ├── components/                  复用组件\r
│   │   ├── Cat.js\r
│   │   ├── DraggableItem.js\r
│   │   └── scene-items.js\r
│   ├── libs/\r
│   │   └── tinyemitter.js           事件库\r
│   ├── runtime/                     运行时支持\r
│   │   ├── background.js\r
│   │   ├── cloudflareApi.js         远端接口封装\r
│   │   ├── gameinfo.js\r
│   │   ├── music.js\r
│   │   ├── objectPool.js\r
│   │   └── resourceManager.js\r
│   ├── sprites/                     主要场景与页面\r
│   │   ├── saytheword.js            词语节奏游戏\r
│   │   ├── dress.js                 换装页逻辑\r
│   │   ├── homeEvent.js             主页触控事件封装\r
│   │   └── closeButton.js           通用关闭按钮\r
│   └── render.js                    基础渲染信息\r
├── .vscode/settings.json            IDE 设置\r
├── .eslintrc.js                     代码规范\r
├── Cloudflare-Workers-指南.md       云端部署与联调说明\r
├── README.md                        项目说明\r
├── game.js                          主入口与场景管理\r
├── game.json                        运行时配置\r
├── project.config.json              微信开发者工具配置\r
└── project.private.config.json      个人配置\r
\`\`\`\r
\r
具体的功能有空补上。那么就可以开始做一些小游戏了！\r
注意：资产文件的限制比较多，一开始不要设计太大的图片。demo做完了之后，可以参考02 CDN资产配置，将素材上传到Cloudflare R2库中。\r
\r
### 02 CDN资产配置 (免费图床)\r
\r
CDN（内容分发网络）资产是指分布在不同地理位置的服务器节点及其缓存的内容，旨在将HTML、图像、视频等静态/动态数据缓存到靠近用户的边缘节点，从而实现加速访问、降低源站带宽压力、提高可靠性并防御DDoS攻击。其核心价值在于提升用户体验。\r
\r
由于微信小程序的界面对代码的大小有一定的限制，所以我们不能把所有的图片素材都内置，我是直接把素材放在了Cloudflare上访问。Cloudflare R2 免费有每月10G 存储，100 万次 A 类操作，1000 万次 B 类操作，对于个人用户来说完全足够了。\r
\r
在cloudflare中的R2库里面添加一个文件夹，把所有的图片素材上传到那里，然后在game.json中配置对应的路径。\r
![CDN资产](/data/fig/games/wechat-mini-game-cdn.png)\r
\r
## 03 发布与审核\r
\r
### 测试版、开发版、正式版\r
\r
在微信开发者工具中，我们可以发布不同的版本：\r
\r
- **测试版** - 用于内部测试，不面向公众\r
- **开发版** - 面向公众测试，可邀请好友测试\r
- **正式版** - 正式发布，面向所有用户\r
\r
个人开发者只能有15个测试用户。发布到正式版的审核很严格，需要完成\r
\r
### 审核流程与时间\r
\r
微信小程序的审核流程比较严格，从首次提交到最终通过审核大约需要 **一个月** 的时间。审核流程包括：\r
\r
1. **微信认证** - 企业/个人主体认证\r
2. **小游戏资质审核** - 游戏类目需要额外的资质\r
3. **代码发布审核** - 每次代码更新都需要审核\r
4. **适龄审核** - 游戏内容分级审核\r
5. **ICP备案审核** - 根据政策政策进行ICP备案\r
![alt text](/data/fig/games/wechat-mini-game-verification.png)\r
![审核通知时间线](/data/fig/games/wechat-mini-game-review-timeline.png)\r
\r
> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。\r
\r
发布到正式版之后，就可以开始看游戏的用户流量情况了。\r
![alt text](/data/fig/games/wechat-mini-game-data-visual.png)\r
\r
\r
## godot引擎，辅助游戏。\r
我意识到我可能需要更复杂的\r
![alt text](image.png)\r
![alt text](image-1.png)\r
![alt text](image-2.png)\r
\r
## 源码目录介绍\r
\`\`\`\r
----godot-loader.js              //引擎加载器\r
+---engine\r
|       demo-pck.bin             //Demo场景资源包, .bin就是.pck文件, 把你自己的资源文件打包成.pck文件更改后缀名为.bin, 然后放到这里就可以了, 要改名字则修改game.js中的资源路径\r
|       game.js                  //godot 引擎主程序\r
|       godot-sdk.js             //godot适配微信sdk\r
|       godot.js                 //godot 引擎主程序\r
|       godot.wasm.br            //wasm文件\r
|\r
+---images\r
        background.jpg           //游戏背景图片\r
        logo.png                 //游戏logo图片\r
\r
\`\`\`\r
\r
## 其它说明\r
ios运行请在小游戏后台开通高性能+模式, 操作方法: 功能->游戏能力地图->研发能力->生成提效包->高性能模式\r
\r
\r
\r
\r
## 04微信小游戏软著\r
\r
> 📌 **参考阅读**  \r
> [CSDN：小游戏软著申请全流程](https://blog.csdn.net/oSuiFeng788/article/details/143061373?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-143061373-blog-100574718.235^v43^pc_blog_bottom_relevance_base6&spm=1001.2101.3001.4242.3&utm_relevant_index=6)\r
> [软著知乎经验分享帖] https://zhuanlan.zhihu.com/p/681006624\r
\r
---\r
\r
### 🎮 为什么一定要申请软著？\r
| 平台 | 上线前是否必须软著 |\r
|------|--------------------|\r
| 微信小程序 | ❌ 可后补 |\r
| 抖音小游戏 | ✅ 强制提交 |\r
| OPPO、vivo、小米等 | ✅ 强制提交 |\r
\r
> ⚠️ 依据《计算机软件著作权登记办法》第 20 条，**受理后 60 日内**完成审查，**请至少提前 2 个月准备**。\r
\r
---\r
\r
### 🚀 全流程线上 · 0 跑腿\r
1. 注册 + 实名认证（1–3 个工作日）  \r
![alt text](/data/fig/games/object-storage.png)\r
![alt text](/data/fig/games/copyright-protection-center.png)\r
\r
2. 在线填报 + 电子签章  \r
3. 审查通过后**直接下载电子证书**  \r
	→ 无需邮寄纸质材料，**全程免费**。\r
\r
---\r
\r
### 🧩 材料一览（可点击展开）\r
<details>\r
<summary>1️⃣ 程序鉴别资料（源码）</summary>\r
\r
- **连续前 30 页 + 后 30 页**（每页 ≥ 50 行）\r
- 若总代码 ≤ 60 页，**全部提交**\r
- 页眉：软件名称 + 版本号（与申请表一致）\r
- 页脚：居中页码（1–60）\r
\r
> 工具推荐：\r
> \`cloc\` / \`git log --stat\` 快速统计行数 → 导出 PDF\r
</details>\r
\r
<details>\r
<summary>2️⃣ 文档鉴别资料（说明书 / 流程图 / 用户手册 三选一）</summary>\r
\r
- **连续前 30 页 + 后 30 页**（每页 ≥ 30 行）\r
- 建议直接导出**Figma 交互原型 + 文字说明** → PDF\r
- 页码规则同上\r
</details>\r
\r
<details>\r
<summary>3️⃣ 其余常规资料</summary>\r
\r
- 申请表（系统自动生成）\r
- 身份证正反面 + 手持照（实名认证）\r
- 软件名称、版本号、开发完成日期、权利范围等\r
</details>\r
\r
---\r
\r
### 📝 六步极速填报\r
1. 选择办理身份（个人 / 企业）\r
2. 填写软件基本信息\r
3. 填写开发信息（团队、时间、软硬件环境）\r
4. **软件功能与特点**（⚠️ 最多字数，建议提前写好）\r
5. 确认信息 → 生成**签章页**\r
6. 打印 → 手写签名 → 扫描上传 → **提交**\r
\r
---\r
\r
### ⏱️ 关键时间节点\r
| 阶段 | 时长 | 备注 |\r
|------|------|------|\r
| 实名认证 | 1–3 工作日 | 一次性通过 |\r
| 材料准备 | 1–3 天 | 用脚本导出 PDF 最快 |\r
| 审查周期 | **60 日内** | 无补正情况下 |\r
| 补正材料 | +30 日 | 收到通知后需重新提交 |\r
\r
---\r
\r
### 🎉 审查通过\r
- 短信 + 邮件提醒\r
- 登录后台即可**下载电子证书**（带官方水印）\r
- 后续平台上线时**直接上传 PDF** 即可。\r
`,Jn=`---\r
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
https://learn.u3d.cn/tutorial/instant-game-joker?chapterId=64f5962ca571d50021bb3afb&sectionId=64f5962ca571d50021bb3afa`,et=`---
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
`,nt=`---
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
`,tt=`---
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

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/epstein.mp4"></video>

</div>
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
`,at=`---
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
`,it=`---
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
`,st=`---
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
`,rt=`---
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
`,ot=`---
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

## 04 日常使用。`,lt=`---
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
`,dt=`---
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

`,ct=`---
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

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,gt=`---\r
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
> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function pt(n){const a=/^---\r?\n([\s\S]*?)\r?\n---/,p=n.match(a);let s={},d=n;if(p){const b=p[1];d=n.slice(p[0].length).trim();const h=b.split(/\r?\n/);let j=null,C=[];h.forEach(_=>{if(_.trim()==="")return;const D=_.indexOf(":");if(D!==-1&&!_.startsWith(" ")){j&&(s[j]=C.join(`
`)),j=_.slice(0,D).trim();let R=_.slice(D+1).trim();R==="|"?C=[]:R===""?C=[]:(s[j]=R,j=null,C=[])}else j&&_.startsWith("  ")&&C.push(_.slice(2))}),j&&C.length>0&&(s[j]=C.join(`
`)),Object.keys(s).forEach(_=>{let k=s[_];if(typeof k=="string")if(k=k.trim(),k.startsWith('"')&&k.endsWith('"')&&(k=k.slice(1,-1)),typeof k=="string"&&k.includes(`
`)&&/^\s*-/.test(k)){const D=k.split(/\r?\n/).map(R=>R.replace(/^\s*-\s*/,"").trim()).filter(R=>R!=="");s[_]=D.map(R=>R.startsWith('"')&&R.endsWith('"')||R.startsWith("'")&&R.endsWith("'")?R.slice(1,-1):R)}else if(k.startsWith("[")&&k.endsWith("]"))try{s[_]=JSON.parse(k)}catch{s[_]=[k.slice(1,-1).trim()]}else k==="true"?s[_]=!0:k==="false"?s[_]=!1:!isNaN(Number(k))&&k.trim()!==""?s[_]=Number(k):s[_]=k})}let x=[];if(Array.isArray(s.image)&&s.image.length>0)x=s.image;else{const b=/!\[.*?\]\(([^)\s]+)\)/g;let h;for(;(h=b.exec(d))!==null;)x.push(h[1])}return{id:s.id||"",slug:s.slug||"",title:s.title||"",category:s.category||"",year:s.year||"",description:s.description||"",tech:s.tech||[],abstract:s.abstract||"",challenge:s.challenge||"",solution:s.solution||"",hasDemo:s.hasDemo||!1,icon:s.icon||"",code:s.code||"",logo:s.icon||"",image:x,content:d}}function L(n){const a=pt(n);return{id:a.id,slug:a.slug,title:a.title,category:a.category,year:a.year,description:a.description,tech:a.tech,hasDemo:a.hasDemo,details:{abstract:a.abstract,description:a.description,challenge:a.challenge,solution:a.solution,logo:a.logo,icon:a.icon,code:a.code,image:a.image,content:a.content}}}const Ee=[L(Rn),L(Pn),L(Tn),L(Gn),L(Bn),L(zn),L(En),L(Fn)],Te=[L(Un),L(On),L(Wn),L(Vn),L(Hn),L($n),L(qn)],Ge=[L(Kn),L(Xn),L(Zn),L(Yn),L(Qn),L(Jn)],Be=[L(et),L(nt),L(tt)],ze=[L(at),L(it),L(st),L(rt),L(ot),L(lt),L(dt),L(ct),L(gt)],ut={design:"Products",game:"Games",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},gn=({className:n})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:n,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),pn=({to:n,className:a=""})=>e.jsx(te,{to:n,className:`btn-accent ${a}`,children:"Demo"}),mt=!1,ft=({project:n,type:a,index:p})=>{var s;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(p+1).padStart(2,"0")}),e.jsxs(te,{to:`/${a}/${n.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"}):e.jsx(gn,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:n.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:n.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(s=n.tech)==null?void 0:s.slice(0,3).map(d=>e.jsx("span",{className:"chip",children:d},d))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:n.year})]}),n.hasDemo&&e.jsx(pn,{to:`/${a}/${n.slug}#demo`,className:"shrink-0"})]})})},ht=({project:n,type:a,index:p})=>{var s;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(te,{to:`/${a}/${n.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"}):e.jsx(gn,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(p+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:n.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:n.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:n.description}),((s=n.tech)==null?void 0:s.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:n.tech.slice(0,2).map(d=>e.jsx("span",{className:"chip",children:d},d))})]})]}),n.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(pn,{to:`/${a}/${n.slug}#demo`,className:"w-full"})})]})},Me=({data:n,type:a})=>{const[p,s]=r.useState("grid"),d=ut[a]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[a==="design"&&mt,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[a," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(n.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",d]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(x=>e.jsx("button",{onClick:()=>s(x),"aria-pressed":p===x,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${p===x?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:x},x))})]}),p==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:n.map((x,b)=>e.jsx(ft,{project:x,type:a,index:b},x.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:n.map((x,b)=>e.jsx(ht,{project:x,type:a,index:b},x.slug))})]})},xt="modulepreload",bt=function(n,a){return new URL(n,a).href},nn={},z=function(a,p,s){let d=Promise.resolve();if(p&&p.length>0){let b=function(_){return Promise.all(_.map(k=>Promise.resolve(k).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};const h=document.getElementsByTagName("link"),j=document.querySelector("meta[property=csp-nonce]"),C=(j==null?void 0:j.nonce)||(j==null?void 0:j.getAttribute("nonce"));d=b(p.map(_=>{if(_=bt(_,s),_ in nn)return;nn[_]=!0;const k=_.endsWith(".css"),D=k?'[rel="stylesheet"]':"";if(!!s)for(let P=h.length-1;P>=0;P--){const G=h[P];if(G.href===_&&(!k||G.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${D}`))return;const u=document.createElement("link");if(u.rel=k?"stylesheet":xt,k||(u.as="script"),u.crossOrigin="",u.href=_,C&&u.setAttribute("nonce",C),document.head.appendChild(u),k)return new Promise((P,G)=>{u.addEventListener("load",P),u.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${_}`)))})}))}function x(b){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=b,window.dispatchEvent(h),!h.defaultPrevented)throw b}return d.then(b=>{for(const h of b||[])h.status==="rejected"&&x(h.reason);return a().catch(x)})},yt=r.lazy(()=>z(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),jt=r.lazy(()=>z(()=>import("./UR-platform-B26NuqWS.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),vt=r.lazy(()=>z(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),wt=r.lazy(()=>z(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Nt=r.lazy(()=>z(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),kt=r.lazy(()=>z(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),_t=r.lazy(()=>z(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));r.lazy(()=>z(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const Dt=r.lazy(()=>z(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),At=r.lazy(()=>z(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),tn=r.lazy(()=>z(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),Mt=r.lazy(()=>z(()=>import("./72HourGameJamDemo-DsdI-g3Q.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),St=r.lazy(()=>z(()=>import("./PeaceEliteHustCampusDemo-CKWwrGNJ.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Ct=r.lazy(()=>z(()=>import("./BMWMetaIslandDemo-DM2oqedJ.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),It=r.lazy(()=>z(()=>import("./riffle-BuqCfcTA.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Lt=r.lazy(()=>z(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),Rt=r.lazy(()=>z(()=>import("./genshot-8Uy4GIux.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),Pt=r.lazy(()=>z(()=>import("./dragon-diffusion-Dj4t-WNK.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),Et=r.lazy(()=>z(()=>import("./anyreal-DKKTpW8w.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),Tt=n=>({"cluster-visualizer-3d":yt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":jt,heatmapper:vt,"how-to-add-openstreetmap-in-website":wt,"how-to-get-sequential-events-from-photo-by-phone":Nt,"how-to-visualize-photo-geolocation-data-on-map":kt,kittylovecarrots:tn,"how-to-build-game-in-wechat-mini-program":tn,"72-hour-game-jam":Mt,"peace-elite-hust-campus":St,"bmw-meta-island":Ct,"how-to-conduct-time-geo-sequential-clustering-from-album":_t,"box-up-my-stuff-in-cyberspace":Dt,"epstein-mystery-archive":At,"riffle-ai-game-generation-tool":It,genstyle:Lt,"genshot-AI-video-generation-tool":Rt,"dragon-diffussion":Pt,anyreal:Et})[n],an={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},Gt=({images:n,captions:a})=>{const[p,s]=r.useState(0),d=()=>{s(h=>h===0?n.length-1:h-1)},x=()=>{s(h=>h===n.length-1?0:h+1)},b=a==null?void 0:a[p];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:n[p],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:b||`Carousel Image ${p+1}`}),e.jsx("button",{onClick:d,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:x,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:n.map((h,j)=>e.jsx("button",{onClick:()=>s(j),className:`h-1.5 rounded-full transition-all duration-300 ${p===j?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${j+1}`},j))})]}),b&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:b}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[p+1," / ",n.length]})]}),!b&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[p+1," / ",n.length]})]})},Bt=({src:n,...a})=>{const[p,s]=r.useState(!1),[d,x]=r.useState(!1);return r.useEffect(()=>{const b=setTimeout(()=>{d||(s(!1),x(!0))},3e3);return()=>clearTimeout(b)},[d]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:n,onLoad:()=>{s(!0),x(!0)},onError:()=>{s(!1),x(!0)},style:{display:"none"},title:"detector"}),!d&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),d&&p&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:n,className:"h-96 w-full border-0",allowFullScreen:!0,...a})}),d&&!p&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},zt={iframe:({src:n,title:a,...p})=>e.jsx(Bt,{src:n,title:a||"Embedded content",...p}),imagecarousel:({images:n,captions:a})=>{const p=(n||"").split(",").map(d=>d.trim()).filter(Boolean),s=a?a.split("|").map(d=>d.trim()):void 0;return e.jsx(Gt,{images:p,captions:s})},table:({children:n})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:n})}),thead:({children:n})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:n}),th:({children:n})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:n}),td:({children:n})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:n}),h1:({children:n,...a})=>{const s=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:s,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...a,children:n})},h2:({children:n,...a})=>{const s=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:s,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...a,children:n})},h3:({children:n,...a})=>{const s=(typeof n=="string"?n:(n==null?void 0:n.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:s,className:"mt-6 mb-3 text-base font-bold text-ink",...a,children:n})},h4:({children:n,...a})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...a,children:n}),h5:({children:n,...a})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...a,children:n}),h6:({children:n,...a})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...a,children:n}),p:({children:n,...a})=>{var d;const p=fn.Children.toArray(n),s=p.length===1&&((d=p[0])==null?void 0:d.type)==="img";return e.jsx("p",{className:s?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...a,children:n})},a:({children:n,href:a,...p})=>e.jsx("a",{href:a,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...p,children:n}),img:({src:n,alt:a,...p})=>(a==null?void 0:a.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:n,alt:a,className:"h-32 max-w-full border border-rule object-cover",...p}):e.jsx("img",{src:n,alt:a,className:"my-0 h-auto w-full border border-rule object-cover",...p})},Se=({data:n,type:a})=>{var j;const{id:p}=mn(),[s,d]=r.useState("details"),[x,b]=r.useState(!1),h=n.find(C=>C.slug===p);return r.useEffect(()=>{const C=()=>d(window.location.hash.includes("demo")?"demo":"details");return C(),window.addEventListener("hashchange",C),()=>window.removeEventListener("hashchange",C)},[p]),h?e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(te,{to:`/${a}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:h.title})]}),e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>d("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${s==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),h.hasDemo&&e.jsxs("button",{onClick:()=>d("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${s==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),s==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl",children:[((j=h.tech)==null?void 0:j.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:h.tech.map((C,_)=>e.jsx("span",{className:"chip",children:C},_))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",h.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:h.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:h.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:h.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:x,onToggle:C=>b(C.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[x?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[h.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:h.description})]}),h.details.abstract&&h.details.abstract!==h.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:h.details.abstract})]}),h.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:h.details.challenge})]}),h.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:h.details.solution})]})]})]}),h.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("div",{className:"section-head mb-8",children:e.jsx("p",{className:"eyebrow",children:"Content"})}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(wn,{remarkPlugins:[kn],rehypePlugins:[Nn],components:zt,children:h.details.content})})]}),(h.details.code||h.details.codeComponent||an[h.slug])&&e.jsxs("section",{id:"code",className:"mt-12",children:[e.jsx("div",{className:"section-head mb-5",children:e.jsx("p",{className:"eyebrow",children:"Code Example"})}),e.jsx("pre",{className:"overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas md:p-7",children:e.jsx("code",{children:an[h.slug]||h.details.codeComponent||`// Code file: ${h.details.code}`})})]})]})}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const C=Tt(h.slug);return C?e.jsx(C,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(te,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})})},Ft=["Urban Climate & Resilience","AI-Assisted Urban Planning","Machine Learning & Data Analysis","Spatial Statistics & GIS","React / Next.js Ecosystem","TypeScript Architecture","WebGL / Three.js","UI Systems Design"],Ut=()=>{const[n,a]=r.useState(null);return r.useEffect(()=>{if(!n)return;const p=d=>{d.key==="Escape"&&a(null)};window.addEventListener("keydown",p);const s=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",p),document.body.style.overflow=s}},[n]),e.jsx("div",{className:"shell animate-rise-in py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx("div",{className:"section-head",children:e.jsx("p",{className:"eyebrow",children:"About / Bio"})}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"关于我"}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"About Me"}),e.jsxs("div",{className:"mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg",children:[e.jsxs("p",{children:["我是林丽丽，首尔大学硕士生，华中科技大学本科生, 想做",e.jsx("strong",{className:"font-semibold text-ink",children:"AI 相关的产品"}),". 我的研究兴趣包括",e.jsx("strong",{className:"font-semibold text-ink",children:"城市气候韧性、城市规划知识图谱、空间统计与机器学习"}),"，并且我也对",e.jsx("strong",{className:"font-semibold text-ink",children:"产品设计、UI/UX和前端开发"}),"充满热情。"]}),e.jsx("p",{})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Core Competencies"}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:Ft.map(p=>e.jsx("span",{className:"chip",children:p},p))})]})]})})},Ot=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),Ke=({href:n,label:a})=>e.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:a}),sn=[{city:"上海",country:"中国",date:"2024",note:"法租界的梧桐树影"},{city:"东京",country:"日本",date:"2025",note:"下北泽的午后散步"},{city:"首尔",country:"韩国",date:"2025",note:"汉江边的晚风与霓虹"},{city:"新加坡",country:"新加坡",date:"2026",note:"滨海湾的花园城市漫游"},{city:"明尼阿波利斯",country:"美国",date:"2025",note:"密西西比河畔的秋日"},{city:"剑桥",country:"英国",date:"2025",note:"康河上的撑船与学院回廊"},{city:"武汉",country:"中国",date:"2023",note:"东湖绿道与热干面的早晨"},{city:"香港",country:"中国",date:"2024",note:"中环半山扶梯的夜色"}],rn=["from-amber-500/20 via-orange-400/10 to-yellow-500/20","from-emerald-500/20 via-teal-400/10 to-cyan-500/20","from-rose-500/20 via-pink-400/10 to-fuchsia-500/20","from-sky-500/20 via-blue-400/10 to-indigo-500/20","from-violet-500/20 via-purple-400/10 to-plum-500/20","from-lime-500/20 via-green-400/10 to-emerald-500/20","from-red-500/20 via-orange-400/10 to-amber-500/20","from-cyan-500/20 via-teal-400/10 to-sky-500/20"],Wt={上海:"🏙️",东京:"🗼",首尔:"🏯",新加坡:"🌿",明尼阿波利斯:"🌊",剑桥:"🎓",武汉:"🌸",香港:"🌃"},Vt=({entry:n,index:a})=>{const[p,s]=r.useState(!1),d=rn[a%rn.length],x=Wt[n.city]??"📍";return e.jsx("div",{className:"relative cursor-pointer select-none",style:{perspective:"800px"},onClick:()=>s(b=>!b),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:e.jsxs("div",{className:"relative w-full transition-transform duration-500 ease-editorial",style:{transformStyle:"preserve-3d",transform:p?"rotateY(180deg)":"rotateY(0deg)",aspectRatio:"3/4"},children:[e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-x-3 top-2 flex justify-between",children:Array.from({length:16}).map((b,h)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},h))}),e.jsx("div",{className:"absolute inset-x-3 bottom-2 flex justify-between",children:Array.from({length:16}).map((b,h)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},h))}),e.jsx("span",{className:"text-3xl",children:x}),e.jsx("p",{className:"text-base font-bold tracking-tight text-ink",children:n.city}),e.jsx("p",{className:"eyebrow text-ink-3",children:n.country}),n.date&&e.jsx("span",{className:"mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:n.date}),e.jsx("div",{className:"absolute right-3 top-5 -rotate-12 opacity-30",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"17",stroke:"currentColor",strokeWidth:"1.5",className:"text-ink-3"}),e.jsx("path",{d:"M8 8l24 24M8 32L32 8",stroke:"currentColor",strokeWidth:"0.8",className:"text-ink-3"})]})})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[n.photo?e.jsx("img",{src:n.photo,alt:n.city,className:"absolute inset-0 h-full w-full object-cover"}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${d}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 px-4 text-center",children:[e.jsx("p",{className:"text-lg font-bold tracking-tight text-white",children:n.city}),n.note&&e.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-white/70",children:n.note})]}),e.jsx("div",{className:"absolute inset-2 border border-dashed border-white/10"})]})]})})},Ht=()=>e.jsxs("section",{className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Wander"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(sn.length).padStart(2,"0")," cities"]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"City Walks"}),e.jsxs("p",{className:"max-w-xs text-right text-xs leading-relaxed text-ink-3",children:["用脚步丈量城市，",e.jsx("br",{className:"hidden sm:inline"}),"在每个街角发现故事。"]})]}),e.jsx("div",{className:"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:sn.map((n,a)=>e.jsx(Vt,{entry:n,index:a},n.city))})]}),$t=[{key:"all",label:"All"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"}],on={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"产品、开发、游戏和城市规划"}),"领域的项目。"]}),product:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"产品"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"游戏"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"教程"}),"领域的项目。"]})},Xe=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],ln=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),dn=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),qt={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},ye=({value:n,transform:a})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:a,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((p,s)=>e.jsx("span",{className:"flex items-center justify-center",children:qt[n].includes(s)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:n===1||n===4?"#cc2a18":"#171717"}})},s))}),Kt=()=>{var Ae,i,y,N,v;const[n,a]=r.useState("all"),p={all:[...Te.map(t=>({...t,type:"product"})),...Ge.map(t=>({...t,type:"game"})),...Ee.map(t=>({...t,type:"planning"})),...Be.map(t=>({...t,type:"platform"})),...ze.map(t=>({...t,type:"tutorial"}))],product:Te.map(t=>({...t,type:"product"})),planning:Ee.map(t=>({...t,type:"planning"})),game:Ge.map(t=>({...t,type:"game"})),platform:Be.map(t=>({...t,type:"platform"})),tutorial:ze.map(t=>({...t,type:"tutorial"}))},s=t=>p[t].length,d=p[n]??p.all,x=Math.max(0,d.length-1),[b,h]=r.useState(0),j=t=>{a(t),h(0)},C=t=>{if(!t)return[];const o=/<video[^>]+src="([^"]+)"/gi;return Array.from(t.matchAll(o),l=>l[1])},_=t=>{var l,c;if(!t)return null;const o=(l=t.details)==null?void 0:l.image;return o!=null&&o.length?o[0]:((c=t.details)==null?void 0:c.logo)??null},k=d[(b-1+d.length)%d.length],D=d[(b+1)%d.length],R=_(k),u=_(D),[P,G]=r.useState(0),[F,E]=r.useState(!1),U=r.useRef(null),B=r.useRef(null),M=d[b],K=((Ae=M==null?void 0:M.details)==null?void 0:Ae.image)??[];K.length>=2&&K[(P-1+K.length)%K.length],K.length>=3?K[(P+1)%K.length]:K.length===2&&K[(P+1)%2],r.useEffect(()=>{G(0),E(!1)},[b,n]);const[ke,X]=r.useState({x:0,y:0}),Fe=()=>{X(t=>({x:t.x+720+Math.round(Math.random()*360),y:t.y+720+Math.round(Math.random()*360)})),setTimeout(()=>Y(Math.floor(Math.random()*d.length)),900)},_e=C(((i=M==null?void 0:M.details)==null?void 0:i.content)??""),ue=((y=M==null?void 0:M.details)==null?void 0:y.image)??[],Z=[..._e,...ue],me=Z.length>0?Z[P%Z.length]:(N=M==null?void 0:M.details)==null?void 0:N.logo,ae=_e.length>0&&P<_e.length,ie=ue.length>0?ue[0]:(v=M==null?void 0:M.details)==null?void 0:v.logo,De=()=>{G(t=>(t+1)%(Z.length||1))};r.useEffect(()=>{if(B.current&&(clearInterval(B.current),B.current=null),!(ae||Z.length<=1))return B.current=setInterval(De,5e3),()=>{B.current&&(clearInterval(B.current),B.current=null)}},[b,n,ae,Z.length]);const se=()=>{const t=U.current;t&&(t.muted=!t.muted,E(!t.muted))},ee=r.useRef(null),ne=3,W=r.useRef({isDown:!1,isDragging:!1,startX:0,scrollLeft:0}),Ue=t=>{var o;W.current={isDown:!0,isDragging:!1,startX:t.clientX,scrollLeft:((o=ee.current)==null?void 0:o.scrollLeft)??0}},re=t=>{var l;if(!W.current.isDown)return;const o=t.clientX-W.current.startX;!W.current.isDragging&&Math.abs(o)<ne||(W.current.isDragging||(W.current.isDragging=!0,(l=ee.current)==null||l.setPointerCapture(t.pointerId)),t.preventDefault(),ee.current.scrollLeft=W.current.scrollLeft-o)},Ce=t=>{var o;W.current.isDragging&&((o=ee.current)==null||o.releasePointerCapture(t.pointerId)),W.current={isDown:!1,isDragging:!1,startX:0,scrollLeft:0}},Y=t=>{h(t)};r.useEffect(()=>{const t=ee.current;if(!t)return;const o=t.children[b];o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[b]);const oe=r.useRef(null),fe=r.useRef([]),[he,Ze]=r.useState(0),[un,V]=r.useState(0),[Ie,xe]=r.useState({start:!0,end:!1}),[Le,Oe]=r.useState({}),le=t=>{const o=t%Xe.length;Ze(o);const l=oe.current;if(l){const c=l.children[o];c&&l.scrollTo({left:c.offsetLeft-l.offsetWidth/2+c.offsetWidth/2,behavior:"smooth"})}};r.useEffect(()=>{const t=fe.current[he];t&&(t.currentTime=0,t.play().catch(()=>{}))},[he]);const de=r.useCallback(()=>{const t=oe.current;if(!t)return;const o=t.firstElementChild,l=(o==null?void 0:o.offsetWidth)||1;V(Math.round(t.scrollLeft/l)),xe({start:t.scrollLeft<=1,end:t.scrollLeft+t.clientWidth>=t.scrollWidth-1})},[]);r.useEffect(()=>(de(),window.addEventListener("resize",de),()=>window.removeEventListener("resize",de)),[de]);const Re=t=>{const o=oe.current;if(!o)return;const l=o.firstElementChild;o.scrollBy({left:t*((l==null?void 0:l.offsetWidth)||o.clientWidth/2),behavior:"smooth"})},We=(t,o)=>{var m;const l=t,c=w=>Oe(f=>f[o]===w?f:{...f,[o]:w});if((m=l.audioTracks)!=null&&m.length){c(Array.from(l.audioTracks).some(w=>w.enabled));return}if("mozHasAudio"in l){c(!!l.mozHasAudio);return}if(typeof l.webkitAudioDecodedByteCount=="number"&&l.webkitAudioDecodedByteCount>0){c(!0);return}if(l.readyState>=3){setTimeout(()=>c(l.webkitAudioDecodedByteCount>0||l.mozHasAudio===!0),500);return}c(!0)};return e.jsxs("div",{className:"animate-rise-in pb-16",children:[me&&e.jsxs("section",{className:"relative w-full overflow-hidden border-b border-neutral-800",style:{background:"linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)"},children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.07]","aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none",style:{boxShadow:"inset 0 0 140px 50px rgba(0,0,0,0.75)"},"aria-hidden":"true"}),e.jsxs("div",{className:"relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0",children:[e.jsx("button",{onClick:()=>Y((b-1+d.length)%d.length),className:"group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block",title:k==null?void 0:k.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[R&&e.jsx("img",{src:R,alt:"",onError:t=>{t.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:k==null?void 0:k.title})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 86%, 0 100%)"},children:e.jsx("img",{src:ie,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30"})})}),e.jsx("div",{className:"relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]",children:e.jsxs("div",{className:"aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]",style:{boxShadow:"0 0 70px -10px rgba(0,0,0,0.5)"},children:[ae?e.jsx("video",{ref:t=>{U.current=t},src:me,autoPlay:!0,muted:F,playsInline:!0,onEnded:De,className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},me):e.jsx("img",{src:me,alt:(M==null?void 0:M.title)??"",className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},me),ae&&e.jsx("button",{onClick:se,className:"absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white",title:F?"Unmute":"Mute",children:F?e.jsxs("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 86%)"},children:e.jsx("img",{src:ie,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30"})})}),e.jsx("button",{onClick:()=>Y((b+1)%d.length),className:"group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block",title:D==null?void 0:D.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[u&&e.jsx("img",{src:u,alt:"",onError:t=>{t.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:D==null?void 0:D.title})})]})})]})]}),e.jsxs("section",{className:"shell pt-10 md:pt-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-ink truncate",children:M==null?void 0:M.title}),e.jsxs("p",{className:"eyebrow shrink-0",children:[M==null?void 0:M.type," · ",M==null?void 0:M.year]})]}),e.jsxs("div",{className:"flex items-center gap-3 shrink-0 min-w-0",children:[Z.length>1&&e.jsx("span",{className:"flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]",children:Z.map((t,o)=>e.jsx("button",{onClick:()=>G(o),"aria-label":`Media ${o+1}`,className:`h-1.5 shrink-0 rounded-full transition-all duration-300 ${o===P?"w-6 bg-accent":"w-1.5 bg-rule hover:bg-ink-3"}`},o))}),e.jsx("button",{onClick:Fe,className:"btn-ghost shrink-0 !px-2",title:"Roll a random project",children:e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${ke.x}deg) rotateY(${ke.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(ye,{value:1,transform:"translateZ(10px)"}),e.jsx(ye,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(ye,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(ye,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(ye,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(ye,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})})})]})]}),e.jsx("div",{className:"mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule",children:$t.map(t=>{const o=n===t.key;return e.jsxs("button",{onClick:()=>j(t.key),"aria-pressed":o,className:`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${o?"text-ink":"text-ink-3 hover:text-ink"}`,children:[t.label,e.jsx("span",{className:"ml-1.5 nums-tabular text-ink-3",children:s(t.key)}),e.jsx("span",{className:`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${o?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]},t.key)})}),e.jsxs("div",{className:"mt-5 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>Y(Math.max(0,b-1)),disabled:b<=0,"aria-label":"Previous project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ln,{})}),e.jsx("div",{ref:ee,className:"flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y",onPointerDown:Ue,onPointerMove:re,onPointerUp:Ce,onPointerLeave:Ce,children:d.map((t,o)=>{const l=o===b;return e.jsxs("button",{onClick:()=>Y(o),className:`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${l?"border-rule-strong bg-surface shadow-lift":"border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface"}`,style:{minWidth:"220px",maxWidth:"280px"},children:[e.jsx("span",{className:`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${l?"text-accent-text":"text-ink-3/60 group-hover:text-ink-3"}`,children:String(o+1).padStart(2,"0")}),e.jsx("div",{className:"h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2",children:e.jsx("img",{src:t.details.logo,alt:"",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"min-w-0 text-left",children:[e.jsx("p",{className:"truncate text-sm font-bold tracking-tight text-ink",children:t.title}),e.jsxs("p",{className:"eyebrow",children:[t.type," · ",t.year]})]})]},`${t.type}-${t.slug}`)})}),e.jsx("button",{onClick:()=>Y(Math.min(x,b+1)),disabled:b>=x,"aria-label":"Next project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(dn,{})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(b+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(d.length).padStart(2,"0")]}),e.jsx(te,{to:`/${M==null?void 0:M.type}/${M==null?void 0:M.slug}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink",children:"View details →"})]})]}),e.jsx("section",{className:"shell border-t border-rule py-10 md:py-0",children:e.jsxs("div",{className:"max-w-12xl",children:[e.jsx("p",{className:"mt-4 max-w-3xl text-lg text-ink",children:"你好！我是林丽丽，欢迎来到我的作品集。"}),e.jsx("p",{className:"mt-4 max-w-measure text-base leading-relaxed text-ink-2",children:on[n]??on.all})]})}),e.jsx(Ht,{}),e.jsxs("section",{className:"shell pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Motion"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(he+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(Xe.length).padStart(2,"0")]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"Video Gallery"}),e.jsxs("div",{className:"flex shrink-0 gap-2",children:[e.jsx("button",{onClick:()=>Re(-1),disabled:Ie.start,"aria-label":"Scroll gallery left",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ln,{})}),e.jsx("button",{onClick:()=>Re(1),disabled:Ie.end,"aria-label":"Scroll gallery right",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(dn,{})})]})]}),e.jsx("div",{ref:oe,onScroll:de,className:"mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4",children:Xe.map((t,o)=>{const l=o===he;return e.jsxs("figure",{className:`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${l?"ring-1 ring-accent ring-offset-2 ring-offset-canvas":""}`,onMouseEnter:c=>{const m=c.currentTarget.querySelector("video");m&&!l&&m.play().catch(()=>{})},onMouseLeave:c=>{const m=c.currentTarget.querySelector("video");m&&!l&&m.pause()},children:[e.jsxs("div",{className:"relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2",children:[e.jsx("video",{ref:c=>{fe.current[o]=c},className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",src:t.src,muted:!0,playsInline:!0,preload:"metadata",onCanPlay:c=>We(c.currentTarget,o),onEnded:()=>{l&&le(o+1)}}),l&&e.jsxs("span",{className:"absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent animate-pulse"}),"Now"]}),Le[o]&&e.jsx("span",{className:"absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white",title:"Has audio",children:e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),e.jsxs("figcaption",{className:"mt-2.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:String(o+1).padStart(2,"0")}),e.jsx("span",{className:"truncate text-sm text-ink-2",children:t.title})]})]},t.src)})})]})]})},Xt=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),Zt=()=>{const[n,a]=r.useState(Xt),p=()=>{const s=!n;a(s),document.documentElement.classList.toggle("dark",s);try{localStorage.setItem("theme",s?"dark":"light")}catch{}};return e.jsx("button",{onClick:p,className:"icon-btn","aria-label":n?"Switch to light theme":"Switch to dark theme",title:n?"切换到日间模式":"切换到夜间模式",children:n?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},cn="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",Yt="/data/223_cities_cluster_with_index_deciles.csv",je=n=>{const a=n.replace("#",""),p=parseInt(a.slice(0,2),16),s=parseInt(a.slice(2,4),16),d=parseInt(a.slice(4,6),16);return[p,s,d]},ve=(n,a,p)=>{const s=Math.round(n[0]+(a[0]-n[0])*p),d=Math.round(n[1]+(a[1]-n[1])*p),x=Math.round(n[2]+(a[2]-n[2])*p);return`rgb(${s}, ${d}, ${x})`},we=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],Qt=()=>{var Ae;const n=r.useRef(null),a=r.useRef(null),[p,s]=r.useState(!0),[d,x]=r.useState(0),[b,h]=r.useState(null),[j,C]=r.useState(null),[_,k]=r.useState([]),[D,R]=r.useState(null),[u,P]=r.useState("K_12"),[G,F]=r.useState(!0),[E,U]=r.useState(null),[B,M]=r.useState(null),[K,ke]=r.useState(!1),[X,Fe]=r.useState(null),[_e,ue]=r.useState(!1),[Z,me]=r.useState(null),[ae,ie]=r.useState(!1),[De,se]=r.useState(0),[ee,ne]=r.useState(""),[W,Ue]=r.useState(!1),[re,Ce]=r.useState(!0),[Y,oe]=r.useState(!0),[fe,he]=r.useState({}),[Ze,un]=r.useState(!1),[V,Ie]=r.useState("global"),xe=r.useRef(null),Le=r.useRef(null),Oe=r.useRef(!1),le=r.useRef(null),de=(i,y)=>{let N=i.features;D!==null&&(N=N.filter(m=>{var f;const w=(f=m.properties)==null?void 0:f.Place;return w!==void 0&&Number(w)===Number(D)}));const v=N.map(m=>{var w;return(w=m.properties)==null?void 0:w[y]}).filter(m=>{if(m==null)return!1;if(typeof m=="string"){const f=m.trim();if(f===""||/^(na|nan|null)$/i.test(f))return!1}const w=Number(m);return!(Number.isNaN(w)||w===-9999)}).map(m=>Number(m)),t=N.reduce((m,w)=>{var A;const f=(A=w.properties)==null?void 0:A[y];let g=!1;if(f==null)g=!0;else if(typeof f=="string"){const S=f.trim();if(S===""||/^(na|nan|null)$/i.test(S))g=!0;else{const T=Number(f);(Number.isNaN(T)||T===-9999)&&(g=!0)}}else{const S=Number(f);(Number.isNaN(S)||S===-9999)&&(g=!0)}return m+(g?1:0)},0);let o=NaN,l=NaN,c=0;if(v.length>0){o=v[0],l=v[0],c=v[0];for(let m=1;m<v.length;m++){const w=v[m];w<o&&(o=w),w>l&&(l=w),c+=w}}return{count:N.length,min:o,max:l,mean:v.length>0?c/v.length:NaN,nanCount:t}};r.useEffect(()=>{(async()=>{try{const v=(await(await fetch(Yt)).text()).trim().split(`
`);if(v.length<2)return;const t=v[0].split(",").map(f=>f.trim()),o={},c=v[v.length-1].split(","),w=v[1].split(",");t.forEach((f,g)=>{if(f===""||f.includes("Place")||f.includes("Sum")||f.includes("FID")||f.includes("index"))return;const A=parseFloat(w[g]),S=parseFloat(c[g]);!isNaN(A)&&!isNaN(S)&&S>A&&(o[f]={min:A,max:S})}),console.log("Loaded attribute ranges:",o),he(o)}catch(y){console.error("Failed to load deciles:",y)}})()},[]),r.useEffect(()=>{!W&&!j&&(async()=>{var y;s(!0),x(0),h(null);try{x(10),console.log("开始下载..."),xe.current=new AbortController;const N=await fetch(cn,{signal:xe.current.signal});if(console.log("响应状态:",N.status),!N.ok)throw new Error(`HTTP error! status: ${N.status}`);x(30);const v=N.headers.get("content-length"),t=v?parseInt(v):null;console.log("预期文件大小:",t);const o=(y=N.body)==null?void 0:y.getReader();if(!o)throw new Error("无法读取响应流");let l=0;const c=[];for(;;){const{done:T,value:I}=await o.read();if(T)break;c.push(I),l+=I.length,x(t?30+Math.round(l/t*60):50)}console.log("下载完成, 收到:",l),t&&l!==t&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const m=new Uint8Array(l);let w=0;for(const T of c)m.set(T,w),w+=T.length;if(x(90),W){console.log("本地数据已加载，跳过网络数据"),s(!1);return}console.log("开始解析 Shapefile...");const f=await Ye(m);console.log("Shapefile 解析完成:",f);let g=[];if(f.type==="FeatureCollection"?g=f.features:Array.isArray(f)?g=f:f.type==="Feature"&&(g=[f]),console.log("解析完成，特征数量:",g==null?void 0:g.length),W)return;const A={type:"FeatureCollection",features:g||[]};C(A),x(100);const S=new Map;A.features.forEach(T=>{var Q;const I=Number(((Q=T.properties)==null?void 0:Q.Place)??0);S.has(I)||S.set(I,{id:I,name:`Place ${I}`,featureCount:0});const H=S.get(I);H&&H.featureCount++}),k(Array.from(S.values()).sort((T,I)=>T.id-I.id)),s(!1)}catch(N){if(N.name==="AbortError"){console.log("网络请求已取消");return}h(N instanceof Error?N.message:"Failed to load"),s(!1)}})()},[]),r.useEffect(()=>{j&&U(de(j,u))},[j,D,u,V,fe]),r.useEffect(()=>{if(!j)return;const i=a.current;if(!i)return;const y=()=>{var v,t,o,l;if(j.features.forEach((c,m)=>{c.id===void 0&&(c.id=m)}),i.getSource("cluster"))i.getSource("cluster").setData(j);else{console.log("初始化 cluster 数据源..."),i.addSource("cluster",{type:"geojson",data:j,generateId:!0}),i.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),i.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),i.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),i.on("click","cluster-fill",m=>{var w;if(m.features&&m.features.length>0){const f=m.features[0],g=f.id;le.current!==null&&le.current!==void 0&&i.setFeatureState({source:"cluster",id:le.current},{selected:!1}),g!==void 0?(i.setFeatureState({source:"cluster",id:g},{selected:!0}),le.current=g):le.current=null,Fe(f),ue(!0),((w=f.properties)==null?void 0:w.Place)!==void 0&&R(Number(f.properties.Place))}}),i.on("mouseenter","cluster-fill",()=>{i.getCanvas().style.cursor="pointer"}),i.on("mouseleave","cluster-fill",()=>{i.getCanvas().style.cursor=""});const c=j.features;if(c.length>0)try{const m=new Pe.LngLatBounds,w=Math.max(1,Math.floor(c.length/2e3));for(let f=0;f<c.length;f+=w){const g=c[f];if(!((v=g.geometry)!=null&&v.coordinates))continue;const A=g.geometry.type,S=g.geometry.coordinates;A==="Point"?m.extend(S):A==="LineString"||A==="MultiPoint"?S.forEach(T=>m.extend(T)):A==="Polygon"||A==="MultiLineString"?(t=S[0])==null||t.forEach(T=>m.extend(T)):A==="MultiPolygon"&&((l=(o=S[0])==null?void 0:o[0])==null||l.forEach(T=>m.extend(T)))}m.isEmpty()||i.fitBounds(m,{padding:50,duration:1e3})}catch(m){console.error("Fit bounds error:",m)}}},N=()=>{var I;if(!i.getLayer("cluster-fill"))return;const v=null;i.setFilter("cluster-fill",v),i.setFilter("cluster-line",v),i.setFilter("cluster-highlight",v);const t=(()=>{var Ve;let H=1/0,Q=-1/0;for(const He of j.features){const J=Number((Ve=He.properties)==null?void 0:Ve[u]);Number.isNaN(J)||J===-9999||(J<H&&(H=J),J>Q&&(Q=J))}return{min:H===1/0?0:H,max:Q===-1/0?0:Q}})(),o=D!==null&&E?{min:E.min,max:E.max}:t,l=V==="city"?o:t,c=l.min,m=l.max;let w;if(u.includes("K_")){const H=Math.round(((I=fe[u])==null?void 0:I.max)??m),Q=Array.from({length:26},(be,$e)=>{const q=$e/25;let ce,ge,pe;if(q<.167){const $=q/.167;ce=0,ge=0,pe=Math.round(139+116*$)}else if(q<.333){const $=(q-.167)/.167;ce=0,ge=Math.round(255*$),pe=255}else if(q<.5){const $=(q-.333)/.167;ce=0,ge=Math.round(255-128*$),pe=Math.round(255-255*$)}else if(q<.667){const $=(q-.5)/.167;ce=Math.round(255*$),ge=255,pe=0}else if(q<.833){const $=(q-.667)/.167;ce=255,ge=Math.round(255-128*$),pe=0}else{const $=(q-.833)/.167;ce=255,ge=Math.round(127-127*$),pe=0}return`#${ce.toString(16).padStart(2,"0")}${ge.toString(16).padStart(2,"0")}${pe.toString(16).padStart(2,"0")}`}),He=Array.from({length:H+1},(be,$e)=>Q[Math.round($e*25/H)]).slice(0,H+1),J=["interpolate",["linear"],["get",u]];for(let be=0;be<=H;be++)J.push(be,He[be]);w=J}else u==="CoverRatio"||u==="ISF"||u==="GreenRatio"?w=["interpolate",["linear"],["get",u],c,"#3182bd",m,"#e6550d"]:u.includes("elev")||u.includes("slope")?w=["interpolate",["linear"],["get",u],c,"#31a354",m,"#756bb1"]:w=["interpolate",["linear"],["get",u],c,"#31a354",m,"#756bb1"];i.setPaintProperty("cluster-fill","fill-color",w);const f=D!==null,g=Number(D),T=["case",["any",["==",["get",u],-9999],["==",["get",u],null]],0,f?["case",["==",["to-number",["get","Place"]],g],.8,.15]:.7];i.setPaintProperty("cluster-fill","fill-opacity",T)};i.isStyleLoaded()?(y(),N()):i.once("load",()=>{y(),N()})},[j,D,u]),r.useEffect(()=>{var N,v,t,o;if(!j||D===null)return;const i=a.current;if(!i)return;const y=j.features.filter(l=>{var m;const c=(m=l.properties)==null?void 0:m.Place;return c!==void 0&&Number(c)===Number(D)});if(y.length!==0)try{const l=new Pe.LngLatBounds;let c=0;const m=Math.max(1,Math.floor(y.length/2e3));for(let w=0;w<y.length;w+=m){const f=y[w];if(!((N=f.geometry)!=null&&N.coordinates))continue;const g=f.geometry.type,A=f.geometry.coordinates;g==="Point"?(l.extend(A),c++):g==="LineString"||g==="MultiPoint"?(A.forEach(S=>l.extend(S)),c++):g==="Polygon"||g==="MultiLineString"?((v=A[0])==null||v.forEach(S=>l.extend(S)),c++):g==="MultiPolygon"&&((o=(t=A[0])==null?void 0:t[0])==null||o.forEach(S=>l.extend(S)),c++)}!l.isEmpty()&&c>0&&i.fitBounds(l,{padding:50,duration:1e3})}catch(l){console.error("Fly to error:",l)}},[D]),r.useEffect(()=>((async()=>{(!n.current||a.current)&&console.log("开始初始化地图...");try{const y=new Pe.Map({container:n.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});y.addControl(new Pe.NavigationControl,"top-right"),y.on("load",()=>{console.log("地图样式加载完成")}),y.on("error",N=>{var o;const v=String(((o=N==null?void 0:N.error)==null?void 0:o.message)||(N==null?void 0:N.message)||"");v.includes("ERR_ABORTED")||v.includes("AbortError")||v.includes("Canceled")||v.includes("cancelled")||console.error("地图错误:",N)}),a.current=y,console.log("地图初始化完成")}catch(y){console.error("地图初始化错误:",y)}})(),()=>{a.current&&(a.current.remove(),a.current=null,Oe.current=!1)}),[]),r.useEffect(()=>{const i=a.current;if(!i)return;const y=()=>{i.getLayer("simple-tiles")&&i.setLayoutProperty("simple-tiles","visibility",re?"visible":"none")};i.isStyleLoaded()?y():i.once("style.load",y)},[re]);const Re=async i=>{var N;const y=(N=i.target.files)==null?void 0:N[0];if(y){xe.current&&xe.current.abort(),ie(!0),se(0),ne("正在读取文件..."),h(null),ke(!0),M(URL.createObjectURL(y));try{console.log("开始读取文件:",y.name,"大小:",y.size);let v=[];const t=y.name.endsWith(".zip"),o=y.name.endsWith(".shp");if(!t&&!o){h("请上传 .zip 文件 (包含 Shapefile)"),ie(!1);return}ne("正在读取文件...");const l=await y.arrayBuffer();se(30),ne("正在解析 Shapefile...");const c=await Ye(l);console.log("Shapefile 解析完成:",c),c.type==="FeatureCollection"?v=c.features:Array.isArray(c)?v=c:c.type==="Feature"&&(v=[c]),console.log("解析到的 features 数量:",v.length),se(95),ne(`已解析 ${v.length} 个 Features...`);const m={type:"FeatureCollection",features:v};se(98),ne("正在处理 Place 数据...");const w=new Map;m.features.forEach(f=>{var S;const g=Number(((S=f.properties)==null?void 0:S.Place)??0);w.has(g)||w.set(g,{id:g,name:`Place ${g}`,featureCount:0});const A=w.get(g);A&&A.featureCount++}),se(100),ne("加载完成!"),setTimeout(()=>{Ue(!0),C(m),k(Array.from(w.values()).sort((f,g)=>f.id-g.id)),ie(!1),ke(!1),s(!1)},500)}catch(v){const t=v instanceof Error?v.message:"未知错误";h(`加载失败: ${t}`),ie(!1),s(!1)}}},We=we.reduce((i,y)=>(i[y.category]||(i[y.category]=[]),i[y.category].push(y),i),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[ae&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Qe,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:ee}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${De}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[De,"%"]})]})}),p&&!ae?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(_n,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${d}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[d,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:cn,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(Dn,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var i;return(i=Le.current)==null?void 0:i.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Qe,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Le,type:"file",accept:".shp,.zip",onChange:Re,className:"hidden"})]})}):null,b&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:b}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(An,{size:14}),"刷新重试"]})})]}),G&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(Mn,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>F(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Sn,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Ce(!re),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${re?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${re?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:D??"",onChange:i=>R(i.target.value?Number(i.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Ae=j==null?void 0:j.features)==null?void 0:Ae.length)??0,")"]}),_.map(i=>e.jsxs("option",{value:i.id,children:[i.name," (",i.featureCount,")"]},i.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:u,onChange:i=>P(i.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(We).map(([i,y])=>[e.jsx("optgroup",{label:i.charAt(0).toUpperCase()+i.slice(1),children:y.map(N=>e.jsx("option",{value:N.key,children:N.label},N.key))},i)])})]}),E&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Cn,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:E.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:E.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:E.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:E.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:E.nanCount})]})]})]})]})]}),!G&&e.jsx("button",{onClick:()=>F(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(In,{size:18})}),_e&&X&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[X.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",X.properties.Place]}),X.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",X.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",X.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>ue(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Je,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:we.map(i=>{var N;const y=(N=X.properties)==null?void 0:N[i.key];return y==null?null:e.jsxs("button",{onClick:()=>P(i.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${u===i.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:i.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof y=="number"?y.toFixed(2):y})]},i.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>R(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:n,className:"w-full h-full"}),Y&&j&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(en,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>oe(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Je,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Ie(V==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${V==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:V==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:u.includes("K_")?(()=>{var v,t;const i=Math.round(((v=fe[u])==null?void 0:v.max)??30),y=Array.from({length:26},(o,l)=>{const c=l/25;let m,w,f;if(c<.167){const g=c/.167;m=0,w=0,f=Math.round(139+116*g)}else if(c<.333){const g=(c-.167)/.167;m=0,w=Math.round(255*g),f=255}else if(c<.5){const g=(c-.333)/.167;m=0,w=Math.round(255-128*g),f=Math.round(255-255*g)}else if(c<.667){const g=(c-.5)/.167;m=Math.round(255*g),w=255,f=0}else if(c<.833){const g=(c-.667)/.167;m=255,w=Math.round(255-128*g),f=0}else{const g=(c-.833)/.167;m=255,w=Math.round(127-127*g),f=0}return`#${m.toString(16).padStart(2,"0")}${w.toString(16).padStart(2,"0")}${f.toString(16).padStart(2,"0")}`}),N=Array.from({length:i+1},(o,l)=>y[Math.round(l*25/i)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((t=we.find(o=>o.key===u))==null?void 0:t.label)||u}),e.jsx("div",{className:"flex flex-wrap gap-px",children:N.map((o,l)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:o}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:l})]},l))})]})})():u==="CoverRatio"||u==="ISF"||u==="GreenRatio"?(()=>{var f;const i=(()=>{var S;let g=1/0,A=-1/0;for(const T of j.features){const I=Number((S=T.properties)==null?void 0:S[u]);Number.isNaN(I)||I===-9999||(I<g&&(g=I),I>A&&(A=I))}return{min:g===1/0?0:g,max:A===-1/0?0:A}})(),y=D!==null&&E?{min:E.min,max:E.max}:i,N=((f=we.find(g=>g.key===u))==null?void 0:f.label)||u,v=i.max>i.min?Math.max(0,Math.min(1,(y.min-i.min)/(i.max-i.min))):0,t=i.max>i.min?Math.max(0,Math.min(1,(y.max-i.min)/(i.max-i.min))):0,o=Math.max(0,t-v),l=je("#3182bd"),c=je("#e6550d"),m=ve(l,c,v),w=ve(l,c,t);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:D!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${m}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:y.min.toFixed(2)}),e.jsx("span",{children:y.max.toFixed(2)})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(2)}),e.jsx("span",{children:i.max.toFixed(2)})]})]})]})})():u.includes("elev")||u.includes("slope")?(()=>{var f;const i=(()=>{var S;let g=1/0,A=-1/0;for(const T of j.features){const I=Number((S=T.properties)==null?void 0:S[u]);Number.isNaN(I)||I===-9999||(I<g&&(g=I),I>A&&(A=I))}return{min:g===1/0?0:g,max:A===-1/0?0:A}})(),y=D!==null&&E?{min:E.min,max:E.max}:i,N=((f=we.find(g=>g.key===u))==null?void 0:f.label)||u,v=i.max>i.min?Math.max(0,Math.min(1,(y.min-i.min)/(i.max-i.min))):0,t=i.max>i.min?Math.max(0,Math.min(1,(y.max-i.min)/(i.max-i.min))):0,o=Math.max(0,t-v),l=je("#31a354"),c=je("#756bb1"),m=ve(l,c,v),w=ve(l,c,t);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:D!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${m}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:y.min.toFixed(1)}),e.jsxs("span",{children:[y.max.toFixed(0),"+"]})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(1)}),e.jsxs("span",{children:[i.max.toFixed(0),"+"]})]})]})]})})():(()=>{var f;const i=(()=>{var S;let g=1/0,A=-1/0;for(const T of j.features){const I=Number((S=T.properties)==null?void 0:S[u]);Number.isNaN(I)||I===-9999||(I<g&&(g=I),I>A&&(A=I))}return{min:g===1/0?0:g,max:A===-1/0?0:A}})(),y=D!==null&&E?{min:E.min,max:E.max}:i,N=((f=we.find(g=>g.key===u))==null?void 0:f.label)||u,v=i.max>i.min?Math.max(0,Math.min(1,(y.min-i.min)/(i.max-i.min))):0,t=i.max>i.min?Math.max(0,Math.min(1,(y.max-i.min)/(i.max-i.min))):0,o=Math.max(0,t-v),l=je("#31a354"),c=je("#756bb1"),m=ve(l,c,v),w=ve(l,c,t);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[N,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:D!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${v*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${m}, ${w})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:y.min.toFixed(2)}),e.jsx("span",{children:y.max.toFixed(2)})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[N,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(2)}),e.jsx("span",{children:i.max.toFixed(2)})]})]})]})})()})]}),!Y&&e.jsx("button",{onClick:()=>oe(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(en,{size:18})})]})},Jt=[{key:"",label:"Home"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}],ea={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},Ne=({value:n,transform:a})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:a,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((p,s)=>e.jsx("span",{className:"flex items-center justify-center",children:ea[n].includes(s)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:n===1||n===4?"#cc2a18":"#171717"}})},s))}),na=()=>{const[n,a]=r.useState(!1),[p,s]=r.useState(!1),[d,x]=r.useState({x:0,y:0}),[b,h]=r.useState("/data/fig/lili/lili_01.png"),[j,C]=r.useState("Exploring the intersection of technology and creativity."),_=hn(),k=xn(),R=_.pathname.split("/").filter(Boolean)[0]||"",u={product:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},P=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],G=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between product and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],F=U=>U[Math.floor(Math.random()*U.length)];r.useEffect(()=>{h(u[R]??F(P)),C(F(G))},[R]);const E=()=>{x(B=>({x:B.x+720+Math.round(Math.random()*360),y:B.y+720+Math.round(Math.random()*360)}));const U=["product","game","planning","platform","tutorial","about"];setTimeout(()=>k(`/${F(U)}`),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${p?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>a(!n),className:"icon-btn","aria-expanded":n,"aria-label":n?"Hide profile panel":"Show profile panel",title:n?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${n?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(te,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"}),e.jsx("span",{className:"hidden font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-accent-text sm:block",children:"Portfolio"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 flex-1 justify-end overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:Jt.map(U=>{const B=R===U.key;return e.jsx("li",{className:"flex",children:e.jsxs(te,{to:`/${U.key}`,onClick:()=>{window.innerWidth<768&&a(!1)},"aria-current":B?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${B?"text-ink":"text-ink-3 hover:text-ink"}`,children:[U.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${B?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},U.key||"home")})})}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(Zt,{}),e.jsxs("button",{onClick:E,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"Explore a random project",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${d.x}deg) rotateY(${d.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(Ne,{value:1,transform:"translateZ(10px)"}),e.jsx(Ne,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(Ne,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(Ne,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(Ne,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(Ne,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>s(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),p&&e.jsx("button",{onClick:()=>s(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[n&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[b&&e.jsx("img",{src:b,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Designer · Developer · Product Maker"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"Creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:j}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Ke,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Ke,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Ke,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsx("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:e.jsxs(bn,{children:[e.jsx(O,{path:"/",element:e.jsx(Kt,{})}),e.jsx(O,{path:"/planning",element:e.jsx(Me,{data:Ee,type:"planning"})}),e.jsx(O,{path:"/planning/:id",element:e.jsx(Se,{data:Ee,type:"planning"})}),e.jsx(O,{path:"/product",element:e.jsx(Me,{data:Te,type:"product"})}),e.jsx(O,{path:"/product/:id",element:e.jsx(Se,{data:Te,type:"product"})}),e.jsx(O,{path:"/game",element:e.jsx(Me,{data:Ge,type:"game"})}),e.jsx(O,{path:"/game/:id",element:e.jsx(Se,{data:Ge,type:"game"})}),e.jsx(O,{path:"/platform",element:e.jsx(Me,{data:Be,type:"platform"})}),e.jsx(O,{path:"/platform/:id",element:e.jsx(Se,{data:Be,type:"platform"})}),e.jsx(O,{path:"/tutorial",element:e.jsx(Me,{data:ze,type:"tutorial"})}),e.jsx(O,{path:"/tutorial/:id",element:e.jsx(Se,{data:ze,type:"tutorial"})}),e.jsx(O,{path:"/clusteringeomap",element:e.jsx(Qt,{})}),e.jsx(O,{path:"/about",element:e.jsx(Ut,{})}),e.jsx(O,{path:"/contact",element:e.jsx(Ot,{})})]})})]})]})};function ta(){const[n,a]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(yn,{children:e.jsx(na,{})}),!n&&e.jsx(Ln,{onFinish:()=>a(!0)})]})}jn.createRoot(document.getElementById("root")).render(e.jsx(ta,{}));
