---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/99.jpg"]
---

# 项目网页链接

https://scendance-scene-planner-ewz.pages.dev

# 效果展示
<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/Scendance.mp4"></video>
</div>

![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/01.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/02.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/03.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/04.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/05.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/06.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/07.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/08.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/09.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/10.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/11.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/12.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/13.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/14.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/15.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/16.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/17.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/18.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/19.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/20.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/21.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/22.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/23.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/24.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/25.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/26.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/27.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/28.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/29.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/30.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/31.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/32.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/33.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/34.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/35.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/36.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/37.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/38.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/39.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/40.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/41.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/42.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/43.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/44.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/45.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/46.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/47.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/48.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/49.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/50.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/51.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/52.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/53.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/54.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/55.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/56.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/57.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/58.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/59.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/60.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/61.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/62.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/63.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/64.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/65.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/66.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/67.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/68.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/69.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/70.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/71.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/72.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/73.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/74.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/75.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/76.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/77.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/78.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/79.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/80.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/81.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/82.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/83.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/84.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/85.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/86.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/87.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/88.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/89.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/90.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/91.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/92.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/93.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/94.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/95.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/96.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/97.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/98.jpg)
![scendance](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/scendance/99.jpg)

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
