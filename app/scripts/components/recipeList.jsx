var React = require('react');
var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var Headers = require('./layouts/header.jsx').Headers;


class RecipeList extends React.Component{
  render(){
    return(
      <BaseLayout>
          <div className="container">
              <div className="row">
                <div className="well col-md-6">
                  <ul>
                    <li><a href="#"><h1>Recipe Goes Here</h1></a></li>
                  </ul>
                </div>
              </div>
          </div>
      </BaseLayout>

    )
  }
};
 module.exports = {
   RecipeList
 };
