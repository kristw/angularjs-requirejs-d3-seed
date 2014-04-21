/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
  'use strict';
  return app.getNgModule().config(['$routeProvider', function ($routeProvider) {
    // $routeProvider.when('/view1', {
    //   templateUrl: 'partial/sample.html',
    //   controller: 'sampleCtrl'
    // });

    // $routeProvider.when('/view2', {
    //   templateUrl: 'partial/sample2.html',
    //   controller: 'mainCtrl'
    // });

    // $routeProvider.otherwise({
    //   redirectTo: '/view1'
    // });
  }]);
});