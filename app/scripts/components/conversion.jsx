var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var Recipe = require('../models/recipes.js').Recipe;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var Headers = require('./layouts/header.jsx').Headers;


class ConversionContainer extends React.Component {
  constructor(props){
    super(props);
    var self = this;
    var recipe = new Recipe();

    if(this.props.id){
     recipe.set('objectId', this.props.id);
     recipe.fetch().then(() => {
       this.setState({recipe: recipe, servings: recipe.get('servings')});
     });
   }

    this.state = {
      servings: recipe.get('servings'),
      conversion: 1,
      recipe
    }

    this.handleConversion = this.handleConversion.bind(this);
  }

  updateServingSize(e) {
    e.preventDefault();
    this.setState({ servings: e.target.value });
    var updatedServingSize = e.target.value;
  }
  handleConversion(e) {
    e.preventDefault();
    var updatedServingSize = this.state.servings;
    // this.setState({servings: e.target.value})
    var servingSize = this.state.recipe.get('servings');
    var conversion = (updatedServingSize / servingSize);
    this.setState({ conversion });
  }

    render() {
      var recipe = this.state.recipe;
      var ingredients = this.state.recipe.get('ingredients').map((ingredient, index)=>{
        return(
          <li className="col-md-6 well amount" key={index}>
            <input className="check-box" type="text" name="" value=""/>
              <span> {eval(ingredient.amount) * this.state.conversion}</span>
              <span> {ingredient.unit}</span>
              <span> {ingredient.ingredient}</span>
              <br />
              <span> {ingredient.directions}</span>
          </li>

        )
      })


        return (
            <div className="container">
            <div className="row">
              <Headers />
                <div className="col-md-8">
                    <div className="well">
                        <h2><span>{this.state.recipe.get('title')}</span><span className="by"> by </span><span>{this.state.recipe.get('author')}</span></h2>
                        <span className="heading">Makes </span>
                        <span><input onChange={this.updateServingSize.bind(this)} className="num-servings" type="text" name="" value={this.state.servings} placeholder="#"/></span>
                        <span className="heading"> Servings</span>
                        <span onClick={this.handleConversion.bind(this)} className="adjust btn btn-primary">Adjust Recipe Serving Size</span>
                        <span className="help">(<a href="https://www.merriam-webster.com/dictionary/help">Help</a>)</span>
                        <div className="well">
                            <span className="ing"><img className="check" src="./images/check.jpg" alt=""/>ingriedients now reflects the new serving size</span>

                        </div>
                        <a href={'#recipe/edit/' + this.state.recipe.id + '/'}className="btn btn-primary">Edit Recipe</a>
                    </div>
                    <div className="row">
                      <ul>
                        {ingredients}
                      </ul>
                      </div>
                      <div className="well">
                      <h3>{this.state.recipe.get('notes')}</h3>
                      </div>

                </div>
            </div>

        </div>



    )
  }
};
module.exports = {
  ConversionContainer
};
