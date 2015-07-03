/**
 * attach controllers, directives and filters to this module
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 **/
define([
  'angular',

  'app/sections/index/index-controller'
], function (angular) {
  'use strict';

  var ngModule = angular.module('app.sections.index', []);

  var args = Array.prototype.slice.call(arguments, 1);
  // attach filters, services, directives, etc to this module
  args.forEach(function(constructor){
    constructor(ngModule);
  });

  return ngModule;
});
