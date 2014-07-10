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

      if (sn != null || sn != undefined && sn.length > 0) {
        console.log(sn.length);
        $scope.snackList.$add({fulfilled: false, name: sn, user: usr.displayName});
      }

    };
    
    $scope.reset = function () {
      $scope.snack = "";
    };
    
    $scope.updateSnack = function (snk) {
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
      if (usr == undefined || usr == null) {
        return true; //true to hide the buttons
      } else if (usr.displayName == "brian berg" && usr.email == "brian.berg.cgi@gmail.com" || usr == "billy kern") {
        return false; //false to show the buttons
      }
      else {
        return true; //true to hide the buttons
      }
    };
  }
]);