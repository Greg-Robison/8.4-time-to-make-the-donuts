var React = require('react');

class RecipeList extends React.Component{
  render(){
    return(

      <div className="container">
        <div className="row">
        <nav className="navbar navbar-default navbar-fixed-top">
            <span><a href="#"><h1>Home </h1></a><a href="#recipe/add/"><h1> Add Recipe</h1></a></span>
        </nav>
        </div>
          <div className="row">
            <div className="well col-md-6">
              <ul>
                <li><a href="#"><h1>Recipe Goes Here</h1></a></li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
};
 module.exports = {
   RecipeList
 };
