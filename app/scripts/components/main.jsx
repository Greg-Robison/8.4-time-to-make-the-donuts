var React = require('react');


class MainContainer extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="well col-md-6">
            <form className="form-group">
              <span><input className="recipe-name" type="text" name="" value="" placeholder="Recipe Name"/><button className="btn btn-primary">Add Recipe</button></span>
                <div><input className="serving-size" type="text" name="" value="" placeholder="Number of Servings"/></div>

            </form>
          </div>
        </div>
      </div>
    )
  }
};
 module.exports = {
   MainContainer
 };
