var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup');
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ConversionContainer = require('./components/conversion.jsx').ConversionContainer;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
