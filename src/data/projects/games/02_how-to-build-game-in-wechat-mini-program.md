---
id: "02"
slug: "how-to-build-game-in-wechat-mini-program"
title: "How to build game in wechat mini program"
category: "Game"
year: "2026-2-9"
description: "从设计到发布，一人独立完成微信小程序游戏的全流程实战经验分享。"
tech: ["微信小程序","游戏开发","Figma","AI生图"]
challenge: "独立开发者如何在有限资源下，快速完成从设计、开发到发布的完整游戏项目。"
solution: "采用轻量级技术栈，结合AI工具降低美术门槛，模块化代码架构实现1-2周快速迭代。从架构设计到审核上线的全流程指南。"
hasDemo: true
icon: "/data/fig/wechatgame_logo.jpg"
code: "wechatgame.tsx"
image: ["/data/fig/wechatgame.png"]
---

# 一个人怎么做游戏

这是一个**一人独立开发**的项目，从设计到代码到发布全流程由单人完成。架构设计的核心理念是：**轻量、模块化、快速迭代**。

## 为什么选择这个架构？

作为独立开发者，资源有限，需要：

- **快速验证想法** - 不需要复杂的工程化配置
- **低维护成本** - 代码结构清晰，易于理解和修改
- **全栈可控** - 从前端到后端到部署，一个人能 hold 住

## 技术选型思路

| 层面 | 选择 | 原因 |
|------|------|------|
| **前端框架** | 原生 JavaScript | 微信小游戏环境原生支持，无需额外构建工具 |
| **游戏引擎** | 微信小游戏引擎 | 平台原生，文档完善，性能有保障 |
| **后端服务** | Cloudflare Workers | 免费额度充足，部署简单，全球 CDN |
| **开发工具** | Trae CN + 微信开发者工具 | AI 辅助编码 + 原生调试，效率最高 |
| **设计工具** | Figma + AI 生图 | 快速出图，降低美术门槛 |

## 开发流程

```
想法 → Figma 原型 → AI 生图/修图 → 微信开发者工具编码 → 真机测试 → 提交审核
```

整个流程可以在 **1-2 周** 内完成一个 MVP 版本，非常适合独立开发者快速试错。

---

# 工作流拆解

## 01 设计

### 设计稿 figma

https://www.figma.com/ 下载，打开打开到本地。注册账号并且登录，尽量不要使用qq邮箱。

在这里，我们会开始画项目的设计稿。

<imagecarousel images="/data/fig/games/wechat-mini-game-01.png,/data/fig/games/wechat-mini-game-02.png,/data/fig/games/wechat-mini-game-03.png,/data/fig/games/wechat-mini-game-04.png" captions="Figma design draft - main interface|Figma design draft - game elements|Figma design draft - 具体的流程添加示意|Figma design draft - final output"></imagecarousel>

### ai跑图

#### chatgpt/gemini
使用chatgpt/gemini nano bannana等ai工具，根据设计稿生成对应的图片。

<imagecarousel images="/data/fig/games/wechat-mini-game-chatgpt.png,/data/fig/games/wechat-mini-game-gemini.png" captions="chatgpt|gemini nanobanna"></imagecarousel>
#### lovart.ai
推荐使用lovart.ai。每天有免费的5张图的图片生成额度。
https://www.lovart.ai/

可以生成对应的游戏ui和游戏插画，此处我示意了对应的帽子的设计。
![AI generated cat with hats](/data/fig/games/wechat-mini-game-ai-image.png)

#### figma professional
可以尝试使用figma professional对图片进行微调。
figma professional version中，新增了对图片的处理，支持裁剪、去除背景、局部抠图（局部清理）、prompt编辑、矢量化（！！！）
<imagecarousel images="/data/fig/games/wechat-mini-game-figma-edit-01.png,/data/fig/games/wechat-mini-game-figma-edit-02.png,/data/fig/games/wechat-mini-game-figma-edit-03.png" captions="Figma AI image editing - selecting the cat|Figma AI image editing - adding prompt|Figma AI image editing - model selection"></imagecarousel>


## 02 微信小游戏code

### 微信小游戏项目结构

打开微信开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

![下载页面](/data/fig/games/wechat-mini-game-devtools-03.png)

