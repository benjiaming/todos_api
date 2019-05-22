var db = require('../models');

exports.getTodos = function(req, res) {
    db.Todo.find().then(function(todos) {
        res.json(todos);
    }).catch(function(err){
        res.send(err);
    })
};

exports.postTodos = function(req, res) {
    console.log(req.body);
    db.Todo.create(req.body).then(function(newTodo) {
        res.status(201).json(newTodo);
    }).catch(function(err) {
        res.send(err);
    });
};

exports.getTodo = function(req, res) {
    db.Todo.findById(req.params.todoId).then(function(foundTodo) { 
        res.json(foundTodo)
    }).catch(function(err) {
        res.send(err);
    })
};

exports.putTodo = function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true,rawResult:true}).then(function(todo) {
        res.status(202).json(todo)
    }).catch(function(err){
        res.send(err)
    })
};

exports.deleteTodo = function(req, res) {
    db.Todo.deleteOne({_id: req.params.todoId}).then(function(todo) {
        res.json({message: 'deleted!'})
    }).catch(function(err) {
        res.send(err)
    });
};

module.exports = exports;