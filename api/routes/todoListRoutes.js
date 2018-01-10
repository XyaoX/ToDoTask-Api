'use strict';
module.exports = function(app) {
  const todoList = require('../controllers/todoListController');
  const path = require("path");
  
  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

// ========================================================================================================================
  app.route('/name')
    .get(todoList.list_all_name);

  app.route('/addname')
    .post(todoList.create_a_name);
// ========================================================================================================================
  app.route('/notebook')
    .get(todoList.render_notebook)
    .post(todoList.create_a_note);

  app.route('/notebook/:noteId')
    .get(todoList.read_a_note)
    .put(todoList.update_a_note);

  app.route('/notebook/poll/:random')
    .get(todoList.poll_page);
};
