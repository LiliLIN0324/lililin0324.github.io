---
id: "10"
slug: "leetcode-notes"
title: "从 0 到 1 学数据结构——我的 Python3 学习笔记"
category: "Tutorial"
year: "2026-9-5"
description: "一份从零开始学数据结构的个人学习笔记，用 Python3 边学边记，从最基础的 number、list 讲到链表、哈希表、堆和树，读者也可以跟着一起学。"
tech: ["Python3", "Jupyter Notebook", "数据结构", "算法", "LeetCode"]
icon: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/leetcode-notes/logo.jpg"
abstract: |
  这是我自己的学习笔记，记录从 0 到 1 学习数据结构的过程。用 Jupyter Notebook 边学边记、边写边跑，从最基础的数据结构讲起，循序渐进，最后用力扣热门题来巩固。如果你也对数据结构感兴趣，可以跟着一起学。
---

# 从 0 到 1 学数据结构

这份笔记记录了我从零开始学习数据结构的过程，全部用 **Python3** 手写代码、边学边记。它按「先易后难」的顺序，把数据结构一个个吃透：从最简单的数字和列表开始，一路学到链表、哈希表、堆和树。如果你也对数据结构感兴趣，可以跟着这份笔记一起学。

- **仓库地址**：https://github.com/LiliLIN0324/leetcode-notes
- **完整笔记**：`python3数据结构.ipynb`（基础）、`力扣100题.ipynb`（做题）、`跟刷.ipynb`（跟刷）

---

## 学习路线

整条路线从易到难，一共 13 个主题：

> number（数字） → list（列表） → tuple（元组） → set（集合） → dictionary（字典） → string（字符串） → array（数组） → linked list（链表） → hash table（哈希表） → queue（队列） → stack（栈） → heap（堆） → tree（树）

前 7 个是 Python 自带的常用结构，后 6 个是更「算法味」的结构。下面按这个顺序逐个过一遍。

---

## 01 number —— 数字

Python 的数字主要有三种：整数 `int`、小数 `float`、复数 `complex`；布尔值 `bool` 也是一种数字（`True` 非 0、`False` 为 0）。

```python
a = 10          # int
b = 3.14        # float
c = 1 + 2j      # complex

print(10 / 3)   # 3.333...  真除法
print(10 // 3)  # 3         整除（向下取整）
print(10 % 3)   # 1         取余
print(2 ** 3)   # 8         幂
```

一句话记住：`/` 是除法、`//` 是整除、`%` 取余、`**` 是幂。

---

## 02 list —— 列表

列表是最常用的结构：**有序、可变、能装任意类型**，用 `[]` 表示。

```python
a = [1, 2, 3, 4, 5]

a.append(6)     # 末尾加一个 -> [1,2,3,4,5,6]
a[0] = 9        # 按下标改 -> [9,2,3,4,5,6]
print(a[0:3])   # 切片，取下标 0~2 -> [9,2,3]
```

支持索引、切片、增删改，是最「万金油」的容器。

---

## 03 tuple —— 元组

元组和列表很像，但**不可变**：一旦创建就不能增删改，用 `()` 表示。

```python
t = (1, 2, 3, 4, 5)
print(t[0])      # 1
print(t[0:3])    # 切片 (1, 2, 3)
# t[0] = 9       # ❌ 会报错：元组不可变
```

因为不可变，元组更安全，也常被用作字典的 key。

---

## 04 set —— 集合

集合是**无序、不重复**的元素集合，用 `{}` 表示，天然带「去重」能力。

```python
s = {1, 2, 2, 3, 4}
print(s)         # {1, 2, 3, 4}  自动去重

s.add(5)         # 加
s.remove(2)      # 删
```

常用来做去重、求交集并集、判断「某个元素在不在」。

---

## 05 dictionary —— 字典

字典是**键值对（key : value）**的集合，key 唯一，查找非常快，用 `{}` 表示。

```python
d = {"name": "小明", "age": 18, "city": "北京"}

print(d["name"])      # 小明
d["phone"] = "123..." # 新增一对
```

