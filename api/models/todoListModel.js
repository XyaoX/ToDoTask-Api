'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  age: Number,
  email:String,
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
 });




module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model("User", nameSchema);