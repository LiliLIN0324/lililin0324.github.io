# 林丽丽的个人网站

设计 × 开发 × 城市研究的作品集。项目按 Markdown 管理，页面里的地图、3D、图表 demo 都能直接跑。

**在线访问：<https://lililin0324.github.io/>**

---

## 有什么

- **作品集**：项目以 Markdown 文件加 frontmatter 登记，自动生成列表页与详情页
- **可交互 demo**：空间聚类地图、热力图、活动轨迹、照片 EXIF 定位等都在页面内运行
- **博客**：独立的路由与评论系统
- **深浅色主题**：首屏绘制前就确定主题，不闪白
- **照片上传**：读取 EXIF 经纬度，把照片放回地图上

## 技术栈

| 层 | 选型 |
|---|---|
| 构建 | Vite + TypeScript |
| 界面 | React 19 · Tailwind CSS · Framer Motion |
| 地图 | Leaflet · react-leaflet · georaster · shpjs |
| 图表 | Plotly.js |
| 内容 | Markdown + 自建 frontmatter 解析 |
| 评论 | giscus |

## 目录

```
src/
  components/        布局、列表、详情、demo 加载器、主题切换
  data/projects/     每个项目一个 .md，frontmatter 声明标题/分类/封面
  blog/              博客路由与评论
  *.tsx              各个独立 demo（聚类地图、照片上传等）
public/data/         demo 用的 CSV
docs/                构建产物，GitHub Pages 从这里发布
```

## 本地开发

```bash
npm install
npm run dev
```

默认地址 `http://localhost:5173`。

## 新增一个项目

1. 在 `src/data/projects/` 下新建 Markdown 文件；
2. 填写 frontmatter：标题、分类、日期、封面、链接；
3. 正文直接写 Markdown，需要嵌入 demo 时在 frontmatter 里指定组件。

项目列表、详情页和路由都由这些文件自动生成，不需要改代码。

## 部署

```bash
npm run build
```

构建输出会复制到 `docs/`，GitHub Pages 配置为从 `docs/` 发布。`docs/` 是生成结果，不要手改；仓库因此较大（含历史构建与 demo 资源），克隆时可用 `--depth 1`。

## 已知事项

- 博客评论基于 giscus，需要仓库开启 Discussions 并完成 giscus 授权
- 部分 demo 依赖 `public/data/` 下的样例数据，换数据时保持列名一致
