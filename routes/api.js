const express = require('express');
const router = express.Router();
const People = require('../schema/peopleSchema');

router.get('/people', function(req,res,next){
	People.find({}).then(function(people){
		res.send(people);
	});
/*	res.send({type: 'GET'});*/
});

//add a new item:: CREATE
router.post('/people', function(req,res,next){
	/*var people = new people(req.body);
	people.save();*/
	//create new instance locally, and save to people database. returns promise.
	People.create(req.body).then(function(people){
		res.send(people);
	}).catch(next);
});

//update a item:: UPDATE
router.put('/people/:id', function(req,res,next){
	People.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		People.findOne({_id: req.params.id}).then(function(people){
			res.send(people);
		});	
	});
	/*res.send({type: 'PUT'});*/
});

//delete a item:: DELETE
router.delete('/people/:id', function(req,res,next){
	People.findByIdAndRemove({_id: req.params.id}).then(function(people){
		res.send(people);
	});
	/*res.send({type: 'DELETE'});*/
});

module.exports = router;

