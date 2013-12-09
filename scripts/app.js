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
  'controllers/mainCtrl',
  'directives/barChart',
  'directives/chartForm'
], function (ng) {
  'use strict';

  return ng.module('app', [
    'ngRoute',
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services'
  ]);
});