import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,e as r,a as n,b as a,d as s,f as i,r as t}from"./app.22c3f7c5.js";const u={},d=n("h1",{id:"_2022-09-25",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2022-09-25","aria-hidden":"true"},"#"),s(" 2022-09-25")],-1),k=n("h2",{id:"http-\u5B89\u5168\u901A\u4FE1\u673A\u5236",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http-\u5B89\u5168\u901A\u4FE1\u673A\u5236","aria-hidden":"true"},"#"),s(" HTTP \u5B89\u5168\u901A\u4FE1\u673A\u5236")],-1),m=s("\u4FE1\u606F\u6765\u6E90\u300A\u56FE\u89E3 HTTP\u300B7.2.5\uFF0C\u5173\u4E8E\u5982\u4F55\u7ED8\u56FE\u7684\u53C2\u8003"),v={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},h=s("Mermaid sequence"),b=i(`<h2 id="unique-ptr-\u548C-shared-ptr" tabindex="-1"><a class="header-anchor" href="#unique-ptr-\u548C-shared-ptr" aria-hidden="true">#</a> unique_ptr \u548C shared_ptr</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>
<span class="token comment">// unique_ptr</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">class</span> <span class="token class-name">Deleter</span> <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span>default_delete<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> <span class="token keyword">class</span> <span class="token class-name">unique_ptr</span><span class="token punctuation">;</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token keyword">class</span> <span class="token class-name">Deleter</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">unique_ptr</span><span class="token operator">&lt;</span>T<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Deleter<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// shared_ptr</span>
<span class="token keyword">template</span><span class="token operator">&lt;</span> <span class="token keyword">class</span> <span class="token class-name">T</span> <span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">shared_ptr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C++\u91CC\u9762\u4F7F\u7528\u667A\u80FD\u6307\u9488\u5C01\u88C5 fstream\uFF0C\u4F46\u662F\u611F\u89C9\u4F7F\u7528\u8D77\u6765\u4E0D\u65B9\u4FBF\uFF0C\u4E0D\u5982\u76F4\u63A5\u4EC0\u4E48\u7684\u4F7F\u7528\u8D77\u6765\u65B9\u4FBF\u3002\u4F7F\u7528\u667A\u80FD\u6307\u9488\u5C01\u88C5\u7684\u8BDD&gt;&gt;, &lt;&lt; \u8FD9\u4E9B\u6307\u9488\u5C31\u4E0D\u80FD\u4F7F\u7528.</p><p>** \u6709\u4E00\u4E2A\u8981\u6CE8\u610F\u7684 ofstream \u672C\u8EAB\u5C31\u4F1A\u5728\u8D85\u51FA\u4F5C\u7528\u57DF\u7684\u65F6\u5019\u81EA\u52A8\u5173\u95ED **</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>    std<span class="token double-colon punctuation">::</span>string filename <span class="token operator">=</span> <span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> <span class="token operator">*</span>inFile<span class="token operator">=</span> <span class="token keyword">new</span> std<span class="token double-colon punctuation">::</span><span class="token function">fstream</span> <span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> pFunction <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">auto</span> ptr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ptr<span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> ptr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>unique_ptr<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>fstream<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>fstream<span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&gt;&gt;</span> <span class="token function">fs</span><span class="token punctuation">(</span>inFile<span class="token punctuation">,</span> pFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token operator">-&gt;</span><span class="token function">is_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;load file &quot;</span> <span class="token operator">&lt;&lt;</span> filename <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;failed&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token function">system</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u4EF6" aria-hidden="true">#</a> \u53C2\u8003\u6587\u4EF6</h2>`,6),_={href:"https://leimao.github.io/blog/CPP-Smart-Pointer-Custom-Deleter/",target:"_blank",rel:"noopener noreferrer"},f=s("https://leimao.github.io/blog/CPP-Smart-Pointer-Custom-Deleter/");function g(A,E){const e=t("ExternalLinkIcon"),o=t("Mermaid");return c(),l("div",null,[r(" more "),d,k,n("p",null,[m,n("a",v,[h,a(e)])]),a(o,{id:"mermaid-382ee145",code:"sequenceDiagram%0A%20%20autonumber%0A%20%20actor%20client%0A%20%20actor%20server%0A%20%20client%20-%3E%3E%20server%3A%20Handshake%3A%20ClientHello%0A%20%20server%20-%3E%3E%20client%3A%20Handshake%3A%20ServerHello%0A%20%20server%20-%3E%3E%20client%3A%20Handshake%3A%20Certificate%0A%20%20server%20-%3E%3E%20client%3A%20Handshake%3A%20ServerHelloDone%0A%20%20client%20-%3E%3E%20server%3A%20Handshake%3A%20ClientKeyExchange%0A%20%20client%20-%3E%3E%20server%3A%20ChangeClipherSpec%0A%20%20client%20-%3E%3E%20server%3A%20Handshake%3A%20finished%0A%20%20server%20-%3E%3E%20client%3A%20ChangeClipherSpec%0A%20%20server%20-%3E%3E%20client%3A%20Handshake%3A%20finished%0A%20%20client%20-%3E%3E%20server%3A%20Application%20Data(HTTP)%0A%20%20server%20-%3E%3E%20client%3A%20Application%20Data(HTTP)%0A%20%20client%20-%3E%3E%20server%3A%20Alert%3A%20warning%2C%20close%20notify%0A"}),b,n("p",null,[n("a",_,[f,a(e)])])])}const q=p(u,[["render",g],["__file","20220925_note.html.vue"]]);export{q as default};