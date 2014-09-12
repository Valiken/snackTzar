'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snackTzarApp
 */

angular.module('snackTzarApp')
  .controller('MainCtrl', ["$scope", "FireBaseServ", function ($scope, FireBaseServ) {
    var d = new Date();
    $scope.snackList = FireBaseServ;
    
    $scope.addSnack = function (sn, usr) {
      var n = d.toDateString();
      if (sn != null || sn != undefined && sn.length > 0) {
        console.log(sn.length);
        $scope.snackList.$add({fulfilled: false, name: sn, user: usr.displayName, reqDate: n});
      }
    };
    
    $scope.reset = function () {
      $scope.snack = "";
    };
    
    $scope.updateSnack = function (snk) {
      if (snk != null) {
        var n = d.toDateString();
        $scope.snackList.$child(snk.$id).$set({fulfilled: true, name: snk.name, user: snk.user, fulFillDate: n});
      }
    };

    $scope.removeSnack = function (snk) {
      if (snk != null) {
        $scope.snackList.$child(snk.$id).$remove();
      }
    };
  }
]);