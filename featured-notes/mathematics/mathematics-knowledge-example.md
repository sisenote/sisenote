---
layout: default
title: 数学知识笔记示例
description: 以函数单调性为例，演示概念、重点、思路与易错四色标注完整写法的原创知识笔记。
category: 数学
tags:
  - 数学
  - 函数
  - 单调性
type: featured
---

# 函数的单调性

单调性是函数的核心性质之一，也是后续学习极值、最值与导数的基础。这篇笔记演示如何用四色标注把概念、重点、思路与易错整理成一篇可复习的知识卡。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">定义：设函数 f(x) 的定义域为 I。如果对区间 I 内任意 x₁ < x₂，都有 f(x₁) < f(x₂)，则称 f(x) 在 I 上单调递增；若 f(x₁) > f(x₂)，则单调递减。</span>

<span class="sn-blue" data-sisenote-color="blue">注意：单调性是「区间」上的性质，脱离区间谈单调没有意义。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：判断单调性优先用定义法，核心是比较 f(x₁) 与 f(x₂) 的大小</span>
- <span class="sn-red" data-sisenote-color="red">重点二：增 + 增 = 增，减 + 减 = 减；增 − 减 = 增</span>
- <span class="sn-red" data-sisenote-color="red">重点三：复合函数单调性遵循「同增异减」</span>

## 三、分析思路

### 1. 定义法四步

<span class="sn-green" data-sisenote-color="green">① 取值：在区间内任取 x₁ < x₂；② 作差：算 f(x₁) − f(x₂)；③ 定号：判断差的正负；④ 下结论：根据符号判断增减。</span>

### 2. 图像法

<span class="sn-green" data-sisenote-color="green">思路：图像从左向右上升为增函数，下降为减函数，先画图再下结论。</span>

## 四、易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：忽略定义域，把不在同一区间上的两点拿来比较</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：把「单调递增」误说成「严格递增」之外的表述，混淆概念边界</span>
- <span class="sn-yellow" data-sisenote-color="yellow">待记：写单调区间时，多个区间之间不要用「∪」连接</span>

## 五、自测小题

判断 f(x) = x² 在 (−∞, 0) 上的单调性，并写出推理过程。

> <span class="sn-green" data-sisenote-color="green">提示：取 x₁ < x₂ < 0，作差 f(x₁) − f(x₂) = x₁² − x₂² = (x₁ − x₂)(x₁ + x₂)，其中 x₁ − x₂ < 0，x₁ + x₂ < 0，乘积为正，故 f(x₁) > f(x₂)，函数在该区间上单调递减。</span>

## 六、总结

单调性的学习要抓住一条主线：<span class="sn-red" data-sisenote-color="red">用定义作差定号是根本方法，图像是直观辅助</span>。把易错点记牢，考试时先确认区间再判断增减。
