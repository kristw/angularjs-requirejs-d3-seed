define([
  './controllers'
], function (controllers) {
  'use strict';

  controllers.controller('mainCtrl', ['$scope', function ($scope) {

    // Set initial values
    $scope.options = {width: 500, height: 300};
    $scope.data = [1,3,5,10,22,11,9,4,20,10];
    $scope.barValue = 'null';

    // Add method
    $scope.onHover = function(d){
      $scope.$apply(function(){
        $scope.barValue = d;
      });
    };

  }]);
});