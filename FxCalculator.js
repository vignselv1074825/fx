import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FxCalculator.css';

class FxCalculator extends React.Component{
    constructor(props){
        super(props);
        this.inputFxRef = React.createRef()
        this.covertingFxRef = React.createRef()
    }

FxCalculator = (e) => {
    e.preventDefault();
    console.log(this.inputFxRef);
    console.log(this.covertingFxRef);
    

}
    render(){
        return(
          <React.Fragment>
              <form>
              <div className="Fx-Calculator col-12">
              <div className="form-group">
        <label>From :</label>
        <input type="text" className="form-control
          Fx-Calculator-Converting-Input-Value" ref={this.inputFxRef}/>

      </div>
      <div className="form-group Converting-Unit-Container">
        <label>To :</label>
        <input type="text" className="form-control
          Fx-Calculator-Converting-Input-Value-To" ref={this.covertingFxRef}/>

      </div>
      <p className="Converted-Value-Result"/>
      <div className ="Buttons-Container">
        <button className="Fx-Calculator-Submit-Button" onClick ={this.FxCalculator()}>Submit</button>
        <button className="Fx-Calculator-Clear-Button">Clear</button>
      </div>
      </div>
</form>
              </React.Fragment>

        )
    
    }
        
}

export default FxCalculator;