---
layout: default
title: 立体几何基础
description: 汇总常见旋转体与多面体的表面积体积公式、空间线面关系判定和三视图要点，配正方体外接球例题与易错提醒。
category: 数学理工
tags:
  - 数学
  - 立体几何
  - 空间想象
type: featured
---

# 立体几何基础

立体几何考查空间想象与公式运用，公式记混、判定条件漏字是高频失分点。这篇笔记把常用公式、线面关系和三视图要点集中整理，复制到四色笔记即可分层背诵。

## 一、基础概念

常见几何体的面积与体积（r 为底面半径，h 为高，l 为母线长，a 为棱长）：
- 正方体：S=6a²，V=a³；长方体：S=2(ab+bc+ca)，V=abc
- <span class="sn-blue" data-sisenote-color="blue">圆柱：S侧=2πrh，V=πr²h；圆锥：S侧=πrl，V=(1/3)πr²h</span>
- <span class="sn-blue" data-sisenote-color="blue">球：S=4πR²，V=(4/3)πR³</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：线面平行判定——平面外一直线与平面内一直线平行，则该直线与平面平行</span>
- <span class="sn-red" data-sisenote-color="red">重点二：线面垂直判定——一直线与平面内两条相交直线都垂直，则该直线与平面垂直</span>
- 正方体体对角线长 = √3·a，也是其外接球的直径

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：先由三视图还原几何体形状与尺寸，再选对应公式；涉及外接球时，先找球心与半径（常与体对角线、截面圆心相关）。</span>

三视图遵循「长对正、高平齐、宽相等」，可见轮廓画实线，不可见轮廓画虚线。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：圆锥体积漏写系数 1/3，与圆柱体积混淆</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：线面垂直判定漏掉「相交」二字，把两条平行直线当作条件</span>
- 待记：球面面积 4πR² 与球体积 (4/3)πR³ 系数不同，勿相互套用

## 四、自测小题

棱长为 2 的正方体，求其体对角线长与外接球体积。

> <span class="sn-green" data-sisenote-color="green">提示：体对角线 d=√(2²+2²+2²)=2√3；外接球直径等于体对角线，故 R=√3，V=(4/3)π(√3)³=4√3π。</span>

## 五、总结

立体几何的抓手是「公式 + 判定 + 还原」：公式要记准系数，判定条件要逐字核对，三视图要先还原实物再计算。把易错点标黄，考前扫一遍即可。
