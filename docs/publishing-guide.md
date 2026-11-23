# 内容维护与发布指南

本文档面向项目维护者，说明如何新增内容、四色标注写法、复制功能原理，以及已知未验证事项。

## 一、新增一篇文档

1. 在 `templates/` 或 `featured-notes/` 的对应分类目录下新建 `.md` 文件。Markdown 是唯一内容源，**不要**再额外维护一份内容相同的 HTML。
2. 填写统一 Front Matter：

```yaml
---
layout: default
title: 文档标题
description: 文档简介
category: 分类名称
tags:
  - 标签一
  - 标签二
type: template   # 模板用 template，精选笔记用 featured
---
```

3. 正文用 `# 文档标题` 开头（这一行会作为「复制到四色笔记」时的标题一起复制）。
4. 在列表页 `templates/index.md` 或 `featured-notes/index.md` 增加一张卡片；首页 `index.md` 可视情况增加推荐卡片。卡片链接指向渲染后的 `.html` 路径，并带上 `{{ site.baseurl }}` 前缀。

## 二、四色标注写法

用内联 HTML 的 span 加语义属性，颜色值统一由 `assets/css/style.css` 中的 CSS 变量控制：

```html
<span class="sn-red" data-sisenote-color="red">这是核心重点</span>
<span class="sn-blue" data-sisenote-color="blue">这是概念定义</span>
<span class="sn-green" data-sisenote-color="green">这是解决思路</span>
<span class="sn-yellow" data-sisenote-color="yellow">这是易错提醒</span>
```

- `class` 控制本站显示颜色；`data-sisenote-color` 供复制脚本识别语义，转成纯文本标签【重点】【概念】【思路】【易错】。
- 只标注真正需要强调的内容，避免整篇五颜六色。

**⛔ 四色色值不可自造（2026-11-23 踩坑）**：四色笔记编辑器粘贴时只认官方白名单色值 —— 红 `#FF5555`、蓝 `#005CFF`、绿 `#01BD33`、黄 `#FFCD1C`（事实源 `sisenote-web/src/common/constants/EditorConstants.ts` 的 `FONT_COLOR_MAP` a1~a4）。`assets/js/copy.js` 的 `COLOR_CSS` 已输出这四个精确 hex。若改成其它任何颜色（哪怕肉眼接近），粘贴进四色笔记时 `StyleSanitizer` 会把颜色 mark 整块丢弃，文字变黑，颜色语义全丢。改色前务必确认新值在编辑器白名单内，并同步 CSS 变量与 `COLOR_CSS` 两处。

## 三、复制功能说明

`assets/js/copy.js` 在详情页工作，行为如下：

- 复制范围仅为 `#sn-article`（文档标题 + 正文），不含导航、页脚与复制按钮。
- 优先通过 Clipboard API 同时写入 `text/html`（颜色类转成内联样式）与 `text/plain`（保留标题层级与颜色语义标签）两种格式。
- 若浏览器不支持富文本剪贴板，自动降级为纯文本复制。
- 复制成功与失败都有页面提示。

## 四、本地预览

GitHub Pages 无法直接预览草稿。本地可用 Jekyll 构建：

```bash
cd sisenote
jekyll serve
```

浏览器打开 `http://localhost:4000/sisenote/`。若使用自定义域名部署到根路径，把 `_config.yml` 中的 `baseurl` 改为 `""`，本地访问地址相应变为 `http://localhost:4000/`。

## 五、发布到 GitHub Pages

在 GitHub 仓库 Settings → Pages 中设置：

- Source：Deploy from a branch
- Branch：`main`
- Folder：`/ (root)`

保存后即可启用。

## 六、粘贴还原验证情况（2026-11-23 已验证）

用四色笔记共享编辑器的真实测试基建（`sisenote-web/src/editor/core/ClipboardRoundTrip.test.ts` 同源：真实 Tiptap Editor + `createExtensions` + `createClipboardProps` + 合成 paste 事件）验证本站 `copy.js` 的输出：

- ✅ 官方四色 `#FF5555 / #005CFF / #01BD33 / #FFCD1C` 内联 span 粘贴后，四个 `textStyle` 颜色 mark 全部还原。
- ✅ `copy.js` 输出的完整 `<html><body>…` 外壳形态同样能正确还原颜色。
- ✅ 对照实验：初版自造色 `#d94f5c` 粘贴后颜色被 `StyleSanitizer` 整块丢弃（变黑字）—— 这就是必须锁定官方白名单色值的原因。
- 结论：Web 编辑器侧富文本颜色还原已验证。APP 端（Android / 鸿蒙 / iOS）WebView 用的是同一套共享编辑器产物，但**未在真机逐端实测**；纯文本格式始终作为兜底同时写入。

## 七、内容合规

内容均为上海舱屿科技有限公司原创，覆盖 10 个分类共 160 篇，未收录任何第三方教材全文或真实用户个人信息；如后续扩充内容，须继续遵守 [内容使用许可](../LICENSE-CONTENT.md) 与原创原则。
