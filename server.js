const express = require('express');

const cors = require('cors');

const path = require('path');


const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





//GET, POST, PUT, DELETE

// req.query = Acessar query params (Para Filtros)
// req.params = Acessar route params (Para Edição, Delete)
// req.body = Acessar corpo da requisição (Para Criação, Edição)


app.use(cors());
app.use(express.json());


app.listen(3000);

console.log("conectado porta 3000!");

app.all('/*', function(req, res) {
    res.sendFile(path.resolve('./public/index.html'));
 });