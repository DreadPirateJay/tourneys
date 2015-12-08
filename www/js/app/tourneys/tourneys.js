'use strict';
angular.module('tourneys', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/tourneys/list');

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('tourneys', {
      url: '/tourneys',
      abstract: true,
      templateUrl: 'js/app/tourneys/templates/tabs.html'
    })
      .state('tourneys.list', {
        url: '/list',
        views: {
          'tab-tourneys': {
            templateUrl: 'js/app/tourneys/templates/list.html',
            controller: 'TourneysCtrl as ctrl',
          }
        },
      })
      // .state('main.listDetail', {
      //   url: '/list/detail',
      //   views: {
      //     'tab-list': {
      //       templateUrl: 'main/templates/list-detail.html',
      //       // controller: 'SomeCtrl as ctrl'
      //     }
      //   }
      // })
      .state('tourneys.submit', {
        url: '/submit',
        views: {
          'tab-submit': {
            templateUrl: 'js/app/tourneys/templates/submit.html',
            controller: 'SubmitCtrl as ctrl',
          }
        }
      });
});
