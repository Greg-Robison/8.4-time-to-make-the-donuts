var React = require('react');
var Headers = require('./layouts/header.jsx').Headers;

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.handleRecipe = this.handleRecipe.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
  }
  handleRecipe(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log("here", this.state);
  }
  handleInstructions(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log('there', this.state);
  }
  handleNotes(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log('everywhere', this.state);
  }
    render() {
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
                            <button onClick={this.submit} className="btn btn-primary">submit</button>

                            <h3>Step 1</h3>
                            <hr />
                            <span><input onChange={this.handleInstructions} type="text" name="amount" value={this.state.amount} placeholder="amount"/><input onChange={this.handleInstructions} type="text" name="unit" value={this.state.unit} placeholder="unit"/><input onChange={this.handleInstructions} type="text" name="ingredient" value={this.state.ingredient} placeholder="ingredient"/>
                                <button>add</button>
                            </span>
                            <div className="well">
                                <input onChange={this.handleInstructions} type="text" name="directions" value={this.state.directions} placeholder="Directions htmlFor this step"/>
                            </div>
                            <div className="btn btn-default">
                                add another step
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
