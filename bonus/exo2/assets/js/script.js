var showMessage = angular.module('message', []);
showMessage.controller('messController', function ($scope, $window) {
  $scope.displayAlert = function () {
    $window.alert('blabla');
  };
});
