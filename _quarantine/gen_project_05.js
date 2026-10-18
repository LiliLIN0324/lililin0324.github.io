const fs = require('fs');

const CDN = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev';
const FOLDER = 'campus-public-space-vitality-modeling';
const pad = n => String(n).padStart(2, '0');

const imgUrls = Array.from({ length: 99 }, (_, i) => `"${CDN}/fig/${FOLDER}/${pad(i + 1)}.jpg"`).join(',');
const bodyImgs = Array.from({ length: 99 }, (_, i) => `![效果展示](${CDN}/fig/${FOLDER}/${pad(i + 1)}.jpg)`).join('\n');

const ref = 'https://mp.weixin.qq.com/s?__biz=Mzg3NjQ2Mjc5NA==&mid=2247525414&idx=1&sn=fe70b061b93cbc6d38d8d38a6b32bfc1&chksm=cf33f383f8447a9586418622ca0e2f7a76c6e7c5257d49098f0c0e51e0381fd7ed643dda5ea3&scene=178&cur_album_id=2912679801638027265#rd';

const content = `---
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
icon: "${CDN}/fig/${FOLDER}/logo.jpg"
image:[${imgUrls}]
---

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="${CDN}/${FOLDER}.mp4"></video>
</div>

# 校园公共空间活力建模
## Modeling the Vitality of Public Spaces on Campus
### ——基于对户外环境与人群活动的实时跟踪

> 2023.6｜上海同济大学｜Architectural DigitalFUTURES 2023 同济夏令营｜成员（狩猎相机组）

---

## 项目概述

「户外环境与人群跟踪的校园空间活力建模」是 Architectural DigitalFUTURES 2023 同济夏令营狩猎相机组的研究课题。项目通过主动感知技术与狩猎相机（trail camera）图像采集，对校园户外环境与人群活动进行长时段、高精度的实时跟踪，进而建立人本尺度公共空间的活力模型。

空间的活力在评价空间质量和吸引力上起着重要作用。相较于以往低样本调查或低精度定位获取的人群活力数据，主动感知技术能够实现对个体环境感知与行为活动的精准反馈；图像采集技术手段（如打猎相机）的进步，也使得对校园人群活动与物质环境的长时段、高精度捕捉成为可能，为公共空间活力建模提供了新的数据基础。

## 研究背景与问题

- **空间活力**：是评价空间质量与吸引力的重要维度，反映公共空间的使用强度与吸引力。
- **传统方法的局限**：依赖低样本问卷调查或低精度定位，难以在个体尺度与长时间尺度上还原人群活力。
- **技术机会**：主动感知技术 + 图像采集手段，可实现对环境感知与行为活动的精准反馈与长时段记录。

## 研究方法

1. **主动感知（Active Sensing）**：通过部署狩猎相机，对校园户外环境进行持续、自动化的图像采集。
2. **长时段高精度捕捉**：借助图像采集技术手段，长期、连续地记录校园人群活动与物质环境。
3. **时序数据分析**：基于时间序列数据，研究风热环境（风速、热感指数）对行人活动的影响。

## 研究发现

- 户外环境对个体的环境感知与行为活动存在影响。
- **风速**：对场地内行人通过数量呈**正向影响**。
- **热感指数**：与人群停留时间呈**负向影响**。

## 研究意义

该项目展示了主动感知与图像采集技术在城市与校园公共空间活力研究中的应用潜力：相较于传统低样本、低精度方法，它能够提供更精细的个体行为与环境反馈，为面向人本尺度公共空间的设计与评价提供数据支撑。

---

## 小组成员

林丽丽 Lili Lin｜黄婧 Jing Huang｜公丕欣 Pixin Gong｜沈小洁 Xiaojie Shen｜刘博宇 Boyu Liu｜陈忆湄 Yimei Chen｜刘天明 Tianming Liu

## 效果展示

${bodyImgs}

---

## 参考链接

<${ref}>
`;

fs.writeFileSync('e:/lililin0324.github.io/src/data/projects/AI/05_campus-public-space-vitality-modeling.md', content, 'utf8');
console.log('written');
