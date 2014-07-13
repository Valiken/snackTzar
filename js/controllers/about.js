'use strict';

/**
 * @ngdoc function
 * @name snackTzarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the snackTzarApp
 */
angular.module('snackTzarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.todoList = [
      {desc: "Add the ability to take a fulfilled request and make a new request off of it."},
      {desc: "Add better abilities to track who orders what, even though the NSA is already tracking it."},
      {desc: "Add ability to print out the list of snacks."}
    ];
    $scope.bugList = [
      {desc: "None Currently!"}
    ];
});