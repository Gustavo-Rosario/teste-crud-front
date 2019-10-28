var express     = require ('express');
var app         = express();
var port        = process.env.PORT || 3000;
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

var path        = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('C:/Users/Vayon24/Desktop/crud-vayon/app/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join('C:/Users/Vayon24/Desktop/crud-vayon/app/public/app/views/index.html'));     
});

app.listen(port, function() {
    console.log("Rodando o servidor na porta " + port);
});