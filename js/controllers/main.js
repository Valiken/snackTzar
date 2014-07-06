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
    console.log($scope.snackList);
    $scope.addSnack = function (sn, usr) {
      var usr = usr.displayName;
      if (name != null) {
        $scope.snackList.$add({fulfilled: false, name: sn, user: usr});
      }
      else {
        console.log("no snack name was entered");
      }
    };
    
    $scope.reset = function () {
      $scope.snack = "";
    };
    
    $scope.updateSnack = function (snk) {
      console.log(snk.$id);
      if (snk != null) {
        $scope.snackList.$child(snk.$id).$set({fulfilled: true, name: snk.name, user: snk.user});
      }
    };

    $scope.removeSnack = function (snk) {
      if (snk != null) {
        $scope.snackList.$child(snk.$id).$remove();
      }
    };
    
    $scope.isAdmin = function (usr) {
      if (usr == "brian berg" || usr == "billy kern") {
        return false //false to show the button
      }else {
        return true //true to hide it
      }
    };
  }
]);