'use strict';
angular.module('tourneys')
.controller('TourneysCtrl', ['$scope', function ($scope) {
  $scope.tourneys = [
    { id: 1, title: 'Club Tournaments', icon: 'ion-trophy' },
    { id: 2, title: 'Charity Tournaments', icon: 'ion-trophy' },
    { id: 3, title: 'Archive Tournaments', icon: 'ion-trophy' },
  ];
}]);
