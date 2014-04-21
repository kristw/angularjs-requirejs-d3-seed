define([
  'd3'
],
function(d3){
//---------------------------------------------------
// BEGIN code for this module
//---------------------------------------------------

var module = function($node){
  var w = 500,
      h = 200,
      wFunc = d3.scale.linear().range([0, w]),
      hFunc = d3.scale.linear().range([0, h]);

  var vis = d3.select($node).append("svg:svg")
      .attr("width", w)
      .attr("height", h);

  var data;

  // declare events
  var dispatch = d3.dispatch('nodeMouseOver', 'nodeMouseMove', 'nodeMouseOut', 'nodeClick');

  function setData(_data){
    data = _data;
    visualize();
  }

  function visualize(){
    vis.append('rect')
      .attr('width', 200)
      .attr('height', 200)
      .style('fill', 'red');
    vis.append('text')
      .attr('x', 200)
      .attr('y', 200)
      .text(data)
      .style('fill', 'blue');
  }

  var exports = {
    setData: setData,
    visualize: visualize
  };

  // rebind event handlers
  d3.rebind(exports, dispatch, 'on');

  return exports;
};

// return module
return module;

//---------------------------------------------------
// END code for this module
//---------------------------------------------------
});