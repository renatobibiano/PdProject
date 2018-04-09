var express = require('express');
var router = express.Router();
var Collection=require('../models/Collection')

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		Collection.getCollectionDiscs(req.params.id,function(err,rows){
			if(err) {
	  			res.json(err);
	  		} else {
	  			res.json(rows);
	  		}
	  	});
	 }
});

module.exports=router;