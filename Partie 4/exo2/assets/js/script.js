var App = angular.module('App',[]);
App.controller('voituresCtrl', function($scope,$http) {
  $http.get('assets/js/voitures.json').then(function(res){
    $scope.voitures = res.data;
  });
});
