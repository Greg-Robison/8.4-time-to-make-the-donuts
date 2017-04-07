var React = require('react');
var Headers = require('./layouts/header.jsx').Headers;
var Recipe = require('../models/recipes.js').Recipe;
var RecipeCollection = require('../models/recipes.js').RecipeCollection;
var Step = require('../models/recipes.js').Step;
var StepCollection = require('../models/recipes.js').StepCollection;

class StepComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '',
      unit: '',
      ingredient: '',
      directions: ''
    }
    this.handleAddStep = this.handleAddStep.bind(this);
  }
  handleAddStep(e){
    var step = this.props.step;
    step.set({ [e.target.name]: e.target.value });
    this.props.handleStep(step);
  }
    render(){
      return(
        <div>
          <span><input onChange={this.handleAddStep} type="text" name="amount" value={this.state.amount} placeholder="amount"/>
          <input onChange={this.handleAddStep} type="text" name="unit" value={this.state.unit} placeholder="unit"/>
          <input onChange={this.handleAddStep} type="text" name="ingredient" value={this.state.ingredient} placeholder="ingredient" />
          <input onChange={this.handleAddStep} type="text" name="directions" placeholder="directions for this step" />
              <button onClick={this.handleAddStep}>add</button>
          </span>

        </div>
    )
  }
}
class MainContainer extends React.Component {
  constructor(props){
    super(props);

    var stepCollection = new StepCollection();

    this.state = {
      title: '',
      steps: stepCollection
    }
    this.handleRecipe = this.handleRecipe.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleStep = this.handleStep.bind(this);

  }
  componentDidMount() {
    if(this.state.steps.length == 0){
      var steps = this.state.steps;
      var step = new Step();
      steps.add(step);
      this.setState({ steps });
    }
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
  }

  handleStep(step){
    var steps = this.state.steps;
    steps.add(step);
    this.setState({ steps })
    // console.log('mama state', this.state);
  }

    render() {
      var steps = this.state.steps;
      var steps = this.state.steps.map((step, index)=>{
        return (
          <StepComponent key={ index } step={step} handleStep={ this.handleStep }/>
        )
      })
        return (
            <div className="container">
                <Headers/>
                <div className="row">

                    <h3>Basic Info</h3>
                    <hr/>
                    <img src="https://unsplash.it/100/100" alt="" />

                        <input onChange={this.handleRecipe} type="text" name="title" value={this.state.title} placeholder="Recipe Name"/>
                        <input onChange={this.handleRecipe} type="text" name="author" value={this.state.author} placeholder="By"/>
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
                            <button onClick={this.handleSubmit} className="btn btn-primary">submit</button>

                            <h3>Step 1</h3>
                            <hr />
                            { steps }
                            <div className="well">
                                <input onChange={this.handleInstructions} type="text" name="directions" value={this.state.directions} placeholder="Directions htmlFor this step"/>
                            </div>
                            <div><button onClick={this.handleAddStep} className="btn btn-default">
                                add another step</button>
                            </div>
                            <button className="btn btn-primary">submit steps</button>

                            <h3>personal notes</h3>
                            <hr/>
                            <input onChange={this.handleNotes} type="text" name="notes" value={this.state.notes} placeholder="notes"/>
                            <div>
                              <button className="btn btn-default">Save this Recipe</button>
                            </div>
                        </div>
                    </div>
                  </div>
                    ) } }; module.exports = {MainContainer
}
