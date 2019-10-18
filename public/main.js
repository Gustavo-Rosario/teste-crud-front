const app = angular.module('App', ['ngRoute', 'ui.utils.masks'])
.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/lista', {
        templateUrl: 'partials/principal.html',
        controller:'ClientesController'
    });
    $routeProvider.when('/lista/novo', {
        templateUrl: 'partials/cliente.html',
        controller: 'ClienteController'
    });
    $routeProvider.when('/lista/editar/:clienteId', {
        templateUrl: 'partials/cliente.html',
        controller: 'ClienteController'
    });
    $routeProvider.otherwise({redirectTo: '/lista'});
});