(function () {
    angular.module('app.runner')
      .controller('AppRunnerController', AppRunnerController);
  
    AppRunnerController.$inject = ['$scope', '$rootScope', '$state', '$q'];
  
    function AppRunnerController($scope, $rootScope, $state, $q) {
        var vm = this;
        moment.locale('pt-br');

        vm.callFunction = function (name){
            if (name) {
                angular.isFunction(vm[name])
                vm[name]()
            };
        };
    };
})();