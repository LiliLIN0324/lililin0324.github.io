---
id: "02"
slug: "how-to-build-game-in-wechat-mini-program"
title: "How to build game in wechat mini program"
category: "Game"
year: "2026"
description: "在微信小程序中开发游戏的完整教程。"
tech: ["微信小程序","游戏开发"]
challenge: "开发微信小程序游戏需要同时掌握平台特有 API 与通用游戏开发原理。"
solution: "遵循微信小程序开发规范，并借助游戏开发库，即可为微信平台打造有趣的小游戏。本教程提供逐步指引与代码示例，助你快速上手。"
hasDemo: true
icon: "/data/fig/wechatgame_logo.jpg"
code: "wechatgame.tsx"
image: ["/data/fig/wechatgame.png"]
---

# 工作流拆解
## 01 设计
### 设计稿 figma
https://www.figma.com/ 下载，打开打开到本地。注册账号并且登录，尽量不要使用qq邮箱。
在这里，我们会开始画项目的设计稿。

<imagecarousel images="/data/fig/games/wechat-mini-game-01.png,/data/fig/games/wechat-mini-game-02.png,/data/fig/games/wechat-mini-game-03.png,/data/fig/games/wechat-mini-game-04.png" captions="Figma design draft - main interface|Figma design draft - game elements|Figma design draft - 具体的流程添加示意|Figma design draft - final output"></imagecarousel>

### ai跑图
使用chatgpt/gemini等ai工具，根据设计稿生成对应的图片。
推荐使用lovart.ai。每天有免费的5张图的图片生成额度。
https://www.lovart.ai/
一般生成的是对应的ui和图。

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
│   ├── game.png                     主页“游戏”按钮图
│   ├── dress.png                    主页“换装”按钮图
│   ├── sound_on.png / sound_off.png 声音开关图标
│   ├── wardrobe.png                 换装页衣柜背景
│   ├── hat_chrismas.png ...         帽子资源
│   ├── cloth_burger.png ...         衣服资源
│   ├── earing_1.png ...             配饰资源
│   ├── side_card.png                右侧面板背景图
│   ├── loading.png                  加载页背景图
│   ├── btn1.png ... btn4.png        关卡按钮图
│   └── btmain.png                   标题页“开始”按钮图
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

