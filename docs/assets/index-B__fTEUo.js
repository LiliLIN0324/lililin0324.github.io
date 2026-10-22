const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ClusterVisualizer-C2m5FIL0.js","./react-vendor-Dn-0NGU0.js","./geo-BbprxUkj.js","./vendor-BzO13j2l.js","./plotly-DiRDnMYc.js","./icons-eCj0hK1G.js","./UR-platform-r-N6UDpW.js","./maplibre-D_yVVxqp.js","./maplibre-PhPnDjd-.css","./heatmapper-D9BE04xi.js","./openstreetmap-B8v-8o8D.js","./leaflet-SslAMvT9.js","./leaflet-Dgihpmma.css","./photogeo-a_Ws0J-o.js","./photogeomap-BVuvpOJp.js","./clusteringevents-L250qWFX.js","./framer-BpNNdg_d.js","./litflow-C2-od8WH.js","./epsteinscret-CGEHc4ju.js","./wechatgame-BI6FzIpz.js","./72HourGameJamDemo-85O3WMMg.js","./PeaceEliteHustCampusDemo-qsd1UJ0C.js","./BMWMetaIslandDemo-Cfc247_T.js","./riffle-CTHd6I24.js","./genstyle-DQyZfKXW.js","./genshot-CIUvqG-5.js","./dragon-diffusion-Dlj0L8S7.js","./anyreal-BxsD4wrj.js","./previous-archi-work-U6Hrv95D.js","./hongqiqu-cD8rl8Aw.js","./scendance-__eetAMS.js","./clusteringeomap-4kMsQJJH.js"])))=>i.map(i=>d[i]);
import{r as p,j as e,L as I,u as je,R as tc,a as nc,c as ye,d as Te,e as xe,f as L,H as ac,g as bc}from"./react-vendor-Dn-0NGU0.js";import{A as pc,m as fe}from"./framer-BpNNdg_d.js";import{M as ne,r as ae,a as be}from"./markdown-cHbBfKKj.js";import"./geo-BbprxUkj.js";import"./vendor-BzO13j2l.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const b of a)if(b.type==="childList")for(const i of b.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const b={};return a.integrity&&(b.integrity=a.integrity),a.referrerPolicy&&(b.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?b.credentials="include":a.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function n(a){if(a.ep)return;a.ep=!0;const b=t(a);fetch(a.href,b)}})();function ic({onFinish:c}){const[r,t]=p.useState(!0),n=p.useRef(null),a=p.useRef({x:-1e3,y:-1e3});return p.useEffect(()=>{const b=n.current;if(!b)return;const i=b.getContext("2d");if(!i)return;let o,g=[];const f=()=>{b.width=window.innerWidth,b.height=window.innerHeight},d=m=>{a.current={x:m.clientX,y:m.clientY}},s=m=>{m.touches.length>0&&(a.current={x:m.touches[0].clientX,y:m.touches[0].clientY})};window.addEventListener("resize",f),window.addEventListener("mousemove",d),window.addEventListener("touchmove",s),f();class u{constructor(){this.x=Math.random()*b.width,this.y=Math.random()*b.height,this.baseX=this.x,this.baseY=this.y,this.vx=(Math.random()-.5)*.5,this.vy=(Math.random()-.5)*.5,this.size=Math.random()*2+.5,this.density=Math.random()*30+1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>b.width)&&(this.vx*=-1),(this.y<0||this.y>b.height)&&(this.vy*=-1);let j=a.current.x-this.x,l=a.current.y-this.y,h=Math.sqrt(j*j+l*l),y=j/h,v=l/h;const N=150;let C=(N-h)/N;h<N&&(this.x-=y*C*this.density*.5,this.y-=v*C*this.density*.5)}draw(){i&&(i.fillStyle="rgba(255, 255, 255, 0.8)",i.beginPath(),i.arc(this.x,this.y,this.size,0,Math.PI*2),i.fill())}}for(let m=0;m<120;m++)g.push(new u);const k=()=>{i.clearRect(0,0,b.width,b.height);for(let m=0;m<g.length;m++){g[m].update(),g[m].draw();for(let j=m+1;j<g.length;j++){const l=g[m].x-g[j].x,h=g[m].y-g[j].y,y=Math.sqrt(l*l+h*h);y<100&&(i.beginPath(),i.strokeStyle=`rgba(255, 255, 255, ${.2*(1-y/100)})`,i.lineWidth=.6,i.moveTo(g[m].x,g[m].y),i.lineTo(g[j].x,g[j].y),i.stroke())}}o=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",f),window.removeEventListener("mousemove",d),window.removeEventListener("touchmove",s)}},[]),e.jsx(pc,{onExitComplete:c,children:r&&e.jsxs(fe.div,{onClick:()=>t(!1),initial:{opacity:1},exit:{opacity:0,filter:"blur(30px)",transition:{duration:1.2,ease:[.43,.13,.23,.96]}},className:"fixed inset-0 z-50 bg-black cursor-pointer overflow-hidden flex flex-col items-center justify-center",children:[e.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full "}),e.jsx("div",{className:"relative z-20 text-center  select-none",children:e.jsx(fe.p,{initial:{opacity:0,y:10},animate:{opacity:.7,y:0},transition:{duration:2},className:"text-white font-extralight text-lg md:text-sm uppercase tracking-[0.8em]",children:"LILI LIN's Space 林丽丽"})}),e.jsx(fe.div,{initial:{opacity:0},animate:{opacity:.4},className:"absolute bottom-12 text-[10px] text-white font-light tracking-[0.5em] uppercase",children:"Touch the stars to enter"})]},"intro-screen")})}const sc="modulepreload",dc=function(c,r){return new URL(c,r).href},Se={},S=function(r,t,n){let a=Promise.resolve();if(t&&t.length>0){let i=function(d){return Promise.all(d.map(s=>Promise.resolve(s).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),f=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));a=i(t.map(d=>{if(d=dc(d,n),d in Se)return;Se[d]=!0;const s=d.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!n)for(let j=o.length-1;j>=0;j--){const l=o[j];if(l.href===d&&(!s||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${u}`))return;const m=document.createElement("link");if(m.rel=s?"stylesheet":sc,s||(m.as="script"),m.crossOrigin="",m.href=d,f&&m.setAttribute("nonce",f),document.head.appendChild(m),s)return new Promise((j,l)=>{m.addEventListener("load",j),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${d}`)))})}))}function b(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&b(o.reason);return r().catch(b)})},gc=`---\r
id: "00"\r
slug: "chicken-utopia"\r
title: "CHICKEN UTOPIA"\r
category: "planning"\r
year: "2022.4-2022.7"\r
description: ""\r
tech: ["Rhino", "建筑设计"]\r
abstract: "随着城市规模的扩大，乡村生活和田园风光离我们的生活越来越远。在武汉，年均鸡肉消费量达10.2万吨，需要约6万只鸡的供应。这些鸡全部来自远离城市的农村地区，养殖条件可能不卫生，运输和加工过程也无法得到保障。同时，鸡肉品质和销售渠道也存在相关问题。"\r
solution: "因此，我们旨在通过 CHICKEN TOPIA 项目将鸡肉养殖产业带入城市。透明的工业建筑和建筑结构可以解决高效养鸡、健康鸡肉消费的问题，同时为城市居民提供乡村记忆。为了尽量减少城市土地的占用，该结构采用垂直发展方向，并按照产业链逻辑划分为养殖区、生产区和综合商业区，所有这些区域共享一定的拓扑联系，从而模糊建筑空间，创造出折叠飞扬的空间结构。在建筑内部，每个区域由更小的模块组成，这些模块可以根据场地条件及时调整建筑的内部功能。"\r
hasDemo: false\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/99.jpg"\r
---\r
随着城市规模的扩大，乡村生活和田园风光离我们的生活越来越远。在武汉，年均鸡肉消费量达10.2万吨，需要约6万只鸡的供应。这些鸡全部来自远离城市的农村地区，养殖条件可能不卫生，运输和加工过程也无法得到保障。同时，鸡肉品质和销售渠道也存在相关问题。\r
\r
因此，我们旨在通过 CHICKEN TOPIA 项目将鸡肉养殖产业带入城市。透明的工业建筑和建筑结构可以解决高效养鸡、健康鸡肉消费的问题，同时为城市居民提供乡村记忆。为了尽量减少城市土地的占用，该结构采用垂直发展方向，并按照产业链逻辑划分为养殖区、生产区和综合商业区，所有这些区域共享一定的拓扑联系，从而模糊建筑空间，创造出折叠飞扬的空间结构。在建筑内部，每个区域由更小的模块组成，这些模块可以根据场地条件及时调整建筑的内部功能。\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/chicken-utopia/cover.mp4"></video>\r
`,oc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/99.jpg"\r
---\r
Neurotopia aims to provide shared living and entrepreneurial spaces primarily for young people. This urban design project is located in a former industrial area in Hanyang District, Wuhan, Hubei Province, China. By creating a new metaverse for animation enterprises in Hanyang, the project seeks to revitalize the site and establish a decentralized future community based on the theories of neuronal biological properties and complex systems adaptation.\r
\r
Specifically, the design introduces the concept of neurons, dividing the space into three categories: "nodes," "connections," and "voids“. Vertical transportation hubs are established at the nodes, connecting prefabricated modular units to each node, promoting a smart city design concept that integrates new transportation and intelligent community systems. In the voids between the nodes, incubator modular units are created to accommodate the evolving scale of enterprises, fostering a dynamic, shared, and co-creative living environment.\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/neurotopia/cover.mp4"></video>\r
</div>\r
\r
# 效果展示\r
\r
---\r
`,fc=`---\r
id: "01"\r
slug: "previous-archi-work"\r
title: "previous-archi-work"\r
category: "planning"\r
year: "2020-2024"\r
description: ""\r
tech: ["Rhino","architecture","design"]\r
abstract: ""\r
solution: ""\r
hasDemo: true\r
demoOnly: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/海底避难所.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/piledark.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/东湖书吧_1.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/孵化器.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/城市绿脊.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/露营地.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/浮亭_1.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/图书馆.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/武当山.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/水彩作品.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work/硬笔作品.jpg"\r
---\r
# 所有的项目具体情况请点击demo查看 \r
\r
---\r
`,lc=`---\r
id: "07"\r
slug: "cluster-visualizer-3d"\r
title: "Cluster Visualizer 3D"\r
category: "Global heat mapping"\r
year: "2024-present"\r
description: "基于PCA和K-Means的高维数据聚类3D探索"\r
tech: ["Python","Three.js","React", "SOM","K-Means"]\r
abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, project visualizes complex data patterns in an intuitive manner."\r
challenge: "compressed 223 cities in global data and revelas pattern from window period of time-series data from 2017 to 2019 with both day and night time data"\r
solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance."\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/100.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/101.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/102.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/103.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/104.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/105.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/106.jpg"\r
---\r
项目代码库：\r
https://github.com/LiliLIN0324/gloabl-urban-heat\r
\r
# 项目介绍\r
\r
本项目的核心是一个基于 **SOM（自组织映射）+ K-means** 两阶段聚类方法的空间数据研究：对全球 **204 个城市**的城市热岛（Urban Heat Island, UHI）时空格局进行划分与可视化，并关联建筑、冠层、水体、绿地、山体等城市形态指标，探究「城市形态如何影响热岛强度」。配套的 3D 可视化工具则把这一高维聚类结果放到可交互的三维空间中，让复杂的数据格局变得一目了然。\r
\r
# 项目重点\r
基于 **SOM + K-means** 两阶段聚类，对全球 **204 个城市**的城市热岛时空序列（2017–2019、昼夜双时相、2,178 维特征、142,506 个网格）做格局划分，并结合城市形态指标分析热岛成因，配套 Three.js/React 交互式 3D 可视化。\r
\r
## 1. 项目速览\r
\r
| 维度 | 内容 |\r
|------|------|\r
| 研究对象 | 全球城市热岛（UHI）时空格局 |\r
| 样本规模 | 原始 269 城 → 清洗后 223 城 → 剔除南半球后 **204 城**（共 142,506 个空间网格单元） |\r
| 时间范围 | 2017–2019 三年 × 白天/夜间双时相 |\r
| 特征维度 | 2,178 维（UHI 7 天滑动平均时间序列） |\r
| 聚类方法 | 两阶段：SOM 自组织映射（降维）→ K-means（聚类） |\r
| 聚类方案 | K = 5 / 12 / 20 / 26 四组对照 |\r
| 城市形态指标 | 建筑高度/密度/容积率、冠层、绿地、水体/山体距离等 10+ 项 |\r
| 主要产出 | 聚类结果 Shapefile、热岛曲线图、形态指标空间分布图 |\r
\r
## 2. 研究背景与目标\r
\r
**城市热岛**是指城市建成区气温显著高于周边郊区的现象。本项目不只看「哪座城市热」，而是想回答两个问题：\r
\r
1. **全球城市的昼夜热岛规律有没有共性模式？** —— 用聚类把 204 座城市在 2017–2019 三年间白天/夜间的热岛变化曲线分成几类「格局」；\r
2. **城市形态如何影响热岛强度？** —— 把聚类结果与建筑、冠层、水体、绿地、山体等形态指标叠合分析，找出「哪些建设方式让城市更热 / 更凉」。\r
\r
具体研究目标：\r
\r
1. 处理 2017–2019 三年、白天/夜间两个时相的城市热岛滑动平均时间序列数据；\r
2. 用 **SOM** 将高维热岛时间序列映射到低维神经元网格，提取每个空间单元的最佳匹配单元（**BMU**）；\r
3. 对 SOM 神经元权重做 **K-means** 聚类，考察 K = 5 / 12 / 20 / 26，划分热岛格局类型；\r
4. 用**分区统计（Zonal Statistics）**计算建筑、冠层、水体、绿地、山体等城市形态指标；\r
5. 将聚类结果与形态指标合并，完成空间可视化与影响因素分析。\r
\r
## 3. 方法与流程总览\r
\r
> 遇到生词别慌，先看文末[术语速查](#附录术语速查)。核心链路其实只有三步：**算热岛 → SOM+K-means 分类 → 叠合形态指标找规律**。\r
\r
\`\`\`\r
全球影像 + 城市边界\r
   │  ① 预处理：逐日 UHI = 建成区 LST − 草地 LST，再做 7 天滑动平均\r
   ▼\r
UHI 滑动平均时间序列（每样本 2,178 维）\r
   │  ② SOM 把高维序列映射到 1,890 个神经元 → 每个网格得到 BMU 坐标\r
   ▼\r
   │  ③ 对神经元权重做 K-means（K = 5/12/20/26）\r
   ▼\r
每个空间网格的「聚类标签」\r
   │  ④ 分区统计算出形态指标 → 与聚类结果合并\r
   ▼\r
热岛格局类型图 + 城市形态对热岛的影响分析\r
\`\`\`\r
\r
整体流程共 **五个阶段**，每个阶段对应 \`coding/\` 下的一个 Notebook/脚本：\r
\r
| 阶段 | 文件 | 目的 | 主要产出 |\r
|------|------|------|----------|\r
| ① 数据预处理 | \`a_data_process.ipynb\` | 原始影像 → 城市热岛滑动平均时间序列 | 白天/夜间 UHI 序列 CSV |\r
| ② SOM + K-means 聚类（主流程） | \`b_SOM_kmeans_process.ipynb\` 及其 NEW / discord 变体 | 降维 + 聚类，输出各 K 值标签 | 聚类标签 CSV、SOM 模型、神经元权重 |\r
| ③ 形态指标分区统计 | \`c_Bui&Cano_data_zonalst.ipynb\` + \`e_Cost_DistWB.py\` | 建筑/冠层/水体/绿地/山体指标 | 各城市形态指标统计表 |\r
| ④ 合并与可视化 | \`d_zonalst&cluster_merge_visual.ipynb\` | 聚类 + 指标合并，制图 | Shapefile、空间分布图 |\r
| ⑤ 验证（辅助） | \`验证.ipynb\` | 对比本机与老师产出一致性 | 差异率为 0 的校验结果 |\r
\r
> 另有 \`CFA可视化.ipynb\`（CFA 结果可视化）为辅助脚本；\`main.py\` 是 PyCharm 新建项目的占位文件，无实际逻辑，可忽略。\r
\r
<!-- details -->\r
\r
## 7. 变量定义\r
\r
| 变量 | 含义 / 公式 |\r
|------|-------------|\r
| \`MEAN\` | 建筑高度（Building Height, m） |\r
| \`Buidensity\` | 建筑密度 = 建筑面积 / 用地面积 = Count × (10m × 10m) / cell(m²) |\r
| \`FAR\` | 容积率 = 建筑密度 × 建筑高度 / 层高 = \`Buidensity\` × \`MEAN\` / 3 |\r
| \`Candensity\` | 植被覆盖密度 = 植被面积 / 总面积 = Count × (25m × 25m) / cell(m²) |\r
| \`CanovRatio\` | 冠层体积比 = 冠层密度 × 植被高度 = \`Candensity\` × \`MEAN_2\` |\r
| \`Cluster\` | 聚类标签，最终方案 K = 5 / 12 / 20 / 26 |\r
| \`Place\` | 城市标签（label） |\r
| \`Place ID\` | 每个城市内部的编号 |\r
| \`Sum ID\` | 全样本编号 |\r
| \`City Name\` | 城市名 |\r
| \`Hemisphere\` | 所在半球 |\r
\r
> \`Count\` 为网格内像元个数，\`cell\` 为网格面积；建筑像元 10 m、冠层像元 25 m；\`MEAN_2\` 为植被（冠层）高度。\r
\r
## 8. 核心数据与产出\r
\r
| 文件 | 说明 |\r
|------|------|\r
| \`223_cities_combined_moving_ave_cluster.csv\` | 2,178 维热岛滑动平均特征 + 坐标/城市信息 + K_5/K_12/K_20/K_26 聚类标签 |\r
| \`223_cities_som_clustered_data.csv\` | 2,178 维特征 + \`Neuron_Coordinates\`（SOM 神经元坐标） |\r
| \`223_cities_combined_moving_ave_cluster_sort_xy.*\` | 精简后的聚类结果 Shapefile（X/Y/Place/City/Cluster） |\r
| \`BMUs.npy\` | 142,506 个空间单元 → 二维神经元坐标映射 |\r
| \`node_weights.npy\` | 1,890 个 SOM 神经元 × 2,178 维特征权重 |\r
\r
**关键规模参数**：\r
\r
- **样本**：最终 204 城（269 → 清洗 223 → 剔除南半球后 204，仅北半球），共 **142,506** 个空间网格单元；\r
- **特征维度**：**2,178** 维（2017–2019 年 × 白天/夜间 × 滑动平均），列名形如 \`gf_Day2017_001_to_gf_Day2017_007\`、\`gf_Nit2019_359_to_gf_Nit2019_365\`（\`Day\` 白天、\`Nit\` 夜间）；\r
- **SOM 规模**：1,890 个神经元；\r
- **聚类方案**：K = 5 / 12 / 20 / 26 四组对照。\r
`,uc=`---\r
id: "01"\r
slug: "hongqiqu"\r
title: "红旗渠遗产价值评估"\r
category: "planning"\r
year: "2022"\r
description: ""\r
tech: ["Rhino","architecture","design"]\r
abstract: ""\r
solution: ""\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu/99.jpg"\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_1.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/hongqiqu_2.mp4"></video>\r
</div>\r
\r
---\r
`,hc=`---\r
id: "04"\r
slug: "local-climate-zones-urban-heat-resilience"\r
title: "Local Climate Zones and Urban Heat Resilience"\r
category: "GIS & Spatial Analysis"\r
year: "2025-present"\r
description: "美国不同气候区的实证研究"\r
tech: ["GIS","Spatial Analysis"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/99.jpg"\r
---\r
# 效果展示\r
“局部气候区与城市热岛效应韧性：纽约实证研究”\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/local-climate-zones/cover.mp4"></video>\r
</div>\r
\r
> 2025.4，在加拿大温哥华举行的第52届国际城市事务会议（ICUA）上作口头报告\r
\r
## 更新后的版本\r
随着气候变化不断加剧，深入理解城市环境中的热韧性（Heat Resilience, HR）对于建设气候韧性城市至关重要。尽管已有大量研究探讨城市形态与城市热岛效应（Urban Heat Island, UHI）之间的关系，但针对热韧性的研究仍相对有限，许多研究仅关注单次极端高温事件。此外，如何将复杂的城市形态研究结果转化为实际可行的城市规划政策，仍然面临挑战。<br>\r
\r
局部气候区（Local Climate Zones, LCZ）提供了一种基于热环境特征的城市形态分类方法，对于政策制定者而言更加直观易懂。然而，现有大多数LCZ研究仍主要关注城市热岛效应，对热韧性的关注较少。本研究旨在弥补这一研究空白，探讨美国五个主要气候区中LCZ与热韧性之间的关系。基于美国能源部（DOE）Building America项目划分的不同气候区进行比较，进一步分析不同气候区在能源消耗和建成环境特征方面的差异，以及这些差异如何导致LCZ表现出共同特征与区域差异。<br>\r
\r
热韧性被定义为极端高温天气与正常高温天气之间地表温度（Land Surface Temperature, LST）的差值。**使用1990—2019年的气温数据，并依据气温第85百分位确定高温事件；同时使用2013—2019年的Landsat 8遥感影像，在去除云层后筛选云量最低的影像以获取相应的LST观测数据，**结合LCZ地图、GIS数据和人口普查区（Census Tract）信息，通过空间面板模型评估不同LCZ类型及大尺度景观因素对不同气候区热韧性的影响。考虑到不同气候区之间存在显著的温度差异，研究进一步揭示了各气候区在热韧性影响方面的显著差异。<br>\r
\r
在2013—2019年期间，通过筛选云量最低的遥感影像，研究依据气温百分位数确定了三组极端高温与正常高温事件。分析结果表明，与LCZ 2（紧凑型中层建筑）相比，LCZ 1（紧凑型高层建筑）和LCZ 4（开放型高层建筑）显著提高热韧性，而LCZ 3（紧凑型低层建筑）则降低热韧性。<br>\r
\r
在不同气候区中，我们假设温度和湿度的差异会导致LCZ产生不同的热韧性响应，并表现出不同程度的敏感性。研究选取纽约市作为湿润大陆性气候区（CZ-MixedHumid）的代表城市、西雅图作为海洋性气候区（Marine）的代表城市、洛杉矶作为炎热干燥气候区（Hot-Dry）的代表城市、芝加哥作为寒冷气候区（Cold）的代表城市，以及休斯顿作为炎热湿润气候区（Hot-Humid）的代表城市，以探究不同气候区之间相似与不同的热韧性模式。这些差异源于各城市独特的温度和湿度特征，以及风环境的影响，从而使不同LCZ区域呈现出不同的热韧性动态。<br>\r
\r
尽管不同区域之间存在差异，但在正常高温天气具有较高温度，以及从正常高温天气到极端高温天气出现显著温度升高的情况下，LCZ 1、LCZ 2、LCZ 3和LCZ 4在极端高温事件中均表现出较强的热韧性强度。这些研究结果为城市规划者和政策制定者建设具有热韧性的城市提供了有价值的参考，并表明可以将LCZ框架纳入不同气候区的气候适应策略与城市治理体系。<br>\r
\r
**关键词：** 热韧性、气候区、局部气候区<br>\r
\r
**主题类别：** WELL BEING_热环境<br>\r
`,vc=`---\r
id: "03"\r
slug: "previous-planning-research"\r
title: "Previous Planning Research"\r
category: "Urban Planning Research"\r
year: "2020-2025"\r
description: "硕士期间参与的5项研究课题、AI for Cities夏令营及联合国人居署项目综述"\r
tech: ["Urban Planning","AI","Machine Learning","Knowledge Graph","Climate Resilience"]\r
abstract: "硕士期间总共参与了5项研究课题，参加了一场AI for Cities的夏令营，同时也加入联合国人居署项目×首尔大学研究课题。其中四项研究分别在全球国际会议上发表。"\r
challenge:\r
solution:\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-planning-research/99.jpg"\r
---\r
共参与负责 **5 项研究课题**，2场 **AI for Cities 夏令营**，同时加入 **联合国人居署项目 × 首尔大学** 研究课题。\r
\r
---\r
\r
## 国际会议发表\r
\r
### [NEUROTOPIA- Decentralized future urban design based on the biological characteristics of neurons](#/planning/neurotopia)<br>\r
*NEUROTOPIA——基于神经元生物学特性的去中心化未来城市设计*\r
\r
> 2024.10 · 韩国春川  Urban Design Institute of Korea (UDIK) Autumn Conference · 口头报告\r
\r
### [Knowledge Graph Generation from Urban Planning Texts](#/ai/knowledge-graph-urban-planning)<br>\r
*基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析*\r
\r
> 2025.2 · 第39届 AAAI 城市规划人工智能研讨会 · 海报展示\r
\r
> 2025.6 · 英国伦敦 CUPUM 计算城市规划与城市管理会议 · 口头报告\r
\r
> 2025.7 · 中国厦门 第19届 IACP 国际中国规划协会会议 · 口头报告\r
\r
### [Local Climate Zones and Urban Heat Resilience](#/planning/local-climate-zones-urban-heat-resilience)<br>\r
*局部气候区与城市热岛效应韧性：纽约实证研究*\r
\r
> 2025.4 · 加拿大温哥华 第52届 ICUA 国际城市事务会议 · 口头报告\r
\r
### [Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning](#/ai/urban-heat-resilience-machine-learning)<br>\r
*利用机器学习评估城市形态对不同尺度下热韧性的非线性影响*\r
\r
> 2025.10｜美国·明尼阿波利斯｜第65届 ACSP 美国大学规划学院协会会议｜口头报告\r
\r
> 2025.06｜英国·剑桥｜学术交流研讨会｜口头报告\r
\r
> 2025.05｜美国·佛罗里达大学 AI Cities 研讨会｜口头报告（线上）\r
\r
> 2026.02｜新加坡｜第40届 AAAI 城市规划人工智能研讨会｜海报展示\r
\r
### [Nonlinear Impacts of Urban Form on Surface Urban Heat Island under Different Weather Conditions in Seoul](#/ai/urban-heat-resilience-machine-learning)\r
利用机器学习评估首尔城市形态在不同天气下热韧性的非线性影响\r
\r
> 2026.07｜中国·西安｜第20届 IACP 国际中国规划协会会议｜口头报告\r
\r
> 2026.07｜韩国·首尔｜毕业论文\r
\r
---\r
## [ 校园公共空间活力建模：基于对户外环境与人群活动的实时跟踪](#/ai/campus-public-space-vitality-modeling)\r
*Modeling the vitality of public spaces on campus: tracking outdoor environments and activities in real time*\r
\r
> 2023.6｜上海同济大学| Architectural DigitalFUTURES 2023 同济夏令营｜成员\r
\r
## [Participatory Urban Regeneration Empowered by AI](#/ai/participatory-urban-regeneration-empowered-by-artificial-intelligence) <br>\r
*AI for Cities 夏令营 · 人工智能赋能下的参与式城市更新*\r
\r
> 2025.7 ｜上海同济大学｜作为数据组组长参与工作坊\r
\r
---\r
\r
## 联合国人居署项目 × 首尔大学\r
\r
> 中日韩城市扩张和城市收缩 SDGs 议题 [跨国多高校合作]\r
> [CityEnergyLab — UN Projects SIT Index for East Asia](https://cityenergylab.cafe24.com/un-projects-sit-index-for-east-asia-from-urban-diagnostics-to-expanding-toward-asia/)\r
\r
---\r
`,mc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/99.png"\r
---\r
HeatMapper is a comprehensive web platform designed to monitor and visualize global heat patterns. It provides real-time data on urban heat islands, extreme heat events, and temperature trends across different regions. The platform aims to raise awareness about heat-related issues and support informed decision-making for urban planning and climate adaptation.\r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper/cover.mp4"></video>\r
</div>\r
\r
Integrating real-time temperature data from multiple sources and presenting it in an intuitive, interactive visualization that allows users to explore heat patterns at different scales.\r
\r
Developed a responsive web application using React for the frontend, Three.js for 3D visualizations, D3.js for data visualizations, and Node.js for the backend. Implemented data integration pipelines to aggregate temperature data from various sources and created interactive maps and charts for user exploration.\r
`,jc=`---\r
id: "01"\r
slug: "dragon-diffussion"\r
title: "Dragon Diffussion - AI 创意生产平台"\r
category: "UI&UX Design"\r
year: "2023.10-2024.9"\r
description: "一款基于AI的图像生成工具，可将文本提示转化为高质量视觉内容的平台。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/99.jpg"\r
---\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/cover.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/DragonDiffusion-Demo_(2).mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/DragonDiffusion-Demo_(3).mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dragon-diffusion/DragonDiffusion.mp4"></video>\r
</div>\r
\r
## 技术【Stable Diffusion XL】【ControlNet】【LoRA】【Stable Diffusion lighting】\r
\r
## 那个时代发生了什么？\r
Stable Diffusion XL (SDXL)刚成为主流。ComfyUI 刚刚开始火。ControlNet 很火。LoRA 开始普及。Agent 这个词刚开始进入 AI 产品。所以那个时候大家最大的痛点不是：画不好。而是：怎么把几十个 AI 能力串起来。于是就出现了：Task→Node→Pipeline→Canvas→Layer这种设计。其实和今天 ComfyUI 很像。\r
\r
## 为什么会做 Node？\r
因为当时：一个 Prompt 根本不够。例如：帮我设计一个电商海报。AI不会直接生成最终结果。而是：需求→拆解→背景→主体→Logo→字体→局部修改→导出。所以：Workflow才是真正重要的。\r
\r
## 为什么研究 LoRA？\r
因为那时候：基础模型能力有限。想画：某个品牌/某种IP/某种风格怎么办？训练 LoRA。所以很多公司：每天都在：训练→测试→Bad Case→重新训练。\r
## 为什么 Infinite Canvas（无限画布）那么重要？\r
因为那个时代：生成一张图以后。不能像今天 Flux Kontext一样：一句话：把衣服换成红色。当时只能：重新生成。或者：局部重绘。于是：无限画布就变成：AI Photoshop。\r
\r
## 2024.2 Dragon Diffusion遇到了什么问题？\r
Stability AI 于 2024 年 2 月正式发布了新一代文生图模型 Stable Cascade。该模型基于 Würstchen 架构，采用独特的三阶段扩散方法，在图像质量、文字理解和生成速度上超越了以往的 SDXL，同时大幅降低了对硬件显存的要求。\r
产品定位也发生了变化。以前：Dragon是：AI画图,后来变成：AI设计工具,再后来：这里已经变成：中国产业视觉大模型。这是完全不同的定位。\r
所以我们开始讨论：普通人到底能不能用？ToC：自己装修、自己设计、自己印刷。其实就在找：真正能传播出去的场景。\r
# PPT 汇报\r
\r
---\r
`,yc=`---\r
id: "02"\r
slug: "anyreal"\r
title: "AnyReal - AI 虚拟影棚"\r
category: "UI&UX Design"\r
year: "2024"\r
description: "三步生成高真实度商品营销图的 AIGC 内容生产引擎，面向电商与品牌营销场景。"\r
tech: ["Figma","AI Product Design","SaaS"]\r
abstract: "AnyReal 是一款面向电商与品牌营销场景的 AI 虚拟影棚 / AIGC 营销内容生产引擎，解决商品营销物料生产成本高、周期长、门槛高的痛点。底层依托自研视觉大模型与 AIGC 联合实验室的科研能力，以真实场景 + 可控可调 + AI 模特为核心差异。"\r
challenge: "传统商品图拍摄需要 10-20 天、成本 8000-20000 元。市面 AI 工具多为背景替换，无法改变商品展示角度，光影不变，效果不真实。"\r
solution: "设计了三步生图工作流：上传 3D 资产 → 选场景模板 → 调角度大小生成。搭配背景模版中台、文生图/图生图、图像后处理、视频生成等模块，将生图效率从"天级"降到"分钟级"。"\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/99.jpg"\r
---\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/anyreal/cover.mp4"></video>\r
</div>\r
\r
技术【Stable diffusion】【ControlNet】【Blender】\r
\r
## 这个项目是基于一个真实的商业需求。\r
以前的商品的背景很假，怎么样能够将真实的商品放到真实的背景中，并且可以调整角度和镜头。2023年的时候，利用ControlNet的 Depth（深度图） 和 NormalMap（法线贴图） 将3D软件（如Blender、SketchUp）中导出的低模或白模结构精准“锁定”，在二次渲染或文生图时保留3D资产的空间构图与立体轮廓。 \r
\r
## AnyReal 当时流程\r
电商卖家上传商品 3D 模型→调整：光照/相机角度/场景/材质→渲染→生成营销图片\r
所以那个时代很多团队都会用AI + 3D 而不是今天的AI + Inpainting\r
而 FLUX.1 是 2024 年 8 月 1 日才发布。也就是说：\r
项目开始的时候，Flux 甚至还没正式发布。\r
就算发布了，当时也只是第一版 FLUX.1，主要能力还是文生图（Text-to-Image），成熟的图片编辑工作流还没有形成。\r
真正让很多团队开始大量使用 Fill（Inpainting）、Redux、Depth、Canny 等编辑能力，是 2024 年 11 月发布 FLUX.1 Tools 之后。\r
\r
# AnyReal 项目文档\r
\r
## 1. 项目概述\r
\r
### 1.1 项目背景\r
\r
AnyReal 是一款面向电商与品牌营销场景的 **AI 虚拟影棚 / AIGC 营销内容生产引擎**，解决"商品营销物料生产成本高、周期长、门槛高"的痛点。底层依托自研**视觉大模型**与 AIGC 联合实验室的科研能力，以真实场景 + 可控可调 + AI 模特为核心差异化优势。\r
\r
### 1.2 产品定位\r
\r
- 产品名：**AnyReal AI 虚拟影棚**\r
- 一句话定位：**三步生成高真实度商品营销图，并延伸至品牌营销视频的 AIGC 内容生产引擎**。\r
- 核心价值：把传统"10–20 天、数千到上万元"的棚拍/3D 渲染流程，压缩为"数分钟、百元级"的 SaaS 化生成。\r
\r
### 1.3 目标用户与价值\r
\r
| 维度 | 说明 |\r
| --- | --- |\r
| 核心用户 | 电商商家、品牌方、营销/广告 agencies、家居/泛零售品类运营 |\r
| 核心痛点 | 商品图拍摄贵、3D 渲染慢且不真实、现有 AI 工具仅背景替换效果差 |\r
| 交付价值 | 低成本、高真实、可个性化、可批量的营销图文视频产能 |\r
\r
## 3. AI 生图「三步法」\r
\r
1. **商品上传**：上传商品 3D 模型，环拍视频启动 AI 训练。\r
2. **场景创建**：从海量场景模板库中选择。\r
3. **参数调节**：选择商品摆放角度与大小，生成高真实度场景图。\r
\r
### AnyReal 三大自研优势\r
\r
| 优势 | 说明 |\r
| --- | --- |\r
| **真实场景** | 使用真实场景图而非 AI 生成场景，最终效果更具真实感 |\r
| **可控可调** | 光影、比例、角度算法自适应，且支持手动精准调整 |\r
| **添加模特** | 可生成 AI 模特与家具的交互，真实生活气息强 |\r
\r
<!-- details -->\r
\r
## 2. 产品功能架构\r
\r
\`\`\`\r
AnyReal\r
├── 商品资产（3D 资产上传 / 训练）\r
│   ├── 公共商品页 / 我的商品页\r
│   ├── 上传商品（信息填充、模型上传）\r
│   └── 3D 模型预览 → 启动训练\r
├── 工作台（核心生图）\r
│   ├── 物品模块（分类、搜索）\r
│   ├── 生图参数（调整角度、调整大小）\r
│   ├── 结果图展示\r
│   └── 图片详情页（去水印高清下载 = 主要扣费点）\r
├── 背景能力\r
│   ├── 背景模版库\r
│   ├── 用户上传背景\r
│   ├── 文生图 / 图生图\r
│   └── 背景模版中台\r
├── 图像后处理\r
│   └── 局部重绘 / 局部擦除 / 贴图迁移 / 尺寸拓展 / 高清放大\r
├── 视频生成\r
│   ├── 图生视频 / 物体生视频\r
│   └── 模板视频\r
└── 资产库,   ├── 物品库 / 背景库,   └── 广场\r
\`\`\`\r
`,xc=`---\r
id: "03"\r
slug: "genshot-AI-video-generation-tool"\r
title: "Genshot - AI videos Generation Tool"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "粘贴商品链接，一键成片。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/99.jpg"\r
---\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genshot/cover.mp4"></video>\r
</div>\r
`,wc=`---\r
id: "04"\r
slug: "genstyle"\r
title: "Genstyle - Daily Outfit Inspiration Delivered"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "一款基于AI的时尚应用，根据用户偏好与潮流趋势策划每日穿搭灵感。"\r
tech: ["Figma","React","TypeScript"]\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/99.jpg"\r
---\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/genstyle/cover.mp4"></video>\r
</div>\r
`,kc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/99.jpg"\r
---\r
Riffle is an AI-powered game generation tool that leverages advanced artificial intelligence algorithms to create immersive and engaging gaming experiences. By just one word, users can generate unique game concepts, characters, and storylines tailored to their interests. The platform aims to democratize game development, allowing both aspiring and experienced developers to bring their creative visions to life with ease.\r
\r
# 项目网页链接\r
https://www.riffle.games/\r
\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/riffle/cover.mp4"></video>\r
</div>\r
\r
---\r
`,Nc=`---\r
id: "06"\r
slug: "bazi-fengshui-analysis"\r
title: "Bazi - Fengshui Analysis Application"\r
category: "UI&UX Design"\r
year: "2025"\r
description: "基于用户出生数据与环境因素提供个性化AI风水洞察的应用。"\r
tech: ["Figma","React","TypeScript"]\r
abstract: "This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bazi/99.jpg"\r
---\r
This project involves designing an intuitive user interface for a Fengshui analysis application that leverages AI to provide personalized insights based on users' birth data and environmental factors. I designed two systems for both Chinese and Korean users. The design focuses on user experience, ensuring that complex Fengshui concepts are presented in an accessible manner.\r
`,Ic=`---\r
id: "07"\r
slug: "early-campus-experience"\r
title: "早期校园经历 — 1037拼拼 & persLEARN"\r
category: "UI&UX Design"\r
year: "2023-03-01~2024-03-01"\r
description: "本科期间在华科Pivot Studio的校园产品设计与实践，涵盖校园拼团平台与论文文献平台。"\r
tech: ["Figma","React","TypeScript"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/1037pinpin/99.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/counting/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/99.jpg"\r
---\r
## 1037拼拼\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/perslearn/cover.mp4"></video>\r
</div>\r
\r
## 康零Counting - 智能零件计数与数据平台 \r
项目时间：2022.6 - 2023.8\r
•	康零是面向汽车零部件加工企业的智能零件计数系统，通过机器视觉实现高速计数，并提供生产数据可视化、异常预警及分析能力。\r
•	参与工业智能制造产品规划, 负责商业计划书中产品方案设计, 完成产品定位、市场分析、商业模式及发展规划等内容输出。\r
•	负责 App/小程序产品原型设计, 规划生产数据实时监控、可视化看板、异常预警等功能, 构建设备端与数据平台协同方案。\r
•	项目获中国国际”互联网+”大学生创新创业大赛智能制造及其他产业赛道湖北省铜奖（武汉市银奖）。\r
\r
## persLEARN — 论文文献平台\r
项目时间：2023年\r
\r
persLEARN 是我在本科期间参与的另一个教育类产品设计项目，旨在通过互动模块帮助学生培养科学思维能力。\r
\r
---\r
`,Ac=`---\r
id: "08"\r
slug: "scendance"\r
title: "幕景 Scendance - AI 活动布置工作台"\r
category: "AI Product"\r
year: "2026.10.1-2026.10.4"\r
description: "一款把平面图、真实尺寸物料库和 AI 方案生成串起来的三维活动布置工作台。"\r
tech: ["Next.js","React","TypeScript","Supabase","Cloudflare Pages"]\r
abstract: "幕景 Scendance 是一款面向活动策划与场地布置的 AI 工作台。它把平面图变成可编辑的场地，用真实尺寸的物料库摆放桌椅、吧台、舞台等道具，并支持用一句需求让 AI 生成布置初稿；方案可以云端保存，由同一工作室的成员协作编辑。"\r
challenge: "活动布置的沟通成本集中在「场地尺寸」和「道具清单」两件事上：平面图只有约定俗成的标注，物料表又是另一份文件，客户、策划和执行的版本经常对不上。要在有限的制作周期内把这些信息收敛到同一个可编辑的三维场景，同时保证多人协作时不会互相覆盖。"\r
solution: "以场地 + 物料为核心数据模型：平面图作为尺寸证据被引用，场地以矩形或多边形表示并校验顶点、面积和出入口位置；物料按真实尺寸入库，场景中的每件物件都有唯一实例编号。AI 方案生成、预算上限和制作计划都挂在同一份场景数据上，编辑权以交接的方式在成员之间流转，断网时草稿本地保留、恢复后与云端版本比对。"\r
hasDemo: true\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/99.jpg"\r
---\r
# 项目网页链接\r
\r
https://scendance-scene-planner-ewz.pages.dev\r
\r
# 效果展示\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/Scendance.mp4"></video>\r
</div>\r
\r
# 产品定位\r
\r
幕景（Scendance）是一款面向活动策划与场地布置的 AI 工作台，用来解决「场地信息、道具清单、布置方案各说各话」的问题。\r
\r
它把三件事放进同一个界面：把平面图整理成可编辑的场地，从真实尺寸的物料库里摆放道具，再让 AI 按需求生成一版布置初稿。方案本身是一份结构化数据，所以既能在三维视图里调整，也能直接导出成清单交给执行团队。\r
\r
# 核心能力\r
\r
## 1. 平面图 → 可编辑场地\r
\r
- 平面图作为尺寸来源被引用，标注的墙线需要关联到具体来源图片，避免尺寸凭空出现。\r
- 场地支持矩形与多边形两种形态，顶点不能自相交，面积与长宽高会被校验。\r
- 出入口必须落在场地边界上，且具有唯一编号，方便和现场核对。\r
\r
## 2. 真实尺寸的物料库\r
\r
- 物料按真实尺寸建模：前台、会议桌、卡座、休憩椅、吧台、冷藏柜、化妆台、会议显示屏、绿植等。\r
- 场景中的每件物件都有唯一实例编号，可携带备注与需求，普通场景上限 50 件物件。\r
- 摆放好的物件可以整体导出为物料清单，用于报价与制作。\r
\r
## 3. AI 方案生成\r
\r
- 在空白场景里描述需求，就能生成一版布置初稿；已有方案时走「修改方案」而不是重新生成。\r
- 支持图生模型与纹理模式，用于把现场照片或参考图里的道具转成可用的三维素材。\r
- 生成任务带有并发与额度控制：同一场景同时只处理一个生成请求，工作室有每日 AI 额度上限。\r
\r
## 4. 工作室协作与编辑权\r
\r
- 工作室成员共享云端项目，成员账号 ID 唯一，负责人拥有分配与移除权限。\r
- 编辑权一次只由一位成员持有，可以主动交接；编辑权到期或页面切换时会提示并保留草稿。\r
- 云端版本变化、连接中断、登录失效等情况都会保留本地草稿，避免编辑成果丢失。\r
\r
## 5. 资料校验与预算上限\r
\r
- 活动资料、制作计划、尺寸记录都有编号查重与完整性校验。\r
- 预算上限必须说明覆盖范围与依据，避免出现没有口径的数字。\r
\r
<!-- details -->\r
\r
# 工程实现\r
\r
- 前端：Next.js（App Router）+ React + TypeScript，桌面端工作台式布局。\r
- 数据：Supabase（Postgres）承担账号与云端资料，公有 anon / publishable key 之外的操作一律走服务端。\r
- 部署：Cloudflare Pages，配合边缘网络做静态资源分发。\r
- 离线优先：本地活动资料与云端场地关联分开保存，未配置云端连接时工作台仍可使用。\r
`,zc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/07.jpg"\r
---\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/game-jam/cover.mp4"></video>\r
</div>\r
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
`,Sc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/11.jpg"\r
---\r
# 和平精英绿洲世界 × 华中科技大学高校共建\r
\r
## 项目时间\r
2022-09-01 ~ 2023-06-30\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/cover.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_2.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/peace-elite-hust/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_3.mp4"></video>\r
</div>\r
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
## 绿洲高校贴文链接\r
https://mp.weixin.qq.com/s/IcG4OHyM48ZXQ3_6--Ii1w\r
https://gp.qq.com/gicp/news/684/18323914.html\r
https://www.9game.cn/news/7868658.html\r
`,Cc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/31.jpg"\r
---\r
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
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/cover.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/BMW%26TJ_2.mp4"></video>\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/bmw-meta-island/BMW%26TJ_3.mp4"></video>\r
</div>\r
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
\r
<!-- details -->\r
\r
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
`,Lc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/22.jpg"\r
---\r
# 广州心源科技有限公司（Bilibili 游戏子公司）\r
\r
## 项目时间\r
\r
<h2>效果展示</h2>\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/guangzhou-xinyuan/cover.mp4"></video>\r
</div>\r
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
同时，我也更加明确了自己的优势与不足：空间设计能力能够迁移到游戏场景中，而构图、色彩和美术表达仍需要持续积累。\r
`,Mc=`---\r
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
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/99.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/21.png"\r
---\r
## 一个人怎么做游戏\r
\r
这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。\r
\r
### 为什么把这两个内容合并？\r
\r
指萝卜本体是一个微信小游戏项目，而下面这部分是同一套开发路径的复盘，记录了从设计、开发到上线的完整过程。\r
\r
<!-- details -->\r
\r
### 微信小游戏项目结构\r
\r
打开微信开发者工具\r
\r
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html\r
\r
![下载页面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/15.png)\r
\r
下载到本地，如果在本地，可以看到。\r
\r
![微信开发者工具界面](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/13.png)\r
![微信开发者工具项目结构](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/14.png)\r
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
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/17.png)\r
![审核通知时间线](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/18.png)\r
\r
> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。\r
\r
发布到正式版之后，就可以开始看游戏的用户流量情况了。\r
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kittylovecarrots/19.png)\r
\r
## godot引擎，辅助游戏。\r
我意识到我可能需要更复杂的\r
\r
## 其它说明\r
ios运行请在小游戏后台开通高性能+模式, 操作方法: 功能->游戏能力地图->研发能力->生成提效包->高性能模式\r
`,Dc=`---\r
id: "01"\r
slug: "prompt-engineering-agentic-rag"\r
title: "Prompt Engineering · Agentic RAG 城市规划知识库"\r
category: "AI / Agentic RAG"\r
year: "2025-present"\r
description: "面向城市规划的 Agentic RAG 原型：结合规划知识库、Prompt Engineering、向量检索与多 Agent 工具调用"\r
tech: ["LLM","Prompt Engineering","RAG","Agentic RAG","LangChain","Chroma","Embedding","Python"]\r
abstract: "我独立设计并实现了一个面向城市规划的 Agentic RAG 原型，将规划知识库、Prompt Engineering、向量检索和多 Agent 工具调用结合，用于处理主题检索、时间信息分析及跨城市规划比较。"\r
challenge: "基础 Naïve RAG 只能做简单检索，难以处理城市规划中主题、城市、时间与 Initiative 等多维度信息。"\r
solution: "围绕主题、城市、时间与 Initiative 设计专用检索与比较工具，使系统从 Naïve RAG 扩展为多工具协调的 Agentic RAG 原型。"\r
hasDemo: false\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/99.jpg"\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/cover.mp4"></video>\r
</div>\r
\r
# 项目概述\r
\r
我独立设计并实现了一个面向城市规划的 Agentic RAG 原型，将规划知识库、Prompt Engineering、向量检索和多 Agent 工具调用结合，用于处理主题检索、时间信息分析及跨城市规划比较。\r
\r
## 个人贡献\r
独立完成项目选题、规划数据整理、知识库设计、RAG 架构设计、Prompt Engineering、工具定义、Agent Workflow、案例分析及最终展示。围绕城市规划中的主题、城市、时间与 Initiative 信息，设计专用检索与比较工具，使系统从基础 Naïve RAG 扩展为具备多工具协调能力的 Agentic RAG 原型。\r
\r
## 技术栈\r
LLM / GPT-4o-mini · Prompt Engineering · RAG · Agentic RAG · LangChain · Chroma / Vector DB · Embedding · Structured Output / JSON · Python\r
\r
## 效果展示\r
\r
---\r
`,qc=`---\r
id: "02"\r
slug: "knowledge-graph-urban-planning"\r
title: "城市规划文本知识图谱生成与多模型评测"\r
category: "Knowledge Graph"\r
year: "2025-present"\r
description: "纽约和上海总体规划中气候变化适应的比较分析"\r
tech: ["Knowledge Graph", "NLP", "Python", "LDA", "BERT", "HuggingFace", "GPT-4 API", "Embedding Models", "Qwen3", "Multilingual-E5", "BGE-M3", "Cosine Similarity", "NetworkX"]\r
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to generate and compare the edges connecting these nodes. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city learning for climate resilience."\r
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."\r
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.jpg"\r
---\r
# 城市规划文本知识图谱生成与多模型比较\r
## Knowledge Graph Generation from Urban Planning Texts\r
### ——纽约与上海城市规划文本中的气候变化适应比较\r
\r
# 效果展示\r
\r
“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” \r
\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/cover.mp4"></video>\r
</div>\r
\r
github 仓库链接\r
https://github.com/LiliLIN0324/Knowledge_Graph\r
\r
---\r
\r
## 项目概览\r
\r
城市规划文本通常篇幅较长，包含大量政策、规划目标、空间策略与专业概念。当我们需要比较不同城市的规划文本时，仅依靠关键词频率很难回答：**不同城市真正关注哪些核心议题？这些议题之间又存在怎样的关系？**\r
\r
本项目尝试使用 **Knowledge Graph（知识图谱）** 将城市规划文本中的核心概念及其语义关系进行结构化表达，并进一步比较不同模型在知识图谱生成任务中的表现。\r
\r
项目以 **纽约市与上海市的城市规划文本** 为研究对象，聚焦 **Climate Change Adaptation（气候变化适应）** 与 **Urban Planning（城市规划）**，并设计了从传统 Topic Modeling 到 BERT、LLM、Embedding Model 的多种知识图谱生成方法。\r
\r
---\r
\r
## 01 · 研究问题\r
\r
本项目主要围绕两个问题展开：\r
\r
- **Knowledge Graph 能否帮助我们识别并比较不同城市规划文本中的核心概念与语义关系？**\r
- **不同类型的 NLP / AI 模型，在城市规划知识图谱生成任务中各有什么优势与局限？**\r
\r
为了回答这些问题，我设计并比较了四类方法：**LDA → Fine-tuned BERT → GPT-4 → Embedding Models**。不仅比较模型最终生成的知识图谱，也从语义理解能力、跨语言能力、节点/关系识别能力、可解释性、计算效率、可扩展性、实际应用成本等维度分析不同方法。\r
\r
---\r
\r
## 02 · 知识图谱设计\r
\r
为了让不同城市的规划文本能够在同一个框架下进行比较，我首先定义了一个由 **10 个核心概念节点**组成的领域知识框架。\r
\r
### 气候变化适应\r
\r
- Resilience\r
- Adaptive Capacity\r
- Vulnerability Assessment\r
- Climate Proofing\r
- Ecosystem-based Adaptation\r
\r
### 城市规划\r
\r
- Zoning\r
- Land Use Planning\r
- Urban Design\r
- Transportation Planning\r
- Sustainable Development\r
\r
这些概念作为两个城市规划文本的共同语义框架。\r
\r
---\r
\r
## 03 · Knowledge Graph 如何表示规划文本？\r
\r
本项目中的知识图谱不仅关注“一个概念有没有出现”，还进一步计算：\r
\r
### Node Weight · 节点权重\r
\r
节点权重表示某个概念在规划文本中的重要程度。例如，**Resilience** 若与大量句子具有较高的语义相似度，其 Node Weight 就相对较高——**节点越大，表示该概念在文本中越重要**。\r
\r
---\r
\r
### Edge Weight · 边权重\r
\r
边权重表示两个概念之间的关联强度。例如，**Resilience ↔ Climate Proofing** 若经常共同出现且在语义空间中关联较强，其 Edge Weight 就更高——**边越粗，表示两个概念之间的关系越强**。\r
\r
最终形成的 Knowledge Graph 可同时表达“什么概念重要”，以及“这些概念之间如何关联”。\r
\r
---\r
\r
# 10 · 实验结果\r
\r
## NYC vs. Shanghai\r
\r
实验结果显示，两个城市存在一些共同关注的概念，例如 Climate Proofing、Adaptive Capacity、Sustainable Development、Resilience，但不同方法也识别出了两个城市之间的不同侧重点。\r
\r
### New York City\r
\r
模型结果中较明显的概念包括 Resilience、Climate Proofing、Adaptive Capacity、Ecosystem-based Adaptation、Zoning、Urban Design，整体上更突出 **Resilience / Equity / Climate Adaptation**。\r
\r
### Shanghai\r
\r
模型结果中较明显的概念包括 Sustainable Development、Resilience、Land Use Planning、Transportation Planning、Urban Planning、Zoning，整体上更突出 **Sustainable Development / Balanced Urbanization**。\r
\r
---\r
\r
# 14 · 项目总结\r
\r
本项目构建了一套面向城市规划文本的 Knowledge Graph Generation Framework，并比较了 **LDA → Fine-tuned BERT → GPT-4 → Embedding Models** 四类不同的文本语义建模方法。\r
\r
最终通过 Knowledge Graph 将规划文本中的 **Concept Importance + Semantic Relationships** 进行结构化表达，并进一步用于比较纽约与上海在气候变化适应及城市规划议题上的差异。\r
\r
从模型比较来看，**传统 Topic Modeling 更简单，但语义表达能力有限；BERT 可以进行领域适应；LLM 具有更强的上下文理解能力，但存在黑盒、成本与幻觉问题；Embedding Models 则在大规模文本处理、跨语言语义表示和批量计算方面具有较好的可扩展性。** 因此，本项目最终并没有试图寻找一个“万能模型”，而是希望建立一个**根据任务目标选择模型，并通过结构化表示与人工验证提高结果可靠性的分析框架**。\r
\r
---\r
\r
## My Contribution\r
\r
### Research\r
\r
* 定义城市规划文本知识图谱生成问题\r
* 设计研究框架与模型比较方案\r
* 设计 10 个领域核心概念节点\r
* 选择 NYC 与 Shanghai 作为比较对象\r
\r
### NLP / AI\r
\r
* 实现 LDA Topic Modeling\r
* Fine-tune Multilingual BERT\r
* 设计 GPT-4 API Prompt 与评分机制\r
* 调用并比较 Qwen3 / E5 / BGE-M3 / Gemini Embedding\r
\r
### Knowledge Graph\r
\r
* 设计 Node Weight 计算方法\r
* 设计 Edge Weight 计算方法\r
* 融合 Semantic Similarity 与 Co-occurrence\r
* 使用 NetworkX 构建与可视化 Knowledge Graph\r
\r
### Evaluation\r
\r
* 建立多模型横向比较框架\r
* 分析不同模型的优势与局限\r
* 比较 NYC / Shanghai 的知识结构差异\r
* 设计 Expert Validation 流程\r
\r
> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>\r
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>\r
\r
> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!\r
> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告\r
---\r
\r
<!-- details -->\r
\r
# 04 · 方法一：LDA Topic Modeling\r
\r
第一种方法采用传统的 **Latent Dirichlet Allocation（LDA）**：首先对城市规划文本进行预处理，识别与 Climate Adaptation、Urban Planning 相关的主题，再将其映射到预定义的 10 个核心概念。\r
\r
### 节点权重\r
\r
通过主题与固定概念之间的语义相似度估计节点的重要程度。\r
\r
### 边权重\r
\r
通过不同主题 / 子节点之间的共现关系估计概念之间的关联程度。\r
\r
### 优势\r
\r
- 实现简单\r
- 计算成本较低\r
- 能够快速识别基础词汇模式\r
\r
### 局限\r
\r
- 主要依赖词频与主题分布\r
- 对上下文理解有限\r
- 难以充分表达复杂语义关系\r
\r
---\r
\r
# 05 · 方法二：Fine-tuned BERT\r
\r
第二种方法使用 **Multilingual BERT**，尝试通过领域文本训练提升模型对城市规划语境的理解能力，模型采用 **Masked Language Modeling（MLM）** 进行 Fine-tuning。基本流程为：\r
\r
\`\`\`text\r
Planning Documents\r
        ↓\r
Text Chunking\r
        ↓\r
Random Masking\r
        ↓\r
Fine-tuned Multilingual BERT\r
        ↓\r
Sentence / Concept Embeddings\r
        ↓\r
Cosine Similarity\r
        ↓\r
Node / Edge Weights\r
        ↓\r
Knowledge Graph\r
\`\`\`\`\r
\r
### Node Weight\r
\r
首先获取模型最后隐藏层的 Mean Pooling 向量，随后对概念与文本句子进行向量化、归一化，计算 Cosine Similarity，并对句子层面的相似度进行平均，最终得到节点的重要性分数。\r
\r
### Edge Weight\r
\r
通过比较模型训练前后两个概念关系的语义相似度变化，估计概念之间的关系强度。\r
\r
---\r
\r
# 06 · 方法三：Direct LLM\r
\r
第三种方法直接使用 **GPT-4 API** 对规划文本中的概念及关系进行评分。与前两种方法相比，它不再依赖传统的词频或训练后的向量，而是直接利用 LLM 的上下文理解能力。例如，对于一个节点，让模型回答“Climate Proofing 在气候变化适应规划中的重要程度是多少？”，并在 **0.1–1.0** 的范围内给出评分；对于两个节点之间的关系，同样要求模型对“Resilience 与 Climate Proofing 在该规划文本中的关系有多强？”进行关系强度评分。\r
\r
### 优势\r
\r
* 能够理解复杂上下文\r
* 具有较强的跨语言能力\r
* 输出形式直观\r
* 能够直接利用 LLM 的语义推理能力\r
\r
### 局限\r
\r
* 存在 Hallucination 风险\r
* 模型具有一定黑盒属性\r
* API 存在成本与延迟\r
* 模型版本或调用结果可能产生变化\r
\r
因此，LLM 方法虽然具有较强的语义理解能力，但其结果仍需要进一步验证。\r
\r
---\r
\r
# 07 · 方法四：Embedding Models\r
\r
第四种方法采用专门的 **Text Embedding Models**，实验中比较了 Gemini Embedding、Qwen3-Embedding、Multilingual-E5、BGE-M3。整体流程为：\r
\r
\`\`\`text\r
Planning Documents\r
        ↓\r
Text Chunking\r
        ↓\r
Embedding\r
        ↓\r
Cosine Similarity\r
        ↓\r
Node Weight\r
        ↓\r
Edge Weight\r
        ↓\r
Knowledge Graph\r
\`\`\`\r
\r
---\r
\r
## Embedding 模型选择\r
\r
在模型选择阶段，我综合考虑了 Zero-shot 能力、Embedding Dimensions、Memory Usage、Max Tokens、Multilingual Capability、Semantic Textual Similarity 等因素，实验中使用了 Qwen/Qwen3-Embedding-0.6B、BAAI/bge-m3、intfloat/multilingual-e5-large-instruct、Gemini Embedding。\r
\r
---\r
\r
## Node Weight\r
\r
对于每一个固定概念：获取 Concept Embedding 与 Planning Sentence Embedding，计算 Cosine Similarity，并对所有句子的相似度进行平均，最终得到 **Node Weight = Concept 与规划文本之间的平均语义相似度**。\r
\r
---\r
\r
## Edge Weight\r
\r
边权重同时考虑 Concept Co-occurrence 与 Semantic Similarity，计算形式为 \`edge_raw = α × co-occurrence + β × semantic similarity\`。因此，相比单纯统计词语共同出现次数，该方法进一步加入了语义层面的信息。\r
\r
---\r
\r
# 08 · Knowledge Graph 构建与可视化\r
\r
完成 Node / Edge Weight 计算后，使用 **NetworkX** 构建 Knowledge Graph。\r
\r
图中的节点大小表示 Concept Importance、节点颜色表示 Concept Category、边粗细表示 Relationship Strength，最终可以将两个城市的规划文本转化为结构化的知识网络。\r
\r
这样就能从原本的长篇规划文本中，更直观地观察核心概念是什么、哪些概念关系最紧密、不同城市的规划关注点有什么区别。\r
\r
---\r
\r
# 09 · 模型比较\r
\r
项目最终比较了四种不同类型的方法。\r
\r
| 方法              | 优势                   | 局限                           |\r
| --------------- | -------------------- | ---------------------------- |\r
| LDA             | 简单、快速、容易实现           | 上下文理解能力有限                    |\r
| Fine-tuned BERT | 能够进行领域适应，具有上下文语义理解能力 | 需要 Fine-tuning，计算成本更高        |\r
| GPT-4           | 上下文理解与语义推理能力较强       | Hallucination、API 成本、延迟、黑盒问题 |\r
| Embedding       | 向量化速度快，适合大规模文本与批量处理  | 可解释性相对较弱                     |\r
\r
这一比较也让我认识到：**模型并不存在绝对的“最好”，不同方法更适合不同的任务。** 关注主题发现，LDA 成本较低；需要领域适应，可用 Fine-tuned BERT；强调复杂语义理解，可用 LLM；需要处理大量文档、计算语义相似度并进一步用于 Knowledge Graph 或 Retrieval，则 Embedding Model 更具实际优势。\r
\r
---\r
\r
# 11 · 不同 Embedding Models 的表现\r
\r
不同 Embedding 模型并没有产生完全相同的知识图谱。实验中观察到：Qwen3 生成的结果相对更加平衡，节点权重差异没有过度集中；Multilingual-E5 在 NYC 的结果中表现较好，部分重要节点具有更高的权重；BGE-M3 在 Shanghai 的结果中表现相对较好。\r
\r
这说明 **Embedding Model 的选择本身也会影响 Knowledge Graph 对概念重要性与关系强度的敏感程度**。因此在实际应用中，不能简单地认为“换一个 Embedding Model 就只是换了一个向量模型”——模型选择会进一步影响下游的 **Similarity → Node Weight → Edge Weight → Knowledge Graph**。\r
\r
---\r
\r
# 12 · Expert Validation\r
\r
为了避免完全依赖模型输出，本项目进一步加入了 **Expert Validation**。领域专家对生成的 Knowledge Graph 进行人工审核与排序，重点评价 Nodes（某些节点是否被模型高估或低估）与 Edges（不同概念之间的关系强度是否符合领域知识）。最终形成：\r
\r
\`\`\`text\r
Planning Documents\r
        ↓\r
AI / NLP Models\r
        ↓\r
Knowledge Graph\r
        ↓\r
Human Expert Validation\r
        ↓\r
Model Comparison\r
\`\`\`\r
\r
这一步的意义在于：**模型生成的结果并不直接等于 Ground Truth**，在规划、政策等专业领域中 Human-in-the-loop 仍然非常重要。\r
\r
---\r
\r
# 13 · 项目思考\r
\r
这个项目让我意识到，Knowledge Graph Generation 并不是单纯的“把文本变成图”。真正困难的部分在于：\r
\r
### 1. 如何定义知识？\r
\r
需要先确定哪些概念值得成为 Knowledge Nodes。\r
\r
### 2. 如何衡量重要性？\r
\r
“一个词出现很多次”并不一定意味着它真正重要，因此需要引入 **Semantic Similarity** 来补充传统 Frequency-based 方法。\r
\r
### 3. 如何定义关系？\r
\r
两个概念同时出现，并不意味着一定存在强语义关系。因此本项目尝试将 **Co-occurrence + Semantic Similarity** 结合起来。\r
\r
### 4. 如何评价模型？\r
\r
不能只看模型输出是否“看起来合理”，还需要从**准确性、稳定性、可解释性、成本、效率、跨语言能力**等多个维度综合判断。\r
\r
---\r
`,Ec=`---\r
id: "03"\r
slug: "urban-heat-resilience-machine-learning"\r
title: "Assessing Urban Heat Resilience"\r
category: "Machine Learning"\r
year: "2025-present"\r
description: "利用可解释机器学习方法揭示城市形态因子与极端高温之间的非线性关系"\r
tech: ["GIS","Machine Learning"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/99.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/07.png"\r
---\r
# Research topic 1 \r
“利用机器学习评估城市形态对不同尺度下热韧性的非线性影响”\r
\r
> 2025.10，在美国明尼阿波利斯举行的第65届美国大学规划学院协会（ACSP）会议上作口头报告\r
> 2026.2，在新加坡举行的第40届AAAI城市规划人工智能研讨会上作海报展示\r
> 2025.5.10 在线上参加佛罗里达大学组织的AI和城市工作坊\r
> 2025.8.7 在英国剑桥大学进行工作坊交流\r
\r
## abstract: \r
"Climate change has been a pressing global issue in recent decades as it increasingly influences human life through extreme weather, ecosystem collapse, and food crises. Extreme heat is particularly exacerbated by the urban heat island (UHI) effect in cities. Numerous studies have empirically investigated the link between urban form factors and surface Urban Heat Islands (UHI), but few have studied how UHI changes in response to an extreme heat event, conceptualized as heat resilience in recent studies. Additionally, the majority of existing studies have relied on traditional regression models that assume linear relationships. To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods. The GBDT models demonstrated superior predictive accuracy, as evidenced by the lowest mean squared error (MSE). In addition, the results indicate that urban form factors have nonlinear relationships with urban land surface extreme heat and associated heat resilience. These findings have valuable implications for urban planning practice aimed at developing heat-resilient cities."\r
challenge: "The majority of existing studies have relied on traditional regression models that assume linear relationships."\r
solution: "To address this gap, this study aims to identify nonlinear relationships between urban form factors and land surface temperature (LST) and heat resilience, using machine learning methods."\r
\r
## 4 - Research Results and Visualization\r
\r
This poster summarizes the key findings of our study on urban heat resilience using machine learning approaches. The visualization demonstrates the nonlinear relationships between urban form factors and extreme heat events.\r
\r
# Research topic 2\r
“利用机器学习评估城市形态对不同天气状况下热韧性的非线性影响”\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/urban-heat-resilience-ml/cover.mp4"></video>\r
</div>\r
\r
<!-- details -->\r
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
#### 02_NDVI (Normalized Difference Vegetation Index)\r
\r
| Item | Details |\r
|------|---------|\r
| **Data Source** | https://landsat.gsfc.nasa.gov/satellites/landsat-8/landsat-8-bands/ |\r
| **Formula** | NDVI = (NIR - Red) / (NIR + Red) |\r
| **Bands** | band 4 = Red, band 5 = NIR, Landsat 8/9 Surface Reflectance Band 5 & Band 4 from Collection 2 Level-2 |\r
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
`,Tc=`---\r
id: "04"\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/99.jpg"\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/participatory-urban-regeneration/cover.mp4"></video>\r
</div>\r
\r
## 项目代码链接\r
https://github.com/LiliLIN0324/pur-ai\r
\r
---\r
\r
### 1. **这个项目解决什么问题？**\r
\r
这个项目旨在利用 AI 辅助城市更新，通过城市空间数据和城市形态指标作为条件，生成符合一定空间约束和城市形态目标的设计方案，从而帮助城市更新方案进行快速探索和评估。\r
\r
---\r
\r
### 2. **为什么选择生成模型？**\r
\r
因为目标是根据城市空间约束和形态目标，生成多个可能的城市设计方案，而不是预测一个固定结果。\r
\r
---\r
\r
### 3. **为什么使用 ControlNet？**\r
\r
普通 Stable Diffusion 的生成自由度比较高，但对具体空间结构的控制比较弱。我们的城市更新任务对道路、建筑、水体等空间结构有比较明确的约束，所以采用 ControlNet，把城市空间条件作为额外的控制输入，在保留生成能力的同时增强对空间结构的控制。\r
\r
---\r
\r
### 4. **城市数据怎么变成模型输入？**\r
\r
我主要负责这一侧。对不同来源的城市空间数据进行清洗、统一空间尺度和格式，并整理成模型需要的多通道 Tensor。具体训练代码中，原始数据组织为 **5 个通道：1 个语义 Mask + 4 个辅助城市数据**；之后将语义 Mask 转换为 RGB，与 4 个辅助通道组成 **7-channel Hint**，再加入额外的街道条件，形成最终的 ControlNet 条件输入。 \r
\r
---\r
\r
### 5. **Prompt 在这里干什么？**\r
\r
Prompt 主要用于提供高层的城市形态目标。我们根据城市语义 Mask 和辅助城市数据计算绿地率、水域比例、建筑覆盖率、道路密度、FAR、开放空间比例、平均建筑高度和平均 LST 等指标，并将这些指标组织成结构化文本，再通过文本编码器得到文本条件。 \r
\r
> **Hint 告诉模型“空间上怎么摆”，Prompt 告诉模型“总体上要达到什么样的城市形态”。**\r
\r
---\r
\r
### 6. **生成以后怎么判断结果好不好？**\r
\r
目标指标 → Prompt → 生成 → RGB 转 Mask → 重新计算城市形态指标 → Target vs Generated。\r
\r
---\r
\r
### 7. **你们做过哪些关键实验/改进？为什么？**\r
\r
我们主要做了几方面的改进：\r
\r
* **预训练 ControlNet 微调**：基于已有模型进行城市领域微调，而不是从头训练。\r
* **LoRA 微调**：支持通过 LoRA 进行参数高效微调。\r
* **多通道城市条件**：将语义 Mask 和 4 个辅助城市数据组成 7-channel Hint。\r
* **街道条件增强**：从语义 Mask 中提取道路类别，形成额外的 3-channel Street Condition，与 7-channel Hint 合并形成 10-channel ControlNet 条件。\r
* **城市形态 Prompt**：将城市形态指标转化为结构化文本条件，为模型提供高层城市形态约束。\r
* **城市形态 Loss**：生成结果重新转换为语义 Mask，计算城市形态指标，与真实结果进行比较，并将 Morphology Loss 与 Diffusion Loss 结合。\r
\r
---\r
\r
### 8. **各自分工？**\r
\r
我主要负责城市数据侧，包括数据清洗、整理、标准化和 Tensor 构造；CS 同学主要负责 ControlNet / Stable Diffusion 的模型训练和工程实现。\r
\r
---\r
\r
<!-- details -->\r
\r
# Level 2：流程 Pipeline\r
\r
\`\`\`text\r
                    AI4City\r
                       │\r
          ┌────────────┴────────────┐\r
          ↓                         ↓\r
      城市原始数据               城市形态指标\r
          │                         │\r
          ↓                         ↓\r
    5-channel data                Prompt\r
          │                         │\r
    ┌─────┴─────┐                   ↓\r
    ↓           ↓                  文本编码器\r
Semantic Mask  4 Auxiliary           │\r
    │           │                    ↓\r
    ↓           └───────→ 7-channel Hint\r
  RGB 3ch\r
                                +\r
                         3-channel Street\r
                                │\r
                                ↓\r
                       10-channel Condition\r
                                │\r
                                ↓\r
                           ControlNet\r
                                │\r
                                ↓\r
                       Stable Diffusion\r
                                ↑\r
                             噪声\r
                                │\r
                                ↓\r
                         Generated RGB\r
                                │\r
                                ↓\r
                           RGB → Mask\r
                                │\r
                                ↓\r
                    城市形态指标重新计算\r
                                │\r
                                ↓\r
                      Target vs Generated\r
\`\`\`\r
\r
---\r
\r
> **“为什么不是直接用 Stable Diffusion？”**\r
\r
因为我们的任务不是开放式城市图片生成，而是有明确空间约束的城市形态生成，需要控制道路、建筑、水体等空间结构，所以增加 ControlNet 对城市条件进行显式控制。\r
\r
---\r
\r
# Level 3：部分技术细节\r
\r
### ControlNet\r
\r
\`\`\`text\r
7-channel Hint\r
      +\r
3-channel Street Condition\r
      ↓\r
10-channel ControlNet Condition\r
      +\r
Text Condition\r
      ↓\r
ControlNet\r
      ↓\r
控制特征\r
      ↓\r
Stable Diffusion UNet\r
\`\`\`\r
\r
训练代码中：\r
\r
\`\`\`text\r
5-channel 原始城市数据\r
        ↓\r
1-channel Semantic Mask\r
+\r
4-channel Auxiliary\r
        ↓\r
3-channel RGB Semantic Mask\r
+\r
4-channel Auxiliary\r
        ↓\r
7-channel Hint\r
        ↓\r
+\r
3-channel Street Condition\r
        ↓\r
10-channel Condition\r
\`\`\`\r
\r
 \r
\r
---\r
\r
### Stable Diffusion\r
\r
你至少知道：\r
\r
\`\`\`text\r
城市条件 + Prompt\r
       ↓\r
ControlNet + UNet\r
       ↓\r
Latent\r
       ↓\r
AutoencoderKL\r
       ↓\r
RGB\r
\`\`\`\r
\r
---\r
\r
### DDIM\r
\r
> 它是扩散模型的采样方法，用于从噪声逐步生成最终图像。项目代码中使用 DDIM 进行生成，推理过程中使用 50 步采样。\r
\r
---\r
\r
# 流程图\r
\r
\`\`\`text\r
                         AI4City\r
                            │\r
             ┌──────────────┴─────────┐\r
             ↓                        ↓\r
        城市空间数据                城市形态指标\r
             │                        │\r
             ↓                        ↓\r
     5-channel data                 Prompt\r
             │                        │\r
       ┌─────┴─────┐                  ↓\r
       ↓           ↓               文本条件\r
 Semantic Mask  4 Auxiliary           │\r
       │           │                  │\r
       ↓           └───────────→ 7-channel Hint\r
     RGB 3ch                          │\r
       │                              │\r
       └──────────────┐               │\r
                      ↓               │\r
                + 3-channel Street    │\r
                      │               │\r
                      ↓               ↓\r
                    10-channel Condition\r
                              │\r
                              ↓\r
                         ControlNet\r
                              │\r
                              ↓\r
                      Stable Diffusion\r
                              │\r
                              ↓\r
                      Generated RGB\r
                              │\r
                              ↓\r
                        RGB → Mask\r
                              │\r
                              ↓\r
                       城市形态指标计算\r
                              │\r
                      ┌───────┴───────┐\r
                      ↓               ↓\r
                Diffusion Loss    Morphology Loss\r
                      │               │\r
                      └───────┬───────┘\r
                              ↓\r
                          Total Loss\r
\`\`\`\r
\r
https://upd-caup.tongji.edu.cn/6e/91/c36467a355985/page.htm\r
`,Pc=`---\r
id: "05"\r
slug: "campus-public-space-vitality-modeling"\r
title: "校园公共空间活力建模：基于对户外环境与人群活动的实时跟踪"\r
category: "Computer Vision · Urban Sensing"\r
year: "2023.06"\r
description: "通过狩猎相机长时段高精度追踪校园户外环境与人群活动，建模人本尺度公共空间活力"\r
tech: ["Computer Vision","Active Sensing","Pedestrian Tracking","Time-series Analysis","Urban Analytics","Trail Camera"]\r
abstract: "The vitality of space plays an important role in evaluating spatial quality and attractiveness. Using active perception technologies and image acquisition methods such as hunting cameras, this project captures campus outdoor environments and pedestrian activities over long periods at high precision, enabling vitality modeling of human-scale public spaces. Through time-series analysis, we investigated the impact of wind and heat environments on pedestrian activities."\r
challenge: "Past studies relied on low-sample surveys or low-precision positioning to obtain crowd vitality data, which could not capture individual environmental perception and behavioral activities accurately."\r
solution: "Active perception technologies and long-term, high-precision image acquisition (such as hunting cameras) were adopted to track campus crowd activities and the material environment, and time-series data were used to study how wind and heat environments influence pedestrian activities."\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/logo.jpg"\r
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/99.jpg"\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/campus-public-space-vitality-modeling/cover.mp4"></video>\r
</div>\r
\r
# 校园公共空间活力建模\r
## Modeling the Vitality of Public Spaces on Campus\r
### ——基于对户外环境与人群活动的实时跟踪\r
\r
> 2023.6｜上海同济大学｜Architectural DigitalFUTURES 2023 同济夏令营｜成员（狩猎相机组）\r
\r
---\r
\r
## 研究题目\r
\r
狩猎相机组的研究题目为 **「户外环境与人群跟踪的校园空间活力建模」**。\r
\r
## 小组成员\r
\r
林丽丽 Lili Lin｜黄婧 Jing Huang｜公丕欣 Pixin Gong｜沈小洁 Xiaojie Shen｜刘博宇 Boyu Liu｜陈忆湄 Yimei Chen｜刘天明 Tianming Liu\r
\r
---\r
\r
## 研究简介\r
\r
空间的活力在评价空间质量和吸引力上起着重要作用。相较于以往低样本调查或低精度定位获取的人群活力数据，主动感知技术能够实现对个体环境感知与行为活动的精准反馈。同时，图像采集技术手段（如打猎相机）的进步已允许研究者实现对校园人群活动与物质环境的长时段、高精度捕捉，使得针对人本尺度公共空间的活力建模成为可能。\r
\r
该组通过研究发现户外环境对个体环境感知与行为活动存在影响，同时通过时序数据研究风热环境对行人活动的影响，结果表明：**场地内风速对行人通过数量有正向影响，热感指数与人群停留时间有负向影响**。\r
\r
## 参考链接\r
\r
<https://mp.weixin.qq.com/s?__biz=Mzg3NjQ2Mjc5NA==&mid=2247525414&idx=1&sn=fe70b061b93cbc6d38d8d38a6b32bfc1&chksm=cf33f383f8447a9586418622ca0e2f7a76c6e7c5257d49098f0c0e51e0381fd7ed643dda5ea3&scene=178&cur_album_id=2912679801638027265#rd>\r
`,_c=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/litflow/99.png"\r
---\r
LitFlow is a platform designed to facilitate the sharing and discovery of research papers. It provides a platform for researchers to copy the links of papers, and for users to search and filter papers based on various criteria.\r
\r
Designing a platform that is user-friendly, efficient, and scalable to support a large number of researchers and users.\r
\r
We developed LitFlow using a modern web development stack, including React for the frontend, Node.js for the backend, and MongoDB for the database. The platform features a responsive user interface, a powerful search engine, and a user-friendly paper upload process.\r
`,Rc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/99.png"\r
---\r
<div style="display:flex; flex-direction:column; gap:16px;">\r
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/epstein-mystery-archive/cover.mp4"></video>\r
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
`,Bc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/openstreetmap/99.png"\r
---\r
Understanding the various APIs and libraries available for working with OpenStreetMap can be challenging for beginners. There had some limitations on the free version of OpenStreetMap, especially if your website is complicated. You need to apply for an API key from Maptiler. link: https://api.maptiler.com/maps/basic/style.json?key=you_API_key.\r
\r
You can use libraries like Leaflet or OpenLayers to embed OpenStreetMap in your web applications. This tutorial provides step-by-step instructions and code examples to help you get started.\r
`,Gc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-sequential-events/99.png"\r
---\r
Dealing with varying photo qualities and metadata inconsistencies can pose challenges in accurately extracting sequential events.\r
\r
By leveraging computer vision libraries such as OpenCV, you can analyze the metadata and visual content of photos to identify and sequence events. This tutorial provides practical examples and code snippets to guide you through the process.\r
`,Oc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/01.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/02.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/03.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/04.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/05.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/06.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/07.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/08.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/09.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/10.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/11.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/12.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/13.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/14.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/15.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/16.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/17.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/18.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/19.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/20.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/21.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/22.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/23.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/24.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/25.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/26.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/27.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/28.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/29.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/30.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/31.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/32.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/33.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/34.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/35.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/36.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/37.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/38.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/39.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/40.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/41.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/42.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/43.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/44.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/45.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/46.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/47.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/48.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/49.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/50.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/51.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/52.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/53.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/54.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/55.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/56.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/57.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/58.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/59.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/60.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/61.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/62.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/63.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/64.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/65.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/66.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/67.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/68.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/69.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/70.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/71.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/72.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/73.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/74.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/75.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/76.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/77.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/78.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/79.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/80.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/81.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/82.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/83.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/84.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/85.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/86.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/87.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/88.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/89.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/90.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/91.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/92.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/93.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/94.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/95.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/96.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/97.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/98.png"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-geolocation-map/99.png"\r
---\r
Handling large datasets and ensuring accurate geospatial representation can be challenging when visualizing photo geolocation data.\r
\r
By utilizing mapping libraries such as Leaflet or Mapbox, you can plot geolocation data extracted from photos onto interactive maps. This tutorial provides detailed instructions and code examples to help you create compelling visualizations.\r
`,Uc=`---\r
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
image:\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/01.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/02.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/03.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/04.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/05.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/06.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/07.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/08.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/09.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/10.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/11.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/12.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/13.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/14.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/15.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/16.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/17.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/18.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/19.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/20.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/21.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/22.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/23.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/24.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/25.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/26.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/27.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/28.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/29.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/30.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/31.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/32.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/33.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/34.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/35.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/36.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/37.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/38.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/39.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/40.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/41.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/42.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/43.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/44.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/45.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/46.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/47.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/48.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/49.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/50.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/51.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/52.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/53.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/54.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/55.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/56.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/57.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/58.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/59.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/60.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/61.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/62.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/63.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/64.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/65.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/66.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/67.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/68.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/69.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/70.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/71.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/72.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/73.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/74.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/75.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/76.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/77.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/78.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/79.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/80.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/81.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/82.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/83.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/84.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/85.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/86.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/87.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/88.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/89.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/90.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/91.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/92.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/93.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/94.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/95.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/96.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/97.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/98.jpg"\r
  - "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photo-clustering/99.jpg"\r
---\r
This tutorial explains how to conduct time-geo-sequential clustering from a photo album using clustering algorithms and geospatial data processing techniques.\r
\r
Dealing with large datasets and ensuring accurate clustering results can be challenging when working with time-geo-sequential data.\r
\r
By leveraging clustering algorithms such as K-means or DBSCAN, you can group photos based on their temporal and spatial characteristics. This tutorial provides practical examples and code snippets to guide you through the process.\r
`,$c=`---\r
id: "05"\r
slug: "how-to-construct-docker"\r
title: "如何构建docker"\r
category: "Tutorial"\r
year: "2026-2-14"\r
description: "本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。"\r
tech: ["Docker", "Linux", "DevOps"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/docker-tutorial/logo.jpg"\r
abstract: |\r
  本教程将介绍如何构建docker，包括下载docker、安装适用于docker的linux系统、构建docker镜像、运行docker容器等。\r
  本教程适用于Windows 10/11用户，假设用户已经具备基本的Windows操作技能。\r
  本教程将引导用户完成docker的安装和配置，以及如何使用docker构建和运行容器。\r
\r
\r
---\r
## 01 下载docker\r
https://www.docker.com/\r
\r
## 02 安装适用于docker的linux系统\r
适用于Linux的Windows 子系统(WSL)是一个在Windows 10/11上运行Linux环境的功能。它允许用户在Windows上运行Linux应用程序和工具，而无需安装虚拟机或双引导。\r
打开Windows powershell，输入\r
\r
## 03 打开设置，把文件的默认存储换到e盘\r
Settings> Resources > Advanced \r
Disk image location -> 修改到需要的盘。\r
`,Wc=`---\r
id: "06"\r
slug: "how-to-construct-workflow-in-dify"\r
title: "How to construct workflow in Dify"\r
category: "Tutorial"\r
year: "2026-2-15"\r
description: "本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署、知识库创建和工作流设计。"\r
tech: ["Dify", "Docker", "Ollama", "AI Workflow", "Local LLM"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/dify-workflow/logo.jpg"\r
abstract: |\r
  本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署 Dify、配置 Ollama 本地模型、创建知识库和设计自动化工作流。\r
---\r
# 01-03 Dify 工作流构建\r
Docker +  Dify  + Ollama + 知识库 + 工作流\r
实现本地 AI 工作流的完整搭建：环境部署、模型配置、知识管理、流程自动化\r
\r
---\r
\r
#### a. Dify 介绍\r
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。\r
\r
#### a. Ollama 介绍\r
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：\r
- 完全本地运行，无需联网\r
- 无需 API Key，数据隐私安全\r
- 支持多种开源模型\r
\r
**链接**: https://ollama.com/\r
\r
**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama\r
`,Hc=`---\r
id: "07"\r
slug: "how-to-construct-light-backend-workflow"\r
title: "How to construct the light backend workflow "\r
category: "Tutorial"\r
year: "2026-2-16"\r
description: "本教程将介绍如何构建轻量级后端工作流。"\r
tech: ["vercel", "neon", "clerk", "cloudflare r2", "resend"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/backend-workflow/logo.jpg"\r
abstract: |\r
  本教程将介绍如何构建轻量级后端工作流。\r
  部署在vercel； 数据库在Neon； 认证在clerk； 存储在Cloudflare R2； 邮件在Resend\r
---\r
# 01-05 云服务配置\r
vercel -> neon -> clerk -> cloudflare r2 -> resend\r
实现全栈应用的快速开发和部署：前端部署、数据库、认证、存储、邮件\r
\r
## 01 部署在vercel\r
link: https://vercel.com/\r
\r
### a. vercel介绍\r
vercel是一个云平台，可以快速部署和托管web应用。\r
\r
## 02 数据库在Neon\r
link: https://neon.tech/\r
\r
### a. Neon数据库介绍\r
Neon是一个云数据库平台，提供PostgreSQL数据库服务。\r
\r
## 03 认证在clerk\r
link: https://clerk.com/\r
\r
### a. Clerk认证介绍\r
Clerk是一个云认证平台，提供用户认证和授权服务。\r
\r
## 04 存储在Cloudflare R2\r
link: https://www.cloudflare.com/developer-platform/products/r2/\r
\r
### a. Cloudflare R2介绍\r
Cloudflare R2是一个云存储平台，提供对象存储服务。\r
\r
## 05 邮件在Resend\r
link: https://resend.com/\r
\r
### a. Resend邮件介绍\r
Resend是一个云邮件平台，提供邮件发送服务。\r
`,Fc=`---\r
id: "08"\r
slug: "whats-mcp"\r
title: "什么是 MCP？—— 让 AI 学会使用工具的「通用语言」"\r
category: "Tutorial"\r
year: "2026-2-25"\r
description: "面向非计算机背景学生的 MCP 入门教程，用通俗的语言解释 Model Context Protocol 是什么、为什么需要它、以及如何使用它。"\r
tech: ["MCP", "AI", "Claude", "LLM"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/whats-mcp/logo.jpg"\r
abstract: |\r
  MCP（Model Context Protocol）是一种让 AI 助手与外部工具和数据源连接的标准协议。本教程用通俗的语言，帮助没有计算机背景的学生理解 MCP 的概念、工作原理和实际应用。\r
---\r
# 什么是 MCP？—— 让 AI 学会使用工具的「通用语言」\r
\r
## 一句话理解 MCP\r
\r
**MCP 就像是 AI 的「万能转接头」**，让不同的 AI 助手（如 Trae、Windsurf、VS Code 中的 AI）能够统一地连接和使用各种外部工具（如查天气、操作文件、访问数据库）。\r
\r
---\r
\r
## 01 为什么需要 MCP？\r
\r
### 场景一：没有 MCP 的时候\r
\r
想象一下，你正在使用一个 AI 助手，你想让它帮你：\r
\r
1. **查今天的天气** → AI 说：「抱歉，我没有联网功能」\r
2. **读取你的项目文件** → AI 说：「我无法直接操作文件」\r
3. **执行终端命令** → AI 说：「我无法运行命令」\r
\r
**问题**：每个 AI 助手都是「孤岛」，无法与外部世界连接。\r
\r
### 场景二：开发者想给 AI 添加功能\r
\r
假设你是一个开发者，你想让 AI 能够：\r
- 查询数据库中的客户信息\r
- 控制智能家居设备\r
- 操作 Photoshop 进行设计\r
\r
**没有 MCP 时**：\r
- 给 Trae 写一个插件 → 需要学一套接口\r
- 给 Windsurf 写一个插件 → 需要学另一套接口  \r
- 给 VS Code 的 Copilot 写一个插件 → 又要学第三套接口...\r
\r
**有了 MCP 后**：\r
- 写一次工具，所有支持 MCP 的 AI 都能用！\r
\r
---\r
\r
## 02 MCP 是什么？\r
\r
### 正式定义\r
\r
> **MCP（Model Context Protocol，模型上下文协议）** 是由 Anthropic 公司推出的开放协议，它标准化了 AI 助手与外部数据源、工具之间的连接方式。\r
\r
### 通俗比喻\r
\r
| 比喻 | 解释 |\r
|------|------|\r
| **USB 接口** | 就像 USB 让各种设备（U盘、鼠标、键盘）都能插到电脑上，MCP 让各种工具都能被 AI 使用 |\r
| **翻译官** | AI 和工具说不同的「语言」，MCP 充当翻译，让它们能互相理解 |\r
| **万能遥控器** | 一个遥控器可以控制电视、空调、音响，MCP 让 AI 能统一控制各种工具 |\r
\r
---\r
\r
## 03 MCP 的工作原理（超简单版）\r
\r
### 核心组件\r
┌─────────────────────────────────────────────────────────┐\r
│                      用户提问                             │\r
│              「帮我查一下北京的天气」                       │\r
└──────────────────────┬──────────────────────────────────┘\r
                       │\r
                       ▼\r
┌─────────────────────────────────────────────────────────┐\r
│              AI 助手（如 Trae、Windsurf）                  │\r
│              「我需要调用天气查询工具」                      │\r
└──────────────────────┬──────────────────────────────────┘\r
                       │\r
                       ▼\r
┌─────────────────────────────────────────────────────────┐\r
│              MCP 协议（统一的沟通标准）                     │\r
│         「把 AI 的请求翻译成工具能理解的格式」                │\r
└──────────────────────┬──────────────────────────────────┘\r
                       │\r
                       ▼\r
┌─────────────────────────────────────────────────────────┐\r
│              MCP 服务器（天气查询服务）                     │\r
│              「调用天气 API，获取数据」                     │\r
└──────────────────────┬──────────────────────────────────┘\r
                       │\r
                       ▼\r
┌─────────────────────────────────────────────────────────┐\r
│              返回结果给 AI → 整理后回答用户                 │\r
│              「北京今天晴天，25°C」                        │\r
└─────────────────────────────────────────────────────────┘\r
\r
### 三个关键角色\r
\r
| 角色 | 作用 | 类比 |\r
|------|------|------|\r
| **MCP Host** | 运行 AI 的程序（如 VS Code、Trae、Windsurf） | 手机 |\r
| **MCP Client** | AI 助手本身 | 手机里的 App |\r
| **MCP Server** | 提供具体功能的工具服务 | 充电宝、耳机等外设 |\r
\r
---\r
\r
## 04 MCP 能做什么？—— 实际应用场景\r
\r
### 场景 1：文件管理助手\r
- **问题**：你有一个文件夹，里面有很多文件，你想让 AI 帮你管理它们。\r
- **解决办法**：写一个 MCP 插件，连接到文件管理工具（如 Dropbox、Google Drive），AI 就可以调用它来操作文件了。\r
\r
### 场景 2：数据库查询助手\r
- **问题**：你有一个数据库，里面存储着客户信息、订单记录等。你想让 AI 帮你查询这些数据。\r
- **解决办法**：写一个 MCP 插件，连接到数据库（如 MySQL、PostgreSQL），AI 就可以调用它来查询数据了。\r
\r
### 场景 3：智能家居控制助手\r
- **问题**：你有一个智能家居系统，里面有各种设备（如智能灯、智能插座）。你想让 AI 帮你控制它们。\r
- **解决办法**：写一个 MCP 插件，连接到智能家居系统（如 Home Assistant、SmartThings），AI 就可以调用它来控制设备了。\r
\r
用户：「分析这个 Excel 表格里的销售趋势」\r
\r
AI → MCP → 数据库工具\r
→ 读取文件 → 提取数据 → 生成图表 → 给出分析结论\r
\r
### 场景 4：生活助手\r
用户：「查一下我下周的日程，如果有雨提醒我带伞」\r
\r
AI → MCP → 日历工具 + 天气工具\r
→ 读取日程 → 查询天气 → 条件判断 → 发送提醒\r
\r
---\r
\r
## 08 总结\r
\r
### 核心要点\r
\r
1. **MCP 是一个协议** → 就像 USB 是一种接口标准\r
2. **让 AI 能使用工具** → 打破 AI 的「孤岛」状态\r
3. **一次开发，到处使用** → 开发者写一次，所有 AI 都能用\r
4. **安全可控** → 用户可以决定 AI 能访问什么\r
\r
### 适合谁用？\r
\r
- 👩‍🎓 **学生**：让 AI 帮你整理资料、分析数据、管理文件\r
- 👨‍💼 **办公人员**：自动化重复性工作，提高效率\r
- 🎨 **设计师**：用自然语言控制设计软件\r
- 🏠 **普通用户**：打造个性化的 AI 助手\r
\r
### 下一步\r
\r
1. 确认你的 IDE 支持 MCP（Trae、Windsurf 或 VS Code + 插件）\r
2. 尝试配置一个简单的 MCP 工具（如 filesystem 或 terminal）\r
3. 体验 AI 直接操作项目文件的神奇感觉！\r
4. 探索更多 MCP 工具，打造你的专属编程助手\r
\r
---\r
\r
<!-- details -->\r
\r
## 07 MCP vs 传统方式的优势\r
\r
| 对比项 | 传统插件 | MCP |\r
|--------|---------|-----|\r
| **开发成本** | 每个 AI 平台都要单独开发 | 一次开发，多平台通用 |\r
| **安全性** | 权限控制不统一 | 标准化的权限管理 |\r
| **灵活性** | 功能固定 | 可动态发现和切换工具 |\r
| **生态** | 各自为政 | 开放共享的生态系统 |\r
\r
---\r
`,Vc=`---\r
id: "09"\r
slug: "how-to-choose-suitable-database"\r
title: "数据库选择指南——什么情况用什么数据库"\r
category: "Tutorial"\r
year: "2026-3-17"\r
description: "简单明了的数据库选择指南，帮助你根据项目需求快速选择合适的数据库。"\r
tech: ["数据库", "MySQL", "PostgreSQL", "MongoDB", "Redis"]\r
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/choose-database/logo.jpg"\r
abstract: |\r
  选择合适的数据库是项目成功的关键。本指南用简单的语言告诉你，在不同场景下应该选择哪种数据库，让你不再为数据库选择而困惑。\r
---\r
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
> 💡 **小提示**：没有绝对最好的数据库，只有最适合你项目的数据库。根据实际需求选择，才是最明智的决定！\r
\r
<!-- details -->\r
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
`;function Kc(c){const r=/^---\r?\n([\s\S]*?)\r?\n---/,t=c.match(r);let n={},a=c;if(t){const u=t[1];a=c.slice(t[0].length).trim();const k=u.split(/\r?\n/);let m=null,j=[];k.forEach(l=>{if(l.trim()==="")return;const y=l.indexOf(":");if(y!==-1&&!l.startsWith(" ")){m&&(n[m]=j.join(`
`)),m=l.slice(0,y).trim();let v=l.slice(y+1).trim();v==="|"?j=[]:v===""?j=[]:(n[m]=v,m=null,j=[])}else m&&l.startsWith("  ")&&j.push(l.slice(2))}),m&&j.length>0&&(n[m]=j.join(`
`)),Object.keys(n).forEach(l=>{let h=n[l];if(typeof h=="string")if(h=h.trim(),h.startsWith('"')&&h.endsWith('"')&&(h=h.slice(1,-1)),typeof h=="string"&&h.includes(`
`)&&/^\s*-/.test(h)){const y=h.split(/\r?\n/).map(v=>v.replace(/^\s*-\s*/,"").trim()).filter(v=>v!=="");n[l]=y.map(v=>v.startsWith('"')&&v.endsWith('"')||v.startsWith("'")&&v.endsWith("'")?v.slice(1,-1):v)}else if(h.startsWith("[")&&h.endsWith("]"))try{n[l]=JSON.parse(h)}catch{n[l]=[h.slice(1,-1).trim()]}else h==="true"?n[l]=!0:h==="false"?n[l]=!1:!isNaN(Number(h))&&h.trim()!==""?n[l]=Number(h):n[l]=h})}const b=[],i=new Set,o=u=>{const k=u.trim();!k||i.has(k)||(i.add(k),b.push(k))};Array.isArray(n.image)&&n.image.forEach(u=>o(String(u)));const g=/!\[.*?\]\(([^)\s]+)\)/g;let f;for(;(f=g.exec(a))!==null;)o(f[1]);const d=/<imagecarousel\b[^>]*\simages="([^"]*)"/gi;let s;for(;(s=d.exec(a))!==null;)s[1].split(",").forEach(o);return{id:n.id||"",slug:n.slug||"",title:n.title||"",category:n.category||"",year:n.year||"",description:n.description||"",tech:n.tech||[],abstract:n.abstract||"",challenge:n.challenge||"",solution:n.solution||"",hasDemo:n.hasDemo||!1,demoOnly:n.demoOnly===!0,icon:n.icon||"",code:n.code||"",logo:n.icon||"",image:b,content:a}}function w(c){const r=Kc(c);return{id:r.id,slug:r.slug,title:r.title,category:r.category,year:r.year,description:r.description,tech:r.tech,hasDemo:r.hasDemo,details:{abstract:r.abstract,description:r.description,challenge:r.challenge,solution:r.solution,logo:r.logo,icon:r.icon,code:r.code,image:r.image,content:r.content,demoOnly:r.demoOnly||!1}}}const Zc=[w(gc),w(oc),w(fc),w(vc),w(uc),w(hc),w(lc),w(mc)],Qc=[w(jc),w(yc),w(xc),w(wc),w(kc),w(Nc),w(Ic),w(Ac)],Yc=[w(zc),w(Sc),w(Cc),w(Lc),w(Mc)],Xc=[w(Dc),w(qc),w(Ec),w(Tc),w(Pc)],ue=[w(_c),w(Rc)],Pe=[w(Bc),w(Gc),w(Oc),w(Uc),w($c),w(Wc),w(Hc),w(Fc),w(Vc)],Ce={"early-campus-experience":"perslearn","guangzhou-xinyuan-tech":"guangzhou-xinyuan","72-hour-game-jam":"game-jam","urban-heat-resilience-machine-learning":"urban-heat-resilience-ml","peace-elite-hust-campus":"peace-elite-hust","prompt-engineering-agentic-rag":"agentic-rag"},z="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev",_e={scendance:`${z}/fig/scendance/Scendance.mp4`,"riffle-ai-game-generation-tool":`${z}/fig/riffle/cover.mp4`,genstyle:`${z}/fig/genstyle/cover.mp4`,"genshot-AI-video-generation-tool":`${z}/fig/genshot/cover.mp4`,anyreal:`${z}/fig/anyreal/cover.mp4`,"dragon-diffussion":`${z}/fig/dragon-diffusion/cover.mp4`,"early-campus-experience":`${z}/fig/perslearn/cover.mp4`,"epstein-mystery-archive":`${z}/fig/epstein-mystery-archive/cover.mp4`,"guangzhou-xinyuan-tech":`${z}/fig/guangzhou-xinyuan/cover.mp4`,"bmw-meta-island":`${z}/fig/bmw-meta-island/cover.mp4`,"peace-elite-hust-campus":`${z}/fig/peace-elite-hust/cover.mp4`,"72-hour-game-jam":`${z}/fig/game-jam/cover.mp4`,"prompt-engineering-agentic-rag":`${z}/fig/agentic-rag/cover.mp4`,"knowledge-graph-urban-planning":`${z}/fig/knowledge-graph-urban-planning/cover.mp4`,"urban-heat-resilience-machine-learning":`${z}/fig/urban-heat-resilience-ml/cover.mp4`,"participatory-urban-regeneration-empowered-by-artificial-intelligence":`${z}/fig/participatory-urban-regeneration/cover.mp4`,"local-climate-zones-urban-heat-resilience":`${z}/fig/local-climate-zones/cover.mp4`,heatmapper:`${z}/fig/heatmapper/cover.mp4`,"campus-public-space-vitality-modeling":`${z}/fig/campus-public-space-vitality-modeling/cover.mp4`,neurotopia:`${z}/fig/neurotopia/cover.mp4`,"chicken-utopia":`${z}/fig/chicken-utopia/cover.mp4`},J=`${z}/fig`,we="https://mujing-universe.pages.dev/",Q="lili0324@snu.ac.kr",Jc={scendance:{title:"幕景 Scendance",sub:"AI 活动布置工作台"},"riffle-ai-game-generation-tool":{title:"Riffle",sub:"AI 游戏生成工具"},genstyle:{title:"Genstyle",sub:"每日穿搭灵感"},"genshot-AI-video-generation-tool":{title:"Genshot",sub:"AI 视频生成工具"},"bazi-fengshui-analysis":{title:"洛书八字",sub:"Bazi · 风水分析应用"},anyreal:{title:"AnyReal",sub:"AI 虚拟影棚"},"dragon-diffussion":{title:"Dragon Diffusion",sub:"AI 创意生产平台"},"early-campus-experience":{title:"1037拼拼 & PersLEARN",sub:"早期校园产品"},litflow:{title:"LitFlow",sub:"Research Hub"},"epstein-mystery-archive":{title:"Epstein Mystery Archive",sub:"档案平台"},kittylovecarrots:{title:"指萝卜",sub:"个人开发微信小游戏"},"guangzhou-xinyuan-tech":{title:"广州心源科技",sub:"Bilibili 游戏子公司实习"},"bmw-meta-island":{title:"一杯咖啡的游戏旅程",sub:"同济 × BMW 联合挑战营"},"peace-elite-hust-campus":{title:"和平精英 × 华中科技大学",sub:"绿洲世界高校共建"},"72-hour-game-jam":{title:"无名之路",sub:"腾讯 × 华科 72 小时极限开发"},"prompt-engineering-agentic-rag":{title:"Agentic RAG",sub:"城市规划知识库"},"knowledge-graph-urban-planning":{title:"城市规划文本知识图谱",sub:"多模型评测"},"urban-heat-resilience-machine-learning":{title:"Urban Heat Resilience",sub:"可解释机器学习"},"participatory-urban-regeneration-empowered-by-artificial-intelligence":{title:"参与式城市更新",sub:"AI 赋能"},"local-climate-zones-urban-heat-resilience":{title:"Local Climate Zones",sub:"城市热韧性"},heatmapper:{title:"HeatMapper",sub:"全球热监测"},"cluster-visualizer-3d":{title:"Cluster Visualizer 3D",sub:"全球空间聚类"},"previous-planning-research":{title:"Previous Planning Research",sub:"研究综述"},"campus-public-space-vitality-modeling":{title:"校园公共空间活力建模",sub:"Urban Sensing"},neurotopia:{title:"Neurotopia",sub:"神经元式城市设计"},hongqiqu:{title:"红旗渠遗产价值评估",sub:""},"chicken-utopia":{title:"Chicken Utopia",sub:"小鸡乌托邦"},"previous-archi-work":{title:"建筑作品集",sub:"Previous Archi Work"}},er=["scendance","riffle-ai-game-generation-tool","genstyle","genshot-AI-video-generation-tool","bazi-fengshui-analysis","anyreal","dragon-diffussion","early-campus-experience","litflow","epstein-mystery-archive","kittylovecarrots","guangzhou-xinyuan-tech","bmw-meta-island","peace-elite-hust-campus","72-hour-game-jam","prompt-engineering-agentic-rag","knowledge-graph-urban-planning","urban-heat-resilience-machine-learning","participatory-urban-regeneration-empowered-by-artificial-intelligence","local-climate-zones-urban-heat-resilience","heatmapper","cluster-visualizer-3d","previous-planning-research","campus-public-space-vitality-modeling","neurotopia","hongqiqu","chicken-utopia","previous-archi-work"],cr=["riffle-ai-game-generation-tool","anyreal","neurotopia","kittylovecarrots","bazi-fengshui-analysis","peace-elite-hust-campus"],rr={product:"产品",platform:"产品",game:"游戏",ai:"城市与 AI",planning:"城市与 AI",tutorial:"笔记"};function Re(c,r){var n;return Ce[c]?Ce[c]:((n=r==null?void 0:r.match(/\/fig\/([^/]+)\//))==null?void 0:n[1])||c}function Le(c){const r=c.replace(/\s+/g," ").trim();return r?(r.split(new RegExp("(?<=[。！？.])"))[0]||r).trim():""}function tr(c){const r=Array.from(c.matchAll(/(20\d{2})/g),b=>b[1]);if(r.length===0)return c.trim();const t=/present|ongoing|on\s*going|进行/i.test(c),n=r[0],a=r[r.length-1];return n===a?t?`${n}–`:n:`${n}–${a}`}function nr(c){const r=c.split(/\s[-—–]\s/);return r.length>=2?{title:r[0].trim(),sub:r.slice(1).join(" - ").trim()}:{title:c.trim(),sub:""}}function ar(c){const r=c.replace(/<[^>]+>/g," ").replace(/\s+/g," "),t=[/我主要担任[^。！？]{2,180}/,/我担任[^。！？]{2,180}/,/我主要负责[^。！？]{2,180}/,/我参与了[^。]{0,100}负责[^。！？]{2,140}/];for(const n of t){const a=r.match(n);if(a)return a[0].replace(/\s+/g," ").trim()}}function V(c,r){return c.map(t=>({project:t,routeType:r}))}const br=[...V(Qc,"product"),...V(ue,"platform"),...V(Yc,"game"),...V(Xc,"ai"),...V(Zc,"planning"),...V(Pe,"tutorial")];function Be(c,r){const{project:t,routeType:n}=c,a=Jc[t.slug],b=nr(t.title||t.slug),i=t.details.icon||t.details.logo||"",o=t.description||Le(t.details.abstract)||Le(t.details.solution),g=ar(t.details.content||"");return{slug:t.slug,routeType:n,href:`/${n}/${t.slug}`,title:(a==null?void 0:a.title)||b.title,subtitle:(a==null?void 0:a.sub)??b.sub,group:rr[n]||"产品",yearLabel:tr(String(t.year||"")),description:o,tech:Array.isArray(t.tech)?t.tech:[],category:t.category||"",abstract:t.details.abstract||"",challenge:t.details.challenge||"",solution:t.details.solution||"",content:t.details.content||"",images:Array.isArray(t.details.image)?t.details.image:[],icon:i,r2:Re(t.slug,i),hasDemo:!!t.hasDemo,demoOnly:!!t.details.demoOnly,role:g,no:r}}const pr=new Map(br.map(c=>[c.project.slug,c]));function ir(c,r){return c.map(n=>pr.get(n)).filter(n=>!!n).filter(n=>n.routeType!=="tutorial").map((n,a)=>Be(n,a+1))}const M=ir(er),F=Pe.map((c,r)=>Be({project:c,routeType:"tutorial"},r+1)),$=M.length,ke=F.length,sr=cr.map(c=>M.find(r=>r.slug===c)).filter(c=>!!c),O=[...M].reverse();function X(c){return M.filter(r=>r.group===c)}const H={产品:X("产品").length,游戏:X("游戏").length,"城市与 AI":X("城市与 AI").length,笔记:F.length},dr=M.map(c=>c.href);function pe(c){const r=c.replace(/\/$/,"")||"/";return M.find(t=>t.href===r)||F.find(t=>t.href===r)}function gr(c){const r=c.group==="笔记"?F:M,t=r.findIndex(n=>n.slug===c.slug&&n.routeType===c.routeType);return r[(t+1+r.length)%r.length]}const ie=z,or=[`${J}/manifest.json`,`${ie}/manifest.json`,`${ie}/fig/manifest.json`],Ge=new Set(["previous-planning-research"]);let se=new Map;const de=new Set;function ce(c,r,t){if(c===!0)return`${J}/${r}/${t}`;if(typeof c!="string"||!c.trim())return;const n=c.trim();return/^https?:\/\//i.test(n)?n:n.startsWith("/")?`${ie}${n}`:n.startsWith("fig/")?`${ie}/${n}`:`${J}/${r}/${n.replace(/^\.\//,"")}`}function Me(c,r){if(!c)return;const t=se.get(c)||{};se.set(c,{...t,...r})}function fr(c){const r=(t,n)=>{if(!t||typeof t!="object")return;if(Array.isArray(t)){t.forEach(g=>r(g));return}const a=t,b=String(a.slug||a.id||a.folder||a.r2||n||""),i=Re(b,typeof a.icon=="string"?a.icon:void 0),o={card:ce(a.card,i,"card.jpg"),card_s:ce(a.card_s??a.cardS,i,"card-s.jpg"),hero:ce(a.hero,i,"hero.jpg"),hero_m:ce(a.hero_m??a.heroM,i,"hero-m.jpg")};(o.card||o.card_s||o.hero||o.hero_m)&&(Me(b,o),Me(i,o));for(const[g,f]of Object.entries(a))f&&typeof f=="object"&&r(f,g)};r(c),de.forEach(t=>t())}function lr(c){return de.add(c),()=>{de.delete(c)}}function Oe(c){return se.get(c.slug)||se.get(c.r2)}let re=null;function ur(){return re||(re=(async()=>{for(const c of or)try{const r=await fetch(c);if(!r.ok)continue;const t=await r.json();fr(t);return}catch{}de.forEach(c=>c())})(),re)}function Ue(c){const r=new Set;return c.filter(t=>!t.src||r.has(t.src)?!1:(r.add(t.src),!0))}function hr(c){if(!c)return[];const r=/<video[^>]+src="([^"]+)"/gi;return Array.from(c.matchAll(r),t=>t[1])}const vr=new Set(Object.values(_e));function $e(c){const r=hr(c.content),t=_e[c.slug];return t&&r.includes(t)?t:r.find(n=>vr.has(n))}function We(c){if(Ge.has(c.slug))return[];const r=`${J}/${c.r2}`,t=Oe(c),n=(t==null?void 0:t.card)||`${r}/card.jpg`,a=(t==null?void 0:t.card_s)||`${r}/card-s.jpg`,b=[];return c.slug==="scendance"&&(b.push({src:`${r}/poster-hero.jpg`}),b.push({src:`${r}/poster.jpg`})),b.push({src:n,srcSet:`${a} 800w, ${n} 1600w`},{src:`${r}/logo.jpg`,logo:!0},{src:`${r}/01.jpg`}),c.icon&&!b.some(i=>i.src===c.icon)&&b.push({src:c.icon,logo:/logo\.(jpg|png|webp)$/i.test(c.icon)}),Ue(b)}function mr(c,r){if(Ge.has(c.slug))return[];const t=`${J}/${c.r2}`,n=Oe(c),a=[];if(c.r2==="neurotopia"){const b=(n==null?void 0:n.hero)||`${t}/hero.jpg`,i=(n==null?void 0:n.hero_m)||`${t}/hero-m.jpg`;a.push({src:r?i:b}),r&&a.push({src:b})}else r&&(n!=null&&n.hero_m)?a.push({src:n.hero_m}):n!=null&&n.hero&&a.push({src:n.hero});return a.push(...We(c)),c.images[0]&&a.push({src:c.images[0].replace(/01\.png$/i,"01.jpg")}),Ue(a)}function jr(c,r){if(!c)return;const t=r==="tutorial"?[F]:[M,F];for(const n of t){const a=n.find(b=>b.slug===c&&(!r||b.routeType===r));if(a)return a}}const yr={product:"Products",game:"Games",ai:"AI",planning:"Planning",platform:"Platform",tutorial:"Tutorials",research:"Research"},He=({className:c})=>e.jsx("div",{className:"flex h-full w-full items-center justify-center text-ink-3/50",children:e.jsx("svg",{className:c,fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),Fe=({to:c,className:r=""})=>e.jsx(I,{to:c,className:`btn-accent ${r}`,children:"Demo"}),xr=!1,wr=({project:c,type:r,index:t})=>{var n;return e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs("div",{className:"flex items-center gap-4 py-4 md:gap-6 md:py-5",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(t+1).padStart(2,"0")}),e.jsxs(I,{to:`/${r}/${c.slug}`,className:"flex min-w-0 flex-1 items-center gap-4 md:gap-6",children:[e.jsx("div",{className:"h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105",onError:a=>{a.target.style.display="none"}}):e.jsx(He,{className:"h-7 w-7"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1 truncate text-sm text-ink-2",children:c.description})]}),e.jsx("div",{className:"hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]",children:(n=c.tech)==null?void 0:n.slice(0,3).map(a=>e.jsx("span",{className:"chip",children:a},a))}),e.jsx("span",{className:"eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block",children:c.year})]}),c.hasDemo&&e.jsx(Fe,{to:`/${r}/${c.slug}#demo`,className:"shrink-0"})]})})},kr=({project:c,type:r,index:t})=>{var n;return e.jsxs("article",{className:"group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong",children:[e.jsxs(I,{to:`/${r}/${c.slug}`,className:"flex flex-1 flex-col",children:[e.jsx("div",{className:"aspect-square w-full overflow-hidden border-b border-rule bg-surface-2",children:c.details.logo?e.jsx("img",{src:c.details.logo,alt:"",className:"h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]",onError:a=>{a.target.style.display="none"}}):e.jsx(He,{className:"h-10 w-10"})}),e.jsxs("div",{className:"flex flex-1 flex-col p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsx("span",{className:"nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text",children:String(t+1).padStart(2,"0")}),e.jsx("span",{className:"eyebrow nums-tabular",children:c.year})]}),e.jsx("h3",{className:"mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),((n=c.tech)==null?void 0:n.length)>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tech.slice(0,2).map(a=>e.jsx("span",{className:"chip",children:a},a))})]})]}),c.hasDemo&&e.jsx("div",{className:"border-t border-rule p-3",children:e.jsx(Fe,{to:`/${r}/${c.slug}#demo`,className:"w-full"})})]})},Nr=({data:c,type:r})=>{const[t,n]=p.useState("grid"),a=yr[r]??"Works";return e.jsxs("div",{className:"shell animate-rise-in py-8 md:py-12",children:[r==="product"&&xr,e.jsxs("div",{className:"section-head",children:[e.jsxs("p",{className:"eyebrow",children:[r," / Index"]}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(c.length).padStart(2,"0")," Entries"]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5",children:[e.jsxs("h1",{className:"text-display-sm",children:["Selected ",a]}),e.jsx("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:["grid","list"].map(b=>e.jsx("button",{onClick:()=>n(b),"aria-pressed":t===b,className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${t===b?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:b},b))})]}),t==="list"?e.jsx("ul",{className:"mt-2 border-t border-rule",children:c.map((b,i)=>e.jsx(wr,{project:b,type:r,index:i},b.slug))}):e.jsx("div",{className:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4",children:c.map((b,i)=>e.jsx(kr,{project:b,type:r,index:i},b.slug))})]})},Ir=p.lazy(()=>S(()=>import("./ClusterVisualizer-C2m5FIL0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),Ar=p.lazy(()=>S(()=>import("./UR-platform-r-N6UDpW.js"),__vite__mapDeps([6,1,2,3,7,8,5]),import.meta.url)),zr=p.lazy(()=>S(()=>import("./heatmapper-D9BE04xi.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)),Sr=p.lazy(()=>S(()=>import("./openstreetmap-B8v-8o8D.js"),__vite__mapDeps([10,1,2,3,11,12,5]),import.meta.url)),Cr=p.lazy(()=>S(()=>import("./photogeo-a_Ws0J-o.js"),__vite__mapDeps([13,1,2,3]),import.meta.url)),Lr=p.lazy(()=>S(()=>import("./photogeomap-BVuvpOJp.js"),__vite__mapDeps([14,1,2,3,11,12]),import.meta.url)),Mr=p.lazy(()=>S(()=>import("./clusteringevents-L250qWFX.js"),__vite__mapDeps([15,1,2,3,11,12,16]),import.meta.url));p.lazy(()=>S(()=>import("./litflow-C2-od8WH.js"),__vite__mapDeps([17,1,2,3]),import.meta.url));const Dr=p.lazy(()=>S(()=>import("./epsteinscret-CGEHc4ju.js"),__vite__mapDeps([18,1,2,3]),import.meta.url)),De=p.lazy(()=>S(()=>import("./wechatgame-BI6FzIpz.js"),__vite__mapDeps([19,1,2,3]),import.meta.url)),qr=p.lazy(()=>S(()=>import("./72HourGameJamDemo-85O3WMMg.js"),__vite__mapDeps([20,1,2,3]),import.meta.url)),Er=p.lazy(()=>S(()=>import("./PeaceEliteHustCampusDemo-qsd1UJ0C.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)),Tr=p.lazy(()=>S(()=>import("./BMWMetaIslandDemo-Cfc247_T.js"),__vite__mapDeps([22,1,2,3]),import.meta.url)),Pr=p.lazy(()=>S(()=>import("./riffle-CTHd6I24.js"),__vite__mapDeps([23,1,2,3]),import.meta.url)),_r=p.lazy(()=>S(()=>import("./genstyle-DQyZfKXW.js"),__vite__mapDeps([24,1,2,3]),import.meta.url)),Rr=p.lazy(()=>S(()=>import("./genshot-CIUvqG-5.js"),__vite__mapDeps([25,1,2,3]),import.meta.url)),Br=p.lazy(()=>S(()=>import("./dragon-diffusion-Dlj0L8S7.js"),__vite__mapDeps([26,1,2,3]),import.meta.url)),Gr=p.lazy(()=>S(()=>import("./anyreal-BxsD4wrj.js"),__vite__mapDeps([27,1,2,3]),import.meta.url)),Or=p.lazy(()=>S(()=>import("./previous-archi-work-U6Hrv95D.js"),__vite__mapDeps([28,1,2,3]),import.meta.url)),Ur=p.lazy(()=>S(()=>import("./hongqiqu-cD8rl8Aw.js"),__vite__mapDeps([29,1,2,3]),import.meta.url)),$r=p.lazy(()=>S(()=>import("./scendance-__eetAMS.js"),__vite__mapDeps([30,1,2,3]),import.meta.url)),he=c=>({"cluster-visualizer-3d":Ir,"participatory-urban-regeneration-empowered-by-artificial-intelligence":Ar,heatmapper:zr,"how-to-add-openstreetmap-in-website":Sr,"how-to-get-sequential-events-from-photo-by-phone":Cr,"how-to-visualize-photo-geolocation-data-on-map":Lr,kittylovecarrots:De,"how-to-build-game-in-wechat-mini-program":De,"72-hour-game-jam":qr,"peace-elite-hust-campus":Er,"bmw-meta-island":Tr,"how-to-conduct-time-geo-sequential-clustering-from-album":Mr,"epstein-mystery-archive":Dr,"riffle-ai-game-generation-tool":Pr,genstyle:_r,"genshot-AI-video-generation-tool":Rr,"dragon-diffussion":Br,anyreal:Gr,"previous-archi-work":Or,hongqiqu:Ur,scendance:$r})[c],Wr=({images:c,captions:r})=>{const[t,n]=p.useState(0),[a,b]=p.useState(new Set(c.map((s,u)=>u))),i=c.filter((s,u)=>a.has(u));if(p.useEffect(()=>{t>=i.length&&n(Math.max(0,i.length-1))},[i.length,t]),i.length===0)return null;const o=s=>{b(u=>{const k=new Set(u);return k.delete(s),k})},g=()=>{n(s=>s===0?i.length-1:s-1)},f=()=>{n(s=>s===i.length-1?0:s+1)},d=r==null?void 0:r[t];return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center max-h-[350px]",children:[e.jsx("img",{src:i[t],className:"max-w-full max-h-[350px] w-auto h-auto object-contain",alt:d||`Carousel Image ${t+1}`,onError:()=>o(t)}),e.jsx("button",{onClick:g,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:f,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-neutral-800/70 shadow-md hover:bg-white dark:hover:bg-neutral-700 transition-colors z-10",children:e.jsx("svg",{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),i.length>1&&e.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10",children:i.map((s,u)=>e.jsx("button",{onClick:()=>n(u),className:`h-1.5 rounded-full transition-all duration-300 ${t===u?"bg-neutral-800 dark:bg-neutral-200 w-6":"bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400"}`,"aria-label":`Go to slide ${u+1}`},u))})]}),d&&e.jsxs("div",{className:"mt-2 text-center",children:[e.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 italic",children:d}),e.jsxs("p",{className:"text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-mono",children:[t+1," / ",i.length]})]}),!d&&e.jsxs("p",{className:"mt-2 text-xs text-neutral-400 dark:text-neutral-500 text-center font-mono",children:[t+1," / ",i.length]})]})},Hr=({src:c,...r})=>{const[t,n]=p.useState(!1),[a,b]=p.useState(!1);return p.useEffect(()=>{const i=setTimeout(()=>{a||(n(!1),b(!0))},3e3);return()=>clearTimeout(i)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("iframe",{src:c,onLoad:()=>{n(!0),b(!0)},onError:()=>{n(!1),b(!0)},style:{display:"none"},title:"detector"}),!a&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})}),a&&t&&e.jsx("div",{className:"my-6 w-full border border-rule bg-surface-2",children:e.jsx("iframe",{src:c,className:"h-96 w-full border-0",allowFullScreen:!0,...r})}),a&&!t&&e.jsx("div",{className:"my-4 w-full",children:e.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-ghost",children:[e.jsx("svg",{className:"h-3.5 w-3.5",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),"Open link"]})})]})},qe={iframe:({src:c,title:r,...t})=>e.jsx(Hr,{src:c,title:r||"Embedded content",...t}),imagecarousel:({images:c,captions:r})=>{const t=(c||"").split(",").map(a=>a.trim()).filter(Boolean),n=r?r.split("|").map(a=>a.trim()):void 0;return e.jsx(Wr,{images:t,captions:n})},table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:n,className:"mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0",...r,children:c})},h2:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:n,className:"mt-8 mb-4 text-lg font-bold tracking-tight text-ink",...r,children:c})},h3:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:n,className:"mt-6 mb-3 text-base font-bold text-ink",...r,children:c})},h4:({children:c,...r})=>e.jsx("h4",{className:"mt-5 mb-2 text-sm font-semibold text-ink",...r,children:c}),h5:({children:c,...r})=>e.jsx("h5",{className:"mt-4 mb-2 text-sm font-semibold text-ink-2",...r,children:c}),h6:({children:c,...r})=>e.jsx("h6",{className:"mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...r,children:c}),p:({children:c,...r})=>{var a;const t=tc.Children.toArray(c),n=t.length===1&&((a=t[0])==null?void 0:a.type)==="img";return e.jsx("p",{className:n?"mb-0 leading-relaxed text-ink-2":"mb-4 leading-relaxed text-ink-2",...r,children:c})},a:({children:c,href:r,...t})=>e.jsx("a",{href:r,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...t,children:c}),img:({src:c,alt:r,...t})=>(r==null?void 0:r.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/))?e.jsx("img",{src:c,alt:r,className:"h-32 max-w-full border border-rule object-cover",onError:a=>{a.target.style.display="none"},...t}):e.jsx("img",{src:c,alt:r,className:"my-0 h-auto w-full border border-rule object-cover",onError:a=>{a.target.style.display="none"},...t})},Fr=/(?:^|\n)(?:#{1,6}[^\n]*(?:效果展示|附图|PPT 汇报)[^\n]*\n|<h[1-6][^>]*>[^<\n]*(?:效果展示|附图|PPT 汇报)[^<\n]*<\/h[1-6]>\s*)/g;function Vr(c,r){const t=r.filter(u=>u&&!c.includes(u));if(t.length===0)return c;const n=t.map(u=>`![效果展示](${u})`).join(`
`);let a=null,b;const i=new RegExp(Fr.source,"g");for(;(b=i.exec(c))!==null;)a=b;if(!a){const u=c.indexOf("<!-- details -->");return u!==-1?`${c.slice(0,u).trimEnd()}

${n}

${c.slice(u)}`:`${c.trimEnd()}

${n}
`}let o=a.index+a[0].length;const g=c.slice(o),f=g.search(/\n#{1,6} /),s=(f===-1?g:g.slice(0,f)).match(/<div\b[^>]*>[\s\S]*?<\/div>/);if(s&&s.index!==void 0&&/<video\b/i.test(s[0])){o+=s.index+s[0].length;const u=c.slice(o).match(/^\s*/);u&&(o+=u[0].length)}return`${c.slice(0,o)}
${n}
${c.slice(o)}`}const Kr=({data:c,type:r})=>{var k,m,j,l,h;const{id:t}=je(),n=c.find(y=>y.slug===t),[a,b]=p.useState(n!=null&&n.hasDemo&&((k=n==null?void 0:n.details)!=null&&k.demoOnly)?"demo":"details"),[i,o]=p.useState(!1);if(p.useEffect(()=>{const y=()=>{var v;n!=null&&n.hasDemo&&((v=n==null?void 0:n.details)!=null&&v.demoOnly)||window.location.hash.includes("demo")&&(n!=null&&n.hasDemo)?b("demo"):b("details")};return y(),window.addEventListener("hashchange",y),()=>window.removeEventListener("hashchange",y)},[t,n==null?void 0:n.hasDemo,(m=n==null?void 0:n.details)==null?void 0:m.demoOnly]),!n)return e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Project not found"}),e.jsx(I,{to:"/",className:"btn-ghost mt-6",children:"← Back to index"})]})});const g="<!-- details -->",f=Vr(String(n.details.content||""),(n.details.image??[]).map(y=>String(y||"").trim()).filter(Boolean)),d=f.indexOf(g),s=(d===-1?f:f.slice(0,d)).trim(),u=d===-1?"":f.slice(d+g.length).trim();return e.jsxs("div",{className:"animate-rise-in pb-16",children:[e.jsx("div",{className:"sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-14 items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[e.jsx(I,{to:`/${r}`,className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink",children:"← Index"}),e.jsx("span",{className:"hidden h-3 w-px bg-rule md:block","aria-hidden":"true"}),e.jsx("h2",{className:"truncate text-sm font-bold tracking-tight text-ink",children:n.title})]}),!((j=n.details)!=null&&j.demoOnly)&&e.jsxs("div",{className:"flex shrink-0 border border-rule",role:"group","aria-label":"View mode",children:[e.jsx("button",{onClick:()=>b("details"),className:`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${a==="details"?"bg-ink text-canvas":"text-ink-3 hover:text-ink"}`,children:"Docs"}),n.hasDemo&&e.jsxs("button",{onClick:()=>b("demo"),className:`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${a==="demo"?"bg-accent text-accent-ink":"text-ink-3 hover:text-ink"}`,children:[e.jsxs("span",{className:"relative flex h-1.5 w-1.5",children:[e.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-accent-ink/75"}),e.jsx("span",{className:"relative h-1.5 w-1.5 rounded-full bg-accent-ink"})]}),"Demo"]})]})]})}),a==="details"?e.jsx("div",{className:"shell py-8 md:py-12",children:e.jsxs("div",{className:"mx-auto max-w-5xl",children:[((l=n.tech)==null?void 0:l.length)>0&&e.jsx("div",{className:"mb-6 flex flex-wrap gap-1.5",children:n.tech.map((y,v)=>e.jsx("span",{className:"chip",children:y},v))}),e.jsxs("div",{className:"mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsxs("span",{children:["NO. ",n.id]}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:n.year}),e.jsx("span",{className:"text-rule","aria-hidden":"true",children:"/"}),e.jsx("span",{children:n.category})]}),e.jsx("h1",{className:"text-display-sm mb-6",children:n.title}),e.jsxs("details",{className:"group mb-12 border border-rule bg-surface",open:i,onToggle:y=>o(y.target.open),children:[e.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7",children:[e.jsx("span",{className:"eyebrow",children:"Overview"}),e.jsxs("span",{className:"font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180",children:[i?"Collapse":"Expand"," ▾"]})]}),e.jsxs("div",{className:"space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6",children:[n.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Description"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.description})]}),n.details.abstract&&n.details.abstract!==n.description&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Abstract"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.abstract})]}),n.details.challenge&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Challenges"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.challenge})]}),n.details.solution&&e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow mb-2",children:"Methodology"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:n.details.solution})]})]})]}),s&&e.jsx("section",{id:"content",children:e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(ne,{remarkPlugins:[be],rehypePlugins:[ae],components:qe,children:s})})}),u&&e.jsxs("section",{id:"details",className:"mt-12",children:[e.jsxs("div",{className:"section-head mb-8",children:[e.jsx("p",{className:"eyebrow",children:"细节"}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"Methods"})]}),e.jsx("div",{className:"prose-custom text-base leading-relaxed text-ink-2",children:e.jsx(ne,{remarkPlugins:[be],rehypePlugins:[ae],components:qe,children:u})})]})]})}):(h=n.details)!=null&&h.demoOnly?e.jsx(p.Suspense,{fallback:e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const y=he(n.slug);return y?e.jsx(y,{}):e.jsx("div",{className:"flex items-center justify-center py-20",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()}):e.jsx("div",{className:"h-[calc(100vh-3.5rem)] w-full bg-surface-2",children:e.jsx(p.Suspense,{fallback:e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Loading demo..."})}),children:(()=>{const y=he(n.slug);return y?e.jsx(y,{}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx("p",{className:"eyebrow",children:"Demo not available"})})})()})})]})},Zr=()=>e.jsx("div",{className:"shell flex h-full flex-col items-center justify-center py-20 text-center",children:e.jsxs("div",{className:"animate-rise-in max-w-md space-y-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"icon-btn h-14 w-14",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:1.4,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"eyebrow",children:"Contact"}),e.jsx("h2",{className:"text-display-sm",children:"Let's work together"}),e.jsx("p",{className:"max-w-measure text-base leading-relaxed text-ink-2",children:"Interested in collaboration, research, or just want to say hello? Reach out anytime."})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 pt-4",children:[e.jsxs("a",{href:"mailto:lily1326685527@gmail.com?subject=Research%20Collaboration",className:"btn-solid",children:["Send message",e.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),e.jsx("p",{className:"font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:"lily1326685527@gmail.com"})]})]})}),Qr=()=>typeof document<"u"&&document.documentElement.classList.contains("dark"),Yr=({className:c=""})=>{const[r,t]=p.useState(Qr);p.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)"),b=()=>{let i=null;try{i=localStorage.getItem("theme")}catch{}if(i==="light"||i==="dark")return;const o=a.matches;document.documentElement.classList.toggle("dark",o),t(o)};return a.addEventListener("change",b),()=>a.removeEventListener("change",b)},[]);const n=()=>{const a=!r;t(a),document.documentElement.classList.toggle("dark",a);try{localStorage.setItem("theme",a?"dark":"light")}catch{}};return e.jsx("button",{onClick:n,className:`icon-btn ${c}`.trim(),"aria-label":r?"Switch to light theme":"Switch to dark theme",title:r?"切换到日间模式":"切换到夜间模式",children:r?e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:1.6,viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})};function Ve(){const[c,r]=p.useState(0);return p.useEffect(()=>(ur(),lr(()=>r(t=>t+1))),[]),c}function Ne(){const[c,r]=p.useState(!1);return p.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>r(t.matches);return n(),t.addEventListener("change",n),()=>t.removeEventListener("change",n)},[]),c}function Ke(c){const[r,t]=p.useState(0),n=c.map(o=>o.src).join("|");p.useEffect(()=>{t(0)},[n]);const a=c[r];return{current:a,failed:!a,advance:()=>t(o=>o+1)}}function Xr(c){const r=Ne(),t=p.useRef(null),[n,a]=p.useState(!1),[b,i]=p.useState(!1),o=!!c&&!r&&!n;return p.useEffect(()=>{a(!1),i(!1)},[c,r]),p.useEffect(()=>{const g=t.current;if(!g||!o)return;g.muted=!0;const f=document.querySelector("main > section"),d=new IntersectionObserver(s=>{const u=s[0];u&&(u.isIntersecting?g.play().catch(()=>{}):g.pause())},{root:f instanceof HTMLElement?f:null,threshold:.2});return d.observe(g),()=>d.disconnect()},[o,c]),{ref:t,active:o,ready:b,fail:()=>a(!0),markReady:()=>i(!0)}}function Ze({src:c,poster:r}){const t=Xr(c);return t.active?e.jsx("video",{ref:t.ref,src:c,poster:r,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"metadata",disablePictureInPicture:!0,"data-cover-video":"",style:{opacity:t.ready?1:0},onCanPlay:t.markReady,onError:t.fail}):null}function Qe({work:c,showGo:r=!0}){Ve();const t=We(c),{current:n,failed:a,advance:b}=Ke(t);if(a||!n)return e.jsxs("div",{className:"im miss","data-cover":"type",children:[e.jsx("span",{className:"mt",children:c.title}),e.jsx("span",{className:"ml",children:c.group}),r&&e.jsx("span",{className:"go",children:"查看 →"})]});const i=$e(c);return e.jsxs("div",{className:`im ${n.logo?"logo":""}`,"data-cover":i?"video":n.logo?"logo":"photo",children:[e.jsx("img",{src:n.src,srcSet:n.logo?void 0:n.srcSet,sizes:n.srcSet?"(max-width: 768px) 92vw, 40vw":void 0,alt:"",onError:b}),i?e.jsx(Ze,{src:i,poster:n.logo?void 0:n.src}):null,r&&e.jsx("span",{className:"go",children:"查看 →"})]})}function Ye({work:c,mobile:r}){Ve();const t=mr(c,r),{current:n,failed:a,advance:b}=Ke(t);if(a||!n)return e.jsx("div",{className:"frame miss","data-cover":"type",children:e.jsx("strong",{children:c.title})});const i=$e(c);return e.jsxs("div",{className:"frame","data-cover":i?"video":"photo",children:[e.jsx("img",{src:n.src,alt:"",onError:b}),i?e.jsx(Ze,{src:i,poster:n.src}):null]})}function ve({work:c,no:r}){const t=String(r??c.no).padStart(2,"0");return e.jsxs(I,{to:c.href,className:"card",children:[e.jsx(Qe,{work:c}),e.jsxs("div",{className:"cap",children:[e.jsx("span",{className:"no",children:t}),e.jsxs("h3",{children:[e.jsx("span",{className:"ttl",children:c.title}),c.subtitle?e.jsx("em",{children:c.subtitle}):null]}),e.jsx("span",{className:"yr",children:c.yearLabel}),c.description?e.jsx("p",{className:"blurb",children:c.description}):null,e.jsx("div",{className:"tag",children:e.jsx("span",{children:c.group})})]})]})}function G({n:c,title:r,en:t,right:n}){return e.jsxs("div",{className:"shead",children:[e.jsx("span",{className:"n",children:c}),e.jsxs("h2",{children:[r,t?e.jsx("em",{children:t}):null]}),e.jsx("div",{className:"r",children:n})]})}function ge(){const c=()=>{const r=document.querySelector("main > section");r instanceof HTMLElement&&r.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"foot",children:[e.jsxs("div",{className:"grid12 fr",children:[e.jsx("div",{className:"c1",children:e.jsx("span",{className:"sq"})}),e.jsxs("div",{className:"c2",children:[e.jsx("span",{className:"lab",children:"联系"}),e.jsx("a",{href:`mailto:${Q}`,children:Q})]}),e.jsxs("div",{className:"c3",children:[e.jsx("span",{className:"lab",children:"社交"}),e.jsx("div",{children:e.jsx("a",{href:"https://www.instagram.com/lililin_portfolio/",target:"_blank",rel:"noopener",children:"Instagram ↗"})}),e.jsx("div",{children:e.jsx("a",{href:"https://github.com/lililin0324",target:"_blank",rel:"noopener",children:"GitHub ↗"})}),e.jsx("div",{children:e.jsx("a",{href:"https://www.linkedin.com/in/lililin0324",target:"_blank",rel:"noopener",children:"LinkedIn ↗"})})]}),e.jsxs("div",{className:"c5",children:[e.jsx("span",{className:"lab",children:"© 2026"}),e.jsx("div",{children:"林丽丽"}),e.jsx("button",{type:"button",className:"lnk",onClick:c,style:{color:"#fff",marginTop:12},children:"回到顶部 ↑"})]})]}),e.jsx("div",{className:"big",children:"Lili Lin"})]})}function E(c){return String(c).padStart(2,"0")}const Jr=[{id:"all",label:"全部",count:$},{id:"产品",label:"产品",count:H.产品},{id:"游戏",label:"游戏",count:H.游戏},{id:"城市与 AI",label:"城市与 AI",count:H["城市与 AI"]}],et=["产品","游戏","城市与 AI"];function ct({work:c}){const[r,t]=p.useState(!1);return e.jsxs(I,{to:c.href,className:"lt",title:`${c.title} · ${c.subtitle}`,"aria-label":c.title,children:[e.jsx("span",{className:r||!c.icon?"lt-pic miss":"lt-pic",children:r||!c.icon?e.jsx("i",{children:c.title.slice(0,2)}):e.jsx("img",{src:c.icon,alt:"",loading:"lazy",onError:()=>t(!0)})}),e.jsx("span",{className:"lt-name",children:c.title})]})}function rt(){const[c,r]=p.useState(!1);return p.useEffect(()=>{const t=window.matchMedia("(max-width: 768px)"),n=()=>r(t.matches);return n(),t.addEventListener("change",n),()=>t.removeEventListener("change",n)},[]),c}function tt(){const c=Ne(),r=rt(),[t,n]=p.useState(0),[a,b]=p.useState(!1),[i,o]=p.useState("all"),[g,f]=p.useState("list"),d=p.useRef(null),s=O[t]||O[0],u=i==="all"?M:M.filter(l=>l.group===i),k=i==="all"?u.slice(0,r?4:10):u;p.useEffect(()=>{if(c||a||O.length<2)return;const l=window.setInterval(()=>{n(h=>(h+1)%O.length)},6e3);return()=>window.clearInterval(l)},[c,a,t]);const m=()=>{var l;(l=document.getElementById("featured"))==null||l.scrollIntoView({behavior:c?"auto":"smooth",block:"start"})},j=l=>{o(l),requestAnimationFrame(()=>{var h;(h=d.current)==null||h.scrollIntoView({behavior:c?"auto":"smooth",block:"start"})})};return e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"fold",onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:[e.jsx("div",{className:"hero",children:s&&e.jsx(I,{to:s.href,className:"hit","aria-label":s.title,children:e.jsx(Ye,{work:s,mobile:r},s.slug+String(r))})}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-main",children:[e.jsxs("h1",{children:["Lili Lin",e.jsx("small",{children:"林丽丽"})]}),e.jsx("p",{className:"sub",children:"AI 产品设计、游戏与交互，以及 AI × 城市研究。"})]}),e.jsxs("div",{className:"side side-desk",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"kicker",children:["正在展示 ",E(t+1)," / ",E(O.length)]}),s&&e.jsxs("div",{className:"now",children:[s.title,s.subtitle?e.jsx("em",{children:s.subtitle}):null]}),e.jsx("div",{className:"prog",children:O.map((l,h)=>e.jsx("button",{type:"button",className:h===t?"on":"","aria-label":l.title,onClick:()=>n(h),children:h===t&&!c?e.jsx("i",{},t):null},l.slug))})]}),e.jsxs("button",{type:"button",className:"btn",onClick:m,children:["浏览作品 ",e.jsx("i",{children:"↓"})]})]})]}),e.jsxs("div",{className:"mob-only",style:{marginTop:20},children:[e.jsxs("div",{className:"kicker",children:["正在展示 ",E(t+1)," / ",E(O.length)]}),s&&e.jsxs("div",{className:"now",children:[s.title,s.subtitle?e.jsx("em",{children:s.subtitle}):null]}),e.jsx("div",{className:"prog",children:O.map((l,h)=>e.jsx("button",{type:"button",className:h===t?"on":"",onClick:()=>n(h),"aria-label":l.title,children:h===t&&!c?e.jsx("i",{},`m${t}`):null},l.slug))}),e.jsxs("button",{type:"button",className:"btn block",style:{width:"100%",marginTop:18},onClick:m,children:["浏览作品 ",e.jsx("i",{children:"↓"})]})]})]})]}),e.jsxs("section",{className:"sec w",id:"featured",children:[e.jsx(G,{n:"01",title:"精选作品",en:"Selected"}),e.jsx("div",{className:"feat",children:sr.map((l,h)=>e.jsx(ve,{work:l,no:h+1},l.slug))})]}),e.jsxs("section",{className:"sec w",id:"index",children:[e.jsx(G,{n:"02",title:"全部作品",en:"Index"}),e.jsxs("div",{className:"logowall",children:[e.jsxs("span",{className:"kicker",children:["图标索引",e.jsx("em",{children:"Logo Index"})]}),et.map(l=>{const h=X(l);return e.jsxs("div",{className:"logorow",children:[e.jsx("div",{className:"logorow-label",children:e.jsx("b",{children:l})}),e.jsx("div",{className:"logorow-items",children:h.map(y=>e.jsx(ct,{work:y},y.href))})]},l)})]}),e.jsxs("div",{className:"filterbar",ref:d,children:[e.jsxs("div",{className:"filterbar-top",children:[e.jsxs("span",{className:"kicker",children:["分类检索",e.jsx("em",{children:"Filter"})]}),e.jsxs("div",{className:"viewtog",children:[e.jsx("button",{type:"button",className:g==="list"?"on":"",onClick:()=>f("list"),children:"列表"}),e.jsx("button",{type:"button",className:g==="grid"?"on":"",onClick:()=>f("grid"),children:"网格"})]})]}),e.jsx("div",{className:"filterbar-row",children:e.jsx("div",{className:"chips",children:Jr.map(l=>e.jsxs("button",{type:"button",className:i===l.id?"on":"","aria-pressed":i===l.id,onClick:()=>j(l.id),children:[l.label,e.jsx("sup",{children:l.count})]},l.id))})})]}),g==="list"?e.jsx(Xe,{items:k}):e.jsx("div",{className:"cards",children:k.map(l=>e.jsx(ve,{work:l},l.href))}),e.jsx("div",{className:"more",children:e.jsx(I,{className:"lnk",to:"/work",children:"完整名录 →"})})]}),e.jsxs("section",{className:"sec",id:"elsewhere",children:[e.jsx("div",{className:"w",children:e.jsx(G,{n:"03",title:"相关项目",en:"Elsewhere"})}),e.jsxs("div",{className:"mj",children:[e.jsx("img",{className:"pan",src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg",alt:""}),e.jsx("div",{className:"shade"}),e.jsxs("div",{className:"box",children:[e.jsx("h3",{children:"幕景宇宙"}),e.jsx("div",{className:"row2",children:e.jsx("a",{className:"btn",href:we,target:"_blank",rel:"noopener",children:"前往官网 ↗"})})]})]})]}),e.jsxs("section",{className:"sec w",id:"about-teaser",children:[e.jsx(G,{n:"04",title:"关于",en:"About",right:e.jsx(I,{to:"/about",children:e.jsx("b",{children:"完整介绍 →"})})}),e.jsxs("div",{className:"grid12 ab",children:[e.jsx("div",{className:"pic",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png",alt:"林丽丽"})}),e.jsxs("div",{className:"txt",children:[e.jsx("blockquote",{children:"我喜欢设计，也喜欢写代码。产品、设计与技术，是构建好产品的三种语言。"}),e.jsxs("div",{className:"facts",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"教育"}),"首尔大学 城市与区域规划",e.jsx("br",{}),"华中科技大学 建筑学"]}),e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"学术报告"}),"8 场 · AAAI Workshop、CUPUM、ACSP、IACP 等"]})]})]})]})]}),e.jsx(ge,{})]})}function Xe({items:c}){return e.jsxs("div",{className:"idx",children:[e.jsxs("div",{className:"row hd",children:[e.jsx("span",{className:"no",children:"No."}),e.jsx("span",{className:"t",children:"作品"}),e.jsx("span",{className:"c",children:"类别"}),e.jsx("span",{className:"d",children:"简介"}),e.jsx("span",{className:"y",children:"年份"})]}),c.map(r=>e.jsxs(I,{to:r.href,className:"row",children:[e.jsx("span",{className:"no",children:E(r.no)}),e.jsxs("span",{className:"t",children:[r.title,r.subtitle?e.jsx("em",{children:r.subtitle}):null]}),e.jsx("span",{className:"c",children:r.group}),e.jsx("span",{className:"d",children:r.description}),e.jsx("span",{className:"y",children:r.yearLabel})]},r.href))]})}const nt=[{id:"all",label:"全部",count:$},{id:"产品",label:"产品",count:H.产品},{id:"游戏",label:"游戏",count:H.游戏},{id:"城市与 AI",label:"城市与 AI",count:H["城市与 AI"]}],at={all:{title:"作品",count:$,intro:"产品、游戏与城市研究三条线的全部项目。点击卡片进入详情，详情页底部可直接翻到下一件。"},product:{title:"产品",count:M.filter(c=>c.routeType==="product").length,intro:"产品项目。全部 28 件在作品名录。"},game:{title:"游戏",count:M.filter(c=>c.routeType==="game").length,intro:"游戏设计、实习与独立开发。"},ai:{title:"AI",count:M.filter(c=>c.routeType==="ai").length,intro:"AI 与城市研究交叉的项目。"},planning:{title:"Planning",count:M.filter(c=>c.routeType==="planning").length,intro:"城市规划与建筑设计项目。"},notes:{title:"笔记",count:ke,intro:"教程笔记，不计入 28 件作品。"}};function bt(c,r){return c==="notes"?F:c==="product"?M.filter(t=>t.routeType==="product"):c==="game"?M.filter(t=>t.routeType==="game"):c==="ai"?M.filter(t=>t.routeType==="ai"):c==="planning"?M.filter(t=>t.routeType==="planning"):r==="all"?M:M.filter(t=>t.group===r)}function K({scope:c="all"}){const[r,t]=p.useState("all"),[n,a]=p.useState("grid"),[b,i]=p.useState(12),o=p.useRef(null),g=at[c],f=p.useMemo(()=>bt(c,r),[c,r]),d=f.slice(0,b);return p.useEffect(()=>{i(12)},[r,c]),p.useEffect(()=>{const s=o.current;if(!s)return;const u=document.querySelector("main > section"),k=new IntersectionObserver(m=>{m.some(j=>j.isIntersecting)&&i(j=>Math.min(f.length,j+12))},{root:u instanceof HTMLElement?u:null,rootMargin:"480px"});return k.observe(s),()=>k.disconnect()},[f.length,b]),e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"w ph",children:[e.jsxs("div",{className:"grid12",children:[e.jsxs("h1",{children:[g.title,e.jsx("sup",{children:g.count})]}),e.jsx("p",{className:"intro",children:g.intro})]}),e.jsxs("div",{className:"toolbar",children:[c==="all"?e.jsx("div",{className:"filters",children:nt.map(s=>e.jsxs("button",{type:"button",className:r===s.id?"on":"",onClick:()=>t(s.id),children:[s.label,e.jsx("sup",{children:s.count})]},s.id))}):e.jsxs("div",{className:"filters",children:[e.jsxs("span",{className:"lab",children:[d.length," / ",f.length]}),c!=="notes"&&e.jsxs(I,{to:"/work",children:["全部 ",$," 件作品 →"]})]}),e.jsxs("div",{className:"viewtog",children:[e.jsx("button",{type:"button",className:n==="grid"?"on":"",onClick:()=>a("grid"),children:"网格"}),e.jsx("button",{type:"button",className:n==="list"?"on":"",onClick:()=>a("list"),children:"列表"})]})]}),n==="grid"?e.jsx("div",{className:"cards",children:d.map(s=>e.jsx(ve,{work:s},s.href))}):e.jsx(Xe,{items:d}),e.jsx("div",{ref:o}),b<f.length&&e.jsxs("p",{className:"lab",style:{marginTop:28},children:["继续滚动以加载其余 ",f.length-b," 件"]}),c==="notes"&&e.jsx("div",{style:{marginTop:48},children:e.jsx(G,{n:"—",title:"作品",en:"Works",right:e.jsx(I,{to:"/work",children:e.jsxs("b",{children:[$," 件 →"]})})})})]}),e.jsx(ge,{})]})}const pt=[`${z}/fig/dragon-diffusion/cover.mp4`,`${z}/fig/dragon-diffusion/DragonDiffusion-Demo_(2).mp4`,`${z}/fig/dragon-diffusion/DragonDiffusion-Demo_(3).mp4`];function it(c){if(!c)return 0;const r=pt.indexOf(c);return r===-1?0:r+1}function Je(c){const r=c.dataset.playlist,t=Number(c.dataset.part||"0");if(!r||!t)return null;const n=c.ownerDocument.querySelector(`video[data-playlist="${CSS.escape(r)}"][data-part="${t+1}"]`);return n instanceof HTMLVideoElement?n:null}function st(c){const r=Je(c);r&&r.preload!=="auto"&&(r.preload="auto")}function dt(c){const r=c.dataset.playlist,t=Je(c);if(!r||!t)return;c.ownerDocument.querySelectorAll(`video[data-playlist="${CSS.escape(r)}"]`).forEach(b=>{b!==t&&!b.paused&&b.pause()});const n=t.getBoundingClientRect();n.top>=0&&n.bottom<=window.innerHeight||t.scrollIntoView({behavior:"smooth",block:"nearest"}),t.play().catch(()=>{})}function gt(){const[c,r]=p.useState(!1);return p.useEffect(()=>{const t=window.matchMedia("(max-width: 768px)"),n=()=>r(t.matches);return n(),t.addEventListener("change",n),()=>t.removeEventListener("change",n)},[]),c}function ot(c){let r=c.content||"";r=r.replace(/!\[[^\]]*\]\(([^)]+)\)/g,(a,b)=>c.images.includes(b.trim())?"":a),r=r.replace(/^https?:\/\/\S+\.(?:jpg|jpeg|png|webp|gif)\s*$/gim,""),r=r.trimStart();const t=r.match(/^#\s+([^\n]+)\n*/);t&&t[1].replace(/\s+/g,"")===c.title.replace(/\s+/g,"")&&(r=r.slice(t[0].length));const n=(c.abstract||c.description||"").replace(/\s+/g," ").trim();if(n){const[a,...b]=r.trim().split(/\n\s*\n/);a&&a.replace(/\s+/g," ").trim()===n&&(r=b.join(`

`))}return r.trim()}function Y({routeType:c}){const{id:r}=je(),t=jr(r,c),n=gt(),[a,b]=p.useState(!1),[i,o]=p.useState(!1),[g,f]=p.useState(0);p.useEffect(()=>{b(!!(t!=null&&t.demoOnly)),o(!1),f(0)},[t==null?void 0:t.href,t==null?void 0:t.demoOnly]),p.useEffect(()=>{const v=document.querySelector("main > section");if(!(v instanceof HTMLElement))return;const N=()=>{const C=v.scrollHeight-v.clientHeight;f(C<=0?0:v.scrollTop/C)};return N(),v.addEventListener("scroll",N,{passive:!0}),()=>v.removeEventListener("scroll",N)},[t==null?void 0:t.href,a]);const d=p.useMemo(()=>t?ot(t):"",[t]),s=(t==null?void 0:t.images)||[],u=i?s:s.slice(0,3),k=Math.max(0,s.length-3);if(!t)return e.jsxs("div",{className:"swiss w",style:{padding:"64px 48px"},children:[e.jsx("p",{className:"lab",children:"未找到"}),e.jsx("h1",{style:{font:"700 64px/1 var(--disp)",marginTop:12},children:"没有这件作品"}),e.jsx(I,{to:"/work",className:"lnk",children:"← 返回作品"})]});const m=t.abstract||t.description,j=gr(t),l=t.group==="笔记"?"/tutorial":`/${t.routeType}`,h=t.hasDemo?he(t.slug):void 0;if(a&&h)return e.jsxs("div",{className:"swiss",children:[e.jsxs("div",{className:"demo-bar",children:[e.jsx("button",{type:"button",className:"lnk",onClick:()=>b(!1),children:"← 返回介绍"}),e.jsx("span",{className:"lab",children:t.title})]}),e.jsx("div",{className:"demo-frame",children:e.jsx(p.Suspense,{fallback:e.jsx("p",{className:"lab",style:{padding:24},children:"Loading demo…"}),children:e.jsx(h,{})})})]});const y=[];return t.tech.length&&y.push({dt:"技术",dd:t.tech.join(" · ")}),t.yearLabel&&y.push({dt:"年份",dd:t.yearLabel}),t.group&&y.push({dt:"类别",dd:`${t.group}${t.category?` · ${t.category}`:""}`}),t.role&&y.push({dt:"角色",dd:t.role}),e.jsxs("div",{className:"swiss",children:[e.jsx("div",{className:"read","aria-hidden":"true",children:e.jsx("i",{style:{width:`${Math.round(g*100)}%`}})}),e.jsxs("div",{className:"dhero",children:[e.jsx(Ye,{work:t,mobile:n}),s.length>0&&e.jsxs("div",{className:"cap",style:{position:"absolute",left:48,bottom:20,color:"#fff",font:"500 12px/1 Inter, sans-serif",letterSpacing:".06em"},children:["图 01 / ",E(s.length)]})]}),e.jsxs("section",{className:"w dh",children:[e.jsxs("div",{className:"grid12",children:[e.jsxs("div",{className:"crumb",children:[e.jsx(I,{to:t.group==="笔记"?"/tutorial":"/work",children:t.group==="笔记"?"笔记":"作品"}),e.jsx("span",{children:"/"}),e.jsx(I,{to:l,children:t.group}),e.jsx("span",{children:"/"}),e.jsx("b",{children:t.title})]}),e.jsx("h1",{className:t.title.length>16?"long":void 0,children:t.title}),t.subtitle?e.jsx("p",{className:"sub",children:t.subtitle}):null,e.jsxs("div",{className:"meta",children:[e.jsx("b",{children:E(t.no)}),e.jsxs("span",{children:[t.group,t.category?` · ${t.category}`:""]}),e.jsx("span",{children:t.yearLabel})]}),t.hasDemo&&h&&e.jsxs("div",{className:"act",children:[e.jsxs("button",{type:"button",className:"btn",onClick:()=>b(!0),children:["打开 Demo ",e.jsx("i",{children:"↗"})]}),e.jsx("span",{className:"lab",children:"在本页运行"})]})]}),e.jsxs("div",{className:"grid12 db",children:[m?e.jsx("p",{className:"intro",children:m}):e.jsx("div",{}),y.length>0&&e.jsx("dl",{children:y.map(v=>e.jsxs("div",{children:[e.jsx("dt",{children:v.dt}),e.jsx("dd",{children:v.dd})]},v.dt))})]}),(t.challenge||t.solution)&&e.jsxs("div",{className:"grid12 cs",children:[t.challenge&&e.jsxs("div",{className:"k",children:[e.jsx("div",{className:"n",children:"01"}),e.jsx("h3",{children:"挑战"}),e.jsx("p",{children:t.challenge})]}),t.solution&&e.jsxs("div",{className:"k",children:[e.jsx("div",{className:"n",children:"02"}),e.jsx("h3",{children:"方案"}),e.jsx("p",{children:t.solution})]})]}),d&&e.jsx("div",{className:"article-body",children:e.jsx(ne,{remarkPlugins:[be],rehypePlugins:[ae],components:{p:({node:v,children:N})=>{var x;const C=((x=v==null?void 0:v.children)==null?void 0:x.length)===1?v.children[0]:null;return e.jsx("p",{className:(C==null?void 0:C.tagName)==="a"?"extlink":void 0,children:N})},a:({href:v,children:N})=>e.jsx("a",{href:v,target:v!=null&&v.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:N}),img:({src:v,alt:N})=>e.jsx("img",{src:v,alt:N||"",onError:C=>{C.target.style.display="none"}}),video:({src:v,poster:N,node:C,...x})=>{const A=it(typeof v=="string"?v:void 0);return e.jsx("video",{...x,src:v,poster:N||s[0],controls:!0,playsInline:!0,preload:"metadata","data-playlist":A?"dragon-demo":void 0,"data-part":A?String(A):void 0,onPlay:T=>{var P;(P=x.onPlay)==null||P.call(x,T),A&&st(T.currentTarget)},onEnded:T=>{var P;(P=x.onEnded)==null||P.call(x,T),A&&dt(T.currentTarget)}})}},children:d})}),u.length>0&&e.jsxs("div",{className:"gal",children:[u[0]&&e.jsxs("figure",{className:"fig",children:[e.jsx("img",{src:u[0],alt:"",onError:v=>{v.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",E(1)]}),e.jsxs("span",{children:[E(1)," / ",E(s.length)]})]})]}),u.length>1&&e.jsx("div",{className:"grid12 two",children:u.slice(1,3).map((v,N)=>e.jsxs("figure",{className:"fig",children:[e.jsx("img",{src:v,alt:"",loading:"lazy",onError:C=>{C.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",E(N+2)]}),e.jsxs("span",{children:[E(N+2)," / ",E(s.length)]})]})]},v))}),i&&u.slice(3).map((v,N)=>e.jsxs("figure",{className:"fig",style:{marginTop:24},children:[e.jsx("img",{src:v,alt:"",loading:"lazy",onError:C=>{C.target.style.display="none"}}),e.jsxs("figcaption",{children:[e.jsxs("span",{children:["图 ",E(N+4)]}),e.jsxs("span",{children:[E(N+4)," / ",E(s.length)]})]})]},v)),!i&&k>0&&e.jsx("div",{style:{marginTop:28,display:"flex",justifyContent:"center"},children:e.jsxs("button",{type:"button",className:"lnk",onClick:()=>o(!0),children:["展开其余 ",k," 张图 ↓"]})})]}),e.jsxs("div",{className:"grid12 pn",children:[e.jsxs("div",{className:"back",children:[e.jsx("span",{className:"lab",children:"目录"}),e.jsxs(I,{className:"lnk",to:t.group==="笔记"?"/tutorial":"/work",children:["← 返回",t.group==="笔记"?"笔记":"作品"]})]}),e.jsxs(I,{className:"nx",to:j.href,children:[e.jsxs("div",{children:[e.jsx("span",{className:"lab",children:"下一件 →"}),e.jsx("h4",{children:j.title}),e.jsxs("p",{children:[j.subtitle?`${j.subtitle} · `:"",j.yearLabel]})]}),e.jsx("div",{className:"th",children:e.jsx(Qe,{work:j,showGo:!1})})]})]})]}),e.jsx(ge,{})]})}const ft=["城市气候与韧性","AI 辅助城市规划","机器学习与数据分析","空间统计与 GIS","React / Next.js 生态","TypeScript 架构","WebGL / Three.js 3D 可视化","UI 设计系统"],le=[{date:"2026.07",event:"IACP 第 20 届年会",city:"西安",title:"Nonlinear Impacts of Urban Form on Urban Heat Islands — Seoul",format:"口头报告"},{date:"2026.01",event:"39th AAAI Workshop · AI for Urban Planning",city:"新加坡",title:"Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales",format:"海报"},{date:"2025.10",event:"ACSP 第 65 届年会",city:"明尼阿波利斯",title:"Nonlinear relationships between urban form and extreme heat (XAI)",format:"口头报告"},{date:"2025.07",event:"IACP 第 19 届年会",city:"厦门",title:"Knowledge Graph Generation from Urban Planning Texts",format:"口头报告"},{date:"2025.06",event:"CUPUM",city:"伦敦",title:"Knowledge Graph Generation from Urban Planning Texts",format:"口头报告"},{date:"2025.04",event:"ICUA 第 52 届",city:"温哥华",title:"Local Climate Zone and Urban Heat Resilience — New York",format:"口头报告"},{date:"2025.02",event:"39th AAAI Workshop · AI for Urban Planning",city:"费城",title:"Knowledge Graph Generation from Urban Planning Texts",format:"海报"},{date:"2024.10",event:"UDIK 秋季学术会议",city:"首尔",title:"Decentralized future urban design based on neurons",format:"口头报告"}],lt="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/",ut=[{name:"亚洲设计学年奖 银奖、铜奖、优秀奖",year:"2023"},{name:"米兰设计周省级一等奖",year:"2023",file:"米兰设计周2023.jpg"},{name:"中央国际玻璃国际建筑设计竞赛 佳作奖",year:"2023",file:"中央国际玻璃竞赛2023.jpg"},{name:"“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖",year:"2022",files:[{file:"互联网+省赛市赛名单2022.jpg",label:"武汉市银奖 / 湖北省铜奖名单"},{file:"互联网+省赛铜奖2022.jpg",label:"省赛铜奖证书"}]},{name:"eVolo 摩天大楼建筑竞赛 编辑部推荐奖",year:"2022",file:"evolo摩天大楼竞赛2022.jpg"},{name:"腾讯游戏极限开发挑战赛 金奖",year:"2021",file:"腾讯华科Gamejams金奖2021.jpg"}],ht=[{name:"最佳跨界融合奖 · 同济 AI4CITIES 工作坊",year:"2025",file:"AI4CITIES最佳跨界融合奖.jpg"},{name:"国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》",year:"2023"},{name:"Digital Futures workshop 参与证书",year:"2023",file:"digitalfuture2023.jpg"}];function ec(c){var r;return(r=c.files)!=null&&r.length?c.files:c.file?[{file:c.file}]:[]}function vt(){const[c,r]=p.useState(null),[t,n]=p.useState(0),[a,b]=p.useState(!1),[i,o]=p.useState(!1);p.useEffect(()=>{const d=window.matchMedia("(max-width: 768px)"),s=()=>o(d.matches);return s(),d.addEventListener("change",s),()=>d.removeEventListener("change",s)},[]),p.useEffect(()=>{if(!c)return;const d=s=>{s.key==="Escape"&&r(null)};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[c]);const g=i&&!a?le.slice(0,4):le,f=c?ec(c):[];return e.jsxs("div",{className:"swiss",children:[e.jsxs("section",{className:"w ah",children:[e.jsxs("div",{className:"grid12",children:[e.jsx("h1",{children:"关于"}),e.jsx("div",{className:"pic",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png",alt:"林丽丽"})}),e.jsx("p",{className:"lead",children:"我喜欢设计，也喜欢写代码。"})]}),e.jsxs("div",{className:"grid12 bio",children:[e.jsx("div",{className:"l",children:e.jsx("span",{className:"lab",children:"林丽丽 · Lili Lin"})}),e.jsxs("div",{className:"t",children:[e.jsx("p",{children:"我是林丽丽，毕业于首尔大学城市与区域规划专业，拥有华中科技大学建筑学背景。"}),e.jsx("p",{children:"我关注 AI 与产品创新，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。"}),e.jsx("p",{children:"与此同时，我持续探索 AI × 城市 × 空间的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。"}),e.jsx("p",{children:"我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。"})]}),e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"lab",children:"教育"}),e.jsxs("div",{children:["首尔大学",e.jsx("br",{}),"城市与区域规划"]}),e.jsxs("div",{style:{marginTop:14},children:["华中科技大学",e.jsx("br",{}),"建筑学"]})]})]}),e.jsxs("div",{className:"blk",children:[e.jsx(G,{n:"01",title:"方向与能力",en:"Competencies"}),e.jsx("div",{className:"grid12 comp",children:ft.map((d,s)=>e.jsxs("div",{children:[e.jsx("span",{children:String(s+1).padStart(2,"0")}),d]},d))})]}),e.jsxs("div",{className:"blk",children:[e.jsx(G,{n:"02",title:"学术报告",en:"Talks",right:e.jsx("span",{children:"8 场 · 2024–2026"})}),e.jsx("div",{className:"tk",children:g.map(d=>e.jsxs("div",{className:"r",children:[e.jsx("span",{className:"d",children:d.date}),e.jsx("span",{className:"e",children:d.event}),e.jsx("span",{className:"c",children:d.city}),e.jsx("span",{className:"tt",children:d.title}),e.jsx("span",{className:"f",children:d.format})]},d.date+d.event))}),i&&e.jsx("button",{type:"button",className:"lnk",style:{marginTop:16},onClick:()=>b(d=>!d),children:a?"收起":`展开其余 ${le.length-4} 场`})]}),e.jsxs("div",{className:"blk",children:[e.jsx(G,{n:"03",title:"竞赛与项目",en:"Awards",right:e.jsx("span",{children:"带 ⊕ 的条目可点开证书"})}),e.jsxs("div",{className:"grid12 aw",children:[e.jsxs("div",{className:"col",children:[e.jsxs("h3",{children:["竞赛奖项",e.jsx("em",{children:"Competitions"})]}),ut.map(d=>e.jsx(Ee,{item:d,onOpen:s=>{r(s),n(0)}},d.name))]}),e.jsxs("div",{className:"col",children:[e.jsxs("h3",{children:["项目与其他",e.jsx("em",{children:"Projects"})]}),ht.map(d=>e.jsx(Ee,{item:d,onOpen:s=>{r(s),n(0)}},d.name))]})]})]}),e.jsxs("div",{className:"blk",children:[e.jsx(G,{n:"04",title:"链接",en:"Links"}),e.jsxs("div",{className:"lk",children:[e.jsxs("a",{href:"https://www.instagram.com/lililin_portfolio/",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"Instagram"}),e.jsx("span",{children:"instagram.com/lililin_portfolio"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:"https://github.com/lililin0324",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"GitHub"}),e.jsx("span",{children:"github.com/lililin0324"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/lililin0324",target:"_blank",rel:"noopener",children:[e.jsx("b",{children:"LinkedIn"}),e.jsx("span",{children:"linkedin.com/in/lililin0324"}),e.jsx("i",{children:"↗"})]}),e.jsxs("a",{href:`mailto:${Q}`,children:[e.jsx("b",{children:"邮件"}),e.jsx("span",{children:Q}),e.jsx("i",{children:"↗"})]})]})]}),e.jsxs("div",{className:"grid12 mjs",children:[e.jsx("div",{className:"im",children:e.jsx("img",{src:"https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg",alt:""})}),e.jsxs("div",{className:"tx",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"lab",children:[e.jsx("span",{className:"sq"})," 另见 · 外部站点"]}),e.jsx("h3",{children:"幕景宇宙"}),e.jsx("p",{children:"幕景宇宙是独立于本作品集的另一个官方站点。"})]}),e.jsx("a",{className:"btn",href:we,target:"_blank",rel:"noopener",style:{alignSelf:"flex-start"},children:"幕景宇宙官网 ↗"})]})]})]}),e.jsx(ge,{}),c&&f[t]&&nc.createPortal(e.jsxs("div",{className:"lightbox",onClick:()=>r(null),role:"dialog","aria-modal":"true",children:[e.jsx("button",{type:"button",className:"x","aria-label":"关闭",onClick:()=>r(null),children:"×"}),e.jsxs("figure",{onClick:d=>d.stopPropagation(),children:[e.jsx("img",{src:`${lt}${encodeURIComponent(f[t].file)}`,alt:c.name}),e.jsxs("figcaption",{children:[c.name," · ",c.year,f.length>1?` · ${t+1} / ${f.length}`:"",f.length>1&&e.jsx("button",{type:"button",className:"lnk",style:{color:"#fff",marginLeft:12},onClick:()=>n(d=>(d+1)%f.length),children:"下一张"})]})]})]}),document.body)]})}function Ee({item:c,onOpen:r}){return ec(c).length>0?e.jsxs("button",{type:"button",className:"it",onClick:()=>r(c),children:[e.jsx("b",{children:c.year}),e.jsx("span",{children:c.name}),e.jsx("i",{children:"⊕"})]}):e.jsxs("div",{className:"it",style:{cursor:"default"},children:[e.jsx("b",{children:c.year}),e.jsx("span",{children:c.name}),e.jsx("i",{})]})}function mt(){const{pathname:c}=ye(),[r,t]=p.useState(!1),[n,a]=p.useState(""),b=p.useRef(c);return p.useEffect(()=>{const i=document.querySelector("main > section");if(i instanceof HTMLElement&&(i.scrollTop=0),b.current===c)return;b.current=c;const o=pe(c);a(o&&o.group!=="笔记"?`${E(o.no)} / ${$}  ${o.title}`:"");const g=window.matchMedia("(prefers-reduced-motion: reduce)").matches;t(!0);const f=window.setTimeout(()=>t(!1),g?160:760);return()=>window.clearTimeout(f)},[c]),r?e.jsxs("div",{className:"curtain go","aria-hidden":"true",children:[e.jsx("i",{className:"line"}),n]}):null}const jt=["产品","游戏","城市与 AI"],yt="https://www.instagram.com/lililin_portfolio/",xt="https://github.com/lililin0324",wt="https://www.linkedin.com/in/lililin0324";function cc(c){var n;const r=c.replace(/\/$/,"")||"/";if(r==="/")return{kind:"home"};if(r==="/about")return{kind:"about"};if(r==="/tutorial"||r.startsWith("/tutorial/"))return{kind:"notes",slug:(n=pe(r))==null?void 0:n.slug};if(r==="/work")return{kind:"works"};const t=pe(r);return t&&t.group!=="笔记"?{kind:"works",group:t.group,slug:t.slug}:r.startsWith("/product")||r.startsWith("/platform")?{kind:"works",group:"产品"}:r.startsWith("/game")?{kind:"works",group:"游戏"}:r.startsWith("/ai")||r.startsWith("/planning")?{kind:"works",group:"城市与 AI"}:{kind:"other"}}function kt(c){return[...c.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(r=>r.getClientRects().length>0)}function Nt({open:c,onClose:r,avatar:t,quote:n,returnFocus:a}){const b=Ne(),i=Te(),{pathname:o}=ye(),g=cc(o),f=p.useId(),d=p.useRef(null),[s,u]=p.useState(c),[k,m]=p.useState(!1),[j,l]=p.useState(null),h=b?160:400,y=p.useRef(g);y.current=g;const v=p.useRef(!1);p.useEffect(()=>{if(c){const A=y.current;l(A.kind==="works"&&A.group||null),u(!0);const T=requestAnimationFrame(()=>m(!0));return()=>cancelAnimationFrame(T)}m(!1);const x=window.setTimeout(()=>u(!1),h);return()=>window.clearTimeout(x)},[c,h]),p.useEffect(()=>{if(!k||!d.current)return;const x=d.current.querySelector("[data-close]");x==null||x.focus();const A=document.querySelector("main > section"),T=A instanceof HTMLElement?A.style.overflow:"";A instanceof HTMLElement&&(A.style.overflow="hidden");const P=D=>{if(D.key==="Escape"){D.preventDefault(),r();return}if(D.key!=="Tab"||!d.current)return;const _=kt(d.current);if(_.length===0)return;const W=_[0],q=_[_.length-1];D.shiftKey&&document.activeElement===W?(D.preventDefault(),q.focus()):!D.shiftKey&&document.activeElement===q&&(D.preventDefault(),W.focus())};return document.addEventListener("keydown",P),()=>{document.removeEventListener("keydown",P),A instanceof HTMLElement&&(A.style.overflow=T)}},[k,r]),p.useEffect(()=>{var x;v.current&&!c&&((x=a.current)==null||x.focus()),v.current=c},[c,a]);const N=x=>{r(),window.setTimeout(()=>i(x),h)};if(!s)return null;const C=g.kind==="works";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:k?"drawer-wash on":"drawer-wash","aria-label":"关闭侧栏",tabIndex:-1,onClick:r}),e.jsxs("div",{id:"site-drawer",ref:d,className:k?"drawer on":"drawer",role:"dialog","aria-modal":"true","aria-labelledby":f,children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"brand",id:f,children:[e.jsxs("button",{type:"button",className:"hb x","data-close":!0,"aria-label":"关闭侧栏",onClick:r,children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsx("span",{className:"sq"}),"Lili Lin",e.jsx("em",{children:"林丽丽"})]}),e.jsx("button",{type:"button",className:"esc",onClick:r,children:"ESC"})]}),e.jsxs("div",{className:"pf",children:[e.jsx("div",{className:"av",children:e.jsx("img",{src:t,alt:""})}),e.jsxs("div",{children:[e.jsx("div",{className:"lab",children:"Profile"}),e.jsx("h2",{children:"Lili Lin"}),e.jsx("p",{className:"cn",children:"林丽丽"}),e.jsx("p",{className:"role",children:"设计师 · 开发者 · 产品创作者"})]})]}),e.jsxs("nav",{className:"ix","aria-label":"站点索引",children:[e.jsxs("a",{className:C?"it cur":"it",href:"#/work",onClick:x=>{x.preventDefault(),N("/work")},children:[e.jsx("span",{className:"no",children:"01"}),e.jsx("span",{className:"nm",children:"作品"}),e.jsx("span",{className:"ct",children:$})]}),e.jsx("div",{className:"sub",children:jt.map(x=>{const A=j===x,T=g.kind==="works"&&g.group===x,P=g.kind==="works"?g.slug:void 0;return e.jsxs("div",{children:[e.jsxs("button",{type:"button",className:A?"cat open":"cat","aria-expanded":A,onClick:()=>l(A?null:x),children:[T&&!P?e.jsx("i",{className:"bar"}):null,e.jsx("span",{className:"cn",children:x}),e.jsx("span",{className:"ck",children:H[x]}),e.jsx("span",{className:"tg",children:A?"−":"+"})]}),A&&e.jsx("div",{className:"wks",children:X(x).map(D=>{const _=P===D.slug;return e.jsxs("a",{className:_?"wk cur":"wk",href:`#${D.href}`,"aria-current":_?"page":void 0,onClick:W=>{W.preventDefault(),N(D.href)},children:[e.jsx("span",{className:"no",children:E(D.no)}),e.jsx("span",{className:"t",children:D.title}),e.jsx("span",{className:"y",children:D.yearLabel})]},D.href)})})]},x)})}),e.jsxs("a",{className:g.kind==="notes"?"it cur":"it",href:"#/tutorial","aria-current":g.kind==="notes"?"page":void 0,onClick:x=>{x.preventDefault(),N("/tutorial")},children:[e.jsx("span",{className:"no",children:"02"}),e.jsx("span",{className:"nm",children:"笔记"}),e.jsx("span",{className:"ct",children:ke})]}),e.jsxs("a",{className:g.kind==="about"?"it cur":"it",href:"#/about","aria-current":g.kind==="about"?"page":void 0,onClick:x=>{x.preventDefault(),N("/about")},children:[e.jsx("span",{className:"no",children:"03"}),e.jsx("span",{className:"nm",children:"关于"}),e.jsx("span",{className:"ct"})]}),e.jsxs("a",{className:"it ext",href:we,target:"_blank",rel:"noopener",children:[e.jsx("span",{className:"no",children:"04"}),e.jsx("span",{className:"nm",children:"幕景宇宙官网 ↗"})]})]}),e.jsxs("div",{className:"ft",children:[e.jsx("p",{className:"q",children:n}),e.jsxs("div",{className:"ct2",children:[e.jsx("span",{className:"lab",children:"联系"}),e.jsx("div",{className:"ln",children:e.jsx("a",{href:`mailto:${Q}`,children:Q})}),e.jsx("span",{className:"lab",children:"社交"}),e.jsxs("div",{className:"ln",children:[e.jsx("a",{href:yt,target:"_blank",rel:"noopener",children:"Instagram ↗"}),e.jsx("a",{href:xt,target:"_blank",rel:"noopener",children:"GitHub ↗"}),e.jsx("a",{href:wt,target:"_blank",rel:"noopener",children:"LinkedIn ↗"})]})]})]})]})]})}const It=p.lazy(()=>S(()=>import("./clusteringeomap-4kMsQJJH.js"),__vite__mapDeps([31,1,2,3,7,8,5]),import.meta.url)),At={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},Z=({value:c,transform:r})=>e.jsx("div",{className:"absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]",style:{transform:r,backfaceVisibility:"hidden"},children:Array.from({length:9}).map((t,n)=>e.jsx("span",{className:"flex items-center justify-center",children:At[c].includes(n)&&e.jsx("span",{className:"block h-[2.5px] w-[2.5px] rounded-full",style:{background:c===1||c===4?"#cc2a18":"#171717"}})},n))}),zt=()=>{const[c,r]=p.useState(!1),[t,n]=p.useState(!1),[a,b]=p.useState(!0),i=p.useRef(null),[o,g]=p.useState({x:0,y:0}),f="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili",[d,s]=p.useState(`${f}/lili_01.png`),[u,k]=p.useState("Exploring the intersection of technology and creativity."),m=ye(),j=Te(),h=m.pathname.split("/").filter(Boolean)[0]||"",y={product:`${f}/lili_05.png`,platform:`${f}/lili_05.png`,game:`${f}/lili_03.png`,ai:`${f}/lili_07.png`,planning:`${f}/lili_07.png`,tutorial:`${f}/lili_04.png`,about:`${f}/lili_02.png`},v=[`${f}/lili_01.png`,`${f}/lili_07.png`,`${f}/lili_08.png`,`${f}/lili_09.png`,`${f}/lili_10.png`,`${f}/lili_12.png`],N=["探索科技与创意的交汇点。","把数据转化为有意义的故事。","构建能激发灵感的数字体验。","连接产品与开发的桥梁。","创造在真实世界中落地的解决方案。","热衷于地理空间技术与城市规划。"],C=q=>q[Math.floor(Math.random()*q.length)];p.useEffect(()=>{s(y[h]??C(v)),k(C(N))},[h]),p.useEffect(()=>{const q=document.documentElement,R=()=>{q.style.setProperty("--bar",window.matchMedia("(max-width: 768px)").matches?"56px":"64px")};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),p.useEffect(()=>{const q=document.querySelector("main > section");if(!(q instanceof HTMLElement))return;let R=q.scrollTop,B=!1;const oe=()=>{const ee=q.scrollTop,Ie=ee-R;R=ee,Ie>0&&ee>120?B=!0:(Ie<0||ee<=4)&&(B=!1),n(B);const Ae=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar"))||64,ze=document.querySelector(".swiss .fold > .hero, .swiss .dhero"),rc=ze instanceof HTMLElement&&ze.getBoundingClientRect().bottom>Ae+12;b(rc),document.documentElement.style.setProperty("--bar-offset",B?"0px":`${Ae}px`)};return oe(),q.addEventListener("scroll",oe,{passive:!0}),()=>q.removeEventListener("scroll",oe)},[m.pathname]);const x=p.useCallback(()=>r(!1),[]),A=cc(m.pathname),T=m.pathname==="/"||!!(pe(m.pathname)&&!m.pathname.startsWith("/platform")),P=()=>{g(B=>({x:B.x+720+Math.round(Math.random()*360),y:B.y+720+Math.round(Math.random()*360)}));const q=dr.filter(B=>B!==m.pathname),R=q[Math.floor(Math.random()*q.length)];R&&setTimeout(()=>j(R),900)},D=A.kind==="home"||A.kind==="works",_=A.kind==="notes",W=A.kind==="about";return e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsxs("header",{className:`topbar ${a?"on-img":"on-solid"} ${t?"away":""}`,children:[e.jsxs("button",{ref:i,type:"button",className:c?"hb x":"hb","aria-expanded":c,"aria-controls":"site-drawer","aria-label":c?"关闭侧栏":"打开侧栏",onClick:()=>r(q=>!q),children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsxs(I,{to:"/",className:"brand",children:[e.jsx("span",{className:"sq"}),"Lili Lin",e.jsx("em",{children:"林丽丽"})]}),e.jsxs("nav",{"aria-label":"主要",children:[e.jsxs(I,{to:"/work",className:D?"on":"","aria-current":D?"page":void 0,children:["作品",e.jsx("sup",{children:$})]}),e.jsxs(I,{to:"/tutorial",className:_?"on":"","aria-current":_?"page":void 0,children:["笔记",e.jsx("sup",{children:ke})]}),e.jsx(I,{to:"/about",className:W?"on":"","aria-current":W?"page":void 0,children:"关于"})]}),e.jsxs("div",{className:"right",children:[e.jsx(Yr,{className:"topbar-toggle"}),e.jsxs("button",{onClick:P,className:"btn-ghost !px-3",title:"随机探索一个项目",children:[e.jsx("span",{className:"h-5 w-5",style:{perspective:"120px"},children:e.jsxs("span",{className:"relative block h-full w-full transition-transform duration-[900ms] ease-out",style:{transform:`rotateX(${o.x}deg) rotateY(${o.y}deg)`,transformStyle:"preserve-3d"},children:[e.jsx(Z,{value:1,transform:"translateZ(10px)"}),e.jsx(Z,{value:6,transform:"rotateY(180deg) translateZ(10px)"}),e.jsx(Z,{value:3,transform:"rotateY(-90deg) translateZ(10px)"}),e.jsx(Z,{value:4,transform:"rotateY(90deg) translateZ(10px)"}),e.jsx(Z,{value:2,transform:"rotateX(90deg) translateZ(10px)"}),e.jsx(Z,{value:5,transform:"rotateX(-90deg) translateZ(10px)"})]})}),"Jump"]})]})]}),e.jsx(Nt,{open:c,onClose:x,avatar:d,quote:u,returnFocus:i}),e.jsx("main",{className:"relative flex min-h-0 flex-1 flex-row overflow-hidden",children:e.jsxs("section",{className:"relative min-w-0 flex-1 overflow-y-auto",children:[e.jsx(mt,{}),e.jsx("div",{className:T?"bleed-frame":"under-bar",children:e.jsxs(xe,{children:[e.jsx(L,{path:"/",element:e.jsx(tt,{})}),e.jsx(L,{path:"/work",element:e.jsx(K,{scope:"all"})}),e.jsx(L,{path:"/planning",element:e.jsx(K,{scope:"planning"})}),e.jsx(L,{path:"/planning/:id",element:e.jsx(Y,{routeType:"planning"})}),e.jsx(L,{path:"/product",element:e.jsx(K,{scope:"product"})}),e.jsx(L,{path:"/product/:id",element:e.jsx(Y,{routeType:"product"})}),e.jsx(L,{path:"/game",element:e.jsx(K,{scope:"game"})}),e.jsx(L,{path:"/game/:id",element:e.jsx(Y,{routeType:"game"})}),e.jsx(L,{path:"/ai",element:e.jsx(K,{scope:"ai"})}),e.jsx(L,{path:"/ai/:id",element:e.jsx(Y,{routeType:"ai"})}),e.jsx(L,{path:"/platform",element:e.jsx(Nr,{data:ue,type:"platform"})}),e.jsx(L,{path:"/platform/:id",element:e.jsx(Kr,{data:ue,type:"platform"})}),e.jsx(L,{path:"/tutorial",element:e.jsx(K,{scope:"notes"})}),e.jsx(L,{path:"/tutorial/:id",element:e.jsx(Y,{routeType:"tutorial"})}),e.jsx(L,{path:"/clusteringeomap",element:e.jsx(p.Suspense,{fallback:null,children:e.jsx(It,{})})}),e.jsx(L,{path:"/about",element:e.jsx(vt,{})}),e.jsx(L,{path:"/contact",element:e.jsx(Zr,{})})]})})]})})]})},St=`---\r
title: "欢迎来到我的博客"\r
date: "2026-09-18"\r
description: "这是一篇示例博文，展示博客的格式：把 .md 文件丢进 src/data/blog/ 就会自动出现。"\r
tags: ["博客", "介绍"]\r
---\r
\r
这是一个**完全独立**的博客组件，跟作品集主页互不干扰。\r
\r
> 标题已经由 frontmatter 渲染在文章顶部了，正文里不用再写一遍 \`# 标题\`。\r
\r
## 怎么写一篇新文章\r
\r
1. 在 \`src/data/blog/\` 里新建一个 \`.md\` 文件，文件名就是链接（slug）。\r
2. 文件开头用 \`---\` 包裹的 frontmatter 写标题、日期、摘要、标签：\r
\r
\`\`\`yaml\r
---\r
title: "文章标题"\r
date: "2026-09-18"\r
description: "一句话摘要"\r
tags: ["标签A", "标签B"]\r
---\r
\`\`\`\r
\r
3. 保存后刷新页面，文章就会自动出现在列表里——**不用改任何代码**。\r
\r
## 支持的内容\r
\r
- 标题、段落、列表、引用、表格\r
- 代码块（带语法高亮样式）\r
- 图片 \`![描述](图片链接)\`\r
- 链接（自动在新标签页打开）\r
\r
> 博客支持 Markdown 的 GFM 语法（表格、删除线、任务列表等）。\r
\r
祝写作愉快 🎉\r
`,Ct=/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/,Lt=/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/,Mt=/^\s*-\s*(.*)$/,Dt=65279;function qt(c){const t=(c.charCodeAt(0)===Dt?c.slice(1):c).replace(/\r\n/g,`
`),n=Ct.exec(t);if(!n)return{data:{},content:t};const a={};let b=null;for(const i of n[1].split(`
`)){if(!i.trim()||i.trimStart().startsWith("#"))continue;const o=Mt.exec(i);if(o&&b){a[b].push(me(o[1]));continue}const g=Lt.exec(i);if(!g)continue;const[,f,d]=g,s=d.trim();if(s===""){b=f,a[f]=[];continue}b=null,a[f]=s.startsWith("[")&&s.endsWith("]")?Et(s.slice(1,-1)):me(s)}return{data:a,content:t.slice(n[0].length)}}function me(c){const r=c.trim(),t=r[0];return r.length>=2&&(t==='"'||t==="'")&&r.endsWith(t)?r.slice(1,-1).replace(/\\(["'])/g,"$1"):r}function Et(c){return c.split(",").map(r=>me(r)).filter(r=>r!=="")}const Tt=Object.assign({"./blog/hello-world.md":St});function Pt(c){return c instanceof Date?c.toISOString().slice(0,10):typeof c=="string"?c.trim():""}function _t(c,r){const t=c.split("/").pop().replace(/\.md$/,"");try{const{data:n,content:a}=qt(r);return{slug:t,title:typeof n.title=="string"&&n.title?n.title:t,date:Pt(n.date),description:typeof n.description=="string"?n.description:"",tags:Array.isArray(n.tags)?n.tags.map(String):[],cover:typeof n.cover=="string"&&n.cover?n.cover:void 0,content:a}}catch(n){return console.error(`[blog] 解析 ${c} 失败，已跳过 frontmatter`,n),{slug:t,title:t,date:"",description:"",tags:[],content:r}}}const te=Object.entries(Tt).map(([c,r])=>_t(c,r)).sort((c,r)=>r.date.localeCompare(c.date)),Rt=c=>te.find(r=>r.slug===c),U={repo:"LiliLIN0324/lililin0324.github.io",repoId:"R_kgDOQpt6HQ",category:"Announcements",categoryId:"DIC_kwDOQpt6Hc4DF4Yk",mapping:"specific",lang:"zh-CN",theme:"preferred_color_scheme"},Bt=({term:c})=>{const r=p.useRef(null),t=!!U.categoryId;return p.useEffect(()=>{if(!t)return;const n=r.current;if(!n)return;n.innerHTML="";const a=document.createElement("script");a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-repo",U.repo),a.setAttribute("data-repo-id",U.repoId),a.setAttribute("data-category",U.category),a.setAttribute("data-category-id",U.categoryId),a.setAttribute("data-mapping",U.mapping),a.setAttribute("data-term",c),a.setAttribute("data-strict","0"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-theme",U.theme),a.setAttribute("data-lang",U.lang),a.setAttribute("data-loading","lazy"),n.appendChild(a)},[c,t]),t?e.jsx("div",{ref:r,className:"giscus mt-10"}):e.jsxs("div",{className:"border border-dashed border-rule p-6",children:[e.jsx("p",{className:"eyebrow mb-2",children:"Comments"}),e.jsxs("p",{className:"text-sm leading-relaxed text-ink-3",children:["评论尚未配置。在"," ",e.jsx("code",{className:"font-mono text-ink-2",children:"src/blog/BlogComments.tsx"})," ","的 ",e.jsx("code",{className:"font-mono text-ink-2",children:"GISCUS_CONFIG"})," 里填入 repoId 与 categoryId 即可（仓库的 Discussions 已开启）。"]})]})},Gt={table:({children:c})=>e.jsx("div",{className:"my-6 overflow-x-auto border border-rule",children:e.jsx("table",{className:"min-w-full border-collapse text-sm",children:c})}),thead:({children:c})=>e.jsx("thead",{className:"border-b border-rule bg-surface-2",children:c}),th:({children:c})=>e.jsx("th",{className:"border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0",children:c}),td:({children:c})=>e.jsx("td",{className:"border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0",children:c}),h1:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h1",{id:n,className:"mb-5 text-2xl font-bold tracking-tight text-ink first:mt-0",...r,children:c})},h2:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h2",{id:n,className:"mt-10 mb-4 text-xl font-bold tracking-tight text-ink",...r,children:c})},h3:({children:c,...r})=>{const n=(typeof c=="string"?c:(c==null?void 0:c.toString())||"").toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");return e.jsx("h3",{id:n,className:"mt-8 mb-3 text-lg font-bold text-ink",...r,children:c})},h4:({children:c,...r})=>e.jsx("h4",{className:"mt-6 mb-2 text-base font-semibold text-ink",...r,children:c}),h5:({children:c,...r})=>e.jsx("h5",{className:"mt-5 mb-2 text-sm font-semibold text-ink-2",...r,children:c}),h6:({children:c,...r})=>e.jsx("h6",{className:"mt-4 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",...r,children:c}),p:({children:c,...r})=>e.jsx("p",{className:"mb-5 leading-relaxed text-ink-2",...r,children:c}),a:({children:c,href:r,...t})=>e.jsx("a",{href:r,className:"text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink",target:"_blank",rel:"noopener noreferrer",...t,children:c}),img:({src:c,alt:r,...t})=>e.jsx("img",{src:c,alt:r,className:"my-6 h-auto w-full border border-rule object-cover",onError:n=>{n.target.style.display="none"},...t}),ul:({children:c,...r})=>e.jsx("ul",{className:"mb-5 list-disc space-y-1 pl-6 text-ink-2",...r,children:c}),ol:({children:c,...r})=>e.jsx("ol",{className:"mb-5 list-decimal space-y-1 pl-6 text-ink-2",...r,children:c}),li:({children:c,...r})=>e.jsx("li",{className:"leading-relaxed",...r,children:c}),blockquote:({children:c,...r})=>e.jsx("blockquote",{className:"my-6 border-l-2 border-accent pl-4 text-ink-2 italic",...r,children:c}),code:({className:c,children:r,...t})=>(c==null?void 0:c.includes("language-"))||typeof r=="string"&&r.includes(`
`)?e.jsx("code",{className:`${c||""} font-mono text-[13px] text-ink`,...t,children:r}):e.jsx("code",{className:"rounded border border-rule bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-ink",...t,children:r}),pre:({children:c,...r})=>e.jsx("pre",{className:"mb-5 overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas",...r,children:c}),hr:({...c})=>e.jsx("hr",{className:"my-10 border-0 border-t border-rule",...c})},Ot=()=>{const{slug:c}=je(),r=Rt(c||"");return p.useEffect(()=>(r&&(document.title=`${r.title} · Lili's Blog`),()=>{document.title="Lili Lin | Portfolio"}),[r]),r?e.jsx("article",{className:"shell animate-rise-in py-10 md:py-14",children:e.jsxs("div",{className:"mx-auto max-w-3xl",children:[e.jsxs("div",{className:"mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx(I,{to:"/blog",className:"transition-colors hover:text-ink",children:"← 全部文章"}),e.jsx("span",{className:"h-3 w-px bg-rule","aria-hidden":"true"}),e.jsx("span",{children:r.date||"未标注日期"})]}),e.jsx("h1",{className:"text-display-sm mb-4",children:r.title}),r.description&&e.jsx("p",{className:"mb-6 max-w-measure text-base leading-relaxed text-ink-2",children:r.description}),r.tags.length>0&&e.jsx("div",{className:"mb-10 flex flex-wrap gap-1.5",children:r.tags.map(t=>e.jsx("span",{className:"chip",children:t},t))}),r.cover&&e.jsx("img",{src:r.cover,alt:"",className:"mb-10 w-full border border-rule object-cover"}),e.jsx("div",{className:"prose-custom border-t border-rule-strong pt-10 text-base leading-relaxed text-ink-2",children:e.jsx(ne,{remarkPlugins:[be],rehypePlugins:[ae],components:Gt,children:r.content})}),e.jsx(Bt,{term:`blog/${r.slug}`})]})}):e.jsx("div",{className:"shell flex h-full items-center justify-center py-20",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"eyebrow",children:"Error"}),e.jsx("p",{className:"mt-3 text-display-sm",children:"Post not found"}),e.jsx(I,{to:"/blog",className:"btn-ghost mt-6",children:"← 返回博客"})]})})},Ut=()=>(p.useEffect(()=>(document.title="Lili's Blog",()=>{document.title="Lili Lin | Portfolio"}),[]),te.length===0?e.jsxs("div",{className:"shell py-20 text-center",children:[e.jsx("p",{className:"eyebrow",children:"Blog"}),e.jsxs("p",{className:"mt-3 text-ink-3",children:["还没有文章，往 ",e.jsx("code",{className:"font-mono",children:"src/data/blog/"})," 里放一个 .md 文件即可。"]})]}):e.jsxs("div",{className:"shell animate-rise-in py-10 md:py-14",children:[e.jsxs("div",{className:"section-head mb-6",children:[e.jsx("p",{className:"eyebrow",children:"Blog / Index"}),e.jsxs("p",{className:"eyebrow nums-tabular",children:[String(te.length).padStart(2,"0")," Posts"]})]}),e.jsx("h1",{className:"text-display-sm mb-10",children:"写作"}),e.jsx("ul",{className:"border-t border-rule",children:te.map((c,r)=>e.jsx("li",{className:"group border-b border-rule transition-colors duration-300 hover:bg-surface",children:e.jsxs(I,{to:`/blog/${c.slug}`,className:"flex items-start gap-5 py-6 md:gap-8",children:[e.jsx("span",{className:"nums-tabular hidden w-10 shrink-0 pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block",children:String(r+1).padStart(2,"0")}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-3 gap-y-1",children:[e.jsx("h2",{className:"text-lg font-bold tracking-tight text-ink md:text-xl",children:e.jsx("span",{className:"wipe-underline",children:c.title})}),e.jsx("span",{className:"eyebrow nums-tabular shrink-0",children:c.date})]}),c.description&&e.jsx("p",{className:"mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2",children:c.description}),c.tags.length>0&&e.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:c.tags.map(t=>e.jsx("span",{className:"chip",children:t},t))})]}),e.jsx("span",{className:"self-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors group-hover:text-ink",children:"Read →"})]})},c.slug))})]})),$t=()=>e.jsxs("div",{className:"flex h-screen flex-col bg-canvas text-ink",children:[e.jsx("header",{className:"shrink-0 border-b border-rule bg-surface/85 backdrop-blur",children:e.jsxs("div",{className:"shell flex h-16 items-center justify-between gap-4",children:[e.jsxs(I,{to:"/blog",className:"group flex items-baseline gap-2.5",children:[e.jsx("span",{className:"text-lg font-bold tracking-masthead md:text-xl",children:"Lili's Blog"}),e.jsx("span",{className:"hidden font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 sm:inline",children:"notes & writing"})]}),e.jsx(I,{to:"/",className:"btn-ghost !px-3 !py-1.5",children:"← 返回作品集"})]})}),e.jsx("main",{className:"min-h-0 flex-1 overflow-y-auto",children:e.jsxs(xe,{children:[e.jsx(L,{index:!0,element:e.jsx(Ut,{})}),e.jsx(L,{path:":slug",element:e.jsx(Ot,{})})]})}),e.jsx("footer",{className:"shrink-0 border-t border-rule bg-surface",children:e.jsxs("div",{className:"shell flex h-12 items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow text-ink-3",children:[e.jsx("span",{children:"Lili Lin"}),e.jsxs("span",{children:["© ",new Date().getFullYear()]})]})})]});function Wt(){const[c,r]=p.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(ac,{children:e.jsxs(xe,{children:[e.jsx(L,{path:"/blog/*",element:e.jsx($t,{})}),e.jsx(L,{path:"*",element:e.jsx(zt,{})})]})}),!c&&e.jsx(ic,{onFinish:()=>r(!0)})]})}bc.createRoot(document.getElementById("root")).render(e.jsx(Wt,{}));
