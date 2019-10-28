angular.module('seguropic')
    .controller('CrudController', function ($scope, $http, $resource) { 

                $scope.segurados = [];
                $scope.card1 = "Formulário";
                $scope.card2 ="Abertura Sinistro";
                $scope.cardParagrafo ="Clique no botão abaixo e preencha o formulário com os dados requeridos.";
                $scope.modal = {
                titulo : 'Dados do declarante'};               
             
                var recursoSegurado = $resource('http://localhost:3001/api/segurados/:seguradoId');
                    
                recursoSegurado.query(function(segurados) {
                    $scope.segurados = segurados;
                }, function(erro) {
                    cconsole.log(erro);
            });
                //     const listarSegurados = function(){
                //     $http.get('http://localhost:3001/api/segurados').success(function(data) {
                //         $scope.segurados = data;
                //         console.log(data);
                //     }).error(function(erro) {
                //         console.log(erro);
                //     });
                // };               

                $scope.remover = function(segurado) {
                    
                    recursoSegurado.delete({seguradoId : segurado._id }, function() {
                        console.log('Dado selecionado foi removido com sucesso !');
                    }, function(erro) {
                        console.log(erro);
                        console.log('Não foi possível remover este segurado !');
                    });
                };

                //     $http.delete('http://localhost:3001/api/segurados/' + segurado._id)
                //     .success(function() {
                //             console.log('Dado selecionado foi removido com sucesso !');
                //             listarSegurados();
                //     })
                //     .error(function(erro) {
                //         console.log(erro);
                //         console.log('Não foi possível remover este segurado !');
                //     });
                // };
    
    // filtro
     
      $scope.buscaSegurado = '';  
                
    //   listarSegurados();
               
});