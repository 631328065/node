// nodejs自带的http模块
var http = require("http")
// 解析参数需要用到url模块
var url = require("url")


var fs = require('fs');

/* 
	第一个参数表示请求
	第二个参数表示响应
 */
http.createServer((req, resp) => {
		console.log("有人登录了.");
		let can = url.parse(req.url, true).query;
		// 获取用户名   向数据库讨要数据
		if ("root" == can.username && "root" == can.password) {
			// resp.end(``);

			readFile('./login-error.html', resp);
		} else {
			readFile('./login-success.html', resp);
		}
	})
	.listen(8080)

function readFile(url, response) {
	fs.readFile(url, 'utf-8', function (err, data) {
		if (err) {
			throw err;
		}
		response.end(data);
	})
}