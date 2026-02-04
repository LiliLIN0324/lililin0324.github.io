# Lili Lin - Portfolio Website

一个现代化的个人作品集网站，展示研究项目、设计作品和教程内容。

## 项目结构

```
lililin0324.github.io/
├── src/
│   ├── components/          # React组件
│   │   ├── ProjectListView.tsx      # 项目列表视图组件
│   │   ├── ProjectDetailView.tsx     # 项目详情视图组件
│   │   ├── AboutSection.tsx        # 关于页面组件
│   │   ├── ContactSection.tsx       # 联系页面组件
│   │   ├── TutorialSection.tsx      # 教程页面组件
│   │   ├── SocialLink.tsx          # 社交链接组件
│   │   ├── DemoLoader.tsx          # Demo组件加载器
│   │   └── utils.ts               # 工具函数
│   ├── data/               # 项目数据
│   │   └── projects.ts             # 所有项目数据（研究、设计、教程）
│   └── demos/              # Demo组件源码
│       └── 3d-cluster-visualizer-main/
├── docs/                 # 静态资源
│   ├── data/fig/          # 项目图片和logo
│   └── assets/            # 构建后的静态资源
├── MainPage.tsx           # 主页面组件
├── index.html             # 入口HTML文件
├── package.json           # 项目依赖
├── vite.config.ts        # Vite配置
├── tailwind.config.js    # Tailwind CSS配置
└── tsconfig.json         # TypeScript配置
```

## 技术栈

- **React 18** - 用户界面框架
- **TypeScript** - 类型安全的JavaScript
- **React Router** - 客户端路由
- **Tailwind CSS** - 实用优先的CSS框架
- **Vite** - 现代化的构建工具
- **Three.js** - 3D可视化（用于某些demo）

## 功能特性

### 响应式设计
- 完全适配移动端、平板和桌面设备
- 移动端侧边栏菜单
- 响应式网格布局（1-5列）

### 项目展示
- **列表视图** - 传统的列表展示方式
- **网格视图** - 卡片式网格展示
- **详情页面** - 包含项目描述、方法论、挑战和图片展示

### Demo功能
- 支持在线演示功能
- 使用React.lazy进行代码分割和懒加载
- 通过URL hash控制demo模式切换

### 页面导航
- 研究项目（Research）
- 设计作品（Design）
- 教程（Tutorial）
- 关于（About）
- 联系（Contact）

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `docs/` 目录

### 预览生产构建

```bash
npm run preview
```

## 添加新项目

### 1. 添加项目数据

在 `src/data/projects.ts` 中添加新的项目对象：

```typescript
{
  id: "06",
  slug: "new-project",
  title: "New Project Title",
  category: "Category",
  year: "2026",
  description: "Project description",
  tech: ["React", "TypeScript"],
  hasDemo: true,  // 如果有demo
  details: {
    abstract: "Abstract text",
    solution: "Solution text",
    challenge: "Challenge text",
    logo: "./data/fig/logo.jpg",
    image: ["./data/fig/image1.jpg", "./data/fig/image2.jpg"],
  },
}
```

### 2. 添加Demo组件（可选）

如果项目有demo，在 `src/components/DemoLoader.tsx` 中注册：

```typescript
export const NewDemo = lazy(() => import("./path/to/demo"));

export const getDemoComponent = (slug: string) => {
  const demoComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType> } = {
    'new-project': NewDemo,
    // ... 其他demo
  };
  // ...
};
```

### 3. 添加图片资源

将项目图片和logo添加到 `docs/data/fig/` 目录。

## 组件说明

### MainPage
主页面组件，包含：
- 响应式导航栏
- 侧边栏（桌面端）
- 移动端菜单
- 路由配置

### ProjectListView
项目列表视图组件：
- 列表/网格视图切换
- 项目卡片展示
- Demo按钮

### ProjectDetailView
项目详情视图组件：
- 项目信息展示
- 文档/演示模式切换
- 目录导航
- 平滑滚动

### DemoLoader
Demo组件加载器：
- 动态导入demo组件
- 懒加载支持
- 加载状态处理

## 路由结构

- `/` - 重定向到 `/research`
- `/research` - 研究项目列表
- `/research/:id` - 研究项目详情
- `/design` - 设计作品列表
- `/design/:id` - 设计作品详情
- `/tutorial` - 教程列表
- `/tutorial/:id` - 教程详情
- `/about` - 关于页面
- `/contact` - 联系页面

## 部署

项目使用GitHub Pages进行部署：

1. 推送代码到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择 `docs` 目录作为发布源
4. 访问 `https://lililin0324.github.io/`

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
