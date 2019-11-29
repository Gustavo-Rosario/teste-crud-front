var http = require("http");
var app = require("./js/config/express");
require("./js/config/database");

http.createServer(app).listen(8081, function(){
    console.log("Servidor iniciado");
});
