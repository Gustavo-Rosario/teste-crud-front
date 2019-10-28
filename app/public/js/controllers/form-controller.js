angular.module('seguropic')
    .controller('FormController', function($scope, $resource, $routeParams) {
        $scope.modal = {
            titulo : 'Dados do declarante'};  
            $scope.app = "Formulário para abertura de Sinistro"; 
            $scope.segurado = {};

            var recursoSegurado = $resource('http://localhost:3001/api/segurados/:seguradoId', null, {
                update : {
                    method: 'PUT'
                }
            });            

            if($routeParams.seguradoId) {
                recursoSegurado.get({seguradoId : $routeParams.seguradoId}, function(segurado) {
                    $scope.segurado = segurado;
                },
                function(erro) {
                    console.log(erro);
                    console.log('Não foi possível realizar a alteração solicitada !');
                });
            }
            
        $scope.adicionaSegurado = function (segurado) { 
            console.log(segurado);
            if($scope.segurado._id) {
                recursoSegurado.update({seguradoId : $scope.segurado._id}, $scope.segurado,function() {
                    console.log('Segurado atualizado com sucesso')
                }, function(erro) {
                    console.log(erro);
                    console.log('Não foi possível atualizar o segurado');
                });              
            } else {
                recursoSegurado.save($scope.segurado, function() {
                    $scope.segurado = {};
                    console.log('Segurado cadastrado com sucesso');
                }, function(erro) {
                    console.log(erro);
                    console.log('Não possível realizar essa operação');
                });
            }
        }





            

        //     if($routeParams.seguradoId) {
        //         $http.get('http://localhost:3001/api/segurados/' + $routeParams.seguradoId)
        //         .success(function(segurado) {
        //             $scope.segurado = segurado;
        //         })
        //         .error(function(erro) {
        //             console.log(erro);
        //             console.log('Não foi possível realizar a alteração solicitada !');
        //         })
        //     }
            
        // $scope.adicionaSegurado = function (segurado) { 
        //     console.log(segurado);
        //     if($routeParams.seguradoId) {
        //         $http.put('http://localhost:3001/api/segurados/' + $scope.segurado._id, $scope.segurado)
        //         .success(function(segurado) {
        //             console.log('Segurado atualizado com sucesso')
        //         })
        //         .error(function(erro) {
        //             console.log(erro);
        //             console.log('Não foi possível atualizar o segurado');
        //         })                   
        //     } else {
        //         $http.post('http://localhost:3001/api/segurados', $scope.segurado)
        //         .success(function () { 
                    
        //             console.log('Segurado cadastrado com sucesso');                       
        //         })
        //         .error(function(erro) {
        //             console.log(erro);
        //         });
        //     }
        // }
});