## 启动项目

nodemon start

需要先下载nodemon

## 创建npm配置文件

npm init

## 添加依赖包

```
"dependencies": {
  "koa": "2.0.0-alpha.7"
},
"devDependencies": {
  "babel-core": "6.20.0",
  "babel-polyfill": "^6.20.0",
  "babel-preset-es2015-node6": "^0.4.0",
  "babel-preset-stage-3": "^6.5.0"
}

```


## 下载mysql

http://dev.mysql.com/downloads/file/?id=467574

我的mysql 密码：123456

## mysql常用命令

mysql -u root -p // 以root用户进入mysql

show databases; // 显示数据库

create database mytest; //创建一个数据库mytest 

use mytest //选择你所创建的数据库

show tables; // 显示数据表 

create table mytable (name varchar(20), sex char(1)); //创建一个数据表格(mytable)

describe mytable // 显示mytable的表结构

insert into mytable values ("梅敏君","M"); // 插入数据

update mytable set sex="f" where name='hyq';  // 更新数据

delete from mytable;   // 清空数据表

drop table mytable; // 删除数据表

 