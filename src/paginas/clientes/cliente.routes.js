(function (){
    angular.module('app.cliente.routes', [
        'app.cliente.listagem'
    ])
    .config(function ($stateProvider){
        $stateProvider
        //Define uma rota
        .state('clienteListagem', {
            url: '/cliente/lista',
            templateUrl: 'paginas/clientes/listagem/listagem.view.html',
            controller: 'ListagemClienteCtrl',
            controllerAs: 'listCCtrl',
            params: {
                    
            }
        });
    });
})();