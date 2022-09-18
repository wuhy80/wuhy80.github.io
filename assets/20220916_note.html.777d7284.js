import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,e as d,a as l,f as s}from"./app.c5d809e7.js";const r={},v=l("p",null,"\u5982\u4F55\u81EA\u5DF1\u5B9E\u73B0C++ unique_ptr\u548Cshared_ptr",-1),a=s(`<h1 id="\u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u667A\u80FD\u6307\u9488</h1><h2 id="unique-ptr\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#unique-ptr\u5B9E\u73B0" aria-hidden="true">#</a> Unique_ptr\u5B9E\u73B0</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;cstdlib&gt;
#include &lt;cassert&gt;

template&lt;class  T&gt;
class my_unique_ptr {
 private:
  T *ptr = nullptr;
 public:
  my_unique_ptr(): ptr(nullptr) {

  }

  my_unique_ptr(T *ptr) : ptr(ptr) {

  }

  my_unique_ptr(const my_unique_ptr &amp;obj) = delete;
  my_unique_ptr&amp; operator=(const my_unique_ptr &amp;obj) = delete;

  my_unique_ptr(my_unique_ptr &amp;&amp;dyingObj)  noexcept {
    this-&gt;ptr = dyingObj.ptr;
    dyingObj.ptr = nullptr;
  }

  void operator=(my_unique_ptr &amp;&amp;dyingObj)  noexcept {
    _cleanup_();

    this-&gt;ptr = dyingObj.ptr;
    dyingObj.ptr = nullptr;
  }

  T* operator-&gt;() {
    return this-&gt;ptr;
  }

  T&amp; operator*() {
    return *(this-&gt;ptr);
  }

  ~my_unique_ptr() {
    _cleanup_();
  }

 private:
  void _cleanup_() {
    if(ptr != nullptr) {
      delete ptr;
    }
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unique-ptr\u5B9E\u73B0\u6570\u7EC4\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#unique-ptr\u5B9E\u73B0\u6570\u7EC4\u6307\u9488" aria-hidden="true">#</a> Unique_ptr\u5B9E\u73B0\u6570\u7EC4\u6307\u9488</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>template&lt;class T&gt;
class my_unique_ptr&lt;T[]&gt; {
 private:
  T* ptr = nullptr;
 public:
  my_unique_ptr() : ptr(nullptr) {}
  my_unique_ptr(T *ptr) : ptr(ptr) {}

  my_unique_ptr(const my_unique_ptr &amp;obj) = delete;
  my_unique_ptr&amp; operator=(const my_unique_ptr &amp;obj) = delete;

  my_unique_ptr(my_unique_ptr &amp;&amp;dyingObj) {
    _cleanup_();

    this-&gt;ptr = dyingObj.ptr;
    dyingObj.ptr = nullptr;
  }

  void operator=(my_unique_ptr &amp;&amp;dyingObj) {
    _cleanup_();

    this-&gt;ptr = dyingObj.ptr;
    dyingObj.ptr = nullptr;
  }

  T* operator-&gt;() {
    return this-&gt;ptr;
  }

  T&amp; operator[](int index) {
    if(index &lt; 0) {
      assert(index &gt;= 0);
    }

    return this-&gt;ptr[index];
  }

  ~my_unique_ptr() {
    _cleanup_();
  }

 private:
  void _cleanup_() {

      delete[] ptr;

  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shared-ptr\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#shared-ptr\u5B9E\u73B0" aria-hidden="true">#</a> Shared_ptr\u5B9E\u73B0</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>// \u4EE3\u7801\u5B9E\u73B0\u6765\u6E90\u4E8E https://medium.com/analytics-vidhya/c-shared-ptr-and-how-to-write-your-own-d0d385c118ad
typedef unsigned int uint;

template&lt;class T&gt;
class my_shared_ptr {
 private:
  T *ptr = nullptr;
  uint *refCount = nullptr;

  void _cleanup_() {
    if(refCount == nullptr) {
      ptr = nullptr;
      return ;
    }

    (*refCount)--;
    if(*refCount &lt;= 0) {
      delete ptr;
      delete refCount;
    }
  }

 public:
  my_shared_ptr():ptr(nullptr), refCount(new uint(0)) {}
  my_shared_ptr(T* ptr): ptr(ptr), refCount(new uint(1)) {}

  my_shared_ptr(const my_shared_ptr &amp;obj) {
    this-&gt;ptr = obj.ptr;
    this-&gt;refCount = obj.refCount;
    if(nullptr != obj.ptr) {
      (*this-&gt;refCount)++;
    }
  }

  my_shared_ptr&amp; operator=(const my_shared_ptr &amp;obj) {
    _cleanup_();

    this-&gt;ptr = obj.ptr;
    this-&gt;refCount = obj.refCount;

    if(nullptr != obj.ptr) {
      (*this-&gt;refCount)++;
    }
  }

  my_shared_ptr(my_shared_ptr &amp;&amp;dyingObj) {
    this-&gt;ptr = dyingObj.ptr;
    this-&gt;refCount = dyingObj.refCount;
    dyingObj.ptr = nullptr;
    dyingObj.refCount = nullptr;
  }

  my_shared_ptr &amp;operator=(my_shared_ptr &amp;&amp;dyingObj) {
    _cleanup_();

    this-&gt;ptr = dyingObj.ptr;
    this-&gt;refCount = dyingObj.refCount;
    dyingObj.ptr = nullptr;
    dyingObj.refCount = nullptr;
  }

  T* operator-&gt;() const {
    return this-&gt;ptr;
  }

  T&amp; operator*() const {
    return *(this-&gt;ptr);
  }

  uint get_count() const {
    return *refCount;
  }

  T* get() const {
    return this-&gt;ptr;
  }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function u(t,c){return i(),e("div",null,[v,d(" more "),a])}const p=n(r,[["render",u],["__file","20220916_note.html.vue"]]);export{p as default};
