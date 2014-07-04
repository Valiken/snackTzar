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
    
    $scope.addSnack = function (sn, usr) {
      var name =  sn;
      var user = usr.displayName;
      if (name != null) {
        $scope.snackList.$add({reqFulfilled: "no", snackName: name, userName: user});
      }
      else {
        console.log("no snack name was entered");
      }
    };
    
    $scope.reset = function () {
      $scope.snack = "";
    };
    
    $scope.updateSnack = function (sn) {
      var name = sn;
      if (name != null) {
        $scope.snackList.$update({ snackname: name, reqFulfilled: "yes"});
      }
    };

    $scope.removeSnack = function () {

    };
  }
]);
