
angular.module('agenda', ['ngRoute','meusServicos'])
.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    
    $routeProvider.when('/lista',{
        
        templateUrl: 'partials/principal.html',
        controller: 'AgendaController'
    });

    $routeProvider.when('/lista/newclient',{
        templateUrl: 'partials/ncliente.html',
        controller: 'NewClienteController'
    
    });


    $routeProvider.when('/lista/edit/:clienteId',{
        templateUrl: 'partials/ncliente.html',
        controller: 'EditarClienteController'
    
    });

    $routeProvider.when('/lista/perfil/:clienteId',{
        templateUrl: 'partials/perfil-cliente.html',
        controller: 'PerfilClienteController'
    
    });

    $routeProvider.otherwise({redirectTo:'/lista'});
});

