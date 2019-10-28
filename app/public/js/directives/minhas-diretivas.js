    angular.module('minhasDiretivas', [])
    

    .directive('minhaTabela', function (){

        var ddo = {};

        ddo.restric = "AE";

        ddo.transclude= true;

        ddo.templateUrl = 'html/code-tab.html';

        return ddo;

})

   .directive('meuFormulario', function () {
    
        
        var ddo = {};

        ddo.restric = "AE";

        ddo.transclude= true;

        ddo.templateUrl = 'html/code-form.html';

        return ddo;
        
    })


    .directive('meuNav', function (){

        var ddo = {};

        ddo.restric = "AE";

        ddo.transclude= true;

        ddo.templateUrl = 'html/code-nav.html';

        return ddo;

})

    .directive('meuHome', function (){

        var ddo = {};

        ddo.restric = "AE";

        ddo.transclude= true;

        ddo.templateUrl = 'html/code-home.html';

        return ddo;

});