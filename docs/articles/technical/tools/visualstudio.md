# Visual Studio 插件
## 如何配置C++环境
原始信息来源于 https://zhuanlan.zhihu.com/p/566365173 

### 需要安装的软件列表(Linux运行环境)
* clang：我们使用的编译器，拥有更加人性化的报错
* clangd：一个C/C++的Language Sever后端，薄纱C/C++ Tools
* lldb：调试工具，一家人就要整整齐齐
* cmake：构造工具，因为clangd需要读取compile_commands.json才能提供服务

### 需要安装的Visual Studio插件列表
![image](https://user-images.githubusercontent.com/384918/196037008-6dcbc17a-5a0f-4299-9a08-26ed1110a8df.png)

只需要这四个就可以了。其中CodeLLDB需要下载一个文件，几乎是一定会下载失败的。

![image](https://user-images.githubusercontent.com/384918/196037108-487c9538-4634-48ea-bf31-19e96392daab.png)

超时之后点击弹出来的消息，手动下载，然后再手动进行安装。

![image](https://user-images.githubusercontent.com/384918/196037133-a5c7e92b-fe26-43e5-bc83-6d91b664be6c.png)

在弹出菜单里选择你下载的那个（后缀为.vsix）即可。注意在WSL环境下你可以从/mnt文件夹下访问Windows文件，假如你直接下载在系统自带的下载文件夹里，那就是在`/mnt/c/Users/<Username>/Downloads/`里。装好了之后会弹出重载VSCode的窗口。

![image](https://user-images.githubusercontent.com/384918/196037155-3199b364-b902-4086-9fae-026e20ea1940.png)

### 开始使用

随便找一个空文件夹打开，然后Ctrl+Shift+P或者你自定义的快捷键打开下拉菜单，搜索cmake，选择Quick Start：

![image](https://user-images.githubusercontent.com/384918/196037181-3a8701e0-248e-4aa7-81f0-22e6bb5db522.png)

给你的项目起个名字，类型选择Executable，第一次打开cmake可能还会问你一些编译套件的选择问题，选择clang即可，记得看清楚后缀免得用错。


![image](https://user-images.githubusercontent.com/384918/196037196-27c12493-47c8-4cef-9cea-7ab5bff85939.png)

打开自动生成的main.cpp，发现clangd已经在运行了，就是这么简单。

![image](https://user-images.githubusercontent.com/384918/196037243-429260df-b500-4699-9457-75127100b33c.png)


### 运行与调试

按一下底部菜单中的build键，看看我们生成的可执行文件在哪里（一般就在build下面）

![image](https://user-images.githubusercontent.com/384918/196037279-27ea4de5-3f2c-4c41-b758-35fef036222d.png)

按F5键，VSCode会报错，同时在根目录下生成一个.vscode文件夹以及launch.json。打开这个json文件，将其中唯一一个需要我们配置的（也是本文第二次跟配置文件打交道）program项改为cmake生成的可执行文件的位置（按照惯例，根目录的名字和项目的名字应该是同一个，否则就需要手动指定）。

![image](https://user-images.githubusercontent.com/384918/196037321-711a28f9-a236-41be-8811-2fdd11951b9d.png)

