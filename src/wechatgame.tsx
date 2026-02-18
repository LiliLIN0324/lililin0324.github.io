


import React from 'react';

const WeChatGameDemo: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 overflow-y-auto p-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">微信小游戏开发教程</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-4">
            想学习如何开发微信小游戏？我们为您准备了详细的教程，帮助您从零开始构建一个完整的小游戏。
          </p>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">详细教程</h2>
            <p className="text-gray-700 mb-4">
              访问以下链接，学习如何构建一个最简单的微信小程序：
            </p>
            <a 
              href="https://datawhalechina.github.io/easy-vibe/zh-cn/stage-3/cross-platform/3.3-wechat-miniprogram/?utm_source=chatgpt.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              查看微信小游戏开发教程
            </a>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">示例游戏说明</h2>
            <p className="text-gray-600 mb-2">
              示例相关说明查阅{' '}
              <a 
                href="https://developers.weixin.qq.com/minigame/dev/guide/develop/start.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                新手教程
              </a>
            </p>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">源码目录介绍</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
              {`├── audio                                      // 音频资源
├── images                                     // 图片资源
├── js
│   ├── base
│   │   ├── animatoin.js                       // 帧动画的简易实现
│   │   ├── pool.js                            // 对象池的简易实现
│   │   └── sprite.js                          // 游戏基本元素精灵类
│   ├── libs
│   │   └── tinyemitter.js                     // 事件监听和触发
│   ├── npc
│   │   └── enemy.js                           // 敌机类
│   ├── player
│   │   ├── bullet.js                          // 子弹类
│   │   └── index.js                           // 玩家类
│   ├── runtime
│   │   ├── background.js                      // 背景类
│   │   ├── gameinfo.js                        // 用于展示分数和结算界面
│   │   └── music.js                           // 全局音效管理器
│   ├── databus.js                             // 管控游戏状态
│   ├── main.js                                // 游戏入口主函数
│   └── render.js                              // 基础渲染信息
├── .eslintrc.js                               // 代码规范
├── game.js                                    // 游戏逻辑主入口
├── game.json                                  // 游戏运行时配置
├── project.config.json                        // 项目配置
└── project.private.config.json                // 项目个人配置`}
            </pre>
            <p className="text-gray-600 mt-2">
              这是微信小游戏的基本配置结构
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeChatGameDemo;