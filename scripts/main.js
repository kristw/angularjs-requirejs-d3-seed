requirejs.config({
  appDir: '.',
  baseUrl: 'scripts',
  // Set paths
  paths:{
    'angular':              ['../vendor/angular-1.0.8/angular.min'],
    'bootstrap':            ['../vendor/bootstrap-3.0.1/js/bootstrap.min'],
    'colorbrewer':          ['../vendor/colorbrewer/colorbrewer.v1.min'],
    'd3':                   ['../vendor/d3-3.3.6/d3.min'],
    'domReady':             ['../vendor/requirejs-domready-2.0.1/domReady'],
    'jquery':               ['../vendor/jquery-1.10.2/jquery.min']
  },
  // Set dependencies
  shim: {
    'angular':              {exports: 'angular'},
    'bootstrap':            ['jquery'],
    'd3':                   ['jquery']
  }
});

require([
    'angular',
    'domReady',
    'app',
    'routes'
  ],
  function(ng, domReady, app){

    // Kickstart application
    domReady(function (document) {
      ng.bootstrap(document, ['app']);
    });

  }
);

