---
layout: default
title: 官方模板
description: 四色笔记官方原创学习模板，覆盖学习、考试、职场、思维与日常记录，可一键复制到四色笔记使用。
---

# 官方模板

这些模板由上海舱屿科技有限公司原创，覆盖学习、考试、职场、思维与日常记录五大类、共 80 篇。打开任意模板，点击「复制到四色笔记」即可粘贴使用，方括号与方框处填入自己的内容即可。

{% assign accents = "blue,red,green,yellow,blue" | split: "," %}

{% assign tmpl_pages = site.pages | where: "type", "template" %}

{% for cat in site.data.template-cats %}
<div class="sn-section" id="tpl-{{ cat.slug }}">
  <div class="sn-section-head">
    <h2>{{ cat.name }} <span class="sn-cat-count">{{ cat.count }} 篇</span></h2>
  </div>
  <p class="sn-section-desc">{{ cat.desc }}</p>
  <div class="sn-card-grid">
    {% assign cat_pages = tmpl_pages | where: "category", cat.name | sort: "title" %}
    {% for p in cat_pages %}
    <a class="sn-card" href="{{ site.baseurl }}{{ p.url }}">
      <span class="sn-card-accent {{ accents[forloop.index0] }}"></span>
      <p class="sn-card-title">{{ p.title }}</p>
      <p class="sn-card-desc">{{ p.description }}</p>
      <div class="sn-card-meta">
        {% for tag in p.tags limit:2 %}<span class="sn-tag">{{ tag }}</span>{% endfor %}
        <span class="sn-card-link">查看详情 →</span>
      </div>
    </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
