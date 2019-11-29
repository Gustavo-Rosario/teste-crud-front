// var mongoose = require("mongoose");

var api = {};
var model = require("../../models/Crude");

api.lista = function(req, res){
    model.find(function(error, clientes) {
        if(error) {
            res.status(500).json(error);
        }
        res.json(clientes);
    });
};

api.buscaPorId = function(req, res) {
    model
        .findById(req.params.id)
        .then(function(clientes){
            if(!clientes) throw Error("CLiente não encontrado");
            res.json(clientes)

        }, function(error) {
            console.log(error);
            res.status(404).json(error);
        });
};

api.removePorId = function(req, res) {
    console.log(req.params);
    model
        .remove({_id: req.params.id})
        .then(function() {
            console.log("Foi");
            res.sendStatus(204);

        }, function(error) {
            console.log(error);
            res.status(500).json(error)
        });

};

api.adiciona = function(req, res) {
    var banco = req.body;
    banco.data_nascimento = req.body.data;

    model 
        .create(banco)
        .then(function(clientes) {
            console.log("Cadastrou");
            res.json(clientes);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function(req, res) {
    
    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(clientes){
            res.json(clientes);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;