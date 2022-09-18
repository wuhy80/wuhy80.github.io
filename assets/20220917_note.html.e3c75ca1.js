import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,e as a,a as s,f as l}from"./app.c5d809e7.js";const d={},r=s("p",null,"\u5B66\u4E60 LevelDB \u7684\u7B2C\u4E8C\u5929\uFF0C\u8BB0\u5F55\u4E00\u4E9B\u7591\u60D1\uFF0C\u4EE3\u7801\u770B\u8D77\u6765\u5F88\u96BE\u61C2\u554A",-1),t=l(`<h1 id="skiplist-\u7684\u521D\u59CB\u5316\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#skiplist-\u7684\u521D\u59CB\u5316\u52A8\u4F5C" aria-hidden="true">#</a> SkipList \u7684\u521D\u59CB\u5316\u52A8\u4F5C</h1><p>\u6709\u51E0\u4E2A\u7591\u70B9</p><ol><li>NewNode \u91CC\u9762\u4F7F\u7528\u7684 arena \u505A\u7684\u5185\u5B58\u5206\u914D\uFF0C\u6CA1\u770B\u592A\u61C2</li><li>\u4E3A\u5565 next_\u9700\u8981\u4F7F\u7528 atomic \u64CD\u4F5C\uFF1F\u5176\u4ED6\u7684\u5C31\u4E0D\u9700\u8981\u4E86\u5417\uFF1F\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 atomic \u64CD\u4F5C\u4EC0\u4E48\u65F6\u5019\u4E0D\u9700\u8981</li></ol><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>template &lt;typename Key, class Comparator&gt;
SkipList&lt;Key, Comparator&gt;::SkipList(Comparator cmp, Arena* arena)
    : compare_(cmp),
      arena_(arena),
      head_(NewNode(0 /* any key will do */, kMaxHeight)),
      max_height_(1),
      rnd_(0xdeadbeef) {
  for (int i = 0; i &lt; kMaxHeight; i++) {
    head_-&gt;SetNext(i, nullptr);
  }
}

void SetNext(int n, Node* x) {
  assert(n &gt;= 0);
  // Use a &#39;release store&#39; so that anybody who reads through this
  // pointer observes a fully initialized version of the inserted node.
  next_[n].store(x, std::memory_order_release);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function o(c,v){return i(),n("div",null,[r,a(" more "),t])}const _=e(d,[["render",o],["__file","20220917_note.html.vue"]]);export{_ as default};
