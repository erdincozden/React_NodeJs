var express = require('express');
var parser = require('body-parser');

var app = new express();
require('./database.js');
app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
    .use(express.static(__dirname + '/../.tmp'))
    .listen(9999);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/item.js')(app);