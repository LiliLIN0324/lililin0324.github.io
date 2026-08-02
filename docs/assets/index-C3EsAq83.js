const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-DFO5eSKd.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-BWPUgRvj.js","./PeaceEliteHustCampusDemo-D-DWwJkq.js","./BMWMetaIslandDemo-7uu2MOZP.js","./riffle-BuqCfcTA.js","./genstyle-DuJ38oKx.js","./genshot-8Uy4GIux.js","./dragon-diffusion-Dj4t-WNK.js","./anyreal-DKKTpW8w.js","./previous-archi-work-CvNoz6hg.js","./hongqiqu-y3eLCJ-3.js"])))=>i.map(i=>d[i]);
import{r,j as e,L as ne,u as ut,R as ht,c as ft,d as mt,e as xt,f as U,H as vt,g as yt}from"./react-vendor-6zld6QO8.js";import{A as jt,m as $e}from"./framer-DvVmTyA1.js";import{M as wt,r as kt,a as Nt}from"./markdown-q3GborES.js";import{b as Ye}from"./geo-Z02C8O4I.js";import{m as Re}from"./maplibre-BedwuVXB.js";import{U as Qe,L as Mt,D as St,R as At,M as Ct,C as It,a as Dt,b as Lt,X as Je,c as et}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function g(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function n(l){if(l.ep)return;l.ep=!0;const h=g(l);fetch(l.href,h)}})();function Et({onFinish:t}){const[s,g]=r.useState(!0),n=r.useRef(null),l=r.useRef({x:-1e3,y:-1e3});return r.useEffect(()=>{const h=n.current;if(!h)return;const m=h.getContext("2d");if(!m)return;let S,v=[];const _=()=>{h.width=window.innerWidth,h.height=window.innerHeight},A=p=>{l.current={x:p.clientX,y:p.clientY}},k=p=>{p.touches.length>0&&(l.current={x:p.touches[0].clientX,y:p.touches[0].clientY})};window.addEventListener("resize",_),window.addEventListener("mousemove",A),window.addEventListener("touchmove",k),_();class M{constructor(){this.x=Math.random()*h.width,this.y=Math.random()*h.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>h.width)&&(this.vx*=-1),(this.y<0||this.y>h.height)&&(this.vy*=-1);let P=l.current.x-this.x,z=l.current.y-this.y,F=Math.sqrt(P*P+z*z),R=P/F,O=z/F;const B=150;let I=(B-F)/B;F<B&&(this.x-=R*I*this.density*.5,this.y-=O*I*this.density*.5)}draw(){m&&(m.fillStyle="rgba(255, 255, 255, 0.8)",m.beginPath(),m.arc(this.x,this.y,this.size,0,Math.PI*2),m.fill())}}for(let p=0;p<120;p++)v.push(new M);const N=()=>{m.clearRect(0,0,h.width,h.height);for(let p=0;p<v.length;p++){v[p].update(),v[p].draw();for(let P=p+1;P<v.length;P++){const z=v[p].x-v[P].x,F=v[p].y-v[P].y,R=Math.sqrt(z*z+F*F);R<100&&(m.beginPath(),m.strokeStyle=`rgba(255, 255, 255, ${.2*(1-R/100)})`,m.lineWidth=.6,m.moveTo(v[p].x,v[p].y),m.lineTo(v[P].x,v[P].y),m.stroke())}}S=requestAnimationFrame(N)};return N(),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",_),window.removeEventListener("mousemove",A),window.removeEventListener("touchmove",k)}},[]),e.jsx(jt,{onExitComplete:t,children:s&&e.jsxs($e.div,{onClick:()=>g(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx($e.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx($e.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const Pt=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/logo.jpg"

---

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/ChickenUtopia.mp4"></video>

# 效果展示
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/03.jpg)
`,Rt=`---
id: "01"
slug: "neurotopia"
title: "neurotopia"
category: "planning"
year: "2023"
description: ""
tech: ["Rhino","Grasshopper","design"]
abstract: "Neurotopia aims to provide shared living and entrepreneurial spaces primarily for young people. This urban design project is located in a former industrial area in Hanyang District, Wuhan, Hubei Province, China. By creating a new metaverse for animation enterprises in Hanyang, the project seeks to revitalize the site and establish a decentralized future community based on the theories of neuronal biological properties and complex systems adaptation."
solution: "Specifically, the design introduces the concept of neurons, dividing the space into three categories: "nodes," "connections," and "voids“. Vertical transportation hubs are established at the nodes, connecting prefabricated modular units to each node, promoting a smart city design concept that integrates new transportation and intelligent community systems. In the voids between the nodes, incubator modular units are created to accommodate the evolving scale of enterprises, fostering a dynamic, shared, and co-creative living environment. "
hasDemo: false
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/logo.jpg"

---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Neurotopia.mp4"></video>
</div>

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/05.jpg)

---`,Tt=`---
id: "01"
slug: "previous-archi-work"
title: "previous-archi-work"
category: "planning"
year: "2020-2024"
description: ""
tech: ["Rhino","architecture","design"]
abstract: ""
solution: ""
hasDemo: true
demoOnly: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/武当山.jpg"

---

# 所有的项目具体情况请点击demo查看 

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/海底避难所.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/piledark.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/东湖书吧_1.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/孵化器.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/城市绿脊.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/露营地.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/浮亭_1.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/图书馆.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/武当山.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/水彩作品.jpg)

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/硬笔作品.jpg)




---`,_t=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg)
`,Gt=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg"]
---

# 效果展示

“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” 

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/KnowledgeGraph.mp4"></video>
</div>

![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg)

> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>

![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.png)

> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.png)

> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.png)
`,zt=`---
id: "01"
slug: "hongqiqu"
title: "红旗渠遗产价值评估"
category: "planning"
year: "2022"
description: ""
tech: ["Rhino","architecture","design"]
abstract: ""
solution: ""
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/logo.jpg"

---

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_1.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_2.mp4"></video>
</div>



---

`,Bt=`---
id: "04"
slug: "local-climate-zones-urban-heat-resilience"
title: "Local Climate Zones and Urban Heat Resilience"
category: "GIS & Spatial Analysis"
year: "2025-present"
description: "An empirical study in different climate zones in United States"
tech: ["GIS","Spatial Analysis"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/logo.jpg"
---

# 效果展示
“局部气候区与城市热岛效应韧性：纽约实证研究”

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Local%20Climate%20Zone.mp4"></video>
</div>

> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/01.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/02.png)

abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance."
challenge: "Translating complex urban form findings into practical urban planning policies remains challenging."
solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles."



`,Ft=`---
id: "05"
slug: "urban-heat-resilience-machine-learning"
title: "Assessing Urban Heat Resilience"
category: "Machine Learning"
year: "2025-present"
description: "Revealing nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach"
tech: ["GIS","Machine Learning"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg"]
---
# Research topic 1 
“利用机器学习评估城市形态对不同尺度下热韧性的非线性影响”

> 2025.10，在美国明尼阿波利斯举行的第65届美国大学规划学院协会（ACSP）会议上作口头报告
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/02.png)<br>
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/03.png)<br>
> 2026.2，在新加坡举行的第40届AAAI城市规划人工智能研讨会上作海报展示
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg)<br>
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/04.png)<br>
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/05.png)<br>
> 2025.5.10 在线上参加佛罗里达大学组织的AI和城市工作坊
> 2025.8.7 在英国剑桥大学进行工作坊交流
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/06.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/07.png)


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
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/08.png)
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

![Research Results](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg)

This poster summarizes the key findings of our study on urban heat resilience using machine learning approaches. The visualization demonstrates the nonlinear relationships between urban form factors and extreme heat events.

# Research topic 2
“利用机器学习评估城市形态对不同天气状况下热韧性的非线性影响”
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/GBDT2.mp4"></video>
</div>`,Ot=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg"]
---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/PARTICIPATORY%20URBAN%20REGENERATION%20EMPOWERED%20BY%20ARTIFICAL%20INTELLIGENCE.mp4"></video>
</div>

![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/03.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/04.png)
https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm


![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg)
`,Ut=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png)
`,Wt=`---
id: "01"
slug: "dragon-diffussion"
title: "Dragon Diffussion - AI 创意生产平台"
category: "UI&UX Design"
year: "2023.10-2024.9"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg"]

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

![slide 01](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg)
![slide 02](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg)
![slide 03](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg)
![slide 04](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg)
![slide 05](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg)
![slide 06](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg)
![slide 07](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg)
![slide 08](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg)
![slide 09](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg)
![slide 10](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg)
![slide 11](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg)
![slide 12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg)
![slide 13](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg)
![slide 14](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg)
![slide 15](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg)
![slide 16](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/16.jpg)
![slide 17](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/17.jpg)
![slide 18](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/18.jpg)
![slide 19](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/19.jpg)
![slide 20](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/20.jpg)
![slide 21](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/21.jpg)
![slide 22](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/22.jpg)
![slide 23](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/23.jpg)

![slide 24](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg)
![slide 25](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg)
![slide 26](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg)
![slide 27](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg)
![slide 28](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg)
![slide 29](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg)
![slide 30](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg)
![slide 31](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg)
![slide 32](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg)
![slide 33](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg)
![slide 34](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg)
![slide 35](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg)
![slide 36](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg)
![slide 37](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg)
![slide 38](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg)
![slide 39](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg)
---`,Vt=`---
id: "02"
slug: "anyreal"
title: "AnyReal - AI 虚拟影棚"
category: "UI&UX Design"
year: "2024"
description: "三步生成高真实度商品营销图的 AIGC 内容生产引擎，面向电商与品牌营销场景。"
tech: ["Figma","AI Product Design","SaaS"]
abstract: "AnyReal 是一款面向电商与品牌营销场景的 AI 虚拟影棚 / AIGC 营销内容生产引擎，解决商品营销物料生产成本高、周期长、门槛高的痛点。底层依托自研视觉大模型与 AIGC 联合实验室的科研能力，以真实场景 + 可控可调 + AI 模特为核心差异。"
challenge: "传统商品图拍摄需要 10-20 天、成本 8000-20000 元。市面 AI 工具多为背景替换，无法改变商品展示角度，光影不变，效果不真实。"
solution: "设计了三步生图工作流：上传 3D 资产 → 选场景模板 → 调角度大小生成。搭配背景模版中台、文生图/图生图、图像后处理、视频生成等模块，将生图效率从"天级"降到"分钟级"。"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/24.jpg"]
---

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/AnyReal.mp4"></video>
</div>

![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/01.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/02.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/03.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/04.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/05.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/06.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/07.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/08.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/09.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/10.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/11.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/12.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/13.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/14.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/15.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/16.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/17.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/18.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/19.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/20.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/21.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/22.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/23.jpg)
![AnyReal](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/24.jpg)

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
`,Ht=`---
id: "03"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered image generation tool that transforms text prompts into high-quality visuals platform."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg"]

---
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Genshot.mp4"></video>
</div>

![Genshot1](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg)
![Genshot2](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg)
![Genshot3](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg)
![Genshot4](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg)
![Genshot5](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg)
![Genshot6](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg)
![Genshot7](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg)
![Genshot8](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg)
![Genshot9](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg)
![Genshot10](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg)
![Genshot11](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg)
![Genshot12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg)
![Genshot13](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg)
![Genshot14](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg)
![Genshot15](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg)
![Genshot16](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg)
![Genshot17](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg)
![Genshot18](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg)
![Genshot19](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg)
![Genshot20](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg)
![Genshot21](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg)
![Genshot22](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg)
![Genshot23](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg)
![Genshot24](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg)
![Genshot25](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg)
![Genshot26](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg)
![Genshot27](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg)
![Genshot28](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg)`,qt=`---
id: "04"
slug: "genstyle"
title: "Genstyle - Daily Outfit Inspiration Delivered"
category: "UI&UX Design"
year: "2025"
description: "An AI-powered fashion app that curates daily outfit inspirations based on user preferences and trends."
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg"
]

