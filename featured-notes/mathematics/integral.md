---
layout: default
title: 积分初步
description: 讲清原函数、不定积分与定积分的概念、基本公式和牛顿-莱布尼茨公式，配计算例题与易错点，适合复制复习。
category: 数学理工
tags:
  - 数学
  - 积分
  - 微积分
type: featured
---

# 积分初步

积分是微分的逆运算，也是求面积、总量的工具。这篇笔记把原函数、基本积分公式与定积分计算整理成卡，复制到四色笔记即可当作公式速查表。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">原函数：若 F′(x)=f(x)，则称 F(x) 是 f(x) 的一个原函数。</span>

<span class="sn-blue" data-sisenote-color="blue">不定积分 ∫f(x)dx=F(x)+C，其中 C 为任意常数，结果是一族函数。</span>

## 二、核心重点

基本积分公式：
- ∫xⁿ dx=xⁿ⁺¹/(n+1)+C（n≠−1）
- <span class="sn-red" data-sisenote-color="red">重点一：∫(1/x)dx=ln|x|+C，n=−1 时必须单独处理</span>
- ∫sin x dx=−cos x+C，∫cos x dx=sin x+C，∫eˣ dx=eˣ+C
- <span class="sn-red" data-sisenote-color="red">重点二：牛顿-莱布尼茨公式 ∫ₐᵇ f(x)dx=F(b)−F(a)，前提是 F′(x)=f(x)</span>

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：求不定积分先套公式再补常数 C；求定积分先找原函数，再代入上下限相减，结果是确定的数值。</span>

定积分的几何意义是曲边梯形的代数面积，x 轴上方为正、下方为负。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：不定积分忘记写常数 C，导致结果不完整</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：n=−1 时误用幂函数积分公式，分母出现零</span>
- 待记：定积分结果是数，不定积分结果是函数族，二者不要混淆

## 四、自测小题

计算定积分 ∫₀¹ x² dx。

> <span class="sn-green" data-sisenote-color="green">提示：x² 的原函数为 x³/3，由牛顿-莱布尼茨公式得 ∫₀¹ x² dx=1³/3−0³/3=1/3。</span>

## 五、总结

积分的抓手是「逆着求导公式找原函数」。不定积分记得补 C，定积分记得代入上下限相减，把这两点标黄记牢，计算就不易丢分。
