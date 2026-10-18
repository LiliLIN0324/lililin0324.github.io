const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-DFO5eSKd.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-BWPUgRvj.js","./PeaceEliteHustCampusDemo-D-DWwJkq.js","./BMWMetaIslandDemo-7uu2MOZP.js","./riffle-RlweP75u.js","./genstyle-DuJ38oKx.js","./genshot-BoH35G7G.js","./dragon-diffusion-Dj4t-WNK.js","./anyreal-DKKTpW8w.js","./previous-archi-work-CvNoz6hg.js","./hongqiqu-y3eLCJ-3.js","./scendance-TgGmbUpO.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,L as W,u as kc,R as Dc,a as Ec,c as _c,d as Pc,e as tc,f as F,H as Rc,g as qc}from"./react-vendor-6zld6QO8.js";import{A as Tc,m as Qe}from"./framer-DvVmTyA1.js";import{M as Nc,r as Cc,a as Sc}from"./markdown-q3GborES.js";import{b as ac}from"./geo-Z02C8O4I.js";import{m as Fe}from"./maplibre-BedwuVXB.js";import{U as bc,L as Gc,D as Bc,R as Oc,M as Uc,C as Fc,a as Hc,b as Wc,X as pc,c as ic}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))t(b);new MutationObserver(b=>{for(const d of b)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(b){const d={};return b.integrity&&(d.integrity=b.integrity),b.referrerPolicy&&(d.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?d.credentials="include":b.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(b){if(b.ep)return;b.ep=!0;const d=a(b);fetch(b.href,d)}})();function Vc({onFinish:c}){const[n,a]=i.useState(!0),t=i.useRef(null),b=i.useRef({x:-1e3,y:-1e3});return i.useEffect(()=>{const d=t.current;if(!d)return;const r=d.getContext("2d");if(!r)return;let y,m=[];const T=()=>{d.width=window.innerWidth,d.height=window.innerHeight},E=g=>{b.current={x:g.clientX,y:g.clientY}},u=g=>{g.touches.length>0&&(b.current={x:g.touches[0].clientX,y:g.touches[0].clientY})};window.addEventListener("resize",T),window.addEventListener("mousemove",E),window.addEventListener("touchmove",u),T();class w{constructor(){this.x=Math.random()*d.width,this.y=Math.random()*d.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>d.width)&&(this.vx*=-1),(this.y<0||this.y>d.height)&&(this.vy*=-1);let L=b.current.x-this.x,I=b.current.y-this.y,N=Math.sqrt(L*L+I*I),k=L/N,R=I/N;const G=150;let A=(G-N)/G;N<G&&(this.x-=k*A*this.density*.5,this.y-=R*A*this.density*.5)}draw(){r&&(r.fillStyle="rgba(255, 255, 255, 0.8)",r.beginPath(),r.arc(this.x,this.y,this.size,0,Math.PI*2),r.fill())}}for(let g=0;g<120;g++)m.push(new w);const z=()=>{r.clearRect(0,0,d.width,d.height);for(let g=0;g<m.length;g++){m[g].update(),m[g].draw();for(let L=g+1;L<m.length;L++){const I=m[g].x-m[L].x,N=m[g].y-m[L].y,k=Math.sqrt(I*I+N*N);k<100&&(r.beginPath(),r.strokeStyle=`rgba(255, 255, 255, ${.2*(1-k/100)})`,r.lineWidth=.6,r.moveTo(m[g].x,m[g].y),r.lineTo(m[L].x,m[L].y),r.stroke())}}y=requestAnimationFrame(z)};return z(),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",T),window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",u)}},[]),e.jsx(Tc,{onExitComplete:c,children:n&&e.jsxs(Qe.div,{onClick:()=>a(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(Qe.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(Qe.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const $c=`---
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

## 4. 目录结构

\`\`\`
gloabl-urban-heat/
├── main.py                      # PyCharm 占位脚本（无业务逻辑，可忽略）
├── coding/                      # 处理代码（Jupyter Notebook）
│   ├── a_data_process.ipynb          # ① 原始数据 → UHI 滑动平均时间序列
│   ├── b_SOM_kmeans_process.ipynb    # ② SOM + K-means 聚类（主流程）
│   ├── b_SOM_kmeans_process NEW.ipynb# ② 更新版（新增半球/排序等处理）
│   ├── b_SOM_kmeans_process_discord.ipynb # ② 聚类结果按 K 分组的散点/热力图
│   ├── c_Bui&Cano_data_zonalst.ipynb # ③ 建筑/冠层/水体/绿地/山体分区统计
│   ├── d_zonalst&cluster_merge_visual.ipynb # ④ 聚类 + 形态指标合并与可视化
│   ├── e_Cost_DistWB.py              # 成本距离（Cost Distance）脚本（ArcGIS, Py2.7）
│   ├── CFA可视化.ipynb               # 辅助：CFA 结果可视化
│   └── 验证.ipynb                    # 辅助：验证模型产物一致性
├── city/                        # 城市数据与聚类结果
│   ├── 223_cities_combined_moving_ave_cluster*.csv  # 热岛滑动平均 + 聚类标签
│   ├── 223_cities_som_clustered_data.csv            # SOM 聚类数据（含神经元坐标）
│   ├── 223_cities_with_hemisphere*.csv              # 标注南北半球（用于剔除南半球）
│   ├── BMUs.npy / node_weights.npy / Neuron_Coordinates_only.csv  # SOM 产物
│   ├── *.shp / *.dbf / *.prj / *.shx / *.cpg       # 聚类结果 Shapefile
│   └── results/                  # 输出结果
│       ├── bmus_kmeans_K*.csv    # 各 K 值聚类结果（K=5/12/20/26）
│       ├── discord/              # 按 K 分组的热岛序列对比图
│       ├── picture/              # 可视化图片（K=5）
│       └── picture_d/            # 可视化图片（K=5/12/20/26）
├── pkl/                         # 序列化模型
│   ├── som.pkl                  # 训练好的 SOM 模型
│   └── clustinstances_kmeans.pkl# K-means 聚类实例
└── 老师发的/                    # 老师提供的参考产物（用于验证）
    ├── BMUs.npy
    └── node_weights.npy
\`\`\`

## 5. 数据来源与下载

### 5.1 数据来源与用途（一张表看完）

| 数据 | 分辨率 | 用途（对应变量） | 来源 |
|------|--------|----------------|------|
| 山体地形单元 GBLU | 30 m | 到山体最小成本距离 \`MIN_DistMT\` | [Zenodo](https://zenodo.org/records/13187969) |
| 水体（ESA WorldCover） | 10 m | 到水体最小成本距离 \`MIN_DistWB\` | [Zenodo](https://zenodo.org/records/5571936) |
| 高程（Copernicus DSM） | 30 m | 高程/坡度、参考区去噪掩膜 | [Copernicus](https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM) |
| 植被种类（ESA WorldCover） | 10 m | 草地参考区、绿地率 \`GreenRatio\` / 绿容比 \`GrVolRatio\` | [Zenodo](https://zenodo.org/records/5571936) |
| 树木冠层 CHM（WRI & Meta） | 25 m（另有 1 m 版） | 冠层密度 / 体积比 \`Candensity\` \`CanovRatio\` | [公众号说明](https://mp.weixin.qq.com/s/OXRbSSiAaOSyrR6Qv49F9w) |
| Built-up 建成区（ESA WorldCover） | 10 m | 建成区范围、不透水面比例 \`ISF\` | [Zenodo](https://zenodo.org/records/5571936) |
| 建筑高度 GHS（JRC） | 100 m | 建筑高度 \`Buiheight\`（= \`MEAN\`） | [GHSL](https://ghsl.jrc.ec.europa.eu/) |
| 建筑面积 GHS（JRC） | 10 m | 建筑密度 \`Buidensity\`、容积率 \`FAR\` | [GHSL](https://ghsl.jrc.ec.europa.eu/) |

### 5.2 下载方式

- **Copernicus DEM（COP-DEM）**：全球 30 m / 90 m（欧洲部分 10 m）。可经欧空局 [Panda](https://panda.copernicus.eu/panda) 或 [OpenTopography](https://portal.opentopography.org/datasetMetadata?otCollectionID=OT.032021.4326.1) 下载；批量下载用 AWS CLI：
  \`\`\`bash
  aws s3 ls s3://raster/COP30/ --recursive --endpoint-url https://opentopography.s3.sdsc.edu --no-sign-request
  aws s3 cp s3://raster/COP30/ . --recursive --endpoint-url https://opentopography.s3.sdsc.edu --no-sign-request
  \`\`\`
- **ESA WorldCover**：从 [worldcover2020.esa.int](https://worldcover2020.esa.int) 下载，本地存放于 \`C:\\ESA\`。
- **GHS 建筑高度/面积**：EPSG 54009（Mollweide）投影、数据年份 2018、版本 2023A。

> **主要数据文件示例**（便于核对文件命名）：山体 \`GBLU_v1_S90W080\`；水体/植被/Built-up \`ESA_WorldCover_10m_2020_v100_N00E006_Map\`；高程 \`Copernicus_DSM_10_N23_00_E112_00_DEM\`；冠层 \`meta_chm_lat=90.0_lon=-110.0_avg\`；建筑高度 \`GHS_BUILT_H_AGBH_E2018_GLOBE_R2023A_54009_100_V1_0.tif\`；建筑面积 \`GHS_BUILT_S_E2018_GLOBE_R2023A_54009_10_V1_0.tif\`。

## 6. 处理流程详解

### ① 数据预处理 — \`a_data_process.ipynb\`

把原始影像变成可用特征：**逐日 UHI = 建成区地表温度 − 草地（参考区）地表温度**，再做 **7 天滑动平均（MA）**，最终得到三年、双时相的 UHI 时间序列。具体步骤：

- **00 数据预处理**：建成区 tif → shapefile；裁剪草地并提取为参考区 shapefile，生成「建成区 + 草地」两类 shapefile。
  - \`00_00\` 每次运行前需执行的初始化代码；
  - \`00_00*\` 调用高程处理 Notebook 生成参考区：对建成区高程栅格取**中位数**，并**剔除大于「建成区 median + 50」的高程值**（去噪）；
  - \`00_01\` 将建成区 shapefile 拆分为多个文件；
  - \`00_02\` 用掩膜提取草地与稀疏植被，得到参考区草地 shapefile；
  - \`00_03\` 用草地 shapefile 裁剪栅格；
  - \`00_04\` 生成的 tif 转 shapefile。
- **输出**：白天/夜间分离的 UHI 时间序列 \`0_18_day_2017_2019_data.csv\`、\`0_18_night_2017_2019_data.csv\`。

### ② SOM + K-means 聚类 — \`b_SOM_kmeans_process.ipynb\`

核心聚类流程，共 4 步：

1. 对标准化后的热岛时间序列训练 **SOM**，得到每个空间单元的 **BMU**；
2. 把高维特征映射为二维神经元坐标；
3. 对 **SOM 神经元权重**执行 K-means，分别以 K = 5 / 12 / 20 / 26 聚类；
4. 输出各 K 值聚类标签 CSV，并对聚类做排序、统计各类均值，绘制热岛序列曲线图。

> 变体说明：\`b_SOM_kmeans_process NEW.ipynb\` 在原版基础上新增了半球标注与排序等处理；\`b_SOM_kmeans_process_discord.ipynb\` 专门绘制按 K 分组的散点/热力图。

**主要产物**：\`pkl/som.pkl\`、\`pkl/clustinstances_kmeans.pkl\`；\`city/BMUs.npy\`（142,506 × 2，各空间单元的 SOM 神经元坐标）、\`city/node_weights.npy\`（1,890 × 2,178，神经元权重）、\`city/results/bmus_kmeans_K{5,12,20,26}.csv\`。

### ③ 城市形态指标分区统计 — \`c_Bui&Cano_data_zonalst.ipynb\`

用 ArcPy / rasterio / GeoPandas 对每个城市的空间网格做**分区统计（Zonal Statistics）**，把形态数据落到与聚类相同的空间单元上：

| 类别 | 指标 |
|------|------|
| 建筑（Building） | 建筑高度 \`Buiheight\`、建筑密度、容积率 \`FAR\` |
| 冠层（Canopy） | 冠层密度、冠层覆盖率 \`CoverRatio\` |
| 绿地（Greenland） | 绿地率 \`GreenRatio\`、绿容比 \`GrVolRatio\` |
| 建成区（Built-up, ESA） | 建成区面积/比例、不透水面比例 \`ISF\` |
| 水体（Water） | 到水体最小成本距离 \`MIN_DistWB\` |
| 山体（Mountain） | 到山体最小成本距离 \`MIN_DistMT\` |

其中到水体/山体的成本距离由 \`e_Cost_DistWB.py\`（ArcGIS \`CostDistance\`，需 Python 2.7 环境）计算。

### ④ 合并与可视化 — \`d_zonalst&cluster_merge_visual.ipynb\`

提取 X/Y 坐标、城市名、Place ID、Sum ID 与聚类标签；CSV 转 Shapefile（WGS 1984）；将聚类结果与建筑/冠层/水体/绿地/山体指标合并，绘制各指标的空间分布图。

### ⑤ 验证 — \`验证.ipynb\`

对比 \`老师发的/\` 与 \`city/\` 下的 \`BMUs.npy\`、\`node_weights.npy\`，确认两套模型产物完全一致（差异率 0.0000%），保证分析可复现。

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

## 9. 运行环境与依赖

- **Python 3**（Jupyter Notebook）
  - 数据处理：\`pandas\`、\`numpy\`、\`rasterio\`、\`geopandas\`、\`pyproj\`
  - 聚类/机器学习：\`pydlc\`（SOM）、\`scikit-learn\`（K-means）、\`pickle\`
  - 可视化：\`matplotlib\` 等
- **ArcGIS / ArcPy**：分区统计与成本距离（\`e_Cost_DistWB.py\` 需 Python 2.7 环境）

## 10. 注意事项与复现提示

1. \`main.py\` 为 PyCharm 新建项目的占位脚本，无实际业务逻辑，可忽略；
2. 部分 Notebook 的 Markdown 注释为 GBK 编码，在 UTF-8 下可能显示乱码，**不影响代码逻辑**；
3. \`e_Cost_DistWB.py\` 中的硬编码路径（\`D:\\file\\...\`）与工作目录为作者本机路径，复现时需按需修改。

## 附录：术语速查

| 术语 | 含义 |
|------|------|
| **UHI** | Urban Heat Island，城市热岛，城市建成区相对郊区的升温现象 |
| **MA** | Moving Average，滑动平均（对日 UHI 做 7 天滑动平均以去除噪声） |
| **LST** | Land Surface Temperature，地表温度 |
| **SOM** | Self-Organizing Map，自组织映射，一种把高维数据映射到低维网格的无监督神经网络 |
| **BMU** | Best Matching Unit，最佳匹配单元，即与某样本最相似的 SOM 神经元 |
| **K-means** | 一种按距离把样本划分为 K 类的经典聚类算法 |
| **分区统计** | Zonal Statistics，按空间区域统计其覆盖的栅格值 |
| **成本距离** | Cost Distance，ArcGIS 中考虑通行成本的路径/距离分析 |
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

## 版本1
随着气候变化不断加剧，深入理解城市环境中的**热韧性（Heat Resilience, HR）对于建设气候韧性城市至关重要。尽管已有大量研究探讨了城市形态与城市热岛效应（Urban Heat Island, UHI）**之间的关系，但针对热韧性的研究仍相对有限，且现有研究往往仅关注单次极端高温事件。此外，如何将复杂的城市形态研究结果转化为可实际应用的城市规划政策，仍面临较大挑战。<br>

**局部气候区（Local Climate Zones, LCZ）**提供了一种基于热环境特征的城市形态分类框架，相较于复杂的城市形态指标，其分类体系更加直观，也更便于规划决策者理解和应用。然而，现有LCZ研究主要集中于城市热岛效应，对热韧性的关注仍较少。<br>

本研究以纽约市为案例，分析不同LCZ类型与城市热韧性之间的关系，以弥补现有研究的不足。研究将热韧性定义为极端高温天气与正常高温天气之间地表温度（Land Surface Temperature, LST）的差值。基于2010—2019年的Landsat 8遥感影像，并筛选云量较低的影像，依据气温百分位数识别并构建三组极端高温与正常高温天气事件。进一步结合LCZ地图、GIS数据以及人口普查区（Census Tract）数据，利用**空间面板模型（Spatial Panel Model）**评估不同LCZ类型及大尺度景观因素对城市热韧性的影响。<br>

研究结果表明，与LCZ 2（紧凑型中层建筑）相比，LCZ 1（紧凑型高层建筑）和LCZ 4（开放型高层建筑）显著提高热韧性差异，而LCZ 3（紧凑型低层建筑）则显著降低热韧性差异。此外，当正常高温天气本身具有更高的气温，或从正常高温到极端高温期间的温度增幅更大时，城市热韧性差异也会显著增加。<br>

这些研究结果为城市规划者和政策制定者制定热风险适应策略提供了参考，并表明可以将LCZ框架进一步纳入气候适应规划与城市治理体系，从而为建设更具热韧性的城市提供规划依据。<br>
## 更新后的版本
随着气候变化不断加剧，深入理解城市环境中的热韧性（Heat Resilience, HR）对于建设气候韧性城市至关重要。尽管已有大量研究探讨城市形态与城市热岛效应（Urban Heat Island, UHI）之间的关系，但针对热韧性的研究仍相对有限，许多研究仅关注单次极端高温事件。此外，如何将复杂的城市形态研究结果转化为实际可行的城市规划政策，仍然面临挑战。<br>

局部气候区（Local Climate Zones, LCZ）提供了一种基于热环境特征的城市形态分类方法，对于政策制定者而言更加直观易懂。然而，现有大多数LCZ研究仍主要关注城市热岛效应，对热韧性的关注较少。本研究旨在弥补这一研究空白，探讨美国五个主要气候区中LCZ与热韧性之间的关系。基于美国能源部（DOE）Building America项目划分的不同气候区进行比较，进一步分析不同气候区在能源消耗和建成环境特征方面的差异，以及这些差异如何导致LCZ表现出共同特征与区域差异。<br>

热韧性被定义为极端高温天气与正常高温天气之间地表温度（Land Surface Temperature, LST）的差值。**使用1990—2019年的气温数据，并依据气温第85百分位确定高温事件；同时使用2013—2019年的Landsat 8遥感影像，在去除云层后筛选云量最低的影像以获取相应的LST观测数据，**结合LCZ地图、GIS数据和人口普查区（Census Tract）信息，通过空间面板模型评估不同LCZ类型及大尺度景观因素对不同气候区热韧性的影响。考虑到不同气候区之间存在显著的温度差异，研究进一步揭示了各气候区在热韧性影响方面的显著差异。<br>

在2013—2019年期间，通过筛选云量最低的遥感影像，研究依据气温百分位数确定了三组极端高温与正常高温事件。分析结果表明，与LCZ 2（紧凑型中层建筑）相比，LCZ 1（紧凑型高层建筑）和LCZ 4（开放型高层建筑）显著提高热韧性，而LCZ 3（紧凑型低层建筑）则降低热韧性。<br>

在不同气候区中，我们假设温度和湿度的差异会导致LCZ产生不同的热韧性响应，并表现出不同程度的敏感性。研究选取纽约市作为湿润大陆性气候区（CZ-MixedHumid）的代表城市、西雅图作为海洋性气候区（Marine）的代表城市、洛杉矶作为炎热干燥气候区（Hot-Dry）的代表城市、芝加哥作为寒冷气候区（Cold）的代表城市，以及休斯顿作为炎热湿润气候区（Hot-Humid）的代表城市，以探究不同气候区之间相似与不同的热韧性模式。这些差异源于各城市独特的温度和湿度特征，以及风环境的影响，从而使不同LCZ区域呈现出不同的热韧性动态。<br>

尽管不同区域之间存在差异，但在正常高温天气具有较高温度，以及从正常高温天气到极端高温天气出现显著温度升高的情况下，LCZ 1、LCZ 2、LCZ 3和LCZ 4在极端高温事件中均表现出较强的热韧性强度。这些研究结果为城市规划者和政策制定者建设具有热韧性的城市提供了有价值的参考，并表明可以将LCZ框架纳入不同气候区的气候适应策略与城市治理体系。<br>

**关键词：** 热韧性、气候区、局部气候区<br>

**主题类别：** WELL BEING_热环境<br>

**abstract-version1**
As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, <strong>translating complex urban form findings into practical urban planning policies remains challenging.</strong><br>
The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. <strong>Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles.</strong> LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance.

**Abstract-update:**
As climate change intensifies, understanding heat resilience (HR) in urban environments is essential for the development of climate-resilient cities. While numerous studies have explored the relationship between urban form and urban heat islands (UHI), limited attention has been given to HR, with many studies focusing solely on single extreme heat events. Furthermore, translating complex urban form findings into practical urban planning policies remains challenging.<br>

The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by examining the relationship between LCZs and HR across five major climate zones in the United States. By comparing different climate zones based on the DOE Building America program, we consider how variations in energy consumption and built environment characteristics lead to both commonalities and differences in LCZs.<br>

HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. **Using air temperature data from 1990 to 2019 to identify heat events based on the 85th percentile of air temperature, and Landsat 8 imagery from 2013 to 2019 to obtain LST observations on days with minimal cloud cover after cloud removal,** LCZ maps and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR in various climate zones. Recognizing the considerable temperature variability across these zones, the results reveal significant differences in HR impacts.<br>

From 2013 to 2019, by selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. The analysis shows that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR.<br>

In each climate zone, we hypothesize that differences in temperature and humidity create unique HR responses across LCZs, leading to varied sensitivity levels. We selected NewYork City for CZ-MixedHumid, Seattle from the Marine climate zone, Los Angeles from the Hot-Dry zone, Chicago from the Cold zone, and Houston from the Hot-Humid zone to investigate similar and differing patterns. These variations arise from the unique temperature and humidity profiles of these cities, as well as the influence of wind, resulting in distinct HR dynamics across different LCZ regions.<br>

Despite regional differences, marked by higher normal-day temperatures and substantial increases from normal to extreme heat days, LCZs 1, 2, 3, and 4 consistently demonstrate strong HR intensities during extreme heat events. These insights provide valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance across diverse climate zones.<br>

Keywords: heat resilience, climate zone, local climate zone <br>
Topic Category: WELL BEING_Thermal environment<br>
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

## 附图
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
## 2026 年可能怎么做？
现在如果重新设计智图，可能是：User→Planner Agent→Image Agent→Edit Agent→Layout Agent→QA Agent→Export

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

## 如果现在重新做 AnyReal，会怎么做？
我们在 2024 年设计 AnyReal 时，受限于当时图像生成模型的能力，因此采用了基于 3D 建模和渲染的方案，以保证商品结构和材质的可控性。

随着 FLUX Fill、FLUX Kontext 等图像编辑模型的发展，如今很多营销图可以直接基于商品图片进行局部编辑和场景生成，大幅降低建模成本，提高生成效率。很多场景已经不需要完整建模了。比如："把白底商品图变成巴黎咖啡馆场景"　现在模型直接就能做。

今天（2026）的思路已经变化很大了，如果重新设计，我会考虑采用 AI Image Editing + Workflow 的架构，而不是完全依赖 3D 渲染。 流程：商品图片→Segmentation（抠图）→Flux Kontext / Fill→换背景→换光照→换模特→营销图。

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
`,nt=`---
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
`,at=`---
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

## Project Overview

This project was developed during the 2022 Tencent Games × Huazhong University of Science and Technology 72-Hour Game Jam. I served as the Game Designer, responsible for the game concept, core gameplay, and level design.

Inspired by the COVID-19 pandemic, the game pays tribute to delivery workers and volunteers who ensured essential supplies reached residents during lockdowns.

The gameplay is based on a road-connection and delivery route mechanic. Players build delivery paths, avoid obstacles such as roadblocks and fallen trees, and deliver supplies to residents within a limited time. Through this simple puzzle experience, the game highlights the challenges and social value of emergency logistics during the pandemic.
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

## 项目类型标签
AI Product / AI Application · Agent Workflow · RAG · Urban Planning · Knowledge Base · Prompt Engineering · LLM Tool Use · Information Retrieval

## 资料依据
本报告根据用户提供的 AskPlan Final Presentation、AskPlan Final Report、Lin Lili Personal Report 等材料整理。项目名称、架构、工具、案例、个人贡献与学习总结均以原始材料为依据；为适配个人作品集，对表达进行了中文化和结构化重写。

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

# 10 · 实验结果

## NYC vs. Shanghai

实验结果显示，两个城市存在一些共同关注的概念，例如 Climate Proofing、Adaptive Capacity、Sustainable Development、Resilience，但不同方法也识别出了两个城市之间的不同侧重点。

### New York City

模型结果中较明显的概念包括 Resilience、Climate Proofing、Adaptive Capacity、Ecosystem-based Adaptation、Zoning、Urban Design，整体上更突出 **Resilience / Equity / Climate Adaptation**。

### Shanghai

模型结果中较明显的概念包括 Sustainable Development、Resilience、Land Use Planning、Transportation Planning、Urban Planning、Zoning，整体上更突出 **Sustainable Development / Balanced Urbanization**。

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
</div>
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

# Level 1：项目概述

### 1. **项目解决什么问题？**

《人工智能赋能下的参与式城市更新》旨在利用 AI 辅助城市更新和城市形态生成。

### 2. **输入是什么？**

城市空间数据，包括城市语义 Mask、建筑高度、土地利用、LST 等辅助城市数据。训练代码中原始数据组织为 **5-channel：1 个语义 Mask + 4 个辅助通道**，之后进一步构造成 ControlNet 所需的条件输入。

### 3. **输出是什么？**

生成城市形态图，并可以进一步转换成语义 Mask，计算城市形态指标。

语义类别包括：

* **0**：背景
* **1-5**：水域类型
* **6**：公园
* **7-16**：道路类型
* **17-22**：建筑类型

---

### 4. **为什么用生成模型？**

不是单纯做分类或预测，而是希望：

> **给定城市形态约束和目标 → 生成满足约束的城市空间方案。**

---

### 5. **为什么需要 ControlNet？**

本项目基于 ControlNet 架构，结合 Stable Diffusion 的组件，实现城市形态的条件控制生成。

因为普通 Stable Diffusion 对城市空间结构的控制不够精确，所以通过 ControlNet 将城市空间条件作为额外控制输入。

**核心组件：**

* **ControlNet**：处理城市空间条件，增强结构控制
* **UNet**：扩散模型主干，执行去噪
* **AutoencoderKL**：负责图像与潜空间之间的编码、解码
* **CLIP / 文本编码器**：处理 Prompt 文本条件

---

### 6. **怎么评价生成结果？**

通过生成结果重新计算城市形态指标，并与真实/目标指标进行比较。

主要指标包括：

* 绿化率 \`green_rate\`
* 水域比例 \`water_rate\`
* 建筑覆盖率 \`building_coverage_rate\`
* 道路密度 \`road_density\`
* 容积率 \`FAR\`
* 开放空间比例 \`open_space_rate\`
* 平均建筑高度
* 平均地表温度 \`LST\`

---

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

## 英文摘要

The vitality of space plays an important role in evaluating spatial quality and attractiveness. Compared with the low-sample surveys or low-precision positioning of crowd vitality data in the past, active perception technology can achieve accurate feedback on individual environmental perception and behavioral activities. At the same time, the progress of image acquisition technology (such as hunting cameras) has allowed researchers to achieve long-term and high-precision capture of campus crowd activities and material environments, making it possible to model public space activities at the human scale.

The group found that outdoor environments have an impact on individual environmental perception and behavioral activities. At the same time, through time-series data research, the impact of wind and heat environment on pedestrian activities was studied. The results showed that **wind speed has a positive effect on the number of pedestrians passing through the site, and the heat index has a negative effect on the length of time people stay**.

---

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


`,yt=`---
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
`,xt=`---
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


`,Ct=`---
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

## 04 日常使用。`,St=`---
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
`,Mt=`---
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

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,zt=`---
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

> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function It(c){const n=/^---\r?\n([\s\S]*?)\r?\n---/,a=c.match(n);let t={},b=c;if(a){const w=a[1];b=c.slice(a[0].length).trim();const z=w.split(/\r?\n/);let g=null,L=[];z.forEach(I=>{if(I.trim()==="")return;const k=I.indexOf(":");if(k!==-1&&!I.startsWith(" ")){g&&(t[g]=L.join(`
`)),g=I.slice(0,k).trim();let R=I.slice(k+1).trim();R==="|"?L=[]:R===""?L=[]:(t[g]=R,g=null,L=[])}else g&&I.startsWith("  ")&&L.push(I.slice(2))}),g&&L.length>0&&(t[g]=L.join(`
`)),Object.keys(t).forEach(I=>{let N=t[I];if(typeof N=="string")if(N=N.trim(),N.startsWith('"')&&N.endsWith('"')&&(N=N.slice(1,-1)),typeof N=="string"&&N.includes(`
`)&&/^\s*-/.test(N)){const k=N.split(/\r?\n/).map(R=>R.replace(/^\s*-\s*/,"").trim()).filter(R=>R!=="");t[I]=k.map(R=>R.startsWith('"')&&R.endsWith('"')||R.startsWith("'")&&R.endsWith("'")?R.slice(1,-1):R)}else if(N.startsWith("[")&&N.endsWith("]"))try{t[I]=JSON.parse(N)}catch{t[I]=[N.slice(1,-1).trim()]}else N==="true"?t[I]=!0:N==="false"?t[I]=!1:!isNaN(Number(N))&&N.trim()!==""?t[I]=Number(N):t[I]=N})}const d=[],r=new Set,y=w=>{const z=w.trim();!z||r.has(z)||(r.add(z),d.push(z))};Array.isArray(t.image)&&t.image.forEach(w=>y(String(w)));const m=/!\[.*?\]\(([^)\s]+)\)/g;let T;for(;(T=m.exec(b))!==null;)y(T[1]);const E=/<imagecarousel\b[^>]*\simages="([^"]*)"/gi;let u;for(;(u=E.exec(b))!==null;)u[1].split(",").forEach(y);return{id:t.id||"",slug:t.slug||"",title:t.title||"",category:t.category||"",year:t.year||"",description:t.description||"",tech:t.tech||[],abstract:t.abstract||"",challenge:t.challenge||"",solution:t.solution||"",hasDemo:t.hasDemo||!1,demoOnly:t.demoOnly===!0,icon:t.icon||"",code:t.code||"",logo:t.icon||"",image:d,content:b}}function P(c){const n=It(c);return{id:n.id,slug:n.slug,title:n.title,category:n.category,year:n.year,description:n.description,tech:n.tech,hasDemo:n.hasDemo,details:{abstract:n.abstract,description:n.description,challenge:n.challenge,solution:n.solution,logo:n.logo,icon:n.icon,code:n.code,image:n.image,content:n.content,demoOnly:n.demoOnly||!1}}}const Ee=[P($c),P(Kc),P(Zc),P(Jc),P(Yc),P(Qc),P(Xc),P(et)],_e=[P(ct),P(tt),P(nt),P(at),P(bt),P(pt),P(it),P(rt)],Pe=[P(st),P(dt),P(gt),P(ot),P(lt)],Re=[P(ft),P(ut),P(ht),P(vt),P(mt)],qe=[P(jt),P(yt)],Te=[P(xt),P(wt),P(kt),P(Nt),P(Ct),P(St),P(Mt),P(At),P(zt)],Lt={product:"Products",game:"Games",ai:"AI",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},Mc=({className:c})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:c,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),Ac=({to:c,className:n=""})=>e.jsx(W,{to:c,className:`btn-accent ${n}`,children:"Demo"}),Dt=!1,Et=({project:c,type:n,index:a})=>{var t;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(a+1).padStart(2,"0")}),e.jsxs(W,{to:`/${n}/${c.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",onError:b=>{b.target.style.display="none"}}):e.jsx(Mc,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:c.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(t=c.tech)==null?void 0:t.slice(0,3).map(b=>e.jsx("span",{className:"chip",children:b},b))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:c.year})]}),c.hasDemo&&e.jsx(Ac,{to:`/${n}/${c.slug}#demo`,className:"shrink-0"})]})})},_t=({project:c,type:n,index:a})=>{var t;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(W,{to:`/${n}/${c.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]",onError:b=>{b.target.style.display="none"}}):e.jsx(Mc,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(a+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:c.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),((t=c.tech)==null?void 0:t.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tech.slice(0,2).map(b=>e.jsx("span",{className:"chip",children:b},b))})]})]}),c.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(Ac,{to:`/${n}/${c.slug}#demo`,className:"w-full"})})]})},xe=({data:c,type:n})=>{const[a,t]=i.useState("grid"),b=Lt[n]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[n==="product"&&Dt,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[n," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(c.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",b]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(d=>e.jsx("button",{onClick:()=>t(d),"aria-pressed":a===d,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${a===d?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:d},d))})]}),a==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:c.map((d,r)=>e.jsx(Et,{project:d,type:n,index:r},d.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:c.map((d,r)=>e.jsx(_t,{project:d,type:n,index:r},d.slug))})]})},Pt="modulepreload",Rt=function(c,n){return new URL(c,n).href},rc={},O=function(n,a,t){let b=Promise.resolve();if(a&&a.length>0){let r=function(E){return Promise.all(E.map(u=>Promise.resolve(u).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};const y=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),T=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));b=r(a.map(E=>{if(E=Rt(E,t),E in rc)return;rc[E]=!0;const u=E.endsWith(".css"),w=u?'[rel="stylesheet"]':"";if(!!t)for(let L=y.length-1;L>=0;L--){const I=y[L];if(I.href===E&&(!u||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${w}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Pt,u||(g.as="script"),g.crossOrigin="",g.href=E,T&&g.setAttribute("nonce",T),document.head.appendChild(g),u)return new Promise((L,I)=>{g.addEventListener("load",L),g.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${E}`)))})}))}function d(r){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=r,window.dispatchEvent(y),!y.defaultPrevented)throw r}return b.then(r=>{for(const y of r||[])y.status==="rejected"&&d(y.reason);return n().catch(d)})},qt=i.lazy(()=>O(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Tt=i.lazy(()=>O(()=>import("./UR-platform-DFO5eSKd.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),Gt=i.lazy(()=>O(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Bt=i.lazy(()=>O(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Ot=i.lazy(()=>O(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),Ut=i.lazy(()=>O(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),Ft=i.lazy(()=>O(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));i.lazy(()=>O(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const Ht=i.lazy(()=>O(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),sc=i.lazy(()=>O(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),Wt=i.lazy(()=>O(()=>import("./72HourGameJamDemo-BWPUgRvj.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),Vt=i.lazy(()=>O(()=>import("./PeaceEliteHustCampusDemo-D-DWwJkq.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),$t=i.lazy(()=>O(()=>import("./BMWMetaIslandDemo-7uu2MOZP.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Kt=i.lazy(()=>O(()=>import("./riffle-RlweP75u.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),Zt=i.lazy(()=>O(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Xt=i.lazy(()=>O(()=>import("./genshot-BoH35G7G.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),Yt=i.lazy(()=>O(()=>import("./dragon-diffusion-Dj4t-WNK.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),Qt=i.lazy(()=>O(()=>import("./anyreal-DKKTpW8w.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),Jt=i.lazy(()=>O(()=>import("./previous-archi-work-CvNoz6hg.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),en=i.lazy(()=>O(()=>import("./hongqiqu-y3eLCJ-3.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),cn=i.lazy(()=>O(()=>import("./scendance-TgGmbUpO.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),dc=c=>({"cluster-visualizer-3d":qt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Tt,heatmapper:Gt,"how-to-add-openstreetmap-in-website":Bt,"how-to-get-sequential-events-from-photo-by-phone":Ot,"how-to-visualize-photo-geolocation-data-on-map":Ut,kittylovecarrots:sc,"how-to-build-game-in-wechat-mini-program":sc,"72-hour-game-jam":Wt,"peace-elite-hust-campus":Vt,"bmw-meta-island":$t,"how-to-conduct-time-geo-sequential-clustering-from-album":Ft,"epstein-mystery-archive":Ht,"riffle-ai-game-generation-tool":Kt,genstyle:Zt,"genshot-AI-video-generation-tool":Xt,"dragon-diffussion":Yt,anyreal:Qt,"previous-archi-work":Jt,hongqiqu:en,scendance:cn})[c],gc={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},tn=({images:c,captions:n})=>{const[a,t]=i.useState(0),[b,d]=i.useState(new Set(c.map((u,w)=>w))),r=c.filter((u,w)=>b.has(w));if(i.useEffect(()=>{a>=r.length&&t(Math.max(0,r.length-1))},[r.length,a]),r.length===0)return null;const y=u=>{d(w=>{const z=new Set(w);return z.delete(u),z})},m=()=>{t(u=>u===0?r.length-1:u-1)},T=()=>{t(u=>u===r.length-1?0:u+1)},E=n==null?void 0:n[a];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:r[a],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:E||`Carousel Image ${a+1}`,onError:()=>y(a)}),e.jsx("button",{onClick:m,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:T,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),r.length>1&&e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:r.map((u,w)=>e.jsx("button",{onClick:()=>t(w),className:`h-1.5 rounded-full transition-all duration-300 ${a===w?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${w+1}`},w))})]}),E&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:E}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[a+1," / ",r.length]})]}),!E&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[a+1," / ",r.length]})]})},nn=({src:c,...n})=>{const[a,t]=i.useState(!1),[b,d]=i.useState(!1);return i.useEffect(()=>{const r=setTimeout(()=>{b||(t(!1),d(!0))},3e3);return()=>clearTimeout(r)},[b]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:c,onLoad:()=>{t(!0),d(!0)},onError:()=>{t(!1),d(!0)},style:{display:"none"},title:"detector"}),!b&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),b&&a&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:c,className:"h-96 w-full border-0",allowFullScreen:!0,...n})}),b&&!a&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},an={iframe:({src:c,title:n,...a})=>e.jsx(nn,{src:c,title:n||"Embedded content",...a}),imagecarousel:({images:c,captions:n})=>{const a=(c||"").split(",").map(b=>b.trim()).filter(Boolean),t=n?n.split("|").map(b=>b.trim()):void 0;return e.jsx(tn,{images:a,captions:t})},table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:t,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...n,children:c})},h2:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:t,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...n,children:c})},h3:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:t,className:"mt-6 mb-3 text-base font-bold text-ink",...n,children:c})},h4:({children:c,...n})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...n,children:c}),h5:({children:c,...n})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...n,children:c}),h6:({children:c,...n})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...n,children:c}),p:({children:c,...n})=>{var b;const a=Dc.Children.toArray(c),t=a.length===1&&((b=a[0])==null?void 0:b.type)==="img";return e.jsx("p",{className:t?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...n,children:c})},a:({children:c,href:n,...a})=>e.jsx("a",{href:n,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...a,children:c}),img:({src:c,alt:n,...a})=>(n==null?void 0:n.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:c,alt:n,className:"h-32 max-w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...a}):e.jsx("img",{src:c,alt:n,className:"my-0 h-auto w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...a})},oc=6,lc=c=>`px-3 py-1.5 text-[12px] transition-colors duration-200 ${c?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,bn=({images:c})=>{const[n,a]=i.useState("expand"),[t,b]=i.useState(!1),[d,r]=i.useState(new Set),[y,m]=i.useState(null),[T,E]=i.useState(0),u=c.filter(N=>!d.has(N)),w=u.length===0?0:Math.min(T,u.length-1),z=t?u:u.slice(0,oc),g=Math.max(0,u.length-oc),L=N=>{E(k=>{const R=u.length;if(R<=1)return 0;const G=Math.min(k,R-1),A=G+N;return A<0||A>=R?G:A})};if(i.useEffect(()=>{const N=k=>{const R=k.target;if(R&&(R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable))return;if(y!==null){k.key==="Escape"&&m(null),k.key==="ArrowRight"&&m(H=>H===null?H:Math.min(u.length-1,H+1)),k.key==="ArrowLeft"&&m(H=>H===null?H:Math.max(0,H-1));return}if(n!=="flip"||u.length<2||k.key!=="ArrowRight"&&k.key!=="ArrowLeft")return;const G=document.getElementById("gallery");if(!G)return;const A=G.getBoundingClientRect();A.bottom<=0||A.top>=window.innerHeight||(k.preventDefault(),L(k.key==="ArrowRight"?1:-1))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[y,n,u.length]),u.length===0)return null;const I=N=>{r(k=>{if(k.has(N))return k;const R=new Set(k);return R.add(N),R})};return e.jsxs("section",{id:"gallery",className:"mt-12",children:[e.jsxs("div",{className:"section-head mb-5",children:[e.jsx("p",{className:"eyebrow",children:"Gallery"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[u.length>1&&e.jsxs("div",{className:"flex border border-rule",role:"group","aria-label":"Gallery layout",children:[e.jsx("button",{type:"button","aria-pressed":n==="expand",onClick:()=>a("expand"),className:lc(n==="expand"),children:"下拉展开"}),e.jsx("button",{type:"button","aria-pressed":n==="flip",onClick:()=>a("flip"),className:lc(n==="flip"),children:"左右翻页"})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:n==="flip"?`${w+1} / ${u.length}`:`${u.length} images`})]})]}),n==="expand"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-3",children:z.map((N,k)=>e.jsxs("button",{type:"button",onClick:()=>m(k),className:"group relative bg-surface text-left",children:[e.jsx("img",{src:N,alt:"",loading:"lazy",className:"aspect-[4/3] h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90",onError:()=>I(N)}),e.jsx("span",{className:"pointer-events-none absolute bottom-2 right-2 bg-canvas/90 px-1.5 py-0.5 font-mono text-[10px] text-ink-3",children:String(k+1).padStart(2,"0")})]},N))}),g>0&&e.jsxs("button",{type:"button",onClick:()=>b(N=>!N),className:"flex w-full items-center justify-center gap-2 border border-t-0 border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink",children:[t?"Collapse":`Show all ${u.length}`,e.jsx("svg",{className:`h-3 w-3 transition-transform duration-300 ${t?"rotate-180":""}`,fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})]})]}):e.jsxs("div",{className:"border border-rule bg-surface",children:[e.jsxs("div",{className:"relative bg-surface-2",children:[e.jsx("button",{type:"button",onClick:()=>m(w),className:"block w-full","aria-label":`Image ${w+1} of ${u.length}`,children:e.jsx("img",{src:u[w],alt:"",className:"mx-auto aspect-[4/3] max-h-[70vh] w-full object-contain",onError:()=>I(u[w])})}),e.jsx("button",{type:"button","aria-label":"Previous image",disabled:w===0,onClick:()=>L(-1),className:"absolute left-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink",children:"Prev"}),e.jsx("button",{type:"button","aria-label":"Next image",disabled:w>=u.length-1,onClick:()=>L(1),className:"absolute right-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink",children:"Next"})]}),e.jsxs("p",{className:"border-t border-rule px-4 py-3 text-center font-mono text-[12px] tracking-eyebrow text-ink","aria-live":"polite",children:[w+1," / ",u.length]})]}),y!==null&&u[y]&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10",role:"dialog","aria-modal":"true","aria-label":"Gallery image",onClick:()=>m(null),children:[e.jsx("button",{type:"button",className:"absolute right-4 top-4 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/80 hover:text-canvas",onClick:()=>m(null),children:"Close"}),u.length>1&&e.jsx("button",{type:"button","aria-label":"Previous image",className:"absolute left-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:left-6",onClick:N=>{N.stopPropagation(),m(k=>k===null?k:Math.max(0,k-1))},children:"Prev"}),e.jsx("img",{src:u[y],alt:"",className:"max-h-[85vh] max-w-[90vw] object-contain",onClick:N=>N.stopPropagation(),onError:()=>I(u[y])}),u.length>1&&e.jsx("button",{type:"button","aria-label":"Next image",className:"absolute right-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:right-6",onClick:N=>{N.stopPropagation(),m(k=>k===null?k:Math.min(u.length-1,k+1))},children:"Next"}),e.jsxs("p",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/70",children:[y+1," / ",u.length]})]})]})},we=({data:c,type:n})=>{var m,T,E,u,w;const{id:a}=kc(),t=c.find(z=>z.slug===a),[b,d]=i.useState(t!=null&&t.hasDemo&&((m=t==null?void 0:t.details)!=null&&m.demoOnly)?"demo":"details"),[r,y]=i.useState(!1);return i.useEffect(()=>{const z=()=>{var g;t!=null&&t.hasDemo&&((g=t==null?void 0:t.details)!=null&&g.demoOnly)||window.location.hash.includes("demo")&&(t!=null&&t.hasDemo)?d("demo"):d("details")};return z(),window.addEventListener("hashchange",z),()=>window.removeEventListener("hashchange",z)},[a,t==null?void 0:t.hasDemo,(T=t==null?void 0:t.details)==null?void 0:T.demoOnly]),t?e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(W,{to:`/${n}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:t.title})]}),!((E=t.details)!=null&&E.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>d("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),t.hasDemo&&e.jsxs("button",{onClick:()=>d("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),b==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl",children:[((u=t.tech)==null?void 0:u.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:t.tech.map((z,g)=>e.jsx("span",{className:"chip",children:z},g))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",t.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:t.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:t.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:t.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:r,onToggle:z=>y(z.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[r?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[t.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.description})]}),t.details.abstract&&t.details.abstract!==t.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.abstract})]}),t.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.challenge})]}),t.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.solution})]})]})]}),t.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("div",{className:"section-head mb-8",children:e.jsx("p",{className:"eyebrow",children:"Content"})}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(Nc,{remarkPlugins:[Sc],rehypePlugins:[Cc],components:an,children:t.details.content})})]}),e.jsx(bn,{images:(t.details.image??[]).filter(z=>z&&!String(t.details.content||"").includes(z))},t.slug),(t.details.code||t.details.codeComponent||gc[t.slug])&&e.jsxs("section",{id:"code",className:"mt-12",children:[e.jsx("div",{className:"section-head mb-5",children:e.jsx("p",{className:"eyebrow",children:"Code Example"})}),e.jsx("pre",{className:"overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas md:p-7",children:e.jsx("code",{children:gc[t.slug]||t.details.codeComponent||`// Code file: ${t.details.code}`})})]})]})}):(w=t.details)!=null&&w.demoOnly?e.jsx(i.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const z=dc(t.slug);return z?e.jsx(z,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const z=dc(t.slug);return z?e.jsx(z,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(W,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})})},pn=[{zh:"城市气候与韧性",en:"Urban Climate & Resilience"},{zh:"AI 辅助城市规划",en:"AI-Assisted Urban Planning"},{zh:"机器学习与数据分析",en:"Machine Learning & Data Analysis"},{zh:"空间统计与 GIS",en:"Spatial Statistics & GIS"},{zh:"React / Next.js 生态",en:"React / Next.js Ecosystem"},{zh:"TypeScript 架构",en:"TypeScript Architecture"},{zh:"WebGL / Three.js 3D 可视化",en:"WebGL / Three.js"},{zh:"UI 设计系统",en:"UI Systems Design"}],rn="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/",sn=c=>`${rn}${encodeURIComponent(c)}`,dn=[{category:"奖学金与荣誉 · Scholarships & Honors",items:[{name:"优秀外国人研究奖学金",year:"2024",images:[{file:"优秀外国人研究奖学金2024.jpg"}]},{name:"优秀毕业生",year:"2024"},{name:"国家励志奖学金",year:"2020",images:[{file:"国家励志奖学金2020.jpg"}]},{name:"国家励志奖学金",year:"2021",images:[{file:"国家励志奖学金2021.jpg"}]},{name:"国家励志奖学金",year:"2022",images:[{file:"国家励志奖学金2022.jpg"}]},{name:"国家励志奖学金",year:"2023",images:[{file:"国家励志奖学金2023.jpg"}]},{name:"学习优秀奖学金",year:"2020",images:[{file:"学习优秀奖学金-2020.jpg"}]},{name:"自强奖学金",year:"2023",images:[{file:"自强奖学金2023.jpg"}]},{name:"三好学生",year:"2021",images:[{file:"三好学生2021.jpg"}]},{name:"三好学生",year:"2023",images:[{file:"三好学生2023.jpg"}]},{name:"优秀学生干部",year:"2022",images:[{file:"优秀学生干部2022.jpg"}]},{name:"优秀共青团员",year:"2020",images:[{file:"优秀共青团员2020.jpg"}]},{name:"优秀共青团员",year:"2022",images:[{file:"优秀共青团员2022.jpg"}]}]},{category:"竞赛奖项 · Competitions",items:[{name:"腾讯游戏极限开发挑战赛 金奖",year:"2021",images:[{file:"腾讯华科Gamejams金奖2021.jpg"}]},{name:"eVolo 摩天大楼建筑竞赛 编辑部推荐奖",year:"2022",images:[{file:"evolo摩天大楼竞赛2022.jpg"}]},{name:"“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖",year:"2022",images:[{file:"互联网+省赛市赛名单2022.jpg",label:"武汉市银奖 / 湖北省铜奖名单"},{file:"互联网+省赛铜奖2022.jpg",label:"省赛铜奖证书"}]},{name:"中央国际玻璃国际建筑设计竞赛 佳作奖",year:"2023",images:[{file:"中央国际玻璃竞赛2023.jpg"}]},{name:"米兰设计周省级一等奖",year:"2023",images:[{file:"米兰设计周2023.jpg"}]},{name:"亚洲设计学年奖 银奖、铜奖、优秀奖",year:"2023"}]},{category:"项目与其他 · Projects & Recognition",items:[{name:"国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》",year:"2023"},{name:"Digital Futures workshop 参与证书",year:"2023",images:[{file:"digitalfuture2023.jpg"}]},{name:"最佳跨界融合奖 · 同济 AI4CITIES 工作坊",year:"2025",images:[{file:"AI4CITIES最佳跨界融合奖.jpg"}]}]}],gn=()=>e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.6,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),on=()=>e.jsxs("svg",{className:"h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{strokeLinecap:"round",d:"M21 21l-4.35-4.35M8 11h6M11 8v6"})]}),fc=({dir:c})=>e.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,children:c==="left"?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),ln=()=>{const[c,n]=i.useState(null);i.useEffect(()=>{if(!c)return;const r=m=>{m.key==="Escape"&&n(null)};window.addEventListener("keydown",r);const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow=y}},[c]);const[a,t]=i.useState(null),[b,d]=i.useState(0);return i.useEffect(()=>{var T;if(!a)return;const r=((T=a.images)==null?void 0:T.length)??0,y=E=>{E.key==="Escape"&&t(null),r>1&&E.key==="ArrowLeft"&&d(u=>(u-1+r)%r),r>1&&E.key==="ArrowRight"&&d(u=>(u+1)%r)};window.addEventListener("keydown",y);const m=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",y),document.body.style.overflow=m}},[a]),e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx("div",{className:"section-head",children:e.jsx("p",{className:"eyebrow",children:"About / Bio"})}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"关于我"}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"About Me"}),e.jsxs("div",{className:"mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg",children:[e.jsxs("p",{children:["我是林丽丽，毕业于",e.jsx("strong",{className:"font-semibold text-ink",children:"首尔大学城市与区域规划专业"}),"，拥有",e.jsx("strong",{className:"font-semibold text-ink",children:"华中科技大学建筑学"}),"背景。"]}),e.jsxs("p",{children:["我关注 ",e.jsx("strong",{className:"font-semibold text-ink",children:"AI 与产品创新"}),"，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。"]}),e.jsxs("p",{children:["与此同时，我持续探索 ",e.jsx("strong",{className:"font-semibold text-ink",children:"AI × 城市 × 空间"})," 的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。"]}),e.jsx("p",{children:"我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。"})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Core Competencies"}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4",children:pn.map((r,y)=>e.jsxs("div",{className:"group border-t border-rule pt-4 transition-colors hover:border-accent",children:[e.jsx("span",{className:"font-mono text-xs tabular-nums text-ink-3 transition-colors group-hover:text-accent",children:String(y+1).padStart(2,"0")}),e.jsx("div",{className:"mt-2.5 text-sm font-semibold leading-snug text-ink",children:r.zh}),e.jsx("div",{className:"mt-1 text-xs text-ink-3",children:r.en})]},r.en))})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Awards & Honors"}),e.jsx("h2",{className:"mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl",children:"获奖与荣誉"}),e.jsx("div",{className:"mt-6 grid gap-10 md:grid-cols-3 md:gap-8",children:dn.map(r=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold uppercase tracking-wider text-ink",children:r.category}),e.jsx("ul",{className:"mt-4 space-y-3 border-t border-rule pt-4",children:r.items.map(y=>{const m=!!y.images&&y.images.length>0;return e.jsx("li",{children:m?e.jsxs("button",{type:"button",onClick:()=>{t(y),d(0)},className:"group flex w-full items-baseline justify-between gap-3 text-left text-sm leading-snug",children:[e.jsx("span",{className:"text-ink-2 underline decoration-dotted decoration-current underline-offset-4 transition group-hover:text-ink",children:y.name}),e.jsxs("span",{className:"flex shrink-0 items-center gap-1.5 font-medium tabular-nums text-ink",children:[y.year,e.jsx(on,{})]})]}):e.jsxs("div",{className:"flex items-baseline justify-between gap-3 text-sm leading-snug",children:[e.jsx("span",{className:"text-ink-2",children:y.name}),e.jsx("span",{className:"shrink-0 font-medium tabular-nums text-ink",children:y.year})]})},`${y.name}-${y.year}`)})})]},r.category))})]})]}),a&&a.images&&Ec.createPortal(e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-12",onClick:()=>t(null),role:"dialog","aria-modal":"true",children:[e.jsx("button",{type:"button","aria-label":"关闭",onClick:()=>t(null),className:"absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white",children:e.jsx(gn,{})}),a.images.length>1&&e.jsx("button",{type:"button","aria-label":"上一张",onClick:r=>{r.stopPropagation(),d(y=>(y-1+a.images.length)%a.images.length)},className:"absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:left-8",children:e.jsx(fc,{dir:"left"})}),a.images.length>1&&e.jsx("button",{type:"button","aria-label":"下一张",onClick:r=>{r.stopPropagation(),d(y=>(y+1)%a.images.length)},className:"absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:right-8",children:e.jsx(fc,{dir:"right"})}),e.jsxs("figure",{className:"relative max-w-3xl",onClick:r=>r.stopPropagation(),children:[e.jsx("img",{src:sn(a.images[b].file),alt:`${a.name} ${a.year}`,className:"max-h-[80vh] w-auto max-w-full rounded-md object-contain shadow-2xl"}),e.jsxs("figcaption",{className:"mt-3 text-center text-sm",children:[e.jsx("span",{className:"text-white/90",children:a.name}),e.jsxs("span",{className:"text-white/50",children:[" · ",a.year]}),a.images[b].label&&e.jsxs("span",{className:"text-white/50",children:[" · ",a.images[b].label]}),a.images.length>1&&e.jsxs("span",{className:"text-white/50",children:[" · ",b+1," / ",a.images.length]})]})]})]}),document.body)]})},fn=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),Je=({href:c,label:n})=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:n}),uc=[{city:"上海",country:"中国",date:"2024",note:"法租界的梧桐树影"},{city:"东京",country:"日本",date:"2025",note:"下北泽的午后散步"},{city:"首尔",country:"韩国",date:"2025",note:"汉江边的晚风与霓虹"},{city:"新加坡",country:"新加坡",date:"2026",note:"滨海湾的花园城市漫游"},{city:"明尼阿波利斯",country:"美国",date:"2025",note:"密西西比河畔的秋日"},{city:"剑桥",country:"英国",date:"2025",note:"康河上的撑船与学院回廊"},{city:"武汉",country:"中国",date:"2023",note:"东湖绿道与热干面的早晨"},{city:"香港",country:"中国",date:"2024",note:"中环半山扶梯的夜色"}],hc=["from-amber-500/20 via-orange-400/10 to-yellow-500/20","from-emerald-500/20 via-teal-400/10 to-cyan-500/20","from-rose-500/20 via-pink-400/10 to-fuchsia-500/20","from-sky-500/20 via-blue-400/10 to-indigo-500/20","from-violet-500/20 via-purple-400/10 to-plum-500/20","from-lime-500/20 via-green-400/10 to-emerald-500/20","from-red-500/20 via-orange-400/10 to-amber-500/20","from-cyan-500/20 via-teal-400/10 to-sky-500/20"],un={上海:"🏙️",东京:"🗼",首尔:"🏯",新加坡:"🌿",明尼阿波利斯:"🌊",剑桥:"🎓",武汉:"🌸",香港:"🌃"},hn=({entry:c,index:n})=>{const[a,t]=i.useState(!1),b=hc[n%hc.length],d=un[c.city]??"📍";return e.jsx("div",{className:"relative cursor-pointer select-none",style:{perspective:"800px"},onClick:()=>t(r=>!r),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:e.jsxs("div",{className:"relative w-full transition-transform duration-500 ease-editorial",style:{transformStyle:"preserve-3d",transform:a?"rotateY(180deg)":"rotateY(0deg)",aspectRatio:"3/4"},children:[e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-x-3 top-2 flex justify-between",children:Array.from({length:16}).map((r,y)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},y))}),e.jsx("div",{className:"absolute inset-x-3 bottom-2 flex justify-between",children:Array.from({length:16}).map((r,y)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},y))}),e.jsx("span",{className:"text-3xl",children:d}),e.jsx("p",{className:"text-base font-bold tracking-tight text-ink",children:c.city}),e.jsx("p",{className:"eyebrow text-ink-3",children:c.country}),c.date&&e.jsx("span",{className:"mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:c.date}),e.jsx("div",{className:"absolute right-3 top-5 -rotate-12 opacity-30",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"17",stroke:"currentColor",strokeWidth:"1.5",className:"text-ink-3"}),e.jsx("path",{d:"M8 8l24 24M8 32L32 8",stroke:"currentColor",strokeWidth:"0.8",className:"text-ink-3"})]})})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[c.photo?e.jsx("img",{src:c.photo,alt:c.city,className:"absolute inset-0 h-full w-full object-cover"}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${b}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 px-4 text-center",children:[e.jsx("p",{className:"text-lg font-bold tracking-tight text-white",children:c.city}),c.note&&e.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-white/70",children:c.note})]}),e.jsx("div",{className:"absolute inset-2 border border-dashed border-white/10"})]})]})})},vn=()=>e.jsxs("section",{className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Wander"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(uc.length).padStart(2,"0")," cities"]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"City Walks"}),e.jsxs("p",{className:"max-w-xs text-right text-xs leading-relaxed text-ink-3",children:["用脚步丈量城市，",e.jsx("br",{className:"hidden sm:inline"}),"在每个街角发现故事。"]})]}),e.jsx("div",{className:"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:uc.map((c,n)=>e.jsx(hn,{entry:c,index:n},c.city))})]}),mn="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig",U=c=>`${mn}/${c}/logo.jpg`,jn=new Map([..._e.map(c=>["product",c]),...Pe.map(c=>["game",c]),...Re.map(c=>["ai",c]),...Ee.map(c=>["planning",c]),...qe.map(c=>["platform",c]),...Te.map(c=>["tutorial",c])].map(([c,n])=>[`/${c}/${n.slug}`,{title:n.title,year:n.year,category:n.category,description:n.description||n.details.abstract||""}])),yn=c=>jn.get(c),De=[2022,2023,2024,2025,2026],vc=[{zh:"产品",en:"Product",listHref:"/product",color:"#5ec5d4",items:[{name:"Counting",year:2022,logo:U("counting"),href:"/product/early-campus-experience"},{name:"1037拼拼",year:2022,logo:U("1037pinpin"),href:"/product/early-campus-experience"},{name:"PersLearn",year:2023,logo:U("perslearn"),href:"/product/early-campus-experience"}]},{zh:"AI 产品",en:"AI Product",listHref:"/product",color:"#3f6fd8",items:[{name:"智图",year:2023,logo:U("dragon-diffusion"),href:"/product/dragon-diffussion"},{name:"AnyReal",year:2024,logo:U("anyreal"),href:"/product/anyreal"},{name:"Genshot",year:2024,logo:U("genshot"),href:"/product/genshot-AI-video-generation-tool"},{name:"洛书八字",year:2025,logo:U("bazi"),href:"/product/bazi-fengshui-analysis"},{name:"Genstyle",year:2025,logo:U("genstyle"),href:"/product/genstyle"},{name:"Riffle",year:2026,logo:U("riffle"),href:"/product/riffle-ai-game-generation-tool"},{name:"幕景 Scendance",year:2026,logo:U("scendance"),href:"/product/scendance"}]},{zh:"游戏 & 用户体验",en:"Game & User Experience",listHref:"/game",color:"#9b5bc9",items:[{name:"无名之路",year:2022,logo:U("game-jam"),href:"/game/72-hour-game-jam"},{name:"和平精英",year:2022,logo:U("peace-elite-hust"),href:"/game/peace-elite-hust-campus"},{name:"宝马元宇宙",year:2022,logo:U("bmw-meta-island"),href:"/game/bmw-meta-island"},{name:"Bilibili 实习",year:2023,logo:U("guangzhou-xinyuan"),href:"/game/guangzhou-xinyuan-tech"},{name:"微信小游戏",year:2026,logo:U("kittylovecarrots"),href:"/game/kittylovecarrots"}]},{zh:"AI 辅助城市规划",en:"AI-aided Planning",listHref:"/ai",color:"#1b2c5e",items:[{name:"全球空间聚类",year:2023,logo:U("cluster-visualizer-3d"),href:"/planning/cluster-visualizer-3d"},{name:"RAG 城市助手",year:2024,logo:U("agentic-rag"),href:"/ai/prompt-engineering-agentic-rag"},{name:"知识图谱",year:2024,logo:U("knowledge-graph-urban-planning"),href:"/ai/knowledge-graph-urban-planning"},{name:"Diffusion 城市更新",year:2025,logo:U("participatory-urban-regeneration"),href:"/ai/participatory-urban-regeneration-empowered-by-artificial-intelligence"},{name:"机器学习城市热韧性",year:2026,logo:U("urban-heat-resilience-ml"),href:"/ai/urban-heat-resilience-machine-learning"}]}],xn=4,wn=1,kn=`calc(${wn}rem + ${xn/2}rem - 1.5px)`,Nn=16,Cn=`-${Nn/2}rem`,zc=c=>{c.currentTarget.style.visibility="hidden"},Sn=c=>c.metaKey||c.ctrlKey||c.shiftKey||c.altKey,Mn=()=>{const[c,n]=i.useState(null),a=i.useRef(null);return i.useEffect(()=>{if(!c)return;const b=r=>{r.key==="Escape"&&n(null)},d=r=>{a.current&&!a.current.contains(r.target)&&n(null)};return window.addEventListener("keydown",b),document.addEventListener("mousedown",d),()=>{window.removeEventListener("keydown",b),document.removeEventListener("mousedown",d)}},[c]),{activeKey:c,setActiveKey:n,rootRef:a,onClick:b=>d=>{Sn(d)||c!==b&&(d.preventDefault(),n(b))}}},Ic=({item:c,color:n,compact:a=!1})=>{const t=yn(c.href);return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`block font-bold tracking-tight text-ink ${a?"text-xs":"text-sm"}`,children:(t==null?void 0:t.title)??c.name}),e.jsxs("span",{className:"mt-1 block font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[(t==null?void 0:t.year)??String(c.year),t!=null&&t.category?` · ${t.category}`:""]}),(t==null?void 0:t.description)&&e.jsx("span",{className:`mt-2 block leading-relaxed text-ink-2 ${a?"text-[11px]":"text-xs"}`,children:t.description}),!a&&e.jsx("span",{className:"mt-2.5 block text-[10px] font-medium",style:{color:n},children:"再点一次进入项目 →"})]})},An=({item:c,color:n,expanded:a,onExpandClick:t})=>e.jsxs(W,{to:c.href,onClick:t,"aria-expanded":a,"aria-label":`${c.name}（${c.year}）`,className:"group relative flex w-16 shrink-0 flex-col items-center",children:[e.jsx("span",{className:`flex h-16 w-16 items-center justify-center rounded-xl border bg-surface p-1 shadow-lift transition-all duration-300 ease-editorial group-hover:-translate-y-1 ${a?"-translate-y-1 border-transparent":"border-rule"}`,style:a?{boxShadow:`0 0 0 2px ${n}, 0 18px 44px -22px rgba(0,0,0,0.4)`}:void 0,children:e.jsx("img",{src:c.logo,alt:"",onError:zc,className:"h-full w-full rounded-lg object-cover"})}),e.jsx("span",{className:`mt-2.5 max-w-[7rem] truncate rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors duration-200 ${a?"border-rule-strong bg-surface text-ink":"border-rule bg-surface-2 text-ink-2 group-hover:border-rule-strong group-hover:text-ink"}`,children:c.name}),a&&e.jsxs("span",{className:"absolute bottom-full left-1/2 z-20 mb-3 w-64 rounded-lg border border-rule bg-surface p-3 text-left shadow-lift-lg animate-rise-in",style:{marginLeft:Cn},children:[e.jsx(Ic,{item:c,color:n}),e.jsx("span",{className:"absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-rule bg-surface","aria-hidden":"true"})]})]}),mc=({category:c,className:n=""})=>e.jsxs(W,{to:c.listHref,className:`group block ${n}`,children:[e.jsx("p",{className:"text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text",children:c.zh}),e.jsx("p",{className:"text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text",children:c.en})]}),zn=()=>{const{activeKey:c,rootRef:n,onClick:a}=Mn();return e.jsxs("section",{ref:n,className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Timeline"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[De[0]," — ",De[De.length-1]]})]}),e.jsxs("div",{className:"mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6",children:[e.jsx("h2",{className:"font-serif text-4xl tracking-tight text-ink md:text-5xl",children:"Content"}),e.jsxs("p",{className:"text-xs leading-relaxed text-ink-3 sm:text-right",children:["* 点击图标查看项目简介，再点一次进入项目",e.jsx("br",{}),"* 点击下方文字标签跳转到作品集页面"]})]}),e.jsxs("div",{className:"mt-10 hidden md:block",children:[e.jsxs("div",{className:"grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2",children:[e.jsx("div",{}),De.map(t=>e.jsx("div",{className:"nums-tabular text-center text-sm font-bold text-ink",children:t},t))]}),vc.map(t=>e.jsxs("div",{className:"mt-10 grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2",children:[e.jsx(mc,{category:t,className:"pt-4"}),e.jsxs("div",{className:"relative col-span-5 pt-4",children:[e.jsx("div",{className:"absolute left-0 right-0 h-[3px]",style:{top:kn,background:t.color},"aria-hidden":"true"}),e.jsx("div",{className:"relative grid grid-cols-5 gap-x-2",children:De.map(b=>e.jsx("div",{className:"flex flex-wrap items-start justify-center gap-x-3 gap-y-5",children:t.items.filter(d=>d.year===b).map(d=>e.jsx(An,{item:d,color:t.color,expanded:c===d.name,onExpandClick:a(d.name)},d.name))},b))})]})]},t.zh))]}),e.jsx("div",{className:"mt-8 space-y-8 md:hidden",children:vc.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2.5 border-t border-rule pt-3",children:[e.jsx("span",{className:"h-[3px] w-5 shrink-0",style:{background:t.color},"aria-hidden":"true"}),e.jsx(mc,{category:t})]}),e.jsx("div",{className:"mt-3 grid grid-cols-2 items-start gap-2.5 sm:grid-cols-3",children:[...t.items].sort((b,d)=>b.year-d.year).map(b=>{const d=c===b.name;return e.jsxs(W,{to:b.href,onClick:a(b.name),"aria-expanded":d,className:`flex items-start gap-2.5 border bg-surface p-2 transition-colors ${d?"col-span-2 border-rule-strong sm:col-span-3":"border-rule hover:border-rule-strong"}`,children:[e.jsx("img",{src:b.logo,alt:"",onError:zc,className:"h-9 w-9 shrink-0 rounded-lg border border-rule object-cover"}),d?e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx(Ic,{item:b,color:t.color,compact:!0}),e.jsx("span",{className:"mt-2 block text-[10px] font-medium",style:{color:t.color},children:"再点一次进入项目 →"})]}):e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block truncate text-xs font-semibold text-ink",children:b.name}),e.jsx("span",{className:"nums-tabular block text-[10px] text-ink-3",children:b.year})]})]},b.name)})})]},t.zh))})]})},In=[{key:"all",label:"All"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"ai",label:"AI"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"}],jc={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计、开发、游戏、AI 和城市规划"}),"领域的项目。"]}),product:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"产品"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"游戏"}),"领域的项目。"]}),ai:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"AI"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"教程"}),"领域的项目。"]})},ec=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],yc=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),xc=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),Ln={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},ke=({value:c,transform:n})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:n,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((a,t)=>e.jsx("span",{className:"flex items-center justify-center",children:Ln[c].includes(t)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},t))}),Dn=()=>{var Le,s,x,M,C;const[c,n]=i.useState("all"),a={all:[..._e.map(p=>({...p,type:"product"})),...Pe.map(p=>({...p,type:"game"})),...Re.map(p=>({...p,type:"ai"})),...Ee.map(p=>({...p,type:"planning"})),...qe.map(p=>({...p,type:"platform"})),...Te.map(p=>({...p,type:"tutorial"}))],product:_e.map(p=>({...p,type:"product"})),planning:Ee.map(p=>({...p,type:"planning"})),game:Pe.map(p=>({...p,type:"game"})),ai:Re.map(p=>({...p,type:"ai"})),platform:qe.map(p=>({...p,type:"platform"})),tutorial:Te.map(p=>({...p,type:"tutorial"}))},t=p=>a[p].length,b=a[c]??a.all,d=Math.max(0,b.length-1),[r,y]=i.useState(0),m=p=>{n(p),y(0)},T=p=>{if(!p)return[];const o=/<video[^>]+src="([^"]+)"/gi;return Array.from(p.matchAll(o),l=>l[1])},E=p=>{var l,f;if(!p)return null;const o=(l=p.details)==null?void 0:l.image;return o!=null&&o.length?o[0]:((f=p.details)==null?void 0:f.logo)??null},u=b[(r-1+b.length)%b.length],w=b[(r+1)%b.length],z=E(u),g=E(w),[L,I]=i.useState(0),[N,k]=i.useState(!1),R=i.useRef(null),G=i.useRef(null),A=b[r],H=((Le=A==null?void 0:A.details)==null?void 0:Le.image)??[];H.length>=2&&H[(L-1+H.length)%H.length],H.length>=3?H[(L+1)%H.length]:H.length===2&&H[(L+1)%2],i.useEffect(()=>{I(0),k(!1)},[r,c]);const[Ae,Y]=i.useState({x:0,y:0}),We=()=>{Y(p=>({x:p.x+720+Math.round(Math.random()*360),y:p.y+720+Math.round(Math.random()*360)})),setTimeout(()=>J(Math.floor(Math.random()*b.length)),900)},ze=T(((s=A==null?void 0:A.details)==null?void 0:s.content)??""),ue=((x=A==null?void 0:A.details)==null?void 0:x.image)??[],Q=[...ze,...ue],he=Q.length>0?Q[L%Q.length]:(M=A==null?void 0:A.details)==null?void 0:M.logo,be=ze.length>0&&L<ze.length,pe=ue.length>0?ue[0]:(C=A==null?void 0:A.details)==null?void 0:C.logo,Ie=()=>{I(p=>(p+1)%(Q.length||1))};i.useEffect(()=>{if(G.current&&(clearInterval(G.current),G.current=null),!(be||Q.length<=1))return G.current=setInterval(Ie,5e3),()=>{G.current&&(clearInterval(G.current),G.current=null)}},[r,c,be,Q.length]);const ie=()=>{const p=R.current;p&&(p.muted=!p.muted,k(!p.muted))},te=i.useRef(null),ne=3,V=i.useRef({isDown:!1,isDragging:!1,startX:0,scrollLeft:0}),Ve=p=>{var o;V.current={isDown:!0,isDragging:!1,startX:p.clientX,scrollLeft:((o=te.current)==null?void 0:o.scrollLeft)??0}},re=p=>{var l;if(!V.current.isDown)return;const o=p.clientX-V.current.startX;!V.current.isDragging&&Math.abs(o)<ne||(V.current.isDragging||(V.current.isDragging=!0,(l=te.current)==null||l.setPointerCapture(p.pointerId)),p.preventDefault(),te.current.scrollLeft=V.current.scrollLeft-o)},Ge=p=>{var o;V.current.isDragging&&((o=te.current)==null||o.releasePointerCapture(p.pointerId)),V.current={isDown:!1,isDragging:!1,startX:0,scrollLeft:0}},J=p=>{y(p)};i.useEffect(()=>{const p=te.current;if(!p)return;const o=p.children[r];o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]);const se=i.useRef(null),ve=i.useRef([]),[me,nc]=i.useState(0),[Lc,$]=i.useState(0),[Be,je]=i.useState({start:!0,end:!1}),[Oe,$e]=i.useState({}),de=p=>{const o=p%ec.length;nc(o);const l=se.current;if(l){const f=l.children[o];f&&l.scrollTo({left:f.offsetLeft-l.offsetWidth/2+f.offsetWidth/2,behavior:"smooth"})}};i.useEffect(()=>{const p=ve.current[me];p&&(p.currentTime=0,p.play().catch(()=>{}))},[me]);const ge=i.useCallback(()=>{const p=se.current;if(!p)return;const o=p.firstElementChild,l=(o==null?void 0:o.offsetWidth)||1;$(Math.round(p.scrollLeft/l)),je({start:p.scrollLeft<=1,end:p.scrollLeft+p.clientWidth>=p.scrollWidth-1})},[]);i.useEffect(()=>(ge(),window.addEventListener("resize",ge),()=>window.removeEventListener("resize",ge)),[ge]);const Ue=p=>{const o=se.current;if(!o)return;const l=o.firstElementChild;o.scrollBy({left:p*((l==null?void 0:l.offsetWidth)||o.clientWidth/2),behavior:"smooth"})},Ke=(p,o)=>{var v;const l=p,f=S=>$e(j=>j[o]===S?j:{...j,[o]:S});if((v=l.audioTracks)!=null&&v.length){f(Array.from(l.audioTracks).some(S=>S.enabled));return}if("mozHasAudio"in l){f(!!l.mozHasAudio);return}if(typeof l.webkitAudioDecodedByteCount=="number"&&l.webkitAudioDecodedByteCount>0){f(!0);return}if(l.readyState>=3){setTimeout(()=>f(l.webkitAudioDecodedByteCount>0||l.mozHasAudio===!0),500);return}f(!0)};return e.jsxs("div",{className:"animate-rise-in pb-16",children:[he&&e.jsxs("section",{className:"relative w-full overflow-hidden border-b border-neutral-800",style:{background:"linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)"},children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.07]","aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none",style:{boxShadow:"inset 0 0 140px 50px rgba(0,0,0,0.75)"},"aria-hidden":"true"}),e.jsxs("div",{className:"relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0",children:[e.jsx("button",{onClick:()=>J((r-1+b.length)%b.length),className:"group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block",title:u==null?void 0:u.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[z&&e.jsx("img",{src:z,alt:"",onError:p=>{p.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:u==null?void 0:u.title})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 86%, 0 100%)"},children:e.jsx("img",{src:pe,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:p=>{p.target.style.display="none"}})})}),e.jsx("div",{className:"relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]",children:e.jsxs("div",{className:"aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]",style:{boxShadow:"0 0 70px -10px rgba(0,0,0,0.5)"},children:[be?e.jsx("video",{ref:p=>{R.current=p},src:he,autoPlay:!0,muted:N,playsInline:!0,onEnded:Ie,className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},he):e.jsx("img",{src:he,alt:(A==null?void 0:A.title)??"",className:"absolute inset-0 h-full w-full object-cover animate-rise-in",onError:p=>{p.target.style.display="none"}},he),be&&e.jsx("button",{onClick:ie,className:"absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white",title:N?"Unmute":"Mute",children:N?e.jsxs("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 86%)"},children:e.jsx("img",{src:pe,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:p=>{p.target.style.display="none"}})})}),e.jsx("button",{onClick:()=>J((r+1)%b.length),className:"group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block",title:w==null?void 0:w.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[g&&e.jsx("img",{src:g,alt:"",onError:p=>{p.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:w==null?void 0:w.title})})]})})]})]}),e.jsxs("section",{className:"shell pt-10 md:pt-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-ink truncate",children:A==null?void 0:A.title}),e.jsxs("p",{className:"eyebrow shrink-0",children:[A==null?void 0:A.type," · ",A==null?void 0:A.year]})]}),e.jsxs("div",{className:"flex items-center gap-3 shrink-0 min-w-0",children:[Q.length>1&&e.jsx("span",{className:"flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]",children:Q.map((p,o)=>e.jsx("button",{onClick:()=>I(o),"aria-label":`Media ${o+1}`,className:`h-1.5 shrink-0 rounded-full transition-all duration-300 ${o===L?"w-6 bg-accent":"w-1.5 bg-rule hover:bg-ink-3"}`},o))}),e.jsx("button",{onClick:We,className:"btn-ghost shrink-0 !px-2",title:"Roll a random project",children:e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${Ae.x}deg) rotateY(${Ae.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(ke,{value:1,transform:"translateZ(10px)"}),e.jsx(ke,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(ke,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(ke,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(ke,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(ke,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})})})]})]}),e.jsx("div",{className:"mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule",children:In.map(p=>{const o=c===p.key;return e.jsxs("button",{onClick:()=>m(p.key),"aria-pressed":o,className:`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${o?"text-ink":"text-ink-3 hover:text-ink"}`,children:[p.label,e.jsx("span",{className:"ml-1.5 nums-tabular text-ink-3",children:t(p.key)}),e.jsx("span",{className:`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${o?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]},p.key)})}),e.jsxs("div",{className:"mt-5 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>J(Math.max(0,r-1)),disabled:r<=0,"aria-label":"Previous project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(yc,{})}),e.jsx("div",{ref:te,className:"flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y",onPointerDown:Ve,onPointerMove:re,onPointerUp:Ge,onPointerLeave:Ge,children:b.map((p,o)=>{const l=o===r;return e.jsxs("button",{onClick:()=>J(o),className:`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${l?"border-rule-strong bg-surface shadow-lift":"border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface"}`,style:{minWidth:"220px",maxWidth:"280px"},children:[e.jsx("span",{className:`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${l?"text-accent-text":"text-ink-3/60 group-hover:text-ink-3"}`,children:String(o+1).padStart(2,"0")}),e.jsx("div",{className:"h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2",children:e.jsx("img",{src:p.details.logo,alt:"",className:"h-full w-full object-cover",onError:f=>{f.target.style.display="none"}})}),e.jsxs("div",{className:"min-w-0 text-left",children:[e.jsx("p",{className:"truncate text-sm font-bold tracking-tight text-ink",children:p.title}),e.jsxs("p",{className:"eyebrow",children:[p.type," · ",p.year]})]})]},`${p.type}-${p.slug}`)})}),e.jsx("button",{onClick:()=>J(Math.min(d,r+1)),disabled:r>=d,"aria-label":"Next project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(xc,{})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(r+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(b.length).padStart(2,"0")]}),e.jsx(W,{to:`/${A==null?void 0:A.type}/${A==null?void 0:A.slug}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink",children:"View details →"})]})]}),e.jsx("section",{className:"shell border-t border-rule py-10 md:py-0",children:e.jsxs("div",{className:"max-w-12xl",children:[e.jsx("p",{className:"mt-4 max-w-3xl text-lg text-ink",children:"你好！我是林丽丽，欢迎来到我的作品集。"}),e.jsx("p",{className:"mt-4 max-w-measure text-base leading-relaxed text-ink-2",children:jc[c]??jc.all})]})}),e.jsx(zn,{}),e.jsx(vn,{}),e.jsxs("section",{className:"shell pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Motion"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(me+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(ec.length).padStart(2,"0")]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"Video Gallery"}),e.jsxs("div",{className:"flex shrink-0 gap-2",children:[e.jsx("button",{onClick:()=>Ue(-1),disabled:Be.start,"aria-label":"Scroll gallery left",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(yc,{})}),e.jsx("button",{onClick:()=>Ue(1),disabled:Be.end,"aria-label":"Scroll gallery right",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(xc,{})})]})]}),e.jsx("div",{ref:se,onScroll:ge,className:"mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4",children:ec.map((p,o)=>{const l=o===me;return e.jsxs("figure",{className:`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${l?"ring-1 ring-accent ring-offset-2 ring-offset-canvas":""}`,onMouseEnter:f=>{const v=f.currentTarget.querySelector("video");v&&!l&&v.play().catch(()=>{})},onMouseLeave:f=>{const v=f.currentTarget.querySelector("video");v&&!l&&v.pause()},children:[e.jsxs("div",{className:"relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2",children:[e.jsx("video",{ref:f=>{ve.current[o]=f},className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",src:p.src,muted:!0,playsInline:!0,preload:"metadata",onCanPlay:f=>Ke(f.currentTarget,o),onEnded:()=>{l&&de(o+1)}}),l&&e.jsxs("span",{className:"absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent animate-pulse"}),"Now"]}),Oe[o]&&e.jsx("span",{className:"absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white",title:"Has audio",children:e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),e.jsxs("figcaption",{className:"mt-2.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:String(o+1).padStart(2,"0")}),e.jsx("span",{className:"truncate text-sm text-ink-2",children:p.title})]})]},p.src)})})]})]})},En=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),_n=()=>{const[c,n]=i.useState(En),a=()=>{const t=!c;n(t),document.documentElement.classList.toggle("dark",t);try{localStorage.setItem("theme",t?"dark":"light")}catch{}};return e.jsx("button",{onClick:a,className:"icon-btn","aria-label":c?"Switch to light theme":"Switch to dark theme",title:c?"切换到日间模式":"切换到夜间模式",children:c?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},wc="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",Pn="/data/223_cities_cluster_with_index_deciles.csv",Ne=c=>{const n=c.replace("#",""),a=parseInt(n.slice(0,2),16),t=parseInt(n.slice(2,4),16),b=parseInt(n.slice(4,6),16);return[a,t,b]},Ce=(c,n,a)=>{const t=Math.round(c[0]+(n[0]-c[0])*a),b=Math.round(c[1]+(n[1]-c[1])*a),d=Math.round(c[2]+(n[2]-c[2])*a);return`rgb(${t}, ${b}, ${d})`},Se=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],Rn=()=>{var Le;const c=i.useRef(null),n=i.useRef(null),[a,t]=i.useState(!0),[b,d]=i.useState(0),[r,y]=i.useState(null),[m,T]=i.useState(null),[E,u]=i.useState([]),[w,z]=i.useState(null),[g,L]=i.useState("K_12"),[I,N]=i.useState(!0),[k,R]=i.useState(null),[G,A]=i.useState(null),[H,Ae]=i.useState(!1),[Y,We]=i.useState(null),[ze,ue]=i.useState(!1),[Q,he]=i.useState(null),[be,pe]=i.useState(!1),[Ie,ie]=i.useState(0),[te,ne]=i.useState(""),[V,Ve]=i.useState(!1),[re,Ge]=i.useState(!0),[J,se]=i.useState(!0),[ve,me]=i.useState({}),[nc,Lc]=i.useState(!1),[$,Be]=i.useState("global"),je=i.useRef(null),Oe=i.useRef(null),$e=i.useRef(!1),de=i.useRef(null),ge=(s,x)=>{let M=s.features;w!==null&&(M=M.filter(v=>{var j;const S=(j=v.properties)==null?void 0:j.Place;return S!==void 0&&Number(S)===Number(w)}));const C=M.map(v=>{var S;return(S=v.properties)==null?void 0:S[x]}).filter(v=>{if(v==null)return!1;if(typeof v=="string"){const j=v.trim();if(j===""||/^(na|nan|null)$/i.test(j))return!1}const S=Number(v);return!(Number.isNaN(S)||S===-9999)}).map(v=>Number(v)),p=M.reduce((v,S)=>{var D;const j=(D=S.properties)==null?void 0:D[x];let h=!1;if(j==null)h=!0;else if(typeof j=="string"){const _=j.trim();if(_===""||/^(na|nan|null)$/i.test(_))h=!0;else{const B=Number(j);(Number.isNaN(B)||B===-9999)&&(h=!0)}}else{const _=Number(j);(Number.isNaN(_)||_===-9999)&&(h=!0)}return v+(h?1:0)},0);let o=NaN,l=NaN,f=0;if(C.length>0){o=C[0],l=C[0],f=C[0];for(let v=1;v<C.length;v++){const S=C[v];S<o&&(o=S),S>l&&(l=S),f+=S}}return{count:M.length,min:o,max:l,mean:C.length>0?f/C.length:NaN,nanCount:p}};i.useEffect(()=>{(async()=>{try{const C=(await(await fetch(Pn)).text()).trim().split(`
`);if(C.length<2)return;const p=C[0].split(",").map(j=>j.trim()),o={},f=C[C.length-1].split(","),S=C[1].split(",");p.forEach((j,h)=>{if(j===""||j.includes("Place")||j.includes("Sum")||j.includes("FID")||j.includes("index"))return;const D=parseFloat(S[h]),_=parseFloat(f[h]);!isNaN(D)&&!isNaN(_)&&_>D&&(o[j]={min:D,max:_})}),console.log("Loaded attribute ranges:",o),me(o)}catch(x){console.error("Failed to load deciles:",x)}})()},[]),i.useEffect(()=>{!V&&!m&&(async()=>{var x;t(!0),d(0),y(null);try{d(10),console.log("开始下载..."),je.current=new AbortController;const M=await fetch(wc,{signal:je.current.signal});if(console.log("响应状态:",M.status),!M.ok)throw new Error(`HTTP error! status: ${M.status}`);d(30);const C=M.headers.get("content-length"),p=C?parseInt(C):null;console.log("预期文件大小:",p);const o=(x=M.body)==null?void 0:x.getReader();if(!o)throw new Error("无法读取响应流");let l=0;const f=[];for(;;){const{done:B,value:q}=await o.read();if(B)break;f.push(q),l+=q.length,d(p?30+Math.round(l/p*60):50)}console.log("下载完成, 收到:",l),p&&l!==p&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const v=new Uint8Array(l);let S=0;for(const B of f)v.set(B,S),S+=B.length;if(d(90),V){console.log("本地数据已加载，跳过网络数据"),t(!1);return}console.log("开始解析 Shapefile...");const j=await ac(v);console.log("Shapefile 解析完成:",j);let h=[];if(j.type==="FeatureCollection"?h=j.features:Array.isArray(j)?h=j:j.type==="Feature"&&(h=[j]),console.log("解析完成，特征数量:",h==null?void 0:h.length),V)return;const D={type:"FeatureCollection",features:h||[]};T(D),d(100);const _=new Map;D.features.forEach(B=>{var ee;const q=Number(((ee=B.properties)==null?void 0:ee.Place)??0);_.has(q)||_.set(q,{id:q,name:`Place ${q}`,featureCount:0});const K=_.get(q);K&&K.featureCount++}),u(Array.from(_.values()).sort((B,q)=>B.id-q.id)),t(!1)}catch(M){if(M.name==="AbortError"){console.log("网络请求已取消");return}y(M instanceof Error?M.message:"Failed to load"),t(!1)}})()},[]),i.useEffect(()=>{m&&R(ge(m,g))},[m,w,g,$,ve]),i.useEffect(()=>{if(!m)return;const s=n.current;if(!s)return;const x=()=>{var C,p,o,l;if(m.features.forEach((f,v)=>{f.id===void 0&&(f.id=v)}),s.getSource("cluster"))s.getSource("cluster").setData(m);else{console.log("初始化 cluster 数据源..."),s.addSource("cluster",{type:"geojson",data:m,generateId:!0}),s.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),s.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),s.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),s.on("click","cluster-fill",v=>{var S;if(v.features&&v.features.length>0){const j=v.features[0],h=j.id;de.current!==null&&de.current!==void 0&&s.setFeatureState({source:"cluster",id:de.current},{selected:!1}),h!==void 0?(s.setFeatureState({source:"cluster",id:h},{selected:!0}),de.current=h):de.current=null,We(j),ue(!0),((S=j.properties)==null?void 0:S.Place)!==void 0&&z(Number(j.properties.Place))}}),s.on("mouseenter","cluster-fill",()=>{s.getCanvas().style.cursor="pointer"}),s.on("mouseleave","cluster-fill",()=>{s.getCanvas().style.cursor=""});const f=m.features;if(f.length>0)try{const v=new Fe.LngLatBounds,S=Math.max(1,Math.floor(f.length/2e3));for(let j=0;j<f.length;j+=S){const h=f[j];if(!((C=h.geometry)!=null&&C.coordinates))continue;const D=h.geometry.type,_=h.geometry.coordinates;D==="Point"?v.extend(_):D==="LineString"||D==="MultiPoint"?_.forEach(B=>v.extend(B)):D==="Polygon"||D==="MultiLineString"?(p=_[0])==null||p.forEach(B=>v.extend(B)):D==="MultiPolygon"&&((l=(o=_[0])==null?void 0:o[0])==null||l.forEach(B=>v.extend(B)))}v.isEmpty()||s.fitBounds(v,{padding:50,duration:1e3})}catch(v){console.error("Fit bounds error:",v)}}},M=()=>{var q;if(!s.getLayer("cluster-fill"))return;const C=null;s.setFilter("cluster-fill",C),s.setFilter("cluster-line",C),s.setFilter("cluster-highlight",C);const p=(()=>{var Ze;let K=1/0,ee=-1/0;for(const Xe of m.features){const ce=Number((Ze=Xe.properties)==null?void 0:Ze[g]);Number.isNaN(ce)||ce===-9999||(ce<K&&(K=ce),ce>ee&&(ee=ce))}return{min:K===1/0?0:K,max:ee===-1/0?0:ee}})(),o=w!==null&&k?{min:k.min,max:k.max}:p,l=$==="city"?o:p,f=l.min,v=l.max;let S;if(g.includes("K_")){const K=Math.round(((q=ve[g])==null?void 0:q.max)??v),ee=Array.from({length:26},(ye,Ye)=>{const X=Ye/25;let oe,le,fe;if(X<.167){const Z=X/.167;oe=0,le=0,fe=Math.round(139+116*Z)}else if(X<.333){const Z=(X-.167)/.167;oe=0,le=Math.round(255*Z),fe=255}else if(X<.5){const Z=(X-.333)/.167;oe=0,le=Math.round(255-128*Z),fe=Math.round(255-255*Z)}else if(X<.667){const Z=(X-.5)/.167;oe=Math.round(255*Z),le=255,fe=0}else if(X<.833){const Z=(X-.667)/.167;oe=255,le=Math.round(255-128*Z),fe=0}else{const Z=(X-.833)/.167;oe=255,le=Math.round(127-127*Z),fe=0}return`#${oe.toString(16).padStart(2,"0")}${le.toString(16).padStart(2,"0")}${fe.toString(16).padStart(2,"0")}`}),Xe=Array.from({length:K+1},(ye,Ye)=>ee[Math.round(Ye*25/K)]).slice(0,K+1),ce=["interpolate",["linear"],["get",g]];for(let ye=0;ye<=K;ye++)ce.push(ye,Xe[ye]);S=ce}else g==="CoverRatio"||g==="ISF"||g==="GreenRatio"?S=["interpolate",["linear"],["get",g],f,"#3182bd",v,"#e6550d"]:g.includes("elev")||g.includes("slope")?S=["interpolate",["linear"],["get",g],f,"#31a354",v,"#756bb1"]:S=["interpolate",["linear"],["get",g],f,"#31a354",v,"#756bb1"];s.setPaintProperty("cluster-fill","fill-color",S);const j=w!==null,h=Number(w),B=["case",["any",["==",["get",g],-9999],["==",["get",g],null]],0,j?["case",["==",["to-number",["get","Place"]],h],.8,.15]:.7];s.setPaintProperty("cluster-fill","fill-opacity",B)};s.isStyleLoaded()?(x(),M()):s.once("load",()=>{x(),M()})},[m,w,g]),i.useEffect(()=>{var M,C,p,o;if(!m||w===null)return;const s=n.current;if(!s)return;const x=m.features.filter(l=>{var v;const f=(v=l.properties)==null?void 0:v.Place;return f!==void 0&&Number(f)===Number(w)});if(x.length!==0)try{const l=new Fe.LngLatBounds;let f=0;const v=Math.max(1,Math.floor(x.length/2e3));for(let S=0;S<x.length;S+=v){const j=x[S];if(!((M=j.geometry)!=null&&M.coordinates))continue;const h=j.geometry.type,D=j.geometry.coordinates;h==="Point"?(l.extend(D),f++):h==="LineString"||h==="MultiPoint"?(D.forEach(_=>l.extend(_)),f++):h==="Polygon"||h==="MultiLineString"?((C=D[0])==null||C.forEach(_=>l.extend(_)),f++):h==="MultiPolygon"&&((o=(p=D[0])==null?void 0:p[0])==null||o.forEach(_=>l.extend(_)),f++)}!l.isEmpty()&&f>0&&s.fitBounds(l,{padding:50,duration:1e3})}catch(l){console.error("Fly to error:",l)}},[w]),i.useEffect(()=>((async()=>{(!c.current||n.current)&&console.log("开始初始化地图...");try{const x=new Fe.Map({container:c.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});x.addControl(new Fe.NavigationControl,"top-right"),x.on("load",()=>{console.log("地图样式加载完成")}),x.on("error",M=>{var o;const C=String(((o=M==null?void 0:M.error)==null?void 0:o.message)||(M==null?void 0:M.message)||"");C.includes("ERR_ABORTED")||C.includes("AbortError")||C.includes("Canceled")||C.includes("cancelled")||console.error("地图错误:",M)}),n.current=x,console.log("地图初始化完成")}catch(x){console.error("地图初始化错误:",x)}})(),()=>{n.current&&(n.current.remove(),n.current=null,$e.current=!1)}),[]),i.useEffect(()=>{const s=n.current;if(!s)return;const x=()=>{s.getLayer("simple-tiles")&&s.setLayoutProperty("simple-tiles","visibility",re?"visible":"none")};s.isStyleLoaded()?x():s.once("style.load",x)},[re]);const Ue=async s=>{var M;const x=(M=s.target.files)==null?void 0:M[0];if(x){je.current&&je.current.abort(),pe(!0),ie(0),ne("正在读取文件..."),y(null),Ae(!0),A(URL.createObjectURL(x));try{console.log("开始读取文件:",x.name,"大小:",x.size);let C=[];const p=x.name.endsWith(".zip"),o=x.name.endsWith(".shp");if(!p&&!o){y("请上传 .zip 文件 (包含 Shapefile)"),pe(!1);return}ne("正在读取文件...");const l=await x.arrayBuffer();ie(30),ne("正在解析 Shapefile...");const f=await ac(l);console.log("Shapefile 解析完成:",f),f.type==="FeatureCollection"?C=f.features:Array.isArray(f)?C=f:f.type==="Feature"&&(C=[f]),console.log("解析到的 features 数量:",C.length),ie(95),ne(`已解析 ${C.length} 个 Features...`);const v={type:"FeatureCollection",features:C};ie(98),ne("正在处理 Place 数据...");const S=new Map;v.features.forEach(j=>{var _;const h=Number(((_=j.properties)==null?void 0:_.Place)??0);S.has(h)||S.set(h,{id:h,name:`Place ${h}`,featureCount:0});const D=S.get(h);D&&D.featureCount++}),ie(100),ne("加载完成!"),setTimeout(()=>{Ve(!0),T(v),u(Array.from(S.values()).sort((j,h)=>j.id-h.id)),pe(!1),Ae(!1),t(!1)},500)}catch(C){const p=C instanceof Error?C.message:"未知错误";y(`加载失败: ${p}`),pe(!1),t(!1)}}},Ke=Se.reduce((s,x)=>(s[x.category]||(s[x.category]=[]),s[x.category].push(x),s),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[be&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(bc,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:te}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Ie}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Ie,"%"]})]})}),a&&!be?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Gc,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${b}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[b,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:wc,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(Bc,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var s;return(s=Oe.current)==null?void 0:s.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(bc,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Oe,type:"file",accept:".shp,.zip",onChange:Ue,className:"hidden"})]})}):null,r&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:r}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(Oc,{size:14}),"刷新重试"]})})]}),I&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(Uc,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>N(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Fc,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Ge(!re),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${re?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${re?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:w??"",onChange:s=>z(s.target.value?Number(s.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Le=m==null?void 0:m.features)==null?void 0:Le.length)??0,")"]}),E.map(s=>e.jsxs("option",{value:s.id,children:[s.name," (",s.featureCount,")"]},s.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:g,onChange:s=>L(s.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Ke).map(([s,x])=>[e.jsx("optgroup",{label:s.charAt(0).toUpperCase()+s.slice(1),children:x.map(M=>e.jsx("option",{value:M.key,children:M.label},M.key))},s)])})]}),k&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Hc,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:k.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:k.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:k.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:k.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:k.nanCount})]})]})]})]})]}),!I&&e.jsx("button",{onClick:()=>N(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Wc,{size:18})}),ze&&Y&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[Y.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",Y.properties.Place]}),Y.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",Y.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",Y.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>ue(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(pc,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:Se.map(s=>{var M;const x=(M=Y.properties)==null?void 0:M[s.key];return x==null?null:e.jsxs("button",{onClick:()=>L(s.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${g===s.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:s.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof x=="number"?x.toFixed(2):x})]},s.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>z(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:c,className:"w-full h-full"}),J&&m&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(ic,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>se(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(pc,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>Be($==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${$==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:$==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:g.includes("K_")?(()=>{var C,p;const s=Math.round(((C=ve[g])==null?void 0:C.max)??30),x=Array.from({length:26},(o,l)=>{const f=l/25;let v,S,j;if(f<.167){const h=f/.167;v=0,S=0,j=Math.round(139+116*h)}else if(f<.333){const h=(f-.167)/.167;v=0,S=Math.round(255*h),j=255}else if(f<.5){const h=(f-.333)/.167;v=0,S=Math.round(255-128*h),j=Math.round(255-255*h)}else if(f<.667){const h=(f-.5)/.167;v=Math.round(255*h),S=255,j=0}else if(f<.833){const h=(f-.667)/.167;v=255,S=Math.round(255-128*h),j=0}else{const h=(f-.833)/.167;v=255,S=Math.round(127-127*h),j=0}return`#${v.toString(16).padStart(2,"0")}${S.toString(16).padStart(2,"0")}${j.toString(16).padStart(2,"0")}`}),M=Array.from({length:s+1},(o,l)=>x[Math.round(l*25/s)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((p=Se.find(o=>o.key===g))==null?void 0:p.label)||g}),e.jsx("div",{className:"flex flex-wrap gap-px",children:M.map((o,l)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:o}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:l})]},l))})]})})():g==="CoverRatio"||g==="ISF"||g==="GreenRatio"?(()=>{var j;const s=(()=>{var _;let h=1/0,D=-1/0;for(const B of m.features){const q=Number((_=B.properties)==null?void 0:_[g]);Number.isNaN(q)||q===-9999||(q<h&&(h=q),q>D&&(D=q))}return{min:h===1/0?0:h,max:D===-1/0?0:D}})(),x=w!==null&&k?{min:k.min,max:k.max}:s,M=((j=Se.find(h=>h.key===g))==null?void 0:j.label)||g,C=s.max>s.min?Math.max(0,Math.min(1,(x.min-s.min)/(s.max-s.min))):0,p=s.max>s.min?Math.max(0,Math.min(1,(x.max-s.min)/(s.max-s.min))):0,o=Math.max(0,p-C),l=Ne("#3182bd"),f=Ne("#e6550d"),v=Ce(l,f,C),S=Ce(l,f,p);return e.jsxs("div",{children:[$==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:w!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${C*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${v}, ${S})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),$==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:s.min.toFixed(2)}),e.jsx("span",{children:s.max.toFixed(2)})]})]})]})})():g.includes("elev")||g.includes("slope")?(()=>{var j;const s=(()=>{var _;let h=1/0,D=-1/0;for(const B of m.features){const q=Number((_=B.properties)==null?void 0:_[g]);Number.isNaN(q)||q===-9999||(q<h&&(h=q),q>D&&(D=q))}return{min:h===1/0?0:h,max:D===-1/0?0:D}})(),x=w!==null&&k?{min:k.min,max:k.max}:s,M=((j=Se.find(h=>h.key===g))==null?void 0:j.label)||g,C=s.max>s.min?Math.max(0,Math.min(1,(x.min-s.min)/(s.max-s.min))):0,p=s.max>s.min?Math.max(0,Math.min(1,(x.max-s.min)/(s.max-s.min))):0,o=Math.max(0,p-C),l=Ne("#31a354"),f=Ne("#756bb1"),v=Ce(l,f,C),S=Ce(l,f,p);return e.jsxs("div",{children:[$==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:w!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${C*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${v}, ${S})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(1)}),e.jsxs("span",{children:[x.max.toFixed(0),"+"]})]})]}),$==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:s.min.toFixed(1)}),e.jsxs("span",{children:[s.max.toFixed(0),"+"]})]})]})]})})():(()=>{var j;const s=(()=>{var _;let h=1/0,D=-1/0;for(const B of m.features){const q=Number((_=B.properties)==null?void 0:_[g]);Number.isNaN(q)||q===-9999||(q<h&&(h=q),q>D&&(D=q))}return{min:h===1/0?0:h,max:D===-1/0?0:D}})(),x=w!==null&&k?{min:k.min,max:k.max}:s,M=((j=Se.find(h=>h.key===g))==null?void 0:j.label)||g,C=s.max>s.min?Math.max(0,Math.min(1,(x.min-s.min)/(s.max-s.min))):0,p=s.max>s.min?Math.max(0,Math.min(1,(x.max-s.min)/(s.max-s.min))):0,o=Math.max(0,p-C),l=Ne("#31a354"),f=Ne("#756bb1"),v=Ce(l,f,C),S=Ce(l,f,p);return e.jsxs("div",{children:[$==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[M,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:w!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${C*100}%`,width:`${o*100}%`,background:`linear-gradient(to right, ${v}, ${S})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:x.min.toFixed(2)}),e.jsx("span",{children:x.max.toFixed(2)})]})]}),$==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[M,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:s.min.toFixed(2)}),e.jsx("span",{children:s.max.toFixed(2)})]})]})]})})()})]}),!J&&e.jsx("button",{onClick:()=>se(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(ic,{size:18})})]})},qn=[{key:"",label:"Home"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"ai",label:"AI"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"blog",label:"Blog"},{key:"about",label:"About"}],Tn={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},Me=({value:c,transform:n})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:n,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((a,t)=>e.jsx("span",{className:"flex items-center justify-center",children:Tn[c].includes(t)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},t))}),Gn=()=>{const[c,n]=i.useState(!1),[a,t]=i.useState(!1),[b,d]=i.useState({x:0,y:0}),r="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili",[y,m]=i.useState(`${r}/lili_01.png`),[T,E]=i.useState("Exploring the intersection of technology and creativity."),u=_c(),w=Pc(),g=u.pathname.split("/").filter(Boolean)[0]||"",L={product:`${r}/lili_05.png`,game:`${r}/lili_03.png`,ai:`${r}/lili_07.png`,platform:`${r}/lili_11.png`,tutorial:`${r}/lili_04.png`,about:`${r}/lili_02.png`,planning:`${r}/lili_06.png`},I=[`${r}/lili_01.png`,`${r}/lili_07.png`,`${r}/lili_08.png`,`${r}/lili_09.png`,`${r}/lili_10.png`,`${r}/lili_12.png`],N=["探索科技与创意的交汇点。","把数据转化为有意义的故事。","构建能激发灵感的数字体验。","连接产品与开发的桥梁。","创造在真实世界中落地的解决方案。","热衷于地理空间技术与城市规划。"],k=G=>G[Math.floor(Math.random()*G.length)];i.useEffect(()=>{m(L[g]??k(I)),E(k(N))},[g]);const R=()=>{d(A=>({x:A.x+720+Math.round(Math.random()*360),y:A.y+720+Math.round(Math.random()*360)}));const G=["product","game","ai","planning","platform","tutorial","about"];setTimeout(()=>w(`/${k(G)}`),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${a?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 items-center",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>n(!c),className:"icon-btn","aria-expanded":c,"aria-label":c?"Hide profile panel":"Show profile panel",title:c?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(W,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"林丽丽 Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:qn.map(G=>{const A=g===G.key;return e.jsx("li",{className:"flex",children:e.jsxs(W,{to:`/${G.key}`,onClick:()=>{window.innerWidth<768&&n(!1)},"aria-current":A?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${A?"text-ink":"text-ink-3 hover:text-ink"}`,children:[G.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${A?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},G.key||"home")})})})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(_n,{}),e.jsxs("button",{onClick:R,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"随机探索一个项目",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${b.x}deg) rotateY(${b.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(Me,{value:1,transform:"translateZ(10px)"}),e.jsx(Me,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(Me,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(Me,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(Me,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(Me,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>t(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),a&&e.jsx("button",{onClick:()=>t(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[c&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[y&&e.jsx("img",{src:y,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"设计师 · 开发者 · 产品创作者"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"创造有意义的数字体验，连接技术与创意。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:T}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Je,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Je,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Je,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsx("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:e.jsxs(tc,{children:[e.jsx(F,{path:"/",element:e.jsx(Dn,{})}),e.jsx(F,{path:"/planning",element:e.jsx(xe,{data:Ee,type:"planning"})}),e.jsx(F,{path:"/planning/:id",element:e.jsx(we,{data:Ee,type:"planning"})}),e.jsx(F,{path:"/product",element:e.jsx(xe,{data:_e,type:"product"})}),e.jsx(F,{path:"/product/:id",element:e.jsx(we,{data:_e,type:"product"})}),e.jsx(F,{path:"/game",element:e.jsx(xe,{data:Pe,type:"game"})}),e.jsx(F,{path:"/game/:id",element:e.jsx(we,{data:Pe,type:"game"})}),e.jsx(F,{path:"/ai",element:e.jsx(xe,{data:Re,type:"ai"})}),e.jsx(F,{path:"/ai/:id",element:e.jsx(we,{data:Re,type:"ai"})}),e.jsx(F,{path:"/platform",element:e.jsx(xe,{data:qe,type:"platform"})}),e.jsx(F,{path:"/platform/:id",element:e.jsx(we,{data:qe,type:"platform"})}),e.jsx(F,{path:"/tutorial",element:e.jsx(xe,{data:Te,type:"tutorial"})}),e.jsx(F,{path:"/tutorial/:id",element:e.jsx(we,{data:Te,type:"tutorial"})}),e.jsx(F,{path:"/clusteringeomap",element:e.jsx(Rn,{})}),e.jsx(F,{path:"/about",element:e.jsx(ln,{})}),e.jsx(F,{path:"/contact",element:e.jsx(fn,{})})]})})]})]})},Bn=`---
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
`,On=/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/,Un=/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/,Fn=/^\s*-\s*(.*)$/,Hn=65279;function Wn(c){const a=(c.charCodeAt(0)===Hn?c.slice(1):c).replace(/\r\n/g,`
`),t=On.exec(a);if(!t)return{data:{},content:a};const b={};let d=null;for(const r of t[1].split(`
`)){if(!r.trim()||r.trimStart().startsWith("#"))continue;const y=Fn.exec(r);if(y&&d){b[d].push(cc(y[1]));continue}const m=Un.exec(r);if(!m)continue;const[,T,E]=m,u=E.trim();if(u===""){d=T,b[T]=[];continue}d=null,b[T]=u.startsWith("[")&&u.endsWith("]")?Vn(u.slice(1,-1)):cc(u)}return{data:b,content:a.slice(t[0].length)}}function cc(c){const n=c.trim(),a=n[0];return n.length>=2&&(a==='"'||a==="'")&&n.endsWith(a)?n.slice(1,-1).replace(/\\(["'])/g,"$1"):n}function Vn(c){return c.split(",").map(n=>cc(n)).filter(n=>n!=="")}const $n=Object.assign({"./blog/hello-world.md":Bn});function Kn(c){return c instanceof Date?c.toISOString().slice(0,10):typeof c=="string"?c.trim():""}function Zn(c,n){const a=c.split("/").pop().replace(/\.md$/,"");try{const{data:t,content:b}=Wn(n);return{slug:a,title:typeof t.title=="string"&&t.title?t.title:a,date:Kn(t.date),description:typeof t.description=="string"?t.description:"",tags:Array.isArray(t.tags)?t.tags.map(String):[],cover:typeof t.cover=="string"&&t.cover?t.cover:void 0,content:b}}catch(t){return console.error(`[blog] 解析 ${c} 失败，已跳过 frontmatter`,t),{slug:a,title:a,date:"",description:"",tags:[],content:n}}}const He=Object.entries($n).map(([c,n])=>Zn(c,n)).sort((c,n)=>n.date.localeCompare(c.date)),Xn=c=>He.find(n=>n.slug===c),ae={repo:"LiliLIN0324/lililin0324.github.io",repoId:"R_kgDOQpt6HQ",category:"Announcements",categoryId:"DIC_kwDOQpt6Hc4DF4Yk",mapping:"specific",lang:"zh-CN",theme:"preferred_color_scheme"},Yn=({term:c})=>{const n=i.useRef(null),a=!!ae.categoryId;return i.useEffect(()=>{if(!a)return;const t=n.current;if(!t)return;t.innerHTML="";const b=document.createElement("script");b.src="https://giscus.app/client.js",b.async=!0,b.crossOrigin="anonymous",b.setAttribute("data-repo",ae.repo),b.setAttribute("data-repo-id",ae.repoId),b.setAttribute("data-category",ae.category),b.setAttribute("data-category-id",ae.categoryId),b.setAttribute("data-mapping",ae.mapping),b.setAttribute("data-term",c),b.setAttribute("data-strict","0"),b.setAttribute("data-reactions-enabled","1"),b.setAttribute("data-emit-metadata","0"),b.setAttribute("data-input-position","top"),b.setAttribute("data-theme",ae.theme),b.setAttribute("data-lang",ae.lang),b.setAttribute("data-loading","lazy"),t.appendChild(b)},[c,a]),a?e.jsx("div",{ref:n,className:"giscus mt-10"}):e.jsxs("div",{className:"border border-dashed border-rule p-6",children:[e.jsx("p",{className:"eyebrow mb-2",children:"Comments"}),e.jsxs("p",{className:"text-sm leading-relaxed text-ink-3",children:["评论尚未配置。在"," ",e.jsx("code",{className:"font-mono text-ink-2",children:"src/blog/BlogComments.tsx"})," ","的 ",e.jsx("code",{className:"font-mono text-ink-2",children:"GISCUS_CONFIG"})," 里填入 repoId 与 categoryId 即可（仓库的 Discussions 已开启）。"]})]})},Qn={table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:t,className:"mb-5 text-2xl font-bold tracking-tight text-ink first:mt-0",...n,children:c})},h2:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:t,className:"mt-10 mb-4 text-xl font-bold tracking-tight text-ink",...n,children:c})},h3:({children:c,...n})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:t,className:"mt-8 mb-3 text-lg font-bold text-ink",...n,children:c})},h4:({children:c,...n})=>e.jsx("h4",{className:"mt-6 mb-2 text-base font-semibold text-ink",...n,children:c}),h5:({children:c,...n})=>e.jsx("h5",{className:"mt-5 mb-2 text-sm font-semibold text-ink-2",...n,children:c}),h6:({children:c,...n})=>e.jsx("h6",{className:"mt-4 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...n,children:c}),p:({children:c,...n})=>e.jsx("p",{className:"mb-5 leading-relaxed text-ink-2",...n,children:c}),a:({children:c,href:n,...a})=>e.jsx("a",{href:n,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...a,children:c}),img:({src:c,alt:n,...a})=>e.jsx("img",{src:c,alt:n,className:"my-6 h-auto w-full border border-rule object-cover",onError:t=>{t.target.style.display="none"},...a}),ul:({children:c,...n})=>e.jsx("ul",{className:"mb-5 list-disc space-y-1 pl-6 text-ink-2",...n,children:c}),ol:({children:c,...n})=>e.jsx("ol",{className:"mb-5 list-decimal space-y-1 pl-6 text-ink-2",...n,children:c}),li:({children:c,...n})=>e.jsx("li",{className:"leading-relaxed",...n,children:c}),blockquote:({children:c,...n})=>e.jsx("blockquote",{className:"my-6 border-l-2 border-accent pl-4 text-ink-2 italic",...n,children:c}),code:({className:c,children:n,...a})=>(c==null?void 0:c.includes("language-"))||typeof n=="string"&&n.includes(`
`)?e.jsx("code",{className:`${c||""} font-mono text-[13px] text-ink`,...a,children:n}):e.jsx("code",{className:"rounded border border-rule bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-ink",...a,children:n}),pre:({children:c,...n})=>e.jsx("pre",{className:"mb-5 overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas",...n,children:c}),hr:({...c})=>e.jsx("hr",{className:"my-10 border-0 border-t border-rule",...c})},Jn=()=>{const{slug:c}=kc(),n=Xn(c||"");return i.useEffect(()=>(n&&(document.title=`${n.title} · Lili's Blog`),()=>{document.title="Lili Lin | Portfolio"}),[n]),n?e.jsx("article",{className:"shell animate-rise-in py-10 md:py-14",children:e.jsxs("div",{className:"mx-auto max-w-3xl",children:[e.jsxs("div",{className:"mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx(W,{to:"/blog",className:"transition-colors hover:text-ink",children:"← 全部文章"}),e.jsx("span",{className:"h-3 w-px bg-rule","aria-hidden":"true"}),e.jsx("span",{children:n.date||"未标注日期"})]}),e.jsx("h1",{className:"text-display-sm mb-4",children:n.title}),n.description&&e.jsx("p",{className:"mb-6 max-w-measure text-base leading-relaxed text-ink-2",children:n.description}),n.tags.length>0&&e.jsx("div",{className:"mb-10 flex flex-wrap gap-1.5",children:n.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))}),n.cover&&e.jsx("img",{src:n.cover,alt:"",className:"mb-10 w-full border border-rule object-cover"}),e.jsx("div",{className:"prose-custom border-t border-rule-strong pt-10 text-base leading-relaxed text-ink-2",children:e.jsx(Nc,{remarkPlugins:[Sc],rehypePlugins:[Cc],components:Qn,children:n.content})}),e.jsx(Yn,{term:`blog/${n.slug}`})]})}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Post not found"}),e.jsx(W,{to:"/blog",className:"btn-ghost mt-6",children:"← 返回博客"})]})})},ea=()=>(i.useEffect(()=>(document.title="Lili's Blog",()=>{document.title="Lili Lin | Portfolio"}),[]),He.length===0?e.jsxs("div",{className:"shell py-20 text-center",children:[e.jsx("p",{className:"eyebrow",children:"Blog"}),e.jsxs("p",{className:"mt-3 text-ink-3",children:["还没有文章，往 ",e.jsx("code",{className:"font-mono",children:"src/data/blog/"})," 里放一个 .md 文件即可。"]})]}):e.jsxs("div",{className:"shell animate-rise-in py-10 md:py-14",children:[e.jsxs("div",{className:"section-head mb-6",children:[e.jsx("p",{className:"eyebrow",children:"Blog / Index"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(He.length).padStart(2,"0")," Posts"]})]}),e.jsx("h1",{className:"text-display-sm mb-10",children:"写作"}),e.jsx("ul",{className:"border-t border-rule",children:He.map((c,n)=>e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs(W,{to:`/blog/${c.slug}`,className:"flex items-start gap-5 py-6 md:gap-8",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(n+1).padStart(2,"0")}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[e.jsx("h2",{className:"text-lg font-bold tracking-tight text-ink md:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:c.date})]}),c.description&&e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),c.tags.length>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsx("span",{className:"self-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-ink",children:"Read →"})]})},c.slug))})]})),ca=()=>e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:"shrink-0 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs(W,{to:"/blog",className:"group flex items-baseline gap-2.5",children:[e.jsx("span",{className:"text-lg font-bold tracking-masthead md:text-xl",children:"Lili's Blog"}),e.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 sm:inline",children:"notes & writing"})]}),e.jsx(W,{to:"/",className:"btn-ghost !px-3 !py-1.5",children:"← 返回作品集"})]})}),e.jsx("main",{className:"min-h-0 flex-1 overflow-y-auto",children:e.jsxs(tc,{children:[e.jsx(F,{index:!0,element:e.jsx(ea,{})}),e.jsx(F,{path:":slug",element:e.jsx(Jn,{})})]})}),e.jsx("footer",{className:"shrink-0 border-t border-rule bg-surface",children:e.jsxs("div",{className:"shell flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx("span",{children:"Lili Lin"}),e.jsxs("span",{children:["© ",new Date().getFullYear()]})]})})]});function ta(){const[c,n]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(Rc,{children:e.jsxs(tc,{children:[e.jsx(F,{path:"/blog/*",element:e.jsx(ca,{})}),e.jsx(F,{path:"*",element:e.jsx(Gn,{})})]})}),!c&&e.jsx(Vc,{onFinish:()=>n(!0)})]})}qc.createRoot(document.getElementById("root")).render(e.jsx(ta,{}));
