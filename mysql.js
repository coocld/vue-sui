//数据库配置
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'node'
});

//连接数据库
connection.connect();

 
// 增加记录
//connection.query('insert into student (name ,sex ,age) values ("天天" , "难" ,"23")');
 
// 删除记录
connection.query('delete from student where name = "共和国"');
 
// 修改记录
//connection.query('update student set name = "李四" where name = "lupeng"');
 
// 查询记录
connection.query("select * from student" , function selectTable(err, rows, fields){
 if (err){
  throw err;
 }
 if (rows){
  for(var i = 0 ; i < rows.length ; i++){
   console.log("%d\t%s\t%s", rows[i].id,rows[i].name,rows[i].sex,rows[i].age);
  }
 }
});
//断开连接数据库
connection.end();