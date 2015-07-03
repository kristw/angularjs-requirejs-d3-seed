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
  'app/common/module',
  'app/sections/index/module'
], function (angular) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'app.common',
    'app.sections.index'
  ]);

  // Kickstart application
  function bootstrap(){
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  }

  return {
    bootstrap: bootstrap,
    getNgModule: function(){ return app; }
  };
});