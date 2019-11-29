var mongoose = require("mongoose");
var schema = mongoose.Schema({
    
    nome : {
        type: String,
        required: true
    },
    biografia : {
        type: String,
        required: true
    },
    data_nascimento : {
        type: Date,
        required: true
    },
    cpf : {
        type: Number,
        required: true
    },
    especial : {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model("Crude", schema, "clientes");