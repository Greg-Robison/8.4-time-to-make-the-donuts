var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var LoginLayout = require('./components/login.jsx').LoginLayout;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginLayout),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