「根据 key 取 value」是字典的核心用法，也是后面哈希表的基础。

---

## 06 string —— 字符串

字符串是**不可变的字符序列**，自带一整套处理文本的方法。

```python
s = "hello world"

print(len(s))        # 11   长度
print(s.upper())     # HELLO WORLD
print(s.count("l"))  # 3    统计子串出现次数
print(s.split())     # ['hello', 'world']
```

常用：`len / count / upper / lower / split / isalpha / isdigit`。

---

## 07 array —— 数组

数组是**相同类型、连续内存**的元素集合，按下标访问是 O(1)，非常快。

```python
# Python 里常用 list 充当数组；要真正的同类型数组可用 array 模块
from array import array
a = array("i", [1, 2, 3, 4, 5])

print(a[0])     # 1
a[0] = 9        # 改
```

特点：**读快、写慢**（插入删除要搬元素），适合「按位置频繁访问」的场景。

---

## 08 linked list —— 链表

链表由一个个**节点（node）**组成，每个节点存一个值 `val` 和一个指向下一节点的指针 `next`。

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 1 -> 2 -> 3
head = ListNode(1, ListNode(2, ListNode(3)))
```

和数组相反：链表**插入删除快、随机访问慢**（要顺着 next 一个个找）。

---

## 09 hash table —— 哈希表

哈希表通过「哈希函数」把 key 映射到位置，实现 **O(1) 的查找**。Python 里直接就是 `dict` 和 `set`。

```python
d = {"apple": 1, "banana": 2}
print(d["apple"])     # O(1) 查到 1
```

它的核心思想是：**用空间换时间**，让「找某个 key」几乎不用遍历。

---

## 10 queue —— 队列

队列是**先进先出（FIFO）**的结构，像排队：先来的先走。用 `deque` 最方便。

```python
from collections import deque

q = deque()
q.append(1)      # 从右边入队
q.append(2)
print(q.popleft())  # 1   从左边出队（先进先出）
```

---

## 11 stack —— 栈

栈是**后进先出（LIFO）**的结构，像叠盘子：后放的先拿。用 list 就能实现。

```python
stack = []
stack.append(1)   # 压栈
stack.append(2)
print(stack.pop())  # 2   弹栈（后进先出）
```

---

## 12 heap —— 堆

堆是一种特殊的树，分**小顶堆**（堆顶最小）和**大顶堆**，常用于「取最大/最小」和排序。Python 用 `heapq`。

```python
import heapq

a = [3, 1, 4, 1, 5]
heapq.heapify(a)          # 变成小顶堆
print(heapq.heappop(a))   # 1   弹出最小的
```

`heapq` 默认是小顶堆，取前 k 大/前 k 小这类题最常用它。

---

## 13 tree —— 树

树描述**父子关系**，比如二叉树每个节点最多有两个子节点 `left` 和 `right`。

```python
tree = {
    "value": 1,
    "left": {"value": 2, "left": None, "right": None},
    "right": {"value": 3, "left": None, "right": None},
}
```

树的三种遍历（前序 / 中序 / 后序）和「递归」是重点，很多算法题都绕着树转。

---

## 学完基础之后

把上面 13 个结构过一遍，基础就搭好了。接下来可以：

1. 打开 `python3数据结构.ipynb`，跟着笔记亲手跑一遍每个例子；
2. 进入 `力扣100题.ipynb`，用刚学到的结构去解热门题；
3. 用 `跟刷.ipynb` 保持节奏，按专题持续练习。

## 参考资源

- **GitHub 仓库**：https://github.com/LiliLIN0324/leetcode-notes
- **力扣（LeetCode 中国）**：https://leetcode.cn/
- **LeetCode 官网**：https://leetcode.com/

---

> 💡 **小提示**：数据结构这东西，看懂了不算会，亲手把每个例子敲一遍、每道题写一遍，才真正变成自己的。跟着这份笔记从 0 到 1 慢慢走，量变会带来质变！
