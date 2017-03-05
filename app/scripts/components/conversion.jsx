var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class ConversionContainer extends React.Component {
    handleConversion(e) {
        e.preventDefault();
        console.log('button clicked');
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="well">
                        <span className="heading">Makes</span>
                        <span><input className="num-servings" type="text" name="" value="" placeholder="#"/></span>
                        <span className="heading">Servings</span>
                        <span onClick={this.handleConversion.bind(this)} className="adjust btn btn-primary">Adjust Recipe</span>
                        <span className="help">(<a href="https://www.merriam-webster.com/dictionary/help">Help</a>)</span>
                        <div className="well">
                            <span className="ing"><img className="check" src="./images/check.jpg" alt=""/>ingriedients now reflects the new serving size</span>
                        </div>
                    </div>
                    <div className="row">
                        <span className="col-md-6 well amount"><input className="check-box" type="text" name="" value=""/><span> 1</span> cups of something</span>
                          <span className="col-md-6 well amount"><input className="check-box" type="text" name="" value=""/><span> 2</span> cups of something else</span>
                            <span className="col-md-6 well amount"><input className="check-box" type="text" name="" value=""/><span> 1</span> TBS of something</span>
                              <span className="col-md-6 well amount"><input className="check-box" type="text" name="" value=""/><span> 2</span> tsp of something</span>

                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-xs-8 col-md-8">
                  <a href="#" className="col-md-2 thumbnail"><img src="./images/shrimp.jpg" alt="#"></img></a>
                    <a href="#" className="col-md-2 thumbnail"><img src="./images/roast.jpg" alt="#"></img></a>
                      <a href="#" className="col-md-2 thumbnail"><img src="./images/oatmeal.jpg" alt="#"></img></a>
                        <a href="#" className="col-md-2 thumbnail"><img src="./images/chicken.jpg" alt="#"></img></a>

            </div>
          </div>
        </div>



    )
  }
};
module.exports = {
  ConversionContainer
};
