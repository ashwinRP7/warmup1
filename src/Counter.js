import React from 'react';
import logo from './logo.svg';
import './Counter.css';
import { checkPropTypes } from 'prop-types';

class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        initialCount : 0
      };
    }
  
    render(){
      return(
        <div className="counterBox">
          <div className = "counterOutput">
              {this.state.initialCount}
          </div>
          <div className = "counterDecrement">
              <button className = "incrementButton" onClick = {()=> this.setState({initialCount:this.state.initialCount -1})}>
                  -
              </button>
          </div>
          <div className = "counterIncrement">
              <button className = "decrementButton" onClick = {()=> {this.setState({initialCount:this.state.initialCount + 1})}}>
                  +
              </button>
          </div>  
        </div>
      );
    }
}

export default Counter;