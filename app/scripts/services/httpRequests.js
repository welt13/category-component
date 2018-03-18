/*global angular, app */

'use strict';

(function (angular, app) {


    app.factory('httpRequestsSrv', ['$http', 'servicesBaseURL', function ($http, servicesBaseURL) {

            var get = function (configuracion) {

                var peticionConfig = {
                    url: null,
                    params: null
                };

                var auxBaseURL = servicesBaseURL;

                angular.extend(peticionConfig, configuracion);

                return $http({
                     method: 'GET',
                     url: auxBaseURL + peticionConfig.url,
                     params: peticionConfig.params
                 });
            };

            return {
                get: get
            };
        }
    ]);

}(angular, app));