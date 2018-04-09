var express = require('express');
var router = express.Router();
var Disc=require('../models/Disc')

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		Disc.getDiscById(req.params.id,function(err,rows){
			if(err) {
	  			res.json(err);
	  		} else {
	  			res.json(rows);
	  		}
	  	});
	 } else {
	 	Disc.getAllDiscs(function(err,rows){
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

router.get('/:text?',function(req,res,next){
	Disc.searchDisc(function(err,rows){
		if(err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
});

router.post('/',function(req,res,next){
	Disc.addDisc(req.body,function(err,count){
		if(err) {
			res.json(err);
		} else {
			res.json(req.body);//or return count for 1 &amp;amp;amp; 0
		}
	});
});

router.delete('/:id',function(req,res,next){
	Disc.deleteDisc(req.params.id,function(err,count){
		if(err) {
			res.json(err);
		} else {
			res.json(count);
		}
	});
});

router.put('/:id',function(req,res,next){
	Disc.updateDisc(req.params.id,req.body,function(err,rows){
		if(err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
});

module.exports=router;