(function () {
    angular.module('app.routes', [
      'ui.router',

      /* Cliente */
      'app.cliente.routes'
    ])
  
    .config(function($stateProvider, $urlRouterProvider) {
      // Define rota padrao
      $urlRouterProvider.otherwise('/cliente/lista'); 
      
    })
  
    .run(function($rootScope, $location, $state) {
      $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current, currentParams) {
        //
      });
  
      //salva a última rota visitada
      $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
        $rootScope.previousState = { name: from.name, params: fromParams };
      });
    });
  })();
  