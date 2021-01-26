var express = require("express")
var app = express();

// 处理get请求
app.get("/add",(req,resp)=>{
	console.log("用户要新增操作");
	resp.end(`<html><meta charset='utf-8'/>新增成功</html>`);
})


app.get("/list",(req,resp)=>{
	console.log("用户要展示操作");
	resp.send("展示一堆数据")
})

app.post("/addStu",(req,resp)=>{
	console.log("增加学生");
	resp.send("新增学生")
})




let server = app.listen(8080,(res,resp)=>{
	 var host = server.address().address
	  var port = server.address().port
	// 创建服务器的时候执行的
});