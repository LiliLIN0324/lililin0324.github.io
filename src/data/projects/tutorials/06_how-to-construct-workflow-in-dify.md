---
id: "06"
slug: "how-to-construct-workflow-in-dify"
title: "How to construct workflow in Dify"
category: "Tutorial"
year: "2026-2-15"
description: "本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署、知识库创建和工作流设计。"
tech: ["Dify", "Docker", "Ollama", "AI Workflow", "Local LLM"]
abstract: |
  本教程将介绍如何在 Dify 中构建 AI 工作流，包括本地部署 Dify、配置 Ollama 本地模型、创建知识库和设计自动化工作流。
---

# 01-03 Dify 工作流构建
Dify + Docker + Ollama + 知识库 + 工作流
实现本地 AI 工作流的完整搭建：环境部署、模型配置、知识管理、流程自动化
## 01 本地部署 Dify
**链接**: https://dify.ai/
**GitHub**: https://github.com/langgenius/dify

### a. Dify 介绍
Dify 是一个开源的 LLM 应用开发平台，提供可视化工作流构建、知识库管理、模型集成等功能。云版本提供 200 额度试用，建议先体验再自部署。

### b. 本地部署步骤
1. **环境准备**：确保已安装 Docker 和 Docker Compose
2. **克隆项目**：
   ```bash
   git clone https://github.com/langgenius/dify.git
   cd dify/docker
   ```
3. **配置环境**：
   ```bash
   cp .env.example .env
   ```
4. **启动服务**：
   ```bash
   docker compose up -d
   ```
5. **访问应用**：打开浏览器访问 `http://localhost/install`

> **注意**：每次使用前需要运行 `docker compose up -d` 启动服务


## 02 配置 Ollama 本地模型
**链接**: https://ollama.com/
**插件**: https://marketplace.dify.ai/plugin/langgenius/ollama

### a. Ollama 介绍
Ollama 是一个跨平台的大型语言模型推理框架，支持本地运行 Llama、Mistral、Qwen 等模型。特点：
- 完全本地运行，无需联网
- 无需 API Key，数据隐私安全
- 支持多种开源模型

### b. 安装配置步骤

1. **下载安装**：访问 https://ollama.com/download 下载对应系统版本
2. **设置模型存储路径**（重要）：
   ```powershell
   # 设置环境变量，将模型存储到 E 盘
   [Environment]::SetEnvironmentVariable("OLLAMA_MODELS", "E:\ollama_models", "User")
   ```
3. **创建模型目录**：
   ```powershell
   mkdir E:\ollama_models
   ```
4. **启动服务**：
   ```bash
   ollama serve
   ```
   服务地址：`http://127.0.0.1:11434`
5. **下载模型**：
   ```bash
   # 下载对话模型
   ollama pull llama3.2
   
   # 下载嵌入模型（用于知识库向量化）
   ollama pull mxbai-embed-large
   ollama pull nomic-embed-text
   ```

### c. Python 集成（可选）
```bash
# 创建专用环境
conda create -n ollama python=3.9 -y
conda activate ollama
pip install ollama

# 验证模型
ollama list
```



## 03 创建知识库和工作流

### a. 创建知识库
1. **登录 Dify**：访问本地 Dify 实例
2. **创建知识库**：
   - 点击"知识库"菜单
   - 选择"创建知识库"
   - 上传文档或输入文本内容
3. **配置索引方式**：
   - 选择向量化模型
   - 设置分块大小和重叠
   - 配置检索策略

### b. 构建工作流
1. **创建工作流**：
   - 点击"工作流"菜单
   - 选择"创建工作流"
2. **设计流程**：
   - 添加开始节点
   - 配置 LLM 节点（选择 Ollama 模型）
   - 添加知识库检索节点
   - 设置条件分支和循环
3. **测试部署**：
   - 调试工作流
   - 发布为 API 或 Web 应用

### c. 最佳实践
- **模型选择**：根据任务复杂度选择合适的模型大小
- **知识库管理**：定期更新和优化文档结构
- **工作流优化**：使用变量和条件逻辑提高效率
- **监控日志**：关注执行日志和性能指标

