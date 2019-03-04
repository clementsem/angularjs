var validForm = angular.module('validForm',[]);
validForm.controller('formCtrl', ['$scope',function($scope){
  $scope.nameCheck = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
  $scope.mailCheck = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;
  $scope.topicCheck = /^[A-Za-z0-9-, À-ÖØ-öø-ÿ]+$/;
}]);
