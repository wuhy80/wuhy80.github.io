import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,e as t,a as s,b as o,d as n,f as p,r as c}from"./app.ca6f5a70.js";const r={},u=s("p",null,"\u914D\u7F6EZSH\u5DE5\u4F5C\u73AF\u5883",-1),d=s("h1",{id:"_2022-12-02",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2022-12-02","aria-hidden":"true"},"#"),n(" 2022-12-02")],-1),m={href:"https://github.com/zplug/zplug",target:"_blank",rel:"noopener noreferrer"},v=n("https://github.com/zplug/zplug"),g=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">ZPLUG_HOME</span><span class="token operator">=</span>/path/to/.zplug
$ <span class="token function">git</span> clone https://github.com/zplug/zplug <span class="token variable">$ZPLUG_HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5zplug\u63D2\u4EF6\uFF0C\u7136\u540E\u5728.zshrc\u6587\u4EF6\u91CC\u9762\u914D\u7F6E\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># If you come from bash you might have to change your $PATH.</span>
<span class="token comment"># export PATH=$HOME/bin:/usr/local/bin:$PATH</span>
<span class="token builtin class-name">source</span> ~/.zplug/init.zsh

<span class="token comment"># History config</span>
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">10000</span>
<span class="token assign-left variable">SAVEHIST</span><span class="token operator">=</span><span class="token number">10000</span>
<span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=~</span>/.zsh_history

<span class="token comment"># zplug plugins</span>
zplug <span class="token string">&quot;romkatv/powerlevel10k&quot;</span>, as:theme, depth:1
zplug <span class="token string">&#39;zplug/zplug&#39;</span>, hook-build:<span class="token string">&#39;zplug --self-manage&#39;</span>
zplug <span class="token string">&quot;zsh-users/zsh-completions&quot;</span>
zplug <span class="token string">&quot;zsh-users/zsh-history-substring-search&quot;</span>
zplug <span class="token string">&quot;zsh-users/zsh-autosuggestions&quot;</span>
zplug <span class="token string">&quot;zdharma/fast-syntax-highlighting&quot;</span>
zplug <span class="token string">&quot;zpm-zsh/ls&quot;</span>
zplug <span class="token string">&quot;plugins/docker&quot;</span>, from:oh-my-zsh
zplug <span class="token string">&quot;plugins/composer&quot;</span>, from:oh-my-zsh
zplug <span class="token string">&quot;plugins/extract&quot;</span>, from:oh-my-zsh
zplug <span class="token string">&quot;lib/completion&quot;</span>, from:oh-my-zsh
zplug <span class="token string">&quot;plugins/sudo&quot;</span>, from:oh-my-zsh
zplug <span class="token string">&quot;b4b4r07/enhancd&quot;</span>, use:init.sh

<span class="token comment"># Install plugins if there are plugins that have not been installed</span>
<span class="token keyword">if</span> <span class="token operator">!</span> zplug check --verbose<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;Install? [y/N]: &quot;</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">read</span> -q<span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> zplug <span class="token function">install</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># Then, source plugins and add commands to $PATH</span>
zplug load
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(b,k){const a=c("ExternalLinkIcon");return l(),i("div",null,[u,t(" more "),d,s("p",null,[s("a",m,[v,o(a)])]),g])}const _=e(r,[["render",h],["__file","20221202.html.vue"]]);export{_ as default};
