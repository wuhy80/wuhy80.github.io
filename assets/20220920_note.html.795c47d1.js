import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,e as r,a as d,f as a}from"./app.f600bed6.js";const l={},s=d("p",null,"\u65E5\u5E38\u8BB0\u5F55",-1),v=a(`<h1 id="_2022-09-20-\u51E0\u79CD\u6392\u5E8F\u7B97\u6CD5\u7684\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_2022-09-20-\u51E0\u79CD\u6392\u5E8F\u7B97\u6CD5\u7684\u7EC3\u4E60" aria-hidden="true">#</a> 2022-09-20 \u51E0\u79CD\u6392\u5E8F\u7B97\u6CD5\u7684\u7EC3\u4E60</h1><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a> \u5192\u6CE1\u6392\u5E8F</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>void bubbleSort(vector&lt;int&gt; &amp;arr) {
    if (arr.size() &lt;= 1) { return; }

    for (int i = 0; i &lt; arr.size(); i++) {
        bool changed = false;

        for (int j = 0; j &lt; arr.size() - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                changed = true;
            }
        }

        if (!changed) {
            break;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u5165\u6392\u5E8F</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>void insertSort(vector&lt;int&gt; &amp;arr) {
    if (arr.size() &lt;= 1) return;

    for (int i = 1; i &lt; arr.size(); i++) {
        int val = arr[i];
        int j = i - 1;
        for (; j &gt;= 0; j--) {
            if (arr[j] &gt; val) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }

        arr[j + 1] = val;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a> \u9009\u62E9\u6392\u5E8F</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>void selectSort(vector&lt;int&gt; &amp;arr) {
    if (arr.size() &lt;= 1) return;

    for (int i = 0; i &lt; arr.size(); i++) {
        int j = i + 1;
        int val = arr[i];
        int pos = i;
        for (; j &lt; arr.size(); j++) {
            if (arr[j] &lt; val) {
                val = arr[j];
                pos = j;
            }
        }

        std::swap(arr[i], arr[pos]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a> \u5F52\u5E76\u6392\u5E8F</h2><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2><h2 id="\u6876\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6876\u6392\u5E8F" aria-hidden="true">#</a> \u6876\u6392\u5E8F</h2><h2 id="\u8BA1\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570\u6392\u5E8F" aria-hidden="true">#</a> \u8BA1\u6570\u6392\u5E8F</h2><h2 id="\u57FA\u6570\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u6570\u6392\u5E8F" aria-hidden="true">#</a> \u57FA\u6570\u6392\u5E8F</h2><h1 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h1><h2 id="\u67E5\u627E\u5DE6\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u5DE6\u8FB9\u754C" aria-hidden="true">#</a> \u67E5\u627E\u5DE6\u8FB9\u754C</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>int left_bound(const vector&lt;int&gt; &amp;arr, int target) {
    int left = 0;
    int right = static_cast&lt;int&gt;(arr.size());

    while (left &lt;= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] &lt; target) { // \u5982\u679C\u5728\u5DE6\u8FB9
            left = mid + 1;
        } else if (arr[mid] &gt; target) { // \u5982\u679C\u5728\u53F3\u8FB9
            right = mid - 1;
        } else if (arr[mid] == target) {
            if (mid == 0 || arr[mid] != arr[mid - 1]) {
                return mid;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}


</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u627E\u53F3\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u53F3\u8FB9\u754C" aria-hidden="true">#</a> \u67E5\u627E\u53F3\u8FB9\u754C</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>int right_bound(const vector&lt;int&gt; &amp;arr, int target) {
    int left = 0;
    int right = static_cast&lt;int&gt;(arr.size());

    while (left &lt;= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] &lt; target) { // \u5982\u679C\u5728\u5DE6\u8FB9
            left = mid + 1;
        } else if (arr[mid] &gt; target) { // \u5982\u679C\u5728\u53F3\u8FB9
            right = mid - 1;
        } else if (arr[mid] == target) {
            if (mid == arr.size() - 1 || arr[mid] != arr[mid + 1]) {
                return mid;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function c(t,b){return e(),n("div",null,[s,r(" more "),v])}const h=i(l,[["render",c],["__file","20220920_note.html.vue"]]);export{h as default};
