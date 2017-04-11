var $ = require('jquery');

var React = require('react');
var Backbone = require('backbone');

var Recipe = require('../models/recipes.js').Recipe;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var Headers = require('./layouts/header.jsx').Headers;


class RecipeList extends React.Component{
  constructor(props){
    super(props);
    var self = this;
    var recipeCollection = new RecipeCollection();

    this.state = {
      recipeCollection
    }

    recipeCollection.fetch().then(function(){
      self.setState({ recipeCollection })
    })
  }

  render(){
    var recipeCollection = this.state.recipeCollection;
    var menuItems = recipeCollection.map(function(recipeItem){
       return (
         <RecipeItem recipeItem={recipeItem}/>
       )
    })
    return(
      <BaseLayout>
          <div className="container">
              <div className="row">
                <div className="well col-md-6">
                  <ul>
                    { menuItems }
                  </ul>
                </div>
              </div>
          </div>
      </BaseLayout>

    )
  }
};

class RecipeItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    
    return(
      <li><a href={'#recipes/' + this.props.recipeItem.id +'/'}>{ this.props.recipeItem.get("title") }</a></li>
    )
  }
}
 module.exports = {
   RecipeList
 };
