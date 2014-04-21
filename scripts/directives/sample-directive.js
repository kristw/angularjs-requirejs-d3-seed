define([
  './directives'
],
function (directives) {
  'use strict';
//---------------------------------------------------
// BEGIN code for this directive
//---------------------------------------------------

directives.directive('sample', [function (){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'partial/sample-directive.html',
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
});