'use strict';

angular.module('login')
.service('LoginService', function ($q, $http, Config) {
  return {
    loginUser: function (name, pw) {
      return $http.post(Config.ENV.SERVER_URL, { username: name, password: pw });
    }
  };
});
