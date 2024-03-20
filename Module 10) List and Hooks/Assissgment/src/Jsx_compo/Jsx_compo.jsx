/*
What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  
and/or appendChild() methods.

JSX converts HTML tags into react elements.
As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
*/


import React from 'react'

// external css import 
import './style.css';

function Jsx_comp() {

  var name="Hello shubham";
  const myelement = <h1>i am jsx contain</h1>;
  const myelement1 = <h1>React is {5 + 5}</h1> 

  const internalcss={color: 'red',backgroundColor:'yellow'}
  
  const myelement2 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  return (
    <div>
        <h1>{"Hi hello"}</h1>
        <h1>{name}</h1>
        <hr />

        {myelement}
        {myelement1}
        {myelement2}

        <hr />

        <h1 style={{color: 'red'}}>Hi im inline css in JSX</h1>
        <h1 style={internalcss}>Hi i m internal css in JSX</h1>

        <h1 className='bigblue'>Hi i am external css</h1>
        <h1 class='bigblue'>Hi i am external css</h1>
        

       <h1 style={{color: 'blue'}}>Hi i am jsx conver</h1>


    </div>
  )
}

export default Jsx_comp;