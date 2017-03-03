var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class LoginContainer extends React.Component{
  
  handleSignUp(e){
    e.preventDefault();
    console.log('clicked button');
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="well">
              <h2>Allready a member "Log In"</h2>
              <form className="login" action="index.html" method="post">
                <span><input type="text" name="" placeholder="User Name" /></span>
                <span><input type="text" name="" placeholder="Password" /><div className="btn btn-primary">
                  Log In
                </div></span>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="well">
              <h2>Create a new account!</h2>
              <form onSubmit={this.handleSignUp.bind(this)} className="login" action="index.html" method="post">
                <span><input type="text" name="" placeholder="E-mail" /></span>
                <span><input type="text" name="" placeholder="Password" /><div className="btn btn-primary">
                  Make an Account
                </div></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
module.exports = {
  LoginContainer
};
