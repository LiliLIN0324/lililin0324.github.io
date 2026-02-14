const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-DlNX6q15.js","./vendor-DurXHiR-.js","./maplibre-BkiGPtbL.js","./maplibre-PhPnDjd-.css","./vendor-Dgihpmma.css","./icons-CkBdzhwa.js","./UR-platform-C07txeaK.js","./heatmapper-CE_Wztqz.js","./openstreetmap-BhCBqtjY.js","./photogeo-WcPJ-KN6.js","./photogeomap-3rLiwun_.js","./clusteringevents-CmT9KQbI.js","./litflow-DWUC36gV.js","./boxupcyberspace-D-VavS1X.js","./epsteinscret-0GcwhxZB.js","./wechatgame-CE-XERNP.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,A as Qe,m as ye,L as oe,u as Je,g as De,a as et,R as tt,b as R,H as nt,c as at}from"./vendor-DurXHiR-.js";import{m as ue}from"./maplibre-BkiGPtbL.js";import{U as Re,L as st,D as it,R as rt,M as ot,C as lt,a as ct,b as dt,X as ze,c as Fe}from"./icons-CkBdzhwa.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function S(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=S(n);fetch(n.href,a)}})();function mt({onFinish:b}){const[i,S]=l.useState(!0),o=l.useRef(null),n=l.useRef({x:-1e3,y:-1e3});return l.useEffect(()=>{const a=o.current;if(!a)return;const u=a.getContext("2d");if(!u)return;let v,p=[];const I=()=>{a.width=window.innerWidth,a.height=window.innerHeight},j=s=>{n.current={x:s.clientX,y:s.clientY}},T=s=>{s.touches.length>0&&(n.current={x:s.touches[0].clientX,y:s.touches[0].clientY})};window.addEventListener("resize",I),window.addEventListener("mousemove",j),window.addEventListener("touchmove",T),I();class L{constructor(){this.x=Math.random()*a.width,this.y=Math.random()*a.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>a.width)&&(this.vx*=-1),(this.y<0||this.y>a.height)&&(this.vy*=-1);let A=n.current.x-this.x,D=n.current.y-this.y,H=Math.sqrt(A*A+D*D),E=A/H,pe=D/H;const le=150;let ce=(le-H)/le;H<le&&(this.x-=E*ce*this.density*.5,this.y-=pe*ce*this.density*.5)}draw(){u&&(u.fillStyle="rgba(255, 255, 255, 0.8)",u.beginPath(),u.arc(this.x,this.y,this.size,0,Math.PI*2),u.fill())}}for(let s=0;s<120;s++)p.push(new L);const O=()=>{u.clearRect(0,0,a.width,a.height);for(let s=0;s<p.length;s++){p[s].update(),p[s].draw();for(let A=s+1;A<p.length;A++){const D=p[s].x-p[A].x,H=p[s].y-p[A].y,E=Math.sqrt(D*D+H*H);E<100&&(u.beginPath(),u.strokeStyle=`rgba(255, 255, 255, ${.2*(1-E/100)})`,u.lineWidth=.6,u.moveTo(p[s].x,p[s].y),u.lineTo(p[A].x,p[A].y),u.stroke())}}v=requestAnimationFrame(O)};return O(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",I),window.removeEventListener("mousemove",j),window.removeEventListener("touchmove",T)}},[]),e.jsx(Qe,{onExitComplete:b,children:i&&e.jsxs(ye.div,{onClick:()=>S(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(ye.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(ye.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const ut=`---
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
`,pt=`---
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
`,ht=`---
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
`,gt=`---
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

# 项目背景

这里是项目的详细介绍...

# 技术实现

## 技术栈

# 效果展示

![效果展示](/data/fig/AAAI2026.jpg)
`,ft=`---
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
`,xt=`---
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
`,bt=`---
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
`,yt=`---
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
`,vt=`---
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
`,jt=`---
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
`,wt=`---
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
`,Nt=`---
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
`,kt=`---
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
`,St=`---
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
`,Lt=`---
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
`,Ct=`---
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
`,It=`---
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
`,Pt=`---
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
`,_t=`---
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
`,Tt=`---
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
`,At=`---\r
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
`,Dt=`---\r
id: "06"\r
slug: "how-to-construct-workflow-in-dify"\r
title: "How to construct workflow in Dify"\r
category: "Tutorial"\r
year: "2026"\r
description: "本教程将介绍如何在 Dify 中构建工作流。"\r
tech: ["Dify", "AI", "Workflow"]\r
abstract: |\r
  本教程将介绍如何在 Dify 中构建工作流，包括创建知识库、自部署 Dify 等内容。\r
---\r
\r
## 我的第一个project\r
### 创建知识库\r
https://dify.ai/\r
但是dify云部署很贵->转向dify自部署\r
https://github.com/langgenius/dify\r
启动 Dify 服务器最简单的方法是通过Docker Compose。在使用以下命令运行 Dify 之前，请确保您的计算机上已安装Docker和Docker Compose ：\r
<code>\r
cd dify\r
cd docker\r
cp .env.example .env\r
docker compose up -d \r
</code>\r
\r
**最后一步需要完全部署好docker**\r
`;function Rt(b){const i=/^---\n([\s\S]*?)\n---/,S=b.match(i);let o={},n=b;if(S){const a=S[1];n=b.slice(S[0].length).trim();const u=a.split(`
`);let v=null,p=[];u.forEach(I=>{if(I.trim()===""){v&&p.length>0&&(o[v]=p.join(`
`),v=null,p=[]);return}const T=I.indexOf(":");if(T!==-1&&!I.startsWith(" ")){v&&(o[v]=p.join(`
`)),v=I.slice(0,T).trim();let L=I.slice(T+1).trim();L==="|"?p=[]:(o[v]=L,v=null,p=[])}else v&&I.startsWith("  ")&&p.push(I.slice(2))}),v&&(o[v]=p.join(`
`)),Object.keys(o).forEach(I=>{let j=o[I];if(typeof j=="string")if(j=j.trim(),j.startsWith('"')&&j.endsWith('"')&&(j=j.slice(1,-1)),j.startsWith("[")&&j.endsWith("]"))try{o[I]=JSON.parse(j)}catch{o[I]=[j.slice(1,-1).trim()]}else j==="true"?o[I]=!0:j==="false"?o[I]=!1:!isNaN(Number(j))&&j.trim()!==""?o[I]=Number(j):o[I]=j})}return{id:o.id||"",slug:o.slug||"",title:o.title||"",category:o.category||"",year:o.year||"",description:o.description||"",tech:o.tech||[],abstract:o.abstract||"",challenge:o.challenge||"",solution:o.solution||"",hasDemo:o.hasDemo||!1,icon:o.icon||"",code:o.code||"",logo:o.icon||"",image:o.image||[],content:n}}function _(b){const i=Rt(b);return{id:i.id,slug:i.slug,title:i.title,category:i.category,year:i.year,description:i.description,tech:i.tech,hasDemo:i.hasDemo,details:{abstract:i.abstract,description:i.description,challenge:i.challenge,solution:i.solution,logo:i.logo,icon:i.icon,code:i.code,image:i.image,content:i.content}}}const we=[_(ut),_(pt),_(ht),_(gt),_(ft),_(xt)],Ne=[_(bt),_(yt),_(vt),_(jt),_(wt),_(Nt),_(Mt)],Me=[_(kt),_(St)],ke=[_(Lt),_(Ct),_(It)],Se=[_(Pt),_(_t),_(Et),_(Tt),_(At),_(Dt)],ie=({data:b,type:i})=>{const[S,o]=l.useState("grid");return e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsxs("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:["Selected ",i==="research"?"Researches":i==="design"?"Designs":i==="game"?"Games":i==="planning"?"Planning":i==="tutorials"?"Tutorials":"Platform"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>o("grid"),className:`px-3 py-1 text-xs font-mono ${S==="grid"?"bg-white shadow-sm":"text-neutral-500"}`,children:"GRID"}),e.jsx("button",{onClick:()=>o("list"),className:`px-3 py-1 text-xs font-mono ${S==="list"?"bg-white shadow-sm":"text-neutral-500"}`,children:"LIST"})]}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:["Idx: ",b.length]})]})]}),S==="list"?e.jsx("div",{className:"space-y-4",children:b.map(n=>e.jsx("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm",children:e.jsxs("div",{className:"flex flex-row gap-4 md:gap-6 items-center flex-1",children:[e.jsxs(oe,{to:`/${i}/${n.slug}`,className:"flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 overflow-hidden bg-neutral-50",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:n.year})]}),e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-bold text-neutral-900 mb-1 group-hover:text-blue-600 truncate",children:n.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-1",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${n.slug}#demo`},className:"flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]})},n.slug))}):e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:b.map(n=>e.jsxs("div",{className:"group relative border border-neutral-200 p-4 md:p-6 hover:border-neutral-900 transition-all duration-300 bg-white hover:bg-neutral-50 hover:shadow-sm flex flex-col",children:[e.jsxs(oe,{to:`/${i}/${n.slug}`,className:"flex flex-col h-full",children:[e.jsx("div",{className:"flex-shrink-0 w-full aspect-square border border-neutral-100 overflow-hidden bg-neutral-50 mb-4",children:n.details.logo?e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-neutral-300",children:e.jsx("svg",{className:"w-12 h-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"flex-grow min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("span",{className:"text-[10px] font-mono text-neutral-400",children:["NO. ",n.id]}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:n.year})]}),e.jsx("h3",{className:"text-base md:text-lg font-bold text-neutral-900 mb-1 group-hover:text-blue-600 line-clamp-2",children:n.title}),e.jsx("p",{className:"text-neutral-500 text-sm line-clamp-2",children:n.description})]})]}),n.hasDemo&&e.jsx("button",{onClick:()=>{window.location.href=`#/${i}/${n.slug}#demo`},className:"flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm",children:"DEMO"})]},n.slug))})]})},Q=b=>{const i=document.getElementById(b);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},zt="modulepreload",Ft=function(b,i){return new URL(b,i).href},Oe={},$=function(i,S,o){let n=Promise.resolve();if(S&&S.length>0){let u=function(j){return Promise.all(j.map(T=>Promise.resolve(T).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const v=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),I=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));n=u(S.map(j=>{if(j=Ft(j,o),j in Oe)return;Oe[j]=!0;const T=j.endsWith(".css"),L=T?'[rel="stylesheet"]':"";if(!!o)for(let A=v.length-1;A>=0;A--){const D=v[A];if(D.href===j&&(!T||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${L}`))return;const s=document.createElement("link");if(s.rel=T?"stylesheet":zt,T||(s.as="script"),s.crossOrigin="",s.href=j,I&&s.setAttribute("nonce",I),document.head.appendChild(s),T)return new Promise((A,D)=>{s.addEventListener("load",A),s.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${j}`)))})}))}function a(u){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=u,window.dispatchEvent(v),!v.defaultPrevented)throw u}return n.then(u=>{for(const v of u||[])v.status==="rejected"&&a(v.reason);return i().catch(a)})},Ot=l.lazy(()=>$(()=>import("./ClusterVisualizer-DlNX6q15.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Ut=l.lazy(()=>$(()=>import("./UR-platform-C07txeaK.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)),Gt=l.lazy(()=>$(()=>import("./heatmapper-CE_Wztqz.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)),$t=l.lazy(()=>$(()=>import("./openstreetmap-BhCBqtjY.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url)),Ht=l.lazy(()=>$(()=>import("./photogeo-WcPJ-KN6.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url)),Bt=l.lazy(()=>$(()=>import("./photogeomap-3rLiwun_.js"),__vite__mapDeps([10,1,2,3,4]),import.meta.url)),Wt=l.lazy(()=>$(()=>import("./clusteringevents-CmT9KQbI.js"),__vite__mapDeps([11,1,2,3,4]),import.meta.url));l.lazy(()=>$(()=>import("./litflow-DWUC36gV.js"),__vite__mapDeps([12,1,2,3,4]),import.meta.url));const qt=l.lazy(()=>$(()=>import("./boxupcyberspace-D-VavS1X.js"),__vite__mapDeps([13,1,2,3,4]),import.meta.url)),Vt=l.lazy(()=>$(()=>import("./epsteinscret-0GcwhxZB.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url)),Kt=l.lazy(()=>$(()=>import("./wechatgame-CE-XERNP.js"),__vite__mapDeps([15,1,2,3,4]),import.meta.url)),Xt=b=>({"cluster-visualizer-3d":Ot,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Ut,heatmapper:Gt,"how-to-add-openstreetmap-in-website":$t,"how-to-get-sequential-events-from-photo-by-phone":Ht,"how-to-visualize-photo-geolocation-data-on-map":Bt,"how-to-build-game-in-wechat-mini-program":Kt,"how-to-conduct-time-geo-sequential-clustering-from-album":Wt,"box-up-my-stuff-in-cyberspace":qt,"epstein-mystery-archive":Vt})[b],ve={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},re=({data:b,type:i})=>{const{id:S}=Je(),[o,n]=l.useState("details"),a=b.find(u=>u.slug===S);return l.useEffect(()=>{const u=()=>{window.location.hash.includes("demo")?n("demo"):n("details")};return u(),window.addEventListener("hashchange",u),()=>window.removeEventListener("hashchange",u)},[S]),a?e.jsxs("div",{className:"flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen",children:[e.jsxs("div",{className:"sticky top-0 z-5 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4 md:gap-6",children:[e.jsx(oe,{to:`/${i}`,className:"flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider",children:"← Index"}),e.jsx("div",{className:"h-4 w-px bg-neutral-200 hidden md:block"}),e.jsx("h2",{className:"text-xs md:text-sm font-bold text-neutral-900 truncate max-w-[120px] md:max-w-[200px]",children:a.title})]}),e.jsxs("div",{className:"flex bg-neutral-100 p-1 rounded-sm border border-neutral-200",children:[e.jsx("button",{onClick:()=>n("details"),className:`px-2 md:px-3 py-1 text-xs font-mono ${o==="details"?"bg-white shadow-sm":"text-neutral-500"}`,children:"DOCS"}),a.hasDemo&&e.jsxs("button",{onClick:()=>n("demo"),className:`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${o==="demo"?"bg-white text-blue-600 shadow-sm":"text-neutral-500"}`,children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative rounded-full h-2 w-2 bg-blue-500"})]}),"DEMO"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:o==="details"?e.jsxs("div",{className:"flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8 md:mb-10",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.tech.map((u,v)=>e.jsx("span",{className:"px-2 py-1 text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-sm",children:u},v))}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-neutral-500 mb-4",children:[e.jsxs("span",{className:"font-mono text-xs uppercase tracking-wide",children:["NO. ",a.id]}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:a.year}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("span",{children:a.category})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-light mb-6 text-neutral-900 tracking-tight",children:a.title}),e.jsx("div",{className:"bg-gradient-to-r from-neutral-50 to-white border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-lg",children:e.jsxs("p",{className:"font-serif text-base md:text-lg text-neutral-700 leading-relaxed italic",children:['"',a.description,'"']})})]}),e.jsxs("div",{className:"grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow",children:[e.jsxs("div",{className:"md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10",children:[a.details.abstract&&e.jsxs("section",{id:"abstract",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Abstract"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:a.details.abstract})]}),a.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Content"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:a.details.content})]}),a.details.solution&&e.jsxs("section",{id:"methodology",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Methodology"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:a.details.solution})]}),a.details.challenge&&e.jsxs("section",{id:"challenges",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Challenges"}),e.jsx("p",{className:"text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal",children:a.details.challenge})]}),(a.details.code||a.details.codeComponent||ve[a.slug])&&e.jsxs("section",{id:"code",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Code Example"}),e.jsx("div",{className:"bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm font-mono leading-relaxed",children:e.jsx("code",{children:ve[a.slug]||a.details.codeComponent||`// Code file: ${a.details.code}`})})})]}),a.details.image&&a.details.image.length>0&&e.jsxs("section",{id:"images",className:"space-y-6",children:[e.jsx("h3",{className:"text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100",children:"Images"}),e.jsx("div",{className:"space-y-6",children:a.details.image.map((u,v)=>u?e.jsx("div",{className:"border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",children:e.jsx("img",{src:u,alt:`${a.title} - ${v+1}`,className:"w-full h-auto object-cover"})},v):null)})]})]}),e.jsx("div",{className:"md:col-span-12 lg:col-span-4 hidden lg:block",children:e.jsxs("div",{className:"sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 pb-3 border-b border-neutral-200",children:"Contents"}),e.jsxs("ul",{className:"space-y-3",children:[a.details.abstract&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("abstract"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Abstract"})}),a.details.content&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("content"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Content"})}),a.details.solution&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("methodology"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Methodology"})}),a.details.challenge&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("challenges"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Challenges"})}),(a.details.code||a.details.codeComponent||ve[a.slug])&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("code"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Code Example"})}),a.details.image&&a.details.image.length>0&&e.jsx("li",{children:e.jsx("button",{onClick:()=>Q("images"),className:"text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left",children:"Images"})})]})]})})]})]}):e.jsx("div",{className:"w-full h-full bg-neutral-100 relative",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"Loading demo..."}),children:(()=>{const u=Xt(a.slug);return u?e.jsx(u,{}):e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-neutral-400 font-mono",children:"DEMO NOT AVAILABLE"})})()})})})]}):e.jsx("div",{className:"p-4 md:p-10 font-mono",children:"PROJECT_NOT_FOUND"})},Zt=()=>e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900 border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:"About Me"}),e.jsxs("div",{className:"prose prose-neutral prose-sm font-light text-base md:text-lg text-neutral-800 leading-relaxed",children:[e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"AI-assisted urban planning"}),", especially on ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"urban heat environments"}),". I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology."]}),e.jsx("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:"In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul."}),e.jsxs("p",{className:"text-base md:text-lg text-neutral-800 leading-relaxed mb-4 md:mb-6 font-light",children:["I am also ",e.jsx("span",{className:"font-medium border-b border-neutral-300",children:"UI&UX designer and front-end developer"})," passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 pt-6 md:pt-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-xs text-neutral-400 uppercase mb-4",children:"Core Competencies"}),e.jsxs("ul",{className:"space-y-2 text-sm text-neutral-700",children:[e.jsx("li",{children:"Urban Climate & Resilience"}),e.jsx("li",{children:"AI-Assisted Urban Planning"}),e.jsx("li",{children:"Machine Learning & Data Analysis"}),e.jsx("li",{children:"Spatial Statistics & GIS"}),e.jsx("li",{children:"React / Next.js ecosystem"}),e.jsx("li",{children:"TypeScript Architecture"}),e.jsx("li",{children:"WebGL / Three.js"}),e.jsx("li",{children:"UI Systems Design"})]})]})})]})]}),Yt=()=>e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx("div",{className:"w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6 text-2xl rotate-45 hover:rotate-90 transition-transform duration-500",children:"✉️"}),e.jsx("h2",{className:"text-3xl font-bold text-neutral-900 mb-4",children:"CONTACT_FOR_COLLABORATION"}),e.jsx("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"bg-neutral-900 text-white px-8 py-3 text-sm font-mono hover:bg-neutral-700 transition-colors",children:"SEND_TRANSMISSION"})]}),je=({href:b,label:i})=>e.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all rounded-sm text-xs font-mono",children:i}),Qt=()=>{const b=[...we.map(n=>({...n,type:"planning"})),...Ne.map(n=>({...n,type:"design"})),...Me.map(n=>({...n,type:"game"})),...ke.map(n=>({...n,type:"platform"})),...Se.map(n=>({...n,type:"tutorial"}))],[i,S]=l.useState(0),o=b.length-1;return l.useEffect(()=>{const n=a=>{a.preventDefault(),S(u=>a.deltaY>0?Math.min(u+1,o):Math.max(u-1,0))};return window.addEventListener("wheel",n,{passive:!1}),()=>window.removeEventListener("wheel",n)},[o]),e.jsxs("div",{className:"p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsxs("div",{className:"flex justify-between items-end border-b border-neutral-100 pb-4 mb-6 md:mb-8",children:[e.jsx("h2",{className:"text-lg md:text-xl font-medium text-neutral-900",children:"All Projects"}),e.jsxs("span",{className:"text-xs font-mono text-neutral-400",children:[i+1," / ",b.length]})]}),e.jsx("div",{className:"relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10",children:b.map((n,a)=>{var L;const u=a-i;if(u<-2||u>3)return null;const v=1-Math.abs(u)*.08,p=u*60,I=-Math.abs(u)*120,j=u*-6,T=u===0?1:.5;return e.jsx("div",{className:"absolute w-full max-w-7xl transition-all duration-500 ease-out",style:{transform:`
                  translateY(${p+20}px)
                  translateZ(${I}px)
                  rotateX(${j}deg)
                  scale(${v})
                `,opacity:T,zIndex:100-Math.abs(u)},children:e.jsx("div",{className:"bg-white border border-neutral-200 rounded-xl p-6 shadow-lg",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"w-36 h-36 bg-neutral-100 overflow-hidden rounded-md flex-shrink-0",children:e.jsx("img",{src:n.details.logo,alt:n.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-neutral-100 rounded",children:n.type.toUpperCase()}),e.jsx("span",{className:"text-[10px] font-mono text-neutral-400",children:n.year})]}),e.jsx("h3",{className:"text-xl font-bold mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-neutral-600 mb-4 line-clamp-3",children:n.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(L=n.tech)==null?void 0:L.slice(0,3).map((O,s)=>e.jsx("span",{className:"text-[10px] font-mono px-2 py-1 bg-blue-50 text-blue-700 rounded",children:O},s))}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("a",{href:`#/${n.type}/${n.slug}`,className:"px-4 py-2 text-xs font-mono bg-neutral-200 hover:bg-neutral-300 rounded",children:"VIEW"}),n.hasDemo&&e.jsx("a",{href:`#/${n.type}/${n.slug}#demo`,className:"px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded",children:"DEMO"})]})]})]})})},`${n.type}-${n.slug}`)})})]})},Ue="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",Jt="/data/223_cities_cluster_with_index_deciles.csv",J=b=>{const i=b.replace("#",""),S=parseInt(i.slice(0,2),16),o=parseInt(i.slice(2,4),16),n=parseInt(i.slice(4,6),16);return[S,o,n]},ee=(b,i,S)=>{const o=Math.round(b[0]+(i[0]-b[0])*S),n=Math.round(b[1]+(i[1]-b[1])*S),a=Math.round(b[2]+(i[2]-b[2])*S);return`rgb(${o}, ${n}, ${a})`},te=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],en=()=>{var Ae;const b=l.useRef(null),i=l.useRef(null),[S,o]=l.useState(!0),[n,a]=l.useState(0),[u,v]=l.useState(null),[p,I]=l.useState(null),[j,T]=l.useState([]),[L,O]=l.useState(null),[s,A]=l.useState("K_12"),[D,H]=l.useState(!0),[E,pe]=l.useState(null),[le,ce]=l.useState(null),[sn,Le]=l.useState(!1),[q,Ge]=l.useState(null),[$e,Ce]=l.useState(!1),[rn,on]=l.useState(null),[Ie,de]=l.useState(!1),[Pe,ne]=l.useState(0),[He,Z]=l.useState(""),[he,Be]=l.useState(!1),[ae,We]=l.useState(!0),[_e,Ee]=l.useState(!0),[ge,qe]=l.useState({}),[ln,cn]=l.useState(!1),[U,Ve]=l.useState("global"),me=l.useRef(null),Te=l.useRef(null),Ke=l.useRef(!1),se=l.useRef(null),Xe=(t,d)=>{let x=t.features;L!==null&&(x=x.filter(m=>{var c;const f=(c=m.properties)==null?void 0:c.Place;return f!==void 0&&Number(f)===Number(L)}));const g=x.map(m=>{var f;return(f=m.properties)==null?void 0:f[d]}).filter(m=>{if(m==null)return!1;if(typeof m=="string"){const c=m.trim();if(c===""||/^(na|nan|null)$/i.test(c))return!1}const f=Number(m);return!(Number.isNaN(f)||f===-9999)}).map(m=>Number(m)),k=x.reduce((m,f)=>{var w;const c=(w=f.properties)==null?void 0:w[d];let r=!1;if(c==null)r=!0;else if(typeof c=="string"){const N=c.trim();if(N===""||/^(na|nan|null)$/i.test(N))r=!0;else{const P=Number(c);(Number.isNaN(P)||P===-9999)&&(r=!0)}}else{const N=Number(c);(Number.isNaN(N)||N===-9999)&&(r=!0)}return m+(r?1:0)},0);let M=NaN,y=NaN,h=0;if(g.length>0){M=g[0],y=g[0],h=g[0];for(let m=1;m<g.length;m++){const f=g[m];f<M&&(M=f),f>y&&(y=f),h+=f}}return{count:x.length,min:M,max:y,mean:g.length>0?h/g.length:NaN,nanCount:k}};l.useEffect(()=>{(async()=>{try{const g=(await(await fetch(Jt)).text()).trim().split(`
`);if(g.length<2)return;const k=g[0].split(",").map(c=>c.trim()),M={},h=g[g.length-1].split(","),f=g[1].split(",");k.forEach((c,r)=>{if(c===""||c.includes("Place")||c.includes("Sum")||c.includes("FID")||c.includes("index"))return;const w=parseFloat(f[r]),N=parseFloat(h[r]);!isNaN(w)&&!isNaN(N)&&N>w&&(M[c]={min:w,max:N})}),console.log("Loaded attribute ranges:",M),qe(M)}catch(d){console.error("Failed to load deciles:",d)}})()},[]),l.useEffect(()=>{!he&&!p&&(async()=>{var d;o(!0),a(0),v(null);try{a(10),console.log("开始下载..."),me.current=new AbortController;const x=await fetch(Ue,{signal:me.current.signal});if(console.log("响应状态:",x.status),!x.ok)throw new Error(`HTTP error! status: ${x.status}`);a(30);const g=x.headers.get("content-length"),k=g?parseInt(g):null;console.log("预期文件大小:",k);const M=(d=x.body)==null?void 0:d.getReader();if(!M)throw new Error("无法读取响应流");let y=0;const h=[];for(;;){const{done:P,value:C}=await M.read();if(P)break;h.push(C),y+=C.length,a(k?30+Math.round(y/k*60):50)}console.log("下载完成, 收到:",y),k&&y!==k&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const m=new Uint8Array(y);let f=0;for(const P of h)m.set(P,f),f+=P.length;if(a(90),he){console.log("本地数据已加载，跳过网络数据"),o(!1);return}console.log("开始解析 Shapefile...");const c=await De(m);console.log("Shapefile 解析完成:",c);let r=[];if(c.type==="FeatureCollection"?r=c.features:Array.isArray(c)?r=c:c.type==="Feature"&&(r=[c]),console.log("解析完成，特征数量:",r==null?void 0:r.length),he)return;const w={type:"FeatureCollection",features:r||[]};I(w),a(100);const N=new Map;w.features.forEach(P=>{var B;const C=Number(((B=P.properties)==null?void 0:B.Place)??0);N.has(C)||N.set(C,{id:C,name:`Place ${C}`,featureCount:0});const z=N.get(C);z&&z.featureCount++}),T(Array.from(N.values()).sort((P,C)=>P.id-C.id)),o(!1)}catch(x){if(x.name==="AbortError"){console.log("网络请求已取消");return}v(x instanceof Error?x.message:"Failed to load"),o(!1)}})()},[]),l.useEffect(()=>{p&&pe(Xe(p,s))},[p,L,s,U,ge]),l.useEffect(()=>{if(!p)return;const t=i.current;if(!t)return;const d=()=>{var g,k,M,y;if(p.features.forEach((h,m)=>{h.id===void 0&&(h.id=m)}),t.getSource("cluster"))t.getSource("cluster").setData(p);else{console.log("初始化 cluster 数据源..."),t.addSource("cluster",{type:"geojson",data:p,generateId:!0}),t.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),t.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),t.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),t.on("click","cluster-fill",m=>{var f;if(m.features&&m.features.length>0){const c=m.features[0],r=c.id;se.current!==null&&se.current!==void 0&&t.setFeatureState({source:"cluster",id:se.current},{selected:!1}),r!==void 0?(t.setFeatureState({source:"cluster",id:r},{selected:!0}),se.current=r):se.current=null,Ge(c),Ce(!0),((f=c.properties)==null?void 0:f.Place)!==void 0&&O(Number(c.properties.Place))}}),t.on("mouseenter","cluster-fill",()=>{t.getCanvas().style.cursor="pointer"}),t.on("mouseleave","cluster-fill",()=>{t.getCanvas().style.cursor=""});const h=p.features;if(h.length>0)try{const m=new ue.LngLatBounds,f=Math.max(1,Math.floor(h.length/2e3));for(let c=0;c<h.length;c+=f){const r=h[c];if(!((g=r.geometry)!=null&&g.coordinates))continue;const w=r.geometry.type,N=r.geometry.coordinates;w==="Point"?m.extend(N):w==="LineString"||w==="MultiPoint"?N.forEach(P=>m.extend(P)):w==="Polygon"||w==="MultiLineString"?(k=N[0])==null||k.forEach(P=>m.extend(P)):w==="MultiPolygon"&&((y=(M=N[0])==null?void 0:M[0])==null||y.forEach(P=>m.extend(P)))}m.isEmpty()||t.fitBounds(m,{padding:50,duration:1e3})}catch(m){console.error("Fit bounds error:",m)}}},x=()=>{var C;if(!t.getLayer("cluster-fill"))return;const g=null;t.setFilter("cluster-fill",g),t.setFilter("cluster-line",g),t.setFilter("cluster-highlight",g);const k=(()=>{var fe;let z=1/0,B=-1/0;for(const xe of p.features){const W=Number((fe=xe.properties)==null?void 0:fe[s]);Number.isNaN(W)||W===-9999||(W<z&&(z=W),W>B&&(B=W))}return{min:z===1/0?0:z,max:B===-1/0?0:B}})(),M=L!==null&&E?{min:E.min,max:E.max}:k,y=U==="city"?M:k,h=y.min,m=y.max;let f;if(s.includes("K_")){const z=Math.round(((C=ge[s])==null?void 0:C.max)??m),B=Array.from({length:26},(Y,be)=>{const G=be/25;let V,K,X;if(G<.167){const F=G/.167;V=0,K=0,X=Math.round(139+116*F)}else if(G<.333){const F=(G-.167)/.167;V=0,K=Math.round(255*F),X=255}else if(G<.5){const F=(G-.333)/.167;V=0,K=Math.round(255-128*F),X=Math.round(255-255*F)}else if(G<.667){const F=(G-.5)/.167;V=Math.round(255*F),K=255,X=0}else if(G<.833){const F=(G-.667)/.167;V=255,K=Math.round(255-128*F),X=0}else{const F=(G-.833)/.167;V=255,K=Math.round(127-127*F),X=0}return`#${V.toString(16).padStart(2,"0")}${K.toString(16).padStart(2,"0")}${X.toString(16).padStart(2,"0")}`}),xe=Array.from({length:z+1},(Y,be)=>B[Math.round(be*25/z)]).slice(0,z+1),W=["interpolate",["linear"],["get",s]];for(let Y=0;Y<=z;Y++)W.push(Y,xe[Y]);f=W}else s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?f=["interpolate",["linear"],["get",s],h,"#3182bd",m,"#e6550d"]:s.includes("elev")||s.includes("slope")?f=["interpolate",["linear"],["get",s],h,"#31a354",m,"#756bb1"]:f=["interpolate",["linear"],["get",s],h,"#31a354",m,"#756bb1"];t.setPaintProperty("cluster-fill","fill-color",f);const c=L!==null,r=Number(L),P=["case",["any",["==",["get",s],-9999],["==",["get",s],null]],0,c?["case",["==",["to-number",["get","Place"]],r],.8,.15]:.7];t.setPaintProperty("cluster-fill","fill-opacity",P)};t.isStyleLoaded()?(d(),x()):t.once("load",()=>{d(),x()})},[p,L,s]),l.useEffect(()=>{var x,g,k,M;if(!p||L===null)return;const t=i.current;if(!t)return;const d=p.features.filter(y=>{var m;const h=(m=y.properties)==null?void 0:m.Place;return h!==void 0&&Number(h)===Number(L)});if(d.length!==0)try{const y=new ue.LngLatBounds;let h=0;const m=Math.max(1,Math.floor(d.length/2e3));for(let f=0;f<d.length;f+=m){const c=d[f];if(!((x=c.geometry)!=null&&x.coordinates))continue;const r=c.geometry.type,w=c.geometry.coordinates;r==="Point"?(y.extend(w),h++):r==="LineString"||r==="MultiPoint"?(w.forEach(N=>y.extend(N)),h++):r==="Polygon"||r==="MultiLineString"?((g=w[0])==null||g.forEach(N=>y.extend(N)),h++):r==="MultiPolygon"&&((M=(k=w[0])==null?void 0:k[0])==null||M.forEach(N=>y.extend(N)),h++)}!y.isEmpty()&&h>0&&t.fitBounds(y,{padding:50,duration:1e3})}catch(y){console.error("Fly to error:",y)}},[L]),l.useEffect(()=>((async()=>{(!b.current||i.current)&&console.log("开始初始化地图...");try{const d=new ue.Map({container:b.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});d.addControl(new ue.NavigationControl,"top-right"),d.on("load",()=>{console.log("地图样式加载完成")}),d.on("error",x=>{var M;const g=String(((M=x==null?void 0:x.error)==null?void 0:M.message)||(x==null?void 0:x.message)||"");g.includes("ERR_ABORTED")||g.includes("AbortError")||g.includes("Canceled")||g.includes("cancelled")||console.error("地图错误:",x)}),i.current=d,console.log("地图初始化完成")}catch(d){console.error("地图初始化错误:",d)}})(),()=>{i.current&&(i.current.remove(),i.current=null,Ke.current=!1)}),[]),l.useEffect(()=>{const t=i.current;if(!t)return;const d=()=>{t.getLayer("simple-tiles")&&t.setLayoutProperty("simple-tiles","visibility",ae?"visible":"none")};t.isStyleLoaded()?d():t.once("style.load",d)},[ae]);const Ze=async t=>{var x;const d=(x=t.target.files)==null?void 0:x[0];if(d){me.current&&me.current.abort(),de(!0),ne(0),Z("正在读取文件..."),v(null),Le(!0),ce(URL.createObjectURL(d));try{console.log("开始读取文件:",d.name,"大小:",d.size);let g=[];const k=d.name.endsWith(".zip"),M=d.name.endsWith(".shp");if(!k&&!M){v("请上传 .zip 文件 (包含 Shapefile)"),de(!1);return}Z("正在读取文件...");const y=await d.arrayBuffer();ne(30),Z("正在解析 Shapefile...");const h=await De(y);console.log("Shapefile 解析完成:",h),h.type==="FeatureCollection"?g=h.features:Array.isArray(h)?g=h:h.type==="Feature"&&(g=[h]),console.log("解析到的 features 数量:",g.length),ne(95),Z(`已解析 ${g.length} 个 Features...`);const m={type:"FeatureCollection",features:g};ne(98),Z("正在处理 Place 数据...");const f=new Map;m.features.forEach(c=>{var N;const r=Number(((N=c.properties)==null?void 0:N.Place)??0);f.has(r)||f.set(r,{id:r,name:`Place ${r}`,featureCount:0});const w=f.get(r);w&&w.featureCount++}),ne(100),Z("加载完成!"),setTimeout(()=>{Be(!0),I(m),T(Array.from(f.values()).sort((c,r)=>c.id-r.id)),de(!1),Le(!1),o(!1)},500)}catch(g){const k=g instanceof Error?g.message:"未知错误";v(`加载失败: ${k}`),de(!1),o(!1)}}},Ye=te.reduce((t,d)=>(t[d.category]||(t[d.category]=[]),t[d.category].push(d),t),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[Ie&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Re,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:He}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Pe}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Pe,"%"]})]})}),S&&!Ie?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(st,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${n}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[n,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:Ue,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(it,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var t;return(t=Te.current)==null?void 0:t.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Re,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Te,type:"file",accept:".shp,.zip",onChange:Ze,className:"hidden"})]})}):null,u&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:u}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(rt,{size:14}),"刷新重试"]})})]}),D&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(ot,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>H(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(lt,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>We(!ae),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${ae?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ae?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:L??"",onChange:t=>O(t.target.value?Number(t.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Ae=p==null?void 0:p.features)==null?void 0:Ae.length)??0,")"]}),j.map(t=>e.jsxs("option",{value:t.id,children:[t.name," (",t.featureCount,")"]},t.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:s,onChange:t=>A(t.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Ye).map(([t,d])=>[e.jsx("optgroup",{label:t.charAt(0).toUpperCase()+t.slice(1),children:d.map(x=>e.jsx("option",{value:x.key,children:x.label},x.key))},t)])})]}),E&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(ct,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:E.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:E.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:E.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:E.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:E.nanCount})]})]})]})]})]}),!D&&e.jsx("button",{onClick:()=>H(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(dt,{size:18})}),$e&&q&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[q.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",q.properties.Place]}),q.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",q.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",q.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>Ce(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(ze,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:te.map(t=>{var x;const d=(x=q.properties)==null?void 0:x[t.key];return d==null?null:e.jsxs("button",{onClick:()=>A(t.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${s===t.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof d=="number"?d.toFixed(2):d})]},t.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>O(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:b,className:"w-full h-full"}),_e&&p&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(Fe,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>Ee(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(ze,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Ve(U==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${U==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:U==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:s.includes("K_")?(()=>{var g,k;const t=Math.round(((g=ge[s])==null?void 0:g.max)??30),d=Array.from({length:26},(M,y)=>{const h=y/25;let m,f,c;if(h<.167){const r=h/.167;m=0,f=0,c=Math.round(139+116*r)}else if(h<.333){const r=(h-.167)/.167;m=0,f=Math.round(255*r),c=255}else if(h<.5){const r=(h-.333)/.167;m=0,f=Math.round(255-128*r),c=Math.round(255-255*r)}else if(h<.667){const r=(h-.5)/.167;m=Math.round(255*r),f=255,c=0}else if(h<.833){const r=(h-.667)/.167;m=255,f=Math.round(255-128*r),c=0}else{const r=(h-.833)/.167;m=255,f=Math.round(127-127*r),c=0}return`#${m.toString(16).padStart(2,"0")}${f.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}`}),x=Array.from({length:t+1},(M,y)=>d[Math.round(y*25/t)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((k=te.find(M=>M.key===s))==null?void 0:k.label)||s}),e.jsx("div",{className:"flex flex-wrap gap-px",children:x.map((M,y)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:M}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:y})]},y))})]})})():s==="CoverRatio"||s==="ISF"||s==="GreenRatio"?(()=>{var c;const t=(()=>{var N;let r=1/0,w=-1/0;for(const P of p.features){const C=Number((N=P.properties)==null?void 0:N[s]);Number.isNaN(C)||C===-9999||(C<r&&(r=C),C>w&&(w=C))}return{min:r===1/0?0:r,max:w===-1/0?0:w}})(),d=L!==null&&E?{min:E.min,max:E.max}:t,x=((c=te.find(r=>r.key===s))==null?void 0:c.label)||s,g=t.max>t.min?Math.max(0,Math.min(1,(d.min-t.min)/(t.max-t.min))):0,k=t.max>t.min?Math.max(0,Math.min(1,(d.max-t.min)/(t.max-t.min))):0,M=Math.max(0,k-g),y=J("#3182bd"),h=J("#e6550d"),m=ee(y,h,g),f=ee(y,h,k);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[x,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:L!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${g*100}%`,width:`${M*100}%`,background:`linear-gradient(to right, ${m}, ${f})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(2)}),e.jsx("span",{children:d.max.toFixed(2)})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[x,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:t.min.toFixed(2)}),e.jsx("span",{children:t.max.toFixed(2)})]})]})]})})():s.includes("elev")||s.includes("slope")?(()=>{var c;const t=(()=>{var N;let r=1/0,w=-1/0;for(const P of p.features){const C=Number((N=P.properties)==null?void 0:N[s]);Number.isNaN(C)||C===-9999||(C<r&&(r=C),C>w&&(w=C))}return{min:r===1/0?0:r,max:w===-1/0?0:w}})(),d=L!==null&&E?{min:E.min,max:E.max}:t,x=((c=te.find(r=>r.key===s))==null?void 0:c.label)||s,g=t.max>t.min?Math.max(0,Math.min(1,(d.min-t.min)/(t.max-t.min))):0,k=t.max>t.min?Math.max(0,Math.min(1,(d.max-t.min)/(t.max-t.min))):0,M=Math.max(0,k-g),y=J("#31a354"),h=J("#756bb1"),m=ee(y,h,g),f=ee(y,h,k);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[x,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:L!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${g*100}%`,width:`${M*100}%`,background:`linear-gradient(to right, ${m}, ${f})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(1)}),e.jsxs("span",{children:[d.max.toFixed(0),"+"]})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[x,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:t.min.toFixed(1)}),e.jsxs("span",{children:[t.max.toFixed(0),"+"]})]})]})]})})():(()=>{var c;const t=(()=>{var N;let r=1/0,w=-1/0;for(const P of p.features){const C=Number((N=P.properties)==null?void 0:N[s]);Number.isNaN(C)||C===-9999||(C<r&&(r=C),C>w&&(w=C))}return{min:r===1/0?0:r,max:w===-1/0?0:w}})(),d=L!==null&&E?{min:E.min,max:E.max}:t,x=((c=te.find(r=>r.key===s))==null?void 0:c.label)||s,g=t.max>t.min?Math.max(0,Math.min(1,(d.min-t.min)/(t.max-t.min))):0,k=t.max>t.min?Math.max(0,Math.min(1,(d.max-t.min)/(t.max-t.min))):0,M=Math.max(0,k-g),y=J("#31a354"),h=J("#756bb1"),m=ee(y,h,g),f=ee(y,h,k);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[x,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:L!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${g*100}%`,width:`${M*100}%`,background:`linear-gradient(to right, ${m}, ${f})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(2)}),e.jsx("span",{children:d.max.toFixed(2)})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[x,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:t.min.toFixed(2)}),e.jsx("span",{children:t.max.toFixed(2)})]})]})]})})()})]}),!_e&&e.jsx("button",{onClick:()=>Ee(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Fe,{size:18})})]})},tn=()=>{const b=l.useRef(null),i=l.useRef(!1);return l.useEffect(()=>i.current||!b.current?void 0:(i.current=!0,(()=>{const o=document.createElement("script");o.type="text/javascript",o.src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",o.async=!0,window.googleTranslateElementInit=()=>{new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,zh-CN,zh-TW",layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:!1},"google_translate_element"),setTimeout(()=>{const n=document.getElementById("google_translate_element");n&&(n.style.display="inline-block",n.querySelectorAll("div").forEach(v=>{v.style.display="inline-flex",v.style.flexDirection="row",v.style.alignItems="center"}),n.querySelectorAll("span").forEach(v=>{v.style.display="inline",v.style.verticalAlign="middle"}))},100)},document.body.appendChild(o)})(),()=>{const o=document.getElementById("google_translate_element");o&&(o.innerHTML="");const n=document.querySelector('script[src*="translate.google.com"]');n&&n.remove();const a=document.querySelector(".skiptranslate");a&&a.remove();const u=document.querySelector("#goog-gt-tt");u&&u.remove(),document.body.style.top="",i.current=!1}),[]),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{id:"google_translate_element",ref:b,className:"flex items-center",style:{display:"inline-block",minWidth:"100px"}}),e.jsx("style",{children:`
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
      `})]})},nn=()=>{const[b,i]=l.useState(!0),[S,o]=l.useState("/data/fig/lili/lili_01.png"),[n,a]=l.useState("Exploring the intersection of technology and creativity."),p=et().pathname.split("/").filter(Boolean)[0]||"",I={design:"/data/fig/lili/lili_05.png",game:"/data/fig/lili/lili_03.png",platform:"/data/fig/lili/lili_11.png",tutorial:"/data/fig/lili/lili_04.png",about:"/data/fig/lili/lili_02.png",planning:"/data/fig/lili/lili_06.png"},j=["/data/fig/lili/lili_01.png","/data/fig/lili/lili_07.png","/data/fig/lili/lili_08.png","/data/fig/lili/lili_09.png","/data/fig/lili/lili_10.png","/data/fig/lili/lili_12.png"],T=["Exploring the intersection of technology and creativity.","Turning data into meaningful visual stories.","Building digital experiences that inspire.","Bridging the gap between design and development.","Creating solutions that matter in the real world.","Passionate about geospatial technology and urban planning."],L=()=>{const s=Math.floor(Math.random()*j.length);return j[s]},O=()=>{const s=Math.floor(Math.random()*T.length);return T[s]};return l.useEffect(()=>{p===""?o(L()):I[p]?o(I[p]):o(L()),a(O())},[p]),l.useEffect(()=>{const s=()=>{window.innerWidth<300,i(!0)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsx("div",{className:"h-screen p-0 bg-neutral-100 flex flex-col ",children:e.jsxs("div",{className:"w-full bg-white border border-neutral-10 flex flex-col relative h-full",children:[e.jsxs("header",{className:"border-b p-4 flex justify-between items-center bg-white z-30 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>i(!b),className:"md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900",children:"☰"}),e.jsxs("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-neutral-900",children:["Lili Lin ",e.jsx("span",{className:"text-neutral-300 font-light mx-2",children:"/"})," ",e.jsx("span",{className:"text-sm font-mono font-normal text-neutral-500",children:"PORTFOLIO"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(tn,{}),e.jsxs("nav",{className:"flex md:flex gap-0",children:[e.jsx(oe,{to:"/",onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${p===""?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:"Home"})}),[{key:"planning",label:"Planning",short:"Planning"},{key:"design",label:"Design",short:"Design"},{key:"game",label:"Game",short:"G"},{key:"platform",label:"Platform",short:"P"},{key:"tutorial",label:"Tutorial",short:"T"},{key:"about",label:"About",short:"A"}].map(s=>e.jsx(oe,{to:`/${s.key}`,onClick:()=>{window.innerWidth<768&&i(!0)},className:`px-4 py-3 text font-medium border-b-4 transition-all ${p===s.key?"border-neutral-900 text-neutral-900 bg-white":"border-transparent text-neutral-500 hover:bg-neutral-200"}`,children:e.jsx("span",{children:s.label})},s.key))]})]})]}),e.jsxs("main",{className:"flex flex-row flex-1 overflow-hidden relative",children:[b&&e.jsx("aside",{className:"md:hidden border-r border-neutral-200 bg-white w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[S&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:S,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"Lili Lin"}),e.jsx("h3",{className:"text-sm font-medium text-neutral-500 mb-2",children:"林丽丽"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Designer | Developer | Product Maker"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"Passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsxs("div",{className:"pt-6 border-t border-neutral-100 text-center gap-4",children:[e.jsxs("p",{className:"text-xs text-neutral-500 italic mb-3",children:['"',n,'"']}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[e.jsx("a",{href:"https://github.com/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"GitHub",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"mailto:lili0324@snu.ac.kr",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"Email",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("span",{className:"text-neutral-300",children:"|"}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",className:"flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors",title:"LinkedIn",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]})]})]})}),e.jsx("aside",{className:"hidden md:flex border-r border-neutral-200 bg-white flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0",children:e.jsxs("div",{className:"flex flex-col gap-6 w-full mt-4",children:[S&&e.jsx("div",{className:"w-full flex justify-center py-4",children:e.jsx("img",{src:S,alt:"Lili's avatar",className:"w-40 h-auto object-contain rounded-lg border border-neutral-100 shadow-sm",style:{display:"block",maxWidth:"100%"}})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(je,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(je,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(je,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]}),e.jsxs("div",{className:"mt-4 space-y-3",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-sm font-mono text-neutral-500 mb-2",children:"ABOUT"}),e.jsx("p",{className:"text-xs text-neutral-600 leading-relaxed",children:"I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity."})]}),e.jsx("div",{className:"pt-3 border-t border-neutral-100 text-center",children:e.jsxs("p",{className:"text-xs text-neutral-500 italic",children:['"',n,'"']})})]})]})}),e.jsx("section",{className:"flex-1 bg-white relative w-full h-[calc(100vh-4rem)] overflow-y-auto",children:e.jsxs(tt,{children:[e.jsx(R,{path:"/",element:e.jsx(Qt,{})}),e.jsx(R,{path:"/planning",element:e.jsx(ie,{data:we,type:"planning"})}),e.jsx(R,{path:"/planning/:id",element:e.jsx(re,{data:we,type:"planning"})}),e.jsx(R,{path:"/design",element:e.jsx(ie,{data:Ne,type:"design"})}),e.jsx(R,{path:"/design/:id",element:e.jsx(re,{data:Ne,type:"design"})}),e.jsx(R,{path:"/game",element:e.jsx(ie,{data:Me,type:"game"})}),e.jsx(R,{path:"/game/:id",element:e.jsx(re,{data:Me,type:"game"})}),e.jsx(R,{path:"/platform",element:e.jsx(ie,{data:ke,type:"platform"})}),e.jsx(R,{path:"/platform/:id",element:e.jsx(re,{data:ke,type:"platform"})}),e.jsx(R,{path:"/tutorial",element:e.jsx(ie,{data:Se,type:"tutorial"})}),e.jsx(R,{path:"/tutorial/:id",element:e.jsx(re,{data:Se,type:"tutorial"})}),e.jsx(R,{path:"/clusteringeomap",element:e.jsx(en,{})}),e.jsx(R,{path:"/about",element:e.jsx(Zt,{})}),e.jsx(R,{path:"/contact",element:e.jsx(Yt,{})})]})})]})]})})};function an(){const[b,i]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:e.jsx(nn,{})}),!b&&e.jsx(mt,{onFinish:()=>i(!0)})]})}at.createRoot(document.getElementById("root")).render(e.jsx(an,{}));
