angular.module('seguropic', [ 'ui.utils.masks', 'minhasDiretivas', 'ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider) {    
    
    $locationProvider.html5Mode(true); 
    
    $routeProvider.when('/principal', {
    
        templateUrl: 'partials/principal.html',
        controller: 'CrudController' 
    })

    $locationProvider.html5Mode(true); 
    
    $routeProvider.when('/principal/formulario', {
 
        templateUrl: 'partials/formulario.html',
        controller: 'FormController'
    })

    $locationProvider.html5Mode(true); 
    
    $routeProvider.when('/principal/formulario/edit/:seguradoId', {
 
        templateUrl: 'partials/formulario.html',
        controller: 'FormController'
    })
          
        $routeProvider.when('/home', {
     
            templateUrl: 'partials/home.html',
            controller: 'CrudController'       
    })
          
        $routeProvider.when('/sobre-nos', {
     
            templateUrl: 'partials/sobre.html',
            controller: 'CrudController'        
    })
          
        $routeProvider.when('/contato', {
     
            templateUrl: 'partials/contato.html',
            controller: 'CrudController'        
    })


    
     $routeProvider.otherwise({redirectTo: '/home'});
    
});