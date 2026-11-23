# 内容规划（内部维护文档，Jekyll 不发布）

> 每个分类 ≥16 篇，覆盖多个行业。Markdown 是唯一内容源。

## 分类与规模

**templates/（官方模板，type: template）**
| 分类目录 | 名称 | 篇数 |
|---|---|---|
| `study/` | 学习提升 | 16 |
| `exam/` | 考试备考 | 16 |
| `workplace/` | 职场办公 | 16 |
| `thinking/` | 思维方法 | 16 |
| `general/` | 通用记录 | 16 |

**featured-notes/（精选笔记，type: featured）**
| 分类目录 | 名称 | 篇数 |
|---|---|---|
| `learning-method/` | 学习方法 | 16 |
| `chinese/` | 语文人文 | 16 |
| `mathematics/` | 数学理工 | 16 |
| `english/` | 英语语言 | 16 |
| `professional/` | 行业知识（法律/财会/医学/编程/产品等） | 16 |

合计 **160 篇**（10 分类 × 16）。

## Front Matter 统一格式

```yaml
---
layout: default
title: 文档标题
description: 一句话简介（20-40字，说清用途与收益）
category: 分类中文名
tags:
  - 标签一
  - 标签二
  - 标签三
type: template   # 或 featured
---
```

## 正文写作规范

1. 以 `# 文档标题` 开头（与 front matter title 一致，复制时标题一起带走）。
2. 开头 1-2 句点明「这篇解决什么问题 / 怎么用」，让人一看就想复制。
3. 结构：用 `## 一、…` 分节，必要时 `### 1. …`。层级清楚，3-5 个主节。
4. 四色标注每篇 **4-8 处**，覆盖「概念/重点/思路/易错」中的至少 2 类：
   - `<span class="sn-blue" data-sisenote-color="blue">概念：…</span>`
   - `<span class="sn-red" data-sisenote-color="red">重点：…</span>`
   - `<span class="sn-green" data-sisenote-color="green">思路：…</span>`
   - `<span class="sn-yellow" data-sisenote-color="yellow">易错：…</span>`
   - 不要整段上色，只标关键词句。
5. 模板类（`type: template`）：必须有可填写的占位结构（如 `【填写…】`、`☐`、空表格），用户复制后能直接填入自己的内容。
6. 精选笔记类（`type: featured`）：必须有真实、具体、可验证的知识内容（定义、步骤、例子、公式、易错点），不是空壳模板。
7. ⛔ 不要写空洞占位（「这里写内容」「待补充」）。每篇都要有信息量。
8. 适度用列表 / 表格 / 引用，不滥用。适当放「挖空自测」或「使用示例」增强实用性。
9. ⛔ 内容原创，不抄第三方教材全文，不含真实用户个人信息。

## 色值红线（复制粘贴一致的关键）

四色语义色值 = 四色笔记编辑器白名单，禁止自造：
红 `#FF5555` / 蓝 `#005CFF` / 绿 `#01BD33` / 黄 `#FFCD1C`。
Markdown 里只写 `class` + `data-sisenote-color`，色值由 `assets/js/copy.js` 统一输出，正文不要写死 hex。

## 列表页同步

每新增一篇，必须在对应 `templates/index.md` 或 `featured-notes/index.md` 增加一张卡片；首页 `index.md` 每分类放 2 张精选卡片。卡片链接指向 `.html`，带 `{{ site.baseurl }}` 前缀。

## 选题清单

### templates/study（学习提升 16）
learning-plan 学习计划 · knowledge-framework 知识体系整理 · mistake-review 错题复盘 · class-notes 课堂笔记 · reading-notes 精读读书笔记 · review-plan 阶段复习计划 · preview-notes 课前预习 · exam-week 考前一周冲刺 · skill-drill 技能刻意练习 · mindmap-notes 思维导图笔记 · feynman-notes 费曼学习卡 · spaced-review 间隔重复复习 · paper-reading 论文精读 · self-study 自学项目规划 · weekly-review 每周学习复盘 · goal-okrs 学习目标 OKR

### templates/exam（考试备考 16）
exam-review 考试总复习 · syllabus-check 考纲考点清单 · past-paper 真题分析 · mock-test 模拟卷复盘 · error-book 错题本 · recite-plan 背诵计划 · essay-material 作文素材库 · fill-blank 挖空自测 · oral-exam 面试口语准备 · midterm 期中复习 · final 期末复习 · postgrad 考研规划 · cet46 四六级备考 · ielts 雅思备考 · civil-service 公考行测 · certificate 职业资格备考

