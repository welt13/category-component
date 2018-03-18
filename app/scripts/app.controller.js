/*global angular, app*/
'use strict';
(function (angular, app) {
	app.controller('AppCtrl', ['$rootScope', 'LoginSrv', '$state', function ($rootScope, LoginSrv, $state) {
		$rootScope.$on('serverError', function (event, data) {
        	console.log('error');
    	});

		LoginSrv.getToken().then(function ( response ) {
            window.localStorage.setItem('X-AUTH-TOKEN',response.data.token);
            $state.go('markets');
		});
}
  ]);
}(angular, app));