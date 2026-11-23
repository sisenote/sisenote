---
layout: default
title: 复数基础
description: 讲清复数的代数形式、四则运算、共轭复数与模的求法，附计算例题和易错点，可直接复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 复数
  - 运算
type: featured
---

# 复数基础

复数把数系从实数扩展到二维，核心是虚数单位 i²=−1。这篇笔记把定义、运算和几何意义整理成一张卡，复制到四色笔记即可快速查阅。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">定义：z=a+bi（a, b∈R），a 为实部，b 为虚部，i²=−1；当 b=0 时为实数，b≠0 时为虚数。</span>

<span class="sn-blue" data-sisenote-color="blue">复数相等：a+bi=c+di ⇔ a=c 且 b=d；共轭复数 z̄=a−bi；模 |z|=√(a²+b²)。</span>

## 二、核心重点

- 加减：(a+bi)±(c+di)=(a±c)+(b±d)i
- <span class="sn-red" data-sisenote-color="red">重点一：乘法 (a+bi)(c+di)=(ac−bd)+(ad+bc)i，关键是把 i² 换成 −1</span>
- <span class="sn-red" data-sisenote-color="red">重点二：除法 z₁/z₂ 分子分母同乘 z₂ 的共轭复数，使分母变为实数</span>
- 几何意义：z=a+bi 对应复平面内的点 (a, b)

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：复数运算按多项式展开处理，凡是出现 i² 立即换成 −1；求模时先化为 a+bi 的标准形式，再代入 √(a²+b²)。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：忘记 i²=−1，把乘法结果中的 i² 当成 1</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：两个复数不能比较大小，只有都是实数时才能比较</span>
- 待记：|z|²=z·z̄=a²+b²，常用于简化模的计算

## 四、自测小题

计算 (1+2i)(3−i)，并求结果的模。

> <span class="sn-green" data-sisenote-color="green">提示：(1+2i)(3−i)=3−i+6i−2i²=3+5i+2=5+5i；模 |5+5i|=√(25+25)=√50=5√2。</span>

## 五、总结

复数运算的口诀是「按多项式展开，见 i² 即换 −1」。把共轭与模的关系记牢，遇到除法先实数化分母，计算就不易出错。
