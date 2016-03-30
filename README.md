一、nodeJs连接数据库，并实现（CURD）增、删、改、查

1. 安装mysql
下载MySQL :MySQL，设置root密码以及创建普通用户以及密码。我安装的是wampserver

2. 安装Node-mysql
进入项目文件夹，执行npm install mysql 。

3. 查看readme文档
进入mysql目录中，查看README文档

4. 连接mysql数据库
进入项目文档，新建mysql.js示例，编写如下代码:
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'node'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

连接基本参数
host 主机名，localhost代表本地
user Mysql用户
password 密码
database 连接的数据库
client.connect()连接数据库
client.query()执行SQL语句
client.end()关闭连接。
然后通过node mysql.js执行程序，确保你在执行之前已经启动了Mysql服务。

5. 增删改查

// 增加记录
connection.query('insert into student (name ,sex ,age) values ("天天" , "难" ,"23")');
 
// 删除记录
connection.query('delete from student where name = "共和国"');
 
// 修改记录
connection.query('update student set name = "李四" where name = "lupeng"');
 
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

二、vue.js与SUI 结合

> [sui](http://m.sui.taobao.org/)



---
Vue很轻量，易定制，比较适合移动端，很喜欢Vue写组件的方式，
所有用[VUE](http://cn.vuejs.org/) 和 [SUI-Mobile](http://m.sui.taobao.org/) 写了一个移动端demo，用来反馈vue的学习成果（禁用了SUI自带的路由，使用[Vue-router](https://github.com/vuejs/vue-router)）


##### 技术栈

> [vue](https://github.com/vuejs/vue)

> [vue-router](https://github.com/vuejs/vue-router)

> [vue-resource](https://github.com/vuejs/vue-resource)

> [webpack](http://webpack.github.io/docs/)

> [sui-mobile](http://m.sui.taobao.org/)

> [es6-babel](https://babeljs.io/docs/learn-es2015/)




```bash
# 安装依赖模块
npm install

# 启动服务
npm run dev

# 发布代码
npm run build

# 发布后启动服务
npm run main

```

### 开发

### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
├── index.js                 // 项目发布后的启动文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   └── main.vue             // 根组件
│   └── app.js               // Webpack 预编译入口
│   └── index.html           // 项目入口文件
.
</pre>
