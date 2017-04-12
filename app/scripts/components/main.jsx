var React = require('react');
var Headers = require('./layouts/header.jsx').Headers;
var Recipe = require('../models/recipes.js').Recipe;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var Ingredient = require('../models/recipes.js').Ingredient;
var IngredientCollection = require('../models/recipes.js').IngredientCollection;

class IngredientComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: this.props.ingredient.get('amount'),
      unit: this.props.ingredient.get('unit'),
      ingredient: this.props.ingredient.get('ingredient'),
      directions: this.props.ingredient.get('directions'),
    }

    console.log('this is my ingredient', this.props.ingredient);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      amount: nextProps.ingredient.get('amount'),
      unit: nextProps.ingredient.get('unit'),
      ingredient: nextProps.ingredient.get('ingredient'),
      directions: nextProps.ingredient.get('directions'),
    })
    console.log('nextProps', nextProps);
  }
  handleAddIngredient(e){
    this.setState({ [e.target.name]: e.target.value })
    var ingredient = this.props.ingredient;
    ingredient.set({ [e.target.name]: e.target.value });
    this.props.handleIngredient(ingredient);
  }
    render(){
      return(
        <div>
          <span><input onChange={this.handleAddIngredient} type="text" name="amount" placeholder="amount" value={this.state.amount}/>
          <input onChange={this.handleAddIngredient} type="text" name="unit" placeholder="unit" value={this.state.unit}/>
          <input onChange={this.handleAddIngredient} type="text" name="ingredient" placeholder="ingredient" value={this.state.ingredient}/>
          <textarea onChange={this.handleAddIngredient} type="text" name="directions" placeholder="directions for this step" value={this.state.directions}/>
          </span>
        </div>
    )
  }
}
class MainContainer extends React.Component {
  constructor(props){
    super(props);

    var ingredientCollection = new IngredientCollection();
    var ingredient = new Ingredient();
    ingredientCollection.add(ingredient);

    var recipe = new Recipe();

    if(this.props.id){
      recipe.set({objectId: this.props.id});
      recipe.fetch().then(()=>{
        var collection = new IngredientCollection();
        collection.add(recipe.get('ingredients'));
        console.log('collection', collection);
        this.setState({
          author: recipe.get('author') ,
          title: recipe.get('title'),
          servings: recipe.get('servings'),
          notes: recipe.get('notes'),
          directions: recipe.get('directions'),
          ingredients: collection
        });
      })
    }

    this.state = {
      title: null,
      author: null,
      ingredients: ingredientCollection
    }

    this.handleRecipe = this.handleRecipe.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleIngredient = this.handleIngredient.bind(this);

  }

  componentDidMount(){

  }
  handleRecipe(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleInstructions(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleNotes(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    var recipe = new Recipe(this.state);
    recipe.save();
  }
  handleAddIngredient(e){
    e.preventDefault();
    var ingredients = this.state.ingredients;
    var ingredient = new Ingredient();
    ingredients.add(ingredient);
    this.setState({ ingredients });
  }

  handleIngredient(ingredient){
    var ingredients = this.state.ingredients;
    ingredients.add(ingredient);
    this.setState({ ingredients });
  }

    render() {
        var ingredientsCollection = this.state.ingredients;
        var ingredients = ingredientsCollection.map((ingredient, index)=>{
          console.log('ingredient first', ingredient);
          return (
            <IngredientComponent key={ index } ingredient={ingredient} handleIngredient={ this.handleIngredient }/>
          )
        })
        return (
            <div className="container">
                <Headers/>
                <div className="row">
                  <div className="well">
                      <h3>Input your own Custom Recipe!!</h3>
                    <hr/>
                    <img src="https://unsplash.it/100/100" alt="" />

                        <input className="input1" onChange={this.handleRecipe} type="text" name="title" value={this.state.title} placeholder="Recipe Name"/>
                        <input className="input2" onChange={this.handleRecipe} type="text" name="author" value={this.state.author} placeholder="By"/>
                        <div className="">
                            <p>
                                <input onChange={this.public} type="checkbox" id="cbox1" value="first_checkbox"/>

                                <label htmlFor="cbox1">Make it Public</label>

                            </p>
                            <p>
                                <input onChange={this.private} type="checkbox" id="cbox2" value="first_checkbox"/>

                                <label htmlFor="cbox2">Keep it Private</label>

                            </p>
                            <span>
                                <p>this recipe will make
                                    <input onChange={this.handleRecipe} type="text" name="servings" value={this.state.servings} placeholder="# of servings"/>
                                    servings</p>
                            </span>

                            <h3>Step 1</h3>
                            <hr />
                            <div className="col-md-6">
                            { ingredients }
                            </div>
                            <div className="col-md-6">
                            </div>

                            <div><button onClick={this.handleAddIngredient} className="btn btn-default">
                                add another step</button>
                            </div>

                            <h3>personal notes</h3>

                            <hr/>
                            <textarea onChange={this.handleNotes} type="text" name="notes" value={this.state.notes} placeholder="notes"/>
                            <div>
                              <button onClick={this.handleSubmit} className="btn btn-primary">submit</button>

                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                    ) } }; module.exports = {MainContainer
}
