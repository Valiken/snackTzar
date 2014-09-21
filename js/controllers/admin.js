'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the snackTzarApp
 */

angular.module('snackTzarApp')
  .controller('AdminCtrl', ["$scope", "FireBaseServ", "FireBaseServLock", function ($scope, FireBaseServ, FireBaseServLock) {
    $scope.snackList = FireBaseServ;
    $scope.sysLock = FireBaseServLock;

    $scope.purge = function () {
      $scope.snackList.delete();
    };

    $scope.lock = function () {
      $scope.sysLock.$child("isLocked").$set(true);
    };

    $scope.unlock = function () {
      $scope.sysLock.$child("isLocked").$set(false);
    };

    $scope.checkLock = function () {
      return $scope.sysLock.isLocked;
    };
  }
]);