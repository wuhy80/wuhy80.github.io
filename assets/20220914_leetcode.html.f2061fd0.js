import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t,a as p,f as e}from"./app.536b713d.js";const o={},c=p("p",null,"LeetCode \u7EC3\u4E60",-1),l=e(`<h1 id="_1619-\u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#_1619-\u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C" aria-hidden="true">#</a> 1619. \u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C</h1><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">double</span> <span class="token function">trimMean</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.05</span> <span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.95</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> total <span class="token operator">=</span> <span class="token function">accumulate</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> left<span class="token punctuation">,</span> arr<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> right<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> newSize <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.9</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> total<span class="token operator">/</span>newSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(i,r){return s(),a("div",null,[c,t(" more "),l])}const m=n(o,[["render",u],["__file","20220914_leetcode.html.vue"]]);export{m as default};