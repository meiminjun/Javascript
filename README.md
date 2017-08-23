这是一个Javascript 项目集合

集合了[ci自动化部署集成](https://travis-ci.org/meiminjun/Javascript),当代码提交到develop目录中时,会自动部署到gh-pages分支

>GitHub Pages 服务就是把项目仓库中 gh-pages 分支的内容作为静态页面的文件，并提供 https://<username>.github.io/<repository>/ 的域名以供访问。 其中 <username> 是指用户名，<repository> 是指仓库名。

>其中有个例外，就是当仓库名为 <username>.github.io 时，是固定解析的 master 分支，其他仓库是默认解析 gh-pages 分支并且可以配置使用哪个分支作为页面；<username>.github.io 仓库就只能解析 master 分支中的文件，并且访问域名就是 https://<username>.github.io/，称为个人页面，其他仓库的访问需要加上 /<repository>/ 目录，被称为项目页面。

>举个例子，GitHub 用户 meiminjun 有个仓库 Javascript，并且仓库中也有 gh-pages 分支，放了一个 index.html 里面写的 <h1>Hello world</h1>，那么我们就可以通过 https://meiminjun.github.io/Javascript/index.html 来访问这个页面，然后看到一个大大的 Hello World。



