import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,e as o,a as e,b as r,d as i,f as t,r as a}from"./app.5d92962d.js";const c={},v=e("p",null,"\u5F00\u59CB\u7814\u7A76LevelDB\uFF0C\u8FD9\u662FGoogle\u51FA\u54C1\u7684C++ KeyValue\u7C7B\u578B\u7684\u6570\u636E\u5E93",-1),u=e("h1",{id:"leveldb\u7814\u7A76-\u7B2C\u4E00\u5929",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#leveldb\u7814\u7A76-\u7B2C\u4E00\u5929","aria-hidden":"true"},"#"),i(" LevelDB\u7814\u7A76 \u7B2C\u4E00\u5929")],-1),m={href:"https://github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"},b=i("https://github.com/google/leveldb"),_=i(" LevelDB\u7F51\u5740"),g=t(`<p>\u770B\u6E90\u7801\u9996\u5148\u770BREADME\uFF0C\u91CC\u9762\u8BF4\u660E\u4E86\u4EE3\u7801\u7528\u9014\u7684\u4FE1\u606F</p><p>include/leveldb/db.h:</p><blockquote><p>Main interface to the DB: Start here.</p></blockquote><p>include/leveldb/options.h:</p><blockquote><p>Control over the behavior of an entire database, and also control over the behavior of individual reads and writes.</p></blockquote><p>include/leveldb/comparator.h:</p><blockquote><p>Abstraction for user-specified comparison function. If you want just bytewise comparison of keys, you can use the default comparator, but clients can write their own comparator implementations if they want custom ordering (e.g. to handle different character encodings, etc.).</p></blockquote><p>include/leveldb/iterator.h:</p><blockquote><p>Interface for iterating over data. You can get an iterator from a DB object.</p></blockquote><p>include/leveldb/write_batch.h:</p><blockquote><p>Interface for atomically applying multiple updates to a database.</p></blockquote><p>include/leveldb/slice.h:</p><blockquote><p>A simple module for maintaining a pointer and a length into some other byte array.</p></blockquote><p>include/leveldb/status.h:</p><blockquote><p>Status is returned from many of the public interfaces and is used to report success and various kinds of errors.</p></blockquote><p>include/leveldb/env.h:</p><blockquote><p>Abstraction of the OS environment. A posix implementation of this interface is in util/env_posix.cc.</p></blockquote><p>include/leveldb/table.h, include/leveldb/table_builder.h:</p><blockquote><p>Lower-level modules that most clients probably won&#39;t use directly.</p></blockquote><p>\u4EE3\u7801\u4E0B\u8F7D\u4E4B\u540E\u53EA\u8981\u6267\u884C\u4E0B\u9762\u8BED\u53E5\u5C31\u53EF\u4EE5\u7F16\u8BD1<code>cmake.exe&quot; --build D:\\088-GitHubCode\\another\\leveldb\\cmake-build-debug --target c_test -j 9</code></p><p>\u5728Windows\u4E0B\u9762\u4F7F\u7528CMake\u6253\u5370\u5982\u4E0B, \u53EF\u4EE5\u628A\u8FD9\u91CC\u9762\u7684\u6253\u5370\u548CCMakeFile.txt\u8FDB\u884C\u5BF9\u7167</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS D:\\088-GitHubCode\\another\\leveldb&gt; cd build
PS D:\\088-GitHubCode\\another\\leveldb\\build&gt; cmake ..
-- Building for: Visual Studio 16 2019
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.19044.
-- The C compiler identification is MSVC 19.29.30146.0
-- The CXX compiler identification is MSVC 19.29.30146.0
-- Check for working C compiler: d:/Program Files (x86)/Microsoft Visual Studio/
2019/BuildTools/VC/Tools/MSVC/14.29.30133/bin/Hostx64/x64/cl.exe
-- Check for working C compiler: d:/Program Files (x86)/Microsoft Visual Studio/
2019/BuildTools/VC/Tools/MSVC/14.29.30133/bin/Hostx64/x64/cl.exe - works        
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Detecting C compile features
-- Detecting C compile features - done
-- Check for working CXX compiler: d:/Program Files (x86)/Microsoft Visual Studi
o/2019/BuildTools/VC/Tools/MSVC/14.29.30133/bin/Hostx64/x64/cl.exe
-- Check for working CXX compiler: d:/Program Files (x86)/Microsoft Visual Studi
o/2019/BuildTools/VC/Tools/MSVC/14.29.30133/bin/Hostx64/x64/cl.exe - works      
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Looking for unistd.h
-- Looking for unistd.h - not found
-- Looking for crc32c_value in crc32c
-- Looking for crc32c_value in crc32c - not found
-- Looking for snappy_compress in snappy
-- Looking for snappy_compress in snappy - not found
-- Looking for malloc in tcmalloc
-- Looking for malloc in tcmalloc - not found
-- Looking for fdatasync
-- Looking for fdatasync - not found
-- Looking for F_FULLFSYNC
-- Looking for F_FULLFSYNC - not found
-- Looking for O_CLOEXEC
-- Looking for O_CLOEXEC - not found
-- Performing Test HAVE_CLANG_THREAD_SAFETY
-- Performing Test HAVE_CLANG_THREAD_SAFETY - Failed
-- Performing Test LEVELDB_HAVE_NO_MISSING_FIELD_INITIALIZERS
-- Performing Test LEVELDB_HAVE_NO_MISSING_FIELD_INITIALIZERS - Failed
-- Performing Test HAVE_CXX17_HAS_INCLUDE
-- Performing Test HAVE_CXX17_HAS_INCLUDE - Success
-- Looking for pthread.h
-- Looking for pthread.h - not found
-- Found Threads: TRUE  
-- Found Python: C:/Users/w00534501/AppData/Local/Programs/Python/Python38/pytho
n.exe (found version &quot;3.8.1&quot;) found components: Interpreter
-- Found Git: C:/Program Files/Git/cmd/git.exe (found version &quot;2.23.0.windows.1&quot;
)
-- git Version: v1.5.3-7d0d9061
-- Version: 1.5.3
-- Performing Test HAVE_CXX_FLAG_EHS_
-- Performing Test HAVE_CXX_FLAG_EHS_ - Success
-- Performing Test HAVE_CXX_FLAG_EHA_
-- Performing Test HAVE_CXX_FLAG_EHA_ - Success
-- Performing Test HAVE_STD_REGEX
-- Performing Test HAVE_STD_REGEX
-- Performing Test HAVE_STD_REGEX -- success
-- Performing Test HAVE_GNU_POSIX_REGEX
-- Performing Test HAVE_GNU_POSIX_REGEX
-- Performing Test HAVE_GNU_POSIX_REGEX -- failed to compile
-- Performing Test HAVE_POSIX_REGEX
-- Performing Test HAVE_POSIX_REGEX
-- Performing Test HAVE_POSIX_REGEX -- failed to compile
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
-- Performing Test HAVE_STD_REGEX
-- Performing Test HAVE_STD_REGEX
-- Performing Test HAVE_STD_REGEX -- success
-- Performing Test HAVE_GNU_POSIX_REGEX
-- Performing Test HAVE_GNU_POSIX_REGEX
-- Performing Test HAVE_GNU_POSIX_REGEX -- failed to compile
-- Performing Test HAVE_POSIX_REGEX
-- Performing Test HAVE_POSIX_REGEX
-- Performing Test HAVE_POSIX_REGEX -- failed to compile
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
  Using std::regex with exceptions disabled is not fully supported


-- Performing Test HAVE_STEADY_CLOCK
-- Performing Test HAVE_STEADY_CLOCK
-- Performing Test HAVE_STEADY_CLOCK -- success
-- Looking for sqlite3_open in sqlite3
-- Looking for sqlite3_open in sqlite3 - not found
-- Performing Test HAVE_KYOTOCABINET
-- Performing Test HAVE_KYOTOCABINET - Failed
-- Configuring done
-- Generating done
-- Build files have been written to: D:/088-GitHubCode/another/leveldb/build    
PS D:\\088-GitHubCode\\another\\leveldb\\build&gt; cmake ..
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.19044.
-- Performing Test HAVE_STEADY_CLOCK -- success
-- Looking for sqlite3_open in sqlite3
-- Looking for sqlite3_open in sqlite3 - not found
-- Performing Test HAVE_KYOTOCABINET
-- Performing Test HAVE_KYOTOCABINET - Failed
-- Configuring done
-- Generating done
-- Build files have been written to: D:/088-GitHubCode/another/leveldb/build    
PS D:\\088-GitHubCode\\another\\leveldb\\build&gt; cmake ..
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.19044.     
-- git Version: v1.5.3-7d0d9061
-- Version: 1.5.3
-- Performing Test HAVE_STD_REGEX -- success
-- Performing Test HAVE_GNU_POSIX_REGEX -- failed to compile
-- Performing Test HAVE_POSIX_REGEX -- failed to compile
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
  Using std::regex with exceptions disabled is not fully supported


-- Performing Test HAVE_STEADY_CLOCK -- success
-- Configuring done
-- Generating done
-- Build files have been written to: D:/088-GitHubCode/another/leveldb/build    
PS D:\\088-GitHubCode\\another\\leveldb\\build&gt; cmake ..
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.19044.
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
  Using std::regex with exceptions disabled is not fully supported


-- Performing Test HAVE_STEADY_CLOCK -- success
-- Configuring done
-- Generating done
-- Build files have been written to: D:/088-GitHubCode/another/leveldb/build    
PS D:\\088-GitHubCode\\another\\leveldb\\build&gt; cmake ..
-- Selecting Windows SDK version 10.0.19041.0 to target Windows 10.0.19044.     
-- git Version: v1.5.3-7d0d9061
-- Version: 1.5.3
-- Performing Test HAVE_STD_REGEX -- success
-- Performing Test HAVE_GNU_POSIX_REGEX -- failed to compile
-- Performing Test HAVE_POSIX_REGEX -- failed to compile
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
  Using std::regex with exceptions disabled is not fully supported


-- Performing Test HAVE_STEADY_CLOCK -- success
-- git Version: v1.5.3-7d0d9061
-- Version: 1.5.3
-- Performing Test HAVE_STD_REGEX -- success
-- Performing Test HAVE_GNU_POSIX_REGEX -- failed to compile
-- Performing Test HAVE_POSIX_REGEX -- failed to compile
CMake Warning at third_party/benchmark/CMakeLists.txt:282 (message):
  Using std::regex with exceptions disabled is not fully supported


-- Performing Test HAVE_STEADY_CLOCK -- success
-- Configuring done
-- Generating done
-- Build files have been written to: D:/088-GitHubCode/another/leveldb/build    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function f(E,p){const n=a("ExternalLinkIcon");return l(),d("div",null,[v,o(" more "),u,e("p",null,[e("a",m,[b,r(n)]),_]),g])}const T=s(c,[["render",f],["__file","20220915_note.html.vue"]]);export{T as default};
