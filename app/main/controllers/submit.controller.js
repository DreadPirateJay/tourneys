/*global Camera, CameraPopoverOptions*/
'use strict';
angular.module('main')
.controller('SubmitCtrl', [
  '$scope',
  '$cordovaCamera',
  function ($scope, $cordovaCamera) {
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
      };
    }
  }]);
