'use strict';

var db=require('../dbconnection'); //reference of dbconnection.js
 
var Collection={
	getCollectionDiscs:function(id,callback){
		return db.query("Select * from disc join collection_discs on collection_discs.disc_id = disc.id where collection_discs.collection_id = ?",[id],callback);
	}
};
 module.exports=Collection;