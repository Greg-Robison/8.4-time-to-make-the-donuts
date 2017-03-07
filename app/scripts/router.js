var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup');
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ConversionContainer = require('./components/conversion.jsx').ConversionContainer;
var models = require('./models/recipes.js');
var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    'recipes/': 'recipeList'
  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
    });
  },
  recipeList: function(){
    var recipe = new models.Recipe({'name': 'Bacon Rice', 'servings': 4});
    recipe.get('ingredients').add([
      {'name': 'Minute Rice', 'qty': 2, 'units': 'Cups'},
      {'name': 'Water', 'qty': 2, 'units': 'Cups'},
      {'name': 'Beef Bouillon', 'qty': 4, 'units': 'Cubes'},
      {'name': 'Bacon', 'qty': 6, 'units': 'Strips'},
      {'name': 'Yellow Onion', 'qty': 1, 'units': 'Cup (Diced)'},
    ]);
    ReactDOM.render(
      React.createElement(ConversionContainer, {recipe: recipe}),
      document.getElementById('app')
    )
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  }
});
var appRouter = new AppRouter();

module.exports = appRouter;
