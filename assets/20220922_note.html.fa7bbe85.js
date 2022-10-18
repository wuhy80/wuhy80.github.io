import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t,a as e,f as p}from"./app.6ae4687e.js";const o={},c=e("p",null,"\u65E5\u5E38\u8BB0\u5F55",-1),i=p(`<h1 id="_2022-09-22-\u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_2022-09-22-\u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 2022-09-22 \u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32</h1><p>\u4ECA\u5929\u4E3B\u8981\u7684\u5DE5\u4F5C\u662F\u5728\u7814\u7A76 C++\u5E76\u53D1\u7F16\u7A0B\uFF0C\u5BF9\u4E8E\u5E38\u7528\u7684 API \u90FD\u5F88\u6E05\u695A\u4E86\u3002\u5E76\u53D1\u7F16\u7A0B\u6548\u7387\u63D0\u5347\u6700\u91CD\u8981\u7684\u662F\u9501\u8981\u9501\u6700\u5C0F\u8303\u56F4\u3002</p><h1 id="\u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5982\u4F55\u5206\u5272\u5B57\u7B26\u4E32</h1><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;bits/stdc++.h&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// A quick way to split strings separated via spaces.</span>
<span class="token keyword">void</span> <span class="token function">simple_tokenizer</span><span class="token punctuation">(</span>string s<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    stringstream <span class="token function">ss</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    string word<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>ss <span class="token operator">&gt;&gt;</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> word <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// A quick way to split strings separated via any character</span>
<span class="token comment">// delimiter.</span>
<span class="token keyword">void</span> <span class="token function">adv_tokenizer</span><span class="token punctuation">(</span>string s<span class="token punctuation">,</span> <span class="token keyword">char</span> del<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    stringstream <span class="token function">ss</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    string word<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>ss<span class="token punctuation">.</span><span class="token function">eof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getline</span><span class="token punctuation">(</span>ss<span class="token punctuation">,</span> word<span class="token punctuation">,</span> del<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> word <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    string a <span class="token operator">=</span> <span class="token string">&quot;How do you do!&quot;</span><span class="token punctuation">;</span>
    string b <span class="token operator">=</span> <span class="token string">&quot;How$do$you$do!&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// Takes only space separated C++ strings.</span>
    <span class="token function">simple_tokenizer</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">adv_tokenizer</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token char">&#39;$&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(u,r){return s(),a("div",null,[c,t(" more "),i])}const v=n(o,[["render",l],["__file","20220922_note.html.vue"]]);export{v as default};
