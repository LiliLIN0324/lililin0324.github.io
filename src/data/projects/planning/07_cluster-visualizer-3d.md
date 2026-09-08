---
id: "07"
slug: "cluster-visualizer-3d"
title: "Cluster Visualizer 3D"
category: "Global heat mapping"
year: "2024-present"
description: "基于PCA和K-Means的高维数据聚类3D探索"
tech: ["Python","Three.js","React", "SOM","K-Means"]
abstract: "An interactive 3D visualization tool that enables users to explore clustered high-dimensional datasets. By applying PCA for dimensionality reduction and K-Means for clustering, project visualizes complex data patterns in an intuitive manner."
challenge: "compressed 223 cities in global data and revelas pattern from window period of time-series data from 2017 to 2019 with both day and night time data"
solution: "Implemented PCA to reduce dimensions while preserving variance, and K-Means to identify clusters. Leveraged Three.js for rendering and React for UI management, ensuring smooth interactivity and performance."
hasDemo: true
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/logo.jpg"
image:["https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg","https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg",]
---

项目代码库：
https://github.com/LiliLIN0324/gloabl-urban-heat

# 项目介绍

本项目的核心是一个基于 **SOM（自组织映射）+ K-means** 两阶段聚类方法的空间数据研究：对全球 **204 个城市**的城市热岛（Urban Heat Island, UHI）时空格局进行划分与可视化，并关联建筑、冠层、水体、绿地、山体等城市形态指标，探究「城市形态如何影响热岛强度」。配套的 3D 可视化工具则把这一高维聚类结果放到可交互的三维空间中，让复杂的数据格局变得一目了然。

# 项目重点
基于 **SOM + K-means** 两阶段聚类，对全球 **204 个城市**的城市热岛时空序列（2017–2019、昼夜双时相、2,178 维特征、142,506 个网格）做格局划分，并结合城市形态指标分析热岛成因，配套 Three.js/React 交互式 3D 可视化。

## 1. 项目速览

| 维度 | 内容 |
|------|------|
| 研究对象 | 全球城市热岛（UHI）时空格局 |
| 样本规模 | 原始 269 城 → 清洗后 223 城 → 剔除南半球后 **204 城**（共 142,506 个空间网格单元） |
| 时间范围 | 2017–2019 三年 × 白天/夜间双时相 |
| 特征维度 | 2,178 维（UHI 7 天滑动平均时间序列） |
| 聚类方法 | 两阶段：SOM 自组织映射（降维）→ K-means（聚类） |
| 聚类方案 | K = 5 / 12 / 20 / 26 四组对照 |
| 城市形态指标 | 建筑高度/密度/容积率、冠层、绿地、水体/山体距离等 10+ 项 |
| 主要产出 | 聚类结果 Shapefile、热岛曲线图、形态指标空间分布图 |

## 2. 研究背景与目标

**城市热岛**是指城市建成区气温显著高于周边郊区的现象。本项目不只看「哪座城市热」，而是想回答两个问题：

1. **全球城市的昼夜热岛规律有没有共性模式？** —— 用聚类把 204 座城市在 2017–2019 三年间白天/夜间的热岛变化曲线分成几类「格局」；
2. **城市形态如何影响热岛强度？** —— 把聚类结果与建筑、冠层、水体、绿地、山体等形态指标叠合分析，找出「哪些建设方式让城市更热 / 更凉」。

具体研究目标：

1. 处理 2017–2019 三年、白天/夜间两个时相的城市热岛滑动平均时间序列数据；
2. 用 **SOM** 将高维热岛时间序列映射到低维神经元网格，提取每个空间单元的最佳匹配单元（**BMU**）；
3. 对 SOM 神经元权重做 **K-means** 聚类，考察 K = 5 / 12 / 20 / 26，划分热岛格局类型；
4. 用**分区统计（Zonal Statistics）**计算建筑、冠层、水体、绿地、山体等城市形态指标；
5. 将聚类结果与形态指标合并，完成空间可视化与影响因素分析。

## 3. 方法与流程总览

