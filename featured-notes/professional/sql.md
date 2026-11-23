---
layout: default
title: SQL 基础
description: 掌握查询语法、聚合分组、连接与事务要点，帮你写出正确高效的数据库查询语句。
category: 行业知识
tags:
  - IT
  - SQL
  - 数据库
type: featured
---

# SQL 基础

SQL 是和数据库对话的语言。这篇笔记把语句分类、查询语法、连接与事务要点整理成一张速查卡，方便复制到四色笔记里随查随用。

## 一、语句四大类

<span class="sn-blue" data-sisenote-color="blue">DDL 数据定义：CREATE、ALTER、DROP，用于建表和改结构；DML 数据操作：INSERT、UPDATE、DELETE，用于增删改数据</span>。

<span class="sn-blue" data-sisenote-color="blue">DQL 数据查询：SELECT，使用最多；DCL 数据控制：GRANT、REVOKE，管理权限</span>。

<span class="sn-red" data-sisenote-color="red">SELECT 的完整顺序为：SELECT 列 FROM 表 WHERE 条件 GROUP BY 列 HAVING 分组条件 ORDER BY 列 LIMIT 数量</span>。

## 二、查询与过滤

WHERE 常用运算符：＝、＜＞、大小比较、BETWEEN、IN、LIKE（%匹配任意多个字符，_匹配一个字符）、IS NULL，以及 AND、OR、NOT 组合。

<span class="sn-yellow" data-sisenote-color="yellow">判断空值要用 IS NULL，不能用＝NULL；LIKE 中%放开头通常无法利用普通索引</span>。

DISTINCT 用于去重，AS 起别名，ORDER BY 默认升序（ASC），降序用 DESC，LIMIT 用于分页。<span class="sn-yellow" data-sisenote-color="yellow">多个条件混合时，AND 优先级高于 OR，复杂逻辑要加括号</span>。

## 三、聚合与分组

<span class="sn-red" data-sisenote-color="red">聚合函数有 COUNT、SUM、AVG、MAX、MIN；COUNT(*)统计行数，COUNT(列)会忽略空值</span>。

<span class="sn-green" data-sisenote-color="green">步骤：GROUP BY 先按列分组，HAVING 再过滤分组结果</span>。

WHERE 过滤分组前的行，HAVING 过滤分组后的组；SELECT 中出现的普通列必须包含在 GROUP BY 中。

## 四、连接、索引与事务

INNER JOIN 内连接只返回两表匹配的行；LEFT JOIN 返回左表全部行，右表无匹配则填空值。

事务具备 ACID 四特性：原子性、一致性、隔离性、持久性。

索引类似书本目录，可加快查询，常见结构为B＋树，代价是占用空间并降低写入速度。防 SQL 注入要用参数化查询，绝不把用户输入直接拼接进 SQL 字符串。

## 五、自测小题

学生表 students(id, name, score)，查询成绩大于80分的学生姓名，按成绩降序取前5名。

> <span class="sn-green" data-sisenote-color="green">答案：SELECT name FROM students WHERE score > 80 ORDER BY score DESC LIMIT 5;</span>

## 六、总结

SQL 的主线是"先写 FROM 和 WHERE 定范围，再分组聚合，最后排序分页"。多写多查，注意空值和歧义列名。
