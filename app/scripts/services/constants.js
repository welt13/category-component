/*global app*/

'use strict';

(function (app) {

    app
        .value('sessionURL','/user/session')
        .value('marketPostalCodeURL','/user/postalcode')
        .value('categoriesURL','/company/categories')
        .value('marketURL','/tienda/')

    ;

    app.factory('servicesBaseURL', [function() {
        return 'http://api.comprea.com';
    }]);
}(app));