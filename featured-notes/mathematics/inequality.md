---
layout: default
title: 不等式基础
description: 归纳不等式性质、均值不等式与一元二次不等式的解法，配解不等式和求最值例题，方便复制进四色笔记复习。
category: 数学理工
tags:
  - 数学
  - 不等式
  - 解法
type: featured
---

# 不等式基础

不等式是求最值、比较大小和解应用题的基础，符号变号与取等条件最容易出错。这篇笔记把性质、均值不等式和二次不等式解法整理成卡，复制到四色笔记即可对照复习。

## 一、基础概念

<span class="sn-blue" data-sisenote-color="blue">基本性质：a>b ⇒ a+c>b+c；当 c>0 时 ac>bc；当 c<0 时 ac<bc（乘除负数不等号反向）。</span>

<span class="sn-blue" data-sisenote-color="blue">均值不等式：a, b>0 时 (a+b)/2≥√(ab)，当且仅当 a=b 时取等号。</span>

## 二、核心重点

- <span class="sn-red" data-sisenote-color="red">重点一：均值不等式推广——a, b, c>0 时 (a+b+c)/3≥∛(abc)，等号当且仅当 a=b=c</span>
- <span class="sn-red" data-sisenote-color="red">重点二：一元二次不等式 ax²+bx+c>0（a>0），大于取两根之外，小于取两根之间</span>
- 用均值不等式求最值须满足「一正、二定、三相等」

## 三、分析思路

<span class="sn-green" data-sisenote-color="green">思路：解二次不等式先化为 a>0 的标准形，再求方程根（判别式 Δ=b²−4ac），最后按「大于取两边、小于取中间」写解集。</span>

求最值时，若和为定值则积有最大值，若积为定值则和有最小值。

### 易错提醒

- <span class="sn-yellow" data-sisenote-color="yellow">易错一：不等式两边同乘负数忘记反向，导致解集完全错误</span>
- <span class="sn-yellow" data-sisenote-color="yellow">易错二：用均值不等式忽略取等条件，得出取不到的最值</span>
- 待记：Δ<0 时二次不等式解集要另行判断，不能直接套两根结论

## 四、自测小题

（1）解不等式 x²−5x+6<0；（2）当 x>0 时，求 x+4/x 的最小值。

> <span class="sn-green" data-sisenote-color="green">提示：（1）(x−2)(x−3)<0，根为 2、3，小于取中间，解集为 2<x<3。（2）x+4/x≥2√(x·4/x)=4，当 x=4/x 即 x=2 时取等，最小值为 4。</span>

## 五、总结

不等式解题的关键是先定符号、再看取等。把变号规则与取等条件标成黄色重点，每次动笔前先确认这两点，可避免绝大多数计算失误。
