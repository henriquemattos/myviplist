'use strict';

// Declare app level module which depends on views, and components
angular.module('myVipList', [
  'ngRoute',
  'myVipList.view1',
  'myVipList.view2',
  'myVipList.version',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
