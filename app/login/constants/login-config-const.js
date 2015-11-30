'use strict';

angular.module('login')
.constant('Login', {
  // gulp environment: injects environment vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-environment
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'http://localhost:8080/api/v1/',
    'LOGIN_URL': 'http://localhost:8080/api/v1/post.json?action=user_login'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  // https://github.com/mwaylabs/generator-m-ionic#gulp-build-vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }
});
