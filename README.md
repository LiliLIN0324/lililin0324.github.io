# Lili Lin · Portfolio

> 设计 × 开发 × 城市研究 —— 一个多领域的个人作品集网站。

**[lililin0324.github.io](https://lililin0324.github.io/)**

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | React 18 + TypeScript |
| 路由 | React Router (Hash) |
| 样式 | Tailwind CSS |
| 构建 | Vite |
| 内容 | Markdown（frontmatter 驱动） |
| 媒体 | Cloudflare R2 CDN |
| 部署 | GitHub Pages（`docs/`） |

## 项目结构

```
├── src/
│   ├── components/           # 核心组件
│   │   ├── HomePage.tsx      # 首页（作品舞台 + 胶片卡片）
│   │   ├── ProjectDetailView.tsx  # 项目详情页（Docs / Demo 双视图）
│   │   ├── ProjectListView.tsx    # 分类列表页
│   │   ├── DemoLoader.tsx    # Demo 懒加载路由
│   │   └── ...
│   ├── blog/                 # 独立博客模块（见下）
│   ├── data/
│   │   ├── projects.ts       # 项目注册 & Markdown 解析
│   │   ├── blog.ts           # 博客内容自动扫描
│   │   ├── blog/             # 博客文章 *.md
│ │   └── projects/         # 分类目录（product / game / planning / platform / tutorial）
│   │       └── *.md          # 每个项目一个 md，frontmatter + 正文
│   └── *.tsx                 # 各项目 Demo 组件
├── public/data/fig/          # 本地图片（已迁移至 CDN）
├── docs/                     # 构建产物（GitHub Pages）
└── MainPage.tsx              # 全局布局 & 路由
```

## 分类

| Tab | 内容 |
|---|---|
| **Product** | 产品 & AI 产品项目（DragonDiffusion, AnyReal, Genshot, Genstyle, Riffle, Bazi, 幕景 Scendance, 1037PinPin） |
| **Game** | 游戏开发（Game Jam, 和平精英×华科, BMW Meta Island, KittyLoveCarrots, Unity/Cocos 教程） |
| **Planning** | 城市规划 & 建筑（Neurotopia, Chicken Utopia, 红旗渠, 知识图谱, 城市热环境, Previous Archi Work 等） |
| **Platform** | 平台工具（LitFlow, BoxUpMyStuff, Epstein Archive） |
| **Tutorial** | 技术教程（OpenStreetMap, Docker, Dify, MCP, 数据库选型等） |

## Blog（独立博客）

博客是**完全独立**的模块，有自己的 header / 布局 / 路由，挂在 `/blog` 下，与作品集互不干扰。

```
src/blog/
├── BlogApp.tsx        # 独立布局 + 列表页 + 路由
├── BlogPostView.tsx   # 单篇文章渲染
└── BlogComments.tsx   # giscus 评论区
src/data/blog.ts       # 自动扫描 src/data/blog/*.md
src/data/blog/*.md     # 你的文章
```

### 写一篇新文章

在 `src/data/blog/` 新建一个 `.md` 文件即可 —— 文件名即 URL（`my-post.md` → `/blog/my-post`），**无需改任何代码**。

```yaml
---
title: "文章标题"
date: "2026-09-18"        # 用于排序
description: "一句话摘要"
tags: ["标签A", "标签B"]
cover: "封面图 URL"       # 可选
---
正文（Markdown）
```

### 评论（giscus）

基于 GitHub Discussions，零后端、零成本。

已完成：仓库 Discussions 已开启；`src/blog/BlogComments.tsx` 的 `GISCUS_CONFIG`
里已填好 `repoId` / `categoryId`，分类用的是 giscus 官方推荐的 **Announcements**
（只有维护者能发起讨论，天然防垃圾评论）。

**还差最后一步**（只能在浏览器里操作，没有 API）：到
[github.com/apps/giscus/installations/new](https://github.com/apps/giscus/installations/new)
把 giscus App 安装到本仓库。装完评论即可生效。

> 想换成独立的 `Blog` 分类的话：Discussion 分类只能在仓库网页 UI 里新建
> （GitHub 没有开放对应的 API），建好后把 `GISCUS_CONFIG` 里的 `category`
> 与 `categoryId` 换成新分类的即可。

## 项目配置

每个 md 文件通过 frontmatter 控制行为：

```yaml
---
slug: "project-slug"        # URL 标识
title: "项目标题"
category: "planning"
year: "2024"
tech: ["React", "TypeScript"]
hasDemo: true               # 是否有 Demo 视图
demoOnly: true              # 强制仅显示 Demo（隐藏 Docs）
icon: "封面图 CDN 地址"
---
正文（Markdown + 图片）
```

## 开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 输出到 docs/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 分支 → GitHub Pages 自动从 `docs/` 目录发布。
