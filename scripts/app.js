/**
 * loads sub modules and wraps them up into the main module
 */
define([
  'angular',
  'angular-route',

  /*
   * Load angular modules
   * if you get 'unknown {x}Provider' errors from angular, be sure they are
   * properly referenced in one of the module dependencies below.
   */

  // External modules

  // Internal modules
  // Core modules
  'services/services',
  'controllers/controllers',
  'filters/filters',
  'directives/directives',
  // Custom modules
  'controllers/sample-controller',

  'directives/barChart-directive',
  'directives/chartForm-directive',
  'directives/sample-directive',
  'directives/sampleChart-directive',

  'services/sample-service',

  'filters/ngFilterAdapter'

], function (angular) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services'
  ]);

  // Kickstart application
  function bootstrap(){
    angular.element(document).ready(function (document) {
      angular.bootstrap(document, ['app']);
    });
  }

  return {
    bootstrap: bootstrap,
    getNgModule: function(){ return app; }
  };
});