---


# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/genstyle.mp4"></video>
</div>

![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg)
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg)`,$t=`---
id: "05"
slug: "riffle-ai-game-generation-tool"
title: "Riffle - AI game Generation Tool"
category: "UI&UX Design"
year: "2026"
description: "An AI-powered game generation tool"
tech: ["Figma","React","TypeScript"]
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/logo.jpg"
hasDemo: true
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg"]

---
# 项目网页链接
https://www.riffle.games/

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Riffle.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg)



---`,Kt=`---
id: "06"
slug: "bazi-fengshui-analysis"
title: "Bazi - Fengshui Analysis Application"
category: "UI&UX Design"
year: "2025"
description: "An app that provides personalized AI Fengshui insights based on users' birth data and environmental factors."
tech: ["Figma","React","TypeScript"]
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg", "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg", "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg", "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg", "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg", "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg"]

---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg)
`,Xt=`---
id: "07"
slug: "early-campus-experience"
title: "早期校园经历 — 1037拼拼 & persLEARN"
category: "UI&UX Design"
year: "2023-03-01~2024-03-01"
description: "本科期间在华科Pivot Studio的校园产品设计与实践，涵盖校园拼团平台与科学思维教育平台。"
tech: ["Figma","React","TypeScript"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/13.jpg"]

---

# 效果展示

## 1037拼拼

![slide 01](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/01.jpg)
![slide 02](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/02.jpg)
![slide 03](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/03.jpg)
![slide 04](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/04.jpg)
![slide 05](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/05.jpg)
![slide 06](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/06.jpg)
![slide 07](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/07.jpg)
![slide 08](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/08.jpg)
![slide 09](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/09.jpg)
![slide 10](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/10.jpg)
![slide 11](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/11.jpg)
![slide 12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/12.jpg)
![slide 12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/13.jpg)

## persLEARN — 论文文献平台
项目时间：2023年

persLEARN 是我在本科期间参与的另一个教育类产品设计项目，旨在通过互动模块帮助学生培养科学思维能力。
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/01.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/02.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/03.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/04.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/05.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/06.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/07.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/08.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/09.jpg)
![persLEARN效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/10.jpg)

---
`,Zt=`---
id: "01"
slug: "72-hour-game-jam"
title: "腾讯×华科72小时极限开发挑战赛"
category: "Game"
year: "2022-5-27~2022-5-30"
description: "腾讯×华科72小时极限开发挑战赛！一款在 72 小时 Game Jam 中完成的物资配送主题游戏，向疫情期间默默付出的配送人员与志愿者致敬。"
tech: ["Game Design", "Level Design", "Puzzle Mechanics"]
challenge: "如何在短时间内完成一款兼具主题表达与可玩性的 Game Jam 作品，并让玩家感受到配送工作的责任与挑战。"
solution: "以物资配送为核心玩法，玩家通过连接道路、避开障碍并在限定时间内完成投送任务，在轻量的解谜体验中向城市无名英雄致敬。"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.png"]
---

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/NamelessRoad.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.png)

# 2022 Tencent Games × HUST 72-Hour Game Jam

## 项目背景

2022 年正值疫情时期，许多人因居家隔离无法外出，而一批默默无闻的配送人员和志愿者承担起了保障居民生活物资供应的重要职责。相比聚焦疫情本身，我们更希望通过游戏向这些为城市正常运转默默付出的“无名英雄”致敬，让玩家体验他们在配送过程中的责任与挑战。这个项目获得了金奖。

## 项目时间

2022-5-27 ~ 2022-5-30

## 我的角色

本项目开发于 2022 腾讯游戏 × 华中科技大学游戏极限开发挑战赛（72-Hour Game Jam）期间。我主要担任游戏策划（Game Designer），负责游戏主题、核心玩法策划和关卡设计。

## 核心玩法

游戏以物资配送为核心玩法。玩家需要将生活物资安全送往指定居民家中。在运输过程中，道路上会随机出现路障、树木等各种障碍物，玩家需要灵活规划路线并避开障碍，在限定时间内顺利完成配送任务。

## 设计目标

希望玩家在轻松有趣的游戏体验中，感受到疫情期间物流配送工作的不易，以及每一位配送人员背后默默承担的社会责任。

## Project Overview

This project was developed during the 2022 Tencent Games × Huazhong University of Science and Technology 72-Hour Game Jam. I served as the Game Designer, responsible for the game concept, core gameplay, and level design.

Inspired by the COVID-19 pandemic, the game pays tribute to delivery workers and volunteers who ensured essential supplies reached residents during lockdowns.

The gameplay is based on a road-connection and delivery route mechanic. Players build delivery paths, avoid obstacles such as roadblocks and fallen trees, and deliver supplies to residents within a limited time. Through this simple puzzle experience, the game highlights the challenges and social value of emergency logistics during the pandemic.
`,Yt=`---
id: "02"
slug: "peace-elite-hust-campus"
title: "和平精英绿洲世界 × 华中科技大学高校共建"
category: "Game"
year: "2022-09-01~2023-06-30"
description: "参与华中科技大学联动和平精英绿洲世界高校共建项目，完成南一楼数字化复原、场景设计与多级 LOD 优化。"
tech: ["3D Modeling", "Oasis Engine", "UE4 Workflow", "LOD Optimization", "Scene Design"]
challenge: "如何在自营绿洲引擎工作流下完成高精度校园地标复原，并在性能限制下实现可用的多级细节模型。"
solution: "基于测绘资料完成南一楼三维建模、材质制作与场景优化，经过多轮蓝图讨论和 LOD 调整，最终实现兼顾精度与性能的校园数字资产。"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/01.png"]
---

# 和平精英绿洲世界 × 华中科技大学高校共建

## 项目时间
2022-09-01 ~ 2023-06-30
<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_1.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_2.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_3.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/02.jpg)

## 项目概述

我参与了华中科技大学联动“和平精英绿洲世界”的高校合作共建项目，负责华科地标建筑“南一楼”的数字化复原与场景设计。

基于建筑测绘资料完成建筑三维建模、材质制作及场景优化，实现校园地标在虚拟世界中的高精度还原。学习并使用绿洲引擎（基于 UE4 逻辑）完成模型导入、贴图适配及 LOD 优化，解决跨软件工作流中的技术问题。

与新闻传播学院及跨学科团队协同合作，参与校园数字文化资产建设，探索虚拟空间中的校园记忆表达与人文叙事。

## 实际开发过程

实际过程中，耗时漫长，因为和平精英采用了一套自营的绿洲引擎，需要一定的学习成本。

此外，在早期的校园蓝图上，有多轮讨论。尽管我很擅长建模工作，但是真正用到游戏引擎里面的时候，需要设计多个 LOD 模式。一开始设计了很高精度的模型，随着需求一点点降低精度，达到了最终可以实现多精度的场景建模需求。

## 项目感言

高校不只是吃饭、睡觉、学习的地方，它更是一个天然的社交空间。我们希望通过绿洲启元创作工具等数字化技术手段，把校园社交文化落在绿洲世界里，创造一个理想的第二校园生活。

“毕业，并不意味着故事结束。”

在华科建筑学五年的经历始终是我人生中难忘的留恋。感谢和平精英、新闻学院熊硕老师和项目组的朋友们，拥有属于我的毕业短片，也拥有了在游戏世界的数字资产。


## 绿洲高校贴文链接
https://mp.weixin.qq.com/s/IcG4OHyM48ZXQ3_6--Ii1w
https://gp.qq.com/gicp/news/684/18323914.html
https://www.9game.cn/news/7868658.html

`,Qt=`---
id: "03"
slug: "bmw-meta-island"
title: "同济& BMW 联合挑战营 - 一杯咖啡的游戏旅程"
category: "Game"
year: "2022-10-10~2022-12-10"
description: "同济与 BMW 联合挑战营中的元宇宙品牌营销方案，以人格测试、场景探索与 O2O 联动建立年轻用户与品牌之间的情感连接。"
tech: ["Unity", "Blender", "Figma", "Metaverse Design", "O2O Marketing"]
challenge: "如何让 Z 世代在数字化体验中自然感知 BMW 的品牌价值，并愿意从线上体验继续走向线下互动。"
solution: "以咖啡联名作为现实入口，结合人格测试、车型匹配、森林与城市探索、BMW 元素收集和 Carbon Energy 机制，构建完整的 Meta Island 沉浸式品牌体验。"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.png"]
---

# BMW Meta Island

<div style="display:flex; gap:40px; align-items:flex-start; flex-wrap:wrap;">
<div style="flex:1 1 720px; min-width:0;">

<p style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#94a3b8; margin-bottom:12px;">
Project Overview
</p>
<p><strong>项目时间：</strong>2022-10-10 ~ 2022-12-10</p>
<p>这个项目是我在本科大三期间参加的同济大学与 BMW 联合挑战营。</p>
<p>当时元宇宙（Metaverse）概念正处于高速发展阶段，因此挑战营围绕
"Metaverse 下汽车行业的新体验、新场景、新产品" 展开创新设计。
</p>
<p>我们最终选择了 <strong>Experience</strong> 赛道，希望打造线上线下融合的品牌体验旅程，
将 BMW 的品牌文化、可持续理念以及数字体验结合起来。
</p>
<p>我担任项目组长，负责整体方案设计、项目管理以及最终英文路演展示。</p>
<br />

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_1.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_2.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/BMW%26TJ_3.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.png)

<br />
<h2>项目背景</h2>
<p>随着 Z 世代逐渐成为汽车消费市场的重要群体，传统品牌宣传方式已难以建立年轻用户与品牌之间的情感联系。相比产品本身，他们更加关注体验、兴趣驱动以及社交互动，并习惯于通过数字平台获取品牌信息。
</p>
<p>
因此，我们围绕
<strong>「如何让年轻用户在数字化体验中感受 BMW 品牌价值，并建立长期情感连接」</strong>
这一问题，提出了融合元宇宙、游戏化设计以及 O2O 营销模式的品牌体验方案——
<strong>Meta Island</strong>。
</p>
<br />
<h2>项目方案</h2>
<p>
Meta Island 以“一杯咖啡的时间”作为现实世界入口，与咖啡品牌联名，
在咖啡杯上放置二维码，引导用户进入线上元宇宙世界。
</p>
<p>
用户首先完成人格测试，系统根据测试结果生成专属角色，并匹配最符合其性格特征的 BMW 车型，
使车型推荐更加个性化且富有趣味性。
</p>
<p>
随后玩家进入 Meta Island，在森林、城市等多个场景中自由探索，
收集车辆零件、BMW 品牌元素以及 Carbon Energy（碳能量），逐步完成游戏任务。
</p>
<p>
游戏结束后，玩家利用收集到的零件组装属于自己的 BMW，
并进入最终驾驶体验，形成完整的品牌互动闭环。
</p>
<br />
<h2>商业模式</h2>
<p>项目采用 Online-to-Offline（O2O）模式。</p>
<p>
一方面，通过咖啡品牌合作，将年轻用户碎片化时间转化为品牌体验入口；
另一方面，游戏中获得的 Carbon Credits 可在线下 BMW 门店兑换礼品、
试驾体验及品牌活动资格，实现线上流量向线下消费的自然转化。
</p>
<br />
<h2>项目创新</h2>
<p>本项目最大的创新点并非游戏本身，而是将 BMW 品牌价值贯穿整个体验流程。</p>
<p>
从人格测试、车型推荐，到品牌元素探索，再到 Carbon Energy 可持续奖励机制，
每一个交互都围绕 BMW 品牌理念展开，使用户在游戏过程中自然理解品牌文化，
而不是被动接受广告宣传。
</p>
<br />
<h2>技术实现与落地</h2>
<p>
项目采用 Blender 完成三维场景建模，Unity 负责游戏开发，
Figma 完成整体交互与 UI 原型设计。
</p>
<p>
整体开发重点包括场景搭建、角色交互、任务系统以及积分兑换机制。
若由成熟游戏团队开发，预计整体周期约 3–6 个月，具有较高商业落地可行性。
</p>
</div>

