/*
 * 四色笔记 · 复制到四色笔记
 * ------------------------------------------------------------------
 * 复制范围：仅 #sn-article（文档标题 + 正文），不含导航 / 页脚 / 按钮。
 * 富文本：写入 text/html，把 .sn-red/.sn-blue/... 类名转成内联 color 样式，
 *         避免脱离本站 CSS 后颜色丢失。
 * 纯文本：写入 text/plain，保留标题层级（# / ## ...）与颜色语义标签
 *         （【重点】【概念】【思路】【易错】）。
 * 降级：不支持 ClipboardItem 的环境退回 execCommand('copy') 复制纯文本。
 *
 * 注意：四色笔记编辑器能否完整还原所有富文本格式，尚未在真实编辑器中验证；
 *       因此始终同时提供纯文本格式作为兜底。
 */
(function () {
  'use strict';

  var COLOR_CSS = {
    red: 'color: #d94f5c;',
    blue: 'color: #3479c8;',
    green: 'color: #238567;',
    yellow: 'color: #a97812;'
  };
  var COLOR_LABEL = {
    red: '重点',
    blue: '概念',
    green: '思路',
    yellow: '易错'
  };

  var article = document.getElementById('sn-article');
  var buttons = document.querySelectorAll('[data-sn-copy]');
  var toast = document.getElementById('sn-toast');
  if (!article || !buttons.length) return;

  function notify(message, isError) {
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'sn-toast show' + (isError ? ' error' : '');
    if (notify._timer) clearTimeout(notify._timer);
    notify._timer = setTimeout(function () {
      toast.className = 'sn-toast';
    }, 2800);
  }

  // ---------- 富文本 HTML ----------
  function buildHtml() {
    var clone = article.cloneNode(true);

    // 防御性移除：正文中若混入交互元素也不进入剪贴板
    var junk = clone.querySelectorAll('button, script, noscript, [data-sn-copy]');
    Array.prototype.forEach.call(junk, function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // 语义颜色类 -> 内联样式
    var colored = clone.querySelectorAll('[data-sisenote-color]');
    Array.prototype.forEach.call(colored, function (el) {
      var key = el.getAttribute('data-sisenote-color');
      if (COLOR_CSS[key]) {
        var prev = el.getAttribute('style') || '';
        el.setAttribute('style', prev + (prev.trim() ? ' ' : '') + COLOR_CSS[key]);
      }
    });

    return '<!DOCTYPE html>\n<html><head><meta charset="utf-8"></head><body>\n' +
      clone.outerHTML + '\n</body></html>';
  }

  // ---------- 纯文本 ----------
  function inlineText(node) {
    if (node.nodeType === 3) {
      return node.nodeValue.replace(/[\t\r\n]+/g, ' ');
    }
    if (node.nodeType !== 1) return '';

    var tag = node.tagName.toLowerCase();
    if (tag === 'br') return '\n';

    var children = function () {
      var out = '';
      for (var i = 0; i < node.childNodes.length; i++) {
        out += inlineText(node.childNodes[i]);
      }
      return out;
    };

    if (tag === 'strong' || tag === 'b') return '**' + children() + '**';
    if (tag === 'em' || tag === 'i') return '*' + children() + '*';
    if (tag === 'code') return '`' + children() + '`';
    if (tag === 'a') return children();

    var color = node.getAttribute && node.getAttribute('data-sisenote-color');
    if (color && COLOR_LABEL[color]) {
      return '【' + COLOR_LABEL[color] + '】' + children();
    }
    return children();
  }

  function blockText(node) {
    if (node.nodeType !== 1) return '';
    var tag = node.tagName.toLowerCase();

    if (/^h[1-6]$/.test(tag)) {
      var level = parseInt(tag.charAt(1), 10);
      var hashes = '';
      for (var h = 0; h < level; h++) hashes += '#';
      return hashes + ' ' + inlineText(node).trim() + '\n\n';
    }
    if (tag === 'p') return inlineText(node).trim() + '\n\n';
    if (tag === 'ul' || tag === 'ol') {
      var items = node.children || [];
      var list = '';
      var index = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].tagName.toLowerCase() !== 'li') continue;
        index += 1;
        var prefix = tag === 'ul' ? '- ' : index + '. ';
        list += prefix + inlineText(items[i]).trim() + '\n';
      }
      return list + '\n';
    }
    if (tag === 'blockquote') {
      return '> ' + inlineText(node).trim().split('\n').join('\n> ') + '\n\n';
    }
    if (tag === 'pre') return inlineText(node).trim() + '\n\n';
    if (tag === 'hr') return '---\n\n';
    if (tag === 'table') {
      var table = '';
      var rows = node.querySelectorAll('tr');
      for (var r = 0; r < rows.length; r++) {
        var cells = rows[r].querySelectorAll('th, td');
        var parts = [];
        for (var c = 0; c < cells.length; c++) parts.push(inlineText(cells[c]).trim());
        table += parts.join(' | ') + '\n';
      }
      return table + '\n';
    }

    // div / section 等容器：递归处理子节点
    var nested = '';
    for (var j = 0; j < node.childNodes.length; j++) {
      var child = node.childNodes[j];
      if (child.nodeType === 1) nested += blockText(child);
      else if (child.nodeType === 3 && child.nodeValue.trim()) {
        nested += child.nodeValue.trim() + '\n\n';
      }
    }
    return nested;
  }

  function buildText() {
    var out = '';
    for (var i = 0; i < article.childNodes.length; i++) {
      var node = article.childNodes[i];
      if (node.nodeType === 1) out += blockText(node);
      else if (node.nodeType === 3 && node.nodeValue.trim()) out += node.nodeValue.trim() + '\n\n';
    }
    return out.replace(/\n{3,}/g, '\n\n').trim() + '\n';
  }

  // ---------- 降级复制（纯文本） ----------
  function legacyCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(textarea);
    return ok;
  }

  function copyToClipboard() {
    var text = buildText();
    var html = buildHtml();

    if (navigator.clipboard && window.ClipboardItem) {
      try {
        var item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).then(function () {
          notify('已复制富文本与纯文本，可粘贴到四色笔记新建文档', false);
        }).catch(function () {
          if (legacyCopy(text)) {
            notify('已复制纯文本（当前环境不支持富文本复制）', false);
          } else {
            notify('复制失败，请手动选择正文复制', true);
          }
        });
        return;
      } catch (e) {
        // 构造 ClipboardItem 失败时，继续走降级方案
      }
    }

    if (legacyCopy(text)) {
      notify('已复制纯文本（当前环境不支持富文本复制）', false);
    } else {
      notify('复制失败，请手动选择正文复制', true);
    }
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', copyToClipboard);
  });
})();
