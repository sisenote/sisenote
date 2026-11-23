---
layout: default
title: 精选笔记
description: 四色笔记官方精选原创知识笔记，覆盖学习方法、语文、数学、英语与多行业知识，展示四色标注与知识结构。
---

# 精选笔记

这些笔记由上海舱屿科技有限公司原创，覆盖五大类、共 80 篇，展示四色标注、知识结构与复习方法在真实知识场景中的应用。打开任意笔记，点击「复制到四色笔记」即可粘贴阅读与继续编辑。

{% assign accents = "red,green,blue,yellow,red" | split: "," %}

{% assign feat_pages = site.pages | where: "type", "featured" %}

{% for cat in site.data.featured-cats %}
<div class="sn-section" id="note-{{ cat.slug }}">
  <div class="sn-section-head">
    <h2>{{ cat.name }} <span class="sn-cat-count">{{ cat.count }} 篇</span></h2>
  </div>
  <p class="sn-section-desc">{{ cat.desc }}</p>
  <div class="sn-card-grid">
    {% assign cat_pages = feat_pages | where: "category", cat.name | sort: "title" %}
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