`,Jt=`---
id: "04"
slug: "guangzhou-xinyuan-tech"
title: "广州心源科技有限公司（Bilibili 游戏子公司）"
category: "Game"
year: "2023-7-5~2023-9-1"
description: "我在广州心源科技有限公司完成的第一段正式游戏实习，完整参与了主场景概念设计、单体制作与 UE5 场景搭建的全流程。"
tech: ["Scene Concept Design", "Polygon Modeling", "UV Unwrapping", "Texture Painting", "UE5", "Stable Diffusion"]
abstract: "这是我第一段正式游戏实习，也是第一次完整参与游戏主场景概念设计与制作流程。"
challenge: "如何将大湾区文化、磁带未来与科幻军事等元素整合为具有明确空间特征的主场景概念，并在后续制作中完成从概念到 UE5 落地的完整闭环。"
solution: "先尝试将广州城市元素整合为宏观地图，随后在评审后聚焦广州琶醍，以工业遗产和滨江空间为基础，结合建模与 Stable Diffusion 完成未来场景概设；在制作阶段再通过单体原画、Polygon 建模、UV、贴图与 UE5 场景搭建打通完整流程。"
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.png"]
---

# 广州心源科技有限公司（Bilibili 游戏子公司）

## 项目时间

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/bilibili_2.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.png)

2023-7-5 ~ 2023-9-1

## 项目概述
这是我第一段正式游戏实习，也是第一次完整参与游戏主场景概念设计与制作流程。从世界观构思、场景概设，到单体制作和 UE5 场景搭建，我系统体验了游戏场景从概念到落地的全过程。

## 场景概设（第一个月）
项目主题围绕“**大湾区文化 × 磁带未来 × 科幻军事**”展开。我最初尝试将广州城市元素整合成宏观地图，但在评审中意识到场景缺乏鲜明的空间特征。随后我重新聚焦广州琶醍，以工业遗产和滨江空间为基础，结合建模与 Stable Diffusion 完成未来场景概设。

这一阶段让我理解到，场景概设的核心并非绘制一张漂亮的图，而是通过空间塑造世界观、视觉风格和情绪体验。同时，我也重新认识了 AI 与传统设计工具的关系，它们都是设计表达的媒介，真正重要的是设计思考本身。

## 美术制作（第二个月）

第二个月进入完整制作流程，包括单体原画、Polygon 建模、UV 展开、贴图绘制以及 UE5 场景搭建。

通过大量实践，我能够独立完成从建模到材质制作的完整流程，并逐渐掌握 UE5 中资源组织、灯光、氛围及场景表达的方法。我也意识到，地编不仅是资源摆放，更重要的是利用有限资产塑造世界观与空间叙事。

## 收获

这次实习让我完成了从建筑设计思维向游戏场景设计思维的第一次转换。相比建筑设计强调空间逻辑和功能，游戏主场景更加关注剪影、构图、氛围以及玩家的视觉体验。

同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。`,en=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/logo.jpg"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/02.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/02.png)

## 一个人怎么做游戏

这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。

### 为什么把这两个内容合并？

指萝卜本体是一个微信小游戏项目，而下面这部分是同一套开发路径的复盘，记录了从设计、开发到上线的完整过程。

## 01 设计

### 设计稿 figma

https://www.figma.com/ 下载，打开打开到本地。注册账号并且登录，尽量不要使用qq邮箱。

在这里，我们会开始画项目的设计稿。

<imagecarousel images="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/03.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/04.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/05.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/06.png" captions="Figma design draft - main interface|Figma design draft - game elements|Figma design draft - 具体的流程添加示意|Figma design draft - final output"></imagecarousel>

### ai跑图

#### chatgpt/gemini
使用chatgpt/gemini nano bannana等ai工具，根据设计稿生成对应的图片。

<imagecarousel images="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/07.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/08.png" captions="chatgpt|gemini nanobanna"></imagecarousel>

#### lovart.ai
推荐使用lovart.ai。每天有免费的5张图的图片生成额度。
https://www.lovart.ai/

可以生成对应的游戏ui和游戏插画，此处我示意了对应的帽子的设计。
![AI generated cat with hats](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/09.png)

#### figma professional
可以尝试使用figma professional对图片进行微调。
figma professional version中，新增了对图片的处理，支持裁剪、去除背景、局部抠图（局部清理）、prompt编辑、矢量化（！！！）
<imagecarousel images="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/10.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/11.png,https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/12.png" captions="Figma AI image editing - selecting the cat|Figma AI image editing - adding prompt|Figma AI image editing - model selection"></imagecarousel>

## 02 微信小游戏 code

### 微信小游戏项目结构

打开微信开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![下载页面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/15.png)

下载到本地，如果在本地，可以看到。

![微信开发者工具界面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/13.png)
![微信开发者工具项目结构](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/14.png)

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
![CDN资产](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/16.png)

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
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/17.png)
![审核通知时间线](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/18.png)

> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。

发布到正式版之后，就可以开始看游戏的用户流量情况了。
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/19.png)


## godot引擎，辅助游戏。
我意识到我可能需要更复杂的
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/22.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/23.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/24.png)

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
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/20.png)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/21.png)

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
`,tn=`---
id: "06"
slug: "how-to-use-unity-making-wechat-minigames"
title: "How to use Unity making wechat minigames"
category: "Game"
year: "2026-3-17"
description: "Unity游戏部署在微信的全流程实战经验分享。"
tech: ["Unity","游戏开发","wechat minigame"]
challenge:
solution:
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/logo.jpg"
code: "unitygame.tsx"
image: []
---


下载，打开Unity平台
unity online service, 打造了一系列针对微信小游戏的管理、云服务等多个系列的内容。
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/01.png)
<inframe src='https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html'></inframe>
https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html

<inframe src="https://www.bilibili.com/video/BV1ey411i7hc"></inframe>

教程视频
https://www.bilibili.com/video/BV1Df421q7br?spm_id_from=333.788.videopod.sections&bvid=BV1ey411i7hc

具体怎么在Unity中部署微信小游戏的tutorial
https://learn.u3d.cn/tutorial/instant-game-joker?chapterId=64f5962ca571d50021bb3afb&sectionId=64f5962ca571d50021bb3afa`,nn=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/logo.jpg"
code: "litflow.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png)
`,an=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/logo.jpg"
code: "boxupcyberspace.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/02.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/02.png)
`,sn=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/logo.jpg"
code: "epsteinscret.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png"]
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

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png)
`,rn=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/logo.jpg"
code: "openstreetmap.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png)
`,on=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/logo.jpg"
code: "photogeo.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png)
`,cn=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/logo.jpg"
code: "photogeomap.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png)
`,ln=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/logo.jpg"
code: "clusteringevents.tsx"
image: ["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg"]
---

# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg)
`,dn=`---
id: "05"
slug: "how-to-construct-docker"
title: "如何构建docker"
category: "Tutorial"
year: "2026-2-14"
description: "本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。"
tech: ["Docker", "Linux", "DevOps"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/docker-tutorial/logo.jpg"
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

## 04 日常使用。`,pn=`---
id: "06"
slug: "how-to-construct-workflow-in-dify"
title: "How to construct workflow in Dify"
category: "Tutorial"
year: "2026-2-15"
description: "本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署、知识库创建和工作流设计。"
tech: ["Dify", "Docker", "Ollama", "AI Workflow", "Local LLM"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dify-workflow/logo.jpg"
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
`,bn=`---
id: "07"
slug: "how-to-construct-light-backend-workflow"
title: "How to construct the light backend workflow "
category: "Tutorial"
year: "2026-2-16"
description: "本教程将介绍如何构建轻量级后端工作流。"
tech: ["vercel", "neon", "clerk", "cloudflare r2", "resend"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/backend-workflow/logo.jpg"
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

`,gn=`---
id: "08"
slug: "whats-mcp"
title: "什么是 MCP？—— 让 AI 学会使用工具的「通用语言」"
category: "Tutorial"
year: "2026-2-25"
description: "面向非计算机背景学生的 MCP 入门教程，用通俗的语言解释 Model Context Protocol 是什么、为什么需要它、以及如何使用它。"
tech: ["MCP", "AI", "Claude", "LLM"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/whats-mcp/logo.jpg"
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

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,un=`---
id: "09"
slug: "how-to-choose-suitable-database"
title: "数据库选择指南——什么情况用什么数据库"
category: "Tutorial"
year: "2026-3-17"
description: "简单明了的数据库选择指南，帮助你根据项目需求快速选择合适的数据库。"
tech: ["数据库", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/choose-database/logo.jpg"
abstract: |
  选择合适的数据库是项目成功的关键。本指南用简单的语言告诉你，在不同场景下应该选择哪种数据库，让你不再为数据库选择而困惑。
---

# 数据库选择指南

## 01 快速选择指南

### 什么是数据库？

**数据库**就是用来存储和管理数据的系统，就像一个电子化的文件柜。不同类型的数据库适合不同的场景。

### 一句话选择

| 场景 | 推荐数据库 | 理由 |
|------|------------|------|
| **一般网站/应用** | MySQL | 简单易用，适合大多数中小项目 |
| **复杂企业系统** | PostgreSQL | 功能强大，支持复杂业务逻辑 |
| **社交/内容应用** | MongoDB | 灵活的数据结构，适合用户数据 |
| **需要速度的场景** | Redis | 内存存储，速度极快 |

---

## 02 主流数据库适用场景

### MySQL

**最适合**：
- 中小型网站和应用
- 电商网站
- 企业内部系统
- 内容管理系统

**为什么选它**：
- 容易学习和使用
- 免费且稳定
- 社区支持好
- 与PHP等语言配合默契

**例子**：
- 小型电商网站的产品和订单管理
- 企业内部的员工信息系统
- 个人博客或内容网站

---

### PostgreSQL

**最适合**：
- 复杂的企业应用
- 数据仓库和分析
- 地理信息系统
- 需要高级功能的场景

**为什么选它**：
- 功能非常强大
- 支持复杂查询
- 数据一致性好
- 适合处理复杂数据

**例子**：
- 银行的交易系统
- 医院的 patient 管理系统
- 城市的地理信息系统

---

### MongoDB

**最适合**：
- 社交应用
- 内容管理系统
- 物联网应用
- 移动应用后端

**为什么选它**：
- 数据结构灵活，不需要固定格式
- 适合存储各种类型的数据
- 可以轻松处理大量数据
- 开发速度快

**例子**：
- 社交网络的用户资料和动态
- 内容平台的文章和评论
- 物联网设备的传感器数据

---

### Redis

**最适合**：
- 缓存系统
- 会话管理
- 实时计数器
- 排行榜
- 消息队列

**为什么选它**：
- 速度极快（内存存储）
- 支持多种数据类型
- 适合处理实时数据
- 可以减轻数据库压力

**例子**：
- 网站的页面缓存
- 电商网站的购物车
- 游戏的实时排行榜
- 直播平台的弹幕系统

---

## 03 组合使用

### 常见组合

| 场景 | 推荐组合 | 效果 |
|------|----------|------|
| **一般Web应用** | MySQL + Redis | MySQL存数据，Redis做缓存 |
| **社交应用** | MongoDB + Redis | MongoDB存用户数据，Redis处理实时功能 |
| **企业系统** | PostgreSQL + Redis | PostgreSQL处理复杂业务，Redis提高速度 |

### 例子

**电商网站**：
- MySQL：存储产品、订单、用户信息
- Redis：缓存热门产品，管理购物车

**社交应用**：
- MongoDB：存储用户资料、动态、评论
- Redis：处理实时通知、在线状态

---

## 04 选择的核心原则

### 考虑因素

1. **数据结构**：
   - 整齐的表格数据 → MySQL/PostgreSQL
   - 灵活的非结构化数据 → MongoDB
   - 简单的键值对 → Redis

2. **性能需求**：
   - 一般应用 → MySQL
   - 复杂查询 → PostgreSQL
   - 速度优先 → Redis

3. **数据量**：
   - 小数据量 → MySQL
   - 大数据量 → MongoDB
   - 超大数据量 → 分布式数据库

4. **团队能力**：
   - 新手团队 → MySQL
   - 有经验团队 → PostgreSQL/MongoDB

---

## 05 云数据库

### 为什么用云数据库？

- **不用自己维护**：云服务商负责硬件和软件
- **随用随扩**：根据需要调整资源
- **高可靠性**：自动备份和故障转移
- **按需付费**：只付实际使用的费用

### 推荐的云数据库服务

- **AWS RDS**：支持MySQL、PostgreSQL
- **阿里云RDS**：国内稳定，价格合理
- **腾讯云TencentDB**：与微信生态集成好

---

## 06 总结

### 快速决策表

| 需求 | 首选数据库 |
|------|------------|
| 简单网站/应用 | MySQL |
| 复杂企业系统 | PostgreSQL |
| 社交/内容应用 | MongoDB |
| 缓存/实时功能 | Redis |
| 混合需求 | 组合使用 |

### 最终建议

- **从小开始**：先选择简单的数据库，随着业务增长再调整
- **混合使用**：不同场景用不同的数据库
- **考虑未来**：选择能支持业务增长的数据库
- **团队熟悉**：优先选择团队熟悉的技术

> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function hn(t){const s=/^---\r?\n([\s\S]*?)\r?\n---/,g=t.match(s);let n={},l=t;if(g){const m=g[1];l=t.slice(g[0].length).trim();const S=m.split(/\r?\n/);let v=null,_=[];S.forEach(A=>{if(A.trim()==="")return;const M=A.indexOf(":");if(M!==-1&&!A.startsWith(" ")){v&&(n[v]=_.join(`
`)),v=A.slice(0,M).trim();let N=A.slice(M+1).trim();N==="|"?_=[]:N===""?_=[]:(n[v]=N,v=null,_=[])}else v&&A.startsWith("  ")&&_.push(A.slice(2))}),v&&_.length>0&&(n[v]=_.join(`
`)),Object.keys(n).forEach(A=>{let k=n[A];if(typeof k=="string")if(k=k.trim(),k.startsWith('"')&&k.endsWith('"')&&(k=k.slice(1,-1)),typeof k=="string"&&k.includes(`
`)&&/^\s*-/.test(k)){const M=k.split(/\r?\n/).map(N=>N.replace(/^\s*-\s*/,"").trim()).filter(N=>N!=="");n[A]=M.map(N=>N.startsWith('"')&&N.endsWith('"')||N.startsWith("'")&&N.endsWith("'")?N.slice(1,-1):N)}else if(k.startsWith("[")&&k.endsWith("]"))try{n[A]=JSON.parse(k)}catch{n[A]=[k.slice(1,-1).trim()]}else k==="true"?n[A]=!0:k==="false"?n[A]=!1:!isNaN(Number(k))&&k.trim()!==""?n[A]=Number(k):n[A]=k})}let h=[];if(Array.isArray(n.image)&&n.image.length>0)h=n.image;else{const m=/!\[.*?\]\(([^)\s]+)\)/g;let S;for(;(S=m.exec(l))!==null;)h.push(S[1])}return{id:n.id||"",slug:n.slug||"",title:n.title||"",category:n.category||"",year:n.year||"",description:n.description||"",tech:n.tech||[],abstract:n.abstract||"",challenge:n.challenge||"",solution:n.solution||"",hasDemo:n.hasDemo||!1,icon:n.icon||"",code:n.code||"",logo:n.icon||"",image:h,content:l}}function L(t){const s=hn(t);return{id:s.id,slug:s.slug,title:s.title,category:s.category,year:s.year,description:s.description,tech:s.tech,hasDemo:s.hasDemo,details:{abstract:s.abstract,description:s.description,challenge:s.challenge,solution:s.solution,logo:s.logo,icon:s.icon,code:s.code,image:s.image,content:s.content,demoOnly:s.demoOnly||!1}}}const Te=[L(Pt),L(Rt),L(Tt),L(Gt),L(zt),L(Bt),L(Ft),L(Ot),L(_t),L(Ut)],_e=[L(Wt),L(Vt),L(Ht),L(qt),L($t),L(Kt),L(Xt)],Ge=[L(Zt),L(Yt),L(Qt),L(Jt),L(en),L(tn)],ze=[L(nn),L(an),L(sn)],Be=[L(rn),L(on),L(cn),L(ln),L(dn),L(pn),L(bn),L(gn),L(un)],fn={design:"Products",game:"Games",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},pt=({className:t})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:t,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),bt=({to:t,className:s=""})=>e.jsx(ne,{to:t,className:`btn-accent ${s}`,children:"Demo"}),mn=!1,xn=({project:t,type:s,index:g})=>{var n;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(g+1).padStart(2,"0")}),e.jsxs(ne,{to:`/${s}/${t.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"}):e.jsx(pt,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:t.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:t.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(n=t.tech)==null?void 0:n.slice(0,3).map(l=>e.jsx("span",{className:"chip",children:l},l))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:t.year})]}),t.hasDemo&&e.jsx(bt,{to:`/${s}/${t.slug}#demo`,className:"shrink-0"})]})})},vn=({project:t,type:s,index:g})=>{var n;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(ne,{to:`/${s}/${t.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:t.details.logo?e.jsx("img",{src:t.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"}):e.jsx(pt,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(g+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:t.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:t.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:t.description}),((n=t.tech)==null?void 0:n.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:t.tech.slice(0,2).map(l=>e.jsx("span",{className:"chip",children:l},l))})]})]}),t.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(bt,{to:`/${s}/${t.slug}#demo`,className:"w-full"})})]})},Ce=({data:t,type:s})=>{const[g,n]=r.useState("grid"),l=fn[s]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[s==="design"&&mn,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[s," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(t.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",l]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(h=>e.jsx("button",{onClick:()=>n(h),"aria-pressed":g===h,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${g===h?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:h},h))})]}),g==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:t.map((h,m)=>e.jsx(xn,{project:h,type:s,index:m},h.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:t.map((h,m)=>e.jsx(vn,{project:h,type:s,index:m},h.slug))})]})},yn="modulepreload",jn=function(t,s){return new URL(t,s).href},tt={},G=function(s,g,n){let l=Promise.resolve();if(g&&g.length>0){let m=function(A){return Promise.all(A.map(k=>Promise.resolve(k).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};const S=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),_=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));l=m(g.map(A=>{if(A=jn(A,n),A in tt)return;tt[A]=!0;const k=A.endsWith(".css"),M=k?'[rel="stylesheet"]':"";if(!!n)for(let P=S.length-1;P>=0;P--){const z=S[P];if(z.href===A&&(!k||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${A}"]${M}`))return;const p=document.createElement("link");if(p.rel=k?"stylesheet":yn,k||(p.as="script"),p.crossOrigin="",p.href=A,_&&p.setAttribute("nonce",_),document.head.appendChild(p),k)return new Promise((P,z)=>{p.addEventListener("load",P),p.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${A}`)))})}))}function h(m){const S=new Event("vite:preloadError",{cancelable:!0});if(S.payload=m,window.dispatchEvent(S),!S.defaultPrevented)throw m}return l.then(m=>{for(const S of m||[])S.status==="rejected"&&h(S.reason);return s().catch(h)})},wn=r.lazy(()=>G(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),kn=r.lazy(()=>G(()=>import("./UR-platform-DFO5eSKd.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),Nn=r.lazy(()=>G(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Mn=r.lazy(()=>G(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Sn=r.lazy(()=>G(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),An=r.lazy(()=>G(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),Cn=r.lazy(()=>G(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));r.lazy(()=>G(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const In=r.lazy(()=>G(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),Dn=r.lazy(()=>G(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),nt=r.lazy(()=>G(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),Ln=r.lazy(()=>G(()=>import("./72HourGameJamDemo-BWPUgRvj.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),En=r.lazy(()=>G(()=>import("./PeaceEliteHustCampusDemo-D-DWwJkq.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Pn=r.lazy(()=>G(()=>import("./BMWMetaIslandDemo-7uu2MOZP.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),Rn=r.lazy(()=>G(()=>import("./riffle-BuqCfcTA.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Tn=r.lazy(()=>G(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),_n=r.lazy(()=>G(()=>import("./genshot-8Uy4GIux.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),Gn=r.lazy(()=>G(()=>import("./dragon-diffusion-Dj4t-WNK.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),zn=r.lazy(()=>G(()=>import("./anyreal-DKKTpW8w.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),Bn=r.lazy(()=>G(()=>import("./previous-archi-work-CvNoz6hg.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),Fn=r.lazy(()=>G(()=>import("./hongqiqu-y3eLCJ-3.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),at=t=>({"cluster-visualizer-3d":wn,"participatory-urban-regeneration-empowered-by-artificial-intelligence":kn,heatmapper:Nn,"how-to-add-openstreetmap-in-website":Mn,"how-to-get-sequential-events-from-photo-by-phone":Sn,"how-to-visualize-photo-geolocation-data-on-map":An,kittylovecarrots:nt,"how-to-build-game-in-wechat-mini-program":nt,"72-hour-game-jam":Ln,"peace-elite-hust-campus":En,"bmw-meta-island":Pn,"how-to-conduct-time-geo-sequential-clustering-from-album":Cn,"box-up-my-stuff-in-cyberspace":In,"epstein-mystery-archive":Dn,"riffle-ai-game-generation-tool":Rn,genstyle:Tn,"genshot-AI-video-generation-tool":_n,"dragon-diffussion":Gn,anyreal:zn,"previous-archi-work":Bn,hongqiqu:Fn})[t],st={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},On=({images:t,captions:s})=>{const[g,n]=r.useState(0),l=()=>{n(S=>S===0?t.length-1:S-1)},h=()=>{n(S=>S===t.length-1?0:S+1)},m=s==null?void 0:s[g];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:t[g],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:m||`Carousel Image ${g+1}`}),e.jsx("button",{onClick:l,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:h,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:t.map((S,v)=>e.jsx("button",{onClick:()=>n(v),className:`h-1.5 rounded-full transition-all duration-300 ${g===v?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${v+1}`},v))})]}),m&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:m}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[g+1," / ",t.length]})]}),!m&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[g+1," / ",t.length]})]})},Un=({src:t,...s})=>{const[g,n]=r.useState(!1),[l,h]=r.useState(!1);return r.useEffect(()=>{const m=setTimeout(()=>{l||(n(!1),h(!0))},3e3);return()=>clearTimeout(m)},[l]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:t,onLoad:()=>{n(!0),h(!0)},onError:()=>{n(!1),h(!0)},style:{display:"none"},title:"detector"}),!l&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),l&&g&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:t,className:"h-96 w-full border-0",allowFullScreen:!0,...s})}),l&&!g&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},Wn={iframe:({src:t,title:s,...g})=>e.jsx(Un,{src:t,title:s||"Embedded content",...g}),imagecarousel:({images:t,captions:s})=>{const g=(t||"").split(",").map(l=>l.trim()).filter(Boolean),n=s?s.split("|").map(l=>l.trim()):void 0;return e.jsx(On,{images:g,captions:n})},table:({children:t})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:t})}),thead:({children:t})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:t}),th:({children:t})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:t}),td:({children:t})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:t}),h1:({children:t,...s})=>{const n=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:n,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...s,children:t})},h2:({children:t,...s})=>{const n=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:n,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...s,children:t})},h3:({children:t,...s})=>{const n=(typeof t=="string"?t:(t==null?void 0:t.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:n,className:"mt-6 mb-3 text-base font-bold text-ink",...s,children:t})},h4:({children:t,...s})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...s,children:t}),h5:({children:t,...s})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...s,children:t}),h6:({children:t,...s})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...s,children:t}),p:({children:t,...s})=>{var l;const g=ht.Children.toArray(t),n=g.length===1&&((l=g[0])==null?void 0:l.type)==="img";return e.jsx("p",{className:n?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...s,children:t})},a:({children:t,href:s,...g})=>e.jsx("a",{href:s,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...g,children:t}),img:({src:t,alt:s,...g})=>(s==null?void 0:s.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:t,alt:s,className:"h-32 max-w-full border border-rule object-cover",...g}):e.jsx("img",{src:t,alt:s,className:"my-0 h-auto w-full border border-rule object-cover",...g})},Ie=({data:t,type:s})=>{var v,_,A,k,M;const{id:g}=ut(),n=t.find(N=>N.slug===g),[l,h]=r.useState(n!=null&&n.hasDemo&&((v=n==null?void 0:n.details)!=null&&v.demoOnly)?"demo":"details"),[m,S]=r.useState(!1);return r.useEffect(()=>{const N=()=>{var p;n!=null&&n.hasDemo&&((p=n==null?void 0:n.details)!=null&&p.demoOnly)||window.location.hash.includes("demo")&&(n!=null&&n.hasDemo)?h("demo"):h("details")};return N(),window.addEventListener("hashchange",N),()=>window.removeEventListener("hashchange",N)},[g,n==null?void 0:n.hasDemo,(_=n==null?void 0:n.details)==null?void 0:_.demoOnly]),n?e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(ne,{to:`/${s}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:n.title})]}),!((A=n.details)!=null&&A.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>h("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${l==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),n.hasDemo&&e.jsxs("button",{onClick:()=>h("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${l==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),l==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl",children:[((k=n.tech)==null?void 0:k.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:n.tech.map((N,p)=>e.jsx("span",{className:"chip",children:N},p))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",n.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:n.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:n.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:n.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:m,onToggle:N=>S(N.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[m?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[n.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.description})]}),n.details.abstract&&n.details.abstract!==n.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.abstract})]}),n.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.challenge})]}),n.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.solution})]})]})]}),n.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("div",{className:"section-head mb-8",children:e.jsx("p",{className:"eyebrow",children:"Content"})}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(wt,{remarkPlugins:[Nt],rehypePlugins:[kt],components:Wn,children:n.details.content})})]}),(n.details.code||n.details.codeComponent||st[n.slug])&&e.jsxs("section",{id:"code",className:"mt-12",children:[e.jsx("div",{className:"section-head mb-5",children:e.jsx("p",{className:"eyebrow",children:"Code Example"})}),e.jsx("pre",{className:"overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas md:p-7",children:e.jsx("code",{children:st[n.slug]||n.details.codeComponent||`// Code file: ${n.details.code}`})})]})]})}):(M=n.details)!=null&&M.demoOnly?e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const N=at(n.slug);return N?e.jsx(N,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const N=at(n.slug);return N?e.jsx(N,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(ne,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})})},Vn=["Urban Climate & Resilience","AI-Assisted Urban Planning","Machine Learning & Data Analysis","Spatial Statistics & GIS","React / Next.js Ecosystem","TypeScript Architecture","WebGL / Three.js","UI Systems Design"],Hn=()=>{const[t,s]=r.useState(null);return r.useEffect(()=>{if(!t)return;const g=l=>{l.key==="Escape"&&s(null)};window.addEventListener("keydown",g);const n=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",g),document.body.style.overflow=n}},[t]),e.jsx("div",{className:"shell animate-rise-in py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx("div",{className:"section-head",children:e.jsx("p",{className:"eyebrow",children:"About / Bio"})}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"关于我"}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"About Me"}),e.jsxs("div",{className:"mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg",children:[e.jsxs("p",{children:["我是林丽丽，首尔大学硕士生，华中科技大学本科生, 想做",e.jsx("strong",{className:"font-semibold text-ink",children:"AI 相关的产品"}),". 我的研究兴趣包括",e.jsx("strong",{className:"font-semibold text-ink",children:"城市气候韧性、城市规划知识图谱、空间统计与机器学习"}),"，并且我也对",e.jsx("strong",{className:"font-semibold text-ink",children:"产品设计、UI/UX和前端开发"}),"充满热情。"]}),e.jsx("p",{})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Core Competencies"}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:Vn.map(g=>e.jsx("span",{className:"chip",children:g},g))})]})]})})},qn=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),Ke=({href:t,label:s})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:s}),it=[{city:"上海",country:"中国",date:"2024",note:"法租界的梧桐树影"},{city:"东京",country:"日本",date:"2025",note:"下北泽的午后散步"},{city:"首尔",country:"韩国",date:"2025",note:"汉江边的晚风与霓虹"},{city:"新加坡",country:"新加坡",date:"2026",note:"滨海湾的花园城市漫游"},{city:"明尼阿波利斯",country:"美国",date:"2025",note:"密西西比河畔的秋日"},{city:"剑桥",country:"英国",date:"2025",note:"康河上的撑船与学院回廊"},{city:"武汉",country:"中国",date:"2023",note:"东湖绿道与热干面的早晨"},{city:"香港",country:"中国",date:"2024",note:"中环半山扶梯的夜色"}],rt=["from-amber-500/20 via-orange-400/10 to-yellow-500/20","from-emerald-500/20 via-teal-400/10 to-cyan-500/20","from-rose-500/20 via-pink-400/10 to-fuchsia-500/20","from-sky-500/20 via-blue-400/10 to-indigo-500/20","from-violet-500/20 via-purple-400/10 to-plum-500/20","from-lime-500/20 via-green-400/10 to-emerald-500/20","from-red-500/20 via-orange-400/10 to-amber-500/20","from-cyan-500/20 via-teal-400/10 to-sky-500/20"],$n={上海:"🏙️",东京:"🗼",首尔:"🏯",新加坡:"🌿",明尼阿波利斯:"🌊",剑桥:"🎓",武汉:"🌸",香港:"🌃"},Kn=({entry:t,index:s})=>{const[g,n]=r.useState(!1),l=rt[s%rt.length],h=$n[t.city]??"📍";return e.jsx("div",{className:"relative cursor-pointer select-none",style:{perspective:"800px"},onClick:()=>n(m=>!m),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:e.jsxs("div",{className:"relative w-full transition-transform duration-500 ease-editorial",style:{transformStyle:"preserve-3d",transform:g?"rotateY(180deg)":"rotateY(0deg)",aspectRatio:"3/4"},children:[e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-x-3 top-2 flex justify-between",children:Array.from({length:16}).map((m,S)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},S))}),e.jsx("div",{className:"absolute inset-x-3 bottom-2 flex justify-between",children:Array.from({length:16}).map((m,S)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},S))}),e.jsx("span",{className:"text-3xl",children:h}),e.jsx("p",{className:"text-base font-bold tracking-tight text-ink",children:t.city}),e.jsx("p",{className:"eyebrow text-ink-3",children:t.country}),t.date&&e.jsx("span",{className:"mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:t.date}),e.jsx("div",{className:"absolute right-3 top-5 -rotate-12 opacity-30",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"17",stroke:"currentColor",strokeWidth:"1.5",className:"text-ink-3"}),e.jsx("path",{d:"M8 8l24 24M8 32L32 8",stroke:"currentColor",strokeWidth:"0.8",className:"text-ink-3"})]})})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[t.photo?e.jsx("img",{src:t.photo,alt:t.city,className:"absolute inset-0 h-full w-full object-cover"}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${l}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 px-4 text-center",children:[e.jsx("p",{className:"text-lg font-bold tracking-tight text-white",children:t.city}),t.note&&e.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-white/70",children:t.note})]}),e.jsx("div",{className:"absolute inset-2 border border-dashed border-white/10"})]})]})})},Xn=()=>e.jsxs("section",{className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Wander"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(it.length).padStart(2,"0")," cities"]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"City Walks"}),e.jsxs("p",{className:"max-w-xs text-right text-xs leading-relaxed text-ink-3",children:["用脚步丈量城市，",e.jsx("br",{className:"hidden sm:inline"}),"在每个街角发现故事。"]})]}),e.jsx("div",{className:"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:it.map((t,s)=>e.jsx(Kn,{entry:t,index:s},t.city))})]}),Zn=[{key:"all",label:"All"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"}],ot={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计、开发、游戏和城市规划"}),"领域的项目。"]}),design:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"游戏"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"教程"}),"领域的项目。"]})},Xe=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],ct=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),lt=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),Yn={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},ve=({value:t,transform:s})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:s,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((g,n)=>e.jsx("span",{className:"flex items-center justify-center",children:Yn[t].includes(n)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:t===1||t===4?"#cc2a18":"#171717"}})},n))}),Qn=()=>{var Ae,i,x,w,y;const[t,s]=r.useState("all"),g={all:[..._e.map(a=>({...a,type:"design"})),...Ge.map(a=>({...a,type:"game"})),...Te.map(a=>({...a,type:"planning"})),...ze.map(a=>({...a,type:"platform"})),...Be.map(a=>({...a,type:"tutorial"}))],design:_e.map(a=>({...a,type:"design"})),planning:Te.map(a=>({...a,type:"planning"})),game:Ge.map(a=>({...a,type:"game"})),platform:ze.map(a=>({...a,type:"platform"})),tutorial:Be.map(a=>({...a,type:"tutorial"}))},n=a=>g[a].length,l=g[t]??g.all,h=Math.max(0,l.length-1),[m,S]=r.useState(0),v=a=>{s(a),S(0)},_=a=>{if(!a)return[];const o=/<video[^>]+src="([^"]+)"/gi;return Array.from(a.matchAll(o),c=>c[1])},A=a=>{var c,d;if(!a)return null;const o=(c=a.details)==null?void 0:c.image;return o!=null&&o.length?o[0]:((d=a.details)==null?void 0:d.logo)??null},k=l[(m-1+l.length)%l.length],M=l[(m+1)%l.length],N=A(k),p=A(M),[P,z]=r.useState(0),[F,R]=r.useState(!1),O=r.useRef(null),B=r.useRef(null),I=l[m],K=((Ae=I==null?void 0:I.details)==null?void 0:Ae.image)??[];K.length>=2&&K[(P-1+K.length)%K.length],K.length>=3?K[(P+1)%K.length]:K.length===2&&K[(P+1)%2],r.useEffect(()=>{z(0),R(!1)},[m,t]);const[Ne,X]=r.useState({x:0,y:0}),Fe=()=>{X(a=>({x:a.x+720+Math.round(Math.random()*360),y:a.y+720+Math.round(Math.random()*360)})),setTimeout(()=>Y(Math.floor(Math.random()*l.length)),900)},Me=_(((i=I==null?void 0:I.details)==null?void 0:i.content)??""),ge=((x=I==null?void 0:I.details)==null?void 0:x.image)??[],Z=[...Me,...ge],ue=Z.length>0?Z[P%Z.length]:(w=I==null?void 0:I.details)==null?void 0:w.logo,ae=Me.length>0&&P<Me.length,se=ge.length>0?ge[0]:(y=I==null?void 0:I.details)==null?void 0:y.logo,Se=()=>{z(a=>(a+1)%(Z.length||1))};r.useEffect(()=>{if(B.current&&(clearInterval(B.current),B.current=null),!(ae||Z.length<=1))return B.current=setInterval(Se,5e3),()=>{B.current&&(clearInterval(B.current),B.current=null)}},[m,t,ae,Z.length]);const ie=()=>{const a=O.current;a&&(a.muted=!a.muted,R(!a.muted))},ee=r.useRef(null),te=3,W=r.useRef({isDown:!1,isDragging:!1,startX:0,scrollLeft:0}),Oe=a=>{var o;W.current={isDown:!0,isDragging:!1,startX:a.clientX,scrollLeft:((o=ee.current)==null?void 0:o.scrollLeft)??0}},re=a=>{var c;if(!W.current.isDown)return;const o=a.clientX-W.current.startX;!W.current.isDragging&&Math.abs(o)<te||(W.current.isDragging||(W.current.isDragging=!0,(c=ee.current)==null||c.setPointerCapture(a.pointerId)),a.preventDefault(),ee.current.scrollLeft=W.current.scrollLeft-o)},De=a=>{var o;W.current.isDragging&&((o=ee.current)==null||o.releasePointerCapture(a.pointerId)),W.current={isDown:!1,isDragging:!1,startX:0,scrollLeft:0}},Y=a=>{S(a)};r.useEffect(()=>{const a=ee.current;if(!a)return;const o=a.children[m];o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[m]);const oe=r.useRef(null),he=r.useRef([]),[fe,Ze]=r.useState(0),[gt,V]=r.useState(0),[Le,me]=r.useState({start:!0,end:!1}),[Ee,Ue]=r.useState({}),ce=a=>{const o=a%Xe.length;Ze(o);const c=oe.current;if(c){const d=c.children[o];d&&c.scrollTo({left:d.offsetLeft-c.offsetWidth/2+d.offsetWidth/2,behavior:"smooth"})}};r.useEffect(()=>{const a=he.current[fe];a&&(a.currentTime=0,a.play().catch(()=>{}))},[fe]);const le=r.useCallback(()=>{const a=oe.current;if(!a)return;const o=a.firstElementChild,c=(o==null?void 0:o.offsetWidth)||1;V(Math.round(a.scrollLeft/c)),me({start:a.scrollLeft<=1,end:a.scrollLeft+a.clientWidth>=a.scrollWidth-1})},[]);r.useEffect(()=>(le(),window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)),[le]);const Pe=a=>{const o=oe.current;if(!o)return;const c=o.firstElementChild;o.scrollBy({left:a*((c==null?void 0:c.offsetWidth)||o.clientWidth/2),behavior:"smooth"})},We=(a,o)=>{var u;const c=a,d=j=>Ue(f=>f[o]===j?f:{...f,[o]:j});if((u=c.audioTracks)!=null&&u.length){d(Array.from(c.audioTracks).some(j=>j.enabled));return}if("mozHasAudio"in c){d(!!c.mozHasAudio);return}if(typeof c.webkitAudioDecodedByteCount=="number"&&c.webkitAudioDecodedByteCount>0){d(!0);return}if(c.readyState>=3){setTimeout(()=>d(c.webkitAudioDecodedByteCount>0||c.mozHasAudio===!0),500);return}d(!0)};return e.jsxs("div",{className:"animate-rise-in pb-16",children:[ue&&e.jsxs("section",{className:"relative w-full overflow-hidden border-b border-neutral-800",style:{background:"linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)"},children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.07]","aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none",style:{boxShadow:"inset 0 0 140px 50px rgba(0,0,0,0.75)"},"aria-hidden":"true"}),e.jsxs("div",{className:"relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0",children:[e.jsx("button",{onClick:()=>Y((m-1+l.length)%l.length),className:"group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block",title:k==null?void 0:k.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[N&&e.jsx("img",{src:N,alt:"",onError:a=>{a.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:k==null?void 0:k.title})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 86%, 0 100%)"},children:e.jsx("img",{src:se,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30"})})}),e.jsx("div",{className:"relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]",children:e.jsxs("div",{className:"aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]",style:{boxShadow:"0 0 70px -10px rgba(0,0,0,0.5)"},children:[ae?e.jsx("video",{ref:a=>{O.current=a},src:ue,autoPlay:!0,muted:F,playsInline:!0,onEnded:Se,className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},ue):e.jsx("img",{src:ue,alt:(I==null?void 0:I.title)??"",className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},ue),ae&&e.jsx("button",{onClick:ie,className:"absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white",title:F?"Unmute":"Mute",children:F?e.jsxs("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 86%)"},children:e.jsx("img",{src:se,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30"})})}),e.jsx("button",{onClick:()=>Y((m+1)%l.length),className:"group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block",title:M==null?void 0:M.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[p&&e.jsx("img",{src:p,alt:"",onError:a=>{a.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:M==null?void 0:M.title})})]})})]})]}),e.jsxs("section",{className:"shell pt-10 md:pt-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-ink truncate",children:I==null?void 0:I.title}),e.jsxs("p",{className:"eyebrow shrink-0",children:[I==null?void 0:I.type," · ",I==null?void 0:I.year]})]}),e.jsxs("div",{className:"flex items-center gap-3 shrink-0 min-w-0",children:[Z.length>1&&e.jsx("span",{className:"flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]",children:Z.map((a,o)=>e.jsx("button",{onClick:()=>z(o),"aria-label":`Media ${o+1}`,className:`h-1.5 shrink-0 rounded-full transition-all duration-300 ${o===P?"w-6 bg-accent":"w-1.5 bg-rule hover:bg-ink-3"}`},o))}),e.jsx("button",{onClick:Fe,className:"btn-ghost shrink-0 !px-2",title:"Roll a random project",children:e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${Ne.x}deg) rotateY(${Ne.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(ve,{value:1,transform:"translateZ(10px)"}),e.jsx(ve,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(ve,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(ve,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(ve,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(ve,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})})})]})]}),e.jsx("div",{className:"mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule",children:Zn.map(a=>{const o=t===a.key;return e.jsxs("button",{onClick:()=>v(a.key),"aria-pressed":o,className:`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${o?"text-ink":"text-ink-3 hover:text-ink"}`,children:[a.label,e.jsx("span",{className:"ml-1.5 nums-tabular text-ink-3",children:n(a.key)}),e.jsx("span",{className:`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${o?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]},a.key)})}),e.jsxs("div",{className:"mt-5 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>Y(Math.max(0,m-1)),disabled:m<=0,"aria-label":"Previous project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ct,{})}),e.jsx("div",{ref:ee,className:"flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y",onPointerDown:Oe,onPointerMove:re,onPointerUp:De,onPointerLeave:De,children:l.map((a,o)=>{const c=o===m;return e.jsxs("button",{onClick:()=>Y(o),className:`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${c?"border-rule-strong bg-surface shadow-lift":"border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface"}`,style:{minWidth:"220px",maxWidth:"280px"},children:[e.jsx("span",{className:`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${c?"text-accent-text":"text-ink-3/60 group-hover:text-ink-3"}`,children:String(o+1).padStart(2,"0")}),e.jsx("div",{className:"h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2",children:e.jsx("img",{src:a.details.logo,alt:"",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"min-w-0 text-left",children:[e.jsx("p",{className:"truncate text-sm font-bold tracking-tight text-ink",children:a.title}),e.jsxs("p",{className:"eyebrow",children:[a.type," · ",a.year]})]})]},`${a.type}-${a.slug}`)})}),e.jsx("button",{onClick:()=>Y(Math.min(h,m+1)),disabled:m>=h,"aria-label":"Next project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(lt,{})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(m+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(l.length).padStart(2,"0")]}),e.jsx(ne,{to:`/${I==null?void 0:I.type}/${I==null?void 0:I.slug}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink",children:"View details →"})]})]}),e.jsx("section",{className:"shell border-t border-rule py-10 md:py-0",children:e.jsxs("div",{className:"max-w-12xl",children:[e.jsx("p",{className:"mt-4 max-w-3xl text-lg text-ink",children:"你好！我是林丽丽，欢迎来到我的作品集。"}),e.jsx("p",{className:"mt-4 max-w-measure text-base leading-relaxed text-ink-2",children:ot[t]??ot.all})]})}),e.jsx(Xn,{}),e.jsxs("section",{className:"shell pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Motion"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(fe+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(Xe.length).padStart(2,"0")]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"Video Gallery"}),e.jsxs("div",{className:"flex shrink-0 gap-2",children:[e.jsx("button",{onClick:()=>Pe(-1),disabled:Le.start,"aria-label":"Scroll gallery left",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ct,{})}),e.jsx("button",{onClick:()=>Pe(1),disabled:Le.end,"aria-label":"Scroll gallery right",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(lt,{})})]})]}),e.jsx("div",{ref:oe,onScroll:le,className:"mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4",children:Xe.map((a,o)=>{const c=o===fe;return e.jsxs("figure",{className:`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${c?"ring-1 ring-accent ring-offset-2 ring-offset-canvas":""}`,onMouseEnter:d=>{const u=d.currentTarget.querySelector("video");u&&!c&&u.play().catch(()=>{})},onMouseLeave:d=>{const u=d.currentTarget.querySelector("video");u&&!c&&u.pause()},children:[e.jsxs("div",{className:"relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2",children:[e.jsx("video",{ref:d=>{he.current[o]=d},className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",src:a.src,muted:!0,playsInline:!0,preload:"metadata",onCanPlay:d=>We(d.currentTarget,o),onEnded:()=>{c&&ce(o+1)}}),c&&e.jsxs("span",{className:"absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent animate-pulse"}),"Now"]}),Ee[o]&&e.jsx("span",{className:"absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white",title:"Has audio",children:e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),e.jsxs("figcaption",{className:"mt-2.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:String(o+1).padStart(2,"0")}),e.jsx("span",{className:"truncate text-sm text-ink-2",children:a.title})]})]},a.src)})})]})]})},Jn=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),ea=()=>{const[t,s]=r.useState(Jn),g=()=>{const n=!t;s(n),document.documentElement.classList.toggle("dark",n);try{localStorage.setItem("theme",n?"dark":"light")}catch{}};return e.jsx("button",{onClick:g,className:"icon-btn","aria-label":t?"Switch to light theme":"Switch to dark theme",title:t?"切换到日间模式":"切换到夜间模式",children:t?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},dt="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",ta="/data/223_cities_cluster_with_index_deciles.csv",ye=t=>{const s=t.replace("#",""),g=parseInt(s.slice(0,2),16),n=parseInt(s.slice(2,4),16),l=parseInt(s.slice(4,6),16);return[g,n,l]},je=(t,s,g)=>{const n=Math.round(t[0]+(s[0]-t[0])*g),l=Math.round(t[1]+(s[1]-t[1])*g),h=Math.round(t[2]+(s[2]-t[2])*g);return`rgb(${n}, ${l}, ${h})`},we=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],na=()=>{var Ae;const t=r.useRef(null),s=r.useRef(null),[g,n]=r.useState(!0),[l,h]=r.useState(0),[m,S]=r.useState(null),[v,_]=r.useState(null),[A,k]=r.useState([]),[M,N]=r.useState(null),[p,P]=r.useState("K_12"),[z,F]=r.useState(!0),[R,O]=r.useState(null),[B,I]=r.useState(null),[K,Ne]=r.useState(!1),[X,Fe]=r.useState(null),[Me,ge]=r.useState(!1),[Z,ue]=r.useState(null),[ae,se]=r.useState(!1),[Se,ie]=r.useState(0),[ee,te]=r.useState(""),[W,Oe]=r.useState(!1),[re,De]=r.useState(!0),[Y,oe]=r.useState(!0),[he,fe]=r.useState({}),[Ze,gt]=r.useState(!1),[V,Le]=r.useState("global"),me=r.useRef(null),Ee=r.useRef(null),Ue=r.useRef(!1),ce=r.useRef(null),le=(i,x)=>{let w=i.features;M!==null&&(w=w.filter(u=>{var f;const j=(f=u.properties)==null?void 0:f.Place;return j!==void 0&&Number(j)===Number(M)}));const y=w.map(u=>{var j;return(j=u.properties)==null?void 0:j[x]}).filter(u=>{if(u==null)return!1;if(typeof u=="string"){const f=u.trim();if(f===""||/^(na|nan|null)$/i.test(f))return!1}const j=Number(u);return!(Number.isNaN(j)||j===-9999)}).map(u=>Number(u)),a=w.reduce((u,j)=>{var C;const f=(C=j.properties)==null?void 0:C[x];let b=!1;if(f==null)b=!0;else if(typeof f=="string"){const D=f.trim();if(D===""||/^(na|nan|null)$/i.test(D))b=!0;else{const T=Number(f);(Number.isNaN(T)||T===-9999)&&(b=!0)}}else{const D=Number(f);(Number.isNaN(D)||D===-9999)&&(b=!0)}return u+(b?1:0)},0);let o=NaN,c=NaN,d=0;if(y.length>0){o=y[0],c=y[0],d=y[0];for(let u=1;u<y.length;u++){const j=y[u];j<o&&(o=j),j>c&&(c=j),d+=j}}return{count:w.length,min:o,max:c,mean:y.length>0?d/y.length:NaN,nanCount:a}};r.useEffect(()=>{(async()=>{try{const y=(await(await fetch(ta)).text()).trim().split(`
`);if(y.length<2)return;const a=y[0].split(",").map(f=>f.trim()),o={},d=y[y.length-1].split(","),j=y[1].split(",");a.forEach((f,b)=>{if(f===""||f.includes("Place")||f.includes("Sum")||f.includes("FID")||f.includes("index"))return;const C=parseFloat(j[b]),D=parseFloat(d[b]);!isNaN(C)&&!isNaN(D)&&D>C&&(o[f]={min:C,max:D})}),console.log("Loaded attribute ranges:",o),fe(o)}catch(x){console.error("Failed to load deciles:",x)}})()},[]),r.useEffect(()=>{!W&&!v&&(async()=>{var x;n(!0),h(0),S(null);try{h(10),console.log("开始下载..."),me.current=new AbortController;const w=await fetch(dt,{signal:me.current.signal});if(console.log("响应状态:",w.status),!w.ok)throw new Error(`HTTP error! status: ${w.status}`);h(30);const y=w.headers.get("content-length"),a=y?parseInt(y):null;console.log("预期文件大小:",a);const o=(x=w.body)==null?void 0:x.getReader();if(!o)throw new Error("无法读取响应流");let c=0;const d=[];for(;;){const{done:T,value:E}=await o.read();if(T)break;d.push(E),c+=E.length,h(a?30+Math.round(c/a*60):50)}console.log("下载完成, 收到:",c),a&&c!==a&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const u=new Uint8Array(c);let j=0;for(const T of d)u.set(T,j),j+=T.length;if(h(90),W){console.log("本地数据已加载，跳过网络数据"),n(!1);return}console.log("开始解析 Shapefile...");const f=await Ye(u);console.log("Shapefile 解析完成:",f);let b=[];if(f.type==="FeatureCollection"?b=f.features:Array.isArray(f)?b=f:f.type==="Feature"&&(b=[f]),console.log("解析完成，特征数量:",b==null?void 0:b.length),W)return;const C={type:"FeatureCollection",features:b||[]};_(C),h(100);const D=new Map;C.features.forEach(T=>{var Q;const E=Number(((Q=T.properties)==null?void 0:Q.Place)??0);D.has(E)||D.set(E,{id:E,name:`Place ${E}`,featureCount:0});const H=D.get(E);H&&H.featureCount++}),k(Array.from(D.values()).sort((T,E)=>T.id-E.id)),n(!1)}catch(w){if(w.name==="AbortError"){console.log("网络请求已取消");return}S(w instanceof Error?w.message:"Failed to load"),n(!1)}})()},[]),r.useEffect(()=>{v&&O(le(v,p))},[v,M,p,V,he]),r.useEffect(()=>{if(!v)return;const i=s.current;if(!i)return;const x=()=>{var y,a,o,c;if(v.features.forEach((d,u)=>{d.id===void 0&&(d.id=u)}),i.getSource("cluster"))i.getSource("cluster").setData(v);else{console.log("初始化 cluster 数据源..."),i.addSource("cluster",{type:"geojson",data:v,generateId:!0}),i.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),i.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),i.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),i.on("click","cluster-fill",u=>{var j;if(u.features&&u.features.length>0){const f=u.features[0],b=f.id;ce.current!==null&&ce.current!==void 0&&i.setFeatureState({source:"cluster",id:ce.current},{selected:!1}),b!==void 0?(i.setFeatureState({source:"cluster",id:b},{selected:!0}),ce.current=b):ce.current=null,Fe(f),ge(!0),((j=f.properties)==null?void 0:j.Place)!==void 0&&N(Number(f.properties.Place))}}),i.on("mouseenter","cluster-fill",()=>{i.getCanvas().style.cursor="pointer"}),i.on("mouseleave","cluster-fill",()=>{i.getCanvas().style.cursor=""});const d=v.features;if(d.length>0)try{const u=new Re.LngLatBounds,j=Math.max(1,Math.floor(d.length/2e3));for(let f=0;f<d.length;f+=j){const b=d[f];if(!((y=b.geometry)!=null&&y.coordinates))continue;const C=b.geometry.type,D=b.geometry.coordinates;C==="Point"?u.extend(D):C==="LineString"||C==="MultiPoint"?D.forEach(T=>u.extend(T)):C==="Polygon"||C==="MultiLineString"?(a=D[0])==null||a.forEach(T=>u.extend(T)):C==="MultiPolygon"&&((c=(o=D[0])==null?void 0:o[0])==null||c.forEach(T=>u.extend(T)))}u.isEmpty()||i.fitBounds(u,{padding:50,duration:1e3})}catch(u){console.error("Fit bounds error:",u)}}},w=()=>{var E;if(!i.getLayer("cluster-fill"))return;const y=null;i.setFilter("cluster-fill",y),i.setFilter("cluster-line",y),i.setFilter("cluster-highlight",y);const a=(()=>{var Ve;let H=1/0,Q=-1/0;for(const He of v.features){const J=Number((Ve=He.properties)==null?void 0:Ve[p]);Number.isNaN(J)||J===-9999||(J<H&&(H=J),J>Q&&(Q=J))}return{min:H===1/0?0:H,max:Q===-1/0?0:Q}})(),o=M!==null&&R?{min:R.min,max:R.max}:a,c=V==="city"?o:a,d=c.min,u=c.max;let j;if(p.includes("K_")){const H=Math.round(((E=he[p])==null?void 0:E.max)??u),Q=Array.from({length:26},(xe,qe)=>{const $=qe/25;let de,pe,be;if($<.167){const q=$/.167;de=0,pe=0,be=Math.round(139+116*q)}else if($<.333){const q=($-.167)/.167;de=0,pe=Math.round(255*q),be=255}else if($<.5){const q=($-.333)/.167;de=0,pe=Math.round(255-128*q),be=Math.round(255-255*q)}else if($<.667){const q=($-.5)/.167;de=Math.round(255*q),pe=255,be=0}else if($<.833){const q=($-.667)/.167;de=255,pe=Math.round(255-128*q),be=0}else{const q=($-.833)/.167;de=255,pe=Math.round(127-127*q),be=0}return`#${de.toString(16).padStart(2,"0")}${pe.toString(16).padStart(2,"0")}${be.toString(16).padStart(2,"0")}`}),He=Array.from({length:H+1},(xe,qe)=>Q[Math.round(qe*25/H)]).slice(0,H+1),J=["interpolate",["linear"],["get",p]];for(let xe=0;xe<=H;xe++)J.push(xe,He[xe]);j=J}else p==="CoverRatio"||p==="ISF"||p==="GreenRatio"?j=["interpolate",["linear"],["get",p],d,"#3182bd",u,"#e6550d"]:p.includes("elev")||p.includes("slope")?j=["interpolate",["linear"],["get",p],d,"#31a354",u,"#756bb1"]:j=["interpolate",["linear"],["get",p],d,"#31a354",u,"#756bb1"];i.setPaintProperty("cluster-fill","fill-color",j);const f=M!==null,b=Number(M),T=["case",["any",["==",["get",p],-9999],["==",["get",p],null]],0,f?["case",["==",["to-number",["get","Place"]],b],.8,.15]:.7];i.setPaintProperty("cluster-fill","fill-opacity",T)};i.isStyleLoaded()?(x(),w()):i.once("load",()=>{x(),w()})},[v,M,p]),r.useEffect(()=>{var w,y,a,o;if(!v||M===null)return;const i=s.current;if(!i)return;const x=v.features.filter(c=>{var u;const d=(u=c.properties)==null?void 0:u.Place;return d!==void 0&&Number(d)===Number(M)});if(x.length!==0)try{const c=new Re.LngLatBounds;let d=0;const u=Math.max(1,Math.floor(x.length/2e3));for(let j=0;j<x.length;j+=u){const f=x[j];if(!((w=f.geometry)!=null&&w.coordinates))continue;const b=f.geometry.type,C=f.geometry.coordinates;b==="Point"?(c.extend(C),d++):b==="LineString"||b==="MultiPoint"?(C.forEach(D=>c.extend(D)),d++):b==="Polygon"||b==="MultiLineString"?((y=C[0])==null||y.forEach(D=>c.extend(D)),d++):b==="MultiPolygon"&&((o=(a=C[0])==null?void 0:a[0])==null||o.forEach(D=>c.extend(D)),d++)}!c.isEmpty()&&d>0&&i.fitBounds(c,{padding:50,duration:1e3})}catch(c){console.error("Fly to error:",c)}},[M]),r.useEffect(()=>((async()=>{(!t.current||s.current)&&console.log("开始初始化地图...");try{const x=new Re.Map({container:t.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});x.addControl(new Re.NavigationControl,"top-right"),x.on("load",()=>{console.log("地图样式加载完成")}),x.on("error",w=>{var o;const y=String(((o=w==null?void 0:w.error)==null?void 0:o.message)||(w==null?void 0:w.message)||"");y.includes("ERR_ABORTED")||y.includes("AbortError")||y.includes("Canceled")||y.includes("cancelled")||console.error("地图错误:",w)}),s.current=x,console.log("地图初始化完成")}catch(x){console.error("地图初始化错误:",x)}})(),()=>{s.current&&(s.current.remove(),s.current=null,Ue.current=!1)}),[]),r.useEffect(()=>{const i=s.current;if(!i)return;const x=()=>{i.getLayer("simple-tiles")&&i.setLayoutProperty("simple-tiles","visibility",re?"visible":"none")};i.isStyleLoaded()?x():i.once("style.load",x)},[re]);const Pe=async i=>{var w;const x=(w=i.target.files)==null?void 0:w[0];if(x){me.current&&me.current.abort(),se(!0),ie(0),te("正在读取文件..."),S(null),Ne(!0),I(URL.createObjectURL(x));try{console.log("开始读取文件:",x.name,"大小:",x.size);let y=[];const a=x.name.endsWith(".zip"),o=x.name.endsWith(".shp");if(!a&&!o){S("请上传 .zip 文件 (包含 Shapefile)"),se(!1);return}te("正在读取文件...");const c=await x.arrayBuffer();ie(30),te("正在解析 Shapefile...");const d=await Ye(c);console.log("Shapefile 解析完成:",d),d.type==="FeatureCollection"?y=d.features:Array.isArray(d)?y=d:d.type==="Feature"&&(y=[d]),console.log("解析到的 features 数量:",y.length),ie(95),te(`已解析 ${y.length} 个 Features...`);const u={type:"FeatureCollection",features:y};ie(98),te("正在处理 Place 数据...");const j=new Map;u.features.forEach(f=>{var D;const b=Number(((D=f.properties)==null?void 0:D.Place)??0);j.has(b)||j.set(b,{id:b,name:`Place ${b}`,featureCount:0});const C=j.get(b);C&&C.featureCount++}),ie(100),te("加载完成!"),setTimeout(()=>{Oe(!0),_(u),k(Array.from(j.values()).sort((f,b)=>f.id-b.id)),se(!1),Ne(!1),n(!1)},500)}catch(y){const a=y instanceof Error?y.message:"未知错误";S(`加载失败: ${a}`),se(!1),n(!1)}}},We=we.reduce((i,x)=>(i[x.category]||(i[x.category]=[]),i[x.category].push(x),i),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[ae&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Qe,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:ee}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Se}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Se,"%"]})]})}),g&&!ae?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Mt,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${l}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[l,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:dt,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(St,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var i;return(i=Ee.current)==null?void 0:i.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Qe,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Ee,type:"file",accept:".shp,.zip",onChange:Pe,className:"hidden"})]})}):null,m&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:m}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(At,{size:14}),"刷新重试"]})})]}),z&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(Ct,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>F(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(It,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>De(!re),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${re?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${re?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:M??"",onChange:i=>N(i.target.value?Number(i.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Ae=v==null?void 0:v.features)==null?void 0:Ae.length)??0,")"]}),A.map(i=>e.jsxs("option",{value:i.id,children:[i.name," (",i.featureCount,")"]},i.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:p,onChange:i=>P(i.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(We).map(([i,x])=>[e.jsx("optgroup",{label:i.charAt(0).toUpperCase()+i.slice(1),children:x.map(w=>e.jsx("option",{value:w.key,children:w.label},w.key))},i)])})]}),R&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Dt,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:R.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:R.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:R.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:R.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:R.nanCount})]})]})]})]})]}),!z&&e.jsx("button",{onClick:()=>F(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Lt,{size:18})}),Me&&X&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[X.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",X.properties.Place]}),X.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",X.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",X.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>ge(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Je,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:we.map(i=>{var w;const x=(w=X.properties)==null?void 0:w[i.key];return x==null?null:e.jsxs("button",{onClick:()=>P(i.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${p===i.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:i.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof x=="number"?x.toFixed(2):x})]},i.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>N(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:t,className:"w-full h-full"}),Y&&v&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(et,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>oe(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Je,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Le(V==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${V==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:V==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:p.includes("K_")?(()=>{var y,a;const i=Math.round(((y=he[p])==null?void 0:y.max)??30),x=Array.from({length:26},(o,c)=>{const d=c/25;let u,j,f;if(d<.167){const b=d/.167;u=0,j=0,f=Math.round(139+116*b)}else if(d<.333){const b=(d-.167)/.167;u=0,j=Math.round(255*b),f=255}else if(d<.5){const b=(d-.333)/.167;u=0,j=Math.round(255-128*b),f=Math.round(255-255*b)}else if(d<.667){const b=(d-.5)/.167;u=Math.round(255*b),j=255,f=0}else if(d<.833){const b=(d-.667)/.167;u=255,j=Math.round(255-128*b),f=0}else{const b=(d-.833)/.167;u=255,j=Math.round(127-127*b),f=0}return`#${u.toString(16).padStart(2,"0")}${j.toString(16).padStart(2,"0")}${f.toString(16).padStart(2,"0")}`}),w=Array.from({length:i+1},(o,c)=>x[Math.round(c*25/i)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((a=we.find(o=>o.key===p))==null?void 0:a.label)||p}),e.jsx("div",{className:"flex flex-wrap gap-px",children:w.map((o,c)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:o}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:c})]},c))})]})})():p==="CoverRatio"||p==="ISF"||p==="GreenRatio"?(()=>{var f;const i=(()=>{var D;let b=1/0,C=-1/0;for(const T of v.features){const E=Number((D=T.properties)==null?void 0:D[p]);Number.isNaN(E)||E===-9999||(E<b&&(b=E),E>C&&(C=E))}return{min:b===1/0?0:b,max:C===-1/0?0:C}})(),x=M!==null&&R?{min:R.min,max:R.max}:i,w=((f=we.find(b=>b.key===p))==null?void 0:f.label)||p,y=i.max>i.min?Math.max(0,Math.min(1,(x.min-i.min)/(i.max-i.min))):0,a=i.max>i.min?Math.max(0,Math.min(1,(x.max-i.min)/(i.max-i.min))):0,o=Math.max(0,a-y),c=ye("#3182bd"),d=ye("#e6550d"),u=je(c,d,y),j=je(c,d,a);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[w,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:M!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${u}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[w,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(2)}),e.jsx("span",{children:i.max.toFixed(2)})]})]})]})})():p.includes("elev")||p.includes("slope")?(()=>{var f;const i=(()=>{var D;let b=1/0,C=-1/0;for(const T of v.features){const E=Number((D=T.properties)==null?void 0:D[p]);Number.isNaN(E)||E===-9999||(E<b&&(b=E),E>C&&(C=E))}return{min:b===1/0?0:b,max:C===-1/0?0:C}})(),x=M!==null&&R?{min:R.min,max:R.max}:i,w=((f=we.find(b=>b.key===p))==null?void 0:f.label)||p,y=i.max>i.min?Math.max(0,Math.min(1,(x.min-i.min)/(i.max-i.min))):0,a=i.max>i.min?Math.max(0,Math.min(1,(x.max-i.min)/(i.max-i.min))):0,o=Math.max(0,a-y),c=ye("#31a354"),d=ye("#756bb1"),u=je(c,d,y),j=je(c,d,a);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[w,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:M!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${u}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(1)}),e.jsxs("span",{children:[x.max.toFixed(0),"+"]})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[w,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(1)}),e.jsxs("span",{children:[i.max.toFixed(0),"+"]})]})]})]})})():(()=>{var f;const i=(()=>{var D;let b=1/0,C=-1/0;for(const T of v.features){const E=Number((D=T.properties)==null?void 0:D[p]);Number.isNaN(E)||E===-9999||(E<b&&(b=E),E>C&&(C=E))}return{min:b===1/0?0:b,max:C===-1/0?0:C}})(),x=M!==null&&R?{min:R.min,max:R.max}:i,w=((f=we.find(b=>b.key===p))==null?void 0:f.label)||p,y=i.max>i.min?Math.max(0,Math.min(1,(x.min-i.min)/(i.max-i.min))):0,a=i.max>i.min?Math.max(0,Math.min(1,(x.max-i.min)/(i.max-i.min))):0,o=Math.max(0,a-y),c=ye("#31a354"),d=ye("#756bb1"),u=je(c,d,y),j=je(c,d,a);return e.jsxs("div",{children:[V==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[w,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:M!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${u}, ${j})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),V==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[w,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:i.min.toFixed(2)}),e.jsx("span",{children:i.max.toFixed(2)})]})]})]})})()})]}),!Y&&e.jsx("button",{onClick:()=>oe(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(et,{size:18})})]})},aa=[{key:"",label:"Home"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}],sa={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},ke=({value:t,transform:s})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:s,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((g,n)=>e.jsx("span",{className:"flex items-center justify-center",children:sa[t].includes(n)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:t===1||t===4?"#cc2a18":"#171717"}})},n))}),ia=()=>{const[t,s]=r.useState(!1),[g,n]=r.useState(!1),[l,h]=r.useState({x:0,y:0}),[m,S]=r.useState("/data/fig/lili/lili_01.png"),[v,_]=r.useState("Exploring the intersection of technology and creativity."),A=ft(),k=mt(),N=A.pathname.split("/").filter(Boolean)[0]||"",p={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},P=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],z=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between product and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],F=O=>O[Math.floor(Math.random()*O.length)];r.useEffect(()=>{S(p[N]??F(P)),_(F(z))},[N]);const R=()=>{h(B=>({x:B.x+720+Math.round(Math.random()*360),y:B.y+720+Math.round(Math.random()*360)}));const O=["design","game","planning","platform","tutorial","about"];setTimeout(()=>k(`/${F(O)}`),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${g?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>s(!t),className:"icon-btn","aria-expanded":t,"aria-label":t?"Hide profile panel":"Show profile panel",title:t?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${t?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(ne,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"}),e.jsx("span",{className:"hidden font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-accent-text sm:block",children:"Portfolio"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 flex-1 justify-end overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:aa.map(O=>{const B=N===O.key;return e.jsx("li",{className:"flex",children:e.jsxs(ne,{to:`/${O.key}`,onClick:()=>{window.innerWidth<768&&s(!1)},"aria-current":B?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${B?"text-ink":"text-ink-3 hover:text-ink"}`,children:[O.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${B?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},O.key||"home")})})}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(ea,{}),e.jsxs("button",{onClick:R,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"Explore a random project",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${l.x}deg) rotateY(${l.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(ke,{value:1,transform:"translateZ(10px)"}),e.jsx(ke,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(ke,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(ke,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(ke,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(ke,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>n(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),g&&e.jsx("button",{onClick:()=>n(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[t&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[m&&e.jsx("img",{src:m,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Designer · Developer · Product Maker"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"Creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:v}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Ke,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Ke,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Ke,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsx("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:e.jsxs(xt,{children:[e.jsx(U,{path:"/",element:e.jsx(Qn,{})}),e.jsx(U,{path:"/planning",element:e.jsx(Ce,{data:Te,type:"planning"})}),e.jsx(U,{path:"/planning/:id",element:e.jsx(Ie,{data:Te,type:"planning"})}),e.jsx(U,{path:"/design",element:e.jsx(Ce,{data:_e,type:"design"})}),e.jsx(U,{path:"/design/:id",element:e.jsx(Ie,{data:_e,type:"design"})}),e.jsx(U,{path:"/game",element:e.jsx(Ce,{data:Ge,type:"game"})}),e.jsx(U,{path:"/game/:id",element:e.jsx(Ie,{data:Ge,type:"game"})}),e.jsx(U,{path:"/platform",element:e.jsx(Ce,{data:ze,type:"platform"})}),e.jsx(U,{path:"/platform/:id",element:e.jsx(Ie,{data:ze,type:"platform"})}),e.jsx(U,{path:"/tutorial",element:e.jsx(Ce,{data:Be,type:"tutorial"})}),e.jsx(U,{path:"/tutorial/:id",element:e.jsx(Ie,{data:Be,type:"tutorial"})}),e.jsx(U,{path:"/clusteringeomap",element:e.jsx(na,{})}),e.jsx(U,{path:"/about",element:e.jsx(Hn,{})}),e.jsx(U,{path:"/contact",element:e.jsx(qn,{})})]})})]})]})};function ra(){const[t,s]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(vt,{children:e.jsx(ia,{})}),!t&&e.jsx(Et,{onFinish:()=>s(!0)})]})}yt.createRoot(document.getElementById("root")).render(e.jsx(ra,{}));
