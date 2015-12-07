'use strict';

angular.module('indicator')
.directive('txOnlineIndicator', function () {

  return {
    restrict: 'E',
    templateUrl: 'indicator/templates/indicator.html',
    controller: 'IndicatorCtrl',
    controllerAs: 'ctrl'
  };
});
