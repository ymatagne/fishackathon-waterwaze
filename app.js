var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

<<<<<<< HEAD
app.use('/api/v1/users', users);

=======
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/v1/users', users);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
>>>>>>> chore(front) : init project
module.exports = app;
