angular.module("minhasDiretivas", []).directive("minhaTabela", function(){

    var ddo = {};
    
    ddo.restric = "AE";
    ddo.scope = {
        nome: "@nome"
    };
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/minha-tabela.html';


    return ddo;
});