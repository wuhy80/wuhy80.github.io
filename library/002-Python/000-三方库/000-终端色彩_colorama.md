[colorama](https://github.com/tartley/colorama)
>支持Windows下面的彩色打印

![](assets/002/000/000-1515314339000.png)

使用方法如下
```python
from colorama import Fore, Back, Style, init
init()

print(Fore.RED + 'some red text')
print(Back.GREEN + 'and with a green background')
print(Style.DIM + 'and in dim text')
print(Style.RESET_ALL)
print('back to normal now')
```