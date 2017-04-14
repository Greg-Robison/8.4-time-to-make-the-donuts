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
    });

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(recipeItem) {
    recipeItem.destroy();
    var recipeCollection = this.state.recipeCollection;
    recipeCollection.remove(recipeItem);
    this.setState({ recipeCollection });
  }

  render(){
    var self = this;
    var recipeCollection = this.state.recipeCollection;
    var menuItems = recipeCollection.map(function(recipeItem){
       return (
         <RecipeItem key={recipeItem.cid} recipeItem={recipeItem} handleDelete={self.handleDelete}/>
       )
    })
    return(
      <BaseLayout>
          <div className="container">
              <div className="row">
                <div className="well col-md-10">
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
    console.log(this.props);
    return(
      <li><h2>{ this.props.recipeItem.get("title") }</h2><h4> by {this.props.recipeItem.get('author')}</h4><span className="span"><a className="recipe btn btn-primary" href={'#recipes/' + this.props.recipeItem.id +'/'}><img className="button-logo"src="./images/logo9.png" /> See Recipe</a></span>
      <button className="delete btn btn-danger" onClick={()=>this.props.handleDelete(this.props.recipeItem)}>Delete Recipe</button><hr /></li>
    )
  }
}
 module.exports = {
   RecipeList
 };
