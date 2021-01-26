// nodejs自带的http模块
var http = require("http")
// 解析参数需要用到url模块
var url = require("url")
/* 
	第一个参数表示请求
	第二个参数表示响应
 */
http.createServer((req,resp)=>{
	console.log("有人登录了.");
	let can = url.parse(req.url,true).query;
	// 获取用户名   向数据库讨要数据
	if("root" == can.username && "root" == can.password){
		resp.end(`
		<html>
			<meta charset="utf-8"/>
			<h1 style="color:blue">登录成功</h1>
		</html>`);
	}else{
		resp.end(`
		<html>
			<meta charset="utf-8"/>
			<h1 style="color:red">失败了，呵呵</h1>
		</html>`);
	}
	
})
.listen(8080)