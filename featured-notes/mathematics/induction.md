---
layout: default
title: 数学归纳法
description: 讲清数学归纳法的两步结构与适用范围，附求和公式完整证明和易错点，适合复制进四色笔记掌握证明套路。
category: 数学理工
tags:
  - 数学
  - 归纳法
  - 证明
type: featured
---

# 数学归纳法

数学归纳法是证明与正整数 n 有关命题的标准方法，两步缺一不可。这篇笔记把原理、书写格式和常见陷阱整理成卡，复制到四色笔记即可套用。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">原理：若命题 P(n) 满足——① 归纳基础：n=n₀ 时成立；② 归纳递推：假设 n=k（k≥n₀）时成立，可推出 n=k+1 时也成立——则 P(n) 对一切 n≥n₀ 成立。</span>

适用范围：<span class="sn-blue" data-sisenote-color="blue">与正整数 n 有关的等式、不等式、整除等命题。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：两步缺一不可，缺基础则结论可能不成立，缺递推则无法推广</span>
- <span class="sn-red" data-sisenote-color="red">重点二：递推必须显式使用归纳假设，否则不是归纳法</span>
- 起点 n₀ 不一定是 1，要依题意取最小值（如从 n=2 起）

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：先验证起点，再设 n=k 写出假设式，然后把 P(k+1) 化为含 P(k) 的形式代入假设，最后整理到目标式。</span>

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：跳过归纳基础，直接写「假设 n=k 成立」就开始推导</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：证明 n=k+1 时没有用到归纳假设，相当于重新证明</span>
- 待记：k 与 k+1 的项数差要算准，尤其是含有 (−1)ⁿ 等摆动项时

## 四、自测小题

用数学归纳法证明：1+2+⋯+n=n(n+1)/2。

> <span class="sn-green" data-sisenote-color="green">提示：① n=1 时左边=1，右边=1×2/2=1，成立。② 假设 n=k 时成立，即 1+⋯+k=k(k+1)/2；则 n=k+1 时左边=k(k+1)/2+(k+1)=(k+1)(k/2+1)=(k+1)(k+2)/2，恰为右边。故命题对所有正整数成立。</span>

## 五、总结

归纳法的书写是固定套路：先奠基、再假设、后递推、终结论。把两步结构标红记牢，递推时务必点明「由归纳假设」的来源。
