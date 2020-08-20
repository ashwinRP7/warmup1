import React from 'react';
import logo from './logo.svg';
import { checkPropTypes } from 'prop-types';

class DecrementButton extends React.Component{

    constructor(props){
    	super(props);
    }
    
    render(){
    	return(
        <div className = "counterDecrement">
            <button className = "incrementButton" onClick = {this.props.minus}>
              -
            </button>
        </div>
    );
    }
    
}

export default DecrementButton;