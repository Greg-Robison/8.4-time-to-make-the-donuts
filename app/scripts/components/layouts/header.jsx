var React = require('react');
var Backbone = require('backbone');

var User = require('../../models/user.js').User

class Headers extends React.Component {
  logOut(e) {
    e.preventDefault();
    // ajax call to parse logout endpoint
    User.logout();

    // clear localStorage
    localStorage.clear();

    // navigate to login route
    Backbone.history.navigate('login/', {trigger: true});

}
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
                    <a className="navbar-brand" href="#marketing/">Brand</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#recipes/">Recipes <span className="sr-only">(current)</span></a></li>
                        <li><a href="#recipe/add/">Add a Recipe</a></li>
                        <li><a href="#recipe/list/">Recipe List </a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#login/">Log In</a></li>
                      <li><a href="#" onClick={this.logOut}>Log Out</a></li>
                      </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
};

module.exports = {
  Headers
};
