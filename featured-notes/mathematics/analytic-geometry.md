---
layout: default
title: 解析几何基础
description: 归纳直线方程、斜率、距离公式、圆与椭圆的标准方程，配求直线方程例题与易错点，适合复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 解析几何
  - 坐标
type: featured
---

# 解析几何基础

解析几何用代数方法研究图形，公式固定但细节多。这篇笔记把直线、圆、椭圆的常用方程集中整理，复制到四色笔记可当作公式速查卡使用。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">斜率：过两点 (x₁,y₁)、(x₂,y₂) 的直线斜率 k=(y₂−y₁)/(x₂−x₁)，其中 x₁≠x₂。</span>

<span class="sn-blue" data-sisenote-color="blue">两点距离 d=√[(x₂−x₁)²+(y₂−y₁)²]，中点坐标为 ((x₁+x₂)/2, (y₁+y₂)/2)。</span>

## 二、核心重点

- 直线方程：点斜式 y−y₀=k(x−x₀)；斜截式 y=kx+b；一般式 Ax+By+C=0
- <span class="sn-red" data-sisenote-color="red">重点一：圆的标准方程 (x−a)²+(y−b)²=r²，圆心 (a, b)，半径 r</span>
- <span class="sn-red" data-sisenote-color="red">重点二：点到直线距离 d=|Ax₀+By₀+C|/√(A²+B²)</span>
- 椭圆 x²/a²+y²/b²=1（a>b>0）中 c²=a²−b²，焦点在 x 轴上

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：求直线方程先由两点求斜率 k，再代入点斜式整理；判断直线与圆的位置关系，比较圆心到直线的距离 d 与半径 r：d<r 相交，d=r 相切，d>r 相离。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：斜率不存在的情况漏讨论，垂直于 x 轴的直线斜率无定义</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：点到直线距离公式分母漏掉根号，或忘记绝对值</span>
- 待记：椭圆 c²=a²−b²，双曲线 c²=a²+b²，结论不同勿混

## 四、自测小题

求过 A(1, 2) 与 B(3, 6) 两点的直线方程。

> <span class="sn-green" data-sisenote-color="green">提示：斜率 k=(6−2)/(3−1)=2，代入点斜式得 y−2=2(x−1)，化简为 y=2x。</span>

## 五、总结

解析几何的主线是「用坐标把形转成数」。方程形式要记全，距离与斜率的细节要核准，遇到竖直线先单独讨论，就能避开大部分陷阱。
