var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/NewMethod', function(req, res){
    res.send('Hello New Method!');
});

app.listen((process.env.PORT || 3000), function(){
    console.log('Listening on port 3000');
});

module.exports = app;