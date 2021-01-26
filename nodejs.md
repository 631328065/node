## nodejs

### 介绍

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

能够让我们脱离浏览器执行javascript代码。

### 安装

下载，安装

### 运行js程序

```
node xxx.js
```

### NPM 使用

 NPM是随同NodeJS一起安装的包管理工具 ,主要管理的是前端的包，js包，常见的有jquery,vue,bootstrap,echart,axios,cookie....

npm常用的命令

```
安装包
npm install 包名

安装开发包  --save将安装信息保存到package.json当中
npm install 包名 --save-dev

全局安装
npm install 报名 -g
全局安装的包，所有的项目都可以用，如果大家安装的包里面有提供命令给我们用，那么只能用全局安装

安装cnpm
npm install cnpm -g

查看安装包,不写包名就是查所有
npm list 包名
npm list 包名 -g

卸载包
cnpm uninstall 包名 -g

查看安装了那些包
cnpm ls

更新到新的版本
npm update jquery

搜索安装包
npm search jquery

清空NPM本地缓存
npm cache clear

查看当前的镜像地址
npm config get registry

设置镜像
npm config set registry https://registry.npm.taobao.org --global
```

package.json

```
表示当前项目依赖jqueyr包，当npm发现目录下没有依赖包的时候，可以执行npm i自动下载
"dependencies": {
    "jquery": "^3.5.1"			
  },
  开发依赖---这个包只是我们再开发过程中生效，当开发完成打包上线的时候会自动剩下。
  "devDependencies": {
  "jquery": "^3.5.1"
  }
```

### 服务器

创建服务器

```
var http = require("http")
http.createServer().listen(8080)
```

获取请求数据

```
get数据
var url = require('url');
var canshu = url.parse(req.url, true).query;

post数据
var querystring = require('querystring');
var body = "";
req.on('data', function (chunk) {
  body += chunk;
});
body = querystring.parse(body);
name = body.name;
url = body.url
```

结果处理

### Express 

#### 简介

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。
- 定义了路由表用于执行不同的 HTTP 请求动作。
- 可以通过向模板传递参数来动态渲染 HTML 页面。

安装

```
cnpm install express --save
```

创建服务器

```
var express = require('express');
var app = express(); 
var server = app.listen(8081)
```

处理get

```
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
```

处理post

```
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
```

处理静态资源

```
app.use('/public', express.static('public'));
```

返回页面

```
resp.sendFile(__dirname+"/"+"index.html")
```

返回json

```
app.get("/json",(req,resp)=>{
	resp.header("content-type","application/json;charset=utf-8")
	resp.end(`{"name":"jack","addr":"大学城"}`);
})
```

解决跨域

```
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
	next();
})
```

接收get参数

```
req.query.name
req.query.addr
```

接收post参数

```
var bodyParser = require('body-parser')

 // 配置body-parser模块
 app.use(bodyParser.urlencoded({ extended: false }));
 
 req.body.name
 req.body.addr
```



### 数据库

sqlyog注册

http://www.32r.com/soft/40409.html



基本操作

```
-- 查看当前有哪些数据库
SHOW DATABASES;

-- 使用数据库
USE shuge;

-- 创建数据库
CREATE DATABASE stus DEFAULT CHARSET utf8;

-- 查看数据库中有哪些表
SHOW TABLES;

-- 创建数据表
CREATE TABLE person(
	id INT COMMENT '编号',
	NAME VARCHAR(20) COMMENT '名字',
	author VARCHAR(20) COMMENT '作者'
)

-- 显示表结构
DESC person;

-- 删除数据表
DROP TABLE person;

-- 插入数据
INSERT INTO person(id,NAME,author) VALUES(1,'红楼梦','曹雪芹'),(2,'西游记','罗贯中'),(3,'水浒传','施耐庵')

-- 查看表数据   查看全部可以省略成*号
SELECT id,NAME,author FROM person;

-- 查看数据带条件

-- 等匹配
SELECT * FROM person WHERE id = 2;
SELECT * FROM person WHERE author = '施耐庵'

-- 不等匹配
SELECT * FROM person WHERE id != 3;
SELECT * FROM book WHERE id != 1;

-- 大于匹配(大于等于)
SELECT * FROM book WHERE id > 10;

-- 小于匹配(小于等于)
SELECT * FROM book WHERE id <= 10;
SELECT * FROM book WHERE publish_date > '2020-8-3'

-- 复合条件 
--  与
SELECT * FROM book WHERE id < 10  AND  author = '[韩] 洪渊植 '; 

--  或
SELECT * FROM book WHERE id > 10  OR  author = '[韩] 洪渊植 '; 

-- 删除
DELETE FROM person WHERE id = 3;

-- 修改
UPDATE person SET NAME = '三国演义',author = '施耐庵' WHERE id = 2;
```

### 连接数据库

安装驱动

```
npm install mysql --save
```

```
// 引入mysql模块
var mysql      = require('mysql');

// 创建连接
// 主机,用户,密码,数据库
let conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"stus"
})

// 连接
conn.connect();

// 执行查询
// conn.query("select * from person",(error, results, fields)=>{
// 	results.forEach((item)=>{
// 		console.log(item.id,item.name,item.author);
// 	})
// })

// 执行更新
conn.query("update person set name = '西游记' where id != 3",(error,results,fields)=>{
	if(results.affectedRows != 0){
		// 至少有1行数据受影响了
		console.log("修改成功");
	}
})
```

### 封装链接数据库

```
封装成一个模块
新建db.js文件，内容如下

let mysql = require('mysql')

let conn = mysql.createConnection({
	host:"localhost",
	user:"stu",
	password:"stu",
	database:"test"
})
	
conn.connect();

module.exports = {
	query:function(sql,callback){
		conn.query(sql,(error,result,fileds)=>{
			callback(error,result,fileds)
		})
	}
}

引用模块
let db = require("db")
db.query(sql,function(error,result,fileds){
	//
})
```



### 模块系统

创建模块

```
只暴露一个方法
exports.world = function() {
  console.log('Hello World');
}

暴露对象
module.exports = {
	name:'',
	eat:()=>{
		console.log("eat");
	},
	drink:()=>{
		console.log("drink");
	}
}

引入模块
let mm = require("./db")
```

