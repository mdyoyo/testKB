var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/test', function (req,res) {
    res.render('hello', {

    });
});
app.listen(3300, function(req, res) {
    console.log('app is running at port 3306');
});