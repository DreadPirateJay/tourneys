'use strict';

angular.module('login')
.controller('LoginCtrl', [
  'LoginService',
  '$ionicPopup',
  '$state',
  '$localForage',
  '$rootScope',
  function (
    LoginService,
    $ionicPopup,
    $state,
    $localForage,
    $rootScope
  ) {
    var ctrl = this;

    console.log($rootScope.online);

    $localForage.getItem('userId').then(function (userId) {
      if (userId) {
        $state.go('main.list');
      }
    });

    ctrl.creds = {};

    ctrl.login = function () {
      LoginService.loginUser(ctrl.creds.username, ctrl.creds.password).success(function (data) {
        $localForage.setItem('userId', data.data);
        $state.go('main.list');
      }).error(function () {
        $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    };
  }]);
