'use strict';

angular.module('indicator')
.controller('IndicatorCtrl', ['$scope', function ($scope) {

  $scope.$watch('online', function (online) {
    this.toggle(online);
  }.bind(this));

  this.toggle = function (online) {
    this.color = online ? 'balanced' : 'assertive';
    this.status = online ? 'Online' : 'Offline';
  };
}]);
