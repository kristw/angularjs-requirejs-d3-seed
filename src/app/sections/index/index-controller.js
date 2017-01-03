define([], function() {

'use strict';

return function(ngModule){
  ngModule.controller('indexCtrl', ['$scope', '$routeParams', 'sampleService', function ($scope, $routeParams, sampleService) {

    console.log('$routeParams', $routeParams);

    $scope.testVar = 'hahahaha';

    $scope.name = 'results page';
    $scope.value = 10;
    $scope.params = $routeParams;
    $scope.directiveData1 = 'my name is directive 1';
    $scope.directiveData2 = 'my name is directive 2';
    $scope.chartData = 'sample text from controller > directive > component';

    sampleService.getSampleData().then(function(dataSet){
      $scope.sampleData = dataSet;
    });

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

    $scope.$watch('testVar', function(){
      console.log('changed!');
    });

  }]);
};
});