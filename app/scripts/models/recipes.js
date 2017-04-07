var Backbone = require('backbone');

var ParseModel = require('../models/parsefile').ParseModel;
var ParseCollection = require('../models/parsefile').ParseCollection;
var ParseFile = require('../models/parsefile').ParseFile;

var Recipe = ParseModel.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/classes/Recipes/',
  defaults: function(){
    return {
      steps: [],
      ingredients: new IngredientCollection()
    }
  }
});

var RecipeCollection = ParseCollection.extend({
  model: Recipe,
  baseUrl: 'https://tiny-parse-server.herokuapp.com/classes/Recipes/'
});

var Step = ParseModel.extend({
urlRoot: 'https://tiny-parse-server.herokuapp.com/classesRecipes/',
});

var StepCollection = ParseCollection.extend({
  model: Step,
  baseUrl: 'https://tiny-parse-server.herokuapp.com/classesRecipes/',
});

var Ingredient = ParseModel.extend({
urlRoot: 'https://tiny-parse-server.herokuapp.com/classesRecipes/',
});

var IngredientCollection = ParseCollection.extend({
  model: Ingredient,
  baseUrl: 'https://tiny-parse-server.herokuapp.com/classes/Recipes/'
});

module.exports = {
  Recipe,
  RecipeCollection,
  Step,
  StepCollection,
  Ingredient,
  IngredientCollection
};
