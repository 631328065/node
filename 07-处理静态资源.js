var express = require("express")
var app = express();
var bodyParser = require('body-parser')

app.use('/public', express.static('public'));

 // 配置body-parser模块
 app.use(bodyParser.urlencoded({ extended: false }));

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
	next();
})

// 处理get请求
/* app.get("/add",(req,resp)=>{
	console.log("用户get要新增操作",req.query);
	resp.end(`<html><meta charset='utf-8'/>新增成功</html>`);
}) */

app.post("/add",(req,resp)=>{
	console.log("用户post要新增操作",req.body.addr);
	resp.end(`<html><meta charset='utf-8'/>新增成功</html>`);
})


app.get("/list",(req,resp)=>{
	console.log("用户要展示操作,",req.query.name);
	resp.send("展示一堆数据<img src='./public/2.jpg'/>")
})

app.post("/addStu",(req,resp)=>{
	console.log("增加学生");
	resp.send("新增学生")
})

// 返回指定页面
app.get("/index",(req,resp)=>{
	resp.sendFile(__dirname+"/"+"index.html")
})

//返回json数据
app.get("/json",(req,resp)=>{
	resp.header("content-type","application/json;charset=utf-8")
	resp.end(`{"name":"jack","addr":"大学城"}`);
})


let server = app.listen(8080,(res,resp)=>{
	 var host = server.address().address
	  var port = server.address().port
	// 创建服务器的时候执行的
});