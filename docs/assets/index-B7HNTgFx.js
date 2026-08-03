const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-D_ileyyg.js","./react-vendor-6zld6QO8.js","./geo-Z02C8O4I.js","./vendor-C2tZ253J.js","./plotly-D7zpmGV0.js","./icons-Dw2J7OpA.js","./UR-platform-DFO5eSKd.js","./maplibre-BedwuVXB.js","./maplibre-PhPnDjd-.css","./heatmapper-CQ7wneDH.js","./openstreetmap-wceuEFyo.js","./leaflet-DQtq8iNv.js","./leaflet-Dgihpmma.css","./photogeo-DUM1KJgS.js","./photogeomap-BZHaPQu1.js","./clusteringevents-CQdjjSQo.js","./framer-DvVmTyA1.js","./litflow-DYT07kb5.js","./boxupcyberspace-CJjHQ5R1.js","./epsteinscret-mLJBzIXl.js","./wechatgame-BR7BpSrd.js","./72HourGameJamDemo-BWPUgRvj.js","./PeaceEliteHustCampusDemo-D-DWwJkq.js","./BMWMetaIslandDemo-7uu2MOZP.js","./riffle-RlweP75u.js","./genstyle-DuJ38oKx.js","./genshot-BoH35G7G.js","./dragon-diffusion-Dj4t-WNK.js","./anyreal-DKKTpW8w.js","./previous-archi-work-CvNoz6hg.js","./hongqiqu-y3eLCJ-3.js"])))=>i.map(i=>d[i]);
import{r as n,j as e,L as te,u as oc,R as hc,c as lc,d as vc,e as mc,f as F,H as jc,g as yc}from"./react-vendor-6zld6QO8.js";import{A as xc,m as $e}from"./framer-DvVmTyA1.js";import{M as wc,r as kc,a as zc}from"./markdown-q3GborES.js";import{b as Ye}from"./geo-Z02C8O4I.js";import{m as Pe}from"./maplibre-BedwuVXB.js";import{U as Qe,L as Nc,D as Mc,R as Sc,M as Ic,C as Ac,a as Cc,b as Dc,X as Je,c as ec}from"./icons-Dw2J7OpA.js";import"./vendor-C2tZ253J.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function u(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=u(r);fetch(r.href,l)}})();function Lc({onFinish:c}){const[a,u]=n.useState(!0),t=n.useRef(null),r=n.useRef({x:-1e3,y:-1e3});return n.useEffect(()=>{const l=t.current;if(!l)return;const s=l.getContext("2d");if(!s)return;let C,w=[];const R=()=>{l.width=window.innerWidth,l.height=window.innerHeight},N=f=>{r.current={x:f.clientX,y:f.clientY}},j=f=>{f.touches.length>0&&(r.current={x:f.touches[0].clientX,y:f.touches[0].clientY})};window.addEventListener("resize",R),window.addEventListener("mousemove",N),window.addEventListener("touchmove",j),R();class k{constructor(){this.x=Math.random()*l.width,this.y=Math.random()*l.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>l.width)&&(this.vx*=-1),(this.y<0||this.y>l.height)&&(this.vy*=-1);let P=r.current.x-this.x,G=r.current.y-this.y,B=Math.sqrt(P*P+G*G),E=P/B,J=G/B;const _=150;let S=(_-B)/_;B<_&&(this.x-=E*S*this.density*.5,this.y-=J*S*this.density*.5)}draw(){s&&(s.fillStyle="rgba(255, 255, 255, 0.8)",s.beginPath(),s.arc(this.x,this.y,this.size,0,Math.PI*2),s.fill())}}for(let f=0;f<120;f++)w.push(new k);const M=()=>{s.clearRect(0,0,l.width,l.height);for(let f=0;f<w.length;f++){w[f].update(),w[f].draw();for(let P=f+1;P<w.length;P++){const G=w[f].x-w[P].x,B=w[f].y-w[P].y,E=Math.sqrt(G*G+B*B);E<100&&(s.beginPath(),s.strokeStyle=`rgba(255, 255, 255, ${.2*(1-E/100)})`,s.lineWidth=.6,s.moveTo(w[f].x,w[f].y),s.lineTo(w[P].x,w[P].y),s.stroke())}}C=requestAnimationFrame(M)};return M(),()=>{cancelAnimationFrame(C),window.removeEventListener("resize",R),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",j)}},[]),e.jsx(xc,{onExitComplete:c,children:a&&e.jsxs($e.div,{onClick:()=>u(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx($e.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx($e.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const Ec=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/99.jpg"]

---

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/ChickenUtopia.mp4"></video>

# 效果展示
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/99.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/03.jpg)
`,Pc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/99.jpg"]

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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/99.jpg)

---`,Rc=`---
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




---`,Tc=`---\r
id: "07"\r
slug: "cluster-visualizer-3d"\r
title: "Cluster Visualizer 3D"\r
category: "Global heat mapping"\r
year: "2024-present"\r
description: "基于PCA和K-Means的高维数据聚类3D探索"\r
tech: ["Python","Three.js","React"]\r
abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, project visualizes complex data patterns in an intuitive manner."\r
challenge: "compressed 223 cities in global data and revelas pattern from window period of time-series data from 2017 to 2019 with both day and night time data"\r
solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg)\r
`,_c=`---\r
id: "03"\r
slug: "knowledge-graph-urban-planning"\r
title: "Knowledge Graph Generation from Urban Planning Texts"\r
category: "Knowledge Graph"\r
year: "2025-present"\r
description: "纽约和上海总体规划中气候变化适应的比较分析"\r
tech: ["Knowledge Graph","NLP"]\r
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to generate and compare the edges connecting these nodes. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city learning for climate resilience."\r
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."\r
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.jpg"]\r
---\r
\r
# 效果展示\r
\r
“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” \r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/KnowledgeGraph.mp4"></video>\r
</div>\r
\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg)\r
\r
> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>\r
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>\r
\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.png)\r
\r
> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.png)\r
\r
> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.png)\r
`,qc=`---
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

`,Gc=`---\r
id: "04"\r
slug: "local-climate-zones-urban-heat-resilience"\r
title: "Local Climate Zones and Urban Heat Resilience"\r
category: "GIS & Spatial Analysis"\r
year: "2025-present"\r
description: "美国不同气候区的实证研究"\r
tech: ["GIS","Spatial Analysis"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/99.png"]\r
---\r
\r
# 效果展示\r
“局部气候区与城市热岛效应韧性：纽约实证研究”\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Local%20Climate%20Zone.mp4"></video>\r
</div>\r
\r
> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/01.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/99.png)\r
\r
abstract: "As climate change intensifies, understanding heat resilience (HR) in urban environments is crucial for developing climate-resilient cities. While numerous studies have examined the relationship between urban form and urban heat islands (UHI), few have focused on HR, often limiting their analysis to single extreme heat events. Additionally, translating complex urban form findings into practical urban planning policies remains challenging. The concept of local climate zones (LCZ) offers a thermally-based classification of urban forms, which is more accessible for policymakers. However, most LCZ studies focus on UHI, with little attention to HR. This study addresses this gap by analyzing the relationship between LCZs and HR in New York City. HR is defined as the difference in land surface temperature (LST) between extreme heat and normal heat days. Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles. LCZ map and GIS data, combined with census tract information, are analyzed using a spatial panel model to assess the influence of different LCZs and large-scale landscapes on HR. The results reveal that LCZ 1 (Compact high-rise) and LCZ 4 (Open high-rise) significantly increase HR compared to LCZ 2 (Compact mid-rise), while LCZ 3 (Compact low-rise) reduces HR. Additionally, HR is significantly elevated during extreme events with higher temperatures in normal heat days and greater temperature increases between normal and extreme heat days. These insights offer valuable guidance for urban planners and policymakers in designing heat-resilient cities by incorporating the LCZ framework into climate adaptation strategies and urban governance."\r
challenge: "Translating complex urban form findings into practical urban planning policies remains challenging."\r
solution: "Using Landsat 8 imagery from 2010 to 2019 and selecting days with minimal cloud cover, the study identifies three pairs of heat events based on air temperature percentiles."\r
\r
\r
\r
`,Bc=`---\r
id: "05"\r
slug: "urban-heat-resilience-machine-learning"\r
title: "Assessing Urban Heat Resilience"\r
category: "Machine Learning"\r
year: "2025-present"\r
description: "利用可解释机器学习方法揭示城市形态因子与极端高温之间的非线性关系"\r
tech: ["GIS","Machine Learning"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/99.jpg"]\r
---\r
# Research topic 1 \r
“利用机器学习评估城市形态对不同尺度下热韧性的非线性影响”\r
\r
> 2025.10，在美国明尼阿波利斯举行的第65届美国大学规划学院协会（ACSP）会议上作口头报告\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/02.png)<br>\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/03.png)<br>\r
> 2026.2，在新加坡举行的第40届AAAI城市规划人工智能研讨会上作海报展示\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg)<br>\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/04.png)<br>\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/05.png)<br>\r
> 2025.5.10 在线上参加佛罗里达大学组织的AI和城市工作坊\r
> 2025.8.7 在英国剑桥大学进行工作坊交流\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/06.png)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/07.png)\r
\r
\r
## abstract: \r
"Climate change has been a pressing global issue in recent decades as it increasingly influences human life through extreme weather, ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE). In addition, the results indicate that urban form factors have nonlinear relationships with urban land surface extreme heat and associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities."\r
challenge: "The majority of existing studies have relied on traditional regression models that assume linear relationships."\r
solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods."\r
\r
## 1 - Extreme Heat Days and Normal Heat Days Identification\r
\r
### 1.1 Extreme Heat Day Definition\r
\r
This section defines the criteria for identifying extreme heat days and normal heat days in the study area.\r
\r
| Aspect | Details |\r
|--------|---------|\r
| **Official Definition** | Extreme heat is defined as a period during which the apparent temperature exceeds 33°C for at least two consecutive days, or when rapid temperature increases or prolonged heatwaves are expected to result in significant or widespread harm, based on the Korea Meteorological Administration (KMA). |\r
| **Selection Criteria** | Based on duration, intensity, and potential damage impact |\r
| **Reference Links** | [KMA Wind Chill Data](https://data.kma.go.kr/climate/windChill/selectWindChillChart.do?pgmNo=111) |\r
| **Temporal Scope** | In Korea, summer spans May to September. Therefore, percentile analysis uses data from months 5-9 |\r
| **Data Source** | [KMA Statistical Data](https://data.kma.go.kr/climate/RankState/selectRankStatisticsDivisionList.do?pgmNo=179) |\r
| **Extreme Heat Threshold** | Apparent Temperature (AT) > 95th percentile |\r
| **Normal Heat Range** | Apparent Temperature (AT) between 40th-60th percentile |\r
\r
## 2 - Weather Station Selection and Data Processing\r
\r
### 2.1 Station Selection Process\r
\r
For accurate temperature analysis, we selected the weather station with the most comprehensive data coverage. After evaluating available stations, **Station ID 108** was chosen for its complete historical records.\r
\r
![Air Station Selection](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/air_station_select.png?raw=true)\r
\r
### 2.2 Temperature Data Analysis (2015-2024)\r
\r
The analysis revealed challenges in finding suitable comparison days. For instance, June 16th, 2023, initially appeared to be a normal heat day, but heavy rainfall two days prior significantly affected the temperature patterns.\r
\r
![Weather Conditions](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/其他天情况.png?raw=true) \r
![Weather Condition Pairs](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/excel/weather_condition_on_pairs.png?raw=true) \r
\r
#### Final Comparison Pairs:\r
- **20160924 vs 20160807** (Extreme vs Normal heat day)\r
- **20230616 vs 20230819** (Extreme vs Normal heat day)\r
\r
## 3 - Landsat Data Processing and Feature Variables\r
\r
### 3.1 Landsat Surface Temperature Data\r
\r
After identifying extreme heat days (apparent temperature >33°C and percentile >95%), we downloaded corresponding satellite data from Landsat Collection 2 Level-2 8/9.\r
\r
**Data Source:** [USGS Landsat Collection 2 Surface Temperature](https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature)\r
\r
download link: https://earthexplorer.usgs.gov/\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/99.png)\r
#### Temperature Conversion Formula\r
To properly interpret Landsat Collection 2 Surface Temperature (ST) data, users must apply a scaling factor to convert digital numbers (DN) to temperature values in Kelvin:\r
\r
\`\`\`bash\r
ST = (DN * 0.00341802) + 149.0\r
\`\`\`\r
\r
### 3.2 Urban Form Feature Variables\r
\r
#### 3.2.1 Building Data Processing\r
\r
| Processing Step | Details |\r
|------------------|---------|\r
| **Data Source** | [National Geographic Information Institute (NGII)](https://map.ngii.go.kr/ms/map/NlipMap.do) |\r
| **Initial Processing** | The original shapefile contained visible seams, which were merged into a single unified file |\r
| **Data Cleaning** | **Step 1**: Applied area threshold ≥ 5 m² using \`data[data['area'] >= 5]\` |\r
| | **Step 2**: Excluded temporary structures \`['무벽건물', '가건물']\` |\r
| | **Step 3**: Final building types \`['주택외건물', '일반주택', '연립주택', '공사중건물', '아파트', '온실']\` |\r
\r
##### Final Building Dataset (area ≥ 5 m²)\r
\r
| Building Type | Count |\r
|---------------|--------|\r
| General Housing (일반주택) | 271,724 |\r
| Non-residential Buildings (주택외건물) | 238,633 |\r
| Row Housing (연립주택) | 98,280 |\r
| Apartments (아파트) | 24,716 |\r
| Buildings Under Construction (공사중건물) | 1,848 |\r
| Greenhouses (온실) | 1,306 |\r
\r
\r
#### 02_NDVI (Normalized Difference Vegetation Index)\r
\r
| Item | Details |\r
|------|---------|\r
| **Data Source** | https://landsat.gsfc.nasa.gov/satellites/landsat-8/landsat-8-bands/ |\r
| **Formula** | NDVI = (NIR - Red) / (NIR + Red) |\r
| **Bands** | band 4 = Red, band 5 = NIR, Landsat 8/9 Surface Reflectance Band 5 & Band 4 from Collection 2 Level-2 |\r
\r
\r
#### 03_Parks\r
\r
| Criteria | Details |\r
|----------|---------|\r
| **Area Filter** | Area ≥ 100,000㎡ |\r
\r
#### 04_Elevation\r
\r
| Data Source | Details |\r
|-------------|---------|\r
| **Elevation** | Digital Elevation Model (DEM) data |\r
\r
\r
### 03 Urban Form Variables Overview\r
\r
#### 01_Building-Related Variables\r
\r
| Variable | Description | Visual |\r
|----------|-------------|--------|\r
| BCR | Building cover ratio | ![BCR](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_2building.png?raw=true) |\r
| BHV | Building shpfile with height | ![BHV](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_2bh.png?raw=true) |\r
| SVF | Sky view factors | ![SVF](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_3svf.png?raw=true) |\r
\r
#### 02_Environmental Variables\r
\r
| Variable | Description | Visual |\r
|----------|-------------|--------|\r
| NDVI | Normalized difference vegetation index | ![NDVI](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_7ndvi.png?raw=true) |\r
| EV | Elevation | ![EV](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_8ev.png?raw=true) |\r
| WR | Waterbodies file | ![WR](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_4wb.png?raw=true) |\r
\r
#### 03_Distance Variables\r
\r
| Variable | Description | Visual |\r
|----------|-------------|--------|\r
| Dist_W | Waterbodies file | ![Dist_W](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_4wb.png?raw=true) |\r
| Dist_P | Parks file | ![Dist_P](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_5bp.png?raw=true) |\r
| Dist_M | Mountain file | ![Dist_M](https://github.com/LiliLIN0324/GBDT/blob/ec441c372473eb65e3636e4b9b75d98f034be8ad/variables/Seoul_6mt.png?raw=true) |\r
\r
#### 04_Variable Indicators Summary\r
\r
| No. | Indicator | Unit | Formula | Data Source |\r
|-----|-----------|------|---------|-------------|\r
| 01 | BCR | % | BCR = Built-up Area / Total Land Area | 국토지리정보원 (NGII) |\r
| 01 | BHV | m | BHV = SD(Building Heights within unit) | 국토지리정보원 (NGII) |\r
| 01 | SVF | N/A | SVF = Visible Sky Hemisphere Area / Total Hemisphere Area | 국가정보포털 (NSDI) |\r
| 02 | NDVI | N/A | NDVI = (NIR - Red) / (NIR + Red) | USGS - Landsat 8 Operational Land Imager (OLI) surface reflectance from Bands 4 and 5 |\r
| 02 | EV | m | Elevation(x,y)=DEM(x,y) | 국토지리정보원 (NGII) |\r
| 02 | WR | % | WR = Water Surface Area / Total Unit Area | 국가정보포털 (NSDI) |\r
| 03 | Dist_P | km | Euclidean_Distance(Centroid, Nearest Park) | Seoul Open Data |\r
| 03 | Dist_M | km | Euclidean_Distance(Centroid, Nearest Mountain) | 국가정보포털 (NSDI) |\r
| 03 | Dist_W  |km  |Euclidean_Distance(*Centroid*, Nearest Waterbody)        |국가정보포털 (NSDI)  |\r
\r
---\r
\r
## 4 - Research Results and Visualization\r
\r
![Research Results](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg)\r
\r
This poster summarizes the key findings of our study on urban heat resilience using machine learning approaches. The visualization demonstrates the nonlinear relationships between urban form factors and extreme heat events.\r
\r
# Research topic 2\r
“利用机器学习评估城市形态对不同天气状况下热韧性的非线性影响”\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/GBDT2.mp4"></video>\r
</div>`,Fc=`---\r
id: "06"\r
slug: "participatory-urban-regeneration-empowered-by-artificial-intelligence"\r
title: "人工智能赋能下的参与式城市更新 Participatory Urban Regeneration Empowered by Artificial Intelligence"\r
category: "Urban regeneration, participatory urban planning"\r
year: "2025-present"\r
description: "利用AI技术构建平台以鼓励利益相关者参与城市更新"\r
tech: ["diffusion models"]\r
abstract: "This project integrates generative artificial intelligence techniques, including diffusion models, with large language model-based multi-agent mechanisms to develop a participatory urban regeneration framework that facilitates public interaction and multi-stakeholder engagement. Taking the area surrounding the initial development zone of Shanghai Wusong Innovation City as a case study, the framework incorporates urban spatial morphology, behavioral activity patterns, and urban heat island indicators into the early formulation of urban design guidelines, with the aim of achieving a participatory, efficient, and responsive pathway to urban regeneration."\r
solution: "https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm"\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/99.jpg"]\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/PARTICIPATORY%20URBAN%20REGENERATION%20EMPOWERED%20BY%20ARTIFICAL%20INTELLIGENCE.mp4"></video>\r
</div>\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/03.jpg)\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/04.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/05.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/06.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/07.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/08.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/09.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/10.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/11.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/12.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/13.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/14.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/15.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/16.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/17.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/18.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/19.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/20.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/21.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/22.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/23.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/24.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/25.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/26.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/27.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/28.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/29.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/30.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/31.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/32.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/33.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/34.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/35.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/36.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/37.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/38.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/99.jpg)\r
https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm\r
\r
\r
`,Oc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/99.jpg"]

---

硕士期间总共参与了 **5 项研究课题**，参加了一场 **AI for Cities 夏令营**，同时加入 **联合国人居署项目 × 首尔大学** 研究课题。

---

## 国际会议发表（4 项）

### [Knowledge Graph Generation from Urban Planning Texts](#/planning/knowledge-graph-urban-planning)

基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析

> 2025.2 · 第39届 AAAI 城市规划人工智能研讨会 · 海报展示 [Workshop]

> 2025.6 · 英国伦敦 CUPUM 计算城市规划与城市管理会议 · 口头报告

> 2025.7 · 中国厦门 第19届 IACP 国际中国规划协会会议 · 口头报告

### [Local Climate Zones and Urban Heat Resilience](#/planning/local-climate-zones-urban-heat-resilience)

局部气候区与城市热岛效应韧性：纽约实证研究

> 2025.4 · 加拿大温哥华 第52届 ICUA 国际城市事务会议 · 口头报告

### [Assessing Urban Heat Resilience](#/planning/urban-heat-resilience-machine-learning)

利用机器学习评估城市形态对不同尺度下热韧性的非线性影响

> 2025.10 · 美国明尼阿波利斯 第65届 ACSP 美国大学规划学院协会会议 · 口头报告
> 2025.6 · 英国剑桥 学术交流研讨会 · 口头报告 [Seminar]
> 2025.5 · 佛罗里达大学 AI Cities 研讨会 · 口头报告 [Workshop, 线上]
> 2026.2 · 新加坡 第40届 AAAI 城市规划人工智能研讨会 · 海报展示 [Workshop]

### 利用机器学习评估首尔城市形态在不同天气下热韧性的非线性影响

> 2026.7 · 中国西安 第20届 IACP 国际中国规划协会会议 · 口头报告

---

## [Participatory Urban Regeneration Empowered by AI](#/planning/participatory-urban-regeneration-empowered-by-artificial-intelligence)

AI for Cities 夏令营 · 人工智能赋能下的参与式城市更新

> 2025.7 · 上海同济大学 · 作为数据组组长参与工作坊 [Workshop]

---

## 联合国人居署项目 × 首尔大学

> 中日韩城市扩张和城市收缩 SDGs 议题 [跨国多高校合作]
> [CityEnergyLab — UN Projects SIT Index for East Asia](https://cityenergylab.cafe24.com/un-projects-sit-index-for-east-asia-from-urban-diagnostics-to-expanding-toward-asia/)


---

## 本科研究

### [neurotopia](#/planning/neurotopia)

本科期间的一项城市设计研究，在韩国春川进行了分享。

> 2023 · 韩国春川 · 国际学术交流分享
---


## 附图

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/99.jpg)
`,Uc=`---\r
id: "08"\r
slug: "heatmapper"\r
title: "HeatMapper - Global Heat Monitoring"\r
category: "urban heat island, extreme heat, participation"\r
year: "2025-present"\r
description: "面向全球热监测与可视化的Web平台"\r
tech: ["React","Three.js","D3.js","Node.js"]\r
abstract: "HeatMapper is a comprehensive web platform designed to monitor and visualize global heat patterns. It provides real-time data on urban heat islands, extreme heat events, and temperature trends across different regions. The platform aims to raise awareness about heat-related issues and support informed decision-making for urban planning and climate adaptation."\r
challenge: "Integrating real-time temperature data from multiple sources and presenting it in an intuitive, interactive visualization that allows users to explore heat patterns at different scales."\r
solution: "Developed a responsive web application using React for the frontend, Three.js for 3D visualizations, D3.js for data visualizations, and Node.js for the backend. Implemented data integration pipelines to aggregate temperature data from various sources and created interactive maps and charts for user exploration."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/99.png)\r
`,Wc=`---\r
id: "01"\r
slug: "dragon-diffussion"\r
title: "Dragon Diffussion - AI 创意生产平台"\r
category: "UI&UX Design"\r
year: "2023.10-2024.9"\r
description: "一款基于AI的图像生成工具，可将文本提示转化为高质量视觉内容的平台。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/99.jpg"]\r
---\r
# 效果展示\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(1).mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(2).mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion-(3).mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/DragonDiffusion.mp4"></video>\r
</div>\r
\r
# PPT 汇报\r
\r
![slide 01](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg)\r
![slide 02](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg)\r
![slide 03](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg)\r
![slide 04](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg)\r
![slide 05](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg)\r
![slide 06](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg)\r
![slide 07](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg)\r
![slide 08](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg)\r
![slide 09](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg)\r
![slide 10](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg)\r
![slide 11](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg)\r
![slide 12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg)\r
![slide 13](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg)\r
![slide 14](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg)\r
![slide 15](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg)\r
![slide 16](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/16.jpg)\r
![slide 17](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/17.jpg)\r
![slide 18](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/18.jpg)\r
![slide 19](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/19.jpg)\r
![slide 20](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/20.jpg)\r
![slide 21](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/21.jpg)\r
![slide 22](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/22.jpg)\r
![slide 23](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/23.jpg)\r
\r
![slide 24](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg)\r
![slide 25](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg)\r
![slide 26](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg)\r
![slide 27](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg)\r
![slide 28](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg)\r
![slide 29](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg)\r
![slide 30](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg)\r
![slide 31](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg)\r
![slide 32](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg)\r
![slide 33](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg)\r
![slide 34](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg)\r
![slide 35](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg)\r
![slide 36](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg)\r
![slide 37](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg)\r
![slide 38](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg)\r
![slide 39](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/99.jpg)\r
---`,Vc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/99.jpg"]
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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/99.jpg)

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
`,Hc=`---\r
id: "03"\r
slug: "genshot-AI-video-generation-tool"\r
title: "Genshot - AI videos Generation Tool"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "一款基于AI的图像生成工具，可将文本提示转化为高质量视觉内容的平台。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/99.jpg"]\r
---\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Genshot.mp4"></video>\r
</div>\r
\r
![Genshot1](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg)\r
![Genshot2](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg)\r
![Genshot3](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg)\r
![Genshot4](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg)\r
![Genshot5](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg)\r
![Genshot6](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg)\r
![Genshot7](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg)\r
![Genshot8](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg)\r
![Genshot9](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg)\r
![Genshot10](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg)\r
![Genshot11](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg)\r
![Genshot12](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg)\r
![Genshot13](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg)\r
![Genshot14](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg)\r
![Genshot15](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg)\r
![Genshot16](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg)\r
![Genshot17](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg)\r
![Genshot18](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg)\r
![Genshot19](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg)\r
![Genshot20](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg)\r
![Genshot21](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg)\r
![Genshot22](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg)\r
![Genshot23](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg)\r
![Genshot24](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg)\r
![Genshot25](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg)\r
![Genshot26](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg)\r
![Genshot27](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg)\r
![Genshot28](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg)\r
![Genshot29](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/29.jpg)\r
![Genshot30](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/30.jpg)\r
![Genshot31](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/31.jpg)\r
![Genshot32](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/32.jpg)\r
![Genshot33](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/33.jpg)\r
![Genshot34](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/34.jpg)\r
![Genshot35](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/35.jpg)\r
![Genshot36](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/36.jpg)\r
![Genshot37](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/37.jpg)\r
![Genshot38](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/38.jpg)\r
![Genshot39](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/39.jpg)\r
![Genshot40](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/40.jpg)\r
![Genshot41](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/41.jpg)\r
![Genshot42](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/42.jpg)\r
![Genshot43](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/43.jpg)\r
![Genshot44](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/44.jpg)\r
![Genshot45](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/45.jpg)\r
![Genshot46](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/46.jpg)\r
![Genshot47](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/47.jpg)\r
![Genshot48](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/48.jpg)\r
![Genshot49](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/49.jpg)\r
![Genshot50](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/50.jpg)\r
![Genshot51](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/51.jpg)\r
![Genshot52](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/52.jpg)\r
![Genshot53](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/53.jpg)\r
![Genshot54](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/54.jpg)\r
![Genshot55](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/55.jpg)\r
![Genshot56](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/56.jpg)\r
![Genshot57](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/57.jpg)\r
![Genshot58](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/58.jpg)\r
![Genshot59](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/59.jpg)\r
![Genshot60](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/60.jpg)\r
![Genshot61](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/61.jpg)\r
![Genshot62](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/62.jpg)\r
![Genshot63](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/63.jpg)\r
![Genshot64](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/64.jpg)\r
![Genshot65](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/65.jpg)\r
![Genshot66](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/66.jpg)\r
![Genshot67](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/67.jpg)\r
![Genshot68](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/68.jpg)\r
![Genshot69](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/69.jpg)\r
![Genshot70](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/70.jpg)\r
![Genshot71](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/71.jpg)\r
![Genshot72](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/72.jpg)\r
![Genshot73](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/73.jpg)\r
![Genshot74](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/74.jpg)\r
![Genshot75](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/75.jpg)\r
![Genshot76](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/76.jpg)\r
![Genshot77](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/77.jpg)\r
![Genshot78](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/78.jpg)\r
![Genshot79](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/79.jpg)\r
![Genshot80](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/80.jpg)\r
![Genshot81](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/81.jpg)\r
![Genshot82](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/82.jpg)\r
![Genshot83](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/83.jpg)\r
![Genshot84](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/84.jpg)\r
![Genshot85](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/85.jpg)\r
![Genshot86](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/86.jpg)\r
![Genshot87](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/87.jpg)\r
![Genshot88](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/88.jpg)\r
![Genshot89](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/89.jpg)\r
![Genshot90](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/90.jpg)\r
![Genshot91](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/91.jpg)\r
![Genshot92](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/92.jpg)\r
![Genshot93](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/93.jpg)\r
![Genshot94](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/94.jpg)\r
![Genshot95](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/95.jpg)\r
![Genshot96](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/96.jpg)\r
![Genshot97](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/97.jpg)\r
![Genshot98](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/98.jpg)\r
![Genshot99](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/99.jpg)`,$c=`---\r
id: "04"\r
slug: "genstyle"\r
title: "Genstyle - Daily Outfit Inspiration Delivered"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "一款基于AI的时尚应用，根据用户偏好与潮流趋势策划每日穿搭灵感。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/99.jpg"]\r
---\r
\r
\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/genstyle.mp4"></video>\r
</div>\r
\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/37.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/38.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/39.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/40.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/41.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/42.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/43.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/44.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/45.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/46.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/47.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/48.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/49.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/50.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/51.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/52.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/53.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/54.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/55.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/56.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/57.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/58.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/59.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/60.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/61.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/62.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/63.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/64.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/65.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/66.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/67.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/68.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/69.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/70.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/71.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/72.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/73.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/74.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/75.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/76.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/77.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/78.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/79.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/80.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/81.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/82.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/83.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/84.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/85.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/86.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/87.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/88.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/89.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/90.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/91.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/92.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/93.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/94.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/95.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/96.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/97.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/98.jpg)\r
![genstyle](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/99.jpg)`,Kc=`---\r
id: "05"\r
slug: "riffle-ai-game-generation-tool"\r
title: "Riffle - AI game Generation Tool"\r
category: "UI&UX Design"\r
year: "2026"\r
description: "一款基于AI的游戏生成工具"\r
tech: ["Figma","React","TypeScript"]\r
abstract: "Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/logo.jpg"\r
hasDemo: true\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/99.jpg"]\r
\r
---\r
# 项目网页链接\r
https://www.riffle.games/\r
\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Riffle.mp4"></video>\r
</div>\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/29.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/30.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/31.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/32.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/33.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/34.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/35.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/36.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/37.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/38.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/99.jpg)\r
\r
\r
---`,Xc=`---\r
id: "06"\r
slug: "bazi-fengshui-analysis"\r
title: "Bazi - Fengshui Analysis Application"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "基于用户出生数据与环境因素提供个性化AI风水洞察的应用。"\r
tech: ["Figma","React","TypeScript"]\r
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/logo.jpg"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/99.jpg"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/07.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/08.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/09.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/10.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/11.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/12.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/13.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/14.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/15.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/16.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/17.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/18.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/19.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/20.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/21.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/22.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/23.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/24.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/25.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/26.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/27.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/28.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/29.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/30.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/31.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/32.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/33.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/34.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/35.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/36.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/37.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/38.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/99.jpg)\r
`,Zc=`---
id: "07"
slug: "early-campus-experience"
title: "早期校园经历 — 1037拼拼 & persLEARN"
category: "UI&UX Design"
year: "2023-03-01~2024-03-01"
description: "本科期间在华科Pivot Studio的校园产品设计与实践，涵盖校园拼团平台与科学思维教育平台。"
tech: ["Figma","React","TypeScript"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/99.jpg"]
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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/99.jpg)

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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/99.jpg)

---
`,Yc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/99.png"]
---

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/NamelessRoad.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/02.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/03.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/04.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/05.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/06.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/07.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/08.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/09.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/10.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/11.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/12.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/13.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/14.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/15.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/16.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/17.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/18.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/19.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/20.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/21.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/22.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/23.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/24.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/25.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/26.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/27.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/28.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/29.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/30.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/31.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/32.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/33.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/34.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/35.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/36.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/37.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/38.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/39.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/40.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/41.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/42.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/43.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/44.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/45.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/46.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/47.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/48.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/49.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/50.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/51.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/52.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/53.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/54.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/55.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/56.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/57.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/58.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/59.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/60.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/61.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/62.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/63.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/64.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/65.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/66.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/67.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/68.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/69.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/70.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/71.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/72.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/73.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/74.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/75.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/76.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/77.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/78.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/79.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/80.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/81.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/82.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/83.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/84.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/85.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/86.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/87.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/88.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/89.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/90.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/91.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/92.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/93.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/94.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/95.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/96.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/97.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/98.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/99.png)

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
`,Qc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/99.png"]
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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/99.jpg)

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

`,Jc=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/99.png"]
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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/02.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/03.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/04.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/05.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/06.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/07.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/08.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/09.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/10.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/11.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/12.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/13.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/14.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/15.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/16.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/17.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/18.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/19.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/20.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/21.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/22.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/23.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/24.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/25.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/26.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/27.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/28.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/29.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/30.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/31.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/32.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/33.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/34.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/35.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/36.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/37.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/38.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/39.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/40.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/41.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/42.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/43.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/44.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/45.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/46.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/47.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/48.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/49.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/50.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/51.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/52.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/53.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/54.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/55.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/56.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/57.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/58.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/59.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/60.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/61.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/62.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/63.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/64.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/65.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/66.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/67.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/68.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/69.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/70.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/71.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/72.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/73.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/74.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/75.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/76.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/77.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/78.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/79.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/80.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/81.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/82.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/83.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/84.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/85.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/86.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/87.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/88.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/89.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/90.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/91.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/92.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/93.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/94.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/95.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/96.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/97.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/98.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/99.png)

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

`,et=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/99.png"]
---

# 广州心源科技有限公司（Bilibili 游戏子公司）

## 项目时间

<h2>效果展示</h2>
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/bilibili_2.mp4"></video>
</div>

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/02.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/03.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/04.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/05.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/06.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/07.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/08.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/09.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/10.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/11.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/12.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/13.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/14.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/15.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/16.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/17.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/18.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/19.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/20.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/21.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/22.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/23.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/24.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/25.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/26.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/27.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/28.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/29.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/30.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/31.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/32.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/33.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/34.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/35.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/36.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/37.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/38.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/39.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/40.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/41.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/42.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/43.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/44.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/45.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/46.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/47.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/48.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/49.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/50.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/51.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/52.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/53.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/54.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/55.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/56.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/57.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/58.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/59.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/60.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/61.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/62.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/63.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/64.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/65.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/66.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/67.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/68.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/69.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/70.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/71.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/72.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/73.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/74.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/75.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/76.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/77.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/78.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/79.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/80.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/81.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/82.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/83.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/84.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/85.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/86.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/87.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/88.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/89.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/90.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/91.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/92.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/93.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/94.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/95.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/96.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/97.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/98.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/99.png)

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

同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。`,ct=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/99.png"]
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
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/25.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/26.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/27.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/28.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/29.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/30.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/31.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/32.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/33.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/34.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/35.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/36.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/37.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/38.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/39.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/40.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/41.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/42.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/43.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/44.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/45.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/46.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/47.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/48.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/49.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/50.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/51.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/52.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/53.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/54.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/55.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/56.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/57.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/58.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/59.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/60.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/61.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/62.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/63.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/64.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/65.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/66.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/67.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/68.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/69.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/70.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/71.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/72.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/73.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/74.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/75.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/76.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/77.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/78.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/79.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/80.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/81.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/82.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/83.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/84.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/85.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/86.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/87.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/88.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/89.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/90.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/91.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/92.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/93.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/94.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/95.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/96.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/97.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/98.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/99.png)

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
`,tt=`---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/99.png"]
---


下载，打开Unity平台
unity online service, 打造了一系列针对微信小游戏的管理、云服务等多个系列的内容。
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/01.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/02.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/03.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/04.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/05.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/06.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/07.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/08.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/09.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/10.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/11.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/12.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/13.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/14.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/15.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/16.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/17.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/18.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/19.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/20.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/21.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/22.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/23.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/24.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/25.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/26.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/27.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/28.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/29.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/30.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/31.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/32.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/33.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/34.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/35.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/36.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/37.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/38.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/39.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/40.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/41.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/42.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/43.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/44.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/45.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/46.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/47.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/48.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/49.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/50.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/51.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/52.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/53.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/54.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/55.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/56.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/57.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/58.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/59.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/60.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/61.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/62.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/63.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/64.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/65.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/66.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/67.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/68.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/69.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/70.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/71.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/72.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/73.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/74.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/75.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/76.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/77.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/78.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/79.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/80.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/81.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/82.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/83.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/84.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/85.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/86.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/87.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/88.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/89.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/90.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/91.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/92.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/93.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/94.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/95.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/96.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/97.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/98.png)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/unity-wechat/99.png)
<inframe src='https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html'></inframe>
https://docs.unity.cn/cn/tuanjiemanual/Manual/MiniGame.html

