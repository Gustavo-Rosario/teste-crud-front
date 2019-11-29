var express = require("express");
var app = express();
var api = require("../../app/api/cadastro");
var cors = require('cors');
var bodyParser   = require('body-parser');

app.use(express.static("./partials"));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, x-access-token, content-type, Authorization');
    next();
});

app.use(cors());

app.get('/teste',function(req, res){
    res.json({success: true});
})


app.get('/lista', api.lista);

app.put('/atualiza/:id', api.atualiza);

app.post('/cadastrar', api.adiciona);

app.post('/remover/:id', api.removePorId);

app.get('/buscar/:id', api.buscaPorId);

module.exports = app;