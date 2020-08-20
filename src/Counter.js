import React from 'react';
import logo from './logo.svg';
import './Counter.css';
import { checkPropTypes } from 'prop-types';
import IncrementButton from './Incrementbtn';
import DecrementButton from './Decrementbtn';




class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        initialCount : 0
      };
    }
    
    add(){
        this.setState({
            initialCount:this.state.initialCount+1
        });
    }

    subtract(){
        this.setState({
            initialCount:this.state.initialCount-1
        })
    }

    render(){
      return(
        <div className="counterBox">
          <div className = "counterOutput">
              {this.state.initialCount}
          </div>
          
          <IncrementButton plus = {()=> this.add()} />
          <DecrementButton minus = {()=> this.subtract()} />
        </div>
      );
    }
}

export default Counter;
