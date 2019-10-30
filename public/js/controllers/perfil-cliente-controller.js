angular.module('agenda').controller('PerfilClienteController', function($scope, $http, $resource, $routeParams){

    $scope.cliente  = {};
    
    var recursoCliente = $resource('http://localhost:3333/agenda/cliente/:clienteId');

    // recursoCliente.query(function(cliente){
    //   $scope.cliente = cliente;
      
    // }, function(erro){
    //     console.log(erro);

    // });

    if($routeParams.clienteId) {    
            
        recursoCliente.get({clienteId : $routeParams.clienteId}, function(cliente){
            $scope.cliente = cliente;
   
        }, function(erro){
            console.log(erro);
          

        });

    };
});