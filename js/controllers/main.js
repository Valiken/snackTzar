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
    
    $scope.isAdmin = function (usr) {
      if (usr == undefined || usr == null) {
        return true; //true to hide the buttons
      } else if ((usr.displayName == "brian berg" && usr.email == "brian.berg.cgi@gmail.com") || (usr == "billy k" && usr.email == "billy.kern.cgi@gmail.com")) {
        return false; //false to show the buttons
      }
      else {
        return true; //true to hide the buttons
      }
    };
  }
]);