import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p,a as t,f as e}from"./app.a9fc3e83.js";const o={},c=t("p",null,"\u5982\u4F55\u81EA\u5DF1\u5B9E\u73B0 C++ unique_ptr \u548C shared_ptr",-1),l=e(`<h1 id="\u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488</h1><h2 id="unique-ptr-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#unique-ptr-\u5B9E\u73B0" aria-hidden="true">#</a> Unique_ptr \u5B9E\u73B0</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdlib&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cassert&gt;</span></span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span>  <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">my_unique_ptr</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span><span class="token operator">:</span>
  T <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">ptr</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span>T <span class="token operator">*</span>ptr<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">ptr</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_unique_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
  my_unique_ptr<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_unique_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>

  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span>my_unique_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span>  <span class="token keyword">noexcept</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>my_unique_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span>  <span class="token keyword">noexcept</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">*</span> <span class="token keyword">operator</span><span class="token operator">-&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">~</span><span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token keyword">private</span><span class="token operator">:</span>
  <span class="token keyword">void</span> <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptr <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unique-ptr-\u5B9E\u73B0\u6570\u7EC4\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#unique-ptr-\u5B9E\u73B0\u6570\u7EC4\u6307\u9488" aria-hidden="true">#</a> Unique_ptr \u5B9E\u73B0\u6570\u7EC4\u6307\u9488</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">my_unique_ptr</span><span class="token operator">&lt;</span>T<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span><span class="token operator">:</span>
  T<span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">ptr</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span>T <span class="token operator">*</span>ptr<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">ptr</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_unique_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>
  my_unique_ptr<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_unique_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">delete</span><span class="token punctuation">;</span>

  <span class="token function">my_unique_ptr</span><span class="token punctuation">(</span>my_unique_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>my_unique_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">*</span> <span class="token keyword">operator</span><span class="token operator">-&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">assert</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">~</span><span class="token function">my_unique_ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token keyword">private</span><span class="token operator">:</span>
  <span class="token keyword">void</span> <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ptr<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shared-ptr-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#shared-ptr-\u5B9E\u73B0" aria-hidden="true">#</a> Shared_ptr \u5B9E\u73B0</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u4EE3\u7801\u5B9E\u73B0\u6765\u6E90\u4E8E https://medium.com/analytics-vidhya/c-shared-ptr-and-how-to-write-your-own-d0d385c118ad</span>
<span class="token keyword">typedef</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span> uint<span class="token punctuation">;</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">my_shared_ptr</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span><span class="token operator">:</span>
  T <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  uint <span class="token operator">*</span>refCount <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>refCount <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">(</span><span class="token operator">*</span>refCount<span class="token punctuation">)</span><span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>refCount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>
      <span class="token keyword">delete</span> refCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token function">my_shared_ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">refCount</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">my_shared_ptr</span><span class="token punctuation">(</span>T<span class="token operator">*</span> ptr<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">ptr</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">refCount</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">my_shared_ptr</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_shared_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> obj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount <span class="token operator">=</span> obj<span class="token punctuation">.</span>refCount<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span>ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">(</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  my_shared_ptr<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> my_shared_ptr <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> obj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount <span class="token operator">=</span> obj<span class="token punctuation">.</span>refCount<span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span>ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">(</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount<span class="token punctuation">)</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">my_shared_ptr</span><span class="token punctuation">(</span>my_shared_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>refCount<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>refCount <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  my_shared_ptr <span class="token operator">&amp;</span><span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span>my_shared_ptr <span class="token operator">&amp;&amp;</span>dyingObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_cleanup_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>ptr<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token operator">-&gt;</span>refCount <span class="token operator">=</span> dyingObj<span class="token punctuation">.</span>refCount<span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>ptr <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
    dyingObj<span class="token punctuation">.</span>refCount <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">*</span> <span class="token keyword">operator</span><span class="token operator">-&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  uint <span class="token function">get_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span>refCount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  T<span class="token operator">*</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>ptr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function i(u,r){return s(),a("div",null,[c,p(" more "),l])}const v=n(o,[["render",i],["__file","20220916_note.html.vue"]]);export{v as default};
