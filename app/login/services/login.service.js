'use strict';

angular.module('login')
.service('LoginService', function ($q, $http, Config) {
  return {
    loginUser: function (name, pw) {
      return $http.get(Config.ENV.LOGIN_URL + '&username=' + name + '&password=' + pw);
    }
  };
});
