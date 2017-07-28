'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
	name:{
		type:String},
	age:{
		type:String}
});

module.exports = mongoose.model('people',peopleSchema);