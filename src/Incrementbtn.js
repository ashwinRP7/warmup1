import React from 'react';
import logo from './logo.svg';
import { checkPropTypes } from 'prop-types';

class IncrementButton extends React.Component{
    
    constructor(props){
    	super(props);
    	
    }
    
    render(){
    	return(
        <div className = "counterIncrement">
            <button className = "decrementButton" onClick = {this.props.plus}>
              +
            </button>
        </div>
    );	
    }
    
}

export default IncrementButton;