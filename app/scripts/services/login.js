/* global app*/

'use strict';

(function(app) {

    app.factory('LoginSrv', ['$q', 'httpRequestsSrv', 'sessionURL',
        function($q, httpRequestsSrv, sessionURL) {

            var getToken = function () {
                var configuration = {
                    url: sessionURL
                };
                return httpRequestsSrv.get( configuration );
            };

            return {
                getToken: getToken
            };
        }
    ]);

}(app));