'use strict';

var db=require('../dbconnection'); //reference of dbconnection.js
 
var Collection={
	getCollectionDiscs:function(id,callback){
		return new Promise(fn);
		
		function fn(resolve,reject){
			db.query("Select * from disc join collection_discs on collection_discs.disc_id = disc.id where collection_discs.collection_id = ?",[id],function(err,rows){
				if(err){
					return reject(err);
				}else{
					return resolve(rows);
				}
			});
	    }
	}
};
 module.exports=Collection;