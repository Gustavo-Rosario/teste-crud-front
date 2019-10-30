angular.module('agenda').controller('NewClienteController', function($scope, $http){
	
	$scope.cliente = {};
	$scope.mensagem = '';

	$scope.novoCliente = true;

	$scope.submeter = function() {

		
   		$http.post('http://localhost:3333/agenda/cliente/newclient', $scope.cliente)
		.success(function() {
			$scope.mensagem ='Cliente novo cadastrado com sucesso';
		})
		.error(function(erro) {
			$scope.mensagem ='Não foi possível cadastrar o novo Cliente';
		});
	};


});

