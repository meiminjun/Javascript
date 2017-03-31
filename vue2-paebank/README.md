# 定活理财

## 快速开始

### 启动挡板

```
yarn run dev  // 挡板
yarn run stg  // 运行测试环境
```

### 编译 stg 环境 native包

```
yarn run build:dev
yarn run build:stg
yarn run build:prd
```

## 开发规范

 * 通用组件放components
 * 页面以文件夹形式存放于container目录下，一个page一个目录
 * 每个页面的文件夹需包含入口文件(`index.js`)、页面模版(`index.html`)，程序会自动扫描container目录下的文件夹`index.js`进行程序打包合并
 * index.html的css和js从入口文件`index.js`引入
 * 兼容普通写法和ES6写法
 * 引入vuex进行状态管理
 * 应用自动支持`sessionStorage`或`localStorage`存储方案，可在页面或组件中进行数据共享

## 版本管理

**统一使用sourcetree的分支workflow**

![](https://ww2.sinaimg.cn/large/006tKfTcgy1fdoqe6kfftj30tw0ybjyp.jpg)

   * 稳定版本分支是master分支
   * 版本开发的时候，从master拉取稳定版本代码，并选择sourcetree（如图），选择`初始化`
   * 每次创建一个功能开发时候，按`alt+command+f`触发创建流程，并创建feature分支进行开发
   * feature功能模块开发完成后,`alt+command+f`选择完成，代码自动合并到develop分支，并删除feature分支

## 开发环境规范

编码相关：
* sublime_text:编码工具
    1. 添加中文包：
    ![](https://ww1.sinaimg.cn/large/006tKfTcgy1fdomtqjy8fj311c0fwwmh.jpg)
    2. 将LocalizedMenu.sublime-package放进目录
    3. 设置中文
    ![](https://ww4.sinaimg.cn/large/006tKfTcgy1fdonjremb6j30vu0tgagb.jpg)
* source_tree:版本管理
* dash：api文档工具
> 本人提供的破解版密码为：xclient.info

上传cms：
* firefox浏览器（51版本）
* java自行安装

其他
* visualDiff:对比工具
* charles:测试工具
* chrome:开发调试浏览器（自行下载）

[下载地址](https://pan.baidu.com/s/1o8RUlgI )
密码: mixt

**安装package control插件(安装之后才能安装其他插件)**

```

import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

```

打开sublime text 3，按 ctrl+~或者菜单 View > Show Console打开命令窗口，粘贴以上代码并回车即可。

然后，ctrl + shift + p 下载相关插件
![](http://ww3.sinaimg.cn/large/69a9ed59gw1f568lvwdzug20b606o40a.gif)

1. Vue Syntax Highlight
2. Vue Snippets
3. eslint代码风格检查安装（**必须按依次安装**）
    * eslint
    ```
    npm install -g eslint
    ```
    * [统一代码风格standard](https://github.com/feross/standard/blob/master/docs/README-zhtw.md)
    ```
    npm install standard --g
    ```
    * SublimeLinter
    * SublimeLinter-contrib-standard
    * StandardFormat : standard代码格式化插件
        * 关闭自动格式化,取消勾选
        ![](https://ww2.sinaimg.cn/large/006tKfTcgy1fdoo9akt40j31b50umgut.jpg)
        > 设置完下面的快捷键后，使用control+alt+f生效

    * 安装完成后，重启sublime
4. EditerConfig 代码风格插件
5. DocBlockr 注释插件
    * 普通注释

    ![](https://ww4.sinaimg.cn/large/006tKfTcgy1fdooc5njvej306o05cgli.jpg)
    * 在方法前注释

    ![](https://ww4.sinaimg.cn/large/006tKfTcgy1fdooelzu7oj30a805ct8v.jpg)
6. Markdown Preview : 对.md文件的预览
> 设置完下面的快捷键后，使用alt+m生效

7. Theme - Flatland(推荐，以下配置需要用的)
8. Terminal 快速开启终端命令

如果是iTerm

{
  "terminal": "iTerm.sh",
  "parameters": ["--open-in-tab"]
}

如果是iTerm2 v3 on OS X

```
{
  "terminal": "iTerm2-v3.sh",
  "parameters": ["--open-in-tab"]
}
```

sublime用户配置设置：

```
{
  "color_scheme": "Packages/User/SublimeLinter/Flatland Monokai (SL).tmTheme",
  "default_line_ending": "unix",
  "draw_minimap_border": true,
  "font_face": "monaco",
  "font_size": 13.0,
  "highlight_line": true,
  "highlight_modified_tabs": true,
  "ignored_packages":
  [
    "Vintage"
  ],
  "line_padding_bottom": 1,
  "line_padding_top": 1,
  "tab_size": 2,
  "theme": "Flatland Dark.sublime-theme",
  "trim_trailing_white_space_on_save": true,
  "update_check": false,
  "word_wrap": "true"
}
```

sublime用户快捷键设置:

```
[
  {
    "keys": ["ctrl+alt+f"], "command": "standard_format",
    "context": [{"key": "selector", "operator": "equal", "operand": "source.js,source.json"}]
  },
  {
    "keys": ["alt+m"],
    "command": "markdown_preview",
    "args": {"target": "browser", "parser":"markdown"}
  }
]

```

## CMS开发部署规范(一定要遵守)

1. 在本地构建一个dev的包并部署到dev，自测整个流程通过后再进行下一步骤
2. 完成1流程后，构建stg包并部署到测试环境


## 配置项(config文件)

1. 如果要排除打的包，请配置config中的noBuild

## 参考文档

 * aladdin
    * wiki: http://10.20.20.177/wiki/wiki/
    * git: http://git-ma.paic.com.cn/groups/Aladdin
 * bow
    * wiki: http://10.20.20.177/wiki/wiki/bow/
    * git: http://git-ma.paic.com.cn/kdwy-libs/bow
 * vuejs: https://vuejs.org
 * vuex: http://vuex.vuejs.org

