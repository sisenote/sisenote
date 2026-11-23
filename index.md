---
layout: default
title: 四色笔记 · 官方模板与精选笔记
description: 四色笔记官方原创模板与精选知识笔记。让知识有结构，让重点有颜色，让复习更高效。
---

<div class="sn-hero">
  <img class="sn-hero-logo" src="{{ site.baseurl }}/assets/images/brand-logo.svg" alt="四色笔记 Logo">
  <h1>四色笔记 · 官方模板与精选笔记</h1>
  <p class="sn-hero-sub">让知识有结构，让重点有颜色，让复习更高效。</p>
  <p class="sn-hero-intro">这里汇集四色笔记官方原创模板与精选知识笔记。你可以浏览、学习，也可以一键复制到四色笔记，快速创建自己的知识体系。</p>
  <p class="sn-hero-cta">
    <a class="sn-btn sn-btn-primary" href="{{ site.baseurl }}/templates/">浏览官方模板</a>
    <a class="sn-btn sn-btn-ghost" href="{{ site.baseurl }}/featured-notes/">浏览精选笔记</a>
    <a class="sn-btn sn-btn-ghost" href="https://sisenote.com" target="_blank" rel="noopener">访问官方网站</a>
  </p>
</div>

<div class="sn-section">
  <div class="sn-section-head">
    <h2>官方模板</h2>
    <a href="{{ site.baseurl }}/templates/">查看全部 80 篇 →</a>
  </div>
  <p class="sn-section-desc">覆盖学习提升、考试备考、职场办公、思维方法、通用记录五大类，可直接复制到四色笔记使用。</p>
  <div class="sn-card-grid">
    {% assign tpl_accent = "blue,red,green" | split: "," %}
    {% assign tpl = site.pages | where: "type", "template" | sort: "title" %}
    {% for p in tpl limit:4 %}
    <a class="sn-card" href="{{ site.baseurl }}{{ p.url }}">
      <span class="sn-card-accent {{ tpl_accent[forloop.index0] }}"></span>
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

<div class="sn-section">
  <div class="sn-section-head">
    <h2>精选笔记</h2>
    <a href="{{ site.baseurl }}/featured-notes/">查看全部 80 篇 →</a>
  </div>
  <p class="sn-section-desc">覆盖学习方法、语文人文、数学理工、英语语言、行业知识五大类，展示四色标注与知识结构。</p>
  <div class="sn-card-grid">
    {% assign feat_accent = "red,green,blue" | split: "," %}
    {% assign feat = site.pages | where: "type", "featured" | sort: "title" %}
    {% for p in feat limit:4 %}
    <a class="sn-card" href="{{ site.baseurl }}{{ p.url }}">
      <span class="sn-card-accent {{ feat_accent[forloop.index0] }}"></span>
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
