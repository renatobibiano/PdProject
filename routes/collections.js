var express = require('express');
var router = express.Router();
var Collection=require('../models/Collection')

router.get('/:id',function(req,res,next){
	if(req.params.id){
		Collection.getCollectionDiscs(req.params.id).then(function(rows){
			res.json(rows);
		}).catch(function(err){
			res.json(err);
		});
	 }
});

module.exports=router;