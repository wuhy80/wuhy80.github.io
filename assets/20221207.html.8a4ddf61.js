import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as l,e as d,a as n,b as r,f as t,d as e,r as c}from"./app.952c8734.js";const o={},v=n("p",null,"Windows\u4E0B\u9762CreateThread\u53C2\u6570\u4F20\u9012\u6CE8\u610F\u4E8B\u9879",-1),u=t(`<h1 id="_2022-12-07" tabindex="-1"><a class="header-anchor" href="#_2022-12-07" aria-hidden="true">#</a> 2022-12-07</h1><p>\u4F20\u5165\u5230CreateThread\u91CC\u9762\u7684\u5982\u679C\u662F\u4F7F\u7528\u5FAA\u73AF\u53D8\u91CF\uFF0C\u5C31\u4F1A\u51FA\u73B0\u4F20\u5165\u7684\u503C\u88AB\u6539\u53D8\u7684\u95EE\u9898</p><p><img src="https://user-images.githubusercontent.com/384918/206198456-9f090a5d-6b9e-4921-8cff-da5fb2ca9885.png" alt="Image" loading="lazy"></p><p>\u4F7F\u7528\u4E0B\u9762\u7684\u6D4B\u8BD5\u811A\u672C\uFF0C\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;windows.h&gt;


DWORD WINAPI MyThreadFunction(LPVOID lpParam)
{
  int res = *((int*)lpParam);

  printf(&quot; %d &quot;, res);

  return 0;
}

int main()
{
  printf(&quot;\u4F7F\u7528for\u5FAA\u73AF\u5C40\u90E8\u53D8\u91CF:&quot;);
  for (int i = 0; i &lt; 10; i++) {
    CreateThread(NULL, 0, MyThreadFunction, &amp;i, 0, NULL);
  }
  
  Sleep(1000);
  printf(&quot;\\n&quot;);

  printf(&quot;\u4F7F\u7528for\u5185\u90E8\u5C40\u90E8\u53D8\u91CF:&quot;);
  for (int i = 0; i &lt; 10; i++) {
    int inner = i;
    CreateThread(NULL, 0, MyThreadFunction, &amp;inner, 0, NULL);
  }

  Sleep(1000);
  printf(&quot;\\n&quot;);

  printf(&quot;\u4F7F\u7528new\u51FA\u6765\u7684\u65B0\u53D8\u91CF:&quot;);
  for (int i = 0; i &lt; 10; i++) {
    int *inner = new int(i);
    CreateThread(NULL, 0, MyThreadFunction, inner, 0, NULL);
  }

  Sleep(1000);
  printf(&quot;\\n&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m=e("\u6B64\u95EE\u9898\u548C "),b={href:"https://stackoverflow.com/questions/13021015/passing-a-parameter-to-threads-in-a-loop",target:"_blank",rel:"noopener noreferrer"},p=e("https://stackoverflow.com/questions/13021015/passing-a-parameter-to-threads-in-a-loop"),h=e(" \u662F\u4E00\u6837\u7684"),f=n("p",null,[n("img",{src:"https://user-images.githubusercontent.com/384918/206198928-0ea2f4b8-9fc0-4a9f-af70-3acd6c82c242.png",alt:"image",loading:"lazy"})],-1),_=n("p",null,"\u6700\u7EC8\u89E3\u51B3\u65B9\u6848",-1),g=n("p",null,[n("img",{src:"https://user-images.githubusercontent.com/384918/206199094-fb7ab352-d8bc-4958-b387-f2630c0048d8.png",alt:"image",loading:"lazy"})],-1);function q(L,N){const i=c("ExternalLinkIcon");return a(),l("div",null,[v,d(" more "),u,n("p",null,[m,n("a",b,[p,r(i)]),h]),f,_,g])}const k=s(o,[["render",q],["__file","20221207.html.vue"]]);export{k as default};
