var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//index page
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

//admin page(you can set invoice and transactions details from it)
app.get('/admin', function(req,res){
    res.sendFile(path.join(__dirname,'admin.html'));
})


//port
app.listen(process.env.PORT);
