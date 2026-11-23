# sisenote（官方模板与精选笔记站）— 本端 SKILL

> 公开 GitHub Pages 静态内容站（`https://sisenote.github.io/sisenote/`），四色笔记官方原创模板 + 精选笔记展示。**不是**客户端代码仓。Jekyll + 原生 CSS/JS，Markdown 是唯一内容源。
> 本目录有独立 `.git`（对外发布仓）；在其它位置开工请先确认 baseline。

## 1. 部署与地址

- 对外地址：`https://sisenote.github.io/sisenote/`。`_config.yml` 中 `url: https://sisenote.github.io`、`baseurl: /sisenote`。
- ⛔ 站内所有链接/静态资源必须走 `{{ site.baseurl }}`，禁止写死 `/sisenote` 或绝对域名，否则换域名/本地预览会断。
- canonical = `{{ site.url }}{{ site.baseurl }}{{ page.url }}`。
- 本地预览：`jekyll serve`（本工作区 jekyll 装在 `~/.gem/ruby/4.0.0/bin`，未入 PATH，用全路径）→ `http://localhost:4000/sisenote/`。

## 2. ⛔ 品牌资产（logo）唯一事实源 —— 禁止自绘

**根因记录（2026-11-23）**：初版 header/hero 用 CSS 手绘「四个彩色圆点」当 logo —— 错的。四色笔记的官方图形标是**蓝色心形 + 四色叶片**，字标是蓝色「四色笔记」艺术设计字，二者完全不同。

- **唯一事实源**：工作区 `sisenote-common-img/`（`跨端公共图片/Icon 唯一事实源`，契约 §六.5）：
  - 图形标 → `sisenote-common-img/brand/brand-logo.svg`
  - 字标   → `sisenote-common-img/icons/sisenote_font.svg`
  - favicon → `sisenote-common-img/brand/app-icon.svg`
- **本仓是独立部署单元**（GitHub Pages 只发 `sisenote/` 目录），故在 `assets/images/` 存一份逐字节副本：
  `brand-logo.svg` / `sisenote-font.svg` / `favicon.svg`。
- **同步链路**（官方资产有更新时）：从上述唯一事实源 `cp` 覆盖本仓副本 → `cmp` 校验逐字节一致 → 重建 Jekyll。⛔ 不要手改 SVG、不要照着截图描、不要用通用四色圆点/爱心替代。
- **新建任何四色笔记相关项目/页面**：logo 一律从 `sisenote-common-img/` 取，先读它的 `AGENTS.md`。先搜 `brand_logo`/`brand-logo`/`sisenote_font` 确认有无现成资产，再动手。
- 校验：`cmp -s sisenote-common-img/brand/brand-logo.svg sisenote/assets/images/brand-logo.svg` 等三条须为 0。

## 3. 四色标注（正文 + 复制一致）

- Front Matter：`type: template` / `type: featured`；每篇正文以 `# 标题` 开头（复制时标题一起带走）。
- 正文四色用内联 span：`<span class="sn-red" data-sisenote-color="red">…</span>`（蓝/绿/黄同理）。`class` 管本站显示，`data-sisenote-color` 供复制脚本识别语义。
- ⛔ **四色色值 = 四色笔记编辑器官方白名单，禁止自造**：红 `#FF5555` 蓝 `#005CFF` 绿 `#01BD33` 黄 `#FFCD1C`。事实源 `sisenote-web/src/common/constants/EditorConstants.ts` `FONT_COLOR_MAP` a1~a4。
- **根因（2026-11-23）**：初版用了自造柔和色 `#d94f5c/#3479c8/#238567/#a97812`，粘贴进四色笔记时 `StyleSanitizer.isSupportedTextColor` 只认白名单 → 颜色 mark 被整块丢弃 → 全变黑字。`data-sisenote-color` 属性编辑器零消费者，真正起作用的是内联 `style="color:<官方hex>"`。
- 复制出去的色值由 `assets/js/copy.js` 的 `COLOR_CSS` 独立输出（官方 hex）；站内 CSS 四色变量同为官方值，另加淡背景仅为白底可读性（`copy.js` 不带背景）。改色须两边同改。
- 复制逻辑在 `assets/js/copy.js`：只复制 `#sn-article`；Clipboard API 同写 `text/html`+`text/plain`；富文本不支持时降级纯文本。详见 `docs/publishing-guide.md`。

## 4. 内容规模

- 每个分类 ≥16 篇，覆盖多行业、原创、实用、可直接复制改造。
- Markdown 单源，⛔ 不另建同内容 HTML。新增文章后必须同步对应列表页 `*/index.md` 卡片 + 首页推荐。

## 5. 验证

- Jekyll 构建 0 报错；站内链接（走 baseurl）全部命中；`node --check assets/js/copy.js`；logo 三条 `cmp` 一致。
