var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var Recipe = require('../models/recipes.js').Recipe;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;


class ConversionContainer extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.recipe);
    this.state = {
      servings: this.props.recipe.get('servings')
    }

    this.handleConversion = this.handleConversion.bind(this);
  }
    handleConversion(e) {
      this.setState({servings: e.target.value})

    }

    render() {

      var ingredients = this.props.recipe.get('ingredients').map(function (ingredient) {
        return(
          <li className="col-md-6 well amount" key={ingredient.cid}>
            <input className="check-box" type="text" name="" value=""/> {ingredient.get('qty')}
              <span> {ingredient.get('units')}</span>
              <span> {ingredient.get('name')}</span>
          </li>
        )
      })

        return (
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="well">
                        <span className="heading">Makes </span>
                        <span><input onChange={this.handleConversion} className="num-servings" type="text" name="" value={this.state.servings} placeholder="#"/></span>
                        <span className="heading"> Servings</span>
                        <span onClick={this.handleConversion.bind(this)} className="adjust btn btn-primary">Adjust Recipe</span>
                        <span className="help">(<a href="https://www.merriam-webster.com/dictionary/help">Help</a>)</span>
                        <div className="well">
                            <span className="ing"><img className="check" src="./images/check.jpg" alt=""/>ingriedients now reflects the new serving size</span>
                        </div>
                    </div>
                    <div className="row">
                      <ul>
                        {ingredients}
                      </ul>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-xs-8 col-md-8">
                  <a href="#" className="col-md-2 thumbnail"><img src="./images/shrimp.jpg" alt="#"></img></a>
                    <a href="#" className="col-md-2 thumbnail"><img src="./images/roast.jpg" alt="#"></img></a>
                      <a href="#" className="col-md-2 thumbnail"><img src="./images/oatmeal.jpg" alt="#"></img></a>
                        <a href="#" className="col-md-2 thumbnail"><img src="./images/chicken.jpg" alt="#"></img></a>

            </div>

          </div>
        </div>



    )
  }
};
module.exports = {
  ConversionContainer
};
