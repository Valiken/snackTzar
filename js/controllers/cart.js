'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('CartCtrl', ["$scope", "FireBaseServ", "FireBaseServCart", function ($scope, FireBaseServ, FireBaseServCart) {
    $scope.cart = FireBaseServCart;
    $scope.snackList = FireBaseServ;
    
    console.log($scope.snackList);
    console.log($scope.cart);
    
    $scope.cartUpdate = function (itm) {
      console.log(itm);
      if(itm.found == true) {
        $scope.cart.$child(itm.$id).$set({cartUsr: itm.cartUsr, found: false, store: itm.store, snack: itm.snack});
      } else {
        $scope.cart.$child(itm.$id).$set({cartUsr: itm.cartUsr, found: true, store: itm.store, snack: itm.snack});
      }
    };
    
    $scope.cartRemove = function (itm) {
      if (itm != null) {
        $scope.cart.$child(itm.$id).$remove();
      }
    };
    
    $scope.cartRemoveAll = function (usr) {
      angular.forEach($scope.cart, function(itm){
          if (itm.cartUsr == usr.displayName) {
           $scope.cart.$child(itm.$id).$remove();
          }
      })
    };
}]);