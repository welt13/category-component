/*global app*/
'use strict';
(function(app) {
    app.controller('CategoryCtrl', ['$scope', '$anchorScroll', 'CategorySrv', '$location',
        function($scope, $anchorScroll, CategorySrv, $location) {
            $anchorScroll();
            $scope.categories = [];
            $scope.categoryChecked = true;
            $scope.subcategories = [];
            $scope.subcategoryChecked = false;
            var tokenAccess =  window.localStorage.getItem('X-AUTH-TOKEN');

            $scope.selectCategory = function ( category ) {
                if ( category !== undefined ) {
                    if ( !category.selected ) {
                        $location.hash(category.name);
                        $scope.categories.find( function ( category ) {
                            category.selected = false;
                        } );
                        category.selected = true;
                        $scope.subcategories = category.categories;
                    }
                    else {
                        category.selected = false;
                        $scope.subcategoryChecked = false;
                        $scope.subcategories.find(function ( subcategory ) {
                            subcategory.selected = false;
                        });
                        $scope.subcategories = [];
                    }
                } else {
                    $scope.categoryChecked = true;
                    $scope.subcategoryChecked = false;
                    $scope.subcategories.find(function ( subcategory ) {
                        subcategory.selected = false;
                    });
                }
            };

            $scope.getProductsCategory = function ( category, subcategory ) {
                $scope.categoryChecked = false;
                if ( subcategory === undefined ) {
                    subcategory = {
                        name:''
                    };
                    $scope.subcategoryChecked = true;
                } else {
                    $scope.subcategoryChecked = false;
                }

                $scope.subcategories.find(function ( subcategory ) {
                    subcategory.selected = false;
                });
                subcategory.selected = true;
                CategorySrv.getProductsCategory( tokenAccess, $scope.market.name, category.name, subcategory.name ).then(function ( data ) {
                    console.log(data.data);
                });
            };

            var getCategory = function ( token, company_id ) {
                CategorySrv.getCategory( token, company_id ).then(function ( data ) {
                    $scope.categories = data.data.categories;
                });
            };

            getCategory( tokenAccess, $scope.market.id );
        }
    ]);
}(app));