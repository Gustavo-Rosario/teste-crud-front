angular.module("projeto").controller("ClienteController", ['$scope', 'ClientesFactory', '$routeParams', function($scope, ClientesFactory, $routeParams){

    $scope.cliente = {};
    $scope.clientes = [];
    $scope.mensagem = {};

    if($routeParams.clienteId) {
        ClientesFactory.buscarCLientes({clienteId: $routeParams.clienteId})
        .then(function(retorno) {
            var cliente = retorno.data;
            cliente.data = new Date(retorno.data.data_nascimento);
            $scope.cliente = cliente;
        }).catch(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a cliente'
        });
    }

    
    $scope.salvar = function() {
        if($scope.cliente._id) {
            ClientesFactory.atualizarCLientes($scope.cliente._id, $scope.cliente)
            .then(function(){
                $scope.mensagem = "Cliente atualizado com sucesso"
            }).catch(function(erro){
                console.log(erro);
                $scope.mensagem = "Não foi possivel atualizar o cliente"
            });
        } else {
            ClientesFactory.adicionarClientes($scope.cliente)
            .then(function(retorno){
                $scope.cliente = retorno.data;
                $scope.mensagem = "Cliente cadastrado com sucesso";
            }).catch(function(error){
                console.log(error);
                $scope.mensagem = "Não foi possivel cadastrar o cliente"
            });

        }
    }

    $scope.listar = function() {
        ClientesFactory.recuperarClientes()
        .then(function(retorno){
            $scope.clientes = retorno.data;
        }).catch(function(erro){
            console.log(erro);
        });
    }

    $scope.excluir =  function(cliente) {
        ClientesFactory.deletarClientes({clienteId: cliente._id})
        .then(function(retorno){
            var clientesFiltrados = $scope.clientes.filter(function(elemento){
                return elemento._id != cliente._id;
            });
            $scope.clientes = clientesFiltrados;
            $scope.mensagem = "Cliente excluido com sucesso";
        }).catch(function(erro){
            console.log(erro);
        });
    }
    
}]);
