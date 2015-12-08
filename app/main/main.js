'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main/tourneys');

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.tourneys', {
        url: '/tourneys',
        views: {
          'tab-tourneys': {
            templateUrl: 'main/templates/tourneys.html',
            controller: 'TourneysCtrl as ctrl',
          }
        },
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.submit', {
        url: '/list/submit',
        views: {
          'tab-submit': {
            templateUrl: 'main/templates/submit.html',
            controller: 'SubmitCtrl as ctrl',
          }
        }
      });
});
