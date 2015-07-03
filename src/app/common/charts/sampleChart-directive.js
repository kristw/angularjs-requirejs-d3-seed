define([
  'app/common/charts/sampleChart'
], function (sampleChart) {

'use strict';
return function(ngModule){
  ngModule.directive('sampleChart', [function (){
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="chart"></div>',
      scope:{
        data: '=data',
      },
      link: function(scope, element, attrs) {

        // send information to d3 component
        var chart = sampleChart(element[0]);
        chart.setData(scope.data);

      }
    };
  }]);
};
});