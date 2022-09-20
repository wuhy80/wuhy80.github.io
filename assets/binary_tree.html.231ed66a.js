import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as l}from"./app.f600bed6.js";const d={},s=l(`<h2 id="c-\u4E8C\u53C9\u641C\u7D22\u6811" tabindex="-1"><a class="header-anchor" href="#c-\u4E8C\u53C9\u641C\u7D22\u6811" aria-hidden="true">#</a> C++\u4E8C\u53C9\u641C\u7D22\u6811</h2><p>\u8FD9\u91CC\u9762\u7684\u6307\u9488\u8981\u4F7F\u7528shared_ptr\u3002 \u5982\u679C\u4F7F\u7528unique_ptr\u4F1A\u7531\u4E8E\u8F6C\u79FB\u4E86\u63A7\u5236\u6743\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>//
// Created by w00534501 on 2022/9/20.
//
#include &lt;iostream&gt;
#include &lt;memory&gt;
#include &lt;vector&gt;

using std::vector;
using std::shared_ptr;
using std::shared_ptr;

template&lt;typename T&gt;
struct Node {
    T val;
    shared_ptr&lt;Node&lt;T&gt;&gt; left{nullptr};
    shared_ptr&lt;Node&lt;T&gt;&gt; right{nullptr};

    Node() : val(-1) {

    }

    explicit Node(T val) : val(val) {

    }
};

template&lt;typename T&gt;
class BinaryTree {
public:
    BinaryTree() : root(nullptr) {

    }

    shared_ptr&lt;Node&lt;T&gt;&gt; find(T data) {
        shared_ptr&lt;Node&lt;T&gt;&gt; p = root;
        while (p != nullptr) {
            if (data &lt; p-&gt;val) {
                p = p-&gt;left;
            } else if (data &gt; p-&gt;val) {
                p = p-&gt;right;
            } else {
                return p;
            }
        }
    }

    void insNode(T data) {
        if (root == nullptr) {
            root = std::make_shared&lt;Node&lt;T&gt;&gt;(data);
            return;
        }

        shared_ptr&lt;Node&lt;T&gt;&gt; p = this-&gt;root;
        while (p != nullptr) {
            if (data &gt; p-&gt;val) {
                if (p-&gt;right == nullptr) {
                    p-&gt;right = std::make_shared&lt;Node&lt;T&gt;&gt;(data);
                    return;
                }

                p = p-&gt;right;
            } else if (data &lt; p-&gt;val) {
                if (p-&gt;left == nullptr) {
                    p-&gt;left = std::make_shared&lt;Node&lt;T&gt;&gt;(data);
                    return;
                }

                p = p-&gt;left;
            } else {
                // \u91CD\u590D\u7684\u6570\u636E\uFF0C\u4E0D\u5141\u8BB8
                std::cout &lt;&lt; &quot;duplicate&quot; &lt;&lt; std::endl;

                return;
            }
        }
    }

    void delNode(T data) {
        auto p = root;
        shared_ptr&lt;Node&lt;T&gt;&gt; pp = nullptr;   // pp record p&#39;s parent

        while (p != nullptr &amp;&amp; p-&gt;val != data) {
            pp = p;
            if (data &gt; p-&gt;val) {
                p = p-&gt;right;
            } else {
                p = p-&gt;left;
            }
        }

        // if p is null, means not found Node of data
        if (p == nullptr) return;

        // the node to delete have two children
        if (p-&gt;left != nullptr &amp;&amp; p-&gt;right != nullptr) {
            shared_ptr&lt;Node&lt;T&gt;&gt; minNode = p-&gt;right;
            shared_ptr&lt;Node&lt;T&gt;&gt; minNodeParent = p;

            while (minNode-&gt;left != nullptr) {
                minNodeParent = minNode;
                minNode = minNode-&gt;left;
            }

            p-&gt;val = minNode-&gt;val;
            p = minNode;
            pp = minNodeParent;
        }

        // if the node to delete have no child or one child
        shared_ptr&lt;Node&lt;T&gt;&gt; child;
        if (p-&gt;left != nullptr) {
            child = p-&gt;left;
        } else if (p-&gt;right != nullptr) {
            child = p-&gt;right;
        } else {
            child = nullptr;
        }

        // the node to delete is root
        if (pp == nullptr) {
            root = child;
        } else if (pp-&gt;left == p) {
            pp-&gt;left = child;
        } else {
            pp-&gt;right = child;
        }
    }

    void printAll() {
        traverse(root);

        std::cout &lt;&lt; std::endl;
    }

    void traverse(shared_ptr&lt;Node&lt;T&gt;&gt; node) {
        if (node == nullptr) {
            return;
        }
        std::cout &lt;&lt; node-&gt;val &lt;&lt; &quot; &quot;;
        traverse(node-&gt;left);
        traverse(node-&gt;right);
    }

private:
    shared_ptr&lt;Node&lt;T&gt;&gt; root;
};


int main() {
    vector&lt;int&gt; arr{5, 8, 2, 1, 10, 12, 12, 13, 13, 23, 98, 21, 24};

    shared_ptr&lt;BinaryTree&lt;int&gt;&gt; tree = std::make_shared&lt;BinaryTree&lt;int&gt;&gt;();
    for (auto v: arr) {
        tree-&gt;insNode(v);
    }

    tree-&gt;delNode(13);
    tree-&gt;insNode(13);

    tree-&gt;printAll();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[s];function r(t,a){return n(),e("div",null,v)}const m=i(d,[["render",r],["__file","binary_tree.html.vue"]]);export{m as default};