下载到本地，如果在本地，可以看到。

![微信开发者工具界面](/data/fig/games/wechat-mini-game-devtools-01.png)

![微信开发者工具项目结构](/data/fig/games/wechat-mini-game-devtools-02.png)

### 使用vibe三方平台打开微信小程序编译代码

这里我一般用的是trae CN, trae 也可以，但是我个人比较喜欢trae CN, 因为trae CN 目前的免费模型比较好。可以考虑使用windsurf代替。

https://www.trae.cn/

在三方平台打开，虽然还是得打开微信开发者工具去编辑，但是不会太复杂。

好了。让我们看看我们目前的游戏项目框架。

微信小游戏基于的游戏语言是：JavaScript。但是微信小游戏的游戏引擎是：微信小游戏引擎。

**目录概览**

```
├── audio/                           音频资源
│   ├── background.mp3
│   ├── carrot.mp3
│   ├── excellent.mp3
│   ├── meow.mp3
│   ├── rhythm.mp3
│   └── tissue.mp3
├── images/                          图片资源
│   ├── card.png                     卡片背景
│   ├── carrot.png                   萝卜
│   ├── cat.png                      猫默认形象
│   ├── cat_wink.png                 猫眨眼
│   ├── cat-2.png, cat-3.png ...     猫朝向图
│   ├── cat-down-left.png ...        猫下落状态图
│   ├── coin.png                     顶部货币图标（鱼=coin）
│   ├── energy.png                   顶部能量图标
│   ├── game.png                     主页"游戏"按钮图
│   ├── dress.png                    主页"换装"按钮图
│   ├── sound_on.png / sound_off.png 声音开关图标
│   ├── wardrobe.png                 换装页衣柜背景
│   ├── hat_chrismas.png ...         帽子资源
│   ├── cloth_burger.png ...         衣服资源
│   ├── earing_1.png ...             配饰资源
│   ├── side_card.png                右侧面板背景图
│   ├── loading.png                  加载页背景图
│   ├── btn1.png ... btn4.png        关卡按钮图
│   └── btmain.png                   标题页"开始"按钮图
├── js/
│   ├── base/                        基础能力
│   │   ├── animation.js             帧动画
│   │   ├── pool.js                  对象池
│   │   └── sprite.js                精灵结构
│   ├── components/                  复用组件
│   │   ├── Cat.js
│   │   ├── DraggableItem.js
│   │   └── scene-items.js
│   ├── libs/
│   │   └── tinyemitter.js           事件库
│   ├── runtime/                     运行时支持
│   │   ├── background.js
│   │   ├── cloudflareApi.js         远端接口封装
│   │   ├── gameinfo.js
│   │   ├── music.js
│   │   ├── objectPool.js
│   │   └── resourceManager.js
│   ├── sprites/                     主要场景与页面
│   │   ├── saytheword.js            词语节奏游戏
│   │   ├── dress.js                 换装页逻辑
│   │   ├── homeEvent.js             主页触控事件封装
│   │   └── closeButton.js           通用关闭按钮
│   └── render.js                    基础渲染信息
├── .vscode/settings.json            IDE 设置
├── .eslintrc.js                     代码规范
├── Cloudflare-Workers-指南.md       云端部署与联调说明
├── README.md                        项目说明
├── game.js                          主入口与场景管理
├── game.json                        运行时配置
├── project.config.json              微信开发者工具配置
└── project.private.config.json      个人配置
```

具体的功能有空补上。那么就可以开始做一些小游戏了！

注意：资产文件的限制比较多，一开始不要设计太大的图片。

## 03 发布与审核

### 审核流程与时间

微信小程序的审核流程比较严格，从首次提交到最终通过审核大约需要 **一个月** 的时间。审核流程包括：

1. **微信认证** - 企业/个人主体认证
2. **小游戏资质审核** - 游戏类目需要额外的资质
3. **代码发布审核** - 每次代码更新都需要审核
4. **适龄审核** - 游戏内容分级审核
5. **备案审核** - 根据政策要求进行备案

![审核通知时间线](/data/fig/games/wechat-mini-game-review-timeline.png)

> ⚠️ 建议提前规划好发布时间，预留充足的审核周期。
