'use strict';

var mongoose = require('mongoose'),
    path= require("path"),
    Task = mongoose.model('Tasks'),
    User = mongoose.model('User'),
    Note = mongoose.model('Note');

// functions for first project task
exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    console.log(req.method+" on "+ req.url + " at " + new Date().toISOString());
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
    res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
    res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
    res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

// Second Project
exports.list_all_name = function(req,res){
  User.find({},function(err,name){
    if(err)
      res.send(err);
    res.json(name);
  });
};

exports.create_a_name = function (req,res){
  var new_name = new User(req.body);
  new_name.save(function(err,task){
    if (err)
      res.status(400).send("unable to save to database");
    res.redirect('back');
  })
}

// Third Project
exports.render_notebook = function (req,res){
  res.sendFile(path.join(__dirname+'/../../public/notebook.html'));
    };
exports.poll_page = function (req,res){
  res.sendFile(path.join(__dirname+'/../../public/poll.html'));
    };
exports.create_a_note = function (req,res){
  var new_note = new Note(req.body);
  var url =  new_note._id;
  new_note.save(function(err,task){
    if (err)
      res.status(400).send("unable to save to database");
    res.redirect(`/notebook/poll/${url}`)
  });
};
// exports.read_a_note = function (req,res){
//   console.log(req.params.noteId)
//   Note.findById(req.params.noteId, function(err, task) {
//     if (err)
//       res.send(err);
//     console.log(req.method+" on "+ req.url + " at " + new Date().toISOString());
//     res.json(task);
//   });
// };

// // make sure the put request receive the body u want
// exports.update_a_note = function (req,res){
//   console.log(req.body);
//   Note.findById(req.params.noteId,function(err, note) {
//     if (err)
//       res.send(err);
//       $inc : req.body;
//     note.optionOne= req.body.optionOne;
//     note.optionTwo= req.body.optionTwo;
//     note.optionThree= req.body.optionThree;
//       note.save(function(err){
//         if (err)
//           console.log('error! could not save your update')
//         else
//         console.log('success')
//       });
//   });
// };

exports.read_a_note = function (req,res){
  console.log(req.params.noteId)
  Note.findById(req.params.noteId, function(err, task) {
    if (err)
      res.send(err);
    console.log(req.method+" on "+ req.url + " at " + new Date().toISOString());
    res.json(task);
  });
};

// make sure the put request receive the body u want
exports.update_a_note = function (req,res){
  let key = Object.keys(req.body);
  try {
  Note.findByIdAndUpdate(req.params.noteId, {$inc:{[key] : 1}}, { new: true }, function (err, data) {
    if (err) return handleError(err);
      console.log("successful");
  });
  }
  catch(err){
    console.error(err);
  }
};
