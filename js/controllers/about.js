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
      {desc: "Add ability for an admin account to delete duplicate requests"},
      {desc: "Add ability to update a request to reflect that it has been fulfilled."},
      {desc: "Add a new page that allows for fulfilled requests to be viewed."},
      {desc: "Add the ability to take a fulfilled request and make a new request off of it."},
      {desc: "Add better abilities to track who orders what, even though the NSA is already tracking it."},
      {desc: "Add ability to print out the list of snacks."}
    ];
    $scope.bugList = [
      {desc: "The search feature on the main page does not currently work, which is why it is disabled."},
      {desc: "Active page link highlighting is currently broken, working  on a fix."}
    ];    
});