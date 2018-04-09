var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'pd_db'
});
 module.exports=connection;