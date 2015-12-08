/*global Camera, CameraPopoverOptions, moment*/
'use strict';
angular.module('tourneys')
.controller('SubmitCtrl', function (
  $scope,
  $state,
  $cordovaCamera,
  $cordovaGeolocation,
  $ionicPlatform,
  $localForage
) {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};

  $ionicPlatform.ready(function () {
    $scope.takePicture = function () {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.imgURI = 'data:image/jpeg;base64,' + imageData;
      }, function (err) {
        if (err) { throw new Error(err); }
      });
    };

  });

  $scope.submit = function () {
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;

      $scope.date = moment().format('MM/DD/YYYY');
      $scope.time = moment().format('h:mm a');

      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat = position.coords.latitude;
        $scope.lng = position.coords.longitude;

        var formData = {
          imgURI: $scope.imgURI,
          date: $scope.date,
          time: $scope.time,
          latitude: $scope.lat,
          longitude: $scope.lng,
          length: $scope.length,
        };

        $localForage.getItem('submissions')
        .then(function (items) {
          return $localForage.setItem('submissions', formData);
        })
        .then(function () {
console.log('success');
            $state.go('tourneys.list');
          });
      });
    });
  };
});
