'use strict';

angular.module('login')
.service('LoginService', function ($q, $http) {
  return {
    loginUser: function (name, pw) {
      return $http.get('https://dev.tourneyx.com/api/v1/post.json?action=user_login&username=' + name + '&password=' + pw);
    }
  };
});
