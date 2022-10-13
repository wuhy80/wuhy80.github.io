import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e,a as t,f as o}from"./app.4324b977.js";const i={},p=t("p",null,"\u4F7F\u7528C++\u5B9E\u73B0\u4E00\u4E2A\u8BB0\u5F55\u8FD0\u884C\u65F6\u957F\u7684\u7C7B",-1),c=o(`<h1 id="_2022-10-12-\u5B9E\u73B0\u4E00\u4E2A\u8BB0\u5F55\u8FD0\u884C\u65F6\u957F\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2022-10-12-\u5B9E\u73B0\u4E00\u4E2A\u8BB0\u5F55\u8FD0\u884C\u65F6\u957F\u7684\u7C7B" aria-hidden="true">#</a> 2022-10-12 \u5B9E\u73B0\u4E00\u4E2A\u8BB0\u5F55\u8FD0\u884C\u65F6\u957F\u7684\u7C7B</h1><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;chrono&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctime&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;thread&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TimeLog</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span><span class="token operator">:</span>
  std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>time_point<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>high_resolution_clock<span class="token operator">&gt;</span> m_begin_<span class="token punctuation">;</span>
  std<span class="token double-colon punctuation">::</span>string m_tag_<span class="token punctuation">;</span>

 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token function">TimeLog</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m_begin_ <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    m_tag_ <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> m_begin_ <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">elapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">auto</span> diff <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>high_resolution_clock<span class="token double-colon punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> m_begin_<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
        std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">duration_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span>milliseconds<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">~</span><span class="token function">TimeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">auto</span> time <span class="token operator">=</span> <span class="token function">elapsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;time{ &quot;</span> <span class="token operator">&lt;&lt;</span> m_tag_ <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; } &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">double</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
              <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; ms&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">auto</span> func <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;i &quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
      std<span class="token double-colon punctuation">::</span>this_thread<span class="token double-colon punctuation">::</span><span class="token function">sleep_for</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>chrono<span class="token double-colon punctuation">::</span><span class="token function">milliseconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token punctuation">{</span>
    TimeLog <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;func&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF0C\u5728\u6700\u540E\u4E00\u884C\u8F93\u51FA\u4E86\u7A0B\u5E8F\u7684\u603B\u8FD0\u884C\u65F6\u957F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  dest git:(master) \u2717 ./test
i 0
i 1
i 2
i 3
i 4
i 5
i 6
i 7
i 8
i 9
i 10
i 11
i 12
i 13
i 14
i 15
i 16
i 17
i 18
i 19
i 20
i 21
i 22
i 23
i 24
i 25
i 26
i 27
i 28
i 29
i 30
i 31
i 32
i 33
i 34
i 35
i 36
i 37
i 38
i 39
i 40
i 41
i 42
i 43
i 44
i 45
i 46
i 47
i 48
i 49
time{ func } 55 ms
\u279C  dest git:(master) \u2717 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(u,d){return s(),a("div",null,[p,e(" more "),c])}const v=n(i,[["render",l],["__file","20221012.html.vue"]]);export{v as default};
