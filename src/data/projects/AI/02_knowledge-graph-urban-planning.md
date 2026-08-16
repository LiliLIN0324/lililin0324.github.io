---
id: "02"
slug: "knowledge-graph-urban-planning"
title: "城市规划文本知识图谱生成与多模型评测"
category: "Knowledge Graph"
year: "2025-present"
description: "纽约和上海总体规划中气候变化适应的比较分析"
tech: ["Knowledge Graph", "NLP", "Python", "LDA", "BERT", "HuggingFace", "GPT-4 API", "Embedding Models", "Qwen3", "Multilingual-E5", "BGE-M3", "Cosine Similarity", "NetworkX"]
abstract: "Urban planners often struggle to learn from other cities' master plans, especially when these documents are lengthy, context-specific, and written in different languages. These challenges are further compounded by diverse social, economic, and cultural contexts. This study addresses these issues by creating expertise-informed knowledge graphs (KGs) from master plans of New York City and Shanghai—two cities with distinct linguistic, cultural, and governance contexts. We define ten core concepts—five related to climate change adaptation and five to urban planning—based on expert knowledge, and apply both traditional natural language processing (NLP) methods and emerging large language models (LLMs) to generate and compare the edges connecting these nodes. The traditional methods include simple word frequency, TF-IDF, and conventional topic modeling, while the LLM-based method leverages the power of generative LLMs such as ChatGPT for semantic relationship extraction. Expert validation shows that while LLM-based methods capture nuanced relationships more effectively, their black box nature limits interpretability. To address this, we propose a hybrid LLM approach that integrates explainable NLP techniques (such as coexistence frequency and semantic similarity) and LLM-based topic modeling. The resulting KGs reveal the difference between the two master plans: New York prioritizes resilience and equity, while Shanghai emphasizes sustainable development and balanced urbanization. By comparing these KGs, we demonstrate the potential of the hybrid approach in facilitating knowledge sharing and policy adaptation across diverse urban contexts. This scalable framework can be applied globally to analyze urban planning documents, providing more context-sensitive adaptation strategies. Furthermore, it offers a foundation for future research to extend this methodology to additional cities or incorporate temporal changes, deepening insights into urban adaptation planning and fostering cross-city learning for climate resilience."
challenge: "Expert validation reveals that while LLM-based methods capture semantic nuances more effectively, they often lack the interpretability crucial for practical implementation."
solution: "Traditional natural language processing (NLP) techniques and generative large language models (LLMs) are then applied to generate and compare the edges connecting these nodes."
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.jpg"]
---


# 城市规划文本知识图谱生成与多模型比较
## Knowledge Graph Generation from Urban Planning Texts
### ——纽约与上海城市规划文本中的气候变化适应比较

# 效果展示

“基于城市规划文本的知识图谱生成：纽约和上海总体规划中气候变化适应的比较分析” 

<div style="display:flex; flex-direction:column; gap:16px;">
<video controls playsinline style="width:100%; border-radius:12px; box-shadow:0 10px 24px rgba(0,0,0,.08); border:1px solid #e5e7eb;" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/KnowledgeGraph.mp4"></video>
</div>

github 仓库链接
https://github.com/LiliLIN0324/Knowledge_Graph


---

## 项目概览

城市规划文本通常篇幅较长，包含大量政策、规划目标、空间策略与专业概念。当我们需要比较不同城市的规划文本时，仅依靠关键词频率很难回答：**不同城市真正关注哪些核心议题？这些议题之间又存在怎样的关系？**

本项目尝试使用 **Knowledge Graph（知识图谱）** 将城市规划文本中的核心概念及其语义关系进行结构化表达，并进一步比较不同模型在知识图谱生成任务中的表现。

项目以 **纽约市与上海市的城市规划文本** 为研究对象，聚焦 **Climate Change Adaptation（气候变化适应）** 与 **Urban Planning（城市规划）**，并设计了从传统 Topic Modeling 到 BERT、LLM、Embedding Model 的多种知识图谱生成方法。

---

## 01 · 研究问题

本项目主要围绕两个问题展开：

- **Knowledge Graph 能否帮助我们识别并比较不同城市规划文本中的核心概念与语义关系？**
- **不同类型的 NLP / AI 模型，在城市规划知识图谱生成任务中各有什么优势与局限？**

