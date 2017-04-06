var React = require('react');

var Headers = require('./header.jsx').Headers;

function BaseLayout(props){
return (
  <div className="container">
    <Headers />
    <div className="row">
      <div className="col-md-12">

        {props.isUserLoggedIn ? <Header /> : <AnonHeader />}

        {props.children}

      </div>
    </div>
  </div>
);
}
function Header(props){
  return(
    <h1 className="welcome text-center">Welcome to Greg's Recipe Managenment App</h1>
  );
}
function AnonHeader(props){
  return(
    <h1>Please Signin To Use Greg's Recipe Managenment App</h1>
  );
}
module.exports = {
  BaseLayout
};
