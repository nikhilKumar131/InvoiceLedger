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

//page to connect and check (useful when using admin only)
app.get('metamask', function(req,res){
    res.sendFile(path.join(__dirname,'metamsk.html'));
})


//port
app.listen(3000);
console.log("listening to port: 3000");