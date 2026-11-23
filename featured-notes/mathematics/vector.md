---
layout: default
title: 平面向量
description: 梳理向量的坐标表示、数量积公式与平行垂直判定，配夹角余弦例题和易错点，适合复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 向量
  - 坐标
type: featured
---

# 平面向量

向量兼具大小与方向，是联系代数与几何的桥梁。这篇笔记把坐标运算、数量积与位置关系判定整理成卡，复制到四色笔记即可当公式速查表用。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">向量 a=(x, y) 的模 |a|=√(x²+y²)；零向量模为 0，方向任意。</span>

加法：a+b=(x₁+x₂, y₁+y₂)；数乘：λa=(λx, λy)，λ>0 同向，λ<0 反向。

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：数量积 a·b=x₁x₂+y₁y₂=|a||b|cos θ，θ 为两向量夹角</span>
- <span class="sn-red" data-sisenote-color="red">重点二：a∥b ⇔ x₁y₂−x₂y₁=0；a⊥b ⇔ a·b=0</span>
- 夹角余弦：cos θ=(a·b)/(|a||b|)，其中 0≤θ≤π

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：涉及长度与夹角优先用坐标算数量积与模；证明平行用坐标交叉相乘，证明垂直用数量积为零。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：把数量积结果当成向量，实际 a·b 是一个实数</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：平行条件与垂直条件混用，交叉相乘与点积为零张冠李戴</span>
- 待记：零向量与任意向量平行，讨论平行时勿漏零向量情形

## 四、自测小题

已知 a=(1, 2)，b=(3, −1)，求 a·b 及两向量夹角的余弦值。

> <span class="sn-green" data-sisenote-color="green">提示：a·b=1×3+2×(−1)=1；|a|=√5，|b|=√10；cos θ=1/(√5·√10)=1/√50=√2/10。</span>

## 五、总结

向量的核心是「数量积把长度与角度连起来」。把平行、垂直两条判定标红记清，做题时先写坐标再套公式，运算准确率的提升会很直观。
