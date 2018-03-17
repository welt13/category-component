/* global app */
'use strict';
(function (app) {
    app.config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: '',
                    controller:''
                });
        }
    ]);
}(app));
