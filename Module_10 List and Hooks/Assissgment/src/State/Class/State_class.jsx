// React components has a built-in state object.

// The state object is where you store property values that belong to the 
// component.

// When the state object changes, the component re-renders.

// =======================================
// In class Component

// constructor(props) {
//     super(props);
//     this.state = {brand: "Ford"};
//   }

// {this.state.brand}  

// wann change then use this.setState(brand:"BMW") built in

import React, { Component } from 'react';
import State_img from './State_img';

class State_class extends Component {

    constructor()
    {
        super();
        this.state={
            name:"shubham jadav",
            isImge:true,
            number:1
        }
    }
    render() {
        return (
            <>
            <h1>State Class</h1>
            <hr />
            <h2>{this.state.name}</h2>
            <button onClick={()=>this.setState({name:"sujal jadav"})}>chnage_name</button>
            <hr />
            <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
            <h2>{this.state.number}</h2>
            <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>

            <hr />

            <button onClick={()=>this.setState({isImge:false})}>hide</button>
            <button onClick={()=>this.setState({isImge:true})}>show</button>
            {this.state.isImge?<State_img/>:null}
            </>
        );
    }
}

export default State_class;