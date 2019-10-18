
const express= require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path')

const porta = 8000;

app.use(express.static('./public'));
app.use(bodyparser.urlencoded({extended: true }));
app.use(bodyparser.json());


app.listen(porta, function(){
    console.log('servidor rodando na porta '+ porta);
    
});
app.all('/*', function(req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});