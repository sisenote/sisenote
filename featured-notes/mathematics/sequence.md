---
layout: default
title: 数列基础
description: 归纳等差、等比数列的定义、通项与前 n 项和公式，配性质对比和自测题，适合复制进四色笔记对照复习。
category: 数学理工
tags:
  - 数学
  - 数列
  - 公式
type: featured
---

# 数列基础

数列是定义在正整数上的离散函数，等差与等比数列是考试最高频的两类模型。这篇笔记把两套公式并列整理，复制到四色笔记可对照记忆。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">等差数列：从第二项起，每项与前一项的差为常数 d，即 aₙ₊₁−aₙ=d。</span>

<span class="sn-blue" data-sisenote-color="blue">等比数列：从第二项起，每项与前一项的比为常数 q（q≠0），即 aₙ₊₁/aₙ=q。</span>

## 二、核心公式

| 项目 | 等差数列 | 等比数列 |
|---|---|---|
| 通项 | aₙ=a₁+(n−1)d | aₙ=a₁·qⁿ⁻¹ |
| 前 n 项和 | Sₙ=n(a₁+aₙ)/2 | q=1 时 Sₙ=na₁；q≠1 时 Sₙ=a₁(1−qⁿ)/(1−q) |

- <span class="sn-red" data-sisenote-color="red">重点一：等差性质 m+n=p+q ⇒ aₘ+aₙ=aₚ+a_q；等比性质 m+n=p+q ⇒ aₘ·aₙ=aₚ·a_q</span>
- <span class="sn-red" data-sisenote-color="red">重点二：等差求和另一形式 Sₙ=na₁+n(n−1)d/2，已知首项与公差时更方便</span>

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：已知首项和公差（公比）直接套公式；已知两项先列方程组求 a₁ 与 d（或 q），再求目标项。</span>

等比数列求和要先讨论 q 是否等于 1，再选择相应公式。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：等比数列求和忘记讨论 q=1，直接套分式公式导致分母为零</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：通项 aₙ=a₁+(n−1)d 漏写 −1，把项数与下标混淆</span>
- 待记：0 不能作为等比数列的项，因为 q≠0 且各项非零

## 四、自测小题

等差数列 {aₙ} 中 a₁=3，a₅=11，求 a₁₀ 与 S₁₀。

> <span class="sn-green" data-sisenote-color="green">提示：d=(11−3)/(5−1)=2；a₁₀=3+9×2=21；S₁₀=10×(3+21)/2=120。</span>

## 五、总结

等差看「差」，等比看「比」。抓住首项与 d（或 q）这两个基本量，其余公式都可由通项与求和推出，做题时先判断数列类型再选公式。
