var angularApp = angular.module('cricApi', ['firebase','ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'pages/form.html',
    controller: 'FormController',
    controllerAs: 'fc'
  })
});


  angularApp.controller("FormController",['$resource','$filter','$scope','$firebaseArray',function($resource,$filter,$scope,$firebaseArray){
    var teamRef =  new Firebase("https://cricapi.firebaseio.com/Teams");
    $scope.teams = $firebaseArray(teamRef);
    $scope.addTeams = function(){
      $scope.teams.$add({
        Description:$scope.description,
        Score:$scope.score,
        TeamA:$scope.teamA,
        TeamB:$scope.teamB,
        Location:$scope.location,
        Tossed:$scope.toss,


      });

      $scope.description='';
      $scope.score='';
      $scope.teamA='';
      $scope.teamB='';
      $scope.location='';
      $scope.toss='';


    };

  }]);
