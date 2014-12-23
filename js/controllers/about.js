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
      {desc: "Improvements to admin feature sets"},
      {desc: "Adding a shopping cart page for users who are going shopping"},
      {desc: "Improvements to UI / UX experience"},
      {desc: "Mas Features Por Favor!"}
    ];
    $scope.bugList = [
      {desc: "If button to request snacks is pressed numerous times while field is blank you can make the application break and add blank entries."},
      {desc: "Certain cosmetic issues happen when page shrinks to responsive sizes."},
      {desc: "Small admin buttons can easily cause accidental fulfillments or denials of requests"},
      {desc: "Admin page is buggy and woefully undered utilized"},
      {desc: "Application allows users to add requests in that break formatting"},
      {desc: "Application has no way of determining or allowing input of suggested stores"},
      {desc: "Data does not support the use of user input for stores"},
      {desc: "Admin page / features is poorly implemented, needs to be reconfigured"},
      {desc: "Due to growing and unforseen use cases much of the backend needs to be retooled to follow better coding practices"}
    ];
});