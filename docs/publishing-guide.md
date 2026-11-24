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
4. 列表页 `templates/index.md`、`featured-notes/index.md` 与首页 `index.md` 均按 Front Matter 的 `category` / `tags` 用 Liquid **自动生成卡片**，新增文章无需手改列表页。只要 `category` 取 `_data/*.yml` 里已登记的分类名即可自动归组；新分类需同步在对应 `_data/*.yml` 增加一条。

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

## 七、搜索引擎收录配置（2026-11-24 新增）

### 7.1 现状：不加 sitemap，靠什么被收录

本站**不维护 `sitemap.xml`**。搜索引擎仍能收录，因为收录的必要条件已经齐了：

| 条件 | 本站现状 |
|---|---|
| 页面可抓取 | Jekyll 输出的是**纯静态 HTML**，正文不依赖 JS 渲染，爬虫直接读到全文 |
| 不禁止抓取 | `robots.txt` 只有 `User-agent: *` + `Allow: /`（无 Sitemap 行，不留 404 引用） |
| 明确允许索引 | 每页 `<meta name="robots" content="index,follow">` |
| URL 唯一规范 | 每页 `canonical` = `site.url + baseurl + page.url` |
| 可被发现 | 首页 / 两个列表页 / 160 篇详情页全站互链，爬虫沿链接即可走完（校验 1640 条站内链接 0 断链） |
| 理解页面语义 | 全站 `Organization` + `WebSite`，160 篇各带 `Article` JSON-LD；`description` / `keywords` / OG 齐全 |

站点验证 meta（见 7.2）**不是收录的硬前提**，但验证后才能看收录数据、诊断抓取问题。sitemap 只是**加速器**：提交后收录更快、覆盖更全。若日后要加，见 7.3。

### 7.2 站点验证 meta（可选但建议）

验证 meta 的 token **与域名绑定**。官网 `sisenote.com` 的百度 `codeva-aLTwoV4ZQP`、360 `6533dd8f…` 只能验证官网域名，**填到本站无效**，禁止复制过来。

1. 在下列平台分别添加网址 `https://sisenote.github.io/sisenote/`（百度/360/Google/Bing 各一次），选择「HTML 标签验证」。
2. 复制平台给出的 `content` 值，填入 `_config.yml` → `seo` 对应字段：
   - 百度 → `baidu_site_verification`
   - 360 → `so_site_verification`
   - Google → `google_site_verification`
   - Bing → `bing_site_verification`
3. 重新部署。布局用 `!= empty` 判断，**留空则不输出该 meta**（Liquid 中空字符串是 truthy，不能用裸 `if`），填了才输出。
4. 回到平台点「验证」。百度会定期复查，token **不能从 head 里删掉**。

### 7.3 日后若要启用 sitemap（当前不需要）

本站当前刻意不加。若将来需要主动提交全部 URL，重建一份 `sitemap.xml`：

- 内容用 Liquid 遍历 `site.pages`，域名统一用 `{{ site.url }}{{ site.baseurl }}`，front matter 用 `layout: null` + `permalink: /sitemap.xml`；
- 同时把 `Sitemap: <绝对地址>` 那行加回 `robots.txt`（当前没有，别留指向 404 的引用）；
- 提交到百度资源平台 / Bing / Google 的「站点地图」入口。

⚠️ 迁移到官网后，官网 `sisenote-web/dist/sitemap.xml` 已存在（构建产出，当前 17 个 URL），内容并入时把本站 URL 加进那份即可，不用在 github.io 上另起一份。

### 7.4 已知限制：子路径部署的 robots

`robots.txt` 位于 `/sisenote/robots.txt`。当搜索引擎把 `https://sisenote.github.io/sisenote/` 注册为「网址前缀」资源时能读到；若把整个 `https://sisenote.github.io` 域名注册为资源，则它只认域名根 `/robots.txt` —— 那是另一个仓库（`sisenote.github.io` 用户站点），本仓无法控制。

本站没提交 sitemap，也就没有「robots 读不到导致 sitemap 不被发现」的风险 —— 爬虫走站内链接即可。

### 7.5 验收判据

```bash
jekyll build --destination /tmp/seo-check
cat /tmp/seo-check/robots.txt                        # 只有 Allow: /，无 Sitemap 行
grep -c 'index,follow' /tmp/seo-check/index.html     # 应 = 1
grep -c 'baidu-site-verification' /tmp/seo-check/index.html  # token 留空时应为 0
test ! -e /tmp/seo-check/sitemap.xml && echo "无 sitemap ✓"
```

交叉判据：每页 `canonical` 指向本站实际地址；文章页（160 篇）JSON-LD 含 `Article` 节点，全站含 `Organization` + `WebSite` 节点。

### 7.6 未来迁移到官网首页（重要）

本站规划并入 `sisenote-web` 官网首页（`https://sisenote.com`）。**现有埋点全部配置化，迁移只改 `_config.yml` 两行**：

```yaml
url: "https://sisenote.com"
baseurl: ""
```

重新构建部署后，`canonical`、站内导航、资源路径、`robots` 的作用域会一起切到官网。此时 github.io 旧页面仍可访问，但每页 `canonical` 已指向官网 ⇒ 搜索引擎把权重归到官网，**不会被判成重复内容**；等官网内容上线并确认收录后，再关闭 Pages。

**迁移切换清单**：

1. **验证 token**：本站为 github.io 申请的 token 换域名即作废。若内容页沿用本站 layout，把 `seo.*_verification` 改成官网域名下验证出的值（官网 `sisenote-web/index.html` 已有百度 `codeva-aLTwoV4ZQP`、360 `6533dd8f…`，由官网 head 统一输出时本站配置应清空，避免输出错域名 token）。
2. **收录衔接**：官网 `sisenote-web/dist/sitemap.xml` 已有 sitemap 机制，内容并进去即可；github.io 旧页靠 canonical 把权重交给官网。
3. **统计 ID 不用改**：GA `G-QVXF48FWK4` 与百度统计 ID 同一主体跨域名通用，迁移后继续上报，不会浪费。

**过渡期投入建议**：站点验证绑定域名、迁移后作废。若迁移在 1~2 个月内，建议只做 Google Search Console 验证（看收录数据），百度/360 的 github.io 验证可跳过，把精力留给官网；半年以上再四个都做。静态页面结构、结构化数据、统计这些基建迁移后仍可复用，现在做不白做。

## 八、内容合规

内容均为上海舱屿科技有限公司原创，覆盖 10 个分类共 160 篇，未收录任何第三方教材全文或真实用户个人信息；如后续扩充内容，须继续遵守 [内容使用许可](../LICENSE-CONTENT.md) 与原创原则。
