var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');




class ConversionContainer extends React.Component{
  handleConversion(e){
    e.preventDefault();
console.log('button clicked');
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="well">
              <span className="heading">Makes</span>
              <span><input className="num-servings" type="text" name="" value="16" /></span>
              <span className="heading">Servings</span>
              <span onClick={this.handleConversion.bind(this)} className="adjust btn btn-primary">Adjust Recipe</span>
              <span className="help">(<a href="https://www.merriam-webster.com/dictionary/help">Help</a>)</span>
              <div className="well">
                <span className="ing"><img className="check" src="./images/check.jpg" alt="" />ingriedients now reflects the new serving size</span>
              </div>
            </div>
            <div className="well">
            <span className="amount"><input className="check-box" type="text" name="" value="" /><span> 2 </span>cups of something</span>

            </div>
          </div>
        </div>
      </div>
    )
  }
};
module.exports = {
  ConversionContainer
};