<inframe src="https://www.bilibili.com/video/BV1ey411i7hc"></inframe>

教程视频
https://www.bilibili.com/video/BV1Df421q7br?spm_id_from=333.788.videopod.sections&bvid=BV1ey411i7hc

具体怎么在Unity中部署微信小游戏的tutorial
https://learn.u3d.cn/tutorial/instant-game-joker?chapterId=64f5962ca571d50021bb3afb&sectionId=64f5962ca571d50021bb3afa`,bt=`---\r
id: "01"\r
slug: "litflow"\r
title: "LitFlow - Research Hub"\r
category: "Platform"\r
year: "2026-1-13 ongoing"\r
description: "面向研究人员的论文可视化平台，以摘要与关键词气泡形式展示研究成果。"\r
tech: ["python","React","TypeScript"]\r
abstract: "LitFlow is a platform designed to facilitate the sharing and discovery of research papers. It provides a platform for researchers to copy the links of papers, and for users to search and filter papers based on various criteria."\r
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of researchers and users."\r
solution: "We developed LitFlow using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/logo.jpg"\r
code: "litflow.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/99.png)\r
`,at=`---\r
id: "02"\r
slug: "box-up-my-stuff-in-cyberspace"\r
title: "Box up my stuff in cyberspace"\r
category: "Platform"\r
year: "2026-2-8"\r
description: "一款让人们在虚拟空间中收纳个人物品的应用"\r
tech: ["python","React","TypeScript"]\r
abstract: "Box up my stuff in cyberspace is an App that people could box up their belongings in cyberspace. It provides a platform for users to upload their belongings, and for other users to find and download them."\r
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of users."\r
solution: "We developed Box up my stuff in cyberspace using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/logo.jpg"\r
code: "boxupcyberspace.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/box-up-my-stuff/99.png)\r
`,pt=`---\r
id: "03"\r
slug: "epstein-mystery-archive"\r
title: "Epstein Mystery Archive"\r
category: "Platform"\r
year: "2026-2-11 on going"\r
description: "爱泼斯坦疑案档案，记录1983年一起性侵案件的相关资料。"\r
tech: ["python","React","TypeScript"]\r
abstract: "The Epstein Mystery Archive is an online platform that provides a detailed account of the case of sexual assault perpetrated by a man in 1983. It features a chronological timeline, interviews with suspects and authorities, and a collection of photographs to support the case."\r
challenge: "Designing a platform that is user-friendly, efficient, and scalable to support a large number of users."\r
solution: "We developed the Epstein Mystery Archive using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/logo.jpg"\r
code: "epsteinscret.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/99.png"]\r
---\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/epstein.mp4"></video>\r
\r
</div>\r
# Background\r
## Overview\r
**Oversight Committee Releases Epstein Records Provided by the Department of Justice** \r
https://oversight.house.gov/release/oversight-committee-releases-epstein-records-provided-by-the-department-of-justice/\r
\r
WASHINGTON — Sep 2, 2025, the House Committee on Oversight and Government Reform released **33,295** pages of Epstein-related records that were provided by the U.S. Department of Justice. On August 5, Chairman Comer issued a subpoena for records related to Mr. Jeffrey Epstein, and the Department of Justice has indicated it will continue producing those records while ensuring the redaction of **victim identities and any child sexual abuse material**.\r
## Details\r
Original datasat released by US government. -> google drive\r
\r
<iframe src="https://drive.google.com/embeddedfolderview?id=15T3gys6zGFDE-Fth6S6H4CFCOtfMXebq#grid" width="100%" height="600" frameborder="0" allowfullscreen></iframe>\r
\r
for example, the file "12l_mgFf2lW-gvfE1kfiu7GTBpLxtls5q" is the record of Mr. Epstein's sexual assault case.\r
<iframe src="https://drive.google.com/file/d/12l_mgFf2lW-gvfE1kfiu7GTBpLxtls5q/preview" width="100%" height="600" frameborder="0" allowfullscreen"></iframe>\r
\r
## Google OAuth\r
https://console.cloud.google.com/\r
\r
**Why we need Google OAuth:**\r
1. **Secure Authentication**: Provides a secure and trusted authentication mechanism for users\r
2. **No Password Management**: Users don't need to create or remember another password\r
3. **Account Verification**: Ensures users have a valid Google account before accessing sensitive documents\r
4. **Access Control**: Helps manage who can view and interact with the archive materials\r
5. **Audit Trail**: Tracks user activity and access patterns for security purposes\r
\r
**Setup Steps:**\r
1. Go to Google Cloud Console\r
2. Create a new project\r
3. Enable Google OAuth API\r
4. Configure OAuth consent screen\r
5. Create OAuth 2.0 Client ID\r
6. Add authorized redirect URIs\r
7. Implement OAuth flow in your application\r
\r
## IMAGES/IMAGES001\r
https://drive.google.com/drive/folders/1hbt7DnoeoWY5AFqNIMxQ6JfUrIwuFbVw\r
## IMAGES/IMAGES002\r
https://drive.google.com/drive/folders/1YtByjZ7msxaTUsMWV5pFzDVfZMUMVDRb\r
## IMAGES/IMAGES003\r
https://drive.google.com/drive/folders/169W0-Sgw4ZN61eSq-mO6mE7i4F2tbiCM\r
## IMAGES/IMAGES004\r
https://drive.google.com/drive/folders/1c3n-TjtumvyfDkrzH1vs1-oHMVc3tyci\r
## IMAGES/IMAGES005\r
https://drive.google.com/drive/folders/1FGWhpp1Yxm-RT8G3Ie-v7Ftd-zFha0qz\r
## IMAGES/IMAGES006\r
https://drive.google.com/drive/folders/1dxC6GaePcwvy953fXwKznKVwL3u4l4es\r
## IMAGES/IMAGES007\r
https://drive.google.com/drive/folders/1axUXaIs4XT3IQkNMRpHpDX_sg4znEgC8\r
## IMAGES/IMAGES008\r
https://drive.google.com/drive/folders/1hno5jSW--phzhefZuzmKlgxrSFdmgYMn\r
## IMAGES/IMAGES009\r
https://drive.google.com/drive/folders/11K6xnVKr2xGcd9Cgww1OMmgfwsvvwXht\r
## IMAGES/IMAGES010\r
https://drive.google.com/drive/folders/15g91IdhyX4uocwGj5N_W_A9g0EAOjkk3\r
## IMAGES/IMAGES011\r
https://drive.google.com/drive/folders/13ZyhRCXC_cL1eX34GV9benUj_RD--PZM\r
## IMAGES/IMAGES012\r
https://drive.google.com/drive/folders/1__354BbVLSciR40xa8B0wgBhyLL1Scp3\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/99.png)\r
`,nt=`---\r
id: "01"\r
slug: "how-to-add-openstreetmap-in-website"\r
title: "How to Add OpenStreetMap in Website"\r
category: "Tutorial"\r
year: "2026-2-1"\r
description: "将OpenStreetMap集成到网站中的教程"\r
tech: ["python","React","TypeScript"]\r
challenge: "Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key."\r
solution: "You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/logo.jpg"\r
code: "openstreetmap.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/99.png)\r
`,rt=`---\r
id: "02"\r
slug: "how-to-get-sequential-events-from-photo-by-phone"\r
title: "How to get sequential events from photo by phone"\r
category: "Tutorial"\r
year: "2026-2-2"\r
description: "从手机照片中提取时序事件的教程"\r
tech: ["Computer Vision","Image Processing"]\r
challenge: "Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events."\r
solution: "By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/logo.jpg"\r
code: "photogeo.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/99.png)\r
`,it=`---\r
id: "03"\r
slug: "how-to-visualize-photo-geolocation-data-on-map"\r
title: "How to visualize photo geolocation data on map"\r
category: "Tutorial"\r
year: "2026-2-3"\r
description: "在地图上可视化照片地理定位数据的教程"\r
tech: ["Mapping","Image Processing"]\r
challenge: "Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data."\r
solution: "By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/logo.jpg"\r
code: "photogeomap.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/02.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/03.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/04.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/05.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/06.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/07.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/08.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/09.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/10.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/11.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/12.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/13.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/14.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/15.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/16.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/17.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/18.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/19.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/20.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/21.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/22.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/23.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/24.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/25.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/26.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/27.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/28.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/29.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/30.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/31.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/32.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/33.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/34.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/35.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/36.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/37.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/38.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/39.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/40.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/41.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/42.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/43.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/44.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/45.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/46.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/47.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/48.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/49.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/50.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/51.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/52.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/53.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/54.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/55.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/56.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/57.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/58.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/59.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/60.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/61.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/62.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/63.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/64.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/65.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/66.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/67.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/68.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/69.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/70.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/71.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/72.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/73.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/74.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/75.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/76.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/77.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/78.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/79.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/80.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/81.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/82.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/83.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/84.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/85.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/86.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/87.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/88.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/89.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/90.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/91.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/92.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/93.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/94.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/95.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/96.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/97.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/98.png","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/99.png"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/02.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/03.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/04.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/05.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/06.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/07.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/08.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/09.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/10.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/11.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/12.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/13.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/14.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/15.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/16.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/17.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/18.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/19.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/20.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/21.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/22.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/23.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/24.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/25.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/26.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/27.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/28.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/29.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/30.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/31.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/32.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/33.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/34.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/35.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/36.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/37.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/38.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/39.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/40.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/41.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/42.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/43.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/44.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/45.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/46.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/47.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/48.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/49.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/50.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/51.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/52.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/53.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/54.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/55.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/56.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/57.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/58.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/59.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/60.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/61.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/62.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/63.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/64.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/65.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/66.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/67.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/68.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/69.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/70.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/71.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/72.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/73.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/74.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/75.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/76.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/77.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/78.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/79.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/80.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/81.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/82.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/83.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/84.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/85.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/86.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/87.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/88.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/89.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/90.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/91.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/92.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/93.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/94.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/95.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/96.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/97.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/98.png)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/99.png)\r
`,st=`---\r
id: "04"\r
slug: "how-to-conduct-time-geo-sequential-clustering-from-album"\r
title: "How to conduct time-geo-sequential clustering from album"\r
category: "Tutorial"\r
year: "2026-2-6"\r
description: "从相册照片中进行时空序列聚类的教程"\r
tech: ["python","Clustering","Geospatial Data Processing"]\r
abstract: "This tutorial explains how to conduct time-geo-sequential clustering from a photo album using clustering algorithms and geospatial data processing techniques."\r
challenge: "Dealing with large datasets and ensuring accurate clustering results can be challenging when working with time-geo-sequential data."\r
solution: "By leveraging clustering algorithms such as K-means or DBSCAN, you can group photos based on their temporal and spatial characteristics. This tutorial provides practical examples and code snippets to guide you through the process."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/logo.jpg"\r
code: "clusteringevents.tsx"\r
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/99.jpg"]\r
---\r
\r
# 效果展示\r
\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/03.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/04.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/05.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/06.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/07.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/08.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/09.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/10.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/11.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/12.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/13.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/14.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/15.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/16.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/17.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/18.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/19.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/20.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/21.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/22.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/23.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/24.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/25.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/26.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/27.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/28.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/29.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/30.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/31.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/32.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/33.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/34.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/35.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/36.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/37.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/38.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/39.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/40.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/41.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/42.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/43.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/44.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/45.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/46.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/47.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/48.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/49.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/50.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/51.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/52.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/53.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/54.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/55.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/56.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/57.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/58.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/59.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/60.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/61.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/62.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/63.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/64.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/65.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/66.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/67.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/68.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/69.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/70.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/71.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/72.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/73.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/74.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/75.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/76.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/77.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/78.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/79.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/80.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/81.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/82.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/83.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/84.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/85.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/86.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/87.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/88.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/89.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/90.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/91.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/92.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/93.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/94.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/95.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/96.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/97.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/98.jpg)\r
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/99.jpg)\r
`,dt=`---
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

