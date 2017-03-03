var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var RecipeCollection = Backbone.Collection.extend({
  url: "https://tiny-parse-server.herokuapp.com/robison"
  model: Recipe
});

var Ingredient = Backbone.Model.extend({
  idAttribute: 'objectId',
});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
});

module.exports = {
  Recipe,
  RecipeCollection,
  Ingredient,
  IngredientCollection
};
