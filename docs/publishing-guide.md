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
- 调整品牌色时，改 CSS 变量即可；若改了颜色值，请同步更新 `assets/js/copy.js` 顶部的 `COLOR_CSS` 内联样式常量，保证复制到外部编辑器后颜色一致。

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

## 六、已知未验证事项

- **四色笔记真实编辑器粘贴效果尚未验证**：当前未连接真实四色笔记 APP / Web 编辑器，无法确认 HTML 剪贴板中的颜色与富文本格式能被编辑器完整还原。因此脚本始终同时提供纯文本格式作为兜底，并在页面上明确提示「颜色与格式能否完整保留，以实际粘贴效果为准」。发布前应在真实编辑器中粘贴一次，确认效果后再决定是否调整 `COLOR_CSS` 或复制策略。
- 内容均为上海舱屿科技有限公司原创示例，未收录任何第三方教材全文或真实用户个人信息；如后续扩充内容，须继续遵守 [内容使用许可](../LICENSE-CONTENT.md) 与原创原则。
