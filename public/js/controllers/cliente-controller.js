angular.module('App').controller('ClienteController', function($scope, $http, $routeParams){
    $scope.cliente = {};
    
    const endereco = 'http://localhost:8888';

    $scope.cadastrarCliente = function(){
        if($scope.cliente._id){
            $http.put(endereco + '/cliente/'+ $scope.cliente._id, $scope.cliente)
            .success(function(){

            })
            .error(function(error){
                console.log(error)
            })
        } else {
            
            $http.post(endereco + '/cliente', $scope.cliente)
            .success(function(){
            })
            .error(function(error){
                console.log(error);
            })
        }
    }
    if($routeParams.clienteId) {
        $http.get(endereco + '/cliente/'+ $routeParams.clienteId)
        .success(function(cliente){
            console.log($routeParams.clienteId)
            $scope.cliente = cliente
        })
    }
})