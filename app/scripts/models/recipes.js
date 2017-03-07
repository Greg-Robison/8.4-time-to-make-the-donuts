var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  defaults: function(){
    return {
      ingredients: new IngredientCollection()
    }
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe
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
