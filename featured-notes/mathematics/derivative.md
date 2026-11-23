---
layout: default
title: 导数的应用
description: 梳理导数定义、常用求导公式与单调性、极值、切线三类核心应用，配自测题与易错点，方便复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 导数
  - 应用
type: featured
---

# 导数的应用

导数是刻画函数变化率的工具，也是高考与高数的核心考点。这篇笔记把定义、公式、典型应用和易错点整理成一张卡，复制到四色笔记即可分层复习。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">定义：f(x) 在 x₀ 处的导数 f′(x₀)=lim(Δx→0) [f(x₀+Δx)−f(x₀)]/Δx，极限存在则称可导。</span>

<span class="sn-blue" data-sisenote-color="blue">几何意义：f′(x₀) 是曲线 y=f(x) 在点 (x₀, f(x₀)) 处切线的斜率。</span>

常用求导公式：
- (c)′=0，(xⁿ)′=n·xⁿ⁻¹
- (sin x)′=cos x，(cos x)′=−sin x
- (eˣ)′=eˣ，(ln x)′=1/x

## 二、核心重点

- 四则运算：(u±v)′=u′±v′，(uv)′=u′v+uv′，(u/v)′=(u′v−uv′)/v²
- <span class="sn-red" data-sisenote-color="red">重点一：f′(x)>0 时函数单调递增，f′(x)<0 时单调递减</span>
- <span class="sn-red" data-sisenote-color="red">重点二：可导极值点必满足 f′(x)=0，且两侧导数变号</span>

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：求极值按「求导→解 f′(x)=0→列表判号→定极值」四步走；求切线用点斜式 y−f(x₀)=f′(x₀)(x−x₀)。</span>

复合函数用链式法则：外层导数乘以内层导数，例如 [sin(2x)]′=cos(2x)·2=2cos(2x)。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：f′(x₀)=0 未必是极值，如 y=x³ 在 x=0 处导数为零却不是极值</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：复合函数求导漏乘内层导数；求单调区间忘记先看定义域</span>
- 待记：极值反映局部，最值反映整体，需另比较端点函数值

## 四、自测小题

求 f(x)=x³−3x 的单调区间与极值。

> <span class="sn-green" data-sisenote-color="green">提示：f′(x)=3x²−3=3(x−1)(x+1)。当 x<−1 或 x>1 时 f′(x)>0，函数递增；当 −1<x<1 时 f′(x)<0，函数递减。极大值 f(−1)=2，极小值 f(1)=−2。</span>

## 五、总结

导数的主线是「用符号读变化」：导数为正函数上升，为负函数下降，由正变负出极大值，由负变正出极小值。把四色标注里的易错点记牢，解题时先定义域后符号即可。
