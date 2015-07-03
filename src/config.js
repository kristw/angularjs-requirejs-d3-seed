requirejs.config({
  appDir: '.',
  baseUrl: 'src',
  // Set paths
  paths:{
    'angular':              ['../bower_components/angular/angular.min'],
    'angular-route':        ['../bower_components/angular-route/angular-route.min'],
    'bootstrap':            ['../vendor/bootstrap-3.0.1/js/bootstrap.min'],
    'd3':                   ['../bower_components/d3/d3.min'],
    'domReady':             ['../bower_components/requirejs-domready/domReady'],
    'jquery':               ['../vendor/jquery-1.10.2/jquery.min']
  },
  // Set dependencies
  shim: {
    'angular':              {exports: 'angular'},
    'angular-route':        ['angular'],
    'bootstrap':            ['jquery']
  }
});
