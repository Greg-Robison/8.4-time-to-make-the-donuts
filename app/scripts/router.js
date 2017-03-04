var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup');
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ConversionContainer = require('./components/conversion.jsx').ConversionContainer;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    'recipe/': 'convert'
  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
    });
  },
  convert: function(){
    ReactDOM.render(
      React.createElement(ConversionContainer),
      document.getElementById('app')
    )
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
