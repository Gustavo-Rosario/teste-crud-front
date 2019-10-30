angular.module('meusServicos',['ngResource'])
.factory('recursoCliente', function($resource){

     return $resource('http://localhost:3333/agenda/cliente/:clienteId', null, {
        update : {
            method: 'PUT'
        }
    });
    
});



// angular.module('meusServicos', ['ngResource'])