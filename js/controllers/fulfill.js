'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:FulfillCtrl
 * @description
 * # FulfillCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('FulfillCtrl', ["$scope", "FireBaseServ", function ($scope, FireBaseServ) {
    $scope.snackList = FireBaseServ;
    
}]);