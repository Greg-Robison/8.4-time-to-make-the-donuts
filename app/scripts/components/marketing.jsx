var React = require('react');
var Backbone = require('backbone');
var Headers = require('./layouts/header.jsx').Headers;


class MarketingContainer extends React.Component {
  render(){
  return(
    <div className="container">
      <Headers />
        <img className="logo" alt="Brand" src="images/logocook.png" />

    </div>
  )
  }
};

module.exports = {
  MarketingContainer
};