> 遇到生词别慌，先看文末[术语速查](#附录术语速查)。核心链路其实只有三步：**算热岛 → SOM+K-means 分类 → 叠合形态指标找规律**。

```
全球影像 + 城市边界
   │  ① 预处理：逐日 UHI = 建成区 LST − 草地 LST，再做 7 天滑动平均
   ▼
UHI 滑动平均时间序列（每样本 2,178 维）
   │  ② SOM 把高维序列映射到 1,890 个神经元 → 每个网格得到 BMU 坐标
   ▼
   │  ③ 对神经元权重做 K-means（K = 5/12/20/26）
   ▼
每个空间网格的「聚类标签」
   │  ④ 分区统计算出形态指标 → 与聚类结果合并
   ▼
热岛格局类型图 + 城市形态对热岛的影响分析
```

整体流程共 **五个阶段**，每个阶段对应 `coding/` 下的一个 Notebook/脚本：

| 阶段 | 文件 | 目的 | 主要产出 |
|------|------|------|----------|
| ① 数据预处理 | `a_data_process.ipynb` | 原始影像 → 城市热岛滑动平均时间序列 | 白天/夜间 UHI 序列 CSV |
| ② SOM + K-means 聚类（主流程） | `b_SOM_kmeans_process.ipynb` 及其 NEW / discord 变体 | 降维 + 聚类，输出各 K 值标签 | 聚类标签 CSV、SOM 模型、神经元权重 |
| ③ 形态指标分区统计 | `c_Bui&Cano_data_zonalst.ipynb` + `e_Cost_DistWB.py` | 建筑/冠层/水体/绿地/山体指标 | 各城市形态指标统计表 |
| ④ 合并与可视化 | `d_zonalst&cluster_merge_visual.ipynb` | 聚类 + 指标合并，制图 | Shapefile、空间分布图 |
| ⑤ 验证（辅助） | `验证.ipynb` | 对比本机与老师产出一致性 | 差异率为 0 的校验结果 |

> 另有 `CFA可视化.ipynb`（CFA 结果可视化）为辅助脚本；`main.py` 是 PyCharm 新建项目的占位文件，无实际逻辑，可忽略。

## 4. 目录结构

```
gloabl-urban-heat/
├── main.py                      # PyCharm 占位脚本（无业务逻辑，可忽略）
├── coding/                      # 处理代码（Jupyter Notebook）
│   ├── a_data_process.ipynb          # ① 原始数据 → UHI 滑动平均时间序列
│   ├── b_SOM_kmeans_process.ipynb    # ② SOM + K-means 聚类（主流程）
│   ├── b_SOM_kmeans_process NEW.ipynb# ② 更新版（新增半球/排序等处理）
│   ├── b_SOM_kmeans_process_discord.ipynb # ② 聚类结果按 K 分组的散点/热力图
│   ├── c_Bui&Cano_data_zonalst.ipynb # ③ 建筑/冠层/水体/绿地/山体分区统计
│   ├── d_zonalst&cluster_merge_visual.ipynb # ④ 聚类 + 形态指标合并与可视化
│   ├── e_Cost_DistWB.py              # 成本距离（Cost Distance）脚本（ArcGIS, Py2.7）
│   ├── CFA可视化.ipynb               # 辅助：CFA 结果可视化
│   └── 验证.ipynb                    # 辅助：验证模型产物一致性
├── city/                        # 城市数据与聚类结果
│   ├── 223_cities_combined_moving_ave_cluster*.csv  # 热岛滑动平均 + 聚类标签
│   ├── 223_cities_som_clustered_data.csv            # SOM 聚类数据（含神经元坐标）
│   ├── 223_cities_with_hemisphere*.csv              # 标注南北半球（用于剔除南半球）
│   ├── BMUs.npy / node_weights.npy / Neuron_Coordinates_only.csv  # SOM 产物
│   ├── *.shp / *.dbf / *.prj / *.shx / *.cpg       # 聚类结果 Shapefile
│   └── results/                  # 输出结果
│       ├── bmus_kmeans_K*.csv    # 各 K 值聚类结果（K=5/12/20/26）
│       ├── discord/              # 按 K 分组的热岛序列对比图
│       ├── picture/              # 可视化图片（K=5）
│       └── picture_d/            # 可视化图片（K=5/12/20/26）
├── pkl/                         # 序列化模型
│   ├── som.pkl                  # 训练好的 SOM 模型
│   └── clustinstances_kmeans.pkl# K-means 聚类实例
└── 老师发的/                    # 老师提供的参考产物（用于验证）
    ├── BMUs.npy
    └── node_weights.npy
```

## 5. 数据来源与下载

### 5.1 数据来源与用途（一张表看完）

| 数据 | 分辨率 | 用途（对应变量） | 来源 |
|------|--------|----------------|------|
| 山体地形单元 GBLU | 30 m | 到山体最小成本距离 `MIN_DistMT` | [Zenodo](https://zenodo.org/records/13187969) |
| 水体（ESA WorldCover） | 10 m | 到水体最小成本距离 `MIN_DistWB` | [Zenodo](https://zenodo.org/records/5571936) |
| 高程（Copernicus DSM） | 30 m | 高程/坡度、参考区去噪掩膜 | [Copernicus](https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM) |
| 植被种类（ESA WorldCover） | 10 m | 草地参考区、绿地率 `GreenRatio` / 绿容比 `GrVolRatio` | [Zenodo](https://zenodo.org/records/5571936) |
| 树木冠层 CHM（WRI & Meta） | 25 m（另有 1 m 版） | 冠层密度 / 体积比 `Candensity` `CanovRatio` | [公众号说明](https://mp.weixin.qq.com/s/OXRbSSiAaOSyrR6Qv49F9w) |
| Built-up 建成区（ESA WorldCover） | 10 m | 建成区范围、不透水面比例 `ISF` | [Zenodo](https://zenodo.org/records/5571936) |
| 建筑高度 GHS（JRC） | 100 m | 建筑高度 `Buiheight`（= `MEAN`） | [GHSL](https://ghsl.jrc.ec.europa.eu/) |
| 建筑面积 GHS（JRC） | 10 m | 建筑密度 `Buidensity`、容积率 `FAR` | [GHSL](https://ghsl.jrc.ec.europa.eu/) |

### 5.2 下载方式

- **Copernicus DEM（COP-DEM）**：全球 30 m / 90 m（欧洲部分 10 m）。可经欧空局 [Panda](https://panda.copernicus.eu/panda) 或 [OpenTopography](https://portal.opentopography.org/datasetMetadata?otCollectionID=OT.032021.4326.1) 下载；批量下载用 AWS CLI：
  ```bash
  aws s3 ls s3://raster/COP30/ --recursive --endpoint-url https://opentopography.s3.sdsc.edu --no-sign-request
  aws s3 cp s3://raster/COP30/ . --recursive --endpoint-url https://opentopography.s3.sdsc.edu --no-sign-request
  ```
- **ESA WorldCover**：从 [worldcover2020.esa.int](https://worldcover2020.esa.int) 下载，本地存放于 `C:\ESA`。
- **GHS 建筑高度/面积**：EPSG 54009（Mollweide）投影、数据年份 2018、版本 2023A。

> **主要数据文件示例**（便于核对文件命名）：山体 `GBLU_v1_S90W080`；水体/植被/Built-up `ESA_WorldCover_10m_2020_v100_N00E006_Map`；高程 `Copernicus_DSM_10_N23_00_E112_00_DEM`；冠层 `meta_chm_lat=90.0_lon=-110.0_avg`；建筑高度 `GHS_BUILT_H_AGBH_E2018_GLOBE_R2023A_54009_100_V1_0.tif`；建筑面积 `GHS_BUILT_S_E2018_GLOBE_R2023A_54009_10_V1_0.tif`。

## 6. 处理流程详解

### ① 数据预处理 — `a_data_process.ipynb`

把原始影像变成可用特征：**逐日 UHI = 建成区地表温度 − 草地（参考区）地表温度**，再做 **7 天滑动平均（MA）**，最终得到三年、双时相的 UHI 时间序列。具体步骤：

- **00 数据预处理**：建成区 tif → shapefile；裁剪草地并提取为参考区 shapefile，生成「建成区 + 草地」两类 shapefile。
  - `00_00` 每次运行前需执行的初始化代码；
  - `00_00*` 调用高程处理 Notebook 生成参考区：对建成区高程栅格取**中位数**，并**剔除大于「建成区 median + 50」的高程值**（去噪）；
  - `00_01` 将建成区 shapefile 拆分为多个文件；
  - `00_02` 用掩膜提取草地与稀疏植被，得到参考区草地 shapefile；
  - `00_03` 用草地 shapefile 裁剪栅格；
  - `00_04` 生成的 tif 转 shapefile。
- **输出**：白天/夜间分离的 UHI 时间序列 `0_18_day_2017_2019_data.csv`、`0_18_night_2017_2019_data.csv`。

### ② SOM + K-means 聚类 — `b_SOM_kmeans_process.ipynb`

核心聚类流程，共 4 步：

1. 对标准化后的热岛时间序列训练 **SOM**，得到每个空间单元的 **BMU**；
2. 把高维特征映射为二维神经元坐标；
3. 对 **SOM 神经元权重**执行 K-means，分别以 K = 5 / 12 / 20 / 26 聚类；
4. 输出各 K 值聚类标签 CSV，并对聚类做排序、统计各类均值，绘制热岛序列曲线图。

> 变体说明：`b_SOM_kmeans_process NEW.ipynb` 在原版基础上新增了半球标注与排序等处理；`b_SOM_kmeans_process_discord.ipynb` 专门绘制按 K 分组的散点/热力图。

**主要产物**：`pkl/som.pkl`、`pkl/clustinstances_kmeans.pkl`；`city/BMUs.npy`（142,506 × 2，各空间单元的 SOM 神经元坐标）、`city/node_weights.npy`（1,890 × 2,178，神经元权重）、`city/results/bmus_kmeans_K{5,12,20,26}.csv`。

### ③ 城市形态指标分区统计 — `c_Bui&Cano_data_zonalst.ipynb`

用 ArcPy / rasterio / GeoPandas 对每个城市的空间网格做**分区统计（Zonal Statistics）**，把形态数据落到与聚类相同的空间单元上：

| 类别 | 指标 |
|------|------|
| 建筑（Building） | 建筑高度 `Buiheight`、建筑密度、容积率 `FAR` |
| 冠层（Canopy） | 冠层密度、冠层覆盖率 `CoverRatio` |
| 绿地（Greenland） | 绿地率 `GreenRatio`、绿容比 `GrVolRatio` |
| 建成区（Built-up, ESA） | 建成区面积/比例、不透水面比例 `ISF` |
| 水体（Water） | 到水体最小成本距离 `MIN_DistWB` |
| 山体（Mountain） | 到山体最小成本距离 `MIN_DistMT` |

其中到水体/山体的成本距离由 `e_Cost_DistWB.py`（ArcGIS `CostDistance`，需 Python 2.7 环境）计算。

### ④ 合并与可视化 — `d_zonalst&cluster_merge_visual.ipynb`

提取 X/Y 坐标、城市名、Place ID、Sum ID 与聚类标签；CSV 转 Shapefile（WGS 1984）；将聚类结果与建筑/冠层/水体/绿地/山体指标合并，绘制各指标的空间分布图。

### ⑤ 验证 — `验证.ipynb`

对比 `老师发的/` 与 `city/` 下的 `BMUs.npy`、`node_weights.npy`，确认两套模型产物完全一致（差异率 0.0000%），保证分析可复现。

## 7. 变量定义

| 变量 | 含义 / 公式 |
|------|-------------|
| `MEAN` | 建筑高度（Building Height, m） |
| `Buidensity` | 建筑密度 = 建筑面积 / 用地面积 = Count × (10m × 10m) / cell(m²) |
| `FAR` | 容积率 = 建筑密度 × 建筑高度 / 层高 = `Buidensity` × `MEAN` / 3 |
| `Candensity` | 植被覆盖密度 = 植被面积 / 总面积 = Count × (25m × 25m) / cell(m²) |
| `CanovRatio` | 冠层体积比 = 冠层密度 × 植被高度 = `Candensity` × `MEAN_2` |
| `Cluster` | 聚类标签，最终方案 K = 5 / 12 / 20 / 26 |
| `Place` | 城市标签（label） |
| `Place ID` | 每个城市内部的编号 |
| `Sum ID` | 全样本编号 |
| `City Name` | 城市名 |
| `Hemisphere` | 所在半球 |

> `Count` 为网格内像元个数，`cell` 为网格面积；建筑像元 10 m、冠层像元 25 m；`MEAN_2` 为植被（冠层）高度。

## 8. 核心数据与产出

| 文件 | 说明 |
|------|------|
| `223_cities_combined_moving_ave_cluster.csv` | 2,178 维热岛滑动平均特征 + 坐标/城市信息 + K_5/K_12/K_20/K_26 聚类标签 |
| `223_cities_som_clustered_data.csv` | 2,178 维特征 + `Neuron_Coordinates`（SOM 神经元坐标） |
| `223_cities_combined_moving_ave_cluster_sort_xy.*` | 精简后的聚类结果 Shapefile（X/Y/Place/City/Cluster） |
| `BMUs.npy` | 142,506 个空间单元 → 二维神经元坐标映射 |
| `node_weights.npy` | 1,890 个 SOM 神经元 × 2,178 维特征权重 |

**关键规模参数**：

- **样本**：最终 204 城（269 → 清洗 223 → 剔除南半球后 204，仅北半球），共 **142,506** 个空间网格单元；
- **特征维度**：**2,178** 维（2017–2019 年 × 白天/夜间 × 滑动平均），列名形如 `gf_Day2017_001_to_gf_Day2017_007`、`gf_Nit2019_359_to_gf_Nit2019_365`（`Day` 白天、`Nit` 夜间）；
- **SOM 规模**：1,890 个神经元；
- **聚类方案**：K = 5 / 12 / 20 / 26 四组对照。

## 9. 运行环境与依赖

- **Python 3**（Jupyter Notebook）
  - 数据处理：`pandas`、`numpy`、`rasterio`、`geopandas`、`pyproj`
  - 聚类/机器学习：`pydlc`（SOM）、`scikit-learn`（K-means）、`pickle`
  - 可视化：`matplotlib` 等
- **ArcGIS / ArcPy**：分区统计与成本距离（`e_Cost_DistWB.py` 需 Python 2.7 环境）

## 10. 注意事项与复现提示

1. `main.py` 为 PyCharm 新建项目的占位脚本，无实际业务逻辑，可忽略；
2. 部分 Notebook 的 Markdown 注释为 GBK 编码，在 UTF-8 下可能显示乱码，**不影响代码逻辑**；
3. `e_Cost_DistWB.py` 中的硬编码路径（`D:\file\...`）与工作目录为作者本机路径，复现时需按需修改。

## 附录：术语速查

| 术语 | 含义 |
|------|------|
| **UHI** | Urban Heat Island，城市热岛，城市建成区相对郊区的升温现象 |
| **MA** | Moving Average，滑动平均（对日 UHI 做 7 天滑动平均以去除噪声） |
| **LST** | Land Surface Temperature，地表温度 |
| **SOM** | Self-Organizing Map，自组织映射，一种把高维数据映射到低维网格的无监督神经网络 |
| **BMU** | Best Matching Unit，最佳匹配单元，即与某样本最相似的 SOM 神经元 |
| **K-means** | 一种按距离把样本划分为 K 类的经典聚类算法 |
| **分区统计** | Zonal Statistics，按空间区域统计其覆盖的栅格值 |
| **成本距离** | Cost Distance，ArcGIS 中考虑通行成本的路径/距离分析 |




# 效果展示

![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/01.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/02.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/03.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/04.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/05.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/06.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/07.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/08.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/09.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/10.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/11.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/12.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/13.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/14.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/15.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/16.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/17.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/18.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/19.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/20.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/21.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/22.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/23.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/24.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/25.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/26.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/27.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/28.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/29.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/30.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/31.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/32.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/33.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/34.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/35.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/36.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/37.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/38.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/39.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/40.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/41.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/42.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/43.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/44.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/45.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/46.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/47.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/48.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/49.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/50.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/51.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/52.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/53.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/54.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/55.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/56.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/57.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/58.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/59.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/60.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/61.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/62.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/63.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/64.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/65.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/66.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/67.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/68.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/69.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/70.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/71.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/72.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/73.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/74.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/75.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/76.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/77.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/78.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/79.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/80.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/81.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/82.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/83.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/84.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/85.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/86.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/87.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/88.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/89.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/90.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/91.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/92.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/93.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/94.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/95.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/96.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/97.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/98.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/99.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/100.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/101.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/102.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/103.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/104.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/105.jpg)
![效果展示](https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/cluster-visualizer-3d/106.jpg)