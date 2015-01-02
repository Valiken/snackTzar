'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:YourReqCtrl
 * @description
 * # YourReqCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('YourReqCtrl', ["$scope", "FireBaseServ", "FireBaseServFulfilled", "FireBaseServDenied", function ($scope, FireBaseServ, FireBaseServFulfilled, FireBaseServDenied) {
    $scope.snackList = FireBaseServ;
    $scope.fulfilledList = FireBaseServFulfilled;
    $scope.deniedList = FireBaseServDenied;
}]);