'use strict';

var db=require('../dbconnection'); //reference of dbconnection.js
 
var Disc={
	getAllDiscs:function(callback){
		return db.query("Select * from disc",callback);
	},
	
	getDiscById:function(id,callback){
		console.log("teste2");
	 	return db.query("select * from disc where Id=?",[id],callback);
	},

	searchDisc:function(text,callback){
		console.log("teste");
	 	return db.query("select * from disc where name like ?",['%' + text + '%'],callback);
	},
	
	addDisc:function(Disc,callback){
		return db.query("Insert into disc (name, year) values(?,?)",[Disc.name,Disc.year],function(err, res) {
			var id = res.insertId;
			db.query("Insert into collection_discs (collection_id, disc_id) values(?,?)",[Disc.col_id,id],callback);
		});
	},
	
	deleteDisc:function(id,callback){
		return db.query("delete from disc where Id=?",[id],callback);
	},
	
	updateDisc:function(id,Disc,callback){
		return db.query("update disc set name=?,year=? where Id=?",[Disc.name,Disc.year,id],callback);
	}
};
 module.exports=Disc;