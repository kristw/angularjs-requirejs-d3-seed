define([
  'd3'
],
function(d3){
  'use strict';

return function(ngModule){
  ngModule.directive('chartForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'src/app/common/widgets/chartForm-directive.html',
      controller: function AppCtrl ($scope) {
        $scope.update = function(d, i){ $scope.data = randomData(); };
        function randomData(){
          return d3.range(~~(Math.random()*50)+1).map(function(d, i){return ~~(Math.random()*1000);});
        }
      }
    };
  });
};
});