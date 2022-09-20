import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,e as o,a as s,b as e,d as n,f as l,r as c}from"./app.8903e014.js";const i={},k=s("p",null,"\u5B66\u4E60 C++\u7F16\u8BD1\u5668\u7684\u4F18\u5316\u529F\u80FD\uFF0C\u73B0\u4EE3\u7F16\u8BD1\u5668\u7684\u4F18\u5316\u80FD\u529B\u975E\u5E38\u5F3A\u5927\uFF0C\u53EF\u4EE5\u5C06\u8FDE\u7EED\u5185\u5B58\u64CD\u4F5C\u76F4\u63A5\u4F18\u5316\u4E3A\u5355\u6761\u6307\u4EE4\u3002\u867D\u7136\u770B\u7740 C++\u8BED\u53E5\u6709 7\u30018 \u884C\uFF0C\u4F46\u662F\u751F\u6210\u7684\u6C47\u7F16\u53EA\u6709 1 \u884C mov \u6307\u4EE4\uFF0C\u975E\u5E38\u68D2",-1),u=s("h1",{id:"c-\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408","aria-hidden":"true"},"#"),n(" C++\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408")],-1),v={href:"https://egghead.io/blog/github-issues-powered-blog",target:"_blank",rel:"noopener noreferrer"},d=n("https://egghead.io/blog/github-issues-powered-blog"),b=s("blockquote",null,[s("p",null,"\u8BB2\u5982\u4F55\u4F7F\u7528 GitHub Issue \u505A\u4E00\u4E2A\u535A\u5BA2\u3002\u4F46\u662F\u505A\u51FA\u6765\u7684\u53EA\u662F\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u8BFB\u53D6 Issue \u7136\u540E\u4F5C\u4E3A\u535A\u5BA2\u5217\u8868\u663E\u793A\uFF0C\u5982\u679C issue \u6570\u91CF\u591A\uFF0C\u6027\u80FD\u4F1A\u4E0B\u964D\u975E\u5E38\u660E\u663E\uFF0C\u4E0D\u9002\u5408\u4F5C\u4E3A\u5E38\u89C4\u535A\u5BA2\u7AD9\u70B9\u3002")],-1),m={href:"https://godbolt.org/z/45S0ID",target:"_blank",rel:"noopener noreferrer"},g=n("https://godbolt.org/z/45S0ID"),x={href:"https://www.intel.com/content/www/us/en/docs/programmable/683349/22-1/memory-access-coalescing-and-load-store.html",target:"_blank",rel:"noopener noreferrer"},f=n("https://www.intel.com/content/www/us/en/docs/programmable/683349/22-1/memory-access-coalescing-and-load-store.html"),_=n(" \u4E00\u7BC7\u4ECB\u7ECD\u5185\u5B58\u8054\u5408\u7684\u6587\u7AE0\uFF0C\u5BF9\u4E8E\u64CD\u4F5C\u8FDE\u7EED\u5185\u5B58\u7684\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668 GCC \u548C CLang \u90FD\u4F1A\u505A\u5408\u5E76\uFF0C\u5408\u5E76\u4E4B\u540E\u53EA\u6709\u4E00\u6761\u7B80\u5355\u7684\u8BED\u53E5"),h=l(`<p>\u4F8B\u5982\u4E0B\u9762\u8FD9\u4E24\u4E2A\u51FD\u6570</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">uint32_t</span> <span class="token function">DecodeFixed32</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token punctuation">)</span> <span class="token keyword">noexcept</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token keyword">uint8_t</span><span class="token operator">*</span> buffer <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reinterpret_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">const</span> <span class="token keyword">uint8_t</span><span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint32_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">uint64_t</span> <span class="token function">DecodeFixed64</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token punctuation">)</span> <span class="token keyword">noexcept</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token keyword">uint8_t</span><span class="token operator">*</span> buffer <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reinterpret_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">const</span> <span class="token keyword">uint8_t</span><span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span><span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">uint64_t</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u4E4B\u540E\u7ED3\u679C\u5982\u4E0B</p><div class="language-nasm ext-nasm line-numbers-mode"><pre class="language-nasm"><code>DecodeFixed32(char const<span class="token operator">*</span>):
        mov     <span class="token register variable">eax</span>, DWORD PTR <span class="token operator">[</span><span class="token register variable">rdi</span><span class="token operator">]</span>
        ret
DecodeFixed64(char const<span class="token operator">*</span>):
        mov     <span class="token register variable">rax</span>, QWORD PTR <span class="token operator">[</span><span class="token register variable">rdi</span><span class="token operator">]</span>
        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nasm ext-nasm line-numbers-mode"><pre class="language-nasm"><code>DecodeFixed32(char const<span class="token operator">*</span>):                   # @DecodeFixed32(char const<span class="token operator">*</span>)
        mov     <span class="token register variable">eax</span>, dword ptr <span class="token operator">[</span><span class="token register variable">rdi</span><span class="token operator">]</span>
        ret
DecodeFixed64(char const<span class="token operator">*</span>):                   # @DecodeFixed64(char const<span class="token operator">*</span>)
        mov     <span class="token register variable">rax</span>, qword ptr <span class="token operator">[</span><span class="token register variable">rdi</span><span class="token operator">]</span>
        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528 O2 \u7F16\u8BD1\u9009\u578B\u4E4B\u540E\uFF0C\u90A3\u4E48\u957F\u7684\u4EE3\u7801\u90FD\u7ED9\u4F18\u5316\u6210\u4E00\u6761\u7B80\u5355\u7684\u6C47\u7F16\u6307\u4EE4\u3002</p><p>\u5982\u679C\u4E0D\u4F7F\u7528 O2 \u7F16\u8BD1\uFF0C\u90A3\u4E48\u7F16\u8BD1\u51FA\u6765\u7684\u7ED3\u679C\u5C31\u662F\u539F\u6837\u7FFB\u8BD1\uFF0C\u6027\u80FD\u5DEE\u8DDD\u4F1A\u975E\u5E38\u5927</p><div class="language-nasm ext-nasm line-numbers-mode"><pre class="language-nasm"><code>buffer<span class="token operator">$</span> <span class="token operator">=</span> <span class="token number">0</span>
ptr<span class="token operator">$</span> <span class="token operator">=</span> <span class="token number">32</span>
unsigned int DecodeFixed32(char const <span class="token operator">*</span>) PROC                      <span class="token comment">; DecodeFixed32</span>
<span class="token label function">$LN3:</span>
        mov     QWORD PTR <span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">+</span><span class="token number">8</span><span class="token operator">]</span>, <span class="token register variable">rcx</span>
        sub     <span class="token register variable">rsp</span>, <span class="token number">24</span>
        mov     <span class="token register variable">rax</span>, QWORD PTR ptr<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        mov     QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>, <span class="token register variable">rax</span>
        mov     <span class="token register variable">eax</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rax</span>, <span class="token register variable">rax</span>, <span class="token number">0</span>
        mov     <span class="token register variable">rcx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">eax</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rcx</span><span class="token operator">+</span><span class="token register variable">rax</span><span class="token operator">]</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">1</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">ecx</span>, <span class="token number">8</span>
        or      <span class="token register variable">eax</span>, <span class="token register variable">ecx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">2</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">ecx</span>, <span class="token number">16</span>
        or      <span class="token register variable">eax</span>, <span class="token register variable">ecx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">3</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">ecx</span>, <span class="token number">24</span>
        or      <span class="token register variable">eax</span>, <span class="token register variable">ecx</span>
        add     <span class="token register variable">rsp</span>, <span class="token number">24</span>
        ret     <span class="token number">0</span>
unsigned int DecodeFixed32(char const <span class="token operator">*</span>) ENDP                      <span class="token comment">; DecodeFixed32</span>

buffer<span class="token operator">$</span> <span class="token operator">=</span> <span class="token number">0</span>
ptr<span class="token operator">$</span> <span class="token operator">=</span> <span class="token number">32</span>
unsigned __int64 DecodeFixed64(char const <span class="token operator">*</span>) PROC               <span class="token comment">; DecodeFixed64</span>
<span class="token label function">$LN3:</span>
        mov     QWORD PTR <span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">+</span><span class="token number">8</span><span class="token operator">]</span>, <span class="token register variable">rcx</span>
        sub     <span class="token register variable">rsp</span>, <span class="token number">24</span>
        mov     <span class="token register variable">rax</span>, QWORD PTR ptr<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        mov     QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>, <span class="token register variable">rax</span>
        mov     <span class="token register variable">eax</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rax</span>, <span class="token register variable">rax</span>, <span class="token number">0</span>
        mov     <span class="token register variable">rcx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">eax</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rcx</span><span class="token operator">+</span><span class="token register variable">rax</span><span class="token operator">]</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">1</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">8</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">2</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">16</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">3</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">24</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">4</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">32</span>                             <span class="token comment">; 00000020H</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">5</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">40</span>                             <span class="token comment">; 00000028H</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">6</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">48</span>                             <span class="token comment">; 00000030H</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        mov     <span class="token register variable">ecx</span>, <span class="token number">1</span>
        imul    <span class="token register variable">rcx</span>, <span class="token register variable">rcx</span>, <span class="token number">7</span>
        mov     <span class="token register variable">rdx</span>, QWORD PTR buffer<span class="token operator">$</span><span class="token operator">[</span><span class="token register variable">rsp</span><span class="token operator">]</span>
        movzx   <span class="token register variable">ecx</span>, BYTE PTR <span class="token operator">[</span><span class="token register variable">rdx</span><span class="token operator">+</span><span class="token register variable">rcx</span><span class="token operator">]</span>
        shl     <span class="token register variable">rcx</span>, <span class="token number">56</span>                             <span class="token comment">; 00000038H</span>
        or      <span class="token register variable">rax</span>, <span class="token register variable">rcx</span>
        add     <span class="token register variable">rsp</span>, <span class="token number">24</span>
        ret     <span class="token number">0</span>
unsigned __int64 DecodeFixed64(char const <span class="token operator">*</span>) ENDP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function R(w,T){const a=c("ExternalLinkIcon");return t(),r("div",null,[k,o(" more "),u,s("p",null,[s("a",v,[d,e(a)])]),b,s("p",null,[s("a",m,[g,e(a)]),s("a",x,[f,e(a)]),_]),h])}const y=p(i,[["render",R],["__file","20220914_note.html.vue"]]);export{y as default};
