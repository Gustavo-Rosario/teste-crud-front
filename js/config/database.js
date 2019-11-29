var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Crude");

mongoose.connection.on("connected", function(){
    console.log("Conectado");
});

mongoose.connection.on("error", function(error){
    console.log("Erro na conexão" + error)
})