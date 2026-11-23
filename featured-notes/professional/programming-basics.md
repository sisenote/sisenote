---
layout: default
title: 编程基础
description: 建立变量、控制结构、函数、数据结构与复杂度的整体认知，帮你读懂代码并写出清晰程序。
category: 行业知识
tags:
  - IT
  - 编程
  - 算法
type: featured
---

# 编程基础

编程的本质是把解决问题的方法写成计算机能执行的明确步骤。这篇笔记把核心概念、数据结构、复杂度与开发流程整理成一张入门卡，方便复制到四色笔记里搭建知识框架。

## 一、程序由什么组成

<span class="sn-blue" data-sisenote-color="blue">程序＝数据结构＋算法；数据结构描述数据如何组织，算法描述如何处理数据</span>。

要素：变量（存储数据的命名容器）、数据类型（整数、浮点数、字符串、布尔值）、运算符（算术、比较、逻辑、赋值）、控制结构（顺序、分支、循环）。

<span class="sn-red" data-sisenote-color="red">任何复杂程序都由顺序、分支、循环三种基本结构组合而成</span>。

## 二、函数与抽象

<span class="sn-blue" data-sisenote-color="blue">函数是封装起来可重复调用的代码块，通过参数接收输入、通过返回值输出结果</span>。

<span class="sn-green" data-sisenote-color="green">思想：抽象与复用——把重复逻辑提取成函数，遵循单一职责和"不要重复自己"原则</span>。

<span class="sn-yellow" data-sisenote-color="yellow">注意变量作用域，函数内部定义的局部变量在外部通常不可访问；命名要清晰，注释适度即可</span>。

## 三、常见数据结构与复杂度

栈后进先出，队列先进先出，哈希表是键值对映射且查找快，树与图用于表达层次和网络关系。

<span class="sn-red" data-sisenote-color="red">大O表示法描述算法随数据规模增长的趋势：O(1)常数、O(log n)对数、O(n)线性、O(n log n)、O(n²)平方</span>。

<span class="sn-yellow" data-sisenote-color="yellow">复杂度看的是增长趋势而非具体耗时，忽略常数系数；二分查找是O(log n)，冒泡排序是O(n²)</span>。

## 四、开发流程与版本管理

流程：需求分析→设计→编码→测试→部署→维护；测试包括单元测试、集成测试，调试从读懂报错信息开始。

Git是分布式版本控制工具，核心操作有提交（记录快照）、分支（并行开发）、合并（整合改动）。

面向对象编程的四大特征是类与对象、封装、继承、多态，适合建模复杂业务。

## 五、自测小题

写出判断一个整数是否为偶数的思路，并说明其时间复杂度。

> <span class="sn-green" data-sisenote-color="green">答案：读入整数n，计算n除以2的余数，余数为0输出"偶数"否则输出"奇数"；只有常数次操作，时间复杂度为O(1)。</span>

## 六、总结

编程的主线是"用数据结构组织信息，用算法处理信息，用函数复用逻辑"。多动手写代码，比只看书更有效。
