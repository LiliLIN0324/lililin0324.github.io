const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-C2m5FIL0.js","./react-vendor-Dn-0NGU0.js","./geo-BbprxUkj.js","./vendor-BzO13j2l.js","./plotly-DiRDnMYc.js","./icons-eCj0hK1G.js","./UR-platform-r-N6UDpW.js","./maplibre-D_yVVxqp.js","./maplibre-PhPnDjd-.css","./heatmapper-D9BE04xi.js","./openstreetmap-B8v-8o8D.js","./leaflet-SslAMvT9.js","./leaflet-Dgihpmma.css","./photogeo-a_Ws0J-o.js","./photogeomap-BVuvpOJp.js","./clusteringevents-L250qWFX.js","./framer-BpNNdg_d.js","./litflow-C2-od8WH.js","./epsteinscret-CGEHc4ju.js","./wechatgame-BI6FzIpz.js","./72HourGameJamDemo-Q9-AT_Iq.js","./PeaceEliteHustCampusDemo-Ck8o3EQY.js","./BMWMetaIslandDemo-Cfc247_T.js","./riffle-CTHd6I24.js","./genstyle-DQyZfKXW.js","./genshot-CIUvqG-5.js","./dragon-diffusion-Dlj0L8S7.js","./anyreal-BxsD4wrj.js","./previous-archi-work-U6Hrv95D.js","./hongqiqu-cD8rl8Aw.js","./scendance-__eetAMS.js","./clusteringeomap-4kMsQJJH.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,L as N,u as ie,R as Te,a as Pe,c as ve,d as _e,e as se,f as I,H as Re,g as Be}from"./react-vendor-Dn-0NGU0.js";import{A as Ge,m as J}from"./framer-BpNNdg_d.js";import{M as F,r as V,a as K}from"./markdown-cHbBfKKj.js";import"./geo-BbprxUkj.js";import"./vendor-BzO13j2l.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))a(b);new MutationObserver(b=>{for(const p of b)if(p.type==="childList")for(const i of p.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(b){const p={};return b.integrity&&(p.integrity=b.integrity),b.referrerPolicy&&(p.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?p.credentials="include":b.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(b){if(b.ep)return;b.ep=!0;const p=n(b);fetch(b.href,p)}})();function Oe({onFinish:c}){const[t,n]=s.useState(!0),a=s.useRef(null),b=s.useRef({x:-1e3,y:-1e3});return s.useEffect(()=>{const p=a.current;if(!p)return;const i=p.getContext("2d");if(!i)return;let o,f=[];const u=()=>{p.width=window.innerWidth,p.height=window.innerHeight},r=g=>{b.current={x:g.clientX,y:g.clientY}},d=g=>{g.touches.length>0&&(b.current={x:g.touches[0].clientX,y:g.touches[0].clientY})};window.addEventListener("resize",u),window.addEventListener("mousemove",r),window.addEventListener("touchmove",d),u();class l{constructor(){this.x=Math.random()*p.width,this.y=Math.random()*p.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>p.width)&&(this.vx*=-1),(this.y<0||this.y>p.height)&&(this.vy*=-1);let m=b.current.x-this.x,x=b.current.y-this.y,j=Math.sqrt(m*m+x*x),y=m/j,v=x/j;const k=150;let z=(k-j)/k;j<k&&(this.x-=y*z*this.density*.5,this.y-=v*z*this.density*.5)}draw(){i&&(i.fillStyle="rgba(255, 255, 255, 0.8)",i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fill())}}for(let g=0;g<120;g++)f.push(new l);const h=()=>{i.clearRect(0,0,p.width,p.height);for(let g=0;g<f.length;g++){f[g].update(),f[g].draw();for(let m=g+1;m<f.length;m++){const x=f[g].x-f[m].x,j=f[g].y-f[m].y,y=Math.sqrt(x*x+j*j);y<100&&(i.beginPath(),i.strokeStyle=`rgba(255, 255, 255, ${.2*(1-y/100)})`,i.lineWidth=.6,i.moveTo(f[g].x,f[g].y),i.lineTo(f[m].x,f[m].y),i.stroke())}}o=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",u),window.removeEventListener("mousemove",r),window.removeEventListener("touchmove",d)}},[]),e.jsx(Ge,{onExitComplete:c,children:t&&e.jsxs(J.div,{onClick:()=>n(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:a,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(J.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(J.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const Ue="modulepreload",We=function(c,t){return new URL(c,t).href},re={},A=function(t,n,a){let b=Promise.resolve();if(n&&n.length>0){let i=function(r){return Promise.all(r.map(d=>Promise.resolve(d).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};const o=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),u=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));b=i(n.map(r=>{if(r=We(r,a),r in re)return;re[r]=!0;const d=r.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const x=o[m];if(x.href===r&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Ue,d||(g.as="script"),g.crossOrigin="",g.href=r,u&&g.setAttribute("nonce",u),document.head.appendChild(g),d)return new Promise((m,x)=>{g.addEventListener("load",m),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${r}`)))})}))}function p(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return b.then(i=>{for(const o of i||[])o.status==="rejected"&&p(o.reason);return t().catch(p)})},He=`---
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
`,$e=`---
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
`,Fe=`---
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
`,Ve=`---
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
`,Ke=`---
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
`,Ze=`---
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
`,Qe=`---
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
`,Ye=`---
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
`,Xe=`---
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
`,Je=`---
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
`,ec=`---
id: "03"
slug: "genshot-AI-video-generation-tool"
title: "Genshot - AI videos Generation Tool"
category: "UI&UX Design"
year: "2025"
description: "TODO"
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
<!-- TODO: frontmatter description was copied from Dragon Diffusion and is now the placeholder "TODO". Replace it with a real blurb. -->
# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Genshot.mp4"></video>
</div>
`,cc=`---
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
`,tc=`---
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
`,nc=`---
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
`,ac=`---
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
`,bc=`---
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
`,pc=`---
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
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/07.jpg"
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
`,ic=`---
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
`,sc=`---
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
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/22.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/23.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/24.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/25.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/26.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/27.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/28.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/29.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/30.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/31.jpg"
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
`,rc=`---
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
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/02.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/03.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/04.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/05.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/06.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/07.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/08.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/09.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/10.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/11.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/12.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/13.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/14.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/15.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/16.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/17.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/18.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/19.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/20.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/21.jpg"
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/22.jpg"
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
`,dc=`---
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
`,gc=`---
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
`,oc=`---
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
`,fc=`---
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
`,lc=`---
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
`,uc=`---
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
`,hc=`---
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
`,vc=`---
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
`,mc=`---
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
`,jc=`---
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
`,yc=`---
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
`,xc=`---
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
`,wc=`---
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
`,kc=`---
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
`,Nc=`---
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
`,Ac=`---
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
`,Ic=`---
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
`;function zc(c){const t=/^---\r?\n([\s\S]*?)\r?\n---/,n=c.match(t);let a={},b=c;if(n){const l=n[1];b=c.slice(n[0].length).trim();const h=l.split(/\r?\n/);let g=null,m=[];h.forEach(x=>{if(x.trim()==="")return;const y=x.indexOf(":");if(y!==-1&&!x.startsWith(" ")){g&&(a[g]=m.join(`
`)),g=x.slice(0,y).trim();let v=x.slice(y+1).trim();v==="|"?m=[]:v===""?m=[]:(a[g]=v,g=null,m=[])}else g&&x.startsWith("  ")&&m.push(x.slice(2))}),g&&m.length>0&&(a[g]=m.join(`
`)),Object.keys(a).forEach(x=>{let j=a[x];if(typeof j=="string")if(j=j.trim(),j.startsWith('"')&&j.endsWith('"')&&(j=j.slice(1,-1)),typeof j=="string"&&j.includes(`
`)&&/^\s*-/.test(j)){const y=j.split(/\r?\n/).map(v=>v.replace(/^\s*-\s*/,"").trim()).filter(v=>v!=="");a[x]=y.map(v=>v.startsWith('"')&&v.endsWith('"')||v.startsWith("'")&&v.endsWith("'")?v.slice(1,-1):v)}else if(j.startsWith("[")&&j.endsWith("]"))try{a[x]=JSON.parse(j)}catch{a[x]=[j.slice(1,-1).trim()]}else j==="true"?a[x]=!0:j==="false"?a[x]=!1:!isNaN(Number(j))&&j.trim()!==""?a[x]=Number(j):a[x]=j})}const p=[],i=new Set,o=l=>{const h=l.trim();!h||i.has(h)||(i.add(h),p.push(h))};Array.isArray(a.image)&&a.image.forEach(l=>o(String(l)));const f=/!\[.*?\]\(([^)\s]+)\)/g;let u;for(;(u=f.exec(b))!==null;)o(u[1]);const r=/<imagecarousel\b[^>]*\simages="([^"]*)"/gi;let d;for(;(d=r.exec(b))!==null;)d[1].split(",").forEach(o);return{id:a.id||"",slug:a.slug||"",title:a.title||"",category:a.category||"",year:a.year||"",description:a.description||"",tech:a.tech||[],abstract:a.abstract||"",challenge:a.challenge||"",solution:a.solution||"",hasDemo:a.hasDemo||!1,demoOnly:a.demoOnly===!0,icon:a.icon||"",code:a.code||"",logo:a.icon||"",image:p,content:b}}function w(c){const t=zc(c);return{id:t.id,slug:t.slug,title:t.title,category:t.category,year:t.year,description:t.description,tech:t.tech,hasDemo:t.hasDemo,details:{abstract:t.abstract,description:t.description,challenge:t.challenge,solution:t.solution,logo:t.logo,icon:t.icon,code:t.code,image:t.image,content:t.content,demoOnly:t.demoOnly||!1}}}const Sc=[w(He),w($e),w(Fe),w(Qe),w(Ke),w(Ze),w(Ve),w(Ye)],Cc=[w(Xe),w(Je),w(ec),w(cc),w(tc),w(nc),w(ac),w(bc)],Lc=[w(pc),w(ic),w(sc),w(rc),w(dc)],Mc=[w(gc),w(oc),w(fc),w(lc),w(uc)],ne=[w(hc),w(vc)],me=[w(mc),w(jc),w(yc),w(xc),w(wc),w(kc),w(Nc),w(Ac),w(Ic)],de={"early-campus-experience":"perslearn","guangzhou-xinyuan-tech":"guangzhou-xinyuan","72-hour-game-jam":"game-jam","urban-heat-resilience-machine-learning":"urban-heat-resilience-ml","peace-elite-hust-campus":"peace-elite-hust","prompt-engineering-agentic-rag":"agentic-rag"},G="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig",je="https://mujing-universe.pages.dev/",O="lili0324@snu.ac.kr",qc={scendance:{title:"幕景 Scendance",sub:"AI 活动布置工作台"},"riffle-ai-game-generation-tool":{title:"Riffle",sub:"AI 游戏生成工具"},genstyle:{title:"Genstyle",sub:"每日穿搭灵感"},"genshot-AI-video-generation-tool":{title:"Genshot",sub:"AI 视频生成工具",desc:"TODO"},"bazi-fengshui-analysis":{title:"洛书八字",sub:"Bazi · 风水分析应用"},anyreal:{title:"AnyReal",sub:"AI 虚拟影棚"},"dragon-diffussion":{title:"Dragon Diffusion",sub:"AI 创意生产平台"},"early-campus-experience":{title:"1037拼拼 & PersLEARN",sub:"早期校园产品"},litflow:{title:"LitFlow",sub:"Research Hub"},"epstein-mystery-archive":{title:"Epstein Mystery Archive",sub:"档案平台"},kittylovecarrots:{title:"指萝卜",sub:"个人开发微信小游戏"},"guangzhou-xinyuan-tech":{title:"广州心源科技",sub:"Bilibili 游戏子公司实习"},"bmw-meta-island":{title:"一杯咖啡的游戏旅程",sub:"同济 × BMW 联合挑战营"},"peace-elite-hust-campus":{title:"和平精英 × 华中科技大学",sub:"绿洲世界高校共建"},"72-hour-game-jam":{title:"无名之路",sub:"腾讯 × 华科 72 小时极限开发"},"prompt-engineering-agentic-rag":{title:"Agentic RAG",sub:"城市规划知识库"},"knowledge-graph-urban-planning":{title:"城市规划文本知识图谱",sub:"多模型评测"},"urban-heat-resilience-machine-learning":{title:"Urban Heat Resilience",sub:"可解释机器学习"},"participatory-urban-regeneration-empowered-by-artificial-intelligence":{title:"参与式城市更新",sub:"AI 赋能"},"local-climate-zones-urban-heat-resilience":{title:"Local Climate Zones",sub:"城市热韧性"},heatmapper:{title:"HeatMapper",sub:"全球热监测"},"cluster-visualizer-3d":{title:"Cluster Visualizer 3D",sub:"全球空间聚类"},"previous-planning-research":{title:"Previous Planning Research",sub:"研究综述"},"campus-public-space-vitality-modeling":{title:"校园公共空间活力建模",sub:"Urban Sensing"},neurotopia:{title:"Neurotopia",sub:"神经元式城市设计"},hongqiqu:{title:"红旗渠遗产价值评估",sub:""},"chicken-utopia":{title:"Chicken Utopia",sub:"小鸡乌托邦"},"previous-archi-work":{title:"建筑作品集",sub:"Previous Archi Work"}},Dc=["scendance","riffle-ai-game-generation-tool","genstyle","genshot-AI-video-generation-tool","bazi-fengshui-analysis","anyreal","dragon-diffussion","early-campus-experience","litflow","epstein-mystery-archive","kittylovecarrots","guangzhou-xinyuan-tech","bmw-meta-island","peace-elite-hust-campus","72-hour-game-jam","prompt-engineering-agentic-rag","knowledge-graph-urban-planning","urban-heat-resilience-machine-learning","participatory-urban-regeneration-empowered-by-artificial-intelligence","local-climate-zones-urban-heat-resilience","heatmapper","cluster-visualizer-3d","previous-planning-research","campus-public-space-vitality-modeling","neurotopia","hongqiqu","chicken-utopia","previous-archi-work"],Ec=["riffle-ai-game-generation-tool","anyreal","neurotopia","kittylovecarrots","bazi-fengshui-analysis","peace-elite-hust-campus"],Tc=["neurotopia","riffle-ai-game-generation-tool","anyreal","kittylovecarrots"],Pc={product:"产品",platform:"产品",game:"游戏",ai:"城市与 AI",planning:"城市与 AI",tutorial:"笔记"};function ye(c,t){var a;return de[c]?de[c]:((a=t==null?void 0:t.match(/\/fig\/([^/]+)\//))==null?void 0:a[1])||c}function ge(c){const t=c.replace(/\s+/g," ").trim();return t?(t.split(new RegExp("(?<=[。！？.])"))[0]||t).trim():""}function _c(c){const t=Array.from(c.matchAll(/(20\d{2})/g),p=>p[1]);if(t.length===0)return c.trim();const n=/present|ongoing|on\s*going|进行/i.test(c),a=t[0],b=t[t.length-1];return a===b?n?`${a}–`:a:`${a}–${b}`}function Rc(c){const t=c.split(/\s[-—–]\s/);return t.length>=2?{title:t[0].trim(),sub:t.slice(1).join(" - ").trim()}:{title:c.trim(),sub:""}}function Bc(c){const t=c.replace(/<[^>]+>/g," ").replace(/\s+/g," "),n=[/我主要担任[^。！？]{2,180}/,/我担任[^。！？]{2,180}/,/我主要负责[^。！？]{2,180}/,/我参与了[^。]{0,100}负责[^。！？]{2,140}/];for(const a of n){const b=t.match(a);if(b)return b[0].replace(/\s+/g," ").trim()}}function P(c,t){return c.map(n=>({project:n,routeType:t}))}const Gc=[...P(Cc,"product"),...P(ne,"platform"),...P(Lc,"game"),...P(Mc,"ai"),...P(Sc,"planning"),...P(me,"tutorial")];function xe(c,t){const{project:n,routeType:a}=c,b=qc[n.slug],p=Rc(n.title||n.slug),i=n.details.icon||n.details.logo||"",o=n.description||ge(n.details.abstract)||ge(n.details.solution),f=n.slug==="genshot-AI-video-generation-tool"?"TODO":o,u=Bc(n.details.content||"");return{slug:n.slug,routeType:a,href:`/${a}/${n.slug}`,title:(b==null?void 0:b.title)||p.title,subtitle:(b==null?void 0:b.sub)??p.sub,group:Pc[a]||"产品",yearLabel:_c(String(n.year||"")),description:f,tech:Array.isArray(n.tech)?n.tech:[],category:n.category||"",abstract:n.details.abstract||"",challenge:n.details.challenge||"",solution:n.details.solution||"",content:n.details.content||"",images:Array.isArray(n.details.image)?n.details.image:[],icon:i,r2:ye(n.slug,i),hasDemo:!!n.hasDemo,demoOnly:!!n.details.demoOnly,role:u,no:t}}const Oc=new Map(Gc.map(c=>[c.project.slug,c]));function Uc(c,t){return c.map(a=>Oc.get(a)).filter(a=>!!a).filter(a=>a.routeType!=="tutorial").map((a,b)=>xe(a,b+1))}const S=Uc(Dc),T=me.map((c,t)=>xe({project:c,routeType:"tutorial"},t+1)),L=S.length,we=T.length,oe=Ec.map(c=>S.find(t=>t.slug===c)).filter(c=>!!c),E=Tc.map(c=>S.find(t=>t.slug===c)).filter(c=>!!c);function ee(c){return S.filter(t=>t.group===c)}const q={产品:ee("产品").length,游戏:ee("游戏").length,"城市与 AI":ee("城市与 AI").length,笔记:T.length},Wc=S.map(c=>c.href);function Hc(c){const t=c.replace(/\/$/,"")||"/";return S.find(n=>n.href===t)||T.find(n=>n.href===t)}function $c(c){const t=c.group==="笔记"?T:S,n=t.findIndex(a=>a.slug===c.slug&&a.routeType===c.routeType);return t[(n+1+t.length)%t.length]}const Z="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev",Fc=[`${G}/manifest.json`,`${Z}/manifest.json`,`${Z}/fig/manifest.json`],ke=new Set(["previous-planning-research"]);let Q=new Map;const Y=new Set;function W(c,t,n){if(c===!0)return`${G}/${t}/${n}`;if(typeof c!="string"||!c.trim())return;const a=c.trim();return/^https?:\/\//i.test(a)?a:a.startsWith("/")?`${Z}${a}`:a.startsWith("fig/")?`${Z}/${a}`:`${G}/${t}/${a.replace(/^\.\//,"")}`}function fe(c,t){if(!c)return;const n=Q.get(c)||{};Q.set(c,{...n,...t})}function Vc(c){const t=(n,a)=>{if(!n||typeof n!="object")return;if(Array.isArray(n)){n.forEach(f=>t(f));return}const b=n,p=String(b.slug||b.id||b.folder||b.r2||a||""),i=ye(p,typeof b.icon=="string"?b.icon:void 0),o={card:W(b.card,i,"card.jpg"),card_s:W(b.card_s??b.cardS,i,"card-s.jpg"),hero:W(b.hero,i,"hero.jpg"),hero_m:W(b.hero_m??b.heroM,i,"hero-m.jpg")};(o.card||o.card_s||o.hero||o.hero_m)&&(fe(p,o),fe(i,o));for(const[f,u]of Object.entries(b))u&&typeof u=="object"&&t(u,f)};t(c),Y.forEach(n=>n())}function Kc(c){return Y.add(c),()=>{Y.delete(c)}}function Ne(c){return Q.get(c.slug)||Q.get(c.r2)}let H=null;function Zc(){return H||(H=(async()=>{for(const c of Fc)try{const t=await fetch(c);if(!t.ok)continue;const n=await t.json();Vc(n);return}catch{}Y.forEach(c=>c())})(),H)}function Ae(c){const t=new Set;return c.filter(n=>!n.src||t.has(n.src)?!1:(t.add(n.src),!0))}function Ie(c){if(ke.has(c.slug))return[];const t=`${G}/${c.r2}`,n=Ne(c),a=(n==null?void 0:n.card)||`${t}/card.jpg`,b=(n==null?void 0:n.card_s)||`${t}/card-s.jpg`,p=[{src:a,srcSet:`${b} 800w, ${a} 1600w`},{src:`${t}/logo.jpg`,logo:!0},{src:`${t}/01.jpg`}];return c.icon&&!p.some(i=>i.src===c.icon)&&p.push({src:c.icon,logo:/logo\.(jpg|png|webp)$/i.test(c.icon)}),Ae(p)}function Qc(c,t){if(ke.has(c.slug))return[];const n=`${G}/${c.r2}`,a=Ne(c),b=[];if(c.r2==="neurotopia"){const p=(a==null?void 0:a.hero)||`${n}/hero.jpg`,i=(a==null?void 0:a.hero_m)||`${n}/hero-m.jpg`;b.push({src:t?i:p}),t&&b.push({src:p})}else t&&(a!=null&&a.hero_m)?b.push({src:a.hero_m}):a!=null&&a.hero&&b.push({src:a.hero});return b.push(...Ie(c)),c.images[0]&&b.push({src:c.images[0].replace(/01\.png$/i,"01.jpg")}),Ae(b)}function Yc(c,t){if(!c)return;const n=t==="tutorial"?[T]:[S,T];for(const a of n){const b=a.find(p=>p.slug===c&&(!t||p.routeType===t));if(b)return b}}const Xc={product:"Products",game:"Games",ai:"AI",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},ze=({className:c})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:c,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),Se=({to:c,className:t=""})=>e.jsx(N,{to:c,className:`btn-accent ${t}`,children:"Demo"}),Jc=!1,et=({project:c,type:t,index:n})=>{var a;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(n+1).padStart(2,"0")}),e.jsxs(N,{to:`/${t}/${c.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",onError:b=>{b.target.style.display="none"}}):e.jsx(ze,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:c.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(a=c.tech)==null?void 0:a.slice(0,3).map(b=>e.jsx("span",{className:"chip",children:b},b))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:c.year})]}),c.hasDemo&&e.jsx(Se,{to:`/${t}/${c.slug}#demo`,className:"shrink-0"})]})})},ct=({project:c,type:t,index:n})=>{var a;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(N,{to:`/${t}/${c.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]",onError:b=>{b.target.style.display="none"}}):e.jsx(ze,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(n+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:c.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),((a=c.tech)==null?void 0:a.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tech.slice(0,2).map(b=>e.jsx("span",{className:"chip",children:b},b))})]})]}),c.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(Se,{to:`/${t}/${c.slug}#demo`,className:"w-full"})})]})},tt=({data:c,type:t})=>{const[n,a]=s.useState("grid"),b=Xc[t]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[t==="product"&&Jc,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[t," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(c.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",b]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(p=>e.jsx("button",{onClick:()=>a(p),"aria-pressed":n===p,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${n===p?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:p},p))})]}),n==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:c.map((p,i)=>e.jsx(et,{project:p,type:t,index:i},p.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:c.map((p,i)=>e.jsx(ct,{project:p,type:t,index:i},p.slug))})]})},nt=s.lazy(()=>A(()=>import("./ClusterVisualizer-C2m5FIL0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),at=s.lazy(()=>A(()=>import("./UR-platform-r-N6UDpW.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),bt=s.lazy(()=>A(()=>import("./heatmapper-D9BE04xi.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),pt=s.lazy(()=>A(()=>import("./openstreetmap-B8v-8o8D.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),it=s.lazy(()=>A(()=>import("./photogeo-a_Ws0J-o.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),st=s.lazy(()=>A(()=>import("./photogeomap-BVuvpOJp.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),rt=s.lazy(()=>A(()=>import("./clusteringevents-L250qWFX.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));s.lazy(()=>A(()=>import("./litflow-C2-od8WH.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const dt=s.lazy(()=>A(()=>import("./epsteinscret-CGEHc4ju.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),le=s.lazy(()=>A(()=>import("./wechatgame-BI6FzIpz.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),gt=s.lazy(()=>A(()=>import("./72HourGameJamDemo-Q9-AT_Iq.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),ot=s.lazy(()=>A(()=>import("./PeaceEliteHustCampusDemo-Ck8o3EQY.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),ft=s.lazy(()=>A(()=>import("./BMWMetaIslandDemo-Cfc247_T.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),lt=s.lazy(()=>A(()=>import("./riffle-CTHd6I24.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),ut=s.lazy(()=>A(()=>import("./genstyle-DQyZfKXW.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),ht=s.lazy(()=>A(()=>import("./genshot-CIUvqG-5.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),vt=s.lazy(()=>A(()=>import("./dragon-diffusion-Dlj0L8S7.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),mt=s.lazy(()=>A(()=>import("./anyreal-BxsD4wrj.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),jt=s.lazy(()=>A(()=>import("./previous-archi-work-U6Hrv95D.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),yt=s.lazy(()=>A(()=>import("./hongqiqu-cD8rl8Aw.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),xt=s.lazy(()=>A(()=>import("./scendance-__eetAMS.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),ae=c=>({"cluster-visualizer-3d":nt,"participatory-urban-regeneration-empowered-by-artificial-intelligence":at,heatmapper:bt,"how-to-add-openstreetmap-in-website":pt,"how-to-get-sequential-events-from-photo-by-phone":it,"how-to-visualize-photo-geolocation-data-on-map":st,kittylovecarrots:le,"how-to-build-game-in-wechat-mini-program":le,"72-hour-game-jam":gt,"peace-elite-hust-campus":ot,"bmw-meta-island":ft,"how-to-conduct-time-geo-sequential-clustering-from-album":rt,"epstein-mystery-archive":dt,"riffle-ai-game-generation-tool":lt,genstyle:ut,"genshot-AI-video-generation-tool":ht,"dragon-diffussion":vt,anyreal:mt,"previous-archi-work":jt,hongqiqu:yt,scendance:xt})[c],wt=({images:c,captions:t})=>{const[n,a]=s.useState(0),[b,p]=s.useState(new Set(c.map((d,l)=>l))),i=c.filter((d,l)=>b.has(l));if(s.useEffect(()=>{n>=i.length&&a(Math.max(0,i.length-1))},[i.length,n]),i.length===0)return null;const o=d=>{p(l=>{const h=new Set(l);return h.delete(d),h})},f=()=>{a(d=>d===0?i.length-1:d-1)},u=()=>{a(d=>d===i.length-1?0:d+1)},r=t==null?void 0:t[n];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:i[n],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:r||`Carousel Image ${n+1}`,onError:()=>o(n)}),e.jsx("button",{onClick:f,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:u,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),i.length>1&&e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:i.map((d,l)=>e.jsx("button",{onClick:()=>a(l),className:`h-1.5 rounded-full transition-all duration-300 ${n===l?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${l+1}`},l))})]}),r&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:r}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[n+1," / ",i.length]})]}),!r&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[n+1," / ",i.length]})]})},kt=({src:c,...t})=>{const[n,a]=s.useState(!1),[b,p]=s.useState(!1);return s.useEffect(()=>{const i=setTimeout(()=>{b||(a(!1),p(!0))},3e3);return()=>clearTimeout(i)},[b]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:c,onLoad:()=>{a(!0),p(!0)},onError:()=>{a(!1),p(!0)},style:{display:"none"},title:"detector"}),!b&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),b&&n&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:c,className:"h-96 w-full border-0",allowFullScreen:!0,...t})}),b&&!n&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},ue={iframe:({src:c,title:t,...n})=>e.jsx(kt,{src:c,title:t||"Embedded content",...n}),imagecarousel:({images:c,captions:t})=>{const n=(c||"").split(",").map(b=>b.trim()).filter(Boolean),a=t?t.split("|").map(b=>b.trim()):void 0;return e.jsx(wt,{images:n,captions:a})},table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:a,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...t,children:c})},h2:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:a,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...t,children:c})},h3:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:a,className:"mt-6 mb-3 text-base font-bold text-ink",...t,children:c})},h4:({children:c,...t})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...t,children:c}),h5:({children:c,...t})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...t,children:c}),h6:({children:c,...t})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...t,children:c}),p:({children:c,...t})=>{var b;const n=Te.Children.toArray(c),a=n.length===1&&((b=n[0])==null?void 0:b.type)==="img";return e.jsx("p",{className:a?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...t,children:c})},a:({children:c,href:t,...n})=>e.jsx("a",{href:t,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...n,children:c}),img:({src:c,alt:t,...n})=>(t==null?void 0:t.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:c,alt:t,className:"h-32 max-w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...n}):e.jsx("img",{src:c,alt:t,className:"my-0 h-auto w-full border border-rule object-cover",onError:b=>{b.target.style.display="none"},...n})},Nt=/(?:^|\n)(?:#{1,6}[^\n]*(?:效果展示|附图|PPT 汇报)[^\n]*\n|<h[1-6][^>]*>[^<\n]*(?:效果展示|附图|PPT 汇报)[^<\n]*<\/h[1-6]>\s*)/g;function At(c,t){const n=t.filter(l=>l&&!c.includes(l));if(n.length===0)return c;const a=n.map(l=>`![效果展示](${l})`).join(`
`);let b=null,p;const i=new RegExp(Nt.source,"g");for(;(p=i.exec(c))!==null;)b=p;if(!b){const l=c.indexOf("<!-- details -->");return l!==-1?`${c.slice(0,l).trimEnd()}

${a}

${c.slice(l)}`:`${c.trimEnd()}

${a}
`}let o=b.index+b[0].length;const f=c.slice(o),u=f.search(/\n#{1,6} /),d=(u===-1?f:f.slice(0,u)).match(/<div\b[^>]*>[\s\S]*?<\/div>/);if(d&&d.index!==void 0&&/<video\b/i.test(d[0])){o+=d.index+d[0].length;const l=c.slice(o).match(/^\s*/);l&&(o+=l[0].length)}return`${c.slice(0,o)}
${a}
${c.slice(o)}`}const It=({data:c,type:t})=>{var h,g,m,x,j;const{id:n}=ie(),a=c.find(y=>y.slug===n),[b,p]=s.useState(a!=null&&a.hasDemo&&((h=a==null?void 0:a.details)!=null&&h.demoOnly)?"demo":"details"),[i,o]=s.useState(!1);if(s.useEffect(()=>{const y=()=>{var v;a!=null&&a.hasDemo&&((v=a==null?void 0:a.details)!=null&&v.demoOnly)||window.location.hash.includes("demo")&&(a!=null&&a.hasDemo)?p("demo"):p("details")};return y(),window.addEventListener("hashchange",y),()=>window.removeEventListener("hashchange",y)},[n,a==null?void 0:a.hasDemo,(g=a==null?void 0:a.details)==null?void 0:g.demoOnly]),!a)return e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(N,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})});const f="<!-- details -->",u=At(String(a.details.content||""),(a.details.image??[]).map(y=>String(y||"").trim()).filter(Boolean)),r=u.indexOf(f),d=(r===-1?u:u.slice(0,r)).trim(),l=r===-1?"":u.slice(r+f.length).trim();return e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(N,{to:`/${t}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:a.title})]}),!((m=a.details)!=null&&m.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>p("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),a.hasDemo&&e.jsxs("button",{onClick:()=>p("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${b==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),b==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[((x=a.tech)==null?void 0:x.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:a.tech.map((y,v)=>e.jsx("span",{className:"chip",children:y},v))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",a.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:a.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:a.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:a.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:i,onToggle:y=>o(y.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[i?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[a.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.description})]}),a.details.abstract&&a.details.abstract!==a.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.abstract})]}),a.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.challenge})]}),a.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:a.details.solution})]})]})]}),d&&e.jsx("section",{id:"content",children:e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(F,{remarkPlugins:[K],rehypePlugins:[V],components:ue,children:d})})}),l&&e.jsxs("section",{id:"details",className:"mt-12",children:[e.jsxs("div",{className:"section-head mb-8",children:[e.jsx("p",{className:"eyebrow",children:"细节"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Methods"})]}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(F,{remarkPlugins:[K],rehypePlugins:[V],components:ue,children:l})})]})]})}):(j=a.details)!=null&&j.demoOnly?e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const y=ae(a.slug);return y?e.jsx(y,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const y=ae(a.slug);return y?e.jsx(y,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]})},zt=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),ce=({href:c,label:t})=>e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"icon-btn font-mono text-[10px] tracking-eyebrow",children:t}),St=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),Ct=()=>{const[c,t]=s.useState(St),n=()=>{const a=!c;t(a),document.documentElement.classList.toggle("dark",a);try{localStorage.setItem("theme",a?"dark":"light")}catch{}};return e.jsx("button",{onClick:n,className:"icon-btn","aria-label":c?"Switch to light theme":"Switch to dark theme",title:c?"切换到日间模式":"切换到夜间模式",children:c?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})};function Ce(){const[c,t]=s.useState(0);return s.useEffect(()=>(Zc(),Kc(()=>t(n=>n+1))),[]),c}function Lt(){const[c,t]=s.useState(!1);return s.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)"),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),c}function Le(c){const[t,n]=s.useState(0),a=c.map(o=>o.src).join("|");s.useEffect(()=>{n(0)},[a]);const b=c[t];return{current:b,failed:!b,advance:()=>n(o=>o+1)}}function Me({work:c,showGo:t=!0}){Ce();const n=Ie(c),{current:a,failed:b,advance:p}=Le(n);return b||!a?e.jsxs("div",{className:"im miss","data-cover":"type",children:[e.jsx("span",{className:"mt",children:c.title}),e.jsx("span",{className:"ml",children:c.group}),t&&e.jsx("span",{className:"go",children:"查看 →"})]}):e.jsxs("div",{className:`im ${a.logo?"logo":""}`,"data-cover":a.logo?"logo":"photo",children:[e.jsx("img",{src:a.src,srcSet:a.logo?void 0:a.srcSet,sizes:a.srcSet?"(max-width: 768px) 92vw, 40vw":void 0,alt:"",onError:p}),t&&e.jsx("span",{className:"go",children:"查看 →"})]})}function qe({work:c,mobile:t}){Ce();const n=Qc(c,t),{current:a,failed:b,advance:p}=Le(n);return b||!a?e.jsx("div",{className:"frame miss","data-cover":"type",children:e.jsx("strong",{children:c.title})}):e.jsx("div",{className:"frame","data-cover":"photo",children:e.jsx("img",{src:a.src,alt:"",onError:p})})}function be({work:c,no:t,large:n=!1}){const a=String(t??c.no).padStart(2,"0");return e.jsxs(N,{to:c.href,className:n?"card lg":"card",children:[e.jsx(Me,{work:c}),e.jsxs("div",{className:"cap",children:[e.jsx("span",{className:"no",children:a}),e.jsxs("h3",{children:[e.jsx("span",{className:"ttl",children:c.title}),c.subtitle?e.jsx("em",{children:c.subtitle}):null]}),e.jsx("span",{className:"yr",children:c.yearLabel}),c.description?e.jsx("p",{className:"blurb",children:c.description}):null,e.jsx("div",{className:"tag",children:e.jsx("span",{children:c.group})})]})]})}function M({n:c,title:t,en:n,right:a}){return e.jsxs("div",{className:"shead",children:[e.jsx("span",{className:"n",children:c}),e.jsxs("h2",{children:[t,n?e.jsx("em",{children:n}):null]}),e.jsx("div",{className:"r",children:a})]})}function X(){const c=()=>{const t=document.querySelector("main > section");t instanceof HTMLElement&&t.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"foot",children:[e.jsxs("div",{className:"grid12 fr",children:[e.jsx("div",{className:"c1",children:e.jsx("span",{className:"sq"})}),e.jsxs("div",{className:"c2",children:[e.jsx("span",{className:"lab",children:"联系"}),e.jsx("a",{href:`mailto:${O}`,children:O})]}),e.jsxs("div",{className:"c3",children:[e.jsx("span",{className:"lab",children:"社交"}),e.jsx("div",{children:e.jsx("a",{href:"https://www.instagram.com/lililin_portfolio/",target:"_blank",rel:"noopener",children:"Instagram ↗"})}),e.jsx("div",{children:e.jsx("a",{href:"https://github.com/lililin0324",target:"_blank",rel:"noopener",children:"GitHub ↗"})}),e.jsx("div",{children:e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",target:"_blank",rel:"noopener",children:"LinkedIn ↗"})})]}),e.jsxs("div",{className:"c5",children:[e.jsx("span",{className:"lab",children:"© 2026"}),e.jsx("div",{children:"林丽丽"}),e.jsx("button",{type:"button",className:"lnk",onClick:c,style:{color:"#fff",marginTop:12},children:"回到顶部 ↑"})]})]}),e.jsx("div",{className:"big",children:"Lili Lin"})]})}function C(c){return String(c).padStart(2,"0")}const Mt=[{id:"all",label:"全部",count:L},{id:"产品",label:"产品",count:q.产品},{id:"游戏",label:"游戏",count:q.游戏},{id:"城市与 AI",label:"城市与 AI",count:q["城市与 AI"]}];function qt(){const[c,t]=s.useState(!1);return s.useEffect(()=>{const n=window.matchMedia("(max-width: 768px)"),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),c}function Dt(){const c=Lt(),t=qt(),[n,a]=s.useState(0),[b,p]=s.useState(!1),[i,o]=s.useState("all"),[f,u]=s.useState("list"),r=E[n]||E[0],d=(i==="all"?S:S.filter(h=>h.group===i)).slice(0,t?4:10);s.useEffect(()=>{if(c||b||E.length<2)return;const h=window.setInterval(()=>{a(g=>(g+1)%E.length)},6e3);return()=>window.clearInterval(h)},[c,b,n]);const l=()=>{var h;(h=document.getElementById("featured"))==null||h.scrollIntoView({behavior:c?"auto":"smooth",block:"start"})};return e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"fold",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsxs("div",{className:"hero",children:[r&&e.jsx(N,{to:r.href,className:"hit","aria-label":r.title,children:e.jsx(qe,{work:r,mobile:t},r.slug+String(t))}),r&&e.jsxs("div",{className:"cap",children:[e.jsxs("b",{children:[C(n+1)," / ",C(E.length)]}),e.jsxs("span",{children:[r.title," · ",r.group," · ",r.yearLabel]})]})]}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-main",children:[e.jsxs("h1",{children:["Lili Lin",e.jsx("small",{children:"林丽丽"})]}),e.jsx("p",{className:"sub",children:"AI 产品设计、游戏与交互，以及 AI × 城市研究。"}),e.jsx("p",{className:"meta",children:"首尔大学 城市与区域规划　·　华中科技大学 建筑学"})]}),e.jsxs("div",{className:"side side-desk",children:[e.jsxs("div",{children:[e.jsx("div",{className:"kicker",children:"正在展示"}),r&&e.jsxs("div",{className:"now",children:[r.title,r.subtitle?e.jsx("em",{children:r.subtitle}):null]}),e.jsx("div",{className:"prog",children:E.map((h,g)=>e.jsx("button",{type:"button",className:g===n?"on":"","aria-label":h.title,onClick:()=>a(g),children:g===n&&!c?e.jsx("i",{},n):null},h.slug))})]}),e.jsxs("button",{type:"button",className:"btn",onClick:l,children:["浏览作品 ",e.jsx("i",{children:"↓"})]})]})]}),e.jsxs("div",{className:"mob-only",style:{marginTop:20},children:[e.jsx("div",{className:"kicker",children:"正在展示"}),r&&e.jsxs("div",{className:"now",children:[r.title,r.subtitle?e.jsx("em",{children:r.subtitle}):null]}),e.jsx("div",{className:"prog",children:E.map((h,g)=>e.jsx("button",{type:"button",className:g===n?"on":"",onClick:()=>a(g),"aria-label":h.title,children:g===n&&!c?e.jsx("i",{},`m${n}`):null},h.slug))}),e.jsxs("button",{type:"button",className:"btn block",style:{width:"100%",marginTop:18},onClick:l,children:["浏览作品 ",e.jsx("i",{children:"↓"})]})]}),e.jsxs("div",{className:"scrollhint desk-only","aria-hidden":"true",children:[e.jsx("span",{children:"SCROLL"}),e.jsx("b",{})]})]})]}),e.jsxs("section",{className:"sec w",id:"featured",children:[e.jsx(M,{n:"01",title:"精选作品",en:"Selected",right:e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:[C(oe.length)," / ",L]}),e.jsx(N,{to:"/work",children:e.jsx("b",{children:"全部作品 →"})})]})}),e.jsxs("div",{className:"grid12 feat",children:[oe.map((h,g)=>{const m=["a","b","c","d","e","f"][g],x=g===0||g===5;return e.jsx("div",{className:m,children:e.jsx(be,{work:h,no:g+1,large:x})},h.slug)}),e.jsxs("div",{className:"st",children:[e.jsxs("div",{className:"big",children:[L,e.jsx("sup",{children:"件作品"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"产品"}),e.jsx("b",{children:q.产品})]}),e.jsxs("li",{children:[e.jsx("span",{children:"游戏"}),e.jsx("b",{children:q.游戏})]}),e.jsxs("li",{children:[e.jsx("span",{children:"城市与 AI"}),e.jsx("b",{children:q["城市与 AI"]})]}),e.jsxs("li",{children:[e.jsx(N,{to:"/tutorial",children:"笔记"}),e.jsx("b",{children:we})]})]})]})]})]}),e.jsxs("section",{className:"sec w",id:"index",children:[e.jsx(M,{n:"02",title:"全部作品",en:"Index",right:e.jsx("span",{children:"名录顺序"})}),e.jsxs("div",{className:"toolbar",style:{position:"static"},children:[e.jsx("div",{className:"filters",children:Mt.map(h=>e.jsxs("button",{type:"button",className:i===h.id?"on":"",onClick:()=>o(h.id),children:[h.label,e.jsx("sup",{children:h.count})]},h.id))}),e.jsxs("div",{className:"viewtog",children:[e.jsx("button",{type:"button",className:f==="list"?"on":"",onClick:()=>u("list"),children:"列表"}),e.jsx("button",{type:"button",className:f==="grid"?"on":"",onClick:()=>u("grid"),children:"网格"})]})]}),f==="list"?e.jsx(De,{items:d}):e.jsx("div",{className:"cards",children:d.map(h=>e.jsx(be,{work:h},h.href))}),e.jsxs("div",{className:"more",children:[e.jsxs("span",{className:"lab",children:["显示 ",d.length," / ",L]}),e.jsxs(N,{className:"lnk",to:"/work",children:["查看全部 ",L," 件作品 →"]})]})]}),e.jsxs("section",{className:"sec",id:"elsewhere",children:[e.jsx("div",{className:"w",children:e.jsx(M,{n:"03",title:"相关项目",en:"Elsewhere",right:e.jsx("span",{children:"外部站点"})})}),e.jsxs("div",{className:"mj",children:[e.jsx("img",{className:"pan",src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg",alt:""}),e.jsx("div",{className:"shade"}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"lab",children:[e.jsx("span",{className:"sq"})," 幕景宇宙 · 另一个官方站点"]}),e.jsx("h3",{children:"幕景宇宙"}),e.jsx("p",{children:"幕景宇宙是独立于本作品集的另一个官方站点。"}),e.jsx("div",{className:"row2",children:e.jsx("a",{className:"btn",href:je,target:"_blank",rel:"noopener",children:"幕景宇宙官网 ↗"})})]})]})]}),e.jsxs("section",{className:"sec w",id:"about-teaser",children:[e.jsx(M,{n:"04",title:"关于",en:"About",right:e.jsx(N,{to:"/about",children:e.jsx("b",{children:"关于我 →"})})}),e.jsxs("div",{className:"grid12 ab",children:[e.jsx("div",{className:"pic",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png",alt:"林丽丽"})}),e.jsxs("div",{className:"txt",children:[e.jsx("blockquote",{children:"我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。"}),e.jsxs("div",{className:"facts",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"教育"}),"首尔大学 城市与区域规划",e.jsx("br",{}),"华中科技大学 建筑学"]}),e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"学术报告"}),"8 场 · AAAI Workshop、CUPUM、ACSP、IACP 等"]}),e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"链接"}),e.jsx("a",{href:"https://www.instagram.com/lililin_portfolio/",target:"_blank",rel:"noopener",children:"Instagram ↗"}),"　",e.jsx("a",{href:"https://github.com/lililin0324",target:"_blank",rel:"noopener",children:"GitHub ↗"}),e.jsx("br",{}),e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",target:"_blank",rel:"noopener",children:"LinkedIn ↗"}),"　",e.jsx("a",{href:`mailto:${O}`,children:"邮件"})]})]})]})]})]}),e.jsx(X,{})]})}function De({items:c}){return e.jsxs("div",{className:"idx",children:[e.jsxs("div",{className:"row hd",children:[e.jsx("span",{className:"no",children:"No."}),e.jsx("span",{className:"t",children:"作品"}),e.jsx("span",{className:"c",children:"类别"}),e.jsx("span",{className:"d",children:"简介"}),e.jsx("span",{className:"y",children:"年份"})]}),c.map(t=>e.jsxs(N,{to:t.href,className:"row",children:[e.jsx("span",{className:"no",children:C(t.no)}),e.jsxs("span",{className:"t",children:[t.title,t.subtitle?e.jsx("em",{children:t.subtitle}):null]}),e.jsx("span",{className:"c",children:t.group}),e.jsx("span",{className:"d",children:t.description}),e.jsx("span",{className:"y",children:t.yearLabel})]},t.href))]})}const Et=[{id:"all",label:"全部",count:L},{id:"产品",label:"产品",count:q.产品},{id:"游戏",label:"游戏",count:q.游戏},{id:"城市与 AI",label:"城市与 AI",count:q["城市与 AI"]}],Tt={all:{title:"作品",count:L,intro:"产品、游戏与城市研究三条线的全部项目。点击卡片进入详情，详情页底部可直接翻到下一件。"},product:{title:"产品",count:S.filter(c=>c.routeType==="product").length,intro:"产品项目。全部 28 件在作品名录。"},game:{title:"游戏",count:S.filter(c=>c.routeType==="game").length,intro:"游戏设计、实习与独立开发。"},ai:{title:"AI",count:S.filter(c=>c.routeType==="ai").length,intro:"AI 与城市研究交叉的项目。"},planning:{title:"Planning",count:S.filter(c=>c.routeType==="planning").length,intro:"城市规划与建筑设计项目。"},notes:{title:"笔记",count:we,intro:"教程笔记，不计入 28 件作品。"}};function Pt(c,t){return c==="notes"?T:c==="product"?S.filter(n=>n.routeType==="product"):c==="game"?S.filter(n=>n.routeType==="game"):c==="ai"?S.filter(n=>n.routeType==="ai"):c==="planning"?S.filter(n=>n.routeType==="planning"):t==="all"?S:S.filter(n=>n.group===t)}function _({scope:c="all"}){const[t,n]=s.useState("all"),[a,b]=s.useState("grid"),[p,i]=s.useState(12),o=s.useRef(null),f=Tt[c],u=s.useMemo(()=>Pt(c,t),[c,t]),r=u.slice(0,p);return s.useEffect(()=>{i(12)},[t,c]),s.useEffect(()=>{const d=o.current;if(!d)return;const l=document.querySelector("main > section"),h=new IntersectionObserver(g=>{g.some(m=>m.isIntersecting)&&i(m=>Math.min(u.length,m+12))},{root:l instanceof HTMLElement?l:null,rootMargin:"480px"});return h.observe(d),()=>h.disconnect()},[u.length,p]),e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"w ph",children:[e.jsxs("div",{className:"grid12",children:[e.jsxs("h1",{children:[f.title,e.jsx("sup",{children:f.count})]}),e.jsx("p",{className:"intro",children:f.intro})]}),e.jsxs("div",{className:"toolbar",children:[c==="all"?e.jsx("div",{className:"filters",children:Et.map(d=>e.jsxs("button",{type:"button",className:t===d.id?"on":"",onClick:()=>n(d.id),children:[d.label,e.jsx("sup",{children:d.count})]},d.id))}):e.jsxs("div",{className:"filters",children:[e.jsxs("span",{className:"lab",children:[r.length," / ",u.length]}),c!=="notes"&&e.jsxs(N,{to:"/work",children:["全部 ",L," 件作品 →"]})]}),e.jsxs("div",{className:"viewtog",children:[e.jsx("button",{type:"button",className:a==="grid"?"on":"",onClick:()=>b("grid"),children:"网格"}),e.jsx("button",{type:"button",className:a==="list"?"on":"",onClick:()=>b("list"),children:"列表"})]})]}),a==="grid"?e.jsx("div",{className:"cards",children:r.map(d=>e.jsx(be,{work:d},d.href))}):e.jsx(De,{items:r}),e.jsx("div",{ref:o}),p<u.length&&e.jsxs("p",{className:"lab",style:{marginTop:28},children:["继续滚动以加载其余 ",u.length-p," 件"]}),c==="notes"&&e.jsx("div",{style:{marginTop:48},children:e.jsx(M,{n:"—",title:"作品",en:"Works",right:e.jsx(N,{to:"/work",children:e.jsxs("b",{children:[L," 件 →"]})})})})]}),e.jsx(X,{})]})}function _t(){const[c,t]=s.useState(!1);return s.useEffect(()=>{const n=window.matchMedia("(max-width: 768px)"),a=()=>t(n.matches);return a(),n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]),c}function Rt(c){let t=c.content||"";return t=t.replace(/!\[[^\]]*\]\(([^)]+)\)/g,(n,a)=>c.images.includes(a.trim())?"":n),t=t.replace(/^https?:\/\/\S+\.(?:jpg|jpeg|png|webp|gif)\s*$/gim,""),t.trim()}function B({routeType:c}){const{id:t}=ie(),n=Yc(t,c),a=_t(),[b,p]=s.useState(!1),[i,o]=s.useState(!1),[f,u]=s.useState(0);s.useEffect(()=>{p(!!(n!=null&&n.demoOnly)),o(!1),u(0)},[n==null?void 0:n.href,n==null?void 0:n.demoOnly]),s.useEffect(()=>{const v=document.querySelector("main > section");if(!(v instanceof HTMLElement))return;const k=()=>{const z=v.scrollHeight-v.clientHeight;u(z<=0?0:v.scrollTop/z)};return k(),v.addEventListener("scroll",k,{passive:!0}),()=>v.removeEventListener("scroll",k)},[n==null?void 0:n.href,b]);const r=s.useMemo(()=>n?Rt(n):"",[n]),d=(n==null?void 0:n.images)||[],l=i?d:d.slice(0,3),h=Math.max(0,d.length-3);if(!n)return e.jsxs("div",{className:"swiss w",style:{padding:"64px 48px"},children:[e.jsx("p",{className:"lab",children:"未找到"}),e.jsx("h1",{style:{font:"700 64px/1 var(--disp)",marginTop:12},children:"没有这件作品"}),e.jsx(N,{to:"/work",className:"lnk",children:"← 返回作品"})]});const g=n.slug==="genshot-AI-video-generation-tool"?"TODO":n.abstract||n.description,m=$c(n),x=n.group==="笔记"?"/tutorial":`/${n.routeType}`,j=n.hasDemo?ae(n.slug):void 0;if(b&&j)return e.jsxs("div",{className:"swiss",children:[e.jsxs("div",{className:"demo-bar",children:[e.jsx("button",{type:"button",className:"lnk",onClick:()=>p(!1),children:"← 返回介绍"}),e.jsx("span",{className:"lab",children:n.title})]}),e.jsx("div",{className:"demo-frame",children:e.jsx(s.Suspense,{fallback:e.jsx("p",{className:"lab",style:{padding:24},children:"Loading demo…"}),children:e.jsx(j,{})})})]});const y=[];return n.tech.length&&y.push({dt:"技术",dd:n.tech.join(" · ")}),n.yearLabel&&y.push({dt:"年份",dd:n.yearLabel}),n.group&&y.push({dt:"类别",dd:`${n.group}${n.category?` · ${n.category}`:""}`}),n.role&&y.push({dt:"角色",dd:n.role}),e.jsxs("div",{className:"swiss",children:[e.jsx("div",{className:"read","aria-hidden":"true",children:e.jsx("i",{style:{width:`${Math.round(f*100)}%`}})}),e.jsxs("div",{className:"dhero",children:[e.jsx(qe,{work:n,mobile:a}),d.length>0&&e.jsxs("div",{className:"cap",style:{position:"absolute",left:48,bottom:20,color:"#fff",font:"500 12px/1 Inter, sans-serif",letterSpacing:".06em"},children:["图 01 / ",C(d.length)]})]}),e.jsxs("section",{className:"w dh",children:[e.jsxs("div",{className:"grid12",children:[e.jsxs("div",{className:"crumb",children:[e.jsx(N,{to:n.group==="笔记"?"/tutorial":"/work",children:n.group==="笔记"?"笔记":"作品"}),e.jsx("span",{children:"/"}),e.jsx(N,{to:x,children:n.group}),e.jsx("span",{children:"/"}),e.jsx("b",{children:n.title})]}),e.jsx("h1",{children:n.title}),n.subtitle?e.jsx("p",{className:"sub",children:n.subtitle}):null,e.jsxs("div",{className:"meta",children:[e.jsx("b",{children:C(n.no)}),e.jsxs("span",{children:[n.group,n.category?` · ${n.category}`:""]}),e.jsx("span",{children:n.yearLabel})]}),n.hasDemo&&j&&e.jsxs("div",{className:"act",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>p(!0),children:["打开 Demo ",e.jsx("i",{children:"↗"})]}),e.jsx("span",{className:"lab",children:"在本页运行"})]})]}),e.jsxs("div",{className:"grid12 db",children:[g?e.jsx("p",{className:"intro",children:g}):e.jsx("div",{}),y.length>0&&e.jsx("dl",{children:y.map(v=>e.jsxs("div",{children:[e.jsx("dt",{children:v.dt}),e.jsx("dd",{children:v.dd})]},v.dt))})]}),(n.challenge||n.solution)&&e.jsxs("div",{className:"grid12 cs",children:[n.challenge&&e.jsxs("div",{className:"k",children:[e.jsx("div",{className:"n",children:"01"}),e.jsx("h3",{children:"挑战"}),e.jsx("p",{children:n.challenge})]}),n.solution&&e.jsxs("div",{className:"k",children:[e.jsx("div",{className:"n",children:"02"}),e.jsx("h3",{children:"方案"}),e.jsx("p",{children:n.solution})]})]}),r&&e.jsx("div",{className:"prose",children:e.jsx(F,{remarkPlugins:[K],rehypePlugins:[V],components:{img:({src:v,alt:k})=>e.jsx("img",{src:v,alt:k||"",onError:z=>{z.target.style.display="none"}}),video:({src:v,poster:k,...z})=>e.jsx("video",{...z,src:v,poster:k||d[0],controls:!0,playsInline:!0,preload:"metadata"})},children:r})}),l.length>0&&e.jsxs("div",{className:"gal",children:[l[0]&&e.jsxs("figure",{className:"fig",children:[e.jsx("img",{src:l[0],alt:"",onError:v=>{v.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",C(1)]}),e.jsxs("span",{children:[C(1)," / ",C(d.length)]})]})]}),l.length>1&&e.jsx("div",{className:"grid12 two",children:l.slice(1,3).map((v,k)=>e.jsxs("figure",{className:"fig",children:[e.jsx("img",{src:v,alt:"",loading:"lazy",onError:z=>{z.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",C(k+2)]}),e.jsxs("span",{children:[C(k+2)," / ",C(d.length)]})]})]},v))}),i&&l.slice(3).map((v,k)=>e.jsxs("figure",{className:"fig",style:{marginTop:24},children:[e.jsx("img",{src:v,alt:"",loading:"lazy",onError:z=>{z.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",C(k+4)]}),e.jsxs("span",{children:[C(k+4)," / ",C(d.length)]})]})]},v)),!i&&h>0&&e.jsx("div",{style:{marginTop:28,display:"flex",justifyContent:"center"},children:e.jsxs("button",{type:"button",className:"lnk",onClick:()=>o(!0),children:["展开其余 ",h," 张图 ↓"]})})]}),e.jsxs("div",{className:"grid12 pn",children:[e.jsxs("div",{className:"back",children:[e.jsx("span",{className:"lab",children:"目录"}),e.jsxs(N,{className:"lnk",to:n.group==="笔记"?"/tutorial":"/work",children:["← 返回",n.group==="笔记"?"笔记":"作品"]})]}),e.jsxs(N,{className:"nx",to:m.href,children:[e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"下一件 →"}),e.jsx("h4",{children:m.title}),e.jsxs("p",{children:[m.subtitle?`${m.subtitle} · `:"",m.yearLabel]})]}),e.jsx("div",{className:"th",children:e.jsx(Me,{work:m,showGo:!1})})]})]})]}),e.jsx(X,{})]})}const Bt=["城市气候与韧性","AI 辅助城市规划","机器学习与数据分析","空间统计与 GIS","React / Next.js 生态","TypeScript 架构","WebGL / Three.js 3D 可视化","UI 设计系统"],te=[{date:"2026.07",event:"IACP 第 20 届年会",city:"西安",title:"Nonlinear Impacts of Urban Form on Urban Heat Islands — Seoul",format:"口头报告"},{date:"2026.01",event:"39th AAAI Workshop · AI for Urban Planning",city:"新加坡",title:"Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales",format:"海报"},{date:"2025.10",event:"ACSP 第 65 届年会",city:"明尼阿波利斯",title:"Nonlinear relationships between urban form and extreme heat (XAI)",format:"口头报告"},{date:"2025.07",event:"IACP 第 19 届年会",city:"厦门",title:"Knowledge Graph Generation from Urban Planning Texts",format:"口头报告"},{date:"2025.06",event:"CUPUM",city:"伦敦",title:"Knowledge Graph Generation from Urban Planning Texts",format:"口头报告"},{date:"2025.04",event:"ICUA 第 52 届",city:"温哥华",title:"Local Climate Zone and Urban Heat Resilience — New York",format:"口头报告"},{date:"2025.02",event:"39th AAAI Workshop · AI for Urban Planning",city:"费城",title:"Knowledge Graph Generation from Urban Planning Texts",format:"海报"},{date:"2024.10",event:"UDIK 秋季学术会议",city:"首尔",title:"Decentralized future urban design based on neurons",format:"口头报告"}],Gt="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/",Ot=[{name:"亚洲设计学年奖 银奖、铜奖、优秀奖",year:"2023"},{name:"米兰设计周省级一等奖",year:"2023",file:"米兰设计周2023.jpg"},{name:"中央国际玻璃国际建筑设计竞赛 佳作奖",year:"2023",file:"中央国际玻璃竞赛2023.jpg"},{name:"“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖",year:"2022",files:[{file:"互联网+省赛市赛名单2022.jpg",label:"武汉市银奖 / 湖北省铜奖名单"},{file:"互联网+省赛铜奖2022.jpg",label:"省赛铜奖证书"}]},{name:"eVolo 摩天大楼建筑竞赛 编辑部推荐奖",year:"2022",file:"evolo摩天大楼竞赛2022.jpg"},{name:"腾讯游戏极限开发挑战赛 金奖",year:"2021",file:"腾讯华科Gamejams金奖2021.jpg"}],Ut=[{name:"最佳跨界融合奖 · 同济 AI4CITIES 工作坊",year:"2025",file:"AI4CITIES最佳跨界融合奖.jpg"},{name:"国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》",year:"2023"},{name:"Digital Futures workshop 参与证书",year:"2023",file:"digitalfuture2023.jpg"}];function Ee(c){var t;return(t=c.files)!=null&&t.length?c.files:c.file?[{file:c.file}]:[]}function Wt(){const[c,t]=s.useState(null),[n,a]=s.useState(0),[b,p]=s.useState(!1),[i,o]=s.useState(!1);s.useEffect(()=>{const r=window.matchMedia("(max-width: 768px)"),d=()=>o(r.matches);return d(),r.addEventListener("change",d),()=>r.removeEventListener("change",d)},[]),s.useEffect(()=>{if(!c)return;const r=d=>{d.key==="Escape"&&t(null)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[c]);const f=i&&!b?te.slice(0,4):te,u=c?Ee(c):[];return e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"w ah",children:[e.jsxs("div",{className:"grid12",children:[e.jsx("h1",{children:"关于"}),e.jsx("div",{className:"pic",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png",alt:"林丽丽"})}),e.jsx("p",{className:"lead",children:"我喜欢设计，也喜欢写代码。"})]}),e.jsxs("div",{className:"grid12 bio",children:[e.jsx("div",{className:"l",children:e.jsx("span",{className:"lab",children:"林丽丽 · Lili Lin"})}),e.jsxs("div",{className:"t",children:[e.jsx("p",{children:"我是林丽丽，毕业于首尔大学城市与区域规划专业，拥有华中科技大学建筑学背景。"}),e.jsx("p",{children:"我关注 AI 与产品创新，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。"}),e.jsx("p",{children:"与此同时，我持续探索 AI × 城市 × 空间的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。"}),e.jsx("p",{children:"我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。"})]}),e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"lab",children:"教育"}),e.jsxs("div",{children:["首尔大学",e.jsx("br",{}),"城市与区域规划"]}),e.jsxs("div",{style:{marginTop:14},children:["华中科技大学",e.jsx("br",{}),"建筑学"]})]})]}),e.jsxs("div",{className:"blk",children:[e.jsx(M,{n:"01",title:"方向与能力",en:"Competencies"}),e.jsx("div",{className:"grid12 comp",children:Bt.map((r,d)=>e.jsxs("div",{children:[e.jsx("span",{children:String(d+1).padStart(2,"0")}),r]},r))})]}),e.jsxs("div",{className:"blk",children:[e.jsx(M,{n:"02",title:"学术报告",en:"Talks",right:e.jsx("span",{children:"8 场 · 2024–2026"})}),e.jsx("div",{className:"tk",children:f.map(r=>e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"d",children:r.date}),e.jsx("span",{className:"e",children:r.event}),e.jsx("span",{className:"c",children:r.city}),e.jsx("span",{className:"tt",children:r.title}),e.jsx("span",{className:"f",children:r.format})]},r.date+r.event))}),i&&e.jsx("button",{type:"button",className:"lnk",style:{marginTop:16},onClick:()=>p(r=>!r),children:b?"收起":`展开其余 ${te.length-4} 场`})]}),e.jsxs("div",{className:"blk",children:[e.jsx(M,{n:"03",title:"竞赛与项目",en:"Awards",right:e.jsx("span",{children:"带 ⊕ 的条目可点开证书"})}),e.jsxs("div",{className:"grid12 aw",children:[e.jsxs("div",{className:"col",children:[e.jsxs("h3",{children:["竞赛奖项",e.jsx("em",{children:"Competitions"})]}),Ot.map(r=>e.jsx(he,{item:r,onOpen:d=>{t(d),a(0)}},r.name))]}),e.jsxs("div",{className:"col",children:[e.jsxs("h3",{children:["项目与其他",e.jsx("em",{children:"Projects"})]}),Ut.map(r=>e.jsx(he,{item:r,onOpen:d=>{t(d),a(0)}},r.name))]})]})]}),e.jsxs("div",{className:"blk",children:[e.jsx(M,{n:"04",title:"链接",en:"Links"}),e.jsxs("div",{className:"lk",children:[e.jsxs("a",{href:"https://www.instagram.com/lililin_portfolio/",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"Instagram"}),e.jsx("span",{children:"instagram.com/lililin_portfolio"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:"https://github.com/lililin0324",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"GitHub"}),e.jsx("span",{children:"github.com/lililin0324"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/lililin0324",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"LinkedIn"}),e.jsx("span",{children:"linkedin.com/in/lililin0324"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:`mailto:${O}`,children:[e.jsx("b",{children:"邮件"}),e.jsx("span",{children:O}),e.jsx("i",{children:"↗"})]})]})]}),e.jsxs("div",{className:"grid12 mjs",children:[e.jsx("div",{className:"im",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg",alt:""})}),e.jsxs("div",{className:"tx",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"lab",children:[e.jsx("span",{className:"sq"})," 另见 · 外部站点"]}),e.jsx("h3",{children:"幕景宇宙"}),e.jsx("p",{children:"幕景宇宙是独立于本作品集的另一个官方站点。"})]}),e.jsx("a",{className:"btn",href:je,target:"_blank",rel:"noopener",style:{alignSelf:"flex-start"},children:"幕景宇宙官网 ↗"})]})]})]}),e.jsx(X,{}),c&&u[n]&&Pe.createPortal(e.jsxs("div",{className:"lightbox",onClick:()=>t(null),role:"dialog","aria-modal":"true",children:[e.jsx("button",{type:"button",className:"x","aria-label":"关闭",onClick:()=>t(null),children:"×"}),e.jsxs("figure",{onClick:r=>r.stopPropagation(),children:[e.jsx("img",{src:`${Gt}${encodeURIComponent(u[n].file)}`,alt:c.name}),e.jsxs("figcaption",{children:[c.name," · ",c.year,u.length>1?` · ${n+1} / ${u.length}`:"",u.length>1&&e.jsx("button",{type:"button",className:"lnk",style:{color:"#fff",marginLeft:12},onClick:()=>a(r=>(r+1)%u.length),children:"下一张"})]})]})]}),document.body)]})}function he({item:c,onOpen:t}){return Ee(c).length>0?e.jsxs("button",{type:"button",className:"it",onClick:()=>t(c),children:[e.jsx("b",{children:c.year}),e.jsx("span",{children:c.name}),e.jsx("i",{children:"⊕"})]}):e.jsxs("div",{className:"it",style:{cursor:"default"},children:[e.jsx("b",{children:c.year}),e.jsx("span",{children:c.name}),e.jsx("i",{})]})}function Ht(){const{pathname:c}=ve(),[t,n]=s.useState(!1),[a,b]=s.useState(""),p=s.useRef(c);return s.useEffect(()=>{const i=document.querySelector("main > section");if(i instanceof HTMLElement&&(i.scrollTop=0),p.current===c)return;p.current=c;const o=Hc(c);b(o&&o.group!=="笔记"?`${C(o.no)} / ${L}  ${o.title}`:"");const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches;n(!0);const u=window.setTimeout(()=>n(!1),f?160:760);return()=>window.clearTimeout(u)},[c]),e.jsxs("div",{className:t?"curtain go":"curtain","aria-hidden":"true",children:[e.jsx("i",{className:"line"}),a]})}const $t=s.lazy(()=>A(()=>import("./clusteringeomap-4kMsQJJH.js"),__vite__mapDeps([31,1,2,3,7,8,5]),import.meta.url)),Ft=[{key:"",label:"Home"},{key:"product",label:"Product"},{key:"game",label:"Game"},{key:"ai",label:"AI"},{key:"planning",label:"Planning"},{key:"platform",label:"Platform"},{key:"tutorial",label:"Tutorial"},{key:"blog",label:"Blog"},{key:"about",label:"About"}],Vt={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},R=({value:c,transform:t})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:t,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((n,a)=>e.jsx("span",{className:"flex items-center justify-center",children:Vt[c].includes(a)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},a))}),Kt=()=>{const[c,t]=s.useState(!1),[n,a]=s.useState(!1),[b,p]=s.useState({x:0,y:0}),i="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili",[o,f]=s.useState(`${i}/lili_01.png`),[u,r]=s.useState("Exploring the intersection of technology and creativity."),d=ve(),l=_e(),g=d.pathname.split("/").filter(Boolean)[0]||"",m={product:`${i}/lili_05.png`,game:`${i}/lili_03.png`,ai:`${i}/lili_07.png`,platform:`${i}/lili_11.png`,tutorial:`${i}/lili_04.png`,about:`${i}/lili_02.png`,planning:`${i}/lili_06.png`},x=[`${i}/lili_01.png`,`${i}/lili_07.png`,`${i}/lili_08.png`,`${i}/lili_09.png`,`${i}/lili_10.png`,`${i}/lili_12.png`],j=["探索科技与创意的交汇点。","把数据转化为有意义的故事。","构建能激发灵感的数字体验。","连接产品与开发的桥梁。","创造在真实世界中落地的解决方案。","热衷于地理空间技术与城市规划。"],y=k=>k[Math.floor(Math.random()*k.length)];s.useEffect(()=>{f(m[g]??y(x)),r(y(j))},[g]);const v=()=>{p(U=>({x:U.x+720+Math.round(Math.random()*360),y:U.y+720+Math.round(Math.random()*360)}));const k=Wc.filter(U=>U!==d.pathname),z=k[Math.floor(Math.random()*k.length)];z&&setTimeout(()=>l(z),900)};return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${n?"h-0 border-b-0 overflow-hidden opacity-0":""}`,children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 flex-1 items-center",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("button",{onClick:()=>t(!c),className:"icon-btn","aria-expanded":c,"aria-label":c?"Hide profile panel":"Show profile panel",title:c?"Hide profile panel":"Show profile panel",children:e.jsxs("span",{className:"flex flex-col items-center justify-center gap-[3px]","aria-hidden":"true",children:[e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"}),e.jsx("span",{className:`block h-px w-4 bg-current transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`}),e.jsx("span",{className:"block h-px w-4 bg-current transition-transform duration-300"})]})}),e.jsxs(N,{to:"/",className:"group flex min-w-0 items-baseline gap-2.5",children:[e.jsx("span",{className:"truncate text-lg font-bold tracking-masthead md:text-xl",children:"林丽丽 Lili Lin"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule sm:block","aria-hidden":"true"})]})]}),e.jsx("nav",{className:"-mx-1 flex min-w-0 overflow-x-auto hide-scrollbar",children:e.jsx("ul",{className:"flex shrink-0 items-stretch",children:Ft.map(k=>{const z=g===k.key;return e.jsx("li",{className:"flex",children:e.jsxs(N,{to:`/${k.key}`,onClick:()=>{window.innerWidth<768&&t(!1)},"aria-current":z?"page":void 0,className:`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${z?"text-ink":"text-ink-3 hover:text-ink"}`,children:[k.label,e.jsx("span",{className:`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${z?"scale-x-100":"scale-x-0"}`,"aria-hidden":"true"})]})},k.key||"home")})})})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[e.jsx(Ct,{}),e.jsxs("button",{onClick:v,className:"btn-ghost hidden !px-3 sm:inline-flex",title:"随机探索一个项目",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${b.x}deg) rotateY(${b.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(R,{value:1,transform:"translateZ(10px)"}),e.jsx(R,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(R,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(R,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(R,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(R,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]}),e.jsx("button",{onClick:()=>a(!0),className:"icon-btn hidden sm:inline-flex",title:"Collapse header","aria-label":"Collapse header",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})})]})]})}),n&&e.jsx("button",{onClick:()=>a(!1),className:"group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200",title:"Expand header","aria-label":"Expand header",children:e.jsx("svg",{className:"h-3 w-3 text-ink-3 transition-colors group-hover:text-ink",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})}),e.jsxs("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:[c&&e.jsx("aside",{className:"z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72",children:e.jsxs("div",{className:"flex flex-col gap-8 p-5",children:[o&&e.jsx("img",{src:o,alt:"Lili's avatar",className:"w-full border border-rule bg-surface-2 object-contain"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Profile"}),e.jsx("h2",{className:"mt-2 text-xl font-bold tracking-masthead",children:"Lili Lin"}),e.jsx("p",{className:"text-sm text-ink-2",children:"林丽丽"})]}),e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"设计师 · 开发者 · 产品创作者"}),e.jsx("p",{className:"text-sm leading-relaxed text-ink-2",children:"创造有意义的数字体验，连接技术与创意。"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("hr",{className:"hairline"}),e.jsx("p",{className:"border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2",children:u}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(ce,{href:"https://github.com/lililin0324",label:"GH"}),e.jsx(ce,{href:"mailto:lili0324@snu.ac.kr",label:"EM"}),e.jsx(ce,{href:"https://www.linkedin.com/in/lililin0324",label:"LK"})]})]})]})}),e.jsxs("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:[e.jsx(Ht,{}),e.jsxs(se,{children:[e.jsx(I,{path:"/",element:e.jsx(Dt,{})}),e.jsx(I,{path:"/work",element:e.jsx(_,{scope:"all"})}),e.jsx(I,{path:"/planning",element:e.jsx(_,{scope:"planning"})}),e.jsx(I,{path:"/planning/:id",element:e.jsx(B,{routeType:"planning"})}),e.jsx(I,{path:"/product",element:e.jsx(_,{scope:"product"})}),e.jsx(I,{path:"/product/:id",element:e.jsx(B,{routeType:"product"})}),e.jsx(I,{path:"/game",element:e.jsx(_,{scope:"game"})}),e.jsx(I,{path:"/game/:id",element:e.jsx(B,{routeType:"game"})}),e.jsx(I,{path:"/ai",element:e.jsx(_,{scope:"ai"})}),e.jsx(I,{path:"/ai/:id",element:e.jsx(B,{routeType:"ai"})}),e.jsx(I,{path:"/platform",element:e.jsx(tt,{data:ne,type:"platform"})}),e.jsx(I,{path:"/platform/:id",element:e.jsx(It,{data:ne,type:"platform"})}),e.jsx(I,{path:"/tutorial",element:e.jsx(_,{scope:"notes"})}),e.jsx(I,{path:"/tutorial/:id",element:e.jsx(B,{routeType:"tutorial"})}),e.jsx(I,{path:"/clusteringeomap",element:e.jsx(s.Suspense,{fallback:null,children:e.jsx($t,{})})}),e.jsx(I,{path:"/about",element:e.jsx(Wt,{})}),e.jsx(I,{path:"/contact",element:e.jsx(zt,{})})]})]})]})]})},Zt=`---
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
`,Qt=/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/,Yt=/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/,Xt=/^\s*-\s*(.*)$/,Jt=65279;function en(c){const n=(c.charCodeAt(0)===Jt?c.slice(1):c).replace(/\r\n/g,`
`),a=Qt.exec(n);if(!a)return{data:{},content:n};const b={};let p=null;for(const i of a[1].split(`
`)){if(!i.trim()||i.trimStart().startsWith("#"))continue;const o=Xt.exec(i);if(o&&p){b[p].push(pe(o[1]));continue}const f=Yt.exec(i);if(!f)continue;const[,u,r]=f,d=r.trim();if(d===""){p=u,b[u]=[];continue}p=null,b[u]=d.startsWith("[")&&d.endsWith("]")?cn(d.slice(1,-1)):pe(d)}return{data:b,content:n.slice(a[0].length)}}function pe(c){const t=c.trim(),n=t[0];return t.length>=2&&(n==='"'||n==="'")&&t.endsWith(n)?t.slice(1,-1).replace(/\\(["'])/g,"$1"):t}function cn(c){return c.split(",").map(t=>pe(t)).filter(t=>t!=="")}const tn=Object.assign({"./blog/hello-world.md":Zt});function nn(c){return c instanceof Date?c.toISOString().slice(0,10):typeof c=="string"?c.trim():""}function an(c,t){const n=c.split("/").pop().replace(/\.md$/,"");try{const{data:a,content:b}=en(t);return{slug:n,title:typeof a.title=="string"&&a.title?a.title:n,date:nn(a.date),description:typeof a.description=="string"?a.description:"",tags:Array.isArray(a.tags)?a.tags.map(String):[],cover:typeof a.cover=="string"&&a.cover?a.cover:void 0,content:b}}catch(a){return console.error(`[blog] 解析 ${c} 失败，已跳过 frontmatter`,a),{slug:n,title:n,date:"",description:"",tags:[],content:t}}}const $=Object.entries(tn).map(([c,t])=>an(c,t)).sort((c,t)=>t.date.localeCompare(c.date)),bn=c=>$.find(t=>t.slug===c),D={repo:"LiliLIN0324/lililin0324.github.io",repoId:"R_kgDOQpt6HQ",category:"Announcements",categoryId:"DIC_kwDOQpt6Hc4DF4Yk",mapping:"specific",lang:"zh-CN",theme:"preferred_color_scheme"},pn=({term:c})=>{const t=s.useRef(null),n=!!D.categoryId;return s.useEffect(()=>{if(!n)return;const a=t.current;if(!a)return;a.innerHTML="";const b=document.createElement("script");b.src="https://giscus.app/client.js",b.async=!0,b.crossOrigin="anonymous",b.setAttribute("data-repo",D.repo),b.setAttribute("data-repo-id",D.repoId),b.setAttribute("data-category",D.category),b.setAttribute("data-category-id",D.categoryId),b.setAttribute("data-mapping",D.mapping),b.setAttribute("data-term",c),b.setAttribute("data-strict","0"),b.setAttribute("data-reactions-enabled","1"),b.setAttribute("data-emit-metadata","0"),b.setAttribute("data-input-position","top"),b.setAttribute("data-theme",D.theme),b.setAttribute("data-lang",D.lang),b.setAttribute("data-loading","lazy"),a.appendChild(b)},[c,n]),n?e.jsx("div",{ref:t,className:"giscus mt-10"}):e.jsxs("div",{className:"border border-dashed border-rule p-6",children:[e.jsx("p",{className:"eyebrow mb-2",children:"Comments"}),e.jsxs("p",{className:"text-sm leading-relaxed text-ink-3",children:["评论尚未配置。在"," ",e.jsx("code",{className:"font-mono text-ink-2",children:"src/blog/BlogComments.tsx"})," ","的 ",e.jsx("code",{className:"font-mono text-ink-2",children:"GISCUS_CONFIG"})," 里填入 repoId 与 categoryId 即可（仓库的 Discussions 已开启）。"]})]})},sn={table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:a,className:"mb-5 text-2xl font-bold tracking-tight text-ink first:mt-0",...t,children:c})},h2:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:a,className:"mt-10 mb-4 text-xl font-bold tracking-tight text-ink",...t,children:c})},h3:({children:c,...t})=>{const a=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:a,className:"mt-8 mb-3 text-lg font-bold text-ink",...t,children:c})},h4:({children:c,...t})=>e.jsx("h4",{className:"mt-6 mb-2 text-base font-semibold text-ink",...t,children:c}),h5:({children:c,...t})=>e.jsx("h5",{className:"mt-5 mb-2 text-sm font-semibold text-ink-2",...t,children:c}),h6:({children:c,...t})=>e.jsx("h6",{className:"mt-4 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...t,children:c}),p:({children:c,...t})=>e.jsx("p",{className:"mb-5 leading-relaxed text-ink-2",...t,children:c}),a:({children:c,href:t,...n})=>e.jsx("a",{href:t,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...n,children:c}),img:({src:c,alt:t,...n})=>e.jsx("img",{src:c,alt:t,className:"my-6 h-auto w-full border border-rule object-cover",onError:a=>{a.target.style.display="none"},...n}),ul:({children:c,...t})=>e.jsx("ul",{className:"mb-5 list-disc space-y-1 pl-6 text-ink-2",...t,children:c}),ol:({children:c,...t})=>e.jsx("ol",{className:"mb-5 list-decimal space-y-1 pl-6 text-ink-2",...t,children:c}),li:({children:c,...t})=>e.jsx("li",{className:"leading-relaxed",...t,children:c}),blockquote:({children:c,...t})=>e.jsx("blockquote",{className:"my-6 border-l-2 border-accent pl-4 text-ink-2 italic",...t,children:c}),code:({className:c,children:t,...n})=>(c==null?void 0:c.includes("language-"))||typeof t=="string"&&t.includes(`
`)?e.jsx("code",{className:`${c||""} font-mono text-[13px] text-ink`,...n,children:t}):e.jsx("code",{className:"rounded border border-rule bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-ink",...n,children:t}),pre:({children:c,...t})=>e.jsx("pre",{className:"mb-5 overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas",...t,children:c}),hr:({...c})=>e.jsx("hr",{className:"my-10 border-0 border-t border-rule",...c})},rn=()=>{const{slug:c}=ie(),t=bn(c||"");return s.useEffect(()=>(t&&(document.title=`${t.title} · Lili's Blog`),()=>{document.title="Lili Lin | Portfolio"}),[t]),t?e.jsx("article",{className:"shell animate-rise-in py-10 md:py-14",children:e.jsxs("div",{className:"mx-auto max-w-3xl",children:[e.jsxs("div",{className:"mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx(N,{to:"/blog",className:"transition-colors hover:text-ink",children:"← 全部文章"}),e.jsx("span",{className:"h-3 w-px bg-rule","aria-hidden":"true"}),e.jsx("span",{children:t.date||"未标注日期"})]}),e.jsx("h1",{className:"text-display-sm mb-4",children:t.title}),t.description&&e.jsx("p",{className:"mb-6 max-w-measure text-base leading-relaxed text-ink-2",children:t.description}),t.tags.length>0&&e.jsx("div",{className:"mb-10 flex flex-wrap gap-1.5",children:t.tags.map(n=>e.jsx("span",{className:"chip",children:n},n))}),t.cover&&e.jsx("img",{src:t.cover,alt:"",className:"mb-10 w-full border border-rule object-cover"}),e.jsx("div",{className:"prose-custom border-t border-rule-strong pt-10 text-base leading-relaxed text-ink-2",children:e.jsx(F,{remarkPlugins:[K],rehypePlugins:[V],components:sn,children:t.content})}),e.jsx(pn,{term:`blog/${t.slug}`})]})}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Post not found"}),e.jsx(N,{to:"/blog",className:"btn-ghost mt-6",children:"← 返回博客"})]})})},dn=()=>(s.useEffect(()=>(document.title="Lili's Blog",()=>{document.title="Lili Lin | Portfolio"}),[]),$.length===0?e.jsxs("div",{className:"shell py-20 text-center",children:[e.jsx("p",{className:"eyebrow",children:"Blog"}),e.jsxs("p",{className:"mt-3 text-ink-3",children:["还没有文章，往 ",e.jsx("code",{className:"font-mono",children:"src/data/blog/"})," 里放一个 .md 文件即可。"]})]}):e.jsxs("div",{className:"shell animate-rise-in py-10 md:py-14",children:[e.jsxs("div",{className:"section-head mb-6",children:[e.jsx("p",{className:"eyebrow",children:"Blog / Index"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String($.length).padStart(2,"0")," Posts"]})]}),e.jsx("h1",{className:"text-display-sm mb-10",children:"写作"}),e.jsx("ul",{className:"border-t border-rule",children:$.map((c,t)=>e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs(N,{to:`/blog/${c.slug}`,className:"flex items-start gap-5 py-6 md:gap-8",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(t+1).padStart(2,"0")}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[e.jsx("h2",{className:"text-lg font-bold tracking-tight text-ink md:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:c.date})]}),c.description&&e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),c.tags.length>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tags.map(n=>e.jsx("span",{className:"chip",children:n},n))})]}),e.jsx("span",{className:"self-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-ink",children:"Read →"})]})},c.slug))})]})),gn=()=>e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:"shrink-0 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs(N,{to:"/blog",className:"group flex items-baseline gap-2.5",children:[e.jsx("span",{className:"text-lg font-bold tracking-masthead md:text-xl",children:"Lili's Blog"}),e.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 sm:inline",children:"notes & writing"})]}),e.jsx(N,{to:"/",className:"btn-ghost !px-3 !py-1.5",children:"← 返回作品集"})]})}),e.jsx("main",{className:"min-h-0 flex-1 overflow-y-auto",children:e.jsxs(se,{children:[e.jsx(I,{index:!0,element:e.jsx(dn,{})}),e.jsx(I,{path:":slug",element:e.jsx(rn,{})})]})}),e.jsx("footer",{className:"shrink-0 border-t border-rule bg-surface",children:e.jsxs("div",{className:"shell flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx("span",{children:"Lili Lin"}),e.jsxs("span",{children:["© ",new Date().getFullYear()]})]})})]});function on(){const[c,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:e.jsxs(se,{children:[e.jsx(I,{path:"/blog/*",element:e.jsx(gn,{})}),e.jsx(I,{path:"*",element:e.jsx(Kt,{})})]})}),!c&&e.jsx(Oe,{onFinish:()=>t(!0)})]})}Be.createRoot(document.getElementById("root")).render(e.jsx(on,{}));
