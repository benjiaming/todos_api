var express = require('express');
var router = express.Router();
var helpers = require("../helpers/todos");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.postTodos);

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.putTodo)
    .delete(helpers.deleteTodo);

module.exports = router;