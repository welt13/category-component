/* global app */
'use strict';
(function (app) {
    app.config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('markets', {
                    url: '/markets',
                    templateUrl: 'sections/markets/markets.html',
                    controller:'MarketsCtrl'
                });
        }
    ]);
}(app));
