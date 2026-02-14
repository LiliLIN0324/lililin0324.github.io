---
id: "06"
slug: "how-to-construct-workflow-in-dify"
title: "How to construct workflow in Dify"
category: "Tutorial"
year: "2026"
description: "本教程将介绍如何在 Dify 中构建工作流。"
tech: ["Dify", "AI", "Workflow"]
abstract: |
  本教程将介绍如何在 Dify 中构建工作流，包括创建知识库、自部署 Dify 等内容。
---

## 我的第一个project
### 创建知识库
https://dify.ai/
但是dify云部署很贵->转向dify自部署
https://github.com/langgenius/dify
启动 Dify 服务器最简单的方法是通过Docker Compose。在使用以下命令运行 Dify 之前，请确保您的计算机上已安装Docker和Docker Compose ：
<code>
cd dify
cd docker
cp .env.example .env
docker compose up -d 
</code>

**最后一步需要完全部署好docker**
