var express = require('express');
var router = express.Router();
var Disc=require('../models/Disc')

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		Disc.getDiscById(req.params.id).then(function(rows){
			res.json(rows);
		}).catch(function(err){
			res.json(err);
		});
	 } else {
	 	Disc.getAllDiscs().then(function(rows){
			res.json(rows);
		}).catch(function(err){
			res.json(err);
		});
	}
});

router.get('/:text?',function(req,res,next){
	Disc.searchDisc().then(function(rows){
		res.json(rows);
	}).catch(function(err){
		res.json(err);
	});
});

router.post('/',function(req,res,next){
	Disc.addDisc(req.body).then(function(rows){
		res.json(rows);
	}).catch(function(err){
		res.json(err);
	});
});

router.delete('/:id',function(req,res,next){
	Disc.deleteDisc(req.params.id).then(function(rows){
		res.json(rows);
	}).catch(function(err){
		res.json(err);
	});
});

router.put('/:id',function(req,res,next){
	Disc.updateDisc(req.params.id,req.body).then(function(rows){
		res.json(rows);
	}).catch(function(err){
		res.json(err);
	});
});

module.exports=router;