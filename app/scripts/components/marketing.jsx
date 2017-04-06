var React = require('react');
var Backbone = require('backbone');
var Headers = require('./layouts/header.jsx').Headers;


class MarketingContainer extends React.Component {
  render(){
  return(
    <div className="container">
      <Headers />
    <div>Well Hello There!!</div>
    </div>
  )
  }
};

module.exports = {
  MarketingContainer
};
