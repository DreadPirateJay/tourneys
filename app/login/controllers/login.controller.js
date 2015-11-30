'use strict';

angular.module('login')
.controller('LoginCtrl', function (LoginService, $ionicPopup, $state, $log) {
  var ctrl = this;

  ctrl.creds = {};

  ctrl.login = function () {
    LoginService.loginUser(ctrl.creds.username, ctrl.creds.password).success(function () {
      $state.go('main.list');
    }).error(function () {
      $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };
});
