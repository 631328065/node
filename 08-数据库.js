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