/* global app*/

'use strict';

(function(app) {

	app.factory('CategorySrv', ['$q', 'httpRequestsSrv', 'categoriesURL', 'marketURL',
		function($q, httpRequestsSrv, categoriesURL, marketURL) {

			var getCategory = function ( token, company_id ) {
                var configuration = {
                    url: categoriesURL,
                    params: {
                        token: token,
                        company_id: company_id
                    }
                };
                return httpRequestsSrv.get( configuration );
            };

			var getProductsCategory = function ( token, market, category, sub_category ) {
			    var url = marketURL + market + '/' + category;
			    if ( sub_category !== '' ) {
			        url += '/' + sub_category;
                }
                var configuration = {
                    url: url,
                    params: {
                        token: token
                    }
                };
                return httpRequestsSrv.get( configuration );
            };

			return {
                getCategory: getCategory,
                getProductsCategory: getProductsCategory
			};
		}
	]);

}(app));