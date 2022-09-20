import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,e as r,a,f as l}from"./app.105fdd2a.js";const s={},d=a("p",null,"LeetCode \u7EC3\u4E60",-1),t=l(`<h1 id="_1619-\u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#_1619-\u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C" aria-hidden="true">#</a> 1619. \u5220\u9664\u67D0\u4E9B\u5143\u7D20\u540E\u7684\u6570\u7EC4\u5747\u503C</h1><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Solution {
public:
    double trimMean(vector&lt;int&gt;&amp; arr) {
        sort(arr.begin(), arr.end());

        int left = arr.size() * 0.05 ;
        int right = arr.size() * 0.95;

        double total = accumulate(arr.begin() + left, arr.begin() + right, 0);
        double newSize = arr.size() * 0.9;
        return total/newSize;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(o,u){return i(),n("div",null,[d,r(" more "),t])}const b=e(s,[["render",c],["__file","20220914_leetcode.html.vue"]]);export{b as default};
