---
layout: default
title: 概率初步
description: 讲清古典概型、互斥与独立事件、条件概率的核心公式与判别方法，配摸球例题与易错点，可直接复制复习。
category: 数学理工
tags:
  - 数学
  - 概率
  - 事件
type: featured
---

# 概率初步

概率刻画随机事件发生的可能性大小，概念不多但关系易混。这篇笔记用对比方式梳理公式与判别方法，复制到四色笔记即可对照复习。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">古典概型：若试验的基本事件有限且等可能，则 P(A)=事件 A 含的基本事件数/基本事件总数。</span>

概率范围：<span class="sn-blue" data-sisenote-color="blue">0≤P(A)≤1，必然事件概率为 1，不可能事件概率为 0。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：互斥事件 A∩B=∅，满足 P(A∪B)=P(A)+P(B)</span>
- <span class="sn-red" data-sisenote-color="red">重点二：独立事件满足 P(AB)=P(A)·P(B)；对立事件满足 P(Ā)=1−P(A)</span>
- 条件概率：P(B|A)=P(AB)/P(A)，其中 P(A)>0

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：先判断「是否放回、是否有序」，再决定用组合数计数还是分步乘法；「至少一个」问题常用对立事件间接求解。</span>

互斥强调「不能同时发生」，独立强调「互不影响」，二者本质不同，解题时须先辨明事件关系。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：把互斥与独立混淆，互斥事件一般不独立</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：分不清「放回抽样」与「不放回抽样」，导致分母总数算错</span>
- 待记：条件概率的分母是条件事件 A 的概率，不是整个样本空间

## 四、自测小题

袋中 3 个红球、2 个白球，不放回连取 2 球，求取到 2 个红球的概率。

> <span class="sn-green" data-sisenote-color="green">提示：基本事件总数 C(5,2)=10，取到 2 红的方法数 C(3,2)=3，故 P=3/10。</span>

## 五、总结

概率题的突破口是先辨事件关系（互斥、独立、对立），再用计数与公式求解。画树状图或列举基本事件，能有效防止漏算与重复。
