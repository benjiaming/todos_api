var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
// name
// completed
// created_date