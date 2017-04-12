var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup');
var MainContainer = require('./components/main.jsx').MainContainer;
var MarketingContainer = require('./components/marketing.jsx').MarketingContainer;
var RecipeList = require('./components/recipeList.jsx').RecipeList;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ConversionContainer = require('./components/conversion.jsx').ConversionContainer;
var models = require('./models/recipes.js');
var User = require('./models/user').User;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    'marketing/': 'marketing',
    'recipes/': 'recipe',
    'recipes/:id/': 'recipe',
    'recipe/list/': 'recipeList',
    'recipe/add/': 'addRecipe',
    'recipe/edit/:id/': 'editRecipe',

  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
    });
  },
  execute: function(callback, args, name){
  var user = User.current();

  if(!user && name == 'login' || !user && name == 'signup') {

  } else if (!user && name != 'index'){
    this.navigate("", {trigger: true});
    return false;
  }
  return Backbone.Router.prototype.execute.apply(this, arguments);
},
  recipe: function(id){
    // var recipe = new models.Recipe({'name': 'Bacon Rice', 'servings': 4});
    // recipe.get('ingredients').add([
    //   {'name': 'Minute Rice', 'qty': 2, 'units': 'Cups'},
    //   {'name': 'Water', 'qty': 2, 'units': 'Cups'},
    //   {'name': 'Beef Bouillon', 'qty': 4, 'units': 'Cubes'},
    //   {'name': 'Bacon', 'qty': 6, 'units': 'Strips'},
    //   {'name': 'Yellow Onion', 'qty': 1, 'units': 'Cup (Diced)'},
    // ]);
    ReactDOM.render(
      React.createElement(ConversionContainer, { id: id }),
      document.getElementById('app')
    )
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
  addRecipe: function(){
    ReactDOM.render(
      React.createElement(MainContainer),
      document.getElementById('app')
    );
  },
  marketing: function(){
    ReactDOM.render(
      React.createElement(MarketingContainer),
      document.getElementById('app')
    );
  },
  recipeList: function(){
    ReactDOM.render(
      React.createElement(RecipeList),
      document.getElementById('app')
    );
  },
  editRecipe: function(id){
    ReactDOM.render(
      React.createElement(MainContainer, { id: id }),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
