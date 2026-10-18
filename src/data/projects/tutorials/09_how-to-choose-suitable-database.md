---
id: "09"
slug: "how-to-choose-suitable-database"
title: "数据库选择指南——什么情况用什么数据库"
category: "Tutorial"
year: "2026-3-17"
description: "按场景选数据库：常见网站用 MySQL，复杂查询用 PostgreSQL，文档用 MongoDB，缓存用 Redis。"
tech: ["数据库", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/choose-database/logo.jpg"
---

- 表格型业务：MySQL；查询和约束更重：PostgreSQL。
- 结构经常变的内容：MongoDB。要快的缓存、会话和排行：Redis。
- 常见搭配是主库加 Redis，而不是只选一个。
