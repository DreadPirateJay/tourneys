'use strict';

angular.module('login', [
  'ionic',
  'ngCordova',
  'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'login/templates/login.html',
    controller: 'LoginCtrl as ctrl',
  });
});
