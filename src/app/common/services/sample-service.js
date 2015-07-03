define([], function (){
'use strict';

return function(ngModule){
//---------------------------------------------------
// BEGIN code for this service
//---------------------------------------------------

ngModule.factory('sampleService', ['$q', function ($q){
  function getSampleData(callback){
    var deferred = $q.defer();
    setTimeout(function(){
      deferred.resolve({
        testData: 'This is a test.'
      });
    });
    return deferred.promise;
  }

  return{
    getSampleData: getSampleData
  };
}]);

//---------------------------------------------------
// END code for this service
//---------------------------------------------------
};});