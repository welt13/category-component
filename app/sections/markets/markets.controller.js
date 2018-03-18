/*global app*/
'use strict';
(function(app) {
    app.controller('MarketsCtrl', ['$scope', '$anchorScroll', 'MarketsSrv',
        function($scope, $anchorScroll, MarketsSrv) {
            $anchorScroll();
            $scope.markets = [];
            $scope.market = {};
            $scope.marketSelected = false;
            $scope.categories = [];
            $scope.categorySelected = null;
            $scope.subcategories = [];
            var tokenAccess =  window.localStorage.getItem('X-AUTH-TOKEN');

            $scope.changeMarket = function () {
                $scope.market = {};
                $scope.marketSelected = false;

            };
            $scope.selectMarket = function ( market ) {
                $scope.market = market;
                $scope.marketSelected = true;
                // getCategory( tokenAccess, market.id );
            };

            var getMarket = function ( token, postalcode ) {
                MarketsSrv.getMarketByPostalCode( token, postalcode ).then(function ( data ) {
                    $scope.markets = data.data.markets;
                    $scope.market = findMarket( 'mercadona' );
                    $scope.marketSelected = true;
                    // getCategory( token, $scope.market.id );
                });
            };

            var findMarket = function ( name ) {
                return $scope.markets.find(function ( market ) {
                    return market.name.toLowerCase() === name.toLowerCase();
                });
            };

            getMarket( tokenAccess, 28010 );
        }
    ]);
}(app));