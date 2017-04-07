var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/recipes/',
  defaults: function(){
    return {
      ingredients: new IngredientCollection()
    }
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  urlRoot: 'https://tiny-parse-server.herokuapp.com/recipes/'
});

var Ingredient = Backbone.Model.extend({

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
