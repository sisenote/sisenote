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

## 6. 搜索引擎收录（SEO 埋点）

- 参数在 `_config.yml` 的 `seo:` 块，输出全在 `_layouts/default.html` head；详情见 `docs/publishing-guide.md` §七。
- ⛔ **站点验证 token 绑定域名**：必须为 `sisenote.github.io` 单独验证，禁止复制官网 `sisenote.com` 的百度/360 token。留空 = 不输出 —— Liquid 空字符串是 truthy，判断必须写 `!= empty`，裸 `if` 会输出 `content=""` ⇒ 验证失败。
- **本站刻意不加 `sitemap.xml`**（2026-11-24 定）。收录靠：静态 HTML 全文可抓 + `robots.txt` 的 `Allow: /` + 每页 `index,follow` + canonical + 全站互链（1640 链接 0 断链）+ JSON-LD。⛔ 别在 robots.txt 里写指向不存在 sitemap 的 `Sitemap:` 行。
- GA / 百度统计只统计流量、不促收录。统计代码结构复用 `sisenote-web/index.html` 的「空闲加载 + GA 失败回退百度」，别删回退分支。
- 改 layout 后必验：`robots.txt` 无 Sitemap 行、每页 `index,follow` 与 canonical 正确、JSON-LD 可解析且含 Organization/WebSite（文章页含 Article）、统计脚本 `node --check`、`sitemap.xml` 不存在。
- **迁移预案**：本站未来并入 `sisenote.com` 官网首页。切换只改 `_config.yml` 的 `url`/`baseurl` 两行（→ `https://sisenote.com` / `""`），canonical + 站内链接 + robots 自动一起切；github.io 旧页变 canonical 指向官网的过渡页 ⇒ 不产生重复内容。迁移时验证 token 作废需换官网域名的值、内容并入官网已有 sitemap；统计 ID 跨域名通用不用改。
