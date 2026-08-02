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
│   ├── data/
│   │   ├── projects.ts       # 项目注册 & Markdown 解析
│   │   └── projects/         # 分类目录（design / game / planning / platform / tutorial）
│   │       └── *.md          # 每个项目一个 md，frontmatter + 正文
│   └── *.tsx                 # 各项目 Demo 组件
├── public/data/fig/          # 本地图片（已迁移至 CDN）
├── docs/                     # 构建产物（GitHub Pages）
└── MainPage.tsx              # 全局布局 & 路由
```

## 分类

| Tab | 内容 |
|---|---|
| **Design** | UI/UX 设计项目（DragonDiffusion, AnyReal, Genshot, Genstyle, Riffle, Bazi, 1037PinPin） |
| **Game** | 游戏开发（Game Jam, 和平精英×华科, BMW Meta Island, KittyLoveCarrots, Unity/Cocos 教程） |
| **Planning** | 城市规划 & 建筑（Neurotopia, Chicken Utopia, 红旗渠, 知识图谱, 城市热环境, Previous Archi Work 等） |
| **Platform** | 平台工具（LitFlow, BoxUpMyStuff, Epstein Archive） |
| **Tutorial** | 技术教程（OpenStreetMap, Docker, Dify, MCP, 数据库选型等） |

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
