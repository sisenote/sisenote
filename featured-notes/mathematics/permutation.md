---
layout: default
title: 排列组合
description: 讲清两个基本计数原理、排列数与组合数的公式及常用技巧，配选人任职例题和易错点，可直接复制复习。
category: 数学理工
tags:
  - 数学
  - 排列组合
  - 计数
type: featured
---

# 排列组合

排列组合研究「完成一件事有多少种方法」，关键是判断元素是否与顺序有关。这篇笔记把原理、公式和常用技巧整理成卡，复制到四色笔记即可对照使用。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">加法原理：分类完成一件事，各类方法数相加；乘法原理：分步完成一件事，各步方法数相乘。</span>

<span class="sn-blue" data-sisenote-color="blue">排列 A(n,m)=n!/(n−m)!，与顺序有关；组合 C(n,m)=n!/[m!(n−m)!]，与顺序无关。规定 0!=1。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：组合性质 C(n,m)=C(n,n−m)，以及 C(n+1,m)=C(n,m)+C(n,m−1)</span>
- <span class="sn-red" data-sisenote-color="red">重点二：判断用排列还是组合，只看「交换两个元素的位置是否算新方法」</span>
- 常用技巧：相邻元素用捆绑法，不相邻用插空法，「至少至多」用间接法

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：先明确「选哪些」还是「选并排序」，再决定用组合数还是排列数；复杂情形先分类或分步，最后按加法或乘法原理合并。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：排列与组合混淆，把无序选取按排列多乘了顺序</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：分类时重复计数或遗漏，分步时步骤之间不独立</span>
- 待记：A(n,n)=n!，C(n,n)=C(n,0)=1

## 四、自测小题

从 5 人中选 3 人分别担任组长、副组长、秘书，有多少种选法？若只选出 3 人组成委员会呢？

> <span class="sn-green" data-sisenote-color="green">提示：任职有分工、与顺序有关，是排列 A(5,3)=5×4×3=60 种；只组成委员会与顺序无关，是组合 C(5,3)=10 种。</span>

## 五、总结

排列组合的判别核心只有一句：讲顺序用排列，不讲顺序用组合。遇到「至少至多」优先考虑间接法，能大幅减少分类的麻烦。
