define([
  './services'
],
function (services){
  'use strict';
//---------------------------------------------------
// BEGIN code for this service
//---------------------------------------------------

services.factory('sampleService', ['$q', function ($q){
  function getSampleData(callback){
    var deferred = $q.defer();
    setTimeout(function(){
      deferred.resolve({
        testData: 'This is a test.'
      });
    });
    return deferred.promise;
    // var qb = new twttrData.QueryBuilder()
    //   .between(20140101, 20140131);

    // BirdNerve.sqlQuery("agg_visible_engagement_day", qb.build(), function(error, dataSet) {
    //   callback(dataSet);
    // });
  }

  return{
    getSampleData: getSampleData
  };
}]);

//---------------------------------------------------
// END code for this service
//---------------------------------------------------
});