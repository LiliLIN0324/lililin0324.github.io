const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-DFO5eSKd.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-BWPUgRvj.js","./PeaceEliteHustCampusDemo-D-DWwJkq.js","./BMWMetaIslandDemo-7uu2MOZP.js","./riffle-RlweP75u.js","./genstyle-DuJ38oKx.js","./genshot-BoH35G7G.js","./dragon-diffusion-Dj4t-WNK.js","./anyreal-DKKTpW8w.js","./previous-archi-work-CvNoz6hg.js","./hongqiqu-y3eLCJ-3.js","./scendance-TgGmbUpO.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,L as Q,u as Cc,R as Ec,a as Dc,c as qc,d as Pc,e as pc,f as $,H as Rc,g as _c}from"./react-vendor-6zld6QO8.js";import{A as Tc,m as Qe}from"./framer-DvVmTyA1.js";import{M as tc,r as ac,a as nc}from"./markdown-q3GborES.js";import{b as rc}from"./geo-Z02C8O4I.js";import{m as He}from"./maplibre-BedwuVXB.js";import{U as sc,L as Bc,D as Gc,R as Fc,M as Oc,C as Uc,a as Wc,b as Hc,X as dc,c as gc}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))a(b);new MutationObserver(b=>{for(const g of b)if(g.type==="childList")for(const i of g.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(b){const g={};return b.integrity&&(g.integrity=b.integrity),b.referrerPolicy&&(g.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?g.credentials="include":b.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function a(b){if(b.ep)return;b.ep=!0;const g=n(b);fetch(b.href,g)}})();function $c({onFinish:c}){const[t,n]=s.useState(!0),a=s.useRef(null),b=s.useRef({x:-1e3,y:-1e3});return s.useEffect(()=>{const g=a.current;if(!g)return;const i=g.getContext("2d");if(!i)return;let m,x=[];const _=()=>{g.width=window.innerWidth,g.height=window.innerHeight},L=r=>{b.current={x:r.clientX,y:r.clientY}},z=r=>{r.touches.length>0&&(b.current={x:r.touches[0].clientX,y:r.touches[0].clientY})};window.addEventListener("resize",_),window.addEventListener("mousemove",L),window.addEventListener("touchmove",z),_();class y{constructor(){this.x=Math.random()*g.width,this.y=Math.random()*g.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>g.width)&&(this.vx*=-1),(this.y<0||this.y>g.height)&&(this.vy*=-1);let S=b.current.x-this.x,A=b.current.y-this.y,I=Math.sqrt(S*S+A*A),N=S/I,T=A/I;const F=150;let M=(F-I)/F;I<F&&(this.x-=N*M*this.density*.5,this.y-=T*M*this.density*.5)}draw(){i&&(i.fillStyle="rgba(255, 255, 255, 0.8)",i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fill())}}for(let r=0;r<120;r++)x.push(new y);const G=()=>{i.clearRect(0,0,g.width,g.height);for(let r=0;r<x.length;r++){x[r].update(),x[r].draw();for(let S=r+1;S<x.length;S++){const A=x[r].x-x[S].x,I=x[r].y-x[S].y,N=Math.sqrt(A*A+I*I);N<100&&(i.beginPath(),i.strokeStyle=`rgba(255, 255, 255, ${.2*(1-N/100)})`,i.lineWidth=.6,i.moveTo(x[r].x,x[r].y),i.lineTo(x[S].x,x[S].y),i.stroke())}}m=requestAnimationFrame(G)};return G(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",_),window.removeEventListener("mousemove",L),window.removeEventListener("touchmove",z)}},[]),e.jsx(Tc,{onExitComplete:c,children:t&&e.jsxs(Qe.div,{onClick:()=>n(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:a,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(Qe.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(Qe.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const Vc=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/99.jpg"
---
随着城市规模的扩大，乡村生活和田园风光离我们的生活越来越远。在武汉，年均鸡肉消费量达10.2万吨，需要约6万只鸡的供应。这些鸡全部来自远离城市的农村地区，养殖条件可能不卫生，运输和加工过程也无法得到保障。同时，鸡肉品质和销售渠道也存在相关问题。

因此，我们旨在通过 CHICKEN TOPIA 项目将鸡肉养殖产业带入城市。透明的工业建筑和建筑结构可以解决高效养鸡、健康鸡肉消费的问题，同时为城市居民提供乡村记忆。为了尽量减少城市土地的占用，该结构采用垂直发展方向，并按照产业链逻辑划分为养殖区、生产区和综合商业区，所有这些区域共享一定的拓扑联系，从而模糊建筑空间，创造出折叠飞扬的空间结构。在建筑内部，每个区域由更小的模块组成，这些模块可以根据场地条件及时调整建筑的内部功能。

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/ChickenUtopia.mp4"></video>
`,Kc=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/99.jpg"
---
Neurotopia aims to provide shared living and entrepreneurial spaces primarily for young people. This urban design project is located in a former industrial area in Hanyang District, Wuhan, Hubei Province, China. By creating a new metaverse for animation enterprises in Hanyang, the project seeks to revitalize the site and establish a decentralized future community based on the theories of neuronal biological properties and complex systems adaptation.

Specifically, the design introduces the concept of neurons, dividing the space into three categories: "nodes," "connections," and "voids“. Vertical transportation hubs are established at the nodes, connecting prefabricated modular units to each node, promoting a smart city design concept that integrates new transportation and intelligent community systems. In the voids between the nodes, incubator modular units are created to accommodate the evolving scale of enterprises, fostering a dynamic, shared, and co-creative living environment.

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Neurotopia.mp4"></video>
</div>

# 效果展示

---
`,Zc=`---
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/海底避难所.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/piledark.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/东湖书吧_1.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/孵化器.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/城市绿脊.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/露营地.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/浮亭_1.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/图书馆.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/武当山.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/水彩作品.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/硬笔作品.jpg"
---
# 所有的项目具体情况请点击demo查看 

---
`,Xc=`---
id: "07"
slug: "cluster-visualizer-3d"
title: "Cluster Visualizer 3D"
category: "Global heat mapping"
year: "2024-present"
description: "基于PCA和K-Means的高维数据聚类3D探索"
tech: ["Python","Three.js","React", "SOM","K-Means"]
abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, project visualizes complex data patterns in an intuitive manner."
challenge: "compressed 223 cities in global data and revelas pattern from window period of time-series data from 2017 to 2019 with both day and night time data"
solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/100.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/101.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/102.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/103.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/104.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/105.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/106.jpg"
---
项目代码库：
https://github.com/LiliLIN0324/gloabl-urban-heat

# 项目介绍

本项目的核心是一个基于 **SOM（自组织映射）+ K-means** 两阶段聚类方法的空间数据研究：对全球 **204 个城市**的城市热岛（Urban Heat Island, UHI）时空格局进行划分与可视化，并关联建筑、冠层、水体、绿地、山体等城市形态指标，探究「城市形态如何影响热岛强度」。配套的 3D 可视化工具则把这一高维聚类结果放到可交互的三维空间中，让复杂的数据格局变得一目了然。

# 项目重点
基于 **SOM + K-means** 两阶段聚类，对全球 **204 个城市**的城市热岛时空序列（2017–2019、昼夜双时相、2,178 维特征、142,506 个网格）做格局划分，并结合城市形态指标分析热岛成因，配套 Three.js/React 交互式 3D 可视化。

## 1. 项目速览

| 维度 | 内容 |
|------|------|
| 研究对象 | 全球城市热岛（UHI）时空格局 |
| 样本规模 | 原始 269 城 → 清洗后 223 城 → 剔除南半球后 **204 城**（共 142,506 个空间网格单元） |
| 时间范围 | 2017–2019 三年 × 白天/夜间双时相 |
| 特征维度 | 2,178 维（UHI 7 天滑动平均时间序列） |
| 聚类方法 | 两阶段：SOM 自组织映射（降维）→ K-means（聚类） |
| 聚类方案 | K = 5 / 12 / 20 / 26 四组对照 |
| 城市形态指标 | 建筑高度/密度/容积率、冠层、绿地、水体/山体距离等 10+ 项 |
| 主要产出 | 聚类结果 Shapefile、热岛曲线图、形态指标空间分布图 |

## 2. 研究背景与目标

**城市热岛**是指城市建成区气温显著高于周边郊区的现象。本项目不只看「哪座城市热」，而是想回答两个问题：

1. **全球城市的昼夜热岛规律有没有共性模式？** —— 用聚类把 204 座城市在 2017–2019 三年间白天/夜间的热岛变化曲线分成几类「格局」；
2. **城市形态如何影响热岛强度？** —— 把聚类结果与建筑、冠层、水体、绿地、山体等形态指标叠合分析，找出「哪些建设方式让城市更热 / 更凉」。

具体研究目标：

1. 处理 2017–2019 三年、白天/夜间两个时相的城市热岛滑动平均时间序列数据；
2. 用 **SOM** 将高维热岛时间序列映射到低维神经元网格，提取每个空间单元的最佳匹配单元（**BMU**）；
3. 对 SOM 神经元权重做 **K-means** 聚类，考察 K = 5 / 12 / 20 / 26，划分热岛格局类型；
4. 用**分区统计（Zonal Statistics）**计算建筑、冠层、水体、绿地、山体等城市形态指标；
5. 将聚类结果与形态指标合并，完成空间可视化与影响因素分析。

## 3. 方法与流程总览

> 遇到生词别慌，先看文末[术语速查](#附录术语速查)。核心链路其实只有三步：**算热岛 → SOM+K-means 分类 → 叠合形态指标找规律**。

\`\`\`
全球影像 + 城市边界
   │  ① 预处理：逐日 UHI = 建成区 LST − 草地 LST，再做 7 天滑动平均
   ▼
UHI 滑动平均时间序列（每样本 2,178 维）
   │  ② SOM 把高维序列映射到 1,890 个神经元 → 每个网格得到 BMU 坐标
   ▼
   │  ③ 对神经元权重做 K-means（K = 5/12/20/26）
   ▼
每个空间网格的「聚类标签」
   │  ④ 分区统计算出形态指标 → 与聚类结果合并
   ▼
热岛格局类型图 + 城市形态对热岛的影响分析
\`\`\`

整体流程共 **五个阶段**，每个阶段对应 \`coding/\` 下的一个 Notebook/脚本：

| 阶段 | 文件 | 目的 | 主要产出 |
|------|------|------|----------|
| ① 数据预处理 | \`a_data_process.ipynb\` | 原始影像 → 城市热岛滑动平均时间序列 | 白天/夜间 UHI 序列 CSV |
| ② SOM + K-means 聚类（主流程） | \`b_SOM_kmeans_process.ipynb\` 及其 NEW / discord 变体 | 降维 + 聚类，输出各 K 值标签 | 聚类标签 CSV、SOM 模型、神经元权重 |
| ③ 形态指标分区统计 | \`c_Bui&Cano_data_zonalst.ipynb\` + \`e_Cost_DistWB.py\` | 建筑/冠层/水体/绿地/山体指标 | 各城市形态指标统计表 |
| ④ 合并与可视化 | \`d_zonalst&cluster_merge_visual.ipynb\` | 聚类 + 指标合并，制图 | Shapefile、空间分布图 |
| ⑤ 验证（辅助） | \`验证.ipynb\` | 对比本机与老师产出一致性 | 差异率为 0 的校验结果 |

> 另有 \`CFA可视化.ipynb\`（CFA 结果可视化）为辅助脚本；\`main.py\` 是 PyCharm 新建项目的占位文件，无实际逻辑，可忽略。

<!-- details -->

## 7. 变量定义

| 变量 | 含义 / 公式 |
|------|-------------|
| \`MEAN\` | 建筑高度（Building Height, m） |
| \`Buidensity\` | 建筑密度 = 建筑面积 / 用地面积 = Count × (10m × 10m) / cell(m²) |
| \`FAR\` | 容积率 = 建筑密度 × 建筑高度 / 层高 = \`Buidensity\` × \`MEAN\` / 3 |
| \`Candensity\` | 植被覆盖密度 = 植被面积 / 总面积 = Count × (25m × 25m) / cell(m²) |
| \`CanovRatio\` | 冠层体积比 = 冠层密度 × 植被高度 = \`Candensity\` × \`MEAN_2\` |
| \`Cluster\` | 聚类标签，最终方案 K = 5 / 12 / 20 / 26 |
| \`Place\` | 城市标签（label） |
| \`Place ID\` | 每个城市内部的编号 |
| \`Sum ID\` | 全样本编号 |
| \`City Name\` | 城市名 |
| \`Hemisphere\` | 所在半球 |

> \`Count\` 为网格内像元个数，\`cell\` 为网格面积；建筑像元 10 m、冠层像元 25 m；\`MEAN_2\` 为植被（冠层）高度。

## 8. 核心数据与产出

| 文件 | 说明 |
|------|------|
| \`223_cities_combined_moving_ave_cluster.csv\` | 2,178 维热岛滑动平均特征 + 坐标/城市信息 + K_5/K_12/K_20/K_26 聚类标签 |
| \`223_cities_som_clustered_data.csv\` | 2,178 维特征 + \`Neuron_Coordinates\`（SOM 神经元坐标） |
| \`223_cities_combined_moving_ave_cluster_sort_xy.*\` | 精简后的聚类结果 Shapefile（X/Y/Place/City/Cluster） |
| \`BMUs.npy\` | 142,506 个空间单元 → 二维神经元坐标映射 |
| \`node_weights.npy\` | 1,890 个 SOM 神经元 × 2,178 维特征权重 |

**关键规模参数**：

- **样本**：最终 204 城（269 → 清洗 223 → 剔除南半球后 204，仅北半球），共 **142,506** 个空间网格单元；
- **特征维度**：**2,178** 维（2017–2019 年 × 白天/夜间 × 滑动平均），列名形如 \`gf_Day2017_001_to_gf_Day2017_007\`、\`gf_Nit2019_359_to_gf_Nit2019_365\`（\`Day\` 白天、\`Nit\` 夜间）；
- **SOM 规模**：1,890 个神经元；
- **聚类方案**：K = 5 / 12 / 20 / 26 四组对照。
`,Yc=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/99.jpg"
---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_1.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_2.mp4"></video>
</div>

---
`,Qc=`---
id: "04"
slug: "local-climate-zones-urban-heat-resilience"
title: "Local Climate Zones and Urban Heat Resilience"
category: "GIS & Spatial Analysis"
year: "2025-present"
description: "美国不同气候区的实证研究"
tech: ["GIS","Spatial Analysis"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/99.jpg"
---
# 效果展示
“局部气候区与城市热岛效应韧性：纽约实证研究”

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Local%20Climate%20Zone.mp4"></video>
</div>

> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告

## 更新后的版本
随着气候变化不断加剧，深入理解城市环境中的热韧性（Heat Resilience, HR）对于建设气候韧性城市至关重要。尽管已有大量研究探讨城市形态与城市热岛效应（Urban Heat Island, UHI）之间的关系，但针对热韧性的研究仍相对有限，许多研究仅关注单次极端高温事件。此外，如何将复杂的城市形态研究结果转化为实际可行的城市规划政策，仍然面临挑战。<br>

局部气候区（Local Climate Zones, LCZ）提供了一种基于热环境特征的城市形态分类方法，对于政策制定者而言更加直观易懂。然而，现有大多数LCZ研究仍主要关注城市热岛效应，对热韧性的关注较少。本研究旨在弥补这一研究空白，探讨美国五个主要气候区中LCZ与热韧性之间的关系。基于美国能源部（DOE）Building America项目划分的不同气候区进行比较，进一步分析不同气候区在能源消耗和建成环境特征方面的差异，以及这些差异如何导致LCZ表现出共同特征与区域差异。<br>

热韧性被定义为极端高温天气与正常高温天气之间地表温度（Land Surface Temperature, LST）的差值。**使用1990—2019年的气温数据，并依据气温第85百分位确定高温事件；同时使用2013—2019年的Landsat 8遥感影像，在去除云层后筛选云量最低的影像以获取相应的LST观测数据，**结合LCZ地图、GIS数据和人口普查区（Census Tract）信息，通过空间面板模型评估不同LCZ类型及大尺度景观因素对不同气候区热韧性的影响。考虑到不同气候区之间存在显著的温度差异，研究进一步揭示了各气候区在热韧性影响方面的显著差异。<br>

在2013—2019年期间，通过筛选云量最低的遥感影像，研究依据气温百分位数确定了三组极端高温与正常高温事件。分析结果表明，与LCZ 2（紧凑型中层建筑）相比，LCZ 1（紧凑型高层建筑）和LCZ 4（开放型高层建筑）显著提高热韧性，而LCZ 3（紧凑型低层建筑）则降低热韧性。<br>

在不同气候区中，我们假设温度和湿度的差异会导致LCZ产生不同的热韧性响应，并表现出不同程度的敏感性。研究选取纽约市作为湿润大陆性气候区（CZ-MixedHumid）的代表城市、西雅图作为海洋性气候区（Marine）的代表城市、洛杉矶作为炎热干燥气候区（Hot-Dry）的代表城市、芝加哥作为寒冷气候区（Cold）的代表城市，以及休斯顿作为炎热湿润气候区（Hot-Humid）的代表城市，以探究不同气候区之间相似与不同的热韧性模式。这些差异源于各城市独特的温度和湿度特征，以及风环境的影响，从而使不同LCZ区域呈现出不同的热韧性动态。<br>

尽管不同区域之间存在差异，但在正常高温天气具有较高温度，以及从正常高温天气到极端高温天气出现显著温度升高的情况下，LCZ 1、LCZ 2、LCZ 3和LCZ 4在极端高温事件中均表现出较强的热韧性强度。这些研究结果为城市规划者和政策制定者建设具有热韧性的城市提供了有价值的参考，并表明可以将LCZ框架纳入不同气候区的气候适应策略与城市治理体系。<br>

**关键词：** 热韧性、气候区、局部气候区<br>

**主题类别：** WELL BEING_热环境<br>
`,Jc=`---
id: "03"
slug: "previous-planning-research"
title: "Previous Planning Research"
category: "Urban Planning Research"
year: "2020-2025"
description: "硕士期间参与的5项研究课题、AI for Cities夏令营及联合国人居署项目综述"
tech: ["Urban Planning","AI","Machine Learning","Knowledge Graph","Climate Resilience"]
abstract: "硕士期间总共参与了5项研究课题，参加了一场AI for Cities的夏令营，同时也加入联合国人居署项目×首尔大学研究课题。其中四项研究分别在全球国际会议上发表。"
challenge:
solution:
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/99.jpg"
---
共参与负责 **5 项研究课题**，2场 **AI for Cities 夏令营**，同时加入 **联合国人居署项目 × 首尔大学** 研究课题。

---

## 国际会议发表

### [NEUROTOPIA- Decentralized future urban design based on the biological characteristics of neurons](#/planning/neurotopia)<br>
*NEUROTOPIA——基于神经元生物学特性的去中心化未来城市设计*

> 2024.10 · 韩国春川  Urban Design Institute of Korea (UDIK) Autumn Conference · 口头报告

### [Knowledge Graph Generation from Urban Planning Texts](#/ai/knowledge-graph-urban-planning)<br>
*基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析*

> 2025.2 · 第39届 AAAI 城市规划人工智能研讨会 · 海报展示

> 2025.6 · 英国伦敦 CUPUM 计算城市规划与城市管理会议 · 口头报告

> 2025.7 · 中国厦门 第19届 IACP 国际中国规划协会会议 · 口头报告

### [Local Climate Zones and Urban Heat Resilience](#/planning/local-climate-zones-urban-heat-resilience)<br>
*局部气候区与城市热岛效应韧性：纽约实证研究*

> 2025.4 · 加拿大温哥华 第52届 ICUA 国际城市事务会议 · 口头报告

### [Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning](#/ai/urban-heat-resilience-machine-learning)<br>
*利用机器学习评估城市形态对不同尺度下热韧性的非线性影响*

> 2025.10｜美国·明尼阿波利斯｜第65届 ACSP 美国大学规划学院协会会议｜口头报告

> 2025.06｜英国·剑桥｜学术交流研讨会｜口头报告

> 2025.05｜美国·佛罗里达大学 AI Cities 研讨会｜口头报告（线上）

> 2026.02｜新加坡｜第40届 AAAI 城市规划人工智能研讨会｜海报展示

### [Nonlinear Impacts of Urban Form on Surface Urban Heat Island under Different Weather Conditions in Seoul](#/ai/urban-heat-resilience-machine-learning)
利用机器学习评估首尔城市形态在不同天气下热韧性的非线性影响

> 2026.07｜中国·西安｜第20届 IACP 国际中国规划协会会议｜口头报告

> 2026.07｜韩国·首尔｜毕业论文

---
## [ 校园公共空间活力建模：基于对户外环境与人群活动的实时跟踪](#/ai/campus-public-space-vitality-modeling)
*Modeling the vitality of public spaces on campus: tracking outdoor environments and activities in real time*

> 2023.6｜上海同济大学| Architectural DigitalFUTURES 2023 同济夏令营｜成员

## [Participatory Urban Regeneration Empowered by AI](#/ai/participatory-urban-regeneration-empowered-by-artificial-intelligence) <br>
*AI for Cities 夏令营 · 人工智能赋能下的参与式城市更新*

> 2025.7 ｜上海同济大学｜作为数据组组长参与工作坊

---

## 联合国人居署项目 × 首尔大学

> 中日韩城市扩张和城市收缩 SDGs 议题 [跨国多高校合作]
> [CityEnergyLab — UN Projects SIT Index for East Asia](https://cityenergylab.cafe24.com/un-projects-sit-index-for-east-asia-from-urban-diagnostics-to-expanding-toward-asia/)

---
`,et=`---
id: "08"
slug: "heatmapper"
title: "HeatMapper - Global Heat Monitoring"
category: "urban heat island, extreme heat, participation"
year: "2025-present"
description: "面向全球热监测与可视化的Web平台"
tech: ["React","Three.js","D3.js","Node.js"]
abstract: "HeatMapper is a comprehensive web platform designed to monitor and visualize global heat patterns. It provides real-time data on urban heat islands, extreme heat events, and temperature trends across different regions. The platform aims to raise awareness about heat-related issues and support informed decision-making for urban planning and climate adaptation."
challenge: "Integrating real-time temperature data from multiple sources and presenting it in an intuitive, interactive visualization that allows users to explore heat patterns at different scales."
solution: "Developed a responsive web application using React for the frontend, Three.js for 3D visualizations, D3.js for data visualizations, and Node.js for the backend. Implemented data integration pipelines to aggregate temperature data from various sources and created interactive maps and charts for user exploration."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/99.png"
---
HeatMapper is a comprehensive web platform designed to monitor and visualize global heat patterns. It provides real-time data on urban heat islands, extreme heat events, and temperature trends across different regions. The platform aims to raise awareness about heat-related issues and support informed decision-making for urban planning and climate adaptation.

Integrating real-time temperature data from multiple sources and presenting it in an intuitive, interactive visualization that allows users to explore heat patterns at different scales.

Developed a responsive web application using React for the frontend, Three.js for 3D visualizations, D3.js for data visualizations, and Node.js for the backend. Implemented data integration pipelines to aggregate temperature data from various sources and created interactive maps and charts for user exploration.
`,ct=`---
id: "01"
slug: "dragon-diffussion"
title: "Dragon Diffussion - AI 创意生产平台"
category: "UI&UX Design"
year: "2023.10-2024.9"
description: "一款基于AI的图像生成工具，可将文本提示转化为高质量视觉内容的平台。"
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/99.jpg"
---
<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-Demo.mp4"></video>
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion.mp4"></video>
</div>

## 技术【Stable Diffusion XL】【ControlNet】【LoRA】【Stable Diffusion lighting】

## 那个时代发生了什么？
Stable Diffusion XL (SDXL)刚成为主流。ComfyUI 刚刚开始火。ControlNet 很火。LoRA 开始普及。Agent 这个词刚开始进入 AI 产品。所以那个时候大家最大的痛点不是：画不好。而是：怎么把几十个 AI 能力串起来。于是就出现了：Task→Node→Pipeline→Canvas→Layer这种设计。其实和今天 ComfyUI 很像。

## 为什么会做 Node？
因为当时：一个 Prompt 根本不够。例如：帮我设计一个电商海报。AI不会直接生成最终结果。而是：需求→拆解→背景→主体→Logo→字体→局部修改→导出。所以：Workflow才是真正重要的。

## 为什么研究 LoRA？
因为那时候：基础模型能力有限。想画：某个品牌/某种IP/某种风格怎么办？训练 LoRA。所以很多公司：每天都在：训练→测试→Bad Case→重新训练。
## 为什么 Infinite Canvas（无限画布）那么重要？
因为那个时代：生成一张图以后。不能像今天 Flux Kontext一样：一句话：把衣服换成红色。当时只能：重新生成。或者：局部重绘。于是：无限画布就变成：AI Photoshop。

## 2024.2 Dragon Diffusion遇到了什么问题？
Stability AI 于 2024 年 2 月正式发布了新一代文生图模型 Stable Cascade。该模型基于 Würstchen 架构，采用独特的三阶段扩散方法，在图像质量、文字理解和生成速度上超越了以往的 SDXL，同时大幅降低了对硬件显存的要求。
产品定位也发生了变化。以前：Dragon是：AI画图,后来变成：AI设计工具,再后来：这里已经变成：中国产业视觉大模型。这是完全不同的定位。
所以我们开始讨论：普通人到底能不能用？ToC：自己装修、自己设计、自己印刷。其实就在找：真正能传播出去的场景。
# PPT 汇报

---
`,tt=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/99.jpg"
---
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/AnyReal.mp4"></video>
</div>

技术【Stable diffusion】【ControlNet】【Blender】

## 这个项目是基于一个真实的商业需求。
以前的商品的背景很假，怎么样能够将真实的商品放到真实的背景中，并且可以调整角度和镜头。2023年的时候，利用ControlNet的 Depth（深度图） 和 NormalMap（法线贴图） 将3D软件（如Blender、SketchUp）中导出的低模或白模结构精准“锁定”，在二次渲染或文生图时保留3D资产的空间构图与立体轮廓。 

## AnyReal 当时流程
电商卖家上传商品 3D 模型→调整：光照/相机角度/场景/材质→渲染→生成营销图片
所以那个时代很多团队都会用AI + 3D 而不是今天的AI + Inpainting
而 FLUX.1 是 2024 年 8 月 1 日才发布。也就是说：
项目开始的时候，Flux 甚至还没正式发布。
就算发布了，当时也只是第一版 FLUX.1，主要能力还是文生图（Text-to-Image），成熟的图片编辑工作流还没有形成。
真正让很多团队开始大量使用 Fill（Inpainting）、Redux、Depth、Canny 等编辑能力，是 2024 年 11 月发布 FLUX.1 Tools 之后。

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

## 3. AI 生图「三步法」

1. **商品上传**：上传商品 3D 模型，环拍视频启动 AI 训练。
2. **场景创建**：从海量场景模板库中选择。
3. **参数调节**：选择商品摆放角度与大小，生成高真实度场景图。

### AnyReal 三大自研优势

| 优势 | 说明 |
| --- | --- |
| **真实场景** | 使用真实场景图而非 AI 生成场景，最终效果更具真实感 |
| **可控可调** | 光影、比例、角度算法自适应，且支持手动精准调整 |
| **添加模特** | 可生成 AI 模特与家具的交互，真实生活气息强 |

<!-- details -->

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
`,at=`---
id: "03"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "一款基于AI的图像生成工具，可将文本提示转化为高质量视觉内容的平台。"
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/99.jpg"
---
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Genshot.mp4"></video>
</div>
`,nt=`---
id: "04"
slug: "genstyle"
title: "Genstyle - Daily Outfit Inspiration Delivered"
category: "UI&UX Design"
year: "2025"
description: "一款基于AI的时尚应用，根据用户偏好与潮流趋势策划每日穿搭灵感。"
tech: ["Figma","React","TypeScript"]
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/99.jpg"
---
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/genstyle.mp4"></video>
</div>
`,bt=`---
id: "05"
slug: "riffle-ai-game-generation-tool"
title: "Riffle - AI game Generation Tool"
category: "UI&UX Design"
year: "2026"
description: "一款基于AI的游戏生成工具"
tech: ["Figma","React","TypeScript"]
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/logo.jpg"
hasDemo: true
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/99.jpg"
---
Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease.

# 项目网页链接
https://www.riffle.games/

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Riffle.mp4"></video>
</div>

---
`,pt=`---
id: "06"
slug: "bazi-fengshui-analysis"
title: "Bazi - Fengshui Analysis Application"
category: "UI&UX Design"
year: "2025"
description: "基于用户出生数据与环境因素提供个性化AI风水洞察的应用。"
tech: ["Figma","React","TypeScript"]
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/99.jpg"
---
This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner.
`,it=`---
id: "07"
slug: "early-campus-experience"
title: "早期校园经历 — 1037拼拼 & persLEARN"
category: "UI&UX Design"
year: "2023-03-01~2024-03-01"
description: "本科期间在华科Pivot Studio的校园产品设计与实践，涵盖校园拼团平台与论文文献平台。"
tech: ["Figma","React","TypeScript"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/99.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/99.jpg"
---
## 1037拼拼
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/1037pinpin.mp4"></video>
</div>

## 康零Counting - 智能零件计数与数据平台 
项目时间：2022.6 - 2023.8
•	康零是面向汽车零部件加工企业的智能零件计数系统，通过机器视觉实现高速计数，并提供生产数据可视化、异常预警及分析能力。
•	参与工业智能制造产品规划, 负责商业计划书中产品方案设计, 完成产品定位、市场分析、商业模式及发展规划等内容输出。
•	负责 App/小程序产品原型设计, 规划生产数据实时监控、可视化看板、异常预警等功能, 构建设备端与数据平台协同方案。
•	项目获中国国际”互联网+”大学生创新创业大赛智能制造及其他产业赛道湖北省铜奖（武汉市银奖）。

## persLEARN — 论文文献平台
项目时间：2023年

persLEARN 是我在本科期间参与的另一个教育类产品设计项目，旨在通过互动模块帮助学生培养科学思维能力。

---
`,rt=`---
id: "08"
slug: "scendance"
title: "幕景 Scendance - AI 活动布置工作台"
category: "AI Product"
year: "2026.10.1-2026.10.4"
description: "一款把平面图、真实尺寸物料库和 AI 方案生成串起来的三维活动布置工作台。"
tech: ["Next.js","React","TypeScript","Supabase","Cloudflare Pages"]
abstract: "幕景 Scendance 是一款面向活动策划与场地布置的 AI 工作台。它把平面图变成可编辑的场地，用真实尺寸的物料库摆放桌椅、吧台、舞台等道具，并支持用一句需求让 AI 生成布置初稿；方案可以云端保存，由同一工作室的成员协作编辑。"
challenge: "活动布置的沟通成本集中在「场地尺寸」和「道具清单」两件事上：平面图只有约定俗成的标注，物料表又是另一份文件，客户、策划和执行的版本经常对不上。要在有限的制作周期内把这些信息收敛到同一个可编辑的三维场景，同时保证多人协作时不会互相覆盖。"
solution: "以场地 + 物料为核心数据模型：平面图作为尺寸证据被引用，场地以矩形或多边形表示并校验顶点、面积和出入口位置；物料按真实尺寸入库，场景中的每件物件都有唯一实例编号。AI 方案生成、预算上限和制作计划都挂在同一份场景数据上，编辑权以交接的方式在成员之间流转，断网时草稿本地保留、恢复后与云端版本比对。"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/99.jpg"
---
# 项目网页链接

https://scendance-scene-planner-ewz.pages.dev

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Scendance.mp4"></video>
</div>

# 产品定位

幕景（Scendance）是一款面向活动策划与场地布置的 AI 工作台，用来解决「场地信息、道具清单、布置方案各说各话」的问题。

它把三件事放进同一个界面：把平面图整理成可编辑的场地，从真实尺寸的物料库里摆放道具，再让 AI 按需求生成一版布置初稿。方案本身是一份结构化数据，所以既能在三维视图里调整，也能直接导出成清单交给执行团队。

# 核心能力

## 1. 平面图 → 可编辑场地

- 平面图作为尺寸来源被引用，标注的墙线需要关联到具体来源图片，避免尺寸凭空出现。
- 场地支持矩形与多边形两种形态，顶点不能自相交，面积与长宽高会被校验。
- 出入口必须落在场地边界上，且具有唯一编号，方便和现场核对。

## 2. 真实尺寸的物料库

- 物料按真实尺寸建模：前台、会议桌、卡座、休憩椅、吧台、冷藏柜、化妆台、会议显示屏、绿植等。
- 场景中的每件物件都有唯一实例编号，可携带备注与需求，普通场景上限 50 件物件。
- 摆放好的物件可以整体导出为物料清单，用于报价与制作。

## 3. AI 方案生成

- 在空白场景里描述需求，就能生成一版布置初稿；已有方案时走「修改方案」而不是重新生成。
- 支持图生模型与纹理模式，用于把现场照片或参考图里的道具转成可用的三维素材。
- 生成任务带有并发与额度控制：同一场景同时只处理一个生成请求，工作室有每日 AI 额度上限。

## 4. 工作室协作与编辑权

- 工作室成员共享云端项目，成员账号 ID 唯一，负责人拥有分配与移除权限。
- 编辑权一次只由一位成员持有，可以主动交接；编辑权到期或页面切换时会提示并保留草稿。
- 云端版本变化、连接中断、登录失效等情况都会保留本地草稿，避免编辑成果丢失。

## 5. 资料校验与预算上限

- 活动资料、制作计划、尺寸记录都有编号查重与完整性校验。
- 预算上限必须说明覆盖范围与依据，避免出现没有口径的数字。

<!-- details -->

# 工程实现

- 前端：Next.js（App Router）+ React + TypeScript，桌面端工作台式布局。
- 数据：Supabase（Postgres）承担账号与云端资料，公有 anon / publishable key 之外的操作一律走服务端。
- 部署：Cloudflare Pages，配合边缘网络做静态资源分发。
- 离线优先：本地活动资料与云端场地关联分开保存，未配置云端连接时工作台仍可使用。
`,st=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/99.png"
---
<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/NamelessRoad.mp4"></video>
</div>

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
`,dt=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/99.jpg"
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
`,gt=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/99.png"
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

<!-- details -->

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
`,ot=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/99.png"
---
# 广州心源科技有限公司（Bilibili 游戏子公司）

## 项目时间

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/bilibili_2.mp4"></video>
</div>

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

同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。
`,lt=`---
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
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/99.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/21.png"
---
## 一个人怎么做游戏

这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。

### 为什么把这两个内容合并？

指萝卜本体是一个微信小游戏项目，而下面这部分是同一套开发路径的复盘，记录了从设计、开发到上线的完整过程。

<!-- details -->

### 微信小游戏项目结构

打开微信开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![下载页面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/15.png)

下载到本地，如果在本地，可以看到。

![微信开发者工具界面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/13.png)
![微信开发者工具项目结构](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/14.png)

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

## 其它说明
ios运行请在小游戏后台开通高性能+模式, 操作方法: 功能->游戏能力地图->研发能力->生成提效包->高性能模式
`,ft=`---
id: "01"
slug: "prompt-engineering-agentic-rag"
title: "Prompt Engineering · Agentic RAG 城市规划知识库"
category: "AI / Agentic RAG"
year: "2025-present"
description: "面向城市规划的 Agentic RAG 原型：结合规划知识库、Prompt Engineering、向量检索与多 Agent 工具调用"
tech: ["LLM","Prompt Engineering","RAG","Agentic RAG","LangChain","Chroma","Embedding","Python"]
abstract: "我独立设计并实现了一个面向城市规划的 Agentic RAG 原型，将规划知识库、Prompt Engineering、向量检索和多 Agent 工具调用结合，用于处理主题检索、时间信息分析及跨城市规划比较。"
challenge: "基础 Naïve RAG 只能做简单检索，难以处理城市规划中主题、城市、时间与 Initiative 等多维度信息。"
solution: "围绕主题、城市、时间与 Initiative 设计专用检索与比较工具，使系统从 Naïve RAG 扩展为多工具协调的 Agentic RAG 原型。"
hasDemo: false
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/99.jpg"
---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/agentic-rag.mp4"></video>
</div>

# 项目概述

我独立设计并实现了一个面向城市规划的 Agentic RAG 原型，将规划知识库、Prompt Engineering、向量检索和多 Agent 工具调用结合，用于处理主题检索、时间信息分析及跨城市规划比较。

## 个人贡献
独立完成项目选题、规划数据整理、知识库设计、RAG 架构设计、Prompt Engineering、工具定义、Agent Workflow、案例分析及最终展示。围绕城市规划中的主题、城市、时间与 Initiative 信息，设计专用检索与比较工具，使系统从基础 Naïve RAG 扩展为具备多工具协调能力的 Agentic RAG 原型。

## 技术栈
LLM / GPT-4o-mini · Prompt Engineering · RAG · Agentic RAG · LangChain · Chroma / Vector DB · Embedding · Structured Output / JSON · Python

## 效果展示

---
`,ut=`---
id: "02"
slug: "knowledge-graph-urban-planning"
title: "城市规划文本知识图谱生成与多模型评测"
category: "Knowledge Graph"
year: "2025-present"
description: "纽约和上海总体规划中气候变化适应的比较分析"
tech: ["Knowledge Graph", "NLP", "Python", "LDA", "BERT", "HuggingFace", "GPT-4 API", "Embedding Models", "Qwen3", "Multilingual-E5", "BGE-M3", "Cosine Similarity", "NetworkX"]
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to generate and compare the edges connecting these nodes. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city learning for climate resilience."
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.jpg"
---
# 城市规划文本知识图谱生成与多模型比较
## Knowledge Graph Generation from Urban Planning Texts
### ——纽约与上海城市规划文本中的气候变化适应比较

# 效果展示

“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” 

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/KnowledgeGraph.mp4"></video>
</div>

github 仓库链接
https://github.com/LiliLIN0324/Knowledge_Graph

---

## 项目概览

城市规划文本通常篇幅较长，包含大量政策、规划目标、空间策略与专业概念。当我们需要比较不同城市的规划文本时，仅依靠关键词频率很难回答：**不同城市真正关注哪些核心议题？这些议题之间又存在怎样的关系？**

本项目尝试使用 **Knowledge Graph（知识图谱）** 将城市规划文本中的核心概念及其语义关系进行结构化表达，并进一步比较不同模型在知识图谱生成任务中的表现。

项目以 **纽约市与上海市的城市规划文本** 为研究对象，聚焦 **Climate Change Adaptation（气候变化适应）** 与 **Urban Planning（城市规划）**，并设计了从传统 Topic Modeling 到 BERT、LLM、Embedding Model 的多种知识图谱生成方法。

---

## 01 · 研究问题

本项目主要围绕两个问题展开：

- **Knowledge Graph 能否帮助我们识别并比较不同城市规划文本中的核心概念与语义关系？**
- **不同类型的 NLP / AI 模型，在城市规划知识图谱生成任务中各有什么优势与局限？**

为了回答这些问题，我设计并比较了四类方法：**LDA → Fine-tuned BERT → GPT-4 → Embedding Models**。不仅比较模型最终生成的知识图谱，也从语义理解能力、跨语言能力、节点/关系识别能力、可解释性、计算效率、可扩展性、实际应用成本等维度分析不同方法。

---

## 02 · 知识图谱设计

为了让不同城市的规划文本能够在同一个框架下进行比较，我首先定义了一个由 **10 个核心概念节点**组成的领域知识框架。

### 气候变化适应

- Resilience
- Adaptive Capacity
- Vulnerability Assessment
- Climate Proofing
- Ecosystem-based Adaptation

### 城市规划

- Zoning
- Land Use Planning
- Urban Design
- Transportation Planning
- Sustainable Development

这些概念作为两个城市规划文本的共同语义框架。

---

## 03 · Knowledge Graph 如何表示规划文本？

本项目中的知识图谱不仅关注“一个概念有没有出现”，还进一步计算：

### Node Weight · 节点权重

节点权重表示某个概念在规划文本中的重要程度。例如，**Resilience** 若与大量句子具有较高的语义相似度，其 Node Weight 就相对较高——**节点越大，表示该概念在文本中越重要**。

---

### Edge Weight · 边权重

边权重表示两个概念之间的关联强度。例如，**Resilience ↔ Climate Proofing** 若经常共同出现且在语义空间中关联较强，其 Edge Weight 就更高——**边越粗，表示两个概念之间的关系越强**。

最终形成的 Knowledge Graph 可同时表达“什么概念重要”，以及“这些概念之间如何关联”。

---

# 10 · 实验结果

## NYC vs. Shanghai

实验结果显示，两个城市存在一些共同关注的概念，例如 Climate Proofing、Adaptive Capacity、Sustainable Development、Resilience，但不同方法也识别出了两个城市之间的不同侧重点。

### New York City

模型结果中较明显的概念包括 Resilience、Climate Proofing、Adaptive Capacity、Ecosystem-based Adaptation、Zoning、Urban Design，整体上更突出 **Resilience / Equity / Climate Adaptation**。

### Shanghai

模型结果中较明显的概念包括 Sustainable Development、Resilience、Land Use Planning、Transportation Planning、Urban Planning、Zoning，整体上更突出 **Sustainable Development / Balanced Urbanization**。

---

# 14 · 项目总结

本项目构建了一套面向城市规划文本的 Knowledge Graph Generation Framework，并比较了 **LDA → Fine-tuned BERT → GPT-4 → Embedding Models** 四类不同的文本语义建模方法。

最终通过 Knowledge Graph 将规划文本中的 **Concept Importance + Semantic Relationships** 进行结构化表达，并进一步用于比较纽约与上海在气候变化适应及城市规划议题上的差异。

从模型比较来看，**传统 Topic Modeling 更简单，但语义表达能力有限；BERT 可以进行领域适应；LLM 具有更强的上下文理解能力，但存在黑盒、成本与幻觉问题；Embedding Models 则在大规模文本处理、跨语言语义表示和批量计算方面具有较好的可扩展性。** 因此，本项目最终并没有试图寻找一个“万能模型”，而是希望建立一个**根据任务目标选择模型，并通过结构化表示与人工验证提高结果可靠性的分析框架**。

---

## My Contribution

### Research

* 定义城市规划文本知识图谱生成问题
* 设计研究框架与模型比较方案
* 设计 10 个领域核心概念节点
* 选择 NYC 与 Shanghai 作为比较对象

### NLP / AI

* 实现 LDA Topic Modeling
* Fine-tune Multilingual BERT
* 设计 GPT-4 API Prompt 与评分机制
* 调用并比较 Qwen3 / E5 / BGE-M3 / Gemini Embedding

### Knowledge Graph

* 设计 Node Weight 计算方法
* 设计 Edge Weight 计算方法
* 融合 Semantic Similarity 与 Co-occurrence
* 使用 NetworkX 构建与可视化 Knowledge Graph

### Evaluation

* 建立多模型横向比较框架
* 分析不同模型的优势与局限
* 比较 NYC / Shanghai 的知识结构差异
* 设计 Expert Validation 流程

> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>

> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!
> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告
---

<!-- details -->

# 04 · 方法一：LDA Topic Modeling

第一种方法采用传统的 **Latent Dirichlet Allocation（LDA）**：首先对城市规划文本进行预处理，识别与 Climate Adaptation、Urban Planning 相关的主题，再将其映射到预定义的 10 个核心概念。

### 节点权重

通过主题与固定概念之间的语义相似度估计节点的重要程度。

### 边权重

通过不同主题 / 子节点之间的共现关系估计概念之间的关联程度。

### 优势

- 实现简单
- 计算成本较低
- 能够快速识别基础词汇模式

### 局限

- 主要依赖词频与主题分布
- 对上下文理解有限
- 难以充分表达复杂语义关系

---

# 05 · 方法二：Fine-tuned BERT

第二种方法使用 **Multilingual BERT**，尝试通过领域文本训练提升模型对城市规划语境的理解能力，模型采用 **Masked Language Modeling（MLM）** 进行 Fine-tuning。基本流程为：

\`\`\`text
Planning Documents
        ↓
Text Chunking
        ↓
Random Masking
        ↓
Fine-tuned Multilingual BERT
        ↓
Sentence / Concept Embeddings
        ↓
Cosine Similarity
        ↓
Node / Edge Weights
        ↓
Knowledge Graph
\`\`\`\`

### Node Weight

首先获取模型最后隐藏层的 Mean Pooling 向量，随后对概念与文本句子进行向量化、归一化，计算 Cosine Similarity，并对句子层面的相似度进行平均，最终得到节点的重要性分数。

### Edge Weight

通过比较模型训练前后两个概念关系的语义相似度变化，估计概念之间的关系强度。

---

# 06 · 方法三：Direct LLM

第三种方法直接使用 **GPT-4 API** 对规划文本中的概念及关系进行评分。与前两种方法相比，它不再依赖传统的词频或训练后的向量，而是直接利用 LLM 的上下文理解能力。例如，对于一个节点，让模型回答“Climate Proofing 在气候变化适应规划中的重要程度是多少？”，并在 **0.1–1.0** 的范围内给出评分；对于两个节点之间的关系，同样要求模型对“Resilience 与 Climate Proofing 在该规划文本中的关系有多强？”进行关系强度评分。

### 优势

* 能够理解复杂上下文
* 具有较强的跨语言能力
* 输出形式直观
* 能够直接利用 LLM 的语义推理能力

### 局限

* 存在 Hallucination 风险
* 模型具有一定黑盒属性
* API 存在成本与延迟
* 模型版本或调用结果可能产生变化

因此，LLM 方法虽然具有较强的语义理解能力，但其结果仍需要进一步验证。

---

# 07 · 方法四：Embedding Models

第四种方法采用专门的 **Text Embedding Models**，实验中比较了 Gemini Embedding、Qwen3-Embedding、Multilingual-E5、BGE-M3。整体流程为：

\`\`\`text
Planning Documents
        ↓
Text Chunking
        ↓
Embedding
        ↓
Cosine Similarity
        ↓
Node Weight
        ↓
Edge Weight
        ↓
Knowledge Graph
\`\`\`

---

## Embedding 模型选择

在模型选择阶段，我综合考虑了 Zero-shot 能力、Embedding Dimensions、Memory Usage、Max Tokens、Multilingual Capability、Semantic Textual Similarity 等因素，实验中使用了 Qwen/Qwen3-Embedding-0.6B、BAAI/bge-m3、intfloat/multilingual-e5-large-instruct、Gemini Embedding。

---

## Node Weight

对于每一个固定概念：获取 Concept Embedding 与 Planning Sentence Embedding，计算 Cosine Similarity，并对所有句子的相似度进行平均，最终得到 **Node Weight = Concept 与规划文本之间的平均语义相似度**。

---

## Edge Weight

边权重同时考虑 Concept Co-occurrence 与 Semantic Similarity，计算形式为 \`edge_raw = α × co-occurrence + β × semantic similarity\`。因此，相比单纯统计词语共同出现次数，该方法进一步加入了语义层面的信息。

---

# 08 · Knowledge Graph 构建与可视化

完成 Node / Edge Weight 计算后，使用 **NetworkX** 构建 Knowledge Graph。

图中的节点大小表示 Concept Importance、节点颜色表示 Concept Category、边粗细表示 Relationship Strength，最终可以将两个城市的规划文本转化为结构化的知识网络。

这样就能从原本的长篇规划文本中，更直观地观察核心概念是什么、哪些概念关系最紧密、不同城市的规划关注点有什么区别。

---

# 09 · 模型比较

项目最终比较了四种不同类型的方法。

| 方法              | 优势                   | 局限                           |
| --------------- | -------------------- | ---------------------------- |
| LDA             | 简单、快速、容易实现           | 上下文理解能力有限                    |
| Fine-tuned BERT | 能够进行领域适应，具有上下文语义理解能力 | 需要 Fine-tuning，计算成本更高        |
| GPT-4           | 上下文理解与语义推理能力较强       | Hallucination、API 成本、延迟、黑盒问题 |
| Embedding       | 向量化速度快，适合大规模文本与批量处理  | 可解释性相对较弱                     |

这一比较也让我认识到：**模型并不存在绝对的“最好”，不同方法更适合不同的任务。** 关注主题发现，LDA 成本较低；需要领域适应，可用 Fine-tuned BERT；强调复杂语义理解，可用 LLM；需要处理大量文档、计算语义相似度并进一步用于 Knowledge Graph 或 Retrieval，则 Embedding Model 更具实际优势。

---

# 11 · 不同 Embedding Models 的表现

不同 Embedding 模型并没有产生完全相同的知识图谱。实验中观察到：Qwen3 生成的结果相对更加平衡，节点权重差异没有过度集中；Multilingual-E5 在 NYC 的结果中表现较好，部分重要节点具有更高的权重；BGE-M3 在 Shanghai 的结果中表现相对较好。

这说明 **Embedding Model 的选择本身也会影响 Knowledge Graph 对概念重要性与关系强度的敏感程度**。因此在实际应用中，不能简单地认为“换一个 Embedding Model 就只是换了一个向量模型”——模型选择会进一步影响下游的 **Similarity → Node Weight → Edge Weight → Knowledge Graph**。

---

# 12 · Expert Validation

为了避免完全依赖模型输出，本项目进一步加入了 **Expert Validation**。领域专家对生成的 Knowledge Graph 进行人工审核与排序，重点评价 Nodes（某些节点是否被模型高估或低估）与 Edges（不同概念之间的关系强度是否符合领域知识）。最终形成：

\`\`\`text
Planning Documents
        ↓
AI / NLP Models
        ↓
Knowledge Graph
        ↓
Human Expert Validation
        ↓
Model Comparison
\`\`\`

这一步的意义在于：**模型生成的结果并不直接等于 Ground Truth**，在规划、政策等专业领域中 Human-in-the-loop 仍然非常重要。

---

# 13 · 项目思考

这个项目让我意识到，Knowledge Graph Generation 并不是单纯的“把文本变成图”。真正困难的部分在于：

### 1. 如何定义知识？

需要先确定哪些概念值得成为 Knowledge Nodes。

### 2. 如何衡量重要性？

“一个词出现很多次”并不一定意味着它真正重要，因此需要引入 **Semantic Similarity** 来补充传统 Frequency-based 方法。

### 3. 如何定义关系？

两个概念同时出现，并不意味着一定存在强语义关系。因此本项目尝试将 **Co-occurrence + Semantic Similarity** 结合起来。

### 4. 如何评价模型？

不能只看模型输出是否“看起来合理”，还需要从**准确性、稳定性、可解释性、成本、效率、跨语言能力**等多个维度综合判断。

---
`,ht=`---
id: "03"
slug: "urban-heat-resilience-machine-learning"
title: "Assessing Urban Heat Resilience"
category: "Machine Learning"
year: "2025-present"
description: "利用可解释机器学习方法揭示城市形态因子与极端高温之间的非线性关系"
tech: ["GIS","Machine Learning"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/99.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/07.png"
---
# Research topic 1 
“利用机器学习评估城市形态对不同尺度下热韧性的非线性影响”

> 2025.10，在美国明尼阿波利斯举行的第65届美国大学规划学院协会（ACSP）会议上作口头报告
> 2026.2，在新加坡举行的第40届AAAI城市规划人工智能研讨会上作海报展示
> 2025.5.10 在线上参加佛罗里达大学组织的AI和城市工作坊
> 2025.8.7 在英国剑桥大学进行工作坊交流

## abstract: 
"Climate change has been a pressing global issue in recent decades as it increasingly influences human life through extreme weather, ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE). In addition, the results indicate that urban form factors have nonlinear relationships with urban land surface extreme heat and associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities."
challenge: "The majority of existing studies have relied on traditional regression models that assume linear relationships."
solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods."

## 4 - Research Results and Visualization

This poster summarizes the key findings of our study on urban heat resilience using machine learning approaches. The visualization demonstrates the nonlinear relationships between urban form factors and extreme heat events.

# Research topic 2
“利用机器学习评估城市形态对不同天气状况下热韧性的非线性影响”
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/GBDT2.mp4"></video>
</div>

<!-- details -->

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
`,vt=`---
id: "04"
slug: "participatory-urban-regeneration-empowered-by-artificial-intelligence"
title: "人工智能赋能下的参与式城市更新 Participatory Urban Regeneration Empowered by Artificial Intelligence"
category: "Urban regeneration, participatory urban planning"
year: "2025-present"
description: "利用AI技术构建平台以鼓励利益相关者参与城市更新"
tech: ["diffusion models"]
abstract: "This project integrates generative artificial intelligence techniques, including diffusion models, with large language model-based multi-agent mechanisms to develop a participatory urban regeneration framework that facilitates public interaction and multi-stakeholder engagement. Taking the area surrounding the initial development zone of Shanghai Wusong Innovation City as a case study, the framework incorporates urban spatial morphology, behavioral activity patterns, and urban heat island indicators into the early formulation of urban design guidelines, with the aim of achieving a participatory, efficient, and responsive pathway to urban regeneration."
solution: "https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm"
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/99.jpg"
---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/PARTICIPATORY%20URBAN%20REGENERATION%20EMPOWERED%20BY%20ARTIFICAL%20INTELLIGENCE.mp4"></video>
</div>

## 项目代码链接
https://github.com/LiliLIN0324/pur-ai

---

### 1. **这个项目解决什么问题？**

这个项目旨在利用 AI 辅助城市更新，通过城市空间数据和城市形态指标作为条件，生成符合一定空间约束和城市形态目标的设计方案，从而帮助城市更新方案进行快速探索和评估。

---

### 2. **为什么选择生成模型？**

因为目标是根据城市空间约束和形态目标，生成多个可能的城市设计方案，而不是预测一个固定结果。

---

### 3. **为什么使用 ControlNet？**

普通 Stable Diffusion 的生成自由度比较高，但对具体空间结构的控制比较弱。我们的城市更新任务对道路、建筑、水体等空间结构有比较明确的约束，所以采用 ControlNet，把城市空间条件作为额外的控制输入，在保留生成能力的同时增强对空间结构的控制。

---

### 4. **城市数据怎么变成模型输入？**

我主要负责这一侧。对不同来源的城市空间数据进行清洗、统一空间尺度和格式，并整理成模型需要的多通道 Tensor。具体训练代码中，原始数据组织为 **5 个通道：1 个语义 Mask + 4 个辅助城市数据**；之后将语义 Mask 转换为 RGB，与 4 个辅助通道组成 **7-channel Hint**，再加入额外的街道条件，形成最终的 ControlNet 条件输入。 

---

### 5. **Prompt 在这里干什么？**

Prompt 主要用于提供高层的城市形态目标。我们根据城市语义 Mask 和辅助城市数据计算绿地率、水域比例、建筑覆盖率、道路密度、FAR、开放空间比例、平均建筑高度和平均 LST 等指标，并将这些指标组织成结构化文本，再通过文本编码器得到文本条件。 

> **Hint 告诉模型“空间上怎么摆”，Prompt 告诉模型“总体上要达到什么样的城市形态”。**

---

### 6. **生成以后怎么判断结果好不好？**

目标指标 → Prompt → 生成 → RGB 转 Mask → 重新计算城市形态指标 → Target vs Generated。

---

### 7. **你们做过哪些关键实验/改进？为什么？**

我们主要做了几方面的改进：

* **预训练 ControlNet 微调**：基于已有模型进行城市领域微调，而不是从头训练。
* **LoRA 微调**：支持通过 LoRA 进行参数高效微调。
* **多通道城市条件**：将语义 Mask 和 4 个辅助城市数据组成 7-channel Hint。
* **街道条件增强**：从语义 Mask 中提取道路类别，形成额外的 3-channel Street Condition，与 7-channel Hint 合并形成 10-channel ControlNet 条件。
* **城市形态 Prompt**：将城市形态指标转化为结构化文本条件，为模型提供高层城市形态约束。
* **城市形态 Loss**：生成结果重新转换为语义 Mask，计算城市形态指标，与真实结果进行比较，并将 Morphology Loss 与 Diffusion Loss 结合。

---

### 8. **各自分工？**

我主要负责城市数据侧，包括数据清洗、整理、标准化和 Tensor 构造；CS 同学主要负责 ControlNet / Stable Diffusion 的模型训练和工程实现。

---

<!-- details -->

# Level 2：流程 Pipeline

\`\`\`text
                    AI4City
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
      城市原始数据               城市形态指标
          │                         │
          ↓                         ↓
    5-channel data                Prompt
          │                         │
    ┌─────┴─────┐                   ↓
    ↓           ↓                  文本编码器
Semantic Mask  4 Auxiliary           │
    │           │                    ↓
    ↓           └───────→ 7-channel Hint
  RGB 3ch
                                +
                         3-channel Street
                                │
                                ↓
                       10-channel Condition
                                │
                                ↓
                           ControlNet
                                │
                                ↓
                       Stable Diffusion
                                ↑
                             噪声
                                │
                                ↓
                         Generated RGB
                                │
                                ↓
                           RGB → Mask
                                │
                                ↓
                    城市形态指标重新计算
                                │
                                ↓
                      Target vs Generated
\`\`\`

---

> **“为什么不是直接用 Stable Diffusion？”**

因为我们的任务不是开放式城市图片生成，而是有明确空间约束的城市形态生成，需要控制道路、建筑、水体等空间结构，所以增加 ControlNet 对城市条件进行显式控制。

---

# Level 3：部分技术细节

### ControlNet

\`\`\`text
7-channel Hint
      +
3-channel Street Condition
      ↓
10-channel ControlNet Condition
      +
Text Condition
      ↓
ControlNet
      ↓
控制特征
      ↓
Stable Diffusion UNet
\`\`\`

训练代码中：

\`\`\`text
5-channel 原始城市数据
        ↓
1-channel Semantic Mask
+
4-channel Auxiliary
        ↓
3-channel RGB Semantic Mask
+
4-channel Auxiliary
        ↓
7-channel Hint
        ↓
+
3-channel Street Condition
        ↓
10-channel Condition
\`\`\`

 

---

### Stable Diffusion

你至少知道：

\`\`\`text
城市条件 + Prompt
       ↓
ControlNet + UNet
       ↓
Latent
       ↓
AutoencoderKL
       ↓
RGB
\`\`\`

---

### DDIM

> 它是扩散模型的采样方法，用于从噪声逐步生成最终图像。项目代码中使用 DDIM 进行生成，推理过程中使用 50 步采样。

---

# 流程图

\`\`\`text
                         AI4City
                            │
             ┌──────────────┴─────────┐
             ↓                        ↓
        城市空间数据                城市形态指标
             │                        │
             ↓                        ↓
     5-channel data                 Prompt
             │                        │
       ┌─────┴─────┐                  ↓
       ↓           ↓               文本条件
 Semantic Mask  4 Auxiliary           │
       │           │                  │
       ↓           └───────────→ 7-channel Hint
     RGB 3ch                          │
       │                              │
       └──────────────┐               │
                      ↓               │
                + 3-channel Street    │
                      │               │
                      ↓               ↓
                    10-channel Condition
                              │
                              ↓
                         ControlNet
                              │
                              ↓
                      Stable Diffusion
                              │
                              ↓
                      Generated RGB
                              │
                              ↓
                        RGB → Mask
                              │
                              ↓
                       城市形态指标计算
                              │
                      ┌───────┴───────┐
                      ↓               ↓
                Diffusion Loss    Morphology Loss
                      │               │
                      └───────┬───────┘
                              ↓
                          Total Loss
\`\`\`

https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm
`,mt=`---
id: "05"
slug: "campus-public-space-vitality-modeling"
title: "校园公共空间活力建模：基于对户外环境与人群活动的实时跟踪"
category: "Computer Vision · Urban Sensing"
year: "2023.06"
description: "通过狩猎相机长时段高精度追踪校园户外环境与人群活动，建模人本尺度公共空间活力"
tech: ["Computer Vision","Active Sensing","Pedestrian Tracking","Time-series Analysis","Urban Analytics","Trail Camera"]
abstract: "The vitality of space plays an important role in evaluating spatial quality and attractiveness. Using active perception technologies and image acquisition methods such as hunting cameras, this project captures campus outdoor environments and pedestrian activities over long periods at high precision, enabling vitality modeling of human-scale public spaces. Through time-series analysis, we investigated the impact of wind and heat environments on pedestrian activities."
challenge: "Past studies relied on low-sample surveys or low-precision positioning to obtain crowd vitality data, which could not capture individual environmental perception and behavioral activities accurately."
solution: "Active perception technologies and long-term, high-precision image acquisition (such as hunting cameras) were adopted to track campus crowd activities and the material environment, and time-series data were used to study how wind and heat environments influence pedestrian activities."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/logo.jpg"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/99.jpg"
---
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/campus-public-space-vitality-modeling.mp4"></video>
</div>

# 校园公共空间活力建模
## Modeling the Vitality of Public Spaces on Campus
### ——基于对户外环境与人群活动的实时跟踪

> 2023.6｜上海同济大学｜Architectural DigitalFUTURES 2023 同济夏令营｜成员（狩猎相机组）

---

## 研究题目

狩猎相机组的研究题目为 **「户外环境与人群跟踪的校园空间活力建模」**。

## 小组成员

林丽丽 Lili Lin｜黄婧 Jing Huang｜公丕欣 Pixin Gong｜沈小洁 Xiaojie Shen｜刘博宇 Boyu Liu｜陈忆湄 Yimei Chen｜刘天明 Tianming Liu

---

## 研究简介

空间的活力在评价空间质量和吸引力上起着重要作用。相较于以往低样本调查或低精度定位获取的人群活力数据，主动感知技术能够实现对个体环境感知与行为活动的精准反馈。同时，图像采集技术手段（如打猎相机）的进步已允许研究者实现对校园人群活动与物质环境的长时段、高精度捕捉，使得针对人本尺度公共空间的活力建模成为可能。

该组通过研究发现户外环境对个体环境感知与行为活动存在影响，同时通过时序数据研究风热环境对行人活动的影响，结果表明：**场地内风速对行人通过数量有正向影响，热感指数与人群停留时间有负向影响**。

## 参考链接

<https://mp.weixin.qq.com/s?__biz=Mzg3NjQ2Mjc5NA==&mid=2247525414&idx=1&sn=fe70b061b93cbc6d38d8d38a6b32bfc1&chksm=cf33f383f8447a9586418622ca0e2f7a76c6e7c5257d49098f0c0e51e0381fd7ed643dda5ea3&scene=178&cur_album_id=2912679801638027265#rd>
`,jt=`---
id: "01"
slug: "litflow"
title: "LitFlow - Research Hub"
category: "Platform"
year: "2026-1-13 ongoing"
description: "面向研究人员的论文可视化平台，以摘要与关键词气泡形式展示研究成果。"
tech: ["python","React","TypeScript"]
abstract: "LitFlow is a platform designed to facilitate the sharing and discovery of research papers. It provides a platform for researchers to copy the links of papers, and for users to search and filter papers based on various criteria."
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of researchers and users."
solution: "We developed LitFlow using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/logo.jpg"
code: "litflow.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/99.png"
---
LitFlow is a platform designed to facilitate the sharing and discovery of research papers. It provides a platform for researchers to copy the links of papers, and for users to search and filter papers based on various criteria.

Designing a platform that is user-friendly, efficient, and scalable to support a large number of researchers and users.

We developed LitFlow using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process.
`,xt=`---
id: "03"
slug: "epstein-mystery-archive"
title: "Epstein Mystery Archive"
category: "Platform"
year: "2026-2-11 on going"
description: "爱泼斯坦疑案档案，记录1983年一起性侵案件的相关资料。"
tech: ["python","React","TypeScript"]
abstract: "The Epstein Mystery Archive is an online platform that provides a detailed account of the case of sexual assault perpetrated by a man in 1983. It features a chronological timeline, interviews with suspects and authorities, and a collection of photographs to support the case."
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of users."
solution: "We developed the Epstein Mystery Archive using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/logo.jpg"
code: "epsteinscret.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/99.png"
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
`,yt=`---
id: "01"
slug: "how-to-add-openstreetmap-in-website"
title: "How to Add OpenStreetMap in Website"
category: "Tutorial"
year: "2026-2-1"
description: "将OpenStreetMap集成到网站中的教程"
tech: ["python","React","TypeScript"]
challenge: "Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key."
solution: "You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/logo.jpg"
code: "openstreetmap.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/99.png"
---
Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key.

You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started.
`,wt=`---
id: "02"
slug: "how-to-get-sequential-events-from-photo-by-phone"
title: "How to get sequential events from photo by phone"
category: "Tutorial"
year: "2026-2-2"
description: "从手机照片中提取时序事件的教程"
tech: ["Computer Vision","Image Processing"]
challenge: "Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events."
solution: "By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/logo.jpg"
code: "photogeo.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/99.png"
---
Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events.

By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process.
`,kt=`---
id: "03"
slug: "how-to-visualize-photo-geolocation-data-on-map"
title: "How to visualize photo geolocation data on map"
category: "Tutorial"
year: "2026-2-3"
description: "在地图上可视化照片地理定位数据的教程"
tech: ["Mapping","Image Processing"]
challenge: "Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data."
solution: "By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/logo.jpg"
code: "photogeomap.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/02.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/03.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/04.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/05.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/06.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/07.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/08.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/09.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/10.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/11.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/12.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/13.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/14.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/15.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/16.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/17.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/18.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/19.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/20.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/21.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/22.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/23.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/24.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/25.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/26.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/27.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/28.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/29.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/30.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/31.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/32.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/33.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/34.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/35.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/36.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/37.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/38.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/39.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/40.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/41.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/42.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/43.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/44.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/45.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/46.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/47.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/48.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/49.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/50.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/51.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/52.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/53.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/54.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/55.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/56.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/57.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/58.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/59.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/60.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/61.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/62.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/63.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/64.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/65.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/66.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/67.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/68.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/69.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/70.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/71.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/72.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/73.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/74.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/75.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/76.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/77.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/78.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/79.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/80.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/81.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/82.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/83.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/84.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/85.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/86.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/87.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/88.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/89.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/90.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/91.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/92.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/93.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/94.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/95.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/96.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/97.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/98.png"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/99.png"
---
Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data.

By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations.
`,Nt=`---
id: "04"
slug: "how-to-conduct-time-geo-sequential-clustering-from-album"
title: "How to conduct time-geo-sequential clustering from album"
category: "Tutorial"
year: "2026-2-6"
description: "从相册照片中进行时空序列聚类的教程"
tech: ["python","Clustering","Geospatial Data Processing"]
abstract: "This tutorial explains how to conduct time-geo-sequential clustering from a photo album using clustering algorithms and geospatial data processing techniques."
challenge: "Dealing with large datasets and ensuring accurate clustering results can be challenging when working with time-geo-sequential data."
solution: "By leveraging clustering algorithms such as K-means or DBSCAN, you can group photos based on their temporal and spatial characteristics. This tutorial provides practical examples and code snippets to guide you through the process."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/logo.jpg"
code: "clusteringevents.tsx"
image:
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/31.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/32.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/33.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/34.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/35.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/36.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/37.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/38.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/39.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/40.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/41.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/42.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/43.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/44.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/45.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/46.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/47.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/48.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/49.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/50.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/51.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/52.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/53.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/54.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/55.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/56.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/57.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/58.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/59.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/60.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/61.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/62.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/63.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/64.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/65.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/66.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/67.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/68.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/69.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/70.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/71.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/72.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/73.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/74.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/75.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/76.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/77.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/78.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/79.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/80.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/81.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/82.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/83.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/84.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/85.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/86.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/87.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/88.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/89.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/90.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/91.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/92.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/93.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/94.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/95.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/96.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/97.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/98.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/99.jpg"
---
This tutorial explains how to conduct time-geo-sequential clustering from a photo album using clustering algorithms and geospatial data processing techniques.

Dealing with large datasets and ensuring accurate clustering results can be challenging when working with time-geo-sequential data.

By leveraging clustering algorithms such as K-means or DBSCAN, you can group photos based on their temporal and spatial characteristics. This tutorial provides practical examples and code snippets to guide you through the process.
`,zt=`---
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

## 02 安装适用于docker的linux系统
适用于Linux的Windows 子系统(WSL)是一个在Windows 10/11上运行Linux环境的功能。它允许用户在Windows上运行Linux应用程序和工具，而无需安装虚拟机或双引导。
打开Windows powershell，输入

## 03 打开设置，把文件的默认存储换到e盘
Settings> Resources > Advanced 
Disk image location -> 修改到需要的盘。
`,Ct=`---
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

#### a. Dify 介绍
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。

#### a. Ollama 介绍
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：
- 完全本地运行，无需联网
- 无需 API Key，数据隐私安全
- 支持多种开源模型

**链接**: https://ollama.com/

**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama
`,St=`---
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

### a. vercel介绍
vercel是一个云平台，可以快速部署和托管web应用。

## 02 数据库在Neon
link: https://neon.tech/

### a. Neon数据库介绍
Neon是一个云数据库平台，提供PostgreSQL数据库服务。

## 03 认证在clerk
link: https://clerk.com/

### a. Clerk认证介绍
Clerk是一个云认证平台，提供用户认证和授权服务。

## 04 存储在Cloudflare R2
link: https://www.cloudflare.com/developer-platform/products/r2/

### a. Cloudflare R2介绍
Cloudflare R2是一个云存储平台，提供对象存储服务。

## 05 邮件在Resend
link: https://resend.com/

### a. Resend邮件介绍
Resend是一个云邮件平台，提供邮件发送服务。
`,At=`---
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

<!-- details -->

## 07 MCP vs 传统方式的优势

| 对比项 | 传统插件 | MCP |
|--------|---------|-----|
| **开发成本** | 每个 AI 平台都要单独开发 | 一次开发，多平台通用 |
| **安全性** | 权限控制不统一 | 标准化的权限管理 |
| **灵活性** | 功能固定 | 可动态发现和切换工具 |
| **生态** | 各自为政 | 开放共享的生态系统 |

---
`,Mt=`---
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

> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！

<!-- details -->

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
`;function It(c){const t=/^---\r?\n([\s\S]*?)\r?\n---/,n=c.match(t);let a={},b=c;if(n){const y=n[1];b=c.slice(n[0].length).trim();const G=y.split(/\r?\n/);let r=null,S=[];G.forEach(A=>{if(A.trim()==="")return;const N=A.indexOf(":");if(N!==-1&&!A.startsWith(" ")){r&&(a[r]=S.join(`
`)),r=A.slice(0,N).trim();let T=A.slice(N+1).trim();T==="|"?S=[]:T===""?S=[]:(a[r]=T,r=null,S=[])}else r&&A.startsWith("  ")&&S.push(A.slice(2))}),r&&S.length>0&&(a[r]=S.join(`
`)),Object.keys(a).forEach(A=>{let I=a[A];if(typeof I=="string")if(I=I.trim(),I.startsWith('"')&&I.endsWith('"')&&(I=I.slice(1,-1)),typeof I=="string"&&I.includes(`
`)&&/^\s*-/.test(I)){const N=I.split(/\r?\n/).map(T=>T.replace(/^\s*-\s*/,"").trim()).filter(T=>T!=="");a[A]=N.map(T=>T.startsWith('"')&&T.endsWith('"')||T.startsWith("'")&&T.endsWith("'")?T.slice(1,-1):T)}else if(I.startsWith("[")&&I.endsWith("]"))try{a[A]=JSON.parse(I)}catch{a[A]=[I.slice(1,-1).trim()]}else I==="true"?a[A]=!0:I==="false"?a[A]=!1:!isNaN(Number(I))&&I.trim()!==""?a[A]=Number(I):a[A]=I})}const g=[],i=new Set,m=y=>{const G=y.trim();!G||i.has(G)||(i.add(G),g.push(G))};Array.isArray(a.image)&&a.image.forEach(y=>m(String(y)));const x=/!\[.*?\]\(([^)\s]+)\)/g;let _;for(;(_=x.exec(b))!==null;)m(_[1]);const L=/<imagecarousel\b[^>]*\simages="([^"]*)"/gi;let z;for(;(z=L.exec(b))!==null;)z[1].split(",").forEach(m);return{id:a.id||"",slug:a.slug||"",title:a.title||"",category:a.category||"",year:a.year||"",description:a.description||"",tech:a.tech||[],abstract:a.abstract||"",challenge:a.challenge||"",solution:a.solution||"",hasDemo:a.hasDemo||!1,demoOnly:a.demoOnly===!0,icon:a.icon||"",code:a.code||"",logo:a.icon||"",image:g,content:b}}function P(c){const t=It(c);return{id:t.id,slug:t.slug,title:t.title,category:t.category,year:t.year,description:t.description,tech:t.tech,hasDemo:t.hasDemo,details:{abstract:t.abstract,description:t.description,challenge:t.challenge,solution:t.solution,logo:t.logo,icon:t.icon,code:t.code,image:t.image,content:t.content,demoOnly:t.demoOnly||!1}}}const Pe=[P(Vc),P(Kc),P(Zc),P(Jc),P(Yc),P(Qc),P(Xc),P(et)],Re=[P(ct),P(tt),P(at),P(nt),P(bt),P(pt),P(it),P(rt)],_e=[P(st),P(dt),P(gt),P(ot),P(lt)],Te=[P(ft),P(ut),P(ht),P(vt),P(mt)],Be=[P(jt),P(xt)],Ge=[P(yt),P(wt),P(kt),P(Nt),P(zt),P(Ct),P(St),P(At),P(Mt)],Lt={product:"Products",game:"Games",ai:"AI",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},Sc=({className:c})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:c,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),Ac=({to:c,className:t=""})=>e.jsx(Q,{to:c,className:`btn-accent ${t}`,children:"Demo"}),Et=!1,Dt=({project:c,type:t,index:n})=>{var a;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(n+1).padStart(2,"0")}),e.jsxs(Q,{to:`/${t}/${c.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",onError:b=>{b.target.style.display="none"}}):e.jsx(Sc,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:c.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(a=c.tech)==null?void 0:a.slice(0,3).map(b=>e.jsx("span",{className:"chip",children:b},b))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:c.year})]}),c.hasDemo&&e.jsx(Ac,{to:`/${t}/${c.slug}#demo`,className:"shrink-0"})]})})},qt=({project:c,type:t,index:n})=>{var a;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(Q,{to:`/${t}/${c.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]",onError:b=>{b.target.style.display="none"}}):e.jsx(Sc,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(n+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:c.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),((a=c.tech)==null?void 0:a.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tech.slice(0,2).map(b=>e.jsx("span",{className:"chip",children:b},b))})]})]}),c.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(Ac,{to:`/${t}/${c.slug}#demo`,className:"w-full"})})]})},ze=({data:c,type:t})=>{const[n,a]=s.useState("grid"),b=Lt[t]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[t==="product"&&Et,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[t," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(c.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",b]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(g=>e.jsx("button",{onClick:()=>a(g),"aria-pressed":n===g,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${n===g?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:g},g))})]}),n==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:c.map((g,i)=>e.jsx(Dt,{project:g,type:t,index:i},g.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:c.map((g,i)=>e.jsx(qt,{project:g,type:t,index:i},g.slug))})]})},Pt="modulepreload",Rt=function(c,t){return new URL(c,t).href},oc={},U=function(t,n,a){let b=Promise.resolve();if(n&&n.length>0){let i=function(L){return Promise.all(L.map(z=>Promise.resolve(z).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const m=document.getElementsByTagName("link"),x=document.querySelector("meta[property=csp-nonce]"),_=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));b=i(n.map(L=>{if(L=Rt(L,a),L in oc)return;oc[L]=!0;const z=L.endsWith(".css"),y=z?'[rel="stylesheet"]':"";if(!!a)for(let S=m.length-1;S>=0;S--){const A=m[S];if(A.href===L&&(!z||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${L}"]${y}`))return;const r=document.createElement("link");if(r.rel=z?"stylesheet":Pt,z||(r.as="script"),r.crossOrigin="",r.href=L,_&&r.setAttribute("nonce",_),document.head.appendChild(r),z)return new Promise((S,A)=>{r.addEventListener("load",S),r.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${L}`)))})}))}function g(i){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=i,window.dispatchEvent(m),!m.defaultPrevented)throw i}return b.then(i=>{for(const m of i||[])m.status==="rejected"&&g(m.reason);return t().catch(g)})},_t=s.lazy(()=>U(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Tt=s.lazy(()=>U(()=>import("./UR-platform-DFO5eSKd.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),Bt=s.lazy(()=>U(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Gt=s.lazy(()=>U(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Ft=s.lazy(()=>U(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),Ot=s.lazy(()=>U(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),Ut=s.lazy(()=>U(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));s.lazy(()=>U(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const Wt=s.lazy(()=>U(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),lc=s.lazy(()=>U(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),Ht=s.lazy(()=>U(()=>import("./72HourGameJamDemo-BWPUgRvj.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),$t=s.lazy(()=>U(()=>import("./PeaceEliteHustCampusDemo-D-DWwJkq.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),Vt=s.lazy(()=>U(()=>import("./BMWMetaIslandDemo-7uu2MOZP.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Kt=s.lazy(()=>U(()=>import("./riffle-RlweP75u.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),Zt=s.lazy(()=>U(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Xt=s.lazy(()=>U(()=>import("./genshot-BoH35G7G.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),Yt=s.lazy(()=>U(()=>import("./dragon-diffusion-Dj4t-WNK.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),Qt=s.lazy(()=>U(()=>import("./anyreal-DKKTpW8w.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),Jt=s.lazy(()=>U(()=>import("./previous-archi-work-CvNoz6hg.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),ea=s.lazy(()=>U(()=>import("./hongqiqu-y3eLCJ-3.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),ca=s.lazy(()=>U(()=>import("./scendance-TgGmbUpO.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),fc=c=>({"cluster-visualizer-3d":_t,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Tt,heatmapper:Bt,"how-to-add-openstreetmap-in-website":Gt,"how-to-get-sequential-events-from-photo-by-phone":Ft,"how-to-visualize-photo-geolocation-data-on-map":Ot,kittylovecarrots:lc,"how-to-build-game-in-wechat-mini-program":lc,"72-hour-game-jam":Ht,"peace-elite-hust-campus":$t,"bmw-meta-island":Vt,"how-to-conduct-time-geo-sequential-clustering-from-album":Ut,"epstein-mystery-archive":Wt,"riffle-ai-game-generation-tool":Kt,genstyle:Zt,"genshot-AI-video-generation-tool":Xt,"dragon-diffussion":Yt,anyreal:Qt,"previous-archi-work":Jt,hongqiqu:ea,scendance:ca})[c],ta=({images:c,captions:t})=>{const[n,a]=s.useState(0),[b,g]=s.useState(new Set(c.map((z,y)=>y))),i=c.filter((z,y)=>b.has(y));if(s.useEffect(()=>{n>=i.length&&a(Math.max(0,i.length-1))},[i.length,n]),i.length===0)return null;const m=z=>{g(y=>{const G=new Set(y);return G.delete(z),G})},x=()=>{a(z=>z===0?i.length-1:z-1)},_=()=>{a(z=>z===i.length-1?0:z+1)},L=t==null?void 0:t[n];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:i[n],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:L||`Carousel Image ${n+1}`,onError:()=>m(n)}),e.jsx("button",{onClick:x,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:_,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),i.length>1&&e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:i.map((z,y)=>e.jsx("button",{onClick:()=>a(y),className:`h-1.5 rounded-full transition-all duration-300 ${n===y?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${y+1}`},y))})]}),L&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:L}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[n+1," / ",i.length]})]}),!L&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[n+1," / ",i.length]})]})},aa=({src:c,...t})=>{const[n,a]=s.useState(!1),[b,g]=s.useState(!1);return s.useEffect(()=>{const i=setTimeout(()=>{b||(a(!1),g(!0))},3e3);return()=>clearTimeout(i)},[b]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:c,onLoad:()=>{a(!0),g(!0)},onError:()=>{a(!1),g(!0)},style:{display:"none"},title:"detector"}),!b&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),b&&n&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:c,className:"h-96 w-full border-0",allowFullScreen:!0,...t})}),b&&!n&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},uc={iframe:({src:c,title:t,...n})=>e.jsx(aa,{src:c,title:t||"Embedded content",...n}),imagecarousel:({images:c,captions:t})=>{const n=(c||"").split(",").map(b=>b.trim()).filter(Boolean),a=t?t.split("|").map(b=>b.trim()):void 0;return e.jsx(ta,{images:n,captions:a})},table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:a,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...t,children:c})},h2:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:a,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...t,children:c})},h3:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:a,className:"mt-6 mb-3 text-base font-bold text-ink",...t,children:c})},h4:({children:c,...t})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...t,children:c}),h5:({children:c,...t})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...t,children:c}),h6:({children:c,...t})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...t,children:c}),p:({children:c,...t})=>{var b;const n=Ec.Children.toArray(c),a=n.length===1&&((b=n[0])==null?void 0:b.type)==="img";return e.jsx("p",{className:a?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...t,children:c})},a:({children:c,href:t,...n})=>e.jsx("a",{href:t,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...n,children:c}),img:({src:c,alt:t,...n})=>(t==null?void 0:t.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:c,alt:t,className:"h-32 max-w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...n}):e.jsx("img",{src:c,alt:t,className:"my-0 h-auto w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...n})},Je=3,hc=c=>`px-3 py-1.5 text-[12px] transition-colors duration-200 ${c?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,na=({images:c})=>{const[t,n]=s.useState("expand"),[a,b]=s.useState(!1),[g,i]=s.useState(null),[m,x]=s.useState(0),[_,L]=s.useState(0),z=s.useRef(new Map),y=t==="expand"&&a,G=c.join(`
`);s.useEffect(()=>{let D=!1,B=0,V=0;const K=z.current,W=[],Z=4,ie=()=>c.reduce((X,Y)=>X+(K.get(Y)==="ok"?1:0),0),re=()=>y?Number.POSITIVE_INFINITY:t==="flip"?m+2:Je+1,oe=()=>{if(!D)for(;B<Z&&V<c.length&&!(ie()>=re());){const X=c[V++];if(K.has(X))continue;B++;const Y=new Image;W.push(Y);const be=J=>{K.set(X,J),!D&&(B--,L(Ee=>Ee+1),oe())};Y.onload=()=>be(Y.naturalWidth>0?"ok":"bad"),Y.onerror=()=>be("bad"),Y.src=X}};return oe(),()=>{D=!0,W.forEach(X=>{X.onload=null,X.onerror=null})}},[G,y,t,m]);const r=c.filter(D=>z.current.get(D)==="ok"),S=c.every(D=>z.current.has(D)),A=r.length===0?0:Math.min(m,r.length-1),I=y?r:r.slice(0,Je),N=r.length>Je,T=t==="flip"&&!S&&m>=r.length&&r.length>0;s.useEffect(()=>{S&&r.length>0&&m>r.length-1&&x(r.length-1)},[S,r.length,m]);const F=D=>{z.current.get(D)!=="bad"&&(z.current.set(D,"bad"),L(B=>B+1))},M=D=>{x(B=>{const V=Math.max(0,r.length-1),K=Math.min(B,V),W=K+D;return W<0?0:D>0?W<r.length?W:S?K:r.length:Math.min(W,V)})};if(s.useEffect(()=>{const D=B=>{const V=B.target;if(V&&(V.tagName==="INPUT"||V.tagName==="TEXTAREA"||V.isContentEditable))return;if(g!==null){B.key==="Escape"&&i(null),B.key==="ArrowRight"&&i(Z=>Z===null?Z:Math.min(r.length-1,Z+1)),B.key==="ArrowLeft"&&i(Z=>Z===null?Z:Math.max(0,Z-1));return}if(t!=="flip"||r.length<1||B.key!=="ArrowRight"&&B.key!=="ArrowLeft")return;const K=document.getElementById("gallery");if(!K)return;const W=K.getBoundingClientRect();W.bottom<=0||W.top>=window.innerHeight||(B.preventDefault(),M(B.key==="ArrowRight"?1:-1))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[g,t,r.length,S,m]),_<0||S&&r.length===0)return null;const ee=r.length===0?"":S?`${r.length} images`:`${r.length}+`,ne=r.length===0?"":S?`${A+1} / ${r.length}`:`${A+1} / ${r.length}+`;return e.jsxs("section",{id:"gallery",className:"mt-12",children:[e.jsxs("div",{className:"section-head mb-5",children:[e.jsx("p",{className:"eyebrow",children:"Gallery"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[c.length>1&&e.jsxs("div",{className:"flex border border-rule",role:"group","aria-label":"Gallery layout",children:[e.jsx("button",{type:"button","aria-pressed":t==="expand",onClick:()=>n("expand"),className:hc(t==="expand"),children:"下拉展开"}),e.jsx("button",{type:"button","aria-pressed":t==="flip",onClick:()=>n("flip"),className:hc(t==="flip"),children:"左右翻页"})]}),(t==="flip"?ne:ee)&&e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:t==="flip"?ne:ee})]})]}),t==="expand"?e.jsxs(e.Fragment,{children:[I.length>0?e.jsx("ol",{className:"border border-rule bg-surface",children:I.map((D,B)=>e.jsx("li",{className:"border-b border-rule last:border-b-0",children:e.jsxs("button",{type:"button",onClick:()=>i(r.indexOf(D)),className:"flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-surface-2 md:gap-4 md:px-4",children:[e.jsx("span",{className:"w-8 shrink-0 font-mono text-[11px] text-ink-3",children:String(B+1).padStart(2,"0")}),e.jsx("img",{src:D,alt:"",className:"min-w-0 max-h-64 w-auto max-w-full object-contain",onError:()=>F(D)})]})},D))}):e.jsx("p",{className:"border border-rule px-4 py-6 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Loading"}),N&&e.jsxs("button",{type:"button",onClick:()=>b(D=>!D),"aria-expanded":a,className:"flex w-full items-center justify-center gap-2 border border-t-0 border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink",children:[a?"Collapse":S?`Show all ${r.length}`:"Show all",e.jsx("svg",{className:`h-3 w-3 transition-transform duration-300 ${a?"rotate-180":""}`,fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})]})]}):e.jsxs("div",{className:"border border-rule bg-surface",children:[e.jsxs("div",{className:"relative bg-surface-2",children:[r[A]?e.jsx("button",{type:"button",onClick:()=>i(A),className:"block w-full","aria-label":ne?`Image ${ne}`:`Image ${A+1}`,children:e.jsx("img",{src:r[A],alt:"",className:"mx-auto max-h-[70vh] w-full object-contain",onError:()=>F(r[A])})}):e.jsx("p",{className:"px-4 py-16 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Loading"}),e.jsx("button",{type:"button","aria-label":"Previous image",disabled:A===0||r.length===0,onClick:()=>M(-1),className:"absolute left-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink",children:"Prev"}),e.jsx("button",{type:"button","aria-label":"Next image",disabled:r.length===0||A>=r.length-1&&(S||T),onClick:()=>M(1),className:"absolute right-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink",children:"Next"})]}),e.jsx("p",{className:"border-t border-rule px-4 py-3 text-center font-mono text-[12px] tracking-eyebrow text-ink","aria-live":"polite",children:ne||"—"})]}),g!==null&&r[g]&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10",role:"dialog","aria-modal":"true","aria-label":"Gallery image",onClick:()=>i(null),children:[e.jsx("button",{type:"button",className:"absolute right-4 top-4 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/80 hover:text-canvas",onClick:()=>i(null),children:"Close"}),r.length>1&&e.jsx("button",{type:"button","aria-label":"Previous image",className:"absolute left-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:left-6",onClick:D=>{D.stopPropagation(),i(B=>B===null?B:Math.max(0,B-1))},children:"Prev"}),e.jsx("img",{src:r[g],alt:"",className:"max-h-[85vh] max-w-[90vw] object-contain",onClick:D=>D.stopPropagation(),onError:()=>F(r[g])}),r.length>1&&e.jsx("button",{type:"button","aria-label":"Next image",className:"absolute right-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:right-6",onClick:D=>{D.stopPropagation(),i(B=>B===null?B:Math.min(r.length-1,B+1))},children:"Next"}),e.jsxs("p",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/70",children:[g+1," / ",r.length]})]})]})},Ce=({data:c,type:t})=>{var G,r,S,A,I;const{id:n}=Cc(),a=c.find(N=>N.slug===n),[b,g]=s.useState(a!=null&&a.hasDemo&&((G=a==null?void 0:a.details)!=null&&G.demoOnly)?"demo":"details"),[i,m]=s.useState(!1);if(s.useEffect(()=>{const N=()=>{var T;a!=null&&a.hasDemo&&((T=a==null?void 0:a.details)!=null&&T.demoOnly)||window.location.hash.includes("demo")&&(a!=null&&a.hasDemo)?g("demo"):g("details")};return N(),window.addEventListener("hashchange",N),()=>window.removeEventListener("hashchange",N)},[n,a==null?void 0:a.hasDemo,(r=a==null?void 0:a.details)==null?void 0:r.demoOnly]),!a)return e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(Q,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})});const x="<!-- details -->",_=String(a.details.content||""),L=_.indexOf(x),z=(L===-1?_:_.slice(0,L)).trim(),y=L===-1?"":_.slice(L+x.length).trim();return e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(Q,{to:`/${t}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:a.title})]}),!((S=a.details)!=null&&S.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>g("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),a.hasDemo&&e.jsxs("button",{onClick:()=>g("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),b==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[((A=a.tech)==null?void 0:A.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:a.tech.map((N,T)=>e.jsx("span",{className:"chip",children:N},T))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",a.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:a.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:a.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:a.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:i,onToggle:N=>m(N.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[i?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[a.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.description})]}),a.details.abstract&&a.details.abstract!==a.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.abstract})]}),a.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.challenge})]}),a.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.solution})]})]})]}),z&&e.jsx("section",{id:"content",children:e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(tc,{remarkPlugins:[nc],rehypePlugins:[ac],components:uc,children:z})})}),e.jsx(na,{images:(a.details.image??[]).filter(N=>N&&!String(a.details.content||"").includes(N))},a.slug),y&&e.jsxs("section",{id:"details",className:"mt-12",children:[e.jsxs("div",{className:"section-head mb-8",children:[e.jsx("p",{className:"eyebrow",children:"细节"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Methods"})]}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(tc,{remarkPlugins:[nc],rehypePlugins:[ac],components:uc,children:y})})]})]})}):(I=a.details)!=null&&I.demoOnly?e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const N=fc(a.slug);return N?e.jsx(N,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const N=fc(a.slug);return N?e.jsx(N,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]})},ba=[{zh:"城市气候与韧性",en:"Urban Climate & Resilience"},{zh:"AI 辅助城市规划",en:"AI-Assisted Urban Planning"},{zh:"机器学习与数据分析",en:"Machine Learning & Data Analysis"},{zh:"空间统计与 GIS",en:"Spatial Statistics & GIS"},{zh:"React / Next.js 生态",en:"React / Next.js Ecosystem"},{zh:"TypeScript 架构",en:"TypeScript Architecture"},{zh:"WebGL / Three.js 3D 可视化",en:"WebGL / Three.js"},{zh:"UI 设计系统",en:"UI Systems Design"}],pa="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/",ia=c=>`${pa}${encodeURIComponent(c)}`,ra=[{category:"奖学金与荣誉 · Scholarships & Honors",items:[{name:"优秀外国人研究奖学金",year:"2024",images:[{file:"优秀外国人研究奖学金2024.jpg"}]},{name:"优秀毕业生",year:"2024"},{name:"国家励志奖学金",year:"2020",images:[{file:"国家励志奖学金2020.jpg"}]},{name:"国家励志奖学金",year:"2021",images:[{file:"国家励志奖学金2021.jpg"}]},{name:"国家励志奖学金",year:"2022",images:[{file:"国家励志奖学金2022.jpg"}]},{name:"国家励志奖学金",year:"2023",images:[{file:"国家励志奖学金2023.jpg"}]},{name:"学习优秀奖学金",year:"2020",images:[{file:"学习优秀奖学金-2020.jpg"}]},{name:"自强奖学金",year:"2023",images:[{file:"自强奖学金2023.jpg"}]},{name:"三好学生",year:"2021",images:[{file:"三好学生2021.jpg"}]},{name:"三好学生",year:"2023",images:[{file:"三好学生2023.jpg"}]},{name:"优秀学生干部",year:"2022",images:[{file:"优秀学生干部2022.jpg"}]},{name:"优秀共青团员",year:"2020",images:[{file:"优秀共青团员2020.jpg"}]},{name:"优秀共青团员",year:"2022",images:[{file:"优秀共青团员2022.jpg"}]}]},{category:"竞赛奖项 · Competitions",items:[{name:"腾讯游戏极限开发挑战赛 金奖",year:"2021",images:[{file:"腾讯华科Gamejams金奖2021.jpg"}]},{name:"eVolo 摩天大楼建筑竞赛 编辑部推荐奖",year:"2022",images:[{file:"evolo摩天大楼竞赛2022.jpg"}]},{name:"“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖",year:"2022",images:[{file:"互联网+省赛市赛名单2022.jpg",label:"武汉市银奖 / 湖北省铜奖名单"},{file:"互联网+省赛铜奖2022.jpg",label:"省赛铜奖证书"}]},{name:"中央国际玻璃国际建筑设计竞赛 佳作奖",year:"2023",images:[{file:"中央国际玻璃竞赛2023.jpg"}]},{name:"米兰设计周省级一等奖",year:"2023",images:[{file:"米兰设计周2023.jpg"}]},{name:"亚洲设计学年奖 银奖、铜奖、优秀奖",year:"2023"}]},{category:"项目与其他 · Projects & Recognition",items:[{name:"国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》",year:"2023"},{name:"Digital Futures workshop 参与证书",year:"2023",images:[{file:"digitalfuture2023.jpg"}]},{name:"最佳跨界融合奖 · 同济 AI4CITIES 工作坊",year:"2025",images:[{file:"AI4CITIES最佳跨界融合奖.jpg"}]}]}],sa=()=>e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.6,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),da=()=>e.jsxs("svg",{className:"h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{strokeLinecap:"round",d:"M21 21l-4.35-4.35M8 11h6M11 8v6"})]}),vc=({dir:c})=>e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,children:c==="left"?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),ga=()=>{const[c,t]=s.useState(null);s.useEffect(()=>{if(!c)return;const i=x=>{x.key==="Escape"&&t(null)};window.addEventListener("keydown",i);const m=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow=m}},[c]);const[n,a]=s.useState(null),[b,g]=s.useState(0);return s.useEffect(()=>{var _;if(!n)return;const i=((_=n.images)==null?void 0:_.length)??0,m=L=>{L.key==="Escape"&&a(null),i>1&&L.key==="ArrowLeft"&&g(z=>(z-1+i)%i),i>1&&L.key==="ArrowRight"&&g(z=>(z+1)%i)};window.addEventListener("keydown",m);const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",m),document.body.style.overflow=x}},[n]),e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx("div",{className:"section-head",children:e.jsx("p",{className:"eyebrow",children:"About / Bio"})}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"关于我"}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"About Me"}),e.jsxs("div",{className:"mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg",children:[e.jsxs("p",{children:["我是林丽丽，毕业于",e.jsx("strong",{className:"font-semibold text-ink",children:"首尔大学城市与区域规划专业"}),"，拥有",e.jsx("strong",{className:"font-semibold text-ink",children:"华中科技大学建筑学"}),"背景。"]}),e.jsxs("p",{children:["我关注 ",e.jsx("strong",{className:"font-semibold text-ink",children:"AI 与产品创新"}),"，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。"]}),e.jsxs("p",{children:["与此同时，我持续探索 ",e.jsx("strong",{className:"font-semibold text-ink",children:"AI × 城市 × 空间"})," 的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。"]}),e.jsx("p",{children:"我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。"})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Core Competencies"}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4",children:ba.map((i,m)=>e.jsxs("div",{className:"group border-t border-rule pt-4 transition-colors hover:border-accent",children:[e.jsx("span",{className:"font-mono text-xs tabular-nums text-ink-3 transition-colors group-hover:text-accent",children:String(m+1).padStart(2,"0")}),e.jsx("div",{className:"mt-2.5 text-sm font-semibold leading-snug text-ink",children:i.zh}),e.jsx("div",{className:"mt-1 text-xs text-ink-3",children:i.en})]},i.en))})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Awards & Honors"}),e.jsx("h2",{className:"mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl",children:"获奖与荣誉"}),e.jsx("div",{className:"mt-6 grid gap-10 md:grid-cols-3 md:gap-8",children:ra.map(i=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold uppercase tracking-wider text-ink",children:i.category}),e.jsx("ul",{className:"mt-4 space-y-3 border-t border-rule pt-4",children:i.items.map(m=>{const x=!!m.images&&m.images.length>0;return e.jsx("li",{children:x?e.jsxs("button",{type:"button",onClick:()=>{a(m),g(0)},className:"group flex w-full items-baseline justify-between gap-3 text-left text-sm leading-snug",children:[e.jsx("span",{className:"text-ink-2 underline decoration-dotted decoration-current underline-offset-4 transition group-hover:text-ink",children:m.name}),e.jsxs("span",{className:"flex shrink-0 items-center gap-1.5 font-medium tabular-nums text-ink",children:[m.year,e.jsx(da,{})]})]}):e.jsxs("div",{className:"flex items-baseline justify-between gap-3 text-sm leading-snug",children:[e.jsx("span",{className:"text-ink-2",children:m.name}),e.jsx("span",{className:"shrink-0 font-medium tabular-nums text-ink",children:m.year})]})},`${m.name}-${m.year}`)})})]},i.category))})]})]}),n&&n.images&&Dc.createPortal(e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-12",onClick:()=>a(null),role:"dialog","aria-modal":"true",children:[e.jsx("button",{type:"button","aria-label":"关闭",onClick:()=>a(null),className:"absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white",children:e.jsx(sa,{})}),n.images.length>1&&e.jsx("button",{type:"button","aria-label":"上一张",onClick:i=>{i.stopPropagation(),g(m=>(m-1+n.images.length)%n.images.length)},className:"absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:left-8",children:e.jsx(vc,{dir:"left"})}),n.images.length>1&&e.jsx("button",{type:"button","aria-label":"下一张",onClick:i=>{i.stopPropagation(),g(m=>(m+1)%n.images.length)},className:"absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:right-8",children:e.jsx(vc,{dir:"right"})}),e.jsxs("figure",{className:"relative max-w-3xl",onClick:i=>i.stopPropagation(),children:[e.jsx("img",{src:ia(n.images[b].file),alt:`${n.name} ${n.year}`,className:"max-h-[80vh] w-auto max-w-full rounded-md object-contain shadow-2xl"}),e.jsxs("figcaption",{className:"mt-3 text-center text-sm",children:[e.jsx("span",{className:"text-white/90",children:n.name}),e.jsxs("span",{className:"text-white/50",children:[" · ",n.year]}),n.images[b].label&&e.jsxs("span",{className:"text-white/50",children:[" · ",n.images[b].label]}),n.images.length>1&&e.jsxs("span",{className:"text-white/50",children:[" · ",b+1," / ",n.images.length]})]})]})]}),document.body)]})},oa=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),ec=({href:c,label:t})=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:t}),mc=[{city:"上海",country:"中国",date:"2024",note:"法租界的梧桐树影"},{city:"东京",country:"日本",date:"2025",note:"下北泽的午后散步"},{city:"首尔",country:"韩国",date:"2025",note:"汉江边的晚风与霓虹"},{city:"新加坡",country:"新加坡",date:"2026",note:"滨海湾的花园城市漫游"},{city:"明尼阿波利斯",country:"美国",date:"2025",note:"密西西比河畔的秋日"},{city:"剑桥",country:"英国",date:"2025",note:"康河上的撑船与学院回廊"},{city:"武汉",country:"中国",date:"2023",note:"东湖绿道与热干面的早晨"},{city:"香港",country:"中国",date:"2024",note:"中环半山扶梯的夜色"}],jc=["from-amber-500/20 via-orange-400/10 to-yellow-500/20","from-emerald-500/20 via-teal-400/10 to-cyan-500/20","from-rose-500/20 via-pink-400/10 to-fuchsia-500/20","from-sky-500/20 via-blue-400/10 to-indigo-500/20","from-violet-500/20 via-purple-400/10 to-plum-500/20","from-lime-500/20 via-green-400/10 to-emerald-500/20","from-red-500/20 via-orange-400/10 to-amber-500/20","from-cyan-500/20 via-teal-400/10 to-sky-500/20"],la={上海:"🏙️",东京:"🗼",首尔:"🏯",新加坡:"🌿",明尼阿波利斯:"🌊",剑桥:"🎓",武汉:"🌸",香港:"🌃"},fa=({entry:c,index:t})=>{const[n,a]=s.useState(!1),b=jc[t%jc.length],g=la[c.city]??"📍";return e.jsx("div",{className:"relative cursor-pointer select-none",style:{perspective:"800px"},onClick:()=>a(i=>!i),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:e.jsxs("div",{className:"relative w-full transition-transform duration-500 ease-editorial",style:{transformStyle:"preserve-3d",transform:n?"rotateY(180deg)":"rotateY(0deg)",aspectRatio:"3/4"},children:[e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-x-3 top-2 flex justify-between",children:Array.from({length:16}).map((i,m)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},m))}),e.jsx("div",{className:"absolute inset-x-3 bottom-2 flex justify-between",children:Array.from({length:16}).map((i,m)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},m))}),e.jsx("span",{className:"text-3xl",children:g}),e.jsx("p",{className:"text-base font-bold tracking-tight text-ink",children:c.city}),e.jsx("p",{className:"eyebrow text-ink-3",children:c.country}),c.date&&e.jsx("span",{className:"mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:c.date}),e.jsx("div",{className:"absolute right-3 top-5 -rotate-12 opacity-30",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"17",stroke:"currentColor",strokeWidth:"1.5",className:"text-ink-3"}),e.jsx("path",{d:"M8 8l24 24M8 32L32 8",stroke:"currentColor",strokeWidth:"0.8",className:"text-ink-3"})]})})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[c.photo?e.jsx("img",{src:c.photo,alt:c.city,className:"absolute inset-0 h-full w-full object-cover"}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${b}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 px-4 text-center",children:[e.jsx("p",{className:"text-lg font-bold tracking-tight text-white",children:c.city}),c.note&&e.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-white/70",children:c.note})]}),e.jsx("div",{className:"absolute inset-2 border border-dashed border-white/10"})]})]})})},ua=()=>e.jsxs("section",{className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Wander"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(mc.length).padStart(2,"0")," cities"]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"City Walks"}),e.jsxs("p",{className:"max-w-xs text-right text-xs leading-relaxed text-ink-3",children:["用脚步丈量城市，",e.jsx("br",{className:"hidden sm:inline"}),"在每个街角发现故事。"]})]}),e.jsx("div",{className:"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:mc.map((c,t)=>e.jsx(fa,{entry:c,index:t},c.city))})]}),ha="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig",H=c=>`${ha}/${c}/logo.jpg`,va=new Map([...Re.map(c=>["product",c]),..._e.map(c=>["game",c]),...Te.map(c=>["ai",c]),...Pe.map(c=>["planning",c]),...Be.map(c=>["platform",c]),...Ge.map(c=>["tutorial",c])].map(([c,t])=>[`/${c}/${t.slug}`,{title:t.title,year:t.year,category:t.category,description:t.description||t.details.abstract||""}])),ma=c=>va.get(c),qe=[2022,2023,2024,2025,2026],xc=[{zh:"产品",en:"Product",listHref:"/product",color:"#5ec5d4",items:[{name:"Counting",year:2022,logo:H("counting"),href:"/product/early-campus-experience"},{name:"1037拼拼",year:2022,logo:H("1037pinpin"),href:"/product/early-campus-experience"},{name:"PersLearn",year:2023,logo:H("perslearn"),href:"/product/early-campus-experience"}]},{zh:"AI 产品",en:"AI Product",listHref:"/product",color:"#3f6fd8",items:[{name:"智图",year:2023,logo:H("dragon-diffusion"),href:"/product/dragon-diffussion"},{name:"AnyReal",year:2024,logo:H("anyreal"),href:"/product/anyreal"},{name:"Genshot",year:2024,logo:H("genshot"),href:"/product/genshot-AI-video-generation-tool"},{name:"洛书八字",year:2025,logo:H("bazi"),href:"/product/bazi-fengshui-analysis"},{name:"Genstyle",year:2025,logo:H("genstyle"),href:"/product/genstyle"},{name:"Riffle",year:2026,logo:H("riffle"),href:"/product/riffle-ai-game-generation-tool"},{name:"幕景 Scendance",year:2026,logo:H("scendance"),href:"/product/scendance"}]},{zh:"游戏 & 用户体验",en:"Game & User Experience",listHref:"/game",color:"#9b5bc9",items:[{name:"无名之路",year:2022,logo:H("game-jam"),href:"/game/72-hour-game-jam"},{name:"和平精英",year:2022,logo:H("peace-elite-hust"),href:"/game/peace-elite-hust-campus"},{name:"宝马元宇宙",year:2022,logo:H("bmw-meta-island"),href:"/game/bmw-meta-island"},{name:"Bilibili 实习",year:2023,logo:H("guangzhou-xinyuan"),href:"/game/guangzhou-xinyuan-tech"},{name:"微信小游戏",year:2026,logo:H("kittylovecarrots"),href:"/game/kittylovecarrots"}]},{zh:"AI 辅助城市规划",en:"AI-aided Planning",listHref:"/ai",color:"#1b2c5e",items:[{name:"全球空间聚类",year:2023,logo:H("cluster-visualizer-3d"),href:"/planning/cluster-visualizer-3d"},{name:"RAG 城市助手",year:2024,logo:H("agentic-rag"),href:"/ai/prompt-engineering-agentic-rag"},{name:"知识图谱",year:2024,logo:H("knowledge-graph-urban-planning"),href:"/ai/knowledge-graph-urban-planning"},{name:"Diffusion 城市更新",year:2025,logo:H("participatory-urban-regeneration"),href:"/ai/participatory-urban-regeneration-empowered-by-artificial-intelligence"},{name:"机器学习城市热韧性",year:2026,logo:H("urban-heat-resilience-ml"),href:"/ai/urban-heat-resilience-machine-learning"}]}],ja=4,xa=1,ya=`calc(${xa}rem + ${ja/2}rem - 1.5px)`,wa=16,ka=`-${wa/2}rem`,Mc=c=>{c.currentTarget.style.visibility="hidden"},Na=c=>c.metaKey||c.ctrlKey||c.shiftKey||c.altKey,za=()=>{const[c,t]=s.useState(null),n=s.useRef(null);return s.useEffect(()=>{if(!c)return;const b=i=>{i.key==="Escape"&&t(null)},g=i=>{n.current&&!n.current.contains(i.target)&&t(null)};return window.addEventListener("keydown",b),document.addEventListener("mousedown",g),()=>{window.removeEventListener("keydown",b),document.removeEventListener("mousedown",g)}},[c]),{activeKey:c,setActiveKey:t,rootRef:n,onClick:b=>g=>{Na(g)||c!==b&&(g.preventDefault(),t(b))}}},Ic=({item:c,color:t,compact:n=!1})=>{const a=ma(c.href);return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`block font-bold tracking-tight text-ink ${n?"text-xs":"text-sm"}`,children:(a==null?void 0:a.title)??c.name}),e.jsxs("span",{className:"mt-1 block font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[(a==null?void 0:a.year)??String(c.year),a!=null&&a.category?` · ${a.category}`:""]}),(a==null?void 0:a.description)&&e.jsx("span",{className:`mt-2 block leading-relaxed text-ink-2 ${n?"text-[11px]":"text-xs"}`,children:a.description}),!n&&e.jsx("span",{className:"mt-2.5 block text-[10px] font-medium",style:{color:t},children:"再点一次进入项目 →"})]})},Ca=({item:c,color:t,expanded:n,onExpandClick:a})=>e.jsxs(Q,{to:c.href,onClick:a,"aria-expanded":n,"aria-label":`${c.name}（${c.year}）`,className:"group relative flex w-16 shrink-0 flex-col items-center",children:[e.jsx("span",{className:`flex h-16 w-16 items-center justify-center rounded-xl border bg-surface p-1 shadow-lift transition-all duration-300 ease-editorial group-hover:-translate-y-1 ${n?"-translate-y-1 border-transparent":"border-rule"}`,style:n?{boxShadow:`0 0 0 2px ${t}, 0 18px 44px -22px rgba(0,0,0,0.4)`}:void 0,children:e.jsx("img",{src:c.logo,alt:"",onError:Mc,className:"h-full w-full rounded-lg object-cover"})}),e.jsx("span",{className:`mt-2.5 max-w-[7rem] truncate rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors duration-200 ${n?"border-rule-strong bg-surface text-ink":"border-rule bg-surface-2 text-ink-2 group-hover:border-rule-strong group-hover:text-ink"}`,children:c.name}),n&&e.jsxs("span",{className:"absolute bottom-full left-1/2 z-20 mb-3 w-64 rounded-lg border border-rule bg-surface p-3 text-left shadow-lift-lg animate-rise-in",style:{marginLeft:ka},children:[e.jsx(Ic,{item:c,color:t}),e.jsx("span",{className:"absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-rule bg-surface","aria-hidden":"true"})]})]}),yc=({category:c,className:t=""})=>e.jsxs(Q,{to:c.listHref,className:`group block ${t}`,children:[e.jsx("p",{className:"text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text",children:c.zh}),e.jsx("p",{className:"text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text",children:c.en})]}),Sa=()=>{const{activeKey:c,rootRef:t,onClick:n}=za();return e.jsxs("section",{ref:t,className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Timeline"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[qe[0]," — ",qe[qe.length-1]]})]}),e.jsxs("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6",children:[e.jsx("h2",{className:"font-serif text-4xl tracking-tight text-ink md:text-5xl",children:"Content"}),e.jsxs("p",{className:"text-xs leading-relaxed text-ink-3 sm:text-right",children:["* 点击图标查看项目简介，再点一次进入项目",e.jsx("br",{}),"* 点击下方文字标签跳转到作品集页面"]})]}),e.jsxs("div",{className:"mt-10 hidden md:block",children:[e.jsxs("div",{className:"grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2",children:[e.jsx("div",{}),qe.map(a=>e.jsx("div",{className:"nums-tabular text-center text-sm font-bold text-ink",children:a},a))]}),xc.map(a=>e.jsxs("div",{className:"mt-10 grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2",children:[e.jsx(yc,{category:a,className:"pt-4"}),e.jsxs("div",{className:"relative col-span-5 pt-4",children:[e.jsx("div",{className:"absolute left-0 right-0 h-[3px]",style:{top:ya,background:a.color},"aria-hidden":"true"}),e.jsx("div",{className:"relative grid grid-cols-5 gap-x-2",children:qe.map(b=>e.jsx("div",{className:"flex flex-wrap items-start justify-center gap-x-3 gap-y-5",children:a.items.filter(g=>g.year===b).map(g=>e.jsx(Ca,{item:g,color:a.color,expanded:c===g.name,onExpandClick:n(g.name)},g.name))},b))})]})]},a.zh))]}),e.jsx("div",{className:"mt-8 space-y-8 md:hidden",children:xc.map(a=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2.5 border-t border-rule pt-3",children:[e.jsx("span",{className:"h-[3px] w-5 shrink-0",style:{background:a.color},"aria-hidden":"true"}),e.jsx(yc,{category:a})]}),e.jsx("div",{className:"mt-3 grid grid-cols-2 items-start gap-2.5 sm:grid-cols-3",children:[...a.items].sort((b,g)=>b.year-g.year).map(b=>{const g=c===b.name;return e.jsxs(Q,{to:b.href,onClick:n(b.name),"aria-expanded":g,className:`flex items-start gap-2.5 border bg-surface p-2 transition-colors ${g?"col-span-2 border-rule-strong sm:col-span-3":"border-rule hover:border-rule-strong"}`,children:[e.jsx("img",{src:b.logo,alt:"",onError:Mc,className:"h-9 w-9 shrink-0 rounded-lg border border-rule object-cover"}),g?e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx(Ic,{item:b,color:a.color,compact:!0}),e.jsx("span",{className:"mt-2 block text-[10px] font-medium",style:{color:a.color},children:"再点一次进入项目 →"})]}):e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block truncate text-xs font-semibold text-ink",children:b.name}),e.jsx("span",{className:"nums-tabular block text-[10px] text-ink-3",children:b.year})]})]},b.name)})})]},a.zh))})]})},Aa=[{key:"all",label:"All"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"ai",label:"AI"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"}],wc={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计、开发、游戏、AI 和城市规划"}),"领域的项目。"]}),product:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"产品"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"游戏"}),"领域的项目。"]}),ai:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"AI"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"教程"}),"领域的项目。"]})},cc=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],kc=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),Nc=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),Ma={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},Se=({value:c,transform:t})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:t,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((n,a)=>e.jsx("span",{className:"flex items-center justify-center",children:Ma[c].includes(a)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},a))}),Ia=()=>{var De,d,j,C,w;const[c,t]=s.useState("all"),n={all:[...Re.map(p=>({...p,type:"product"})),..._e.map(p=>({...p,type:"game"})),...Te.map(p=>({...p,type:"ai"})),...Pe.map(p=>({...p,type:"planning"})),...Be.map(p=>({...p,type:"platform"})),...Ge.map(p=>({...p,type:"tutorial"}))],product:Re.map(p=>({...p,type:"product"})),planning:Pe.map(p=>({...p,type:"planning"})),game:_e.map(p=>({...p,type:"game"})),ai:Te.map(p=>({...p,type:"ai"})),platform:Be.map(p=>({...p,type:"platform"})),tutorial:Ge.map(p=>({...p,type:"tutorial"}))},a=p=>n[p].length,b=n[c]??n.all,g=Math.max(0,b.length-1),[i,m]=s.useState(0),x=p=>{t(p),m(0)},_=p=>{if(!p)return[];const o=/<video[^>]+src="([^"]+)"/gi;return Array.from(p.matchAll(o),l=>l[1])},L=p=>{var l,f;if(!p)return null;const o=(l=p.details)==null?void 0:l.image;return o!=null&&o.length?o[0]:((f=p.details)==null?void 0:f.logo)??null},z=b[(i-1+b.length)%b.length],y=b[(i+1)%b.length],G=L(z),r=L(y),[S,A]=s.useState(0),[I,N]=s.useState(!1),T=s.useRef(null),F=s.useRef(null),M=b[i],ee=((De=M==null?void 0:M.details)==null?void 0:De.image)??[];ee.length>=2&&ee[(S-1+ee.length)%ee.length],ee.length>=3?ee[(S+1)%ee.length]:ee.length===2&&ee[(S+1)%2],s.useEffect(()=>{A(0),N(!1)},[i,c]);const[ne,D]=s.useState({x:0,y:0}),B=()=>{D(p=>({x:p.x+720+Math.round(Math.random()*360),y:p.y+720+Math.round(Math.random()*360)})),setTimeout(()=>se(Math.floor(Math.random()*b.length)),900)},V=_(((d=M==null?void 0:M.details)==null?void 0:d.content)??""),K=((j=M==null?void 0:M.details)==null?void 0:j.image)??[],W=[...V,...K],Z=W.length>0?W[S%W.length]:(C=M==null?void 0:M.details)==null?void 0:C.logo,ie=V.length>0&&S<V.length,re=K.length>0?K[0]:(w=M==null?void 0:M.details)==null?void 0:w.logo,oe=()=>{A(p=>(p+1)%(W.length||1))};s.useEffect(()=>{if(F.current&&(clearInterval(F.current),F.current=null),!(ie||W.length<=1))return F.current=setInterval(oe,5e3),()=>{F.current&&(clearInterval(F.current),F.current=null)}},[i,c,ie,W.length]);const X=()=>{const p=T.current;p&&(p.muted=!p.muted,N(!p.muted))},Y=s.useRef(null),be=3,J=s.useRef({isDown:!1,isDragging:!1,startX:0,scrollLeft:0}),Ee=p=>{var o;J.current={isDown:!0,isDragging:!1,startX:p.clientX,scrollLeft:((o=Y.current)==null?void 0:o.scrollLeft)??0}},fe=p=>{var l;if(!J.current.isDown)return;const o=p.clientX-J.current.startX;!J.current.isDragging&&Math.abs(o)<be||(J.current.isDragging||(J.current.isDragging=!0,(l=Y.current)==null||l.setPointerCapture(p.pointerId)),p.preventDefault(),Y.current.scrollLeft=J.current.scrollLeft-o)},Fe=p=>{var o;J.current.isDragging&&((o=Y.current)==null||o.releasePointerCapture(p.pointerId)),J.current={isDown:!1,isDragging:!1,startX:0,scrollLeft:0}},se=p=>{m(p)};s.useEffect(()=>{const p=Y.current;if(!p)return;const o=p.children[i];o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[i]);const ue=s.useRef(null),ye=s.useRef([]),[we,ic]=s.useState(0),[Lc,ce]=s.useState(0),[Oe,ke]=s.useState({start:!0,end:!1}),[Ue,Ve]=s.useState({}),he=p=>{const o=p%cc.length;ic(o);const l=ue.current;if(l){const f=l.children[o];f&&l.scrollTo({left:f.offsetLeft-l.offsetWidth/2+f.offsetWidth/2,behavior:"smooth"})}};s.useEffect(()=>{const p=ye.current[we];p&&(p.currentTime=0,p.play().catch(()=>{}))},[we]);const ve=s.useCallback(()=>{const p=ue.current;if(!p)return;const o=p.firstElementChild,l=(o==null?void 0:o.offsetWidth)||1;ce(Math.round(p.scrollLeft/l)),ke({start:p.scrollLeft<=1,end:p.scrollLeft+p.clientWidth>=p.scrollWidth-1})},[]);s.useEffect(()=>(ve(),window.addEventListener("resize",ve),()=>window.removeEventListener("resize",ve)),[ve]);const We=p=>{const o=ue.current;if(!o)return;const l=o.firstElementChild;o.scrollBy({left:p*((l==null?void 0:l.offsetWidth)||o.clientWidth/2),behavior:"smooth"})},Ke=(p,o)=>{var h;const l=p,f=k=>Ve(v=>v[o]===k?v:{...v,[o]:k});if((h=l.audioTracks)!=null&&h.length){f(Array.from(l.audioTracks).some(k=>k.enabled));return}if("mozHasAudio"in l){f(!!l.mozHasAudio);return}if(typeof l.webkitAudioDecodedByteCount=="number"&&l.webkitAudioDecodedByteCount>0){f(!0);return}if(l.readyState>=3){setTimeout(()=>f(l.webkitAudioDecodedByteCount>0||l.mozHasAudio===!0),500);return}f(!0)};return e.jsxs("div",{className:"animate-rise-in pb-16",children:[Z&&e.jsxs("section",{className:"relative w-full overflow-hidden border-b border-neutral-800",style:{background:"linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)"},children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.07]","aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none",style:{boxShadow:"inset 0 0 140px 50px rgba(0,0,0,0.75)"},"aria-hidden":"true"}),e.jsxs("div",{className:"relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0",children:[e.jsx("button",{onClick:()=>se((i-1+b.length)%b.length),className:"group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block",title:z==null?void 0:z.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[G&&e.jsx("img",{src:G,alt:"",onError:p=>{p.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:z==null?void 0:z.title})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 86%, 0 100%)"},children:e.jsx("img",{src:re,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:p=>{p.target.style.display="none"}})})}),e.jsx("div",{className:"relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]",children:e.jsxs("div",{className:"aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]",style:{boxShadow:"0 0 70px -10px rgba(0,0,0,0.5)"},children:[ie?e.jsx("video",{ref:p=>{T.current=p},src:Z,autoPlay:!0,muted:I,playsInline:!0,onEnded:oe,className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},Z):e.jsx("img",{src:Z,alt:(M==null?void 0:M.title)??"",className:"absolute inset-0 h-full w-full object-cover animate-rise-in",onError:p=>{p.target.style.display="none"}},Z),ie&&e.jsx("button",{onClick:X,className:"absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white",title:I?"Unmute":"Mute",children:I?e.jsxs("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 86%)"},children:e.jsx("img",{src:re,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:p=>{p.target.style.display="none"}})})}),e.jsx("button",{onClick:()=>se((i+1)%b.length),className:"group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block",title:y==null?void 0:y.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[r&&e.jsx("img",{src:r,alt:"",onError:p=>{p.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:y==null?void 0:y.title})})]})})]})]}),e.jsxs("section",{className:"shell pt-10 md:pt-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-ink truncate",children:M==null?void 0:M.title}),e.jsxs("p",{className:"eyebrow shrink-0",children:[M==null?void 0:M.type," · ",M==null?void 0:M.year]})]}),e.jsxs("div",{className:"flex items-center gap-3 shrink-0 min-w-0",children:[W.length>1&&e.jsx("span",{className:"flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]",children:W.map((p,o)=>e.jsx("button",{onClick:()=>A(o),"aria-label":`Media ${o+1}`,className:`h-1.5 shrink-0 rounded-full transition-all duration-300 ${o===S?"w-6 bg-accent":"w-1.5 bg-rule hover:bg-ink-3"}`},o))}),e.jsx("button",{onClick:B,className:"btn-ghost shrink-0 !px-2",title:"Roll a random project",children:e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${ne.x}deg) rotateY(${ne.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(Se,{value:1,transform:"translateZ(10px)"}),e.jsx(Se,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(Se,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(Se,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(Se,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(Se,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})})})]})]}),e.jsx("div",{className:"mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule",children:Aa.map(p=>{const o=c===p.key;return e.jsxs("button",{onClick:()=>x(p.key),"aria-pressed":o,className:`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${o?"text-ink":"text-ink-3 hover:text-ink"}`,children:[p.label,e.jsx("span",{className:"ml-1.5 nums-tabular text-ink-3",children:a(p.key)}),e.jsx("span",{className:`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${o?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]},p.key)})}),e.jsxs("div",{className:"mt-5 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>se(Math.max(0,i-1)),disabled:i<=0,"aria-label":"Previous project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(kc,{})}),e.jsx("div",{ref:Y,className:"flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y",onPointerDown:Ee,onPointerMove:fe,onPointerUp:Fe,onPointerLeave:Fe,children:b.map((p,o)=>{const l=o===i;return e.jsxs("button",{onClick:()=>se(o),className:`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${l?"border-rule-strong bg-surface shadow-lift":"border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface"}`,style:{minWidth:"220px",maxWidth:"280px"},children:[e.jsx("span",{className:`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${l?"text-accent-text":"text-ink-3/60 group-hover:text-ink-3"}`,children:String(o+1).padStart(2,"0")}),e.jsx("div",{className:"h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2",children:e.jsx("img",{src:p.details.logo,alt:"",className:"h-full w-full object-cover",onError:f=>{f.target.style.display="none"}})}),e.jsxs("div",{className:"min-w-0 text-left",children:[e.jsx("p",{className:"truncate text-sm font-bold tracking-tight text-ink",children:p.title}),e.jsxs("p",{className:"eyebrow",children:[p.type," · ",p.year]})]})]},`${p.type}-${p.slug}`)})}),e.jsx("button",{onClick:()=>se(Math.min(g,i+1)),disabled:i>=g,"aria-label":"Next project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(Nc,{})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(i+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(b.length).padStart(2,"0")]}),e.jsx(Q,{to:`/${M==null?void 0:M.type}/${M==null?void 0:M.slug}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink",children:"View details →"})]})]}),e.jsx("section",{className:"shell border-t border-rule py-10 md:py-0",children:e.jsxs("div",{className:"max-w-12xl",children:[e.jsx("p",{className:"mt-4 max-w-3xl text-lg text-ink",children:"你好！我是林丽丽，欢迎来到我的作品集。"}),e.jsx("p",{className:"mt-4 max-w-measure text-base leading-relaxed text-ink-2",children:wc[c]??wc.all})]})}),e.jsx(Sa,{}),e.jsx(ua,{}),e.jsxs("section",{className:"shell pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Motion"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(we+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(cc.length).padStart(2,"0")]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"Video Gallery"}),e.jsxs("div",{className:"flex shrink-0 gap-2",children:[e.jsx("button",{onClick:()=>We(-1),disabled:Oe.start,"aria-label":"Scroll gallery left",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(kc,{})}),e.jsx("button",{onClick:()=>We(1),disabled:Oe.end,"aria-label":"Scroll gallery right",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(Nc,{})})]})]}),e.jsx("div",{ref:ue,onScroll:ve,className:"mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4",children:cc.map((p,o)=>{const l=o===we;return e.jsxs("figure",{className:`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${l?"ring-1 ring-accent ring-offset-2 ring-offset-canvas":""}`,onMouseEnter:f=>{const h=f.currentTarget.querySelector("video");h&&!l&&h.play().catch(()=>{})},onMouseLeave:f=>{const h=f.currentTarget.querySelector("video");h&&!l&&h.pause()},children:[e.jsxs("div",{className:"relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2",children:[e.jsx("video",{ref:f=>{ye.current[o]=f},className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",src:p.src,muted:!0,playsInline:!0,preload:"metadata",onCanPlay:f=>Ke(f.currentTarget,o),onEnded:()=>{l&&he(o+1)}}),l&&e.jsxs("span",{className:"absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent animate-pulse"}),"Now"]}),Ue[o]&&e.jsx("span",{className:"absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white",title:"Has audio",children:e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),e.jsxs("figcaption",{className:"mt-2.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:String(o+1).padStart(2,"0")}),e.jsx("span",{className:"truncate text-sm text-ink-2",children:p.title})]})]},p.src)})})]})]})},La=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),Ea=()=>{const[c,t]=s.useState(La),n=()=>{const a=!c;t(a),document.documentElement.classList.toggle("dark",a);try{localStorage.setItem("theme",a?"dark":"light")}catch{}};return e.jsx("button",{onClick:n,className:"icon-btn","aria-label":c?"Switch to light theme":"Switch to dark theme",title:c?"切换到日间模式":"切换到夜间模式",children:c?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},zc="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",Da="/data/223_cities_cluster_with_index_deciles.csv",Ae=c=>{const t=c.replace("#",""),n=parseInt(t.slice(0,2),16),a=parseInt(t.slice(2,4),16),b=parseInt(t.slice(4,6),16);return[n,a,b]},Me=(c,t,n)=>{const a=Math.round(c[0]+(t[0]-c[0])*n),b=Math.round(c[1]+(t[1]-c[1])*n),g=Math.round(c[2]+(t[2]-c[2])*n);return`rgb(${a}, ${b}, ${g})`},Ie=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],qa=()=>{var De;const c=s.useRef(null),t=s.useRef(null),[n,a]=s.useState(!0),[b,g]=s.useState(0),[i,m]=s.useState(null),[x,_]=s.useState(null),[L,z]=s.useState([]),[y,G]=s.useState(null),[r,S]=s.useState("K_12"),[A,I]=s.useState(!0),[N,T]=s.useState(null),[F,M]=s.useState(null),[ee,ne]=s.useState(!1),[D,B]=s.useState(null),[V,K]=s.useState(!1),[W,Z]=s.useState(null),[ie,re]=s.useState(!1),[oe,X]=s.useState(0),[Y,be]=s.useState(""),[J,Ee]=s.useState(!1),[fe,Fe]=s.useState(!0),[se,ue]=s.useState(!0),[ye,we]=s.useState({}),[ic,Lc]=s.useState(!1),[ce,Oe]=s.useState("global"),ke=s.useRef(null),Ue=s.useRef(null),Ve=s.useRef(!1),he=s.useRef(null),ve=(d,j)=>{let C=d.features;y!==null&&(C=C.filter(h=>{var v;const k=(v=h.properties)==null?void 0:v.Place;return k!==void 0&&Number(k)===Number(y)}));const w=C.map(h=>{var k;return(k=h.properties)==null?void 0:k[j]}).filter(h=>{if(h==null)return!1;if(typeof h=="string"){const v=h.trim();if(v===""||/^(na|nan|null)$/i.test(v))return!1}const k=Number(h);return!(Number.isNaN(k)||k===-9999)}).map(h=>Number(h)),p=C.reduce((h,k)=>{var E;const v=(E=k.properties)==null?void 0:E[j];let u=!1;if(v==null)u=!0;else if(typeof v=="string"){const q=v.trim();if(q===""||/^(na|nan|null)$/i.test(q))u=!0;else{const O=Number(v);(Number.isNaN(O)||O===-9999)&&(u=!0)}}else{const q=Number(v);(Number.isNaN(q)||q===-9999)&&(u=!0)}return h+(u?1:0)},0);let o=NaN,l=NaN,f=0;if(w.length>0){o=w[0],l=w[0],f=w[0];for(let h=1;h<w.length;h++){const k=w[h];k<o&&(o=k),k>l&&(l=k),f+=k}}return{count:C.length,min:o,max:l,mean:w.length>0?f/w.length:NaN,nanCount:p}};s.useEffect(()=>{(async()=>{try{const w=(await(await fetch(Da)).text()).trim().split(`
`);if(w.length<2)return;const p=w[0].split(",").map(v=>v.trim()),o={},f=w[w.length-1].split(","),k=w[1].split(",");p.forEach((v,u)=>{if(v===""||v.includes("Place")||v.includes("Sum")||v.includes("FID")||v.includes("index"))return;const E=parseFloat(k[u]),q=parseFloat(f[u]);!isNaN(E)&&!isNaN(q)&&q>E&&(o[v]={min:E,max:q})}),console.log("Loaded attribute ranges:",o),we(o)}catch(j){console.error("Failed to load deciles:",j)}})()},[]),s.useEffect(()=>{!J&&!x&&(async()=>{var j;a(!0),g(0),m(null);try{g(10),console.log("开始下载..."),ke.current=new AbortController;const C=await fetch(zc,{signal:ke.current.signal});if(console.log("响应状态:",C.status),!C.ok)throw new Error(`HTTP error! status: ${C.status}`);g(30);const w=C.headers.get("content-length"),p=w?parseInt(w):null;console.log("预期文件大小:",p);const o=(j=C.body)==null?void 0:j.getReader();if(!o)throw new Error("无法读取响应流");let l=0;const f=[];for(;;){const{done:O,value:R}=await o.read();if(O)break;f.push(R),l+=R.length,g(p?30+Math.round(l/p*60):50)}console.log("下载完成, 收到:",l),p&&l!==p&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const h=new Uint8Array(l);let k=0;for(const O of f)h.set(O,k),k+=O.length;if(g(90),J){console.log("本地数据已加载，跳过网络数据"),a(!1);return}console.log("开始解析 Shapefile...");const v=await rc(h);console.log("Shapefile 解析完成:",v);let u=[];if(v.type==="FeatureCollection"?u=v.features:Array.isArray(v)?u=v:v.type==="Feature"&&(u=[v]),console.log("解析完成，特征数量:",u==null?void 0:u.length),J)return;const E={type:"FeatureCollection",features:u||[]};_(E),g(100);const q=new Map;E.features.forEach(O=>{var de;const R=Number(((de=O.properties)==null?void 0:de.Place)??0);q.has(R)||q.set(R,{id:R,name:`Place ${R}`,featureCount:0});const te=q.get(R);te&&te.featureCount++}),z(Array.from(q.values()).sort((O,R)=>O.id-R.id)),a(!1)}catch(C){if(C.name==="AbortError"){console.log("网络请求已取消");return}m(C instanceof Error?C.message:"Failed to load"),a(!1)}})()},[]),s.useEffect(()=>{x&&T(ve(x,r))},[x,y,r,ce,ye]),s.useEffect(()=>{if(!x)return;const d=t.current;if(!d)return;const j=()=>{var w,p,o,l;if(x.features.forEach((f,h)=>{f.id===void 0&&(f.id=h)}),d.getSource("cluster"))d.getSource("cluster").setData(x);else{console.log("初始化 cluster 数据源..."),d.addSource("cluster",{type:"geojson",data:x,generateId:!0}),d.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),d.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),d.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),d.on("click","cluster-fill",h=>{var k;if(h.features&&h.features.length>0){const v=h.features[0],u=v.id;he.current!==null&&he.current!==void 0&&d.setFeatureState({source:"cluster",id:he.current},{selected:!1}),u!==void 0?(d.setFeatureState({source:"cluster",id:u},{selected:!0}),he.current=u):he.current=null,B(v),K(!0),((k=v.properties)==null?void 0:k.Place)!==void 0&&G(Number(v.properties.Place))}}),d.on("mouseenter","cluster-fill",()=>{d.getCanvas().style.cursor="pointer"}),d.on("mouseleave","cluster-fill",()=>{d.getCanvas().style.cursor=""});const f=x.features;if(f.length>0)try{const h=new He.LngLatBounds,k=Math.max(1,Math.floor(f.length/2e3));for(let v=0;v<f.length;v+=k){const u=f[v];if(!((w=u.geometry)!=null&&w.coordinates))continue;const E=u.geometry.type,q=u.geometry.coordinates;E==="Point"?h.extend(q):E==="LineString"||E==="MultiPoint"?q.forEach(O=>h.extend(O)):E==="Polygon"||E==="MultiLineString"?(p=q[0])==null||p.forEach(O=>h.extend(O)):E==="MultiPolygon"&&((l=(o=q[0])==null?void 0:o[0])==null||l.forEach(O=>h.extend(O)))}h.isEmpty()||d.fitBounds(h,{padding:50,duration:1e3})}catch(h){console.error("Fit bounds error:",h)}}},C=()=>{var R;if(!d.getLayer("cluster-fill"))return;const w=null;d.setFilter("cluster-fill",w),d.setFilter("cluster-line",w),d.setFilter("cluster-highlight",w);const p=(()=>{var Ze;let te=1/0,de=-1/0;for(const Xe of x.features){const ge=Number((Ze=Xe.properties)==null?void 0:Ze[r]);Number.isNaN(ge)||ge===-9999||(ge<te&&(te=ge),ge>de&&(de=ge))}return{min:te===1/0?0:te,max:de===-1/0?0:de}})(),o=y!==null&&N?{min:N.min,max:N.max}:p,l=ce==="city"?o:p,f=l.min,h=l.max;let k;if(r.includes("K_")){const te=Math.round(((R=ye[r])==null?void 0:R.max)??h),de=Array.from({length:26},(Ne,Ye)=>{const pe=Ye/25;let me,je,xe;if(pe<.167){const ae=pe/.167;me=0,je=0,xe=Math.round(139+116*ae)}else if(pe<.333){const ae=(pe-.167)/.167;me=0,je=Math.round(255*ae),xe=255}else if(pe<.5){const ae=(pe-.333)/.167;me=0,je=Math.round(255-128*ae),xe=Math.round(255-255*ae)}else if(pe<.667){const ae=(pe-.5)/.167;me=Math.round(255*ae),je=255,xe=0}else if(pe<.833){const ae=(pe-.667)/.167;me=255,je=Math.round(255-128*ae),xe=0}else{const ae=(pe-.833)/.167;me=255,je=Math.round(127-127*ae),xe=0}return`#${me.toString(16).padStart(2,"0")}${je.toString(16).padStart(2,"0")}${xe.toString(16).padStart(2,"0")}`}),Xe=Array.from({length:te+1},(Ne,Ye)=>de[Math.round(Ye*25/te)]).slice(0,te+1),ge=["interpolate",["linear"],["get",r]];for(let Ne=0;Ne<=te;Ne++)ge.push(Ne,Xe[Ne]);k=ge}else r==="CoverRatio"||r==="ISF"||r==="GreenRatio"?k=["interpolate",["linear"],["get",r],f,"#3182bd",h,"#e6550d"]:r.includes("elev")||r.includes("slope")?k=["interpolate",["linear"],["get",r],f,"#31a354",h,"#756bb1"]:k=["interpolate",["linear"],["get",r],f,"#31a354",h,"#756bb1"];d.setPaintProperty("cluster-fill","fill-color",k);const v=y!==null,u=Number(y),O=["case",["any",["==",["get",r],-9999],["==",["get",r],null]],0,v?["case",["==",["to-number",["get","Place"]],u],.8,.15]:.7];d.setPaintProperty("cluster-fill","fill-opacity",O)};d.isStyleLoaded()?(j(),C()):d.once("load",()=>{j(),C()})},[x,y,r]),s.useEffect(()=>{var C,w,p,o;if(!x||y===null)return;const d=t.current;if(!d)return;const j=x.features.filter(l=>{var h;const f=(h=l.properties)==null?void 0:h.Place;return f!==void 0&&Number(f)===Number(y)});if(j.length!==0)try{const l=new He.LngLatBounds;let f=0;const h=Math.max(1,Math.floor(j.length/2e3));for(let k=0;k<j.length;k+=h){const v=j[k];if(!((C=v.geometry)!=null&&C.coordinates))continue;const u=v.geometry.type,E=v.geometry.coordinates;u==="Point"?(l.extend(E),f++):u==="LineString"||u==="MultiPoint"?(E.forEach(q=>l.extend(q)),f++):u==="Polygon"||u==="MultiLineString"?((w=E[0])==null||w.forEach(q=>l.extend(q)),f++):u==="MultiPolygon"&&((o=(p=E[0])==null?void 0:p[0])==null||o.forEach(q=>l.extend(q)),f++)}!l.isEmpty()&&f>0&&d.fitBounds(l,{padding:50,duration:1e3})}catch(l){console.error("Fly to error:",l)}},[y]),s.useEffect(()=>((async()=>{(!c.current||t.current)&&console.log("开始初始化地图...");try{const j=new He.Map({container:c.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});j.addControl(new He.NavigationControl,"top-right"),j.on("load",()=>{console.log("地图样式加载完成")}),j.on("error",C=>{var o;const w=String(((o=C==null?void 0:C.error)==null?void 0:o.message)||(C==null?void 0:C.message)||"");w.includes("ERR_ABORTED")||w.includes("AbortError")||w.includes("Canceled")||w.includes("cancelled")||console.error("地图错误:",C)}),t.current=j,console.log("地图初始化完成")}catch(j){console.error("地图初始化错误:",j)}})(),()=>{t.current&&(t.current.remove(),t.current=null,Ve.current=!1)}),[]),s.useEffect(()=>{const d=t.current;if(!d)return;const j=()=>{d.getLayer("simple-tiles")&&d.setLayoutProperty("simple-tiles","visibility",fe?"visible":"none")};d.isStyleLoaded()?j():d.once("style.load",j)},[fe]);const We=async d=>{var C;const j=(C=d.target.files)==null?void 0:C[0];if(j){ke.current&&ke.current.abort(),re(!0),X(0),be("正在读取文件..."),m(null),ne(!0),M(URL.createObjectURL(j));try{console.log("开始读取文件:",j.name,"大小:",j.size);let w=[];const p=j.name.endsWith(".zip"),o=j.name.endsWith(".shp");if(!p&&!o){m("请上传 .zip 文件 (包含 Shapefile)"),re(!1);return}be("正在读取文件...");const l=await j.arrayBuffer();X(30),be("正在解析 Shapefile...");const f=await rc(l);console.log("Shapefile 解析完成:",f),f.type==="FeatureCollection"?w=f.features:Array.isArray(f)?w=f:f.type==="Feature"&&(w=[f]),console.log("解析到的 features 数量:",w.length),X(95),be(`已解析 ${w.length} 个 Features...`);const h={type:"FeatureCollection",features:w};X(98),be("正在处理 Place 数据...");const k=new Map;h.features.forEach(v=>{var q;const u=Number(((q=v.properties)==null?void 0:q.Place)??0);k.has(u)||k.set(u,{id:u,name:`Place ${u}`,featureCount:0});const E=k.get(u);E&&E.featureCount++}),X(100),be("加载完成!"),setTimeout(()=>{Ee(!0),_(h),z(Array.from(k.values()).sort((v,u)=>v.id-u.id)),re(!1),ne(!1),a(!1)},500)}catch(w){const p=w instanceof Error?w.message:"未知错误";m(`加载失败: ${p}`),re(!1),a(!1)}}},Ke=Ie.reduce((d,j)=>(d[j.category]||(d[j.category]=[]),d[j.category].push(j),d),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[ie&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(sc,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:Y}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${oe}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[oe,"%"]})]})}),n&&!ie?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Bc,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${b}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[b,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:zc,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(Gc,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var d;return(d=Ue.current)==null?void 0:d.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(sc,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Ue,type:"file",accept:".shp,.zip",onChange:We,className:"hidden"})]})}):null,i&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:i}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(Fc,{size:14}),"刷新重试"]})})]}),A&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(Oc,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>I(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Uc,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Fe(!fe),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${fe?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${fe?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:y??"",onChange:d=>G(d.target.value?Number(d.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((De=x==null?void 0:x.features)==null?void 0:De.length)??0,")"]}),L.map(d=>e.jsxs("option",{value:d.id,children:[d.name," (",d.featureCount,")"]},d.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:r,onChange:d=>S(d.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Ke).map(([d,j])=>[e.jsx("optgroup",{label:d.charAt(0).toUpperCase()+d.slice(1),children:j.map(C=>e.jsx("option",{value:C.key,children:C.label},C.key))},d)])})]}),N&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Wc,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:N.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:N.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:N.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:N.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:N.nanCount})]})]})]})]})]}),!A&&e.jsx("button",{onClick:()=>I(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Hc,{size:18})}),V&&D&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[D.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",D.properties.Place]}),D.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",D.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",D.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>K(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(dc,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:Ie.map(d=>{var C;const j=(C=D.properties)==null?void 0:C[d.key];return j==null?null:e.jsxs("button",{onClick:()=>S(d.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${r===d.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:d.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof j=="number"?j.toFixed(2):j})]},d.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>G(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:c,className:"w-full h-full"}),se&&x&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(gc,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>ue(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(dc,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Oe(ce==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${ce==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:ce==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:r.includes("K_")?(()=>{var w,p;const d=Math.round(((w=ye[r])==null?void 0:w.max)??30),j=Array.from({length:26},(o,l)=>{const f=l/25;let h,k,v;if(f<.167){const u=f/.167;h=0,k=0,v=Math.round(139+116*u)}else if(f<.333){const u=(f-.167)/.167;h=0,k=Math.round(255*u),v=255}else if(f<.5){const u=(f-.333)/.167;h=0,k=Math.round(255-128*u),v=Math.round(255-255*u)}else if(f<.667){const u=(f-.5)/.167;h=Math.round(255*u),k=255,v=0}else if(f<.833){const u=(f-.667)/.167;h=255,k=Math.round(255-128*u),v=0}else{const u=(f-.833)/.167;h=255,k=Math.round(127-127*u),v=0}return`#${h.toString(16).padStart(2,"0")}${k.toString(16).padStart(2,"0")}${v.toString(16).padStart(2,"0")}`}),C=Array.from({length:d+1},(o,l)=>j[Math.round(l*25/d)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((p=Ie.find(o=>o.key===r))==null?void 0:p.label)||r}),e.jsx("div",{className:"flex flex-wrap gap-px",children:C.map((o,l)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:o}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:l})]},l))})]})})():r==="CoverRatio"||r==="ISF"||r==="GreenRatio"?(()=>{var v;const d=(()=>{var q;let u=1/0,E=-1/0;for(const O of x.features){const R=Number((q=O.properties)==null?void 0:q[r]);Number.isNaN(R)||R===-9999||(R<u&&(u=R),R>E&&(E=R))}return{min:u===1/0?0:u,max:E===-1/0?0:E}})(),j=y!==null&&N?{min:N.min,max:N.max}:d,C=((v=Ie.find(u=>u.key===r))==null?void 0:v.label)||r,w=d.max>d.min?Math.max(0,Math.min(1,(j.min-d.min)/(d.max-d.min))):0,p=d.max>d.min?Math.max(0,Math.min(1,(j.max-d.min)/(d.max-d.min))):0,o=Math.max(0,p-w),l=Ae("#3182bd"),f=Ae("#e6550d"),h=Me(l,f,w),k=Me(l,f,p);return e.jsxs("div",{children:[ce==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[C,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:y!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${w*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${h}, ${k})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:j.min.toFixed(2)}),e.jsx("span",{children:j.max.toFixed(2)})]})]}),ce==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[C,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(2)}),e.jsx("span",{children:d.max.toFixed(2)})]})]})]})})():r.includes("elev")||r.includes("slope")?(()=>{var v;const d=(()=>{var q;let u=1/0,E=-1/0;for(const O of x.features){const R=Number((q=O.properties)==null?void 0:q[r]);Number.isNaN(R)||R===-9999||(R<u&&(u=R),R>E&&(E=R))}return{min:u===1/0?0:u,max:E===-1/0?0:E}})(),j=y!==null&&N?{min:N.min,max:N.max}:d,C=((v=Ie.find(u=>u.key===r))==null?void 0:v.label)||r,w=d.max>d.min?Math.max(0,Math.min(1,(j.min-d.min)/(d.max-d.min))):0,p=d.max>d.min?Math.max(0,Math.min(1,(j.max-d.min)/(d.max-d.min))):0,o=Math.max(0,p-w),l=Ae("#31a354"),f=Ae("#756bb1"),h=Me(l,f,w),k=Me(l,f,p);return e.jsxs("div",{children:[ce==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[C,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:y!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${w*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${h}, ${k})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:j.min.toFixed(1)}),e.jsxs("span",{children:[j.max.toFixed(0),"+"]})]})]}),ce==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[C,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(1)}),e.jsxs("span",{children:[d.max.toFixed(0),"+"]})]})]})]})})():(()=>{var v;const d=(()=>{var q;let u=1/0,E=-1/0;for(const O of x.features){const R=Number((q=O.properties)==null?void 0:q[r]);Number.isNaN(R)||R===-9999||(R<u&&(u=R),R>E&&(E=R))}return{min:u===1/0?0:u,max:E===-1/0?0:E}})(),j=y!==null&&N?{min:N.min,max:N.max}:d,C=((v=Ie.find(u=>u.key===r))==null?void 0:v.label)||r,w=d.max>d.min?Math.max(0,Math.min(1,(j.min-d.min)/(d.max-d.min))):0,p=d.max>d.min?Math.max(0,Math.min(1,(j.max-d.min)/(d.max-d.min))):0,o=Math.max(0,p-w),l=Ae("#31a354"),f=Ae("#756bb1"),h=Me(l,f,w),k=Me(l,f,p);return e.jsxs("div",{children:[ce==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[C,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:y!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${w*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${h}, ${k})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:j.min.toFixed(2)}),e.jsx("span",{children:j.max.toFixed(2)})]})]}),ce==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[C,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:d.min.toFixed(2)}),e.jsx("span",{children:d.max.toFixed(2)})]})]})]})})()})]}),!se&&e.jsx("button",{onClick:()=>ue(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(gc,{size:18})})]})},Pa=[{key:"",label:"Home"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"ai",label:"AI"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"blog",label:"Blog"},{key:"about",label:"About"}],Ra={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},Le=({value:c,transform:t})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:t,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((n,a)=>e.jsx("span",{className:"flex items-center justify-center",children:Ra[c].includes(a)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},a))}),_a=()=>{const[c,t]=s.useState(!1),[n,a]=s.useState(!1),[b,g]=s.useState({x:0,y:0}),i="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili",[m,x]=s.useState(`${i}/lili_01.png`),[_,L]=s.useState("Exploring the intersection of technology and creativity."),z=qc(),y=Pc(),r=z.pathname.split("/").filter(Boolean)[0]||"",S={product:`${i}/lili_05.png`,game:`${i}/lili_03.png`,ai:`${i}/lili_07.png`,platform:`${i}/lili_11.png`,tutorial:`${i}/lili_04.png`,about:`${i}/lili_02.png`,planning:`${i}/lili_06.png`},A=[`${i}/lili_01.png`,`${i}/lili_07.png`,`${i}/lili_08.png`,`${i}/lili_09.png`,`${i}/lili_10.png`,`${i}/lili_12.png`],I=["探索科技与创意的交汇点。","把数据转化为有意义的故事。","构建能激发灵感的数字体验。","连接产品与开发的桥梁。","创造在真实世界中落地的解决方案。","热衷于地理空间技术与城市规划。"],N=F=>F[Math.floor(Math.random()*F.length)];s.useEffect(()=>{x(S[r]??N(A)),L(N(I))},[r]);const T=()=>{g(M=>({x:M.x+720+Math.round(Math.random()*360),y:M.y+720+Math.round(Math.random()*360)}));const F=["product","game","ai","planning","platform","tutorial","about"];setTimeout(()=>y(`/${N(F)}`),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${n?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 items-center",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>t(!c),className:"icon-btn","aria-expanded":c,"aria-label":c?"Hide profile panel":"Show profile panel",title:c?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(Q,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"林丽丽 Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:Pa.map(F=>{const M=r===F.key;return e.jsx("li",{className:"flex",children:e.jsxs(Q,{to:`/${F.key}`,onClick:()=>{window.innerWidth<768&&t(!1)},"aria-current":M?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${M?"text-ink":"text-ink-3 hover:text-ink"}`,children:[F.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${M?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},F.key||"home")})})})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(Ea,{}),e.jsxs("button",{onClick:T,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"随机探索一个项目",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${b.x}deg) rotateY(${b.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(Le,{value:1,transform:"translateZ(10px)"}),e.jsx(Le,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(Le,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(Le,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(Le,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(Le,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>a(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),n&&e.jsx("button",{onClick:()=>a(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[c&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[m&&e.jsx("img",{src:m,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"设计师 · 开发者 · 产品创作者"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"创造有意义的数字体验，连接技术与创意。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:_}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(ec,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(ec,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(ec,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsx("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:e.jsxs(pc,{children:[e.jsx($,{path:"/",element:e.jsx(Ia,{})}),e.jsx($,{path:"/planning",element:e.jsx(ze,{data:Pe,type:"planning"})}),e.jsx($,{path:"/planning/:id",element:e.jsx(Ce,{data:Pe,type:"planning"})}),e.jsx($,{path:"/product",element:e.jsx(ze,{data:Re,type:"product"})}),e.jsx($,{path:"/product/:id",element:e.jsx(Ce,{data:Re,type:"product"})}),e.jsx($,{path:"/game",element:e.jsx(ze,{data:_e,type:"game"})}),e.jsx($,{path:"/game/:id",element:e.jsx(Ce,{data:_e,type:"game"})}),e.jsx($,{path:"/ai",element:e.jsx(ze,{data:Te,type:"ai"})}),e.jsx($,{path:"/ai/:id",element:e.jsx(Ce,{data:Te,type:"ai"})}),e.jsx($,{path:"/platform",element:e.jsx(ze,{data:Be,type:"platform"})}),e.jsx($,{path:"/platform/:id",element:e.jsx(Ce,{data:Be,type:"platform"})}),e.jsx($,{path:"/tutorial",element:e.jsx(ze,{data:Ge,type:"tutorial"})}),e.jsx($,{path:"/tutorial/:id",element:e.jsx(Ce,{data:Ge,type:"tutorial"})}),e.jsx($,{path:"/clusteringeomap",element:e.jsx(qa,{})}),e.jsx($,{path:"/about",element:e.jsx(ga,{})}),e.jsx($,{path:"/contact",element:e.jsx(oa,{})})]})})]})]})},Ta=`---
title: "欢迎来到我的博客"
date: "2026-09-18"
description: "这是一篇示例博文，展示博客的格式：把 .md 文件丢进 src/data/blog/ 就会自动出现。"
tags: ["博客", "介绍"]
---

这是一个**完全独立**的博客组件，跟作品集主页互不干扰。

> 标题已经由 frontmatter 渲染在文章顶部了，正文里不用再写一遍 \`# 标题\`。

## 怎么写一篇新文章

1. 在 \`src/data/blog/\` 里新建一个 \`.md\` 文件，文件名就是链接（slug）。
2. 文件开头用 \`---\` 包裹的 frontmatter 写标题、日期、摘要、标签：

\`\`\`yaml
---
title: "文章标题"
date: "2026-09-18"
description: "一句话摘要"
tags: ["标签A", "标签B"]
---
\`\`\`

3. 保存后刷新页面，文章就会自动出现在列表里——**不用改任何代码**。

## 支持的内容

- 标题、段落、列表、引用、表格
- 代码块（带语法高亮样式）
- 图片 \`![描述](图片链接)\`
- 链接（自动在新标签页打开）

> 博客支持 Markdown 的 GFM 语法（表格、删除线、任务列表等）。

祝写作愉快 🎉
`,Ba=/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/,Ga=/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/,Fa=/^\s*-\s*(.*)$/,Oa=65279;function Ua(c){const n=(c.charCodeAt(0)===Oa?c.slice(1):c).replace(/\r\n/g,`
`),a=Ba.exec(n);if(!a)return{data:{},content:n};const b={};let g=null;for(const i of a[1].split(`
`)){if(!i.trim()||i.trimStart().startsWith("#"))continue;const m=Fa.exec(i);if(m&&g){b[g].push(bc(m[1]));continue}const x=Ga.exec(i);if(!x)continue;const[,_,L]=x,z=L.trim();if(z===""){g=_,b[_]=[];continue}g=null,b[_]=z.startsWith("[")&&z.endsWith("]")?Wa(z.slice(1,-1)):bc(z)}return{data:b,content:n.slice(a[0].length)}}function bc(c){const t=c.trim(),n=t[0];return t.length>=2&&(n==='"'||n==="'")&&t.endsWith(n)?t.slice(1,-1).replace(/\\(["'])/g,"$1"):t}function Wa(c){return c.split(",").map(t=>bc(t)).filter(t=>t!=="")}const Ha=Object.assign({"./blog/hello-world.md":Ta});function $a(c){return c instanceof Date?c.toISOString().slice(0,10):typeof c=="string"?c.trim():""}function Va(c,t){const n=c.split("/").pop().replace(/\.md$/,"");try{const{data:a,content:b}=Ua(t);return{slug:n,title:typeof a.title=="string"&&a.title?a.title:n,date:$a(a.date),description:typeof a.description=="string"?a.description:"",tags:Array.isArray(a.tags)?a.tags.map(String):[],cover:typeof a.cover=="string"&&a.cover?a.cover:void 0,content:b}}catch(a){return console.error(`[blog] 解析 ${c} 失败，已跳过 frontmatter`,a),{slug:n,title:n,date:"",description:"",tags:[],content:t}}}const $e=Object.entries(Ha).map(([c,t])=>Va(c,t)).sort((c,t)=>t.date.localeCompare(c.date)),Ka=c=>$e.find(t=>t.slug===c),le={repo:"LiliLIN0324/lililin0324.github.io",repoId:"R_kgDOQpt6HQ",category:"Announcements",categoryId:"DIC_kwDOQpt6Hc4DF4Yk",mapping:"specific",lang:"zh-CN",theme:"preferred_color_scheme"},Za=({term:c})=>{const t=s.useRef(null),n=!!le.categoryId;return s.useEffect(()=>{if(!n)return;const a=t.current;if(!a)return;a.innerHTML="";const b=document.createElement("script");b.src="https://giscus.app/client.js",b.async=!0,b.crossOrigin="anonymous",b.setAttribute("data-repo",le.repo),b.setAttribute("data-repo-id",le.repoId),b.setAttribute("data-category",le.category),b.setAttribute("data-category-id",le.categoryId),b.setAttribute("data-mapping",le.mapping),b.setAttribute("data-term",c),b.setAttribute("data-strict","0"),b.setAttribute("data-reactions-enabled","1"),b.setAttribute("data-emit-metadata","0"),b.setAttribute("data-input-position","top"),b.setAttribute("data-theme",le.theme),b.setAttribute("data-lang",le.lang),b.setAttribute("data-loading","lazy"),a.appendChild(b)},[c,n]),n?e.jsx("div",{ref:t,className:"giscus mt-10"}):e.jsxs("div",{className:"border border-dashed border-rule p-6",children:[e.jsx("p",{className:"eyebrow mb-2",children:"Comments"}),e.jsxs("p",{className:"text-sm leading-relaxed text-ink-3",children:["评论尚未配置。在"," ",e.jsx("code",{className:"font-mono text-ink-2",children:"src/blog/BlogComments.tsx"})," ","的 ",e.jsx("code",{className:"font-mono text-ink-2",children:"GISCUS_CONFIG"})," 里填入 repoId 与 categoryId 即可（仓库的 Discussions 已开启）。"]})]})},Xa={table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:a,className:"mb-5 text-2xl font-bold tracking-tight text-ink first:mt-0",...t,children:c})},h2:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:a,className:"mt-10 mb-4 text-xl font-bold tracking-tight text-ink",...t,children:c})},h3:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:a,className:"mt-8 mb-3 text-lg font-bold text-ink",...t,children:c})},h4:({children:c,...t})=>e.jsx("h4",{className:"mt-6 mb-2 text-base font-semibold text-ink",...t,children:c}),h5:({children:c,...t})=>e.jsx("h5",{className:"mt-5 mb-2 text-sm font-semibold text-ink-2",...t,children:c}),h6:({children:c,...t})=>e.jsx("h6",{className:"mt-4 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...t,children:c}),p:({children:c,...t})=>e.jsx("p",{className:"mb-5 leading-relaxed text-ink-2",...t,children:c}),a:({children:c,href:t,...n})=>e.jsx("a",{href:t,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...n,children:c}),img:({src:c,alt:t,...n})=>e.jsx("img",{src:c,alt:t,className:"my-6 h-auto w-full border border-rule object-cover",onError:a=>{a.target.style.display="none"},...n}),ul:({children:c,...t})=>e.jsx("ul",{className:"mb-5 list-disc space-y-1 pl-6 text-ink-2",...t,children:c}),ol:({children:c,...t})=>e.jsx("ol",{className:"mb-5 list-decimal space-y-1 pl-6 text-ink-2",...t,children:c}),li:({children:c,...t})=>e.jsx("li",{className:"leading-relaxed",...t,children:c}),blockquote:({children:c,...t})=>e.jsx("blockquote",{className:"my-6 border-l-2 border-accent pl-4 text-ink-2 italic",...t,children:c}),code:({className:c,children:t,...n})=>(c==null?void 0:c.includes("language-"))||typeof t=="string"&&t.includes(`
`)?e.jsx("code",{className:`${c||""} font-mono text-[13px] text-ink`,...n,children:t}):e.jsx("code",{className:"rounded border border-rule bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-ink",...n,children:t}),pre:({children:c,...t})=>e.jsx("pre",{className:"mb-5 overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas",...t,children:c}),hr:({...c})=>e.jsx("hr",{className:"my-10 border-0 border-t border-rule",...c})},Ya=()=>{const{slug:c}=Cc(),t=Ka(c||"");return s.useEffect(()=>(t&&(document.title=`${t.title} · Lili's Blog`),()=>{document.title="Lili Lin | Portfolio"}),[t]),t?e.jsx("article",{className:"shell animate-rise-in py-10 md:py-14",children:e.jsxs("div",{className:"mx-auto max-w-3xl",children:[e.jsxs("div",{className:"mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx(Q,{to:"/blog",className:"transition-colors hover:text-ink",children:"← 全部文章"}),e.jsx("span",{className:"h-3 w-px bg-rule","aria-hidden":"true"}),e.jsx("span",{children:t.date||"未标注日期"})]}),e.jsx("h1",{className:"text-display-sm mb-4",children:t.title}),t.description&&e.jsx("p",{className:"mb-6 max-w-measure text-base leading-relaxed text-ink-2",children:t.description}),t.tags.length>0&&e.jsx("div",{className:"mb-10 flex flex-wrap gap-1.5",children:t.tags.map(n=>e.jsx("span",{className:"chip",children:n},n))}),t.cover&&e.jsx("img",{src:t.cover,alt:"",className:"mb-10 w-full border border-rule object-cover"}),e.jsx("div",{className:"prose-custom border-t border-rule-strong pt-10 text-base leading-relaxed text-ink-2",children:e.jsx(tc,{remarkPlugins:[nc],rehypePlugins:[ac],components:Xa,children:t.content})}),e.jsx(Za,{term:`blog/${t.slug}`})]})}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Post not found"}),e.jsx(Q,{to:"/blog",className:"btn-ghost mt-6",children:"← 返回博客"})]})})},Qa=()=>(s.useEffect(()=>(document.title="Lili's Blog",()=>{document.title="Lili Lin | Portfolio"}),[]),$e.length===0?e.jsxs("div",{className:"shell py-20 text-center",children:[e.jsx("p",{className:"eyebrow",children:"Blog"}),e.jsxs("p",{className:"mt-3 text-ink-3",children:["还没有文章，往 ",e.jsx("code",{className:"font-mono",children:"src/data/blog/"})," 里放一个 .md 文件即可。"]})]}):e.jsxs("div",{className:"shell animate-rise-in py-10 md:py-14",children:[e.jsxs("div",{className:"section-head mb-6",children:[e.jsx("p",{className:"eyebrow",children:"Blog / Index"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String($e.length).padStart(2,"0")," Posts"]})]}),e.jsx("h1",{className:"text-display-sm mb-10",children:"写作"}),e.jsx("ul",{className:"border-t border-rule",children:$e.map((c,t)=>e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs(Q,{to:`/blog/${c.slug}`,className:"flex items-start gap-5 py-6 md:gap-8",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(t+1).padStart(2,"0")}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[e.jsx("h2",{className:"text-lg font-bold tracking-tight text-ink md:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:c.date})]}),c.description&&e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),c.tags.length>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tags.map(n=>e.jsx("span",{className:"chip",children:n},n))})]}),e.jsx("span",{className:"self-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-ink",children:"Read →"})]})},c.slug))})]})),Ja=()=>e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:"shrink-0 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs(Q,{to:"/blog",className:"group flex items-baseline gap-2.5",children:[e.jsx("span",{className:"text-lg font-bold tracking-masthead md:text-xl",children:"Lili's Blog"}),e.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 sm:inline",children:"notes & writing"})]}),e.jsx(Q,{to:"/",className:"btn-ghost !px-3 !py-1.5",children:"← 返回作品集"})]})}),e.jsx("main",{className:"min-h-0 flex-1 overflow-y-auto",children:e.jsxs(pc,{children:[e.jsx($,{index:!0,element:e.jsx(Qa,{})}),e.jsx($,{path:":slug",element:e.jsx(Ya,{})})]})}),e.jsx("footer",{className:"shrink-0 border-t border-rule bg-surface",children:e.jsxs("div",{className:"shell flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx("span",{children:"Lili Lin"}),e.jsxs("span",{children:["© ",new Date().getFullYear()]})]})})]});function en(){const[c,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(Rc,{children:e.jsxs(pc,{children:[e.jsx($,{path:"/blog/*",element:e.jsx(Ja,{})}),e.jsx($,{path:"*",element:e.jsx(_a,{})})]})}),!c&&e.jsx($c,{onFinish:()=>t(!0)})]})}_c.createRoot(document.getElementById("root")).render(e.jsx(en,{}));
