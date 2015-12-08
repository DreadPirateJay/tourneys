/*global Camera, CameraPopoverOptions, moment*/
'use strict';
angular.module('main')
.controller('SubmitCtrl', function ($scope, $cordovaCamera, $cordovaGeolocation) {
  document.addEventListener('deviceready', onDeviceReady, false);

  function onDeviceReady () {
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

      $scope.date = moment().format('MM/DD/YYYY');
      $scope.time = moment().format('h:mm a');

      var posOptions = {timeout: 10000, enableHighAccuracy: false};

      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat = position.coords.latitude;
        $scope.lng = position.coords.longitude;
      });
    };
  }
});
