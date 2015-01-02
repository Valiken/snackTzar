'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:FulfillCtrl
 * @description
 * # FulfillCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('FulfillCtrl', ["$scope", "FireBaseServFulfilled", function ($scope, FireBaseServFulfilled) {
    var d = new Date();
    $scope.fulfilledList = FireBaseServFulfilled;
    
    //$scope.addSnack = function (sn, usr) {
    //  var n = d.toDateString();
    //  if (sn != null || sn != undefined && sn.length > 0) {
    //    console.log(sn.length);
    //    $scope.snackList.$add({fulfilled: false, name: sn, user: usr.displayName, reqDate: n});
    //  }
    //};
}]);