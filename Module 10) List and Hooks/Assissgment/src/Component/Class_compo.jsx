import React,{Component} from "react";
// Class Component
// A class component must include the extends React.Component statement. 
// This statement creates an inheritance to React.Component, and gives your component access 
// to React.Component's functions.

// The component also requires a render() method, this method returns HTML.

// this is normal class component
class Class_compo extends Component{
    render(){
        return(
            <>
                <h1>hello class Component</h1>
            </>
        )
    }
}
export default Class_compo;

// rcc
// import React, { Component } from 'react'

// export default class Class_compo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello class</h1>
//       </div>
//     )
//   }
// }

