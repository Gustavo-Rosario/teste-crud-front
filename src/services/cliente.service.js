(function () {
    angular.module('app.cliente.factory', ['app.config'])
      .factory('ClienteFactory', ClienteFactory);
      
    ClienteFactory.$inject = ['$http', '$q', 'NODE_SERVER'];
  
    function ClienteFactory($http, $q, NODE_SERVER) {
      
        // Objeto com metodos do service
        var clienteFactory = {};

        clienteFactory.listarClientes = function() {
            return $http.get(NODE_SERVER);
        };

        return clienteFactory;
  
    };
})();