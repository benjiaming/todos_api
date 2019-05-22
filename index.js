const PORT=process.env.port || 3000
const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo');
const bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("RUNNING ON " + PORT)
})
