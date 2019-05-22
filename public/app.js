
$(document).ready(function() {

    $('#todoInput').focus();
    $.get("/api/todos").then(function(data) {
        addTodos(data)
    });
    $('#todoInput').keypress(function(event){
        if (event.which == 13) {
            createTodo();
        }
    });
    $('.list').on('click', '.delete', function() {
        removeTodo($(this).parent());
    });
    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    });
});

function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li class="todo">' + todo.name + '<i class="delete fas fa-window-close"></i></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function createTodo() {
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput}).then(function(newTodo){ 
        addTodo(newTodo);
        $('#todoInput').val('');
    }).catch(function(err) {
        console.log(err);
    });
}

function removeTodo(parent) {
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/'+parent.data('id'),
    }).then(function(data) { 
        parent.remove();
    }).catch(function(err) {
        console.log(err);
    });
}

function updateTodo(todo) {
    var url = '/api/todos/' + todo.data('id');
    var completed = ! todo.data('completed');
    $.ajax({
        method: 'PUT',
        url,
        data: { completed },
    }).then(function(data){ 
        todo.toggleClass('done');
        todo.data('completed', completed);
    }) 
}