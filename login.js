// nodejs自带的http模块
let http = require("http");

// 解析参数需要用到url模块
let url = require("url");

let fs = require("fs");

http.createServer((req, resp) => {
    console.log("有人登录了");

    let par = url.parse(req.url, true).query;

    // 获取用户名   向数据库讨要数据
    if ("root" == par.username && "root" == par.password) {
        readFile('./login-success.html', resp);
    } else {
        readFile('./login-erro.html', resp);
    }
}).listen(8080);

function readFile(url, response) {
    fs.readFile(url, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        response.end(data);
    })
}