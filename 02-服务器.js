// nodejs自带的http模块
var http = require("http")

http.createServer((req,resp)=>{
	console.log("服务器启动成功");
	resp.end(`
	<html>
		<meta charset="utf-8"/>
		天王盖地虎，我爱唐伯虎
		<script>
			location.href="http://www.taobao.com"
		</script>
	</html>`);
})
.listen(8080)