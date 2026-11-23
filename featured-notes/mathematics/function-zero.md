---
layout: default
title: 函数零点
description: 讲清零点定义、零点存在定理与二分法思路，配唯一零点证明例题和易错点，适合复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 函数
  - 零点
type: featured
---

# 函数零点

函数零点是方程 f(x)=0 的实数解，也是连接函数与方程的桥梁。这篇笔记把定义、判定定理和求法整理成卡，复制到四色笔记即可掌握判断零点的套路。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">定义：使 f(x)=0 的实数 x 称为函数 f(x) 的零点。零点是实数，不是坐标点。</span>

<span class="sn-blue" data-sisenote-color="blue">零点存在定理：f(x) 在 [a, b] 上连续，且 f(a)·f(b)<0，则在 (a, b) 内至少存在一个零点。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：f(a)·f(b)<0 只是「至少有一个零点」的充分条件，不是必要条件</span>
- <span class="sn-red" data-sisenote-color="red">重点二：若 f(x) 在区间上严格单调且存在零点，则零点唯一</span>
- 零点三个等价说法：方程 f(x)=0 的实根、图像与 x 轴交点的横坐标、函数值为零的自变量

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：定零点用「找区间端点使函数值异号 + 连续」；证唯一用导数判断单调性；求近似值用二分法逐步缩小区间。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：把零点写成坐标形式 (x, 0)，它其实是横坐标那个实数</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：只凭 f(a)·f(b)<0 就断言零点唯一，忽略单调性论证</span>
- 待记：定理要求区间上连续，否则异号也可能无零点

## 四、自测小题

证明 f(x)=x³+x−1 在区间 (0, 1) 内有且仅有一个零点。

> <span class="sn-green" data-sisenote-color="green">提示：f 为多项式故连续，f(0)=−1<0，f(1)=1>0，异号，由存在定理知 (0,1) 内有零点；又 f′(x)=3x²+1>0 恒成立，f 严格递增，故零点唯一。</span>

## 五、总结

判断零点遵循「先连续异号定存在，再用单调定唯一」。把零点与方程根、图像交点的等价关系记清，解题时三种视角可灵活切换。
