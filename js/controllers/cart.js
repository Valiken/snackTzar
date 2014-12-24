'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('CartCtrl', ["$scope", "FireBaseServ", "FireBaseServCart", function ($scope, FireBaseServ, FireBaseServCart) {
    $scope.shoppingCart = FireBaseServCart;
    $scope.yourCart = function (usr) {
      
    };
}]);