'use strict';

angular.module('events', [
  'ionic',
  'ngCordova',
  'ui.router',
])
.config(function ($stateProvider) {
  $stateProvider
  .state('events', {
    url: '/events',
    abstract: true,
    templateUrl: 'events/templates/events.html',
  })
  .state('events.register', {
    url: '/register',
    views: {

    }
  });
});