### templates/workplace（职场办公 16）
meeting-notes 会议纪要 · weekly-report 周报 · project-plan 项目计划 · project-retro 项目复盘 · okr 个人 OKR · todo-priority 待办优先级 · decision-log 决策记录 · research 调研报告 · proposal 方案提案 · ppt-outline PPT 大纲 · resume 简历 · interview-prep 面试准备 · onboarding 新人入职 · one-on-one 一对一沟通 · client-followup 客户跟进 · annual-review 年度总结

### templates/thinking（思维方法 16）
problem-solving 问题解决 · decision-matrix 决策矩阵 · root-cause 根因分析 · pyramid 金字塔原理 · mindmap 思维导图 · first-principles 第一性原理 · six-hats 六顶思考帽 · swot SWOT 分析 · five-why 五个为什么 · mece MECE 拆解 · critical-thinking 批判性思考 · brainstorming 头脑风暴 · scenario 情景推演 · pre-mortem 事前验尸 · analogy 类比思考 · mental-model 思维模型清单

### templates/general（通用记录 16）
blank 通用空白 · daily 日记 · gratitude 感恩日记 · habit 习惯打卡 · reading-list 书单影单 · travel 旅行计划 · budget 记账预算 · health 健康记录 · workout 健身计划 · recipe 菜谱 · shopping 购物清单 · moving 搬家清单 · inspiration 灵感收集 · birthday 礼物清单 · pet 宠物照护 · emergency 应急信息卡

### featured-notes/learning-method（学习方法 16）
four-color 四色知识笔记法 · feynman 费曼技巧 · active-recall 主动回忆 · spaced-repetition 间隔重复 · interleaving 交错练习 · deliberate-practice 刻意练习 · chunking 组块化 · retrieval 提取练习 · elaboration 精细加工 · dual-coding 双重编码 · testing-effect 测试效应 · pomodoro 番茄工作法 · cornell 康奈尔笔记 · sq3r SQ3R 阅读法 · mindmap-method 导图学习法 · growth-mindset 成长型思维

### featured-notes/chinese（语文人文 16）
function-ci 文言虚词「之」 · function-er 文言虚词「而」 · idiom 成语辨析 · poetry-appreciation 古诗鉴赏 · prose-reading 散文阅读 · argumentative 议论文结构 · narrative 记叙文写法 · rhetoric 修辞手法 · classical-sentence 文言句式 · modern-lit 现代文学常识 · ancient-lit 古代文学常识 · writing-opening 作文开头技法 · writing-ending 作文结尾技法 · material-accumulation 作文素材积累 · reading-comprehension 阅读理解答题 · chinese-grammar 现代汉语语法

### featured-notes/mathematics（数学理工 16）
monotonicity 函数单调性 · derivative 导数应用 · trigonometry 三角函数 · sequence 数列 · probability 概率初步 · statistics 统计基础 · solid-geometry 立体几何 · analytic-geometry 解析几何 · inequality 不等式 · complex 复数 · vector 向量 · permutation 排列组合 · induction 数学归纳法 · function-zero 函数零点 · limit 极限概念 · integral 积分初步

### featured-notes/english（英语语言 16）
attributive-clause 定语从句 · tenses 时态总览 · subjunctive 虚拟语气 · non-finite 非谓语动词 · word-formation 构词法 · long-sentence 长难句分析 · writing-template 写作模板 · reading-skills 阅读技巧 · listening-skills 听力技巧 · cloze 完形填空 · translation 翻译技巧 · phrasal-verbs 高频短语动词 · prepositions 介词辨析 · articles 冠词用法 · business-email 商务邮件 · vocabulary 词汇记忆法

### featured-notes/professional（行业知识 16）
contract-law 合同法要点 · labor-law 劳动法常识 · tort-liability 侵权责任 · accounting-basics 会计基础 · financial-statement 财务报表 · tax-basics 税务基础 · investment 投资基础 · insurance 保险常识 · human-anatomy 人体解剖基础 · first-aid 急救常识 · pharmacology 用药常识 · programming-basics 编程基础 · sql SQL 基础 · product-management 产品管理 · project-management 项目管理 · data-analysis 数据分析
