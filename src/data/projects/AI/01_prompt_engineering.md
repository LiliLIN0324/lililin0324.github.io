---
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
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/99.jpg"]
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

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/agentic-rag/99.jpg)

---