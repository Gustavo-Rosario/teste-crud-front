angular.module('agenda').controller('EditarClienteController', function($scope, recursoCliente, $routeParams){

    $scope.editarCliente = true;

    $scope.cliente  = {};
    $scope.mensagem = '';

    
        if($routeParams.clienteId) {    
            
            recursoCliente.get({clienteId : $routeParams.clienteId}, function(cliente){
                $scope.cliente = cliente;
       
            }, function(erro){
                console.log(erro);
                $scope.mensagem ='Não foi possível alterar os dados do Cliente1';


            });

        };
        
        $scope.submeter = function() {
             
    
            recursoCliente.update({clienteId : $scope.cliente._id}, $scope.cliente, function(){
                $scope.mensagem =' Dados do Cliente atualizado com sucesso';
                console.log("sucesso" , $scope.cliente);

            }, function(erro){
                $scope.mensagem ='Não foi possível alterar os dados do Cliente';
                console.log(erro);
            });

                console.log($scope.cliente);

        };

});