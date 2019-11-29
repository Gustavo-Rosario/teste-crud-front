angular.module("projeto", ["minhasDiretivas","ngAnimate","ngRoute"])
.config(function($routeProvider){

    $routeProvider.when("/cadastro", {
        templateUrl: "partials/principal.html",
        controller: "ClienteController"
    });

    $routeProvider.when("/cadastro/new", {
        templateUrl: "partials/lista.html",
        controller: "ClienteController"
    });

    $routeProvider.when("/cadastro/edit/:clienteId", {
        templateUrl: "partials/principal.html",
        controller: "ClienteController"
    });
});