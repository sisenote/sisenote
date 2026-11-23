---
layout: default
title: 极限概念
description: 讲清数列与函数极限的定义、四则运算法则和两个重要极限，配求极限例题与易错点，可直接复制复习。
category: 数学理工
tags:
  - 数学
  - 极限
  - 微积分
type: featured
---

# 极限概念

极限是导数与积分的基石，描述变量无限趋近某一状态时的趋势。这篇笔记把定义、运算法则和重要极限整理成卡，复制到四色笔记即可系统掌握。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">数列极限：当 n 无限增大时，aₙ 无限趋近于常数 A，称 lim(n→∞) aₙ=A。</span>

<span class="sn-blue" data-sisenote-color="blue">函数极限：当 x 无限趋近 x₀（x≠x₀）时，f(x) 无限趋近于常数 A，称 lim(x→x₀) f(x)=A。</span>

## 二、核心重点

- 四则运算：lim(f±g)=lim f±lim g，lim(fg)=lim f·lim g，lim(f/g)=lim f/lim g（分母极限非零）
- <span class="sn-red" data-sisenote-color="red">重点一：lim(x→0) sin x/x=1</span>
- <span class="sn-red" data-sisenote-color="red">重点二：lim(x→∞) (1+1/x)ˣ=e</span>
- 连续性：f 在 x₀ 连续 ⇔ lim(x→x₀) f(x)=f(x₀)

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：先代入判断是否为 0/0 型；若是，通过因式分解、约分或重要极限变形化简，再取极限；分段函数在分界点要分别求左右极限。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：极限是否存在与函数在该点是否有定义无关，不可混为一谈</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：遇到 0/0 型直接代入得出错误结论，须先化简</span>
- 待记：左右极限都存在且相等时极限才存在

## 四、自测小题

求 lim(x→0) sin 3x / x。

> <span class="sn-green" data-sisenote-color="green">提示：将式子写成 3·sin(3x)/(3x)，令 t=3x→0，由重要极限 lim(t→0) sin t/t=1，得原式=3×1=3。</span>

## 五、总结

极限的核心是「趋近趋势而非代入值」。记住两个重要极限，分清 0/0 型要先变形，遇到分段函数检查左右极限，就能稳住基本分。
