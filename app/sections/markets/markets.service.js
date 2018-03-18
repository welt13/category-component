/* global app*/

'use strict';

(function(app) {

    app.factory('MarketsSrv', ['$q', 'httpRequestsSrv', 'marketPostalCodeURL',
        function($q, httpRequestsSrv, marketPostalCodeURL) {

            var getMarketByPostalCode = function ( token, postalcode ) {
                var configuration = {
                    url: marketPostalCodeURL,
                    params: {
                        token: token,
                        postalcode: postalcode
                    }
                };
                return httpRequestsSrv.get( configuration );
            };

            return {
                getMarketByPostalCode:getMarketByPostalCode
            };
        }
    ]);

}(app));