var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');




require('./router');


$(function(){
  Backbone.history.start();
});