为了回答这些问题，我设计并比较了四类方法：**LDA → Fine-tuned BERT → GPT-4 → Embedding Models**。不仅比较模型最终生成的知识图谱，也从语义理解能力、跨语言能力、节点/关系识别能力、可解释性、计算效率、可扩展性、实际应用成本等维度分析不同方法。

---

## 02 · 知识图谱设计

为了让不同城市的规划文本能够在同一个框架下进行比较，我首先定义了一个由 **10 个核心概念节点**组成的领域知识框架。

### 气候变化适应

- Resilience
- Adaptive Capacity
- Vulnerability Assessment
- Climate Proofing
- Ecosystem-based Adaptation

### 城市规划

- Zoning
- Land Use Planning
- Urban Design
- Transportation Planning
- Sustainable Development

这些概念作为两个城市规划文本的共同语义框架。

---

## 03 · Knowledge Graph 如何表示规划文本？

本项目中的知识图谱不仅关注“一个概念有没有出现”，还进一步计算：

### Node Weight · 节点权重

节点权重表示某个概念在规划文本中的重要程度。例如，**Resilience** 若与大量句子具有较高的语义相似度，其 Node Weight 就相对较高——**节点越大，表示该概念在文本中越重要**。

---

### Edge Weight · 边权重

边权重表示两个概念之间的关联强度。例如，**Resilience ↔ Climate Proofing** 若经常共同出现且在语义空间中关联较强，其 Edge Weight 就更高——**边越粗，表示两个概念之间的关系越强**。

最终形成的 Knowledge Graph 可同时表达“什么概念重要”，以及“这些概念之间如何关联”。

---

# 04 · 方法一：LDA Topic Modeling

第一种方法采用传统的 **Latent Dirichlet Allocation（LDA）**：首先对城市规划文本进行预处理，识别与 Climate Adaptation、Urban Planning 相关的主题，再将其映射到预定义的 10 个核心概念。

### 节点权重

通过主题与固定概念之间的语义相似度估计节点的重要程度。

### 边权重

通过不同主题 / 子节点之间的共现关系估计概念之间的关联程度。

### 优势

- 实现简单
- 计算成本较低
- 能够快速识别基础词汇模式

### 局限

- 主要依赖词频与主题分布
- 对上下文理解有限
- 难以充分表达复杂语义关系

---

# 05 · 方法二：Fine-tuned BERT

第二种方法使用 **Multilingual BERT**，尝试通过领域文本训练提升模型对城市规划语境的理解能力，模型采用 **Masked Language Modeling（MLM）** 进行 Fine-tuning。基本流程为：

```text
Planning Documents
        ↓
Text Chunking
        ↓
Random Masking
        ↓
Fine-tuned Multilingual BERT
        ↓
Sentence / Concept Embeddings
        ↓
Cosine Similarity
        ↓
Node / Edge Weights
        ↓
Knowledge Graph
````

### Node Weight

首先获取模型最后隐藏层的 Mean Pooling 向量，随后对概念与文本句子进行向量化、归一化，计算 Cosine Similarity，并对句子层面的相似度进行平均，最终得到节点的重要性分数。

### Edge Weight

通过比较模型训练前后两个概念关系的语义相似度变化，估计概念之间的关系强度。

---

# 06 · 方法三：Direct LLM

第三种方法直接使用 **GPT-4 API** 对规划文本中的概念及关系进行评分。与前两种方法相比，它不再依赖传统的词频或训练后的向量，而是直接利用 LLM 的上下文理解能力。例如，对于一个节点，让模型回答“Climate Proofing 在气候变化适应规划中的重要程度是多少？”，并在 **0.1–1.0** 的范围内给出评分；对于两个节点之间的关系，同样要求模型对“Resilience 与 Climate Proofing 在该规划文本中的关系有多强？”进行关系强度评分。

### 优势

* 能够理解复杂上下文
* 具有较强的跨语言能力
* 输出形式直观
* 能够直接利用 LLM 的语义推理能力

### 局限

* 存在 Hallucination 风险
* 模型具有一定黑盒属性
* API 存在成本与延迟
* 模型版本或调用结果可能产生变化

因此，LLM 方法虽然具有较强的语义理解能力，但其结果仍需要进一步验证。

---

# 07 · 方法四：Embedding Models

第四种方法采用专门的 **Text Embedding Models**，实验中比较了 Gemini Embedding、Qwen3-Embedding、Multilingual-E5、BGE-M3。整体流程为：

```text
Planning Documents
        ↓
Text Chunking
        ↓
Embedding
        ↓