## 04 日常使用。`,gt=`---
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
`,ft=`---
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

`,ut=`---
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

> 💡 **小提示**：MCP 是一个快速发展的开放标准，未来会有越来越多的工具和应用支持它。现在学习 MCP，就是提前掌握 AI 时代的「通用语言」！`,ot=`---
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

> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！`;function ht(c){const a=/^---\r?\n([\s\S]*?)\r?\n---/,u=c.match(a);let t={},r=c;if(u){const s=u[1];r=c.slice(u[0].length).trim();const C=s.split(/\r?\n/);let w=null,R=[];C.forEach(N=>{if(N.trim()==="")return;const k=N.indexOf(":");if(k!==-1&&!N.startsWith(" ")){w&&(t[w]=R.join(`
`)),w=N.slice(0,k).trim();let M=N.slice(k+1).trim();M==="|"?R=[]:M===""?R=[]:(t[w]=M,w=null,R=[])}else w&&N.startsWith("  ")&&R.push(N.slice(2))}),w&&R.length>0&&(t[w]=R.join(`
`)),Object.keys(t).forEach(N=>{let j=t[N];if(typeof j=="string")if(j=j.trim(),j.startsWith('"')&&j.endsWith('"')&&(j=j.slice(1,-1)),typeof j=="string"&&j.includes(`
`)&&/^\s*-/.test(j)){const k=j.split(/\r?\n/).map(M=>M.replace(/^\s*-\s*/,"").trim()).filter(M=>M!=="");t[N]=k.map(M=>M.startsWith('"')&&M.endsWith('"')||M.startsWith("'")&&M.endsWith("'")?M.slice(1,-1):M)}else if(j.startsWith("[")&&j.endsWith("]"))try{t[N]=JSON.parse(j)}catch{t[N]=[j.slice(1,-1).trim()]}else j==="true"?t[N]=!0:j==="false"?t[N]=!1:!isNaN(Number(j))&&j.trim()!==""?t[N]=Number(j):t[N]=j})}let l=[];if(Array.isArray(t.image)&&t.image.length>0)l=t.image;else{const s=/!\[.*?\]\(([^)\s]+)\)/g;let C;for(;(C=s.exec(r))!==null;)l.push(C[1])}return{id:t.id||"",slug:t.slug||"",title:t.title||"",category:t.category||"",year:t.year||"",description:t.description||"",tech:t.tech||[],abstract:t.abstract||"",challenge:t.challenge||"",solution:t.solution||"",hasDemo:t.hasDemo||!1,icon:t.icon||"",code:t.code||"",logo:t.icon||"",image:l,content:r}}function D(c){const a=ht(c);return{id:a.id,slug:a.slug,title:a.title,category:a.category,year:a.year,description:a.description,tech:a.tech,hasDemo:a.hasDemo,details:{abstract:a.abstract,description:a.description,challenge:a.challenge,solution:a.solution,logo:a.logo,icon:a.icon,code:a.code,image:a.image,content:a.content,demoOnly:a.demoOnly||!1}}}const Re=[D(Ec),D(Pc),D(Rc),D(_c),D(Oc),D(qc),D(Gc),D(Bc),D(Fc),D(Tc),D(Uc)],Te=[D(Wc),D(Vc),D(Hc),D($c),D(Kc),D(Xc),D(Zc)],_e=[D(Yc),D(Qc),D(Jc),D(et),D(ct),D(tt)],qe=[D(bt),D(at),D(pt)],Ge=[D(nt),D(rt),D(it),D(st),D(dt),D(gt),D(ft),D(ut),D(ot)],lt={design:"Products",game:"Games",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},gc=({className:c})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:c,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),fc=({to:c,className:a=""})=>e.jsx(te,{to:c,className:`btn-accent ${a}`,children:"Demo"}),vt=!1,mt=({project:c,type:a,index:u})=>{var t;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(u+1).padStart(2,"0")}),e.jsxs(te,{to:`/${a}/${c.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",onError:r=>{r.target.style.display="none"}}):e.jsx(gc,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:c.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(t=c.tech)==null?void 0:t.slice(0,3).map(r=>e.jsx("span",{className:"chip",children:r},r))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:c.year})]}),c.hasDemo&&e.jsx(fc,{to:`/${a}/${c.slug}#demo`,className:"shrink-0"})]})})},jt=({project:c,type:a,index:u})=>{var t;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(te,{to:`/${a}/${c.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]",onError:r=>{r.target.style.display="none"}}):e.jsx(gc,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(u+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:c.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),((t=c.tech)==null?void 0:t.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tech.slice(0,2).map(r=>e.jsx("span",{className:"chip",children:r},r))})]})]}),c.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(fc,{to:`/${a}/${c.slug}#demo`,className:"w-full"})})]})},Ie=({data:c,type:a})=>{const[u,t]=n.useState("grid"),r=lt[a]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[a==="design"&&vt,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[a," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(c.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",r]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(l=>e.jsx("button",{onClick:()=>t(l),"aria-pressed":u===l,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${u===l?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:l},l))})]}),u==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:c.map((l,s)=>e.jsx(mt,{project:l,type:a,index:s},l.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:c.map((l,s)=>e.jsx(jt,{project:l,type:a,index:s},l.slug))})]})},yt="modulepreload",xt=function(c,a){return new URL(c,a).href},cc={},q=function(a,u,t){let r=Promise.resolve();if(u&&u.length>0){let s=function(N){return Promise.all(N.map(j=>Promise.resolve(j).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};const C=document.getElementsByTagName("link"),w=document.querySelector("meta[property=csp-nonce]"),R=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));r=s(u.map(N=>{if(N=xt(N,t),N in cc)return;cc[N]=!0;const j=N.endsWith(".css"),k=j?'[rel="stylesheet"]':"";if(!!t)for(let P=C.length-1;P>=0;P--){const G=C[P];if(G.href===N&&(!j||G.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${N}"]${k}`))return;const f=document.createElement("link");if(f.rel=j?"stylesheet":yt,j||(f.as="script"),f.crossOrigin="",f.href=N,R&&f.setAttribute("nonce",R),document.head.appendChild(f),j)return new Promise((P,G)=>{f.addEventListener("load",P),f.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${N}`)))})}))}function l(s){const C=new Event("vite:preloadError",{cancelable:!0});if(C.payload=s,window.dispatchEvent(C),!C.defaultPrevented)throw s}return r.then(s=>{for(const C of s||[])C.status==="rejected"&&l(C.reason);return a().catch(l)})},wt=n.lazy(()=>q(()=>import("./ClusterVisualizer-D_ileyyg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),kt=n.lazy(()=>q(()=>import("./UR-platform-DFO5eSKd.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),zt=n.lazy(()=>q(()=>import("./heatmapper-CQ7wneDH.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Nt=n.lazy(()=>q(()=>import("./openstreetmap-wceuEFyo.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Mt=n.lazy(()=>q(()=>import("./photogeo-DUM1KJgS.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),St=n.lazy(()=>q(()=>import("./photogeomap-BZHaPQu1.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),It=n.lazy(()=>q(()=>import("./clusteringevents-CQdjjSQo.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));n.lazy(()=>q(()=>import("./litflow-DYT07kb5.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const At=n.lazy(()=>q(()=>import("./boxupcyberspace-CJjHQ5R1.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),Ct=n.lazy(()=>q(()=>import("./epsteinscret-mLJBzIXl.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),tc=n.lazy(()=>q(()=>import("./wechatgame-BR7BpSrd.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),Dt=n.lazy(()=>q(()=>import("./72HourGameJamDemo-BWPUgRvj.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),Lt=n.lazy(()=>q(()=>import("./PeaceEliteHustCampusDemo-D-DWwJkq.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Et=n.lazy(()=>q(()=>import("./BMWMetaIslandDemo-7uu2MOZP.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),Pt=n.lazy(()=>q(()=>import("./riffle-RlweP75u.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Rt=n.lazy(()=>q(()=>import("./genstyle-DuJ38oKx.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),Tt=n.lazy(()=>q(()=>import("./genshot-BoH35G7G.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),_t=n.lazy(()=>q(()=>import("./dragon-diffusion-Dj4t-WNK.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),qt=n.lazy(()=>q(()=>import("./anyreal-DKKTpW8w.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),Gt=n.lazy(()=>q(()=>import("./previous-archi-work-CvNoz6hg.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),Bt=n.lazy(()=>q(()=>import("./hongqiqu-y3eLCJ-3.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),bc=c=>({"cluster-visualizer-3d":wt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":kt,heatmapper:zt,"how-to-add-openstreetmap-in-website":Nt,"how-to-get-sequential-events-from-photo-by-phone":Mt,"how-to-visualize-photo-geolocation-data-on-map":St,kittylovecarrots:tc,"how-to-build-game-in-wechat-mini-program":tc,"72-hour-game-jam":Dt,"peace-elite-hust-campus":Lt,"bmw-meta-island":Et,"how-to-conduct-time-geo-sequential-clustering-from-album":It,"box-up-my-stuff-in-cyberspace":At,"epstein-mystery-archive":Ct,"riffle-ai-game-generation-tool":Pt,genstyle:Rt,"genshot-AI-video-generation-tool":Tt,"dragon-diffussion":_t,anyreal:qt,"previous-archi-work":Gt,hongqiqu:Bt})[c],ac={"how-to-add-openstreetmap-in-website":`// 1. 导入必要的库
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
}`},Ft=({images:c,captions:a})=>{const[u,t]=n.useState(0),[r,l]=n.useState(new Set(c.map((j,k)=>k))),s=c.filter((j,k)=>r.has(k));if(n.useEffect(()=>{u>=s.length&&t(Math.max(0,s.length-1))},[s.length,u]),s.length===0)return null;const C=j=>{l(k=>{const M=new Set(k);return M.delete(j),M})},w=()=>{t(j=>j===0?s.length-1:j-1)},R=()=>{t(j=>j===s.length-1?0:j+1)},N=a==null?void 0:a[u];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:s[u],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:N||`Carousel Image ${u+1}`,onError:()=>C(u)}),e.jsx("button",{onClick:w,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:R,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),s.length>1&&e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:s.map((j,k)=>e.jsx("button",{onClick:()=>t(k),className:`h-1.5 rounded-full transition-all duration-300 ${u===k?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${k+1}`},k))})]}),N&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:N}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[u+1," / ",s.length]})]}),!N&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[u+1," / ",s.length]})]})},Ot=({src:c,...a})=>{const[u,t]=n.useState(!1),[r,l]=n.useState(!1);return n.useEffect(()=>{const s=setTimeout(()=>{r||(t(!1),l(!0))},3e3);return()=>clearTimeout(s)},[r]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:c,onLoad:()=>{t(!0),l(!0)},onError:()=>{t(!1),l(!0)},style:{display:"none"},title:"detector"}),!r&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),r&&u&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:c,className:"h-96 w-full border-0",allowFullScreen:!0,...a})}),r&&!u&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},Ut={iframe:({src:c,title:a,...u})=>e.jsx(Ot,{src:c,title:a||"Embedded content",...u}),imagecarousel:({images:c,captions:a})=>{const u=(c||"").split(",").map(r=>r.trim()).filter(Boolean),t=a?a.split("|").map(r=>r.trim()):void 0;return e.jsx(Ft,{images:u,captions:t})},table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...a})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:t,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...a,children:c})},h2:({children:c,...a})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:t,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...a,children:c})},h3:({children:c,...a})=>{const t=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:t,className:"mt-6 mb-3 text-base font-bold text-ink",...a,children:c})},h4:({children:c,...a})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...a,children:c}),h5:({children:c,...a})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...a,children:c}),h6:({children:c,...a})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...a,children:c}),p:({children:c,...a})=>{var r;const u=hc.Children.toArray(c),t=u.length===1&&((r=u[0])==null?void 0:r.type)==="img";return e.jsx("p",{className:t?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...a,children:c})},a:({children:c,href:a,...u})=>e.jsx("a",{href:a,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...u,children:c}),img:({src:c,alt:a,...u})=>(a==null?void 0:a.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:c,alt:a,className:"h-32 max-w-full border border-rule object-cover",onError:r=>{r.target.style.display="none"},...u}):e.jsx("img",{src:c,alt:a,className:"my-0 h-auto w-full border border-rule object-cover",onError:r=>{r.target.style.display="none"},...u})},Ae=({data:c,type:a})=>{var w,R,N,j,k;const{id:u}=oc(),t=c.find(M=>M.slug===u),[r,l]=n.useState(t!=null&&t.hasDemo&&((w=t==null?void 0:t.details)!=null&&w.demoOnly)?"demo":"details"),[s,C]=n.useState(!1);return n.useEffect(()=>{const M=()=>{var f;t!=null&&t.hasDemo&&((f=t==null?void 0:t.details)!=null&&f.demoOnly)||window.location.hash.includes("demo")&&(t!=null&&t.hasDemo)?l("demo"):l("details")};return M(),window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[u,t==null?void 0:t.hasDemo,(R=t==null?void 0:t.details)==null?void 0:R.demoOnly]),t?e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(te,{to:`/${a}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:t.title})]}),!((N=t.details)!=null&&N.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>l("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${r==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),t.hasDemo&&e.jsxs("button",{onClick:()=>l("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${r==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),r==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-4xl",children:[((j=t.tech)==null?void 0:j.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:t.tech.map((M,f)=>e.jsx("span",{className:"chip",children:M},f))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",t.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:t.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:t.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:t.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:s,onToggle:M=>C(M.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[s?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[t.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.description})]}),t.details.abstract&&t.details.abstract!==t.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.abstract})]}),t.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.challenge})]}),t.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:t.details.solution})]})]})]}),t.details.content&&e.jsxs("section",{id:"content",children:[e.jsx("div",{className:"section-head mb-8",children:e.jsx("p",{className:"eyebrow",children:"Content"})}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(wc,{remarkPlugins:[zc],rehypePlugins:[kc],components:Ut,children:t.details.content})})]}),(t.details.code||t.details.codeComponent||ac[t.slug])&&e.jsxs("section",{id:"code",className:"mt-12",children:[e.jsx("div",{className:"section-head mb-5",children:e.jsx("p",{className:"eyebrow",children:"Code Example"})}),e.jsx("pre",{className:"overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas md:p-7",children:e.jsx("code",{children:ac[t.slug]||t.details.codeComponent||`// Code file: ${t.details.code}`})})]})]})}):(k=t.details)!=null&&k.demoOnly?e.jsx(n.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const M=bc(t.slug);return M?e.jsx(M,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(n.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const M=bc(t.slug);return M?e.jsx(M,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(te,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})})},Wt=["Urban Climate & Resilience","AI-Assisted Urban Planning","Machine Learning & Data Analysis","Spatial Statistics & GIS","React / Next.js Ecosystem","TypeScript Architecture","WebGL / Three.js","UI Systems Design"],Vt=()=>{const[c,a]=n.useState(null);return n.useEffect(()=>{if(!c)return;const u=r=>{r.key==="Escape"&&a(null)};window.addEventListener("keydown",u);const t=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",u),document.body.style.overflow=t}},[c]),e.jsx("div",{className:"shell animate-rise-in py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx("div",{className:"section-head",children:e.jsx("p",{className:"eyebrow",children:"About / Bio"})}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"关于我"}),e.jsx("h1",{className:"mt-5 text-display-sm",children:"About Me"}),e.jsxs("div",{className:"mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg",children:[e.jsxs("p",{children:["我是林丽丽，首尔大学硕士生，华中科技大学本科生, 想做",e.jsx("strong",{className:"font-semibold text-ink",children:"AI 相关的产品"}),". 我的研究兴趣包括",e.jsx("strong",{className:"font-semibold text-ink",children:"城市气候韧性、城市规划知识图谱、空间统计与机器学习"}),"，并且我也对",e.jsx("strong",{className:"font-semibold text-ink",children:"产品设计、UI/UX和前端开发"}),"充满热情。"]}),e.jsx("p",{})]}),e.jsxs("div",{className:"mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12",children:[e.jsx("p",{className:"eyebrow",children:"Core Competencies"}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:Wt.map(u=>e.jsx("span",{className:"chip",children:u},u))})]})]})})},Ht=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),Ke=({href:c,label:a})=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:a}),pc=[{city:"上海",country:"中国",date:"2024",note:"法租界的梧桐树影"},{city:"东京",country:"日本",date:"2025",note:"下北泽的午后散步"},{city:"首尔",country:"韩国",date:"2025",note:"汉江边的晚风与霓虹"},{city:"新加坡",country:"新加坡",date:"2026",note:"滨海湾的花园城市漫游"},{city:"明尼阿波利斯",country:"美国",date:"2025",note:"密西西比河畔的秋日"},{city:"剑桥",country:"英国",date:"2025",note:"康河上的撑船与学院回廊"},{city:"武汉",country:"中国",date:"2023",note:"东湖绿道与热干面的早晨"},{city:"香港",country:"中国",date:"2024",note:"中环半山扶梯的夜色"}],nc=["from-amber-500/20 via-orange-400/10 to-yellow-500/20","from-emerald-500/20 via-teal-400/10 to-cyan-500/20","from-rose-500/20 via-pink-400/10 to-fuchsia-500/20","from-sky-500/20 via-blue-400/10 to-indigo-500/20","from-violet-500/20 via-purple-400/10 to-plum-500/20","from-lime-500/20 via-green-400/10 to-emerald-500/20","from-red-500/20 via-orange-400/10 to-amber-500/20","from-cyan-500/20 via-teal-400/10 to-sky-500/20"],$t={上海:"🏙️",东京:"🗼",首尔:"🏯",新加坡:"🌿",明尼阿波利斯:"🌊",剑桥:"🎓",武汉:"🌸",香港:"🌃"},Kt=({entry:c,index:a})=>{const[u,t]=n.useState(!1),r=nc[a%nc.length],l=$t[c.city]??"📍";return e.jsx("div",{className:"relative cursor-pointer select-none",style:{perspective:"800px"},onClick:()=>t(s=>!s),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:e.jsxs("div",{className:"relative w-full transition-transform duration-500 ease-editorial",style:{transformStyle:"preserve-3d",transform:u?"rotateY(180deg)":"rotateY(0deg)",aspectRatio:"3/4"},children:[e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4",style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"absolute inset-x-3 top-2 flex justify-between",children:Array.from({length:16}).map((s,C)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},C))}),e.jsx("div",{className:"absolute inset-x-3 bottom-2 flex justify-between",children:Array.from({length:16}).map((s,C)=>e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-canvas"},C))}),e.jsx("span",{className:"text-3xl",children:l}),e.jsx("p",{className:"text-base font-bold tracking-tight text-ink",children:c.city}),e.jsx("p",{className:"eyebrow text-ink-3",children:c.country}),c.date&&e.jsx("span",{className:"mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:c.date}),e.jsx("div",{className:"absolute right-3 top-5 -rotate-12 opacity-30",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[e.jsx("circle",{cx:"20",cy:"20",r:"17",stroke:"currentColor",strokeWidth:"1.5",className:"text-ink-3"}),e.jsx("path",{d:"M8 8l24 24M8 32L32 8",stroke:"currentColor",strokeWidth:"0.8",className:"text-ink-3"})]})})]}),e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2",style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:[c.photo?e.jsx("img",{src:c.photo,alt:c.city,className:"absolute inset-0 h-full w-full object-cover"}):e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 px-4 text-center",children:[e.jsx("p",{className:"text-lg font-bold tracking-tight text-white",children:c.city}),c.note&&e.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-white/70",children:c.note})]}),e.jsx("div",{className:"absolute inset-2 border border-dashed border-white/10"})]})]})})},Xt=()=>e.jsxs("section",{className:"shell border-t border-rule pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Wander"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(pc.length).padStart(2,"0")," cities"]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"City Walks"}),e.jsxs("p",{className:"max-w-xs text-right text-xs leading-relaxed text-ink-3",children:["用脚步丈量城市，",e.jsx("br",{className:"hidden sm:inline"}),"在每个街角发现故事。"]})]}),e.jsx("div",{className:"mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",children:pc.map((c,a)=>e.jsx(Kt,{entry:c,index:a},c.city))})]}),Zt=[{key:"all",label:"All"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"}],rc={all:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计、开发、游戏和城市规划"}),"领域的项目。"]}),design:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"设计"}),"领域的项目。"]}),planning:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"城市规划"}),"领域的项目。"]}),game:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"游戏"}),"领域的项目。"]}),platform:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"平台开发"}),"领域的项目。"]}),tutorial:e.jsxs(e.Fragment,{children:["这是我在",e.jsx("strong",{className:"font-semibold text-ink",children:"教程"}),"领域的项目。"]})},Xe=[{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4",title:"Kitty Video"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4",title:"Kitty Video 2"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4",title:"Riffle Loading 1"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4",title:"Video Title 3"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4",title:"Video Title 4"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4",title:"Video Title 5"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4",title:"Video Title 6"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4",title:"Video Title 7"},{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4",title:"Video Title 8"}],ic=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),sc=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})}),Yt={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},je=({value:c,transform:a})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:a,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((u,t)=>e.jsx("span",{className:"flex items-center justify-center",children:Yt[c].includes(t)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},t))}),Qt=()=>{var Se,p,m,z,y;const[c,a]=n.useState("all"),u={all:[...Te.map(b=>({...b,type:"design"})),..._e.map(b=>({...b,type:"game"})),...Re.map(b=>({...b,type:"planning"})),...qe.map(b=>({...b,type:"platform"})),...Ge.map(b=>({...b,type:"tutorial"}))],design:Te.map(b=>({...b,type:"design"})),planning:Re.map(b=>({...b,type:"planning"})),game:_e.map(b=>({...b,type:"game"})),platform:qe.map(b=>({...b,type:"platform"})),tutorial:Ge.map(b=>({...b,type:"tutorial"}))},t=b=>u[b].length,r=u[c]??u.all,l=Math.max(0,r.length-1),[s,C]=n.useState(0),w=b=>{a(b),C(0)},R=b=>{if(!b)return[];const i=/<video[^>]+src="([^"]+)"/gi;return Array.from(b.matchAll(i),d=>d[1])},N=b=>{var d,g;if(!b)return null;const i=(d=b.details)==null?void 0:d.image;return i!=null&&i.length?i[0]:((g=b.details)==null?void 0:g.logo)??null},j=r[(s-1+r.length)%r.length],k=r[(s+1)%r.length],M=N(j),f=N(k),[P,G]=n.useState(0),[B,E]=n.useState(!1),J=n.useRef(null),_=n.useRef(null),S=r[s],$=((Se=S==null?void 0:S.details)==null?void 0:Se.image)??[];$.length>=2&&$[(P-1+$.length)%$.length],$.length>=3?$[(P+1)%$.length]:$.length===2&&$[(P+1)%2],n.useEffect(()=>{G(0),E(!1)},[s,c]);const[ze,K]=n.useState({x:0,y:0}),Be=()=>{K(b=>({x:b.x+720+Math.round(Math.random()*360),y:b.y+720+Math.round(Math.random()*360)})),setTimeout(()=>Z(Math.floor(Math.random()*r.length)),900)},Ne=R(((p=S==null?void 0:S.details)==null?void 0:p.content)??""),ue=((m=S==null?void 0:S.details)==null?void 0:m.image)??[],X=[...Ne,...ue],oe=X.length>0?X[P%X.length]:(z=S==null?void 0:S.details)==null?void 0:z.logo,be=Ne.length>0&&P<Ne.length,ae=ue.length>0?ue[0]:(y=S==null?void 0:S.details)==null?void 0:y.logo,Me=()=>{G(b=>(b+1)%(X.length||1))};n.useEffect(()=>{if(_.current&&(clearInterval(_.current),_.current=null),!(be||X.length<=1))return _.current=setInterval(Me,5e3),()=>{_.current&&(clearInterval(_.current),_.current=null)}},[s,c,be,X.length]);const pe=()=>{const b=J.current;b&&(b.muted=!b.muted,E(!b.muted))},ee=n.useRef(null),ce=3,O=n.useRef({isDown:!1,isDragging:!1,startX:0,scrollLeft:0}),Fe=b=>{var i;O.current={isDown:!0,isDragging:!1,startX:b.clientX,scrollLeft:((i=ee.current)==null?void 0:i.scrollLeft)??0}},ne=b=>{var d;if(!O.current.isDown)return;const i=b.clientX-O.current.startX;!O.current.isDragging&&Math.abs(i)<ce||(O.current.isDragging||(O.current.isDragging=!0,(d=ee.current)==null||d.setPointerCapture(b.pointerId)),b.preventDefault(),ee.current.scrollLeft=O.current.scrollLeft-i)},Ce=b=>{var i;O.current.isDragging&&((i=ee.current)==null||i.releasePointerCapture(b.pointerId)),O.current={isDown:!1,isDragging:!1,startX:0,scrollLeft:0}},Z=b=>{C(b)};n.useEffect(()=>{const b=ee.current;if(!b)return;const i=b.children[s];i&&i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const re=n.useRef(null),he=n.useRef([]),[le,Ze]=n.useState(0),[uc,U]=n.useState(0),[De,ve]=n.useState({start:!0,end:!1}),[Le,Oe]=n.useState({}),ie=b=>{const i=b%Xe.length;Ze(i);const d=re.current;if(d){const g=d.children[i];g&&d.scrollTo({left:g.offsetLeft-d.offsetWidth/2+g.offsetWidth/2,behavior:"smooth"})}};n.useEffect(()=>{const b=he.current[le];b&&(b.currentTime=0,b.play().catch(()=>{}))},[le]);const se=n.useCallback(()=>{const b=re.current;if(!b)return;const i=b.firstElementChild,d=(i==null?void 0:i.offsetWidth)||1;U(Math.round(b.scrollLeft/d)),ve({start:b.scrollLeft<=1,end:b.scrollLeft+b.clientWidth>=b.scrollWidth-1})},[]);n.useEffect(()=>(se(),window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)),[se]);const Ee=b=>{const i=re.current;if(!i)return;const d=i.firstElementChild;i.scrollBy({left:b*((d==null?void 0:d.offsetWidth)||i.clientWidth/2),behavior:"smooth"})},Ue=(b,i)=>{var h;const d=b,g=x=>Oe(v=>v[i]===x?v:{...v,[i]:x});if((h=d.audioTracks)!=null&&h.length){g(Array.from(d.audioTracks).some(x=>x.enabled));return}if("mozHasAudio"in d){g(!!d.mozHasAudio);return}if(typeof d.webkitAudioDecodedByteCount=="number"&&d.webkitAudioDecodedByteCount>0){g(!0);return}if(d.readyState>=3){setTimeout(()=>g(d.webkitAudioDecodedByteCount>0||d.mozHasAudio===!0),500);return}g(!0)};return e.jsxs("div",{className:"animate-rise-in pb-16",children:[oe&&e.jsxs("section",{className:"relative w-full overflow-hidden border-b border-neutral-800",style:{background:"linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)"},children:[e.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.07]","aria-hidden":"true"}),e.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none",style:{boxShadow:"inset 0 0 140px 50px rgba(0,0,0,0.75)"},"aria-hidden":"true"}),e.jsxs("div",{className:"relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0",children:[e.jsx("button",{onClick:()=>Z((s-1+r.length)%r.length),className:"group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block",title:j==null?void 0:j.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[M&&e.jsx("img",{src:M,alt:"",onError:b=>{b.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:j==null?void 0:j.title})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 86%, 0 100%)"},children:e.jsx("img",{src:ae,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:b=>{b.target.style.display="none"}})})}),e.jsx("div",{className:"relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]",children:e.jsxs("div",{className:"aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]",style:{boxShadow:"0 0 70px -10px rgba(0,0,0,0.5)"},children:[be?e.jsx("video",{ref:b=>{J.current=b},src:oe,autoPlay:!0,muted:B,playsInline:!0,onEnded:Me,className:"absolute inset-0 h-full w-full object-cover animate-rise-in"},oe):e.jsx("img",{src:oe,alt:(S==null?void 0:S.title)??"",className:"absolute inset-0 h-full w-full object-cover animate-rise-in",onError:b=>{b.target.style.display="none"}},oe),be&&e.jsx("button",{onClick:pe,className:"absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white",title:B?"Unmute":"Mute",children:B?e.jsxs("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"})]}):e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})})]})}),e.jsx("div",{className:"relative z-10 hidden flex-1 overflow-hidden md:block","aria-hidden":"true",children:e.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 86%)"},children:e.jsx("img",{src:ae,alt:"",className:"absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30",onError:b=>{b.target.style.display="none"}})})}),e.jsx("button",{onClick:()=>Z((s+1)%r.length),className:"group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block",title:k==null?void 0:k.title,children:e.jsxs("div",{className:"aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]",children:[f&&e.jsx("img",{src:f,alt:"",onError:b=>{b.target.style.display="none"},className:"absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2",children:e.jsx("p",{className:"truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50",children:k==null?void 0:k.title})})]})})]})]}),e.jsxs("section",{className:"shell pt-10 md:pt-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden",children:[e.jsxs("div",{className:"flex items-baseline gap-3 min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-ink truncate",children:S==null?void 0:S.title}),e.jsxs("p",{className:"eyebrow shrink-0",children:[S==null?void 0:S.type," · ",S==null?void 0:S.year]})]}),e.jsxs("div",{className:"flex items-center gap-3 shrink-0 min-w-0",children:[X.length>1&&e.jsx("span",{className:"flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]",children:X.map((b,i)=>e.jsx("button",{onClick:()=>G(i),"aria-label":`Media ${i+1}`,className:`h-1.5 shrink-0 rounded-full transition-all duration-300 ${i===P?"w-6 bg-accent":"w-1.5 bg-rule hover:bg-ink-3"}`},i))}),e.jsx("button",{onClick:Be,className:"btn-ghost shrink-0 !px-2",title:"Roll a random project",children:e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${ze.x}deg) rotateY(${ze.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(je,{value:1,transform:"translateZ(10px)"}),e.jsx(je,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(je,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(je,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(je,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(je,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})})})]})]}),e.jsx("div",{className:"mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule",children:Zt.map(b=>{const i=c===b.key;return e.jsxs("button",{onClick:()=>w(b.key),"aria-pressed":i,className:`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${i?"text-ink":"text-ink-3 hover:text-ink"}`,children:[b.label,e.jsx("span",{className:"ml-1.5 nums-tabular text-ink-3",children:t(b.key)}),e.jsx("span",{className:`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${i?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]},b.key)})}),e.jsxs("div",{className:"mt-5 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>Z(Math.max(0,s-1)),disabled:s<=0,"aria-label":"Previous project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ic,{})}),e.jsx("div",{ref:ee,className:"flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y",onPointerDown:Fe,onPointerMove:ne,onPointerUp:Ce,onPointerLeave:Ce,children:r.map((b,i)=>{const d=i===s;return e.jsxs("button",{onClick:()=>Z(i),className:`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${d?"border-rule-strong bg-surface shadow-lift":"border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface"}`,style:{minWidth:"220px",maxWidth:"280px"},children:[e.jsx("span",{className:`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${d?"text-accent-text":"text-ink-3/60 group-hover:text-ink-3"}`,children:String(i+1).padStart(2,"0")}),e.jsx("div",{className:"h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2",children:e.jsx("img",{src:b.details.logo,alt:"",className:"h-full w-full object-cover",onError:g=>{g.target.style.display="none"}})}),e.jsxs("div",{className:"min-w-0 text-left",children:[e.jsx("p",{className:"truncate text-sm font-bold tracking-tight text-ink",children:b.title}),e.jsxs("p",{className:"eyebrow",children:[b.type," · ",b.year]})]})]},`${b.type}-${b.slug}`)})}),e.jsx("button",{onClick:()=>Z(Math.min(l,s+1)),disabled:s>=l,"aria-label":"Next project",className:"icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(sc,{})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(s+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(r.length).padStart(2,"0")]}),e.jsx(te,{to:`/${S==null?void 0:S.type}/${S==null?void 0:S.slug}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink",children:"View details →"})]})]}),e.jsx("section",{className:"shell border-t border-rule py-10 md:py-0",children:e.jsxs("div",{className:"max-w-12xl",children:[e.jsx("p",{className:"mt-4 max-w-3xl text-lg text-ink",children:"你好！我是林丽丽，欢迎来到我的作品集。"}),e.jsx("p",{className:"mt-4 max-w-measure text-base leading-relaxed text-ink-2",children:rc[c]??rc.all})]})}),e.jsx(Xt,{}),e.jsxs("section",{className:"shell pt-12 md:pt-16",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("p",{className:"eyebrow",children:"Motion"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(le+1).padStart(2,"0"),e.jsx("span",{className:"mx-1.5 text-rule",children:"/"}),String(Xe.length).padStart(2,"0")]})]}),e.jsxs("div",{className:"mt-5 flex items-end justify-between gap-4",children:[e.jsx("h2",{className:"text-display-sm",children:"Video Gallery"}),e.jsxs("div",{className:"flex shrink-0 gap-2",children:[e.jsx("button",{onClick:()=>Ee(-1),disabled:De.start,"aria-label":"Scroll gallery left",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(ic,{})}),e.jsx("button",{onClick:()=>Ee(1),disabled:De.end,"aria-label":"Scroll gallery right",className:"icon-btn disabled:cursor-not-allowed disabled:opacity-30",children:e.jsx(sc,{})})]})]}),e.jsx("div",{ref:re,onScroll:se,className:"mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4",children:Xe.map((b,i)=>{const d=i===le;return e.jsxs("figure",{className:`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${d?"ring-1 ring-accent ring-offset-2 ring-offset-canvas":""}`,onMouseEnter:g=>{const h=g.currentTarget.querySelector("video");h&&!d&&h.play().catch(()=>{})},onMouseLeave:g=>{const h=g.currentTarget.querySelector("video");h&&!d&&h.pause()},children:[e.jsxs("div",{className:"relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2",children:[e.jsx("video",{ref:g=>{he.current[i]=g},className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",src:b.src,muted:!0,playsInline:!0,preload:"metadata",onCanPlay:g=>Ue(g.currentTarget,i),onEnded:()=>{d&&ie(i+1)}}),d&&e.jsxs("span",{className:"absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent animate-pulse"}),"Now"]}),Le[i]&&e.jsx("span",{className:"absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white",title:"Has audio",children:e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),e.jsxs("figcaption",{className:"mt-2.5 flex items-baseline gap-2",children:[e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:String(i+1).padStart(2,"0")}),e.jsx("span",{className:"truncate text-sm text-ink-2",children:b.title})]})]},b.src)})})]})]})},Jt=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),eb=()=>{const[c,a]=n.useState(Jt),u=()=>{const t=!c;a(t),document.documentElement.classList.toggle("dark",t);try{localStorage.setItem("theme",t?"dark":"light")}catch{}};return e.jsx("button",{onClick:u,className:"icon-btn","aria-label":c?"Switch to light theme":"Switch to dark theme",title:c?"切换到日间模式":"切换到夜间模式",children:c?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})},dc="https://pub-e0170f3fece2419a85fa1ce02c1f1a28.r2.dev/223_cities_cluster_with_index.zip",cb="/data/223_cities_cluster_with_index_deciles.csv",ye=c=>{const a=c.replace("#",""),u=parseInt(a.slice(0,2),16),t=parseInt(a.slice(2,4),16),r=parseInt(a.slice(4,6),16);return[u,t,r]},xe=(c,a,u)=>{const t=Math.round(c[0]+(a[0]-c[0])*u),r=Math.round(c[1]+(a[1]-c[1])*u),l=Math.round(c[2]+(a[2]-c[2])*u);return`rgb(${t}, ${r}, ${l})`},we=[{key:"K_5",label:"Cluster K=5",category:"cluster",type:"number"},{key:"K_12",label:"Cluster K=12",category:"cluster",type:"number"},{key:"K_20",label:"Cluster K=20",category:"cluster",type:"number"},{key:"K_26",label:"Cluster K=26",category:"cluster",type:"number"},{key:"elev_mean",label:"Elevation Mean(m)",category:"terrain",type:"number"},{key:"elev_std",label:"Elevation Std(m)",category:"terrain",type:"number"},{key:"elev_range",label:"Elevation Range(m)",category:"terrain",type:"number"},{key:"slope_mean",label:"Slope Mean(°)",category:"terrain",type:"number"},{key:"slope_std",label:"Slope Std(N/A)",category:"terrain",type:"number"},{key:"slope_rang",label:"Slope Range(N/A)",category:"terrain",type:"number"},{key:"LandArea",label:"Land Area",category:"urban",type:"number"},{key:"Buiheight",label:"Building Height(m)",category:"urban",type:"number"},{key:"BldArea",label:"Building Area(m²)",category:"urban",type:"number"},{key:"CoverRatio",label:"Building Coverage",category:"urban",type:"number"},{key:"FAR",label:"Floor Area Ratio(N/A)",category:"urban",type:"number"},{key:"GreenArea",label:"Green Area(m²)",category:"urban",type:"number"},{key:"GrHeight",label:"Green Height(m)",category:"urban",type:"number"},{key:"GreenRatio",label:"Green Ratio(N/A)",category:"urban",type:"number"},{key:"GrVolRatio",label:"Green Volume Ratio(N/A)",category:"urban",type:"number"},{key:"ISF",label:"Impervious Surface Fraction(N/A)",category:"urban",type:"number"},{key:"MIN_DistWB",label:"Mini Distance to WaterBody(m)",category:"urban",type:"number"},{key:"MIN_DistGL",label:"Mini Distance to GreenLand(m)",category:"urban",type:"number"},{key:"MIN_DistMT",label:"Mini Distance to Mountain(m)",category:"urban",type:"number"}],tb=()=>{var Se;const c=n.useRef(null),a=n.useRef(null),[u,t]=n.useState(!0),[r,l]=n.useState(0),[s,C]=n.useState(null),[w,R]=n.useState(null),[N,j]=n.useState([]),[k,M]=n.useState(null),[f,P]=n.useState("K_12"),[G,B]=n.useState(!0),[E,J]=n.useState(null),[_,S]=n.useState(null),[$,ze]=n.useState(!1),[K,Be]=n.useState(null),[Ne,ue]=n.useState(!1),[X,oe]=n.useState(null),[be,ae]=n.useState(!1),[Me,pe]=n.useState(0),[ee,ce]=n.useState(""),[O,Fe]=n.useState(!1),[ne,Ce]=n.useState(!0),[Z,re]=n.useState(!0),[he,le]=n.useState({}),[Ze,uc]=n.useState(!1),[U,De]=n.useState("global"),ve=n.useRef(null),Le=n.useRef(null),Oe=n.useRef(!1),ie=n.useRef(null),se=(p,m)=>{let z=p.features;k!==null&&(z=z.filter(h=>{var v;const x=(v=h.properties)==null?void 0:v.Place;return x!==void 0&&Number(x)===Number(k)}));const y=z.map(h=>{var x;return(x=h.properties)==null?void 0:x[m]}).filter(h=>{if(h==null)return!1;if(typeof h=="string"){const v=h.trim();if(v===""||/^(na|nan|null)$/i.test(v))return!1}const x=Number(h);return!(Number.isNaN(x)||x===-9999)}).map(h=>Number(h)),b=z.reduce((h,x)=>{var I;const v=(I=x.properties)==null?void 0:I[m];let o=!1;if(v==null)o=!0;else if(typeof v=="string"){const A=v.trim();if(A===""||/^(na|nan|null)$/i.test(A))o=!0;else{const T=Number(v);(Number.isNaN(T)||T===-9999)&&(o=!0)}}else{const A=Number(v);(Number.isNaN(A)||A===-9999)&&(o=!0)}return h+(o?1:0)},0);let i=NaN,d=NaN,g=0;if(y.length>0){i=y[0],d=y[0],g=y[0];for(let h=1;h<y.length;h++){const x=y[h];x<i&&(i=x),x>d&&(d=x),g+=x}}return{count:z.length,min:i,max:d,mean:y.length>0?g/y.length:NaN,nanCount:b}};n.useEffect(()=>{(async()=>{try{const y=(await(await fetch(cb)).text()).trim().split(`
`);if(y.length<2)return;const b=y[0].split(",").map(v=>v.trim()),i={},g=y[y.length-1].split(","),x=y[1].split(",");b.forEach((v,o)=>{if(v===""||v.includes("Place")||v.includes("Sum")||v.includes("FID")||v.includes("index"))return;const I=parseFloat(x[o]),A=parseFloat(g[o]);!isNaN(I)&&!isNaN(A)&&A>I&&(i[v]={min:I,max:A})}),console.log("Loaded attribute ranges:",i),le(i)}catch(m){console.error("Failed to load deciles:",m)}})()},[]),n.useEffect(()=>{!O&&!w&&(async()=>{var m;t(!0),l(0),C(null);try{l(10),console.log("开始下载..."),ve.current=new AbortController;const z=await fetch(dc,{signal:ve.current.signal});if(console.log("响应状态:",z.status),!z.ok)throw new Error(`HTTP error! status: ${z.status}`);l(30);const y=z.headers.get("content-length"),b=y?parseInt(y):null;console.log("预期文件大小:",b);const i=(m=z.body)==null?void 0:m.getReader();if(!i)throw new Error("无法读取响应流");let d=0;const g=[];for(;;){const{done:T,value:L}=await i.read();if(T)break;g.push(L),d+=L.length,l(b?30+Math.round(d/b*60):50)}console.log("下载完成, 收到:",d),b&&d!==b&&console.log("警告: 文件大小不匹配 (可能压缩传输)");const h=new Uint8Array(d);let x=0;for(const T of g)h.set(T,x),x+=T.length;if(l(90),O){console.log("本地数据已加载，跳过网络数据"),t(!1);return}console.log("开始解析 Shapefile...");const v=await Ye(h);console.log("Shapefile 解析完成:",v);let o=[];if(v.type==="FeatureCollection"?o=v.features:Array.isArray(v)?o=v:v.type==="Feature"&&(o=[v]),console.log("解析完成，特征数量:",o==null?void 0:o.length),O)return;const I={type:"FeatureCollection",features:o||[]};R(I),l(100);const A=new Map;I.features.forEach(T=>{var Y;const L=Number(((Y=T.properties)==null?void 0:Y.Place)??0);A.has(L)||A.set(L,{id:L,name:`Place ${L}`,featureCount:0});const W=A.get(L);W&&W.featureCount++}),j(Array.from(A.values()).sort((T,L)=>T.id-L.id)),t(!1)}catch(z){if(z.name==="AbortError"){console.log("网络请求已取消");return}C(z instanceof Error?z.message:"Failed to load"),t(!1)}})()},[]),n.useEffect(()=>{w&&J(se(w,f))},[w,k,f,U,he]),n.useEffect(()=>{if(!w)return;const p=a.current;if(!p)return;const m=()=>{var y,b,i,d;if(w.features.forEach((g,h)=>{g.id===void 0&&(g.id=h)}),p.getSource("cluster"))p.getSource("cluster").setData(w);else{console.log("初始化 cluster 数据源..."),p.addSource("cluster",{type:"geojson",data:w,generateId:!0}),p.addLayer({id:"cluster-fill",type:"fill",source:"cluster",layout:{},paint:{"fill-opacity":.7}}),p.addLayer({id:"cluster-line",type:"line",source:"cluster",layout:{},paint:{"line-color":"#7e7f80ff","line-width":1}}),p.addLayer({id:"cluster-highlight",type:"line",source:"cluster",layout:{},paint:{"line-color":"#632ffdff","line-width":3,"line-opacity":["case",["boolean",["feature-state","selected"],!1],1,0]}}),p.on("click","cluster-fill",h=>{var x;if(h.features&&h.features.length>0){const v=h.features[0],o=v.id;ie.current!==null&&ie.current!==void 0&&p.setFeatureState({source:"cluster",id:ie.current},{selected:!1}),o!==void 0?(p.setFeatureState({source:"cluster",id:o},{selected:!0}),ie.current=o):ie.current=null,Be(v),ue(!0),((x=v.properties)==null?void 0:x.Place)!==void 0&&M(Number(v.properties.Place))}}),p.on("mouseenter","cluster-fill",()=>{p.getCanvas().style.cursor="pointer"}),p.on("mouseleave","cluster-fill",()=>{p.getCanvas().style.cursor=""});const g=w.features;if(g.length>0)try{const h=new Pe.LngLatBounds,x=Math.max(1,Math.floor(g.length/2e3));for(let v=0;v<g.length;v+=x){const o=g[v];if(!((y=o.geometry)!=null&&y.coordinates))continue;const I=o.geometry.type,A=o.geometry.coordinates;I==="Point"?h.extend(A):I==="LineString"||I==="MultiPoint"?A.forEach(T=>h.extend(T)):I==="Polygon"||I==="MultiLineString"?(b=A[0])==null||b.forEach(T=>h.extend(T)):I==="MultiPolygon"&&((d=(i=A[0])==null?void 0:i[0])==null||d.forEach(T=>h.extend(T)))}h.isEmpty()||p.fitBounds(h,{padding:50,duration:1e3})}catch(h){console.error("Fit bounds error:",h)}}},z=()=>{var L;if(!p.getLayer("cluster-fill"))return;const y=null;p.setFilter("cluster-fill",y),p.setFilter("cluster-line",y),p.setFilter("cluster-highlight",y);const b=(()=>{var We;let W=1/0,Y=-1/0;for(const Ve of w.features){const Q=Number((We=Ve.properties)==null?void 0:We[f]);Number.isNaN(Q)||Q===-9999||(Q<W&&(W=Q),Q>Y&&(Y=Q))}return{min:W===1/0?0:W,max:Y===-1/0?0:Y}})(),i=k!==null&&E?{min:E.min,max:E.max}:b,d=U==="city"?i:b,g=d.min,h=d.max;let x;if(f.includes("K_")){const W=Math.round(((L=he[f])==null?void 0:L.max)??h),Y=Array.from({length:26},(me,He)=>{const H=He/25;let de,ge,fe;if(H<.167){const V=H/.167;de=0,ge=0,fe=Math.round(139+116*V)}else if(H<.333){const V=(H-.167)/.167;de=0,ge=Math.round(255*V),fe=255}else if(H<.5){const V=(H-.333)/.167;de=0,ge=Math.round(255-128*V),fe=Math.round(255-255*V)}else if(H<.667){const V=(H-.5)/.167;de=Math.round(255*V),ge=255,fe=0}else if(H<.833){const V=(H-.667)/.167;de=255,ge=Math.round(255-128*V),fe=0}else{const V=(H-.833)/.167;de=255,ge=Math.round(127-127*V),fe=0}return`#${de.toString(16).padStart(2,"0")}${ge.toString(16).padStart(2,"0")}${fe.toString(16).padStart(2,"0")}`}),Ve=Array.from({length:W+1},(me,He)=>Y[Math.round(He*25/W)]).slice(0,W+1),Q=["interpolate",["linear"],["get",f]];for(let me=0;me<=W;me++)Q.push(me,Ve[me]);x=Q}else f==="CoverRatio"||f==="ISF"||f==="GreenRatio"?x=["interpolate",["linear"],["get",f],g,"#3182bd",h,"#e6550d"]:f.includes("elev")||f.includes("slope")?x=["interpolate",["linear"],["get",f],g,"#31a354",h,"#756bb1"]:x=["interpolate",["linear"],["get",f],g,"#31a354",h,"#756bb1"];p.setPaintProperty("cluster-fill","fill-color",x);const v=k!==null,o=Number(k),T=["case",["any",["==",["get",f],-9999],["==",["get",f],null]],0,v?["case",["==",["to-number",["get","Place"]],o],.8,.15]:.7];p.setPaintProperty("cluster-fill","fill-opacity",T)};p.isStyleLoaded()?(m(),z()):p.once("load",()=>{m(),z()})},[w,k,f]),n.useEffect(()=>{var z,y,b,i;if(!w||k===null)return;const p=a.current;if(!p)return;const m=w.features.filter(d=>{var h;const g=(h=d.properties)==null?void 0:h.Place;return g!==void 0&&Number(g)===Number(k)});if(m.length!==0)try{const d=new Pe.LngLatBounds;let g=0;const h=Math.max(1,Math.floor(m.length/2e3));for(let x=0;x<m.length;x+=h){const v=m[x];if(!((z=v.geometry)!=null&&z.coordinates))continue;const o=v.geometry.type,I=v.geometry.coordinates;o==="Point"?(d.extend(I),g++):o==="LineString"||o==="MultiPoint"?(I.forEach(A=>d.extend(A)),g++):o==="Polygon"||o==="MultiLineString"?((y=I[0])==null||y.forEach(A=>d.extend(A)),g++):o==="MultiPolygon"&&((i=(b=I[0])==null?void 0:b[0])==null||i.forEach(A=>d.extend(A)),g++)}!d.isEmpty()&&g>0&&p.fitBounds(d,{padding:50,duration:1e3})}catch(d){console.error("Fly to error:",d)}},[k]),n.useEffect(()=>((async()=>{(!c.current||a.current)&&console.log("开始初始化地图...");try{const m=new Pe.Map({container:c.current,style:{version:8,sources:{"osm-tiles":{type:"raster",tiles:["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],tileSize:256,attribution:'&copy; <a href="https://carto.com/">CARTO</a>'}},layers:[{id:"simple-tiles",type:"raster",source:"osm-tiles",minzoom:0,maxzoom:19}]},center:[4.75,45.75],zoom:10});m.addControl(new Pe.NavigationControl,"top-right"),m.on("load",()=>{console.log("地图样式加载完成")}),m.on("error",z=>{var i;const y=String(((i=z==null?void 0:z.error)==null?void 0:i.message)||(z==null?void 0:z.message)||"");y.includes("ERR_ABORTED")||y.includes("AbortError")||y.includes("Canceled")||y.includes("cancelled")||console.error("地图错误:",z)}),a.current=m,console.log("地图初始化完成")}catch(m){console.error("地图初始化错误:",m)}})(),()=>{a.current&&(a.current.remove(),a.current=null,Oe.current=!1)}),[]),n.useEffect(()=>{const p=a.current;if(!p)return;const m=()=>{p.getLayer("simple-tiles")&&p.setLayoutProperty("simple-tiles","visibility",ne?"visible":"none")};p.isStyleLoaded()?m():p.once("style.load",m)},[ne]);const Ee=async p=>{var z;const m=(z=p.target.files)==null?void 0:z[0];if(m){ve.current&&ve.current.abort(),ae(!0),pe(0),ce("正在读取文件..."),C(null),ze(!0),S(URL.createObjectURL(m));try{console.log("开始读取文件:",m.name,"大小:",m.size);let y=[];const b=m.name.endsWith(".zip"),i=m.name.endsWith(".shp");if(!b&&!i){C("请上传 .zip 文件 (包含 Shapefile)"),ae(!1);return}ce("正在读取文件...");const d=await m.arrayBuffer();pe(30),ce("正在解析 Shapefile...");const g=await Ye(d);console.log("Shapefile 解析完成:",g),g.type==="FeatureCollection"?y=g.features:Array.isArray(g)?y=g:g.type==="Feature"&&(y=[g]),console.log("解析到的 features 数量:",y.length),pe(95),ce(`已解析 ${y.length} 个 Features...`);const h={type:"FeatureCollection",features:y};pe(98),ce("正在处理 Place 数据...");const x=new Map;h.features.forEach(v=>{var A;const o=Number(((A=v.properties)==null?void 0:A.Place)??0);x.has(o)||x.set(o,{id:o,name:`Place ${o}`,featureCount:0});const I=x.get(o);I&&I.featureCount++}),pe(100),ce("加载完成!"),setTimeout(()=>{Fe(!0),R(h),j(Array.from(x.values()).sort((v,o)=>v.id-o.id)),ae(!1),ze(!1),t(!1)},500)}catch(y){const b=y instanceof Error?y.message:"未知错误";C(`加载失败: ${b}`),ae(!1),t(!1)}}},Ue=we.reduce((p,m)=>(p[m.category]||(p[m.category]=[]),p[m.category].push(m),p),{});return e.jsxs("div",{className:"relative w-full h-full bg-gray-100",children:[be&&e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 w-80 text-center",children:[e.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-gray-100 rounded-full"}),e.jsx("div",{className:"absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Qe,{className:"text-purple-600",size:24})})]}),e.jsx("p",{className:"text-gray-800 font-medium mb-3",children:ee}),e.jsx("div",{className:"w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",style:{width:`${Me}%`}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:[Me,"%"]})]})}),u&&!be?e.jsx("div",{className:"absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Nc,{className:"animate-spin h-12 w-12 text-purple-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"正在加载 Shapefile..."}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-600 transition-all duration-300",style:{width:`${r}%`}})}),e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[r,"%"]}),e.jsxs("div",{className:"flex gap-2 mt-4 justify-center",children:[e.jsxs("a",{href:dc,download:"223_cities_cluster_with_index.zip",className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:[e.jsx(Mc,{size:14}),"下载本地"]}),e.jsxs("button",{onClick:()=>{var p;return(p=Le.current)==null?void 0:p.click()},className:"inline-flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg text-sm transition-colors",title:"支持 .zip (Shapefile)",children:[e.jsx(Qe,{size:14}),"加载 Shapefile"]})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"支持 .zip (Shapefile)"}),e.jsx("input",{ref:Le,type:"file",accept:".shp,.zip",onChange:Ee,className:"hidden"})]})}):null,s&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-red-50 border border-red-200 rounded-xl px-6 py-5 shadow-lg",children:[e.jsx("p",{className:"text-red-600 font-medium",children:"加载失败"}),e.jsx("p",{className:"text-red-400 text-sm mt-1 mb-4",children:s}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:()=>window.location.reload(),className:"inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-sm transition-colors",children:[e.jsx(Sc,{size:14}),"刷新重试"]})})]}),G&&e.jsxs("div",{className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("h2",{className:"font-bold text-gray-800 flex items-center gap-2",children:[e.jsx(Ic,{size:18}),"Cluster Map"]}),e.jsx("button",{onClick:()=>B(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Ac,{size:18})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"显示地图底图"}),e.jsx("button",{onClick:()=>Ce(!ne),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${ne?"bg-purple-600":"bg-gray-300"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${ne?"translate-x-6":"translate-x-1"}`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Place (Count)"}),e.jsxs("select",{value:k??"",onChange:p=>M(p.target.value?Number(p.target.value):null),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:[e.jsxs("option",{value:"",children:["All Places (",((Se=w==null?void 0:w.features)==null?void 0:Se.length)??0,")"]}),N.map(p=>e.jsxs("option",{value:p.id,children:[p.name," (",p.featureCount,")"]},p.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs font-medium text-gray-500 block mb-1",children:"Attribute"}),e.jsx("select",{value:f,onChange:p=>P(p.target.value),className:"w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",children:Object.entries(Ue).map(([p,m])=>[e.jsx("optgroup",{label:p.charAt(0).toUpperCase()+p.slice(1),children:m.map(z=>e.jsx("option",{value:z.key,children:z.label},z.key))},p)])})]}),E&&e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Cc,{size:14,className:"text-purple-500"}),e.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Statistics"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Count:"})," ",e.jsx("span",{className:"font-medium",children:E.count})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Min:"})," ",e.jsx("span",{className:"font-medium",children:E.min.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Max:"})," ",e.jsx("span",{className:"font-medium",children:E.max.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"Mean:"})," ",e.jsx("span",{className:"font-medium",children:E.mean.toFixed(2)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-400",children:"NaN:"})," ",e.jsx("span",{className:"font-medium",children:E.nanCount})]})]})]})]})]}),!G&&e.jsx("button",{onClick:()=>B(!0),className:"absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(Dc,{size:18})}),Ne&&K&&e.jsxs("div",{className:"absolute top-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-80 max-h-96 overflow-y-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wider mb-1",children:"Feature Details"}),e.jsxs("div",{className:"mb-3",children:[K.properties.Place&&e.jsxs("div",{className:"text-lg font-semibold text-purple-600",children:["Place: ",K.properties.Place]}),K.properties["City Name"]&&e.jsxs("div",{className:"text-sm font-medium text-gray-700",children:["City: ",K.properties["City Name"]]}),e.jsxs("div",{className:"text-sm font-medium text-gray-500",children:["Place ID: ",K.properties["Place ID"]??"N/A"]})]})]}),e.jsx("button",{onClick:()=>ue(!1),className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:e.jsx(Je,{size:20,className:"text-gray-400"})})]}),e.jsx("div",{className:"space-y-2",children:we.map(p=>{var z;const m=(z=K.properties)==null?void 0:z[p.key];return m==null?null:e.jsxs("button",{onClick:()=>P(p.key),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${f===p.key?"bg-purple-100 text-purple-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{children:p.label}),e.jsx("span",{className:"font-mono font-medium",children:typeof m=="number"?m.toFixed(2):m})]},p.key)})}),e.jsx("div",{className:"mt-3 pt-3 border-t border-gray-200",children:e.jsx("button",{onClick:()=>M(null),className:"w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg text-sm transition-colors",children:"显示全部区域"})})]}),e.jsx("div",{ref:c,className:"w-full h-full"}),Z&&w&&e.jsxs("div",{className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 w-64",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"font-semibold text-gray-800 flex items-center gap-2",children:[e.jsx(ec,{size:16}),"Legend"]}),e.jsx("button",{onClick:()=>re(!1),className:"text-gray-400 hover:text-gray-600",children:e.jsx(Je,{size:16})})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:"颜色映射"}),e.jsx("button",{onClick:()=>De(U==="global"?"city":"global"),className:`text-xs px-2 py-1 rounded ${U==="global"?"bg-gray-200 text-gray-700":"bg-purple-100 text-purple-700"}`,children:U==="global"?"全局":"城市"})]}),e.jsx("div",{className:"space-y-3",children:f.includes("K_")?(()=>{var y,b;const p=Math.round(((y=he[f])==null?void 0:y.max)??30),m=Array.from({length:26},(i,d)=>{const g=d/25;let h,x,v;if(g<.167){const o=g/.167;h=0,x=0,v=Math.round(139+116*o)}else if(g<.333){const o=(g-.167)/.167;h=0,x=Math.round(255*o),v=255}else if(g<.5){const o=(g-.333)/.167;h=0,x=Math.round(255-128*o),v=Math.round(255-255*o)}else if(g<.667){const o=(g-.5)/.167;h=Math.round(255*o),x=255,v=0}else if(g<.833){const o=(g-.667)/.167;h=255,x=Math.round(255-128*o),v=0}else{const o=(g-.833)/.167;h=255,x=Math.round(127-127*o),v=0}return`#${h.toString(16).padStart(2,"0")}${x.toString(16).padStart(2,"0")}${v.toString(16).padStart(2,"0")}`}),z=Array.from({length:p+1},(i,d)=>m[Math.round(d*25/p)]);return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:((b=we.find(i=>i.key===f))==null?void 0:b.label)||f}),e.jsx("div",{className:"flex flex-wrap gap-px",children:z.map((i,d)=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-sm",style:{backgroundColor:i}}),e.jsx("span",{className:"text-[6px] text-gray-400",children:d})]},d))})]})})():f==="CoverRatio"||f==="ISF"||f==="GreenRatio"?(()=>{var v;const p=(()=>{var A;let o=1/0,I=-1/0;for(const T of w.features){const L=Number((A=T.properties)==null?void 0:A[f]);Number.isNaN(L)||L===-9999||(L<o&&(o=L),L>I&&(I=L))}return{min:o===1/0?0:o,max:I===-1/0?0:I}})(),m=k!==null&&E?{min:E.min,max:E.max}:p,z=((v=we.find(o=>o.key===f))==null?void 0:v.label)||f,y=p.max>p.min?Math.max(0,Math.min(1,(m.min-p.min)/(p.max-p.min))):0,b=p.max>p.min?Math.max(0,Math.min(1,(m.max-p.min)/(p.max-p.min))):0,i=Math.max(0,b-y),d=ye("#3182bd"),g=ye("#e6550d"),h=xe(d,g,y),x=xe(d,g,b);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[z,"（城市区间）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,130,189,0.2), rgba(230,85,13,0.2))"},children:k!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${i*100}%`,background:`linear-gradient(to right, ${h}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[z,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #3182bd, #e6550d)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:p.min.toFixed(2)}),e.jsx("span",{children:p.max.toFixed(2)})]})]})]})})():f.includes("elev")||f.includes("slope")?(()=>{var v;const p=(()=>{var A;let o=1/0,I=-1/0;for(const T of w.features){const L=Number((A=T.properties)==null?void 0:A[f]);Number.isNaN(L)||L===-9999||(L<o&&(o=L),L>I&&(I=L))}return{min:o===1/0?0:o,max:I===-1/0?0:I}})(),m=k!==null&&E?{min:E.min,max:E.max}:p,z=((v=we.find(o=>o.key===f))==null?void 0:v.label)||f,y=p.max>p.min?Math.max(0,Math.min(1,(m.min-p.min)/(p.max-p.min))):0,b=p.max>p.min?Math.max(0,Math.min(1,(m.max-p.min)/(p.max-p.min))):0,i=Math.max(0,b-y),d=ye("#31a354"),g=ye("#756bb1"),h=xe(d,g,y),x=xe(d,g,b);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[z,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:k!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${i*100}%`,background:`linear-gradient(to right, ${h}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(1)}),e.jsxs("span",{children:[m.max.toFixed(0),"+"]})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[z,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:p.min.toFixed(1)}),e.jsxs("span",{children:[p.max.toFixed(0),"+"]})]})]})]})})():(()=>{var v;const p=(()=>{var A;let o=1/0,I=-1/0;for(const T of w.features){const L=Number((A=T.properties)==null?void 0:A[f]);Number.isNaN(L)||L===-9999||(L<o&&(o=L),L>I&&(I=L))}return{min:o===1/0?0:o,max:I===-1/0?0:I}})(),m=k!==null&&E?{min:E.min,max:E.max}:p,z=((v=we.find(o=>o.key===f))==null?void 0:v.label)||f,y=p.max>p.min?Math.max(0,Math.min(1,(m.min-p.min)/(p.max-p.min))):0,b=p.max>p.min?Math.max(0,Math.min(1,(m.max-p.min)/(p.max-p.min))):0,i=Math.max(0,b-y),d=ye("#31a354"),g=ye("#756bb1"),h=xe(d,g,y),x=xe(d,g,b);return e.jsxs("div",{children:[U==="city"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-2",children:[z,"（城市区间，映射到全局色带）"]}),e.jsx("div",{className:"relative h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, rgba(49,163,84,0.2), rgba(117,107,177,0.2))"},children:k!==null&&e.jsx("div",{className:"absolute top-0 h-3 rounded ring-1 ring-black/20",style:{left:`${y*100}%`,width:`${i*100}%`,background:`linear-gradient(to right, ${h}, ${x})`}})}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:m.min.toFixed(2)}),e.jsx("span",{children:m.max.toFixed(2)})]})]}),U==="global"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"text-xs text-gray-500 mb-1",children:[z,"（全局）"]}),e.jsx("div",{className:"h-3 rounded overflow-hidden",style:{background:"linear-gradient(to right, #31a354, #756bb1)"}}),e.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[e.jsx("span",{children:p.min.toFixed(2)}),e.jsx("span",{children:p.max.toFixed(2)})]})]})]})})()})]}),!Z&&e.jsx("button",{onClick:()=>re(!0),className:"absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg hover:bg-white transition-colors",children:e.jsx(ec,{size:18})})]})},bb=[{key:"",label:"Home"},{key:"design",label:"Design"},{key:"game",label:"Game"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"about",label:"About"}],ab={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},ke=({value:c,transform:a})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:a,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((u,t)=>e.jsx("span",{className:"flex items-center justify-center",children:ab[c].includes(t)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},t))}),pb=()=>{const[c,a]=n.useState(!1),[u,t]=n.useState(!1),[r,l]=n.useState({x:0,y:0}),s="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili",[C,w]=n.useState(`${s}/lili_01.png`),[R,N]=n.useState("Exploring the intersection of technology and creativity."),j=lc(),k=vc(),f=j.pathname.split("/").filter(Boolean)[0]||"",P={design:`${s}/lili_05.png`,game:`${s}/lili_03.png`,platform:`${s}/lili_11.png`,tutorial:`${s}/lili_04.png`,about:`${s}/lili_02.png`,planning:`${s}/lili_06.png`},G=[`${s}/lili_01.png`,`${s}/lili_07.png`,`${s}/lili_08.png`,`${s}/lili_09.png`,`${s}/lili_10.png`,`${s}/lili_12.png`],B=["探索科技与创意的交汇点。","把数据转化为有意义的故事。","构建能激发灵感的数字体验。","连接产品与开发的桥梁。","创造在真实世界中落地的解决方案。","热衷于地理空间技术与城市规划。"],E=_=>_[Math.floor(Math.random()*_.length)];n.useEffect(()=>{w(P[f]??E(G)),N(E(B))},[f]);const J=()=>{l(S=>({x:S.x+720+Math.round(Math.random()*360),y:S.y+720+Math.round(Math.random()*360)}));const _=["design","game","planning","platform","tutorial","about"];setTimeout(()=>k(`/${E(_)}`),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${u?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 items-center",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>a(!c),className:"icon-btn","aria-expanded":c,"aria-label":c?"Hide profile panel":"Show profile panel",title:c?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(te,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"林丽丽 Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:bb.map(_=>{const S=f===_.key;return e.jsx("li",{className:"flex",children:e.jsxs(te,{to:`/${_.key}`,onClick:()=>{window.innerWidth<768&&a(!1)},"aria-current":S?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${S?"text-ink":"text-ink-3 hover:text-ink"}`,children:[_.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${S?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},_.key||"home")})})})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(eb,{}),e.jsxs("button",{onClick:J,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"随机探索一个项目",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${r.x}deg) rotateY(${r.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(ke,{value:1,transform:"translateZ(10px)"}),e.jsx(ke,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(ke,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(ke,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(ke,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(ke,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>t(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),u&&e.jsx("button",{onClick:()=>t(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[c&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[C&&e.jsx("img",{src:C,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"设计师 · 开发者 · 产品创作者"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"创造有意义的数字体验，连接技术与创意。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:R}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Ke,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(Ke,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(Ke,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsx("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:e.jsxs(mc,{children:[e.jsx(F,{path:"/",element:e.jsx(Qt,{})}),e.jsx(F,{path:"/planning",element:e.jsx(Ie,{data:Re,type:"planning"})}),e.jsx(F,{path:"/planning/:id",element:e.jsx(Ae,{data:Re,type:"planning"})}),e.jsx(F,{path:"/design",element:e.jsx(Ie,{data:Te,type:"design"})}),e.jsx(F,{path:"/design/:id",element:e.jsx(Ae,{data:Te,type:"design"})}),e.jsx(F,{path:"/game",element:e.jsx(Ie,{data:_e,type:"game"})}),e.jsx(F,{path:"/game/:id",element:e.jsx(Ae,{data:_e,type:"game"})}),e.jsx(F,{path:"/platform",element:e.jsx(Ie,{data:qe,type:"platform"})}),e.jsx(F,{path:"/platform/:id",element:e.jsx(Ae,{data:qe,type:"platform"})}),e.jsx(F,{path:"/tutorial",element:e.jsx(Ie,{data:Ge,type:"tutorial"})}),e.jsx(F,{path:"/tutorial/:id",element:e.jsx(Ae,{data:Ge,type:"tutorial"})}),e.jsx(F,{path:"/clusteringeomap",element:e.jsx(tb,{})}),e.jsx(F,{path:"/about",element:e.jsx(Vt,{})}),e.jsx(F,{path:"/contact",element:e.jsx(Ht,{})})]})})]})]})};function nb(){const[c,a]=n.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(jc,{children:e.jsx(pb,{})}),!c&&e.jsx(Lc,{onFinish:()=>a(!0)})]})}yc.createRoot(document.getElementById("root")).render(e.jsx(nb,{}));
