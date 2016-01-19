(function () {
  'use strict';
  angular.module('Mockster.Prototype', []);

  angular.module('Mockster.Prototype')
    .controller("TestController", function($scope){
      $scope.test = "Server listening on http://localhost:8081";
      $scope.testUrl = "http://localhost:8081/connect/bingo75";
    });
})();
