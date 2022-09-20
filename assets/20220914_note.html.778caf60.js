import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as p,e as o,a as n,b as e,d as s,f as i,r as l}from"./app.105fdd2a.js";const r={},u=n("p",null,"\u5B66\u4E60 C++\u7F16\u8BD1\u5668\u7684\u4F18\u5316\u529F\u80FD\uFF0C\u73B0\u4EE3\u7F16\u8BD1\u5668\u7684\u4F18\u5316\u80FD\u529B\u975E\u5E38\u5F3A\u5927\uFF0C\u53EF\u4EE5\u5C06\u8FDE\u7EED\u5185\u5B58\u64CD\u4F5C\u76F4\u63A5\u4F18\u5316\u4E3A\u5355\u6761\u6307\u4EE4\u3002\u867D\u7136\u770B\u7740 C++\u8BED\u53E5\u6709 7\u30018 \u884C\uFF0C\u4F46\u662F\u751F\u6210\u7684\u6C47\u7F16\u53EA\u6709 1 \u884C mov \u6307\u4EE4\uFF0C\u975E\u5E38\u68D2",-1),d=n("h1",{id:"c-\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408","aria-hidden":"true"},"#"),s(" C++\u7F16\u8BD1\u5668\u5982\u4F55\u4F18\u5316\u5185\u5B58\u8054\u5408")],-1),v={href:"https://egghead.io/blog/github-issues-powered-blog",target:"_blank",rel:"noopener noreferrer"},m=s("https://egghead.io/blog/github-issues-powered-blog"),k=n("blockquote",null,[n("p",null,"\u8BB2\u5982\u4F55\u4F7F\u7528 GitHub Issue \u505A\u4E00\u4E2A\u535A\u5BA2\u3002\u4F46\u662F\u505A\u51FA\u6765\u7684\u53EA\u662F\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u8BFB\u53D6 Issue \u7136\u540E\u4F5C\u4E3A\u535A\u5BA2\u5217\u8868\u663E\u793A\uFF0C\u5982\u679C issue \u6570\u91CF\u591A\uFF0C\u6027\u80FD\u4F1A\u4E0B\u964D\u975E\u5E38\u660E\u663E\uFF0C\u4E0D\u9002\u5408\u4F5C\u4E3A\u5E38\u89C4\u535A\u5BA2\u7AD9\u70B9\u3002")],-1),b={href:"https://godbolt.org/z/45S0ID",target:"_blank",rel:"noopener noreferrer"},x=s("https://godbolt.org/z/45S0ID"),f={href:"https://www.intel.com/content/www/us/en/docs/programmable/683349/22-1/memory-access-coalescing-and-load-store.html",target:"_blank",rel:"noopener noreferrer"},_=s("https://www.intel.com/content/www/us/en/docs/programmable/683349/22-1/memory-access-coalescing-and-load-store.html"),h=s(" \u4E00\u7BC7\u4ECB\u7ECD\u5185\u5B58\u8054\u5408\u7684\u6587\u7AE0\uFF0C\u5BF9\u4E8E\u64CD\u4F5C\u8FDE\u7EED\u5185\u5B58\u7684\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668 GCC \u548C CLang \u90FD\u4F1A\u505A\u5408\u5E76\uFF0C\u5408\u5E76\u4E4B\u540E\u53EA\u6709\u4E00\u6761\u7B80\u5355\u7684\u8BED\u53E5"),g=i(`<p>\u4F8B\u5982\u4E0B\u9762\u8FD9\u4E24\u4E2A\u51FD\u6570</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token class-name">uint32_t</span> <span class="token function">DecodeFixed32</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token punctuation">)</span> noexcept <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">uint8_t</span><span class="token operator">*</span> buffer <span class="token operator">=</span> reinterpret_cast<span class="token operator">&lt;</span><span class="token keyword">const</span> <span class="token class-name">uint8_t</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint32_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint32_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint32_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint32_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">uint64_t</span> <span class="token function">DecodeFixed64</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> ptr<span class="token punctuation">)</span> noexcept <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">uint8_t</span><span class="token operator">*</span> buffer <span class="token operator">=</span> reinterpret_cast<span class="token operator">&lt;</span><span class="token keyword">const</span> <span class="token class-name">uint8_t</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">|</span>
          <span class="token punctuation">(</span>static_cast<span class="token operator">&lt;</span><span class="token class-name">uint64_t</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>buffer<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u4E4B\u540E\u7ED3\u679C\u5982\u4E0B</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>DecodeFixed32(char const*):
        mov     eax, DWORD PTR [rdi]
        ret
DecodeFixed64(char const*):
        mov     rax, QWORD PTR [rdi]
        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>DecodeFixed32(char const*):                   # @DecodeFixed32(char const*)
        mov     eax, dword ptr [rdi]
        ret
DecodeFixed64(char const*):                   # @DecodeFixed64(char const*)
        mov     rax, qword ptr [rdi]
        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528 O2 \u7F16\u8BD1\u9009\u578B\u4E4B\u540E\uFF0C\u90A3\u4E48\u957F\u7684\u4EE3\u7801\u90FD\u7ED9\u4F18\u5316\u6210\u4E00\u6761\u7B80\u5355\u7684\u6C47\u7F16\u6307\u4EE4\u3002</p><p>\u5982\u679C\u4E0D\u4F7F\u7528 O2 \u7F16\u8BD1\uFF0C\u90A3\u4E48\u7F16\u8BD1\u51FA\u6765\u7684\u7ED3\u679C\u5C31\u662F\u539F\u6837\u7FFB\u8BD1\uFF0C\u6027\u80FD\u5DEE\u8DDD\u4F1A\u975E\u5E38\u5927</p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>buffer$ = 0
ptr$ = 32
unsigned int DecodeFixed32(char const *) PROC                      ; DecodeFixed32
$LN3:
        mov     QWORD PTR [rsp+8], rcx
        sub     rsp, 24
        mov     rax, QWORD PTR ptr$[rsp]
        mov     QWORD PTR buffer$[rsp], rax
        mov     eax, 1
        imul    rax, rax, 0
        mov     rcx, QWORD PTR buffer$[rsp]
        movzx   eax, BYTE PTR [rcx+rax]
        mov     ecx, 1
        imul    rcx, rcx, 1
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     ecx, 8
        or      eax, ecx
        mov     ecx, 1
        imul    rcx, rcx, 2
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     ecx, 16
        or      eax, ecx
        mov     ecx, 1
        imul    rcx, rcx, 3
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     ecx, 24
        or      eax, ecx
        add     rsp, 24
        ret     0
unsigned int DecodeFixed32(char const *) ENDP                      ; DecodeFixed32

buffer$ = 0
ptr$ = 32
unsigned __int64 DecodeFixed64(char const *) PROC               ; DecodeFixed64
$LN3:
        mov     QWORD PTR [rsp+8], rcx
        sub     rsp, 24
        mov     rax, QWORD PTR ptr$[rsp]
        mov     QWORD PTR buffer$[rsp], rax
        mov     eax, 1
        imul    rax, rax, 0
        mov     rcx, QWORD PTR buffer$[rsp]
        movzx   eax, BYTE PTR [rcx+rax]
        mov     ecx, 1
        imul    rcx, rcx, 1
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 8
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 2
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 16
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 3
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 24
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 4
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 32                             ; 00000020H
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 5
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 40                             ; 00000028H
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 6
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 48                             ; 00000030H
        or      rax, rcx
        mov     ecx, 1
        imul    rcx, rcx, 7
        mov     rdx, QWORD PTR buffer$[rsp]
        movzx   ecx, BYTE PTR [rdx+rcx]
        shl     rcx, 56                             ; 00000038H
        or      rax, rcx
        add     rsp, 24
        ret     0
unsigned __int64 DecodeFixed64(char const *) ENDP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function R(T,D){const a=l("ExternalLinkIcon");return c(),p("div",null,[u,o(" more "),d,n("p",null,[n("a",v,[m,e(a)])]),k,n("p",null,[n("a",b,[x,e(a)]),n("a",f,[_,e(a)]),h]),g])}const O=t(r,[["render",R],["__file","20220914_note.html.vue"]]);export{O as default};
