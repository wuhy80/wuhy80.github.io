import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.cb7583f0.js";const t={},e=p(`<h2 id="c-\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1"><a class="header-anchor" href="#c-\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a> C++\u4E8C\u53C9\u641C\u7D22\u6811</h2><p>\u8FD9\u91CC\u9762\u7684\u6307\u9488\u8981\u4F7F\u7528 shared_ptr\u3002 \u5982\u679C\u4F7F\u7528 unique_ptr \u4F1A\u7531\u4E8E\u8F6C\u79FB\u4E86\u63A7\u5236\u6743\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</p><p>\u5728 26~28 \u884C\uFF0C\u6DFB\u52A0\u4E86\u6307\u9488\u56DE\u6536\u7684\u6253\u5370\u3002\u53EF\u4EE5\u5728\u6700\u540E\u770B\u5230\u8FD0\u884C\u7ED3\u679C\uFF0C\u6307\u9488\u5185\u5BB9\u4F1A\u81EA\u52A8\u56DE\u6536\u3002Good</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">//</span>
<span class="token comment">// Created by wuhy80 on 2022/9/20.</span>
<span class="token comment">//</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

<span class="token keyword">using</span> std<span class="token double-colon punctuation">::</span>vector<span class="token punctuation">;</span>
<span class="token keyword">using</span> std<span class="token double-colon punctuation">::</span>shared_ptr<span class="token punctuation">;</span>
<span class="token keyword">using</span> std<span class="token double-colon punctuation">::</span>shared_ptr<span class="token punctuation">;</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">struct</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    T val<span class="token punctuation">;</span>
    shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> left<span class="token punctuation">{</span><span class="token keyword">nullptr</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> right<span class="token punctuation">{</span><span class="token keyword">nullptr</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">val</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">explicit</span> <span class="token function">Node</span><span class="token punctuation">(</span>T val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">val</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token operator">~</span><span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;the node is delete &quot;</span> <span class="token operator">&lt;&lt;</span> val <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">BinaryTree</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">BinaryTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> <span class="token function">find</span><span class="token punctuation">(</span>T data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> p <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> p<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> p<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">insNode</span><span class="token punctuation">(</span>T data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_shared</span><span class="token generic class-name"><span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>right <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    p<span class="token operator">-&gt;</span>right <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_shared</span><span class="token generic class-name"><span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> p<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>left <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    p<span class="token operator">-&gt;</span>left <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_shared</span><span class="token generic class-name"><span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u91CD\u590D\u7684\u6570\u636E\uFF0C\u4E0D\u5141\u8BB8</span>
                std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;duplicate&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">delNode</span><span class="token punctuation">(</span>T data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">auto</span> p <span class="token operator">=</span> root<span class="token punctuation">;</span>
        shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> pp <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>   <span class="token comment">// pp record p&#39;s parent</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">nullptr</span> <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>val <span class="token operator">!=</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pp <span class="token operator">=</span> p<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                p <span class="token operator">=</span> p<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// if p is null, means not found Node of data</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token comment">// the node to delete have two children</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>left <span class="token operator">!=</span> <span class="token keyword">nullptr</span> <span class="token operator">&amp;&amp;</span> p<span class="token operator">-&gt;</span>right <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> minNode <span class="token operator">=</span> p<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
            shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> minNodeParent <span class="token operator">=</span> p<span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span>minNode<span class="token operator">-&gt;</span>left <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                minNodeParent <span class="token operator">=</span> minNode<span class="token punctuation">;</span>
                minNode <span class="token operator">=</span> minNode<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            p<span class="token operator">-&gt;</span>val <span class="token operator">=</span> minNode<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
            p <span class="token operator">=</span> minNode<span class="token punctuation">;</span>
            pp <span class="token operator">=</span> minNodeParent<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// if the node to delete have no child or one child</span>
        shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> child<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>left <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child <span class="token operator">=</span> p<span class="token operator">-&gt;</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-&gt;</span>right <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child <span class="token operator">=</span> p<span class="token operator">-&gt;</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            child <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// the node to delete is root</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pp <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root <span class="token operator">=</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pp<span class="token operator">-&gt;</span>left <span class="token operator">==</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pp<span class="token operator">-&gt;</span>left <span class="token operator">=</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pp<span class="token operator">-&gt;</span>right <span class="token operator">=</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span>shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> node<span class="token operator">-&gt;</span>val <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    shared_ptr<span class="token operator">&lt;</span>Node<span class="token operator">&lt;</span>T<span class="token operator">&gt;&gt;</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> arr<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    shared_ptr<span class="token operator">&lt;</span>BinaryTree<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> tree <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_shared</span><span class="token generic class-name"><span class="token operator">&lt;</span>BinaryTree<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> v<span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tree<span class="token operator">-&gt;</span><span class="token function">insNode</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    tree<span class="token operator">-&gt;</span><span class="token function">delNode</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tree<span class="token operator">-&gt;</span><span class="token function">insNode</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    tree<span class="token operator">-&gt;</span><span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u8BD5\u8F93\u51FA\u5185\u5BB9\uFF0C\u53EF\u4EE5\u770B\u5230\u8C03\u7528 delNode \u7684\u65F6\u5019\u5C31\u4F1A\u81EA\u52A8\u56DE\u6536\u5220\u9664\u7684\u8282\u70B9\u3002\u7136\u540E\u5728\u7A0B\u5E8F\u7ED3\u675F\u7684\u65F6\u5019\u56DE\u6536\u5168\u90E8\u7684\u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/CLionProjects/first_test/cmake-build-debug/binary_tree
duplicate
duplicate
the node is delete 13
5 2 1 8 10 12 23 21 13 98 24
the node is delete 5
the node is delete 8
the node is delete 10
the node is delete 12
the node is delete 23
the node is delete 98
the node is delete 24
the node is delete 21
the node is delete 13
the node is delete 2
the node is delete 1

Process finished with exit code 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function l(c,i){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","binary_tree.html.vue"]]);export{d as default};
