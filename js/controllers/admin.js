'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the snackTzarApp
 */

angular.module('snackTzarApp')
  .controller('AdminCtrl', ["$scope", "FireBaseServ", "FireBaseServLock", "FireBaseServFulfilled", "FireBaseServDenied", function ($scope, FireBaseServ, FireBaseServLock, FireBaseServFulfilled, FireBaseServDenied) {
    $scope.snackList = FireBaseServ;
    $scope.sysLock = FireBaseServLock;
    $scope.fulfilledList = FireBaseServFulfilled;
    $scope.deniedList = FireBaseServDenied;
    
    $scope.purge = function () {
      $scope.snackList.delete();
    };

    $scope.dataFix = function () {
      angular.forEach($scope.snackList, function (snk) {
        if (snk.fulfilled == false) {
          
        } else if (snk.fulfilled == true) {
          $scope.fulfilledList.$add({fulfilled: true, name: snk.name, user: snk.user, store: snk.store, fulFillDate: snk.fulFillDate});
          $scope.snackList.$child(snk.$id).$remove();
        }
      })
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