---
layout: default
title: 统计基础
description: 汇总平均数、中位数、众数、方差与频率分布的定义和算法，配一组数据的完整计算例题与易错提醒。
category: 数学理工
tags:
  - 数学
  - 统计
  - 数据
type: featured
---

# 统计基础

统计用少量数字刻画一组数据的集中趋势与离散程度。这篇笔记把常用统计量的定义、算法和易错点整理成卡，复制到四色笔记可直接用于复习与做题。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">平均数：x̄=(x₁+x₂+⋯+xₙ)/n，反映数据的平均水平。</span>

<span class="sn-blue" data-sisenote-color="blue">中位数：数据排序后位于中间的数，n 为偶数时取中间两项的平均数；众数是出现次数最多的数。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：方差 s²=(1/n)·Σ(xᵢ−x̄)²，衡量数据波动大小；标准差 s 是方差的算术平方根</span>
- <span class="sn-red" data-sisenote-color="red">重点二：频率=频数/总数，各组频率之和恒为 1</span>
- 平均数对极端值敏感，中位数和众数不受极端值影响

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：求统计量先排序（中位数、众数必需），再算平均数，最后代入方差公式；频率分布表按「频数→频率→频率/组距」逐列计算。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：n 为偶数时中位数忘记取中间两数的平均，直接取了其中一个</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：方差把除以 n 写成除以 n−1（中学阶段除以 n）</span>
- 待记：众数可能不止一个，也可能不存在

## 四、自测小题

求数据 2，3，3，5，7 的平均数、中位数、众数与方差。

> <span class="sn-green" data-sisenote-color="green">提示：平均数=20/5=4；中位数=3；众数=3；方差=[(2−4)²+(3−4)²+(3−4)²+(5−4)²+(7−4)²]/5=(4+1+1+1+9)/5=16/5=3.2。</span>

## 五、总结

统计的核心是「用代表值描述集中趋势，用方差描述离散程度」。拿到数据先排序，再逐项计算，可显著减少错误。
