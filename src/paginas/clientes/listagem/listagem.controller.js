(function () {
    angular.module('app.cliente.listagem')
    .controller('ListagemClienteCtrl', ListagemClienteCtrl);

    ListagemClienteCtrl.$inject = ['$scope', '$state', '$stateParams', 'toaster', 'ClienteFactory'];

    function ListagemClienteCtrl($scope, $state, $stateParams, toaster, ClienteFactory){
        //==========================
        //====== ATRIBUTOS =========
        //==========================
        var vm = this; // Variavel do controller para a view (View Model)


        //==========================
        //====== METODOS ===========
        //==========================
        _init();

        /**
         * Inicializador do controller
         */
        function _init(){
            _listarClientes();
        }

        /**
         * Busca clientes na base de dados e retorna para a variavel de lista
         */
        function _listarClientes(){
            ClienteFactory.listarClientes()
            .then(function(dados){
                // Verifica se dados foram retornado com sucesso
                if(dados.success){
                    $scope.clientes = dados.clientes;
                }else{
                    toaster.warning('Atenção', 'Nenhum cliente encontrado.');
                }
            }).catch(function(err){
                toaster.error('Atenção', 'Erro ao carregar clientes.');
            });
        }

    }
});