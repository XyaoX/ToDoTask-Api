'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema for task routes
var TaskSchema = new Schema({
  name: {type: String,required: 'Kindly enter the name of the task'},
  age: Number,
  email:String,
  Created_date: {type: Date,default: Date.now},
  status: {type: [{type: String,enum: ['pending', 'ongoing', 'completed']}],default: ['pending']}
  });

// Schema for root routes
var nameSchema = new Schema({
  firstName: String,
  lastName: String
  });

// Schema for poll routes
 var noteSchema = new Schema({
   questionTitle:String,
   optionOne:{ option:String, vote: {type:Number,default:0}},
   optionTwo:{ option:String, vote: {type:Number,default:0}},
   optionThree:{ option:String, vote: {type:Number,default:0}},
   Created_date: {type:Date, default:Date.now}
  });



module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model("User", nameSchema);
module.exports = mongoose.model("Note", noteSchema); 

