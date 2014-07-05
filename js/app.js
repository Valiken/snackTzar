'use strict';

/**
 * @ngdoc overview
 * @name snackTzarApp
 * @description
 * # snackTzarApp
 *
 * Main module of the application.
 */

 var app = angular.module('snackTzarApp', [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch']);
  
  app.value("Firebase", Firebase);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/fulfilled', {
        templateUrl: 'views/fulfill.html',
        controller: 'FulfillCtrl'
      })
      .when('/yourReqs', {
        templateUrl: 'views/yourReqs.html',
        controller: 'YourReqCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.factory('FireBaseServ', ["$firebase", function ($firebase){
    var URL = "https://glaring-fire-6519.firebaseIO.com";
    var ref = $firebase(new Firebase(URL + "/snackList"));

    return ref;
  }]);
  
  app.controller('FireBaseLoginCtrl', ["$scope", "$firebaseSimpleLogin", function ($scope, $firebaseSimpleLogin) {
    var auth = new Firebase("https://glaring-fire-6519.firebaseIO.com");
    $scope.loginObj = $firebaseSimpleLogin(auth, function(error, user) {
      if (!error) {
        //success!
      }
    });
  }])
  .controller('HeaderCtrl', ["$scope", "$location", function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }])

