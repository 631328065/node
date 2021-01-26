let hpXieYi = require("http");
hpXieYi.createServer((req,resp)=>{
    console.log("服务器启动成功");
    resp.end(`
        <html>
            <meta charset="utf-8"/>
            叫爸爸
        </html>
    `);
}).listen(8080);