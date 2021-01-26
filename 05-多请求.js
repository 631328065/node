let http = require("http")
http.createServer(function(req,resp){
	console.log("请求来了");//判断是哪个请求，我们再决定该如何处理
	resp.end("asd")
}).listen(8888)