Cosine Similarity
        ↓
Node Weight
        ↓
Edge Weight
        ↓
Knowledge Graph
```

---

## Embedding 模型选择

在模型选择阶段，我综合考虑了 Zero-shot 能力、Embedding Dimensions、Memory Usage、Max Tokens、Multilingual Capability、Semantic Textual Similarity 等因素，实验中使用了 Qwen/Qwen3-Embedding-0.6B、BAAI/bge-m3、intfloat/multilingual-e5-large-instruct、Gemini Embedding。

---

## Node Weight

对于每一个固定概念：获取 Concept Embedding 与 Planning Sentence Embedding，计算 Cosine Similarity，并对所有句子的相似度进行平均，最终得到 **Node Weight = Concept 与规划文本之间的平均语义相似度**。

---

## Edge Weight

边权重同时考虑 Concept Co-occurrence 与 Semantic Similarity，计算形式为 `edge_raw = α × co-occurrence + β × semantic similarity`。因此，相比单纯统计词语共同出现次数，该方法进一步加入了语义层面的信息。

---

# 08 · Knowledge Graph 构建与可视化

完成 Node / Edge Weight 计算后，使用 **NetworkX** 构建 Knowledge Graph。

图中的节点大小表示 Concept Importance、节点颜色表示 Concept Category、边粗细表示 Relationship Strength，最终可以将两个城市的规划文本转化为结构化的知识网络。

这样就能从原本的长篇规划文本中，更直观地观察核心概念是什么、哪些概念关系最紧密、不同城市的规划关注点有什么区别。

---

# 09 · 模型比较

项目最终比较了四种不同类型的方法。

| 方法              | 优势                   | 局限                           |
| --------------- | -------------------- | ---------------------------- |
| LDA             | 简单、快速、容易实现           | 上下文理解能力有限                    |
| Fine-tuned BERT | 能够进行领域适应，具有上下文语义理解能力 | 需要 Fine-tuning，计算成本更高        |
| GPT-4           | 上下文理解与语义推理能力较强       | Hallucination、API 成本、延迟、黑盒问题 |
| Embedding       | 向量化速度快，适合大规模文本与批量处理  | 可解释性相对较弱                     |

这一比较也让我认识到：**模型并不存在绝对的“最好”，不同方法更适合不同的任务。** 关注主题发现，LDA 成本较低；需要领域适应，可用 Fine-tuned BERT；强调复杂语义理解，可用 LLM；需要处理大量文档、计算语义相似度并进一步用于 Knowledge Graph 或 Retrieval，则 Embedding Model 更具实际优势。

---

# 10 · 实验结果

## NYC vs. Shanghai

实验结果显示，两个城市存在一些共同关注的概念，例如 Climate Proofing、Adaptive Capacity、Sustainable Development、Resilience，但不同方法也识别出了两个城市之间的不同侧重点。

### New York City

模型结果中较明显的概念包括 Resilience、Climate Proofing、Adaptive Capacity、Ecosystem-based Adaptation、Zoning、Urban Design，整体上更突出 **Resilience / Equity / Climate Adaptation**。

### Shanghai

模型结果中较明显的概念包括 Sustainable Development、Resilience、Land Use Planning、Transportation Planning、Urban Planning、Zoning，整体上更突出 **Sustainable Development / Balanced Urbanization**。

---

# 11 · 不同 Embedding Models 的表现

不同 Embedding 模型并没有产生完全相同的知识图谱。实验中观察到：Qwen3 生成的结果相对更加平衡，节点权重差异没有过度集中；Multilingual-E5 在 NYC 的结果中表现较好，部分重要节点具有更高的权重；BGE-M3 在 Shanghai 的结果中表现相对较好。

这说明 **Embedding Model 的选择本身也会影响 Knowledge Graph 对概念重要性与关系强度的敏感程度**。因此在实际应用中，不能简单地认为“换一个 Embedding Model 就只是换了一个向量模型”——模型选择会进一步影响下游的 **Similarity → Node Weight → Edge Weight → Knowledge Graph**。

---

# 12 · Expert Validation

为了避免完全依赖模型输出，本项目进一步加入了 **Expert Validation**。领域专家对生成的 Knowledge Graph 进行人工审核与排序，重点评价 Nodes（某些节点是否被模型高估或低估）与 Edges（不同概念之间的关系强度是否符合领域知识）。最终形成：

```text
Planning Documents
        ↓
AI / NLP Models
        ↓
