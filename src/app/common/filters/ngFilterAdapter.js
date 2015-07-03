define([
  // If you create a new filter and want to use in angular
  // Please add it to the list below, in alphabetical order.
  'app/common/filters/double-filter',
],
function(){

var args = Array.prototype.slice.call(arguments);

return function(ngModule){
//---------------------------------------------------
// BEGIN code for this module
//---------------------------------------------------

// For each of the filters listed above
args.forEach(function(filter){
  // Create angular filter with
  // filter name = filter.name
  // filter function = filter.filter
  ngModule.filter(filter.name, function(){
    return filter.filter;
  });
});

//---------------------------------------------------
// END code for this module
//---------------------------------------------------
};
});
