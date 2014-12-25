'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snackTzarApp
 */

angular.module('snackTzarApp')
  .controller('MainCtrl', ["$scope", "FireBaseServ", "FireBaseServCart", function ($scope, FireBaseServ, FireBaseServCart) {
    var d = new Date();
    $scope.snackList = FireBaseServ;
    $scope.shoppingCart = FireBaseServCart;
    
    $scope.stores = [
      {name: 'Costco'},
      {name: 'Trader Joes'},
      {name: 'CVS'},
      {name: 'Raplhs'}
      // and so on
    ];

    $scope.addSnack = function (sn, usr, str) {
      console.log(usr);
      var n = d.toDateString();
      if (sn != null || sn != undefined && sn.length > 0) {
        if (str == undefined)
        {
          str = "none"
        }
        $scope.snackList.$add({fulfilled: false, name: sn, user: usr.displayName, store: str, reqDate: n});
      }
    };

    $scope.reset = function () {
      $scope.snack = null;
    };

    $scope.updateSnack = function (snk) {
      if (snk != null) {
        var n = d.toDateString();
        $scope.snackList.$child(snk.$id).$set({fulfilled: true, name: snk.name, user: snk.user, store: snk.store, fulFillDate: n});
      }
    };

    $scope.removeSnack = function (snk) {
      if (snk != null) {
        $scope.snackList.$child(snk.$id).$remove();
      }
    };

    $scope.addToCart = function (usr) {
      //if ($scope.shoppingCart.$child(usr.displayName) != null) {
      //  $scope.shoppingCart.$child(usr.displayName).$remove();
      //}
      angular.forEach($scope.snackList, function(snack) {
        if (snack.fulfilled == false) {
          $scope.shoppingCart.$add({snack: snack.name, found: false, cartUsr: usr.displayName});
        }
      })
    };

    $scope.isAdmin = function (usr) {
      if (usr == undefined || usr == null) {
        return true; //true to hide the buttons
      } else if ((usr.displayName == "brian berg" && usr.email == "brian.berg.cgi@gmail.com") || (usr.displayName == "billy k" && usr.email == "billy.kern.cgi@gmail.com")) {
        return false; //false to show the buttons
      } else {
        return true; //true to hide the buttons
      }
    };
  }
]);