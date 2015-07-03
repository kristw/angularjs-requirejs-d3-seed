define([], function () {
'use strict';

return function(ngModule){
//---------------------------------------------------
// BEGIN code for this directive
//---------------------------------------------------

ngModule.directive('sample', [function (){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'src/app/common/widgets/sample-directive.html',
    scope:{
      data: '='
    },
    link: function(scope, element, attrs) {

    }
  };
}]);

//---------------------------------------------------
// END code for this directive
//---------------------------------------------------
};});