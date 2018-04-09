'use strict';

var db=require('../dbconnection'); //reference of dbconnection.js
var Promise = require("promise");
 
var Disc={
	getAllDiscs:function(callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("Select * from disc",function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	},
	
	getDiscById:function(id,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("select * from disc where Id=?",[id],function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	},

	searchDisc:function(text,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("select * from disc where name like ?",['%' + text + '%'],function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	},
	
	addDisc:function(Disc,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			if(!Disc.col_id) {
				return reject("Error: Please provide the collection ID.");
			} else {
				db.query("Insert into disc (name, year) values(?,?)",[Disc.name,Disc.year],function(err,rows){
					if(err){
						return reject(err);
					}else{
						var id = rows.insertId;
						db.query("Insert into collection_discs (collection_id, disc_id) values(?,?)",[Disc.col_id,id],callback);
						return resolve(id);
					}
				});
			}
	    }
	},
	
	deleteDisc:function(id,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("delete from disc where Id=?",[id],function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	},
	
	updateDisc:function(id,Disc,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("update disc set name=?,year=? where Id=?",[Disc.name,Disc.year,id],function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	}
};
 module.exports=Disc;