'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snackTzarApp
 */

angular.module('snackTzarApp')
  .controller('MainCtrl', ["$scope", "FireBaseServ", "FireBaseServFulfilled", "FireBaseServDenied", "FireBaseServCart", function ($scope, FireBaseServ, FireBaseServFulfilled, FireBaseServDenied, FireBaseServCart) {
    var d = new Date();
    $scope.snackList = FireBaseServ;
    $scope.cart = FireBaseServCart;
    $scope.fulfilledList = FireBaseServFulfilled;
    $scope.deniedList = FireBaseServDenied;
    
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
        $scope.fulfilledList.$add({fulfilled: true, name: snk.name, user: snk.user, store: snk.store, fulFillDate: n});
        $scope.snackList.$child(snk.$id).$remove();
      }
    };

    $scope.removeSnack = function (snk) {
      if (snk != null) {
        var n = d.toDateString();
        $scope.deniedList.$add({fulfilled: snk.fulfilled, name: snk.name, user: snk.user, store: snk.store, deniedDate: n});
        $scope.snackList.$child(snk.$id).$remove();
      }
    };

    $scope.removeAll = function (usr) {
      angular.forEach($scope.cart, function(itm){
        if (itm.cartUsr == usr.displayName) {
           $scope.cart.$child(itm.$id).$remove();
        }
      })
    }

    $scope.addToCart = function (usr) {
      try {
        if ($scope.cart != null) {
          $scope.removeAll(usr);
        }
      } catch (e) {
        console.log("Oops it appears as though the cart was empty" + ' ' + e);
      } finally {
        angular.forEach($scope.snackList, function(snk) {
          if (snk.fulfilled == false) {
            $scope.cart.$add({snack: snk.name, found: false, store: snk.store, cartUsr: usr.displayName});
          }
        })
      }
    };

    $scope.isAdmin = function (usr) {
      if (usr != undefined || usr != null) {
        angular.forEach($scope.adminUsr, function (admUsr) {
          if (usr.displayName == admUsr.name && usr.email == admUsr.email) {
            return false;
          } else {
            return true;
          }
        })
      } else {
        return true; //true to hide the buttons
      }
    //  if (usr == undefined || usr == null) {
    //    return true; //true to hide the buttons
    //  } else if ((usr.displayName == "brian berg" && usr.email == "brian.berg.cgi@gmail.com") || (usr.displayName == "billy k" && usr.email == "billy.kern.cgi@gmail.com")) {
    //    return false; //false to show the buttons
    //  } else {
    //   return true; //true to hide the buttons
    //  }
    };
  }
]);