/**
 * attach controllers, directives and filters to this module
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 **/
define([
  'angular',

  'app/common/filters/ngFilterAdapter',

  'app/common/services/sample-service',

  'app/common/widgets/sample-directive',
  'app/common/widgets/chartForm-directive',

  'app/common/charts/sampleChart-directive',
  'app/common/charts/barChart-directive',
], function (angular) {
  'use strict';

  var ngModule = angular.module('app.common', []);

  var args = Array.prototype.slice.call(arguments, 1);
  // attach filters, services, directives, etc to this module
  args.forEach(function(constructor){
    constructor(ngModule);
  });

  return ngModule;
});