Knowledge Graph
        ↓
Human Expert Validation
        ↓
Model Comparison
```

这一步的意义在于：**模型生成的结果并不直接等于 Ground Truth**，在规划、政策等专业领域中 Human-in-the-loop 仍然非常重要。

---

# 13 · 项目思考

这个项目让我意识到，Knowledge Graph Generation 并不是单纯的“把文本变成图”。真正困难的部分在于：

### 1. 如何定义知识？

需要先确定哪些概念值得成为 Knowledge Nodes。

### 2. 如何衡量重要性？

“一个词出现很多次”并不一定意味着它真正重要，因此需要引入 **Semantic Similarity** 来补充传统 Frequency-based 方法。

### 3. 如何定义关系？

两个概念同时出现，并不意味着一定存在强语义关系。因此本项目尝试将 **Co-occurrence + Semantic Similarity** 结合起来。

### 4. 如何评价模型？

不能只看模型输出是否“看起来合理”，还需要从**准确性、稳定性、可解释性、成本、效率、跨语言能力**等多个维度综合判断。

---

# 14 · 项目总结

本项目构建了一套面向城市规划文本的 Knowledge Graph Generation Framework，并比较了 **LDA → Fine-tuned BERT → GPT-4 → Embedding Models** 四类不同的文本语义建模方法。

最终通过 Knowledge Graph 将规划文本中的 **Concept Importance + Semantic Relationships** 进行结构化表达，并进一步用于比较纽约与上海在气候变化适应及城市规划议题上的差异。

从模型比较来看，**传统 Topic Modeling 更简单，但语义表达能力有限；BERT 可以进行领域适应；LLM 具有更强的上下文理解能力，但存在黑盒、成本与幻觉问题；Embedding Models 则在大规模文本处理、跨语言语义表示和批量计算方面具有较好的可扩展性。** 因此，本项目最终并没有试图寻找一个“万能模型”，而是希望建立一个**根据任务目标选择模型，并通过结构化表示与人工验证提高结果可靠性的分析框架**。

---

## My Contribution

### Research

* 定义城市规划文本知识图谱生成问题
* 设计研究框架与模型比较方案
* 设计 10 个领域核心概念节点
* 选择 NYC 与 Shanghai 作为比较对象

### NLP / AI

* 实现 LDA Topic Modeling
* Fine-tune Multilingual BERT
* 设计 GPT-4 API Prompt 与评分机制
* 调用并比较 Qwen3 / E5 / BGE-M3 / Gemini Embedding

### Knowledge Graph

* 设计 Node Weight 计算方法
* 设计 Edge Weight 计算方法
* 融合 Semantic Similarity 与 Co-occurrence
* 使用 NetworkX 构建与可视化 Knowledge Graph

### Evaluation

* 建立多模型横向比较框架
* 分析不同模型的优势与局限
* 比较 NYC / Shanghai 的知识结构差异
* 设计 Expert Validation 流程

![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/01.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/02.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/03.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/04.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/05.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/06.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/07.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/08.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/09.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/10.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/11.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/12.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/13.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/14.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/15.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/16.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/17.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/18.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/19.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/20.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/21.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/22.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/23.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/24.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/25.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/26.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/27.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/28.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/29.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/30.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/31.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/32.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/33.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/34.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/35.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/36.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/37.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/38.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/39.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/40.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/41.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/42.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/43.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/44.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/45.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/46.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/47.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/48.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/49.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/50.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/51.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/52.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/53.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/54.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/55.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/56.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/57.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/58.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/59.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/60.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/61.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/62.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/63.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/64.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/65.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/66.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/67.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/68.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/69.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/70.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/71.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/72.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/73.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/74.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/75.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/76.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/77.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/78.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/79.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/80.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/81.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/82.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/83.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/84.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/85.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/86.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/87.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/88.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/89.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/90.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/91.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/92.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/93.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/94.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/95.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/96.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/97.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/98.jpg)
![alt text](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/knowledge-graph-urban-planning/99.jpg)
> 2025.2，在美国费城举行的第39届AAAI城市规划人工智能研讨会上作海报展示<br>
[《AAAI paper Abstract》](/data/pdf/2025AAAIpaper.pdf)<br>

> 2025.6，在英国伦敦举行的计算城市规划与城市管理会议(CUPUM)上作口头报告!
> 2025.7，在中国厦门举行的第 19届国际中国规划协会（IACP）会议上作口头报告
---