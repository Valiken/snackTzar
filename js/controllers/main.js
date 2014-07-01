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
    $scope.snackList = FireBaseServ;

    $scope.addSnack = function (sn) {
      var name =  sn;

      if (name != null) {
        console.log(name);
        $scope.snackList.$add({reqFulfilled: "no", snackName: name});
      }
      else {
        console.log("no snack name was entered");
      }

      $scope.snack = "";
    }

    $scope.updateSnack = function (sn) {
      var name = sn;
      if (name != null) {
        $scope.snackList.$update({ snackname: name, reqFulfilled: "yes"});
      }
    }

    $scope.removeSnack = function () {

    } 
  }]);
