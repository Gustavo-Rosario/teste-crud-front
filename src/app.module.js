(function () {
    angular.module('app', [
        'app.runner',
        /* rotas */
        'app.routes',

        /* MODULOS */
        'app.cliente.listagem',

        /* libs */
        'angularytics',
        'ngOrderObjectBy',
        'ui.utils.masks',
        'ui.bootstrap',
        'ui.mask',
        'ui.select',
        'ngSanitize',
        'credit-cards',
        'toaster',
        'ngAnimate',
        'firebase',
        'angular-peity',
        '720kb.tooltips',
        'luegg.directives',
        'angularInlineEdit',
        'ngIdle',
        'ngFileUpload',
        'jlareau.bowser',
        'chart.js',
        'ngMap',
        'bootstrapLightbox',
        'angular-toArrayFilter',
        'angularMoment',
        'angular-bind-html-compile',
        'ngValid',
        'ngCsv',
        'vcRecaptcha',
        'ngtweet'
    ])

    .config(function ($compileProvider) {
        //$compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
    })

    .config(['$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }])

    .filter('to_trusted', ['$sce', function($sce) {
        return function(text) {
            return $sce.trustAsHtml(text);
        }
    }])
    .filter('to_trusted_url', ['$sce', function($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }])  
    .directive('compile',function($compile, $timeout){
        return{
            restrict:'A',
            link: function(scope,elem,attrs){
                $timeout(function(){                
                    $compile(elem.contents())(scope);    
                });
            }        
        };
    })
    .directive('map', function(){
        return {
            priority: 99,
            terminal: true
        };
    });
})();
    