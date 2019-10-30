angular.module('agenda').controller('AgendaController', function($scope, recursoCliente ){

    $scope.clientes = [];
    $scope.mensagem = '';
    
   
    recursoCliente.query(function(clientes){
      $scope.clientes = clientes;
    }, function(erro){
        console.log(erro);

    });

       // remove o cliente.
    $scope.remover = function(cliente){
      
      recursoCliente.delete({clienteId : cliente._id}, function(){
        const indiceCliente = $scope.clientes.indexOf(cliente);
        $scope.clientes.splice(indiceCliente, 1); 
        $scope.mensagem= 'Cliente Removido do Banco de Dados!';

      }, function(erro){
        console.log(erro)
        $scope.mensagem = 'Não foi possivel Remover!';

      });
      
      

    };


    $scope.idade = function(Datanasc){
      // var dataAtual = new Date();
      //   var idade = Datanasc - dataAtual;
          var d = new Date();
            var n = d.getFullYear();
            var Datanascimento = new Date(Datanasc);
            var Dataidade = Datanascimento.getFullYear();
  
            var idade = (n - Dataidade); 
  
            return idade;
    };
  



    //REMOVE CLIENTE DO BANCO DE DADOS
    // $scope.removerCliente = function(clienteId){
    //   console.log($scope.clienteAtual);
    //   $scope.clienteAtual = clienteId;
  
    // };


    // $scope.remover = function(filtercliente){
    //   console.log(filtercliente);

    // $scope.clientes = $scope.clientes.filter(function(cliente){
    //     return cliente.Id != filtercliente;
    // });
    
      //   $http.delete('agenda/cliente/'+ cliente_id)
    //   .success(function(){
    //     console.log('cliente' + cliente.nome + 'foi removido');
    //   })
    //   .error(function(erro){
    //     console.log(erro);
    //     console.log('Erro cliente não foi removido');
    //   })
    // };
    

    

    // $scope.editarcliente = true;
    $scope.novocliente = true;
});


// $scope.nascimento = function(Datanasc){
//     // var dataAtual = new Date();
//     //   var idade = Datanasc - dataAtual;
//             var d = new Date();
//               var n = d.getFullYear();
//               var Datanascimento = new Date(Datanasc);
//               var Dataidade = Datanascimento.getFullYear();

//               var nascimento = (n - Dataidade); 

//               return nascimento;
// };