// import React from 'react'

// import './style1.css';
// import './style2.css';

// function Css_comp() {
    
//   const internal={color:"green",backgroundColor:'yellow'}
//   return (
//     <div>
//         <h1>Css_comp</h1>

//         <h1 style={{color:"red",backgroundColor:'yellow'}}>Inline css</h1>
//         <h1 style={internal}>Inline css</h1>

//         <h1 className='box1'>External css</h1>
//     </div>
//   )
// }

// export default Css_comp;

import React from 'react';
import "./style.css"

const internal={color:"blue",backgroundColor:'lightcoral'}
function Css() {
  return (
    <div>
      <h1>Css</h1>

      <h1 style={{color:"red"}}>Inline css</h1>
      <h1 style={internal}>Inline css</h1>

      <h2 className='box1'>text center External css</h2>
    </div>
  )
}

export default Css
