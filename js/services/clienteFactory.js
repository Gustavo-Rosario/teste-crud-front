angular.module("projeto").factory("ClientesFactory", ClientesFactory);
    
    ClientesFactory.$inject = ['$http'];
    
    function ClientesFactory($http){
    
        var servico = {};
    
        //Indexagem de metodos
        servico.recuperarClientes = recuperarClientes;
        servico.atualizarCLientes = atualizarCLientes;
        servico.adicionarClientes = adicionarClientes;
        servico.deletarClientes = deletarClientes;
        servico.buscarCLientes = buscarCLientes;
    
        //METODOS
        function recuperarClientes(){
            return $http.get("http://localhost:8081/lista");
        };

        function atualizarCLientes(a,b){
            return $http.put("http://localhost:8081/atualiza/" + a, b);
        };

        function adicionarClientes(informacoes){
            return $http.post("http://localhost:8081/cadastrar", informacoes);
        };

        function deletarClientes(remover){
            console.log(remover);
            return $http.post("http://localhost:8081/remover/" + remover.clienteId);
        };

        function buscarCLientes(buscar){
            return $http.get("http://localhost:8081/buscar/" + buscar.clienteId);
        };

        return servico;

    };
