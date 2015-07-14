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
  'ngRoute',
  'ngSanitize']);

app.value("Firebase", Firebase);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl'
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
    .when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'AdminCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('FireBaseServ', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/snackList"));
  return ref;
}])
.factory('FireBaseServFulfilled', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/fulfilledList"));
  return ref;
}])
.factory('FireBaseServDenied', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/deniedList"));
  return ref;
}])
.factory('FireBaseServLock', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/sysLock"));
  return ref;
}])
.factory('FireBaseServCart', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/cart"));
  return ref;
}])
.factory('FireBaseServAdmin', ["$firebase", function ($firebase) {
  var URL = "https://glaring-fire-6519.firebaseIO.com";
  var ref = $firebase(new Firebase(URL + "/adminUsr"));
  return ref;
}]);

app.controller('FireBaseLoginCtrl', ["$scope", "$firebaseSimpleLogin", function ($scope, $firebaseSimpleLogin) {
  var auth = new Firebase("https://glaring-fire-6519.firebaseIO.com");
  $scope.loginObj = $firebaseSimpleLogin(auth, function(error, user) {
  });
}])
.controller('HeaderCtrl', ["$scope", "$location", "FireBaseServAdmin", function($scope, $location, FireBaseServAdmin) {

  $scope.adminUsr = FireBaseServAdmin;

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.isAdmin = function (usr) {
  //  if (usr != undefined || usr != null) {
  //    angular.forEach($scope.adminUsr, function (admUsr) {
  //      if (usr.displayName == admUsr.name && usr.email == admUsr.email) {
  //        return false;
  //      } else {
  //        return true;
  //      }
  //    })
  //  } else {
  //    return true; //true to hide the buttons
  //  }
    if (usr == undefined || usr == null) {
      return true;
    } else if ((usr.displayName == "brian berg" && usr.email == "brian.berg.cgi@gmail.com") || (usr.displayName == "billy k" && usr.email == "billy.kern.cgi@gmail.com")) {
      return false; //false to show the buttons
    }
    else {
      return true; //true to hide the buttons
    }
  };
}]);

app.filter('userFilter', function() {
  return function(items, usr) {
    console.log(usr);
    var filtered = [];

    for (var i = 0; i < items.length; i++ ) {
      var item = items[i];

      if (item.user === usr) {
        filtered.push(item);
      }
    }

    return filtered;
  };
});

app.config(['$compileProvider', function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);
}]);
