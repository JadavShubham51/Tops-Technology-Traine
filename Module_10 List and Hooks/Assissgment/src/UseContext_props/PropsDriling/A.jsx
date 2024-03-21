import React, { useState } from 'react'
import B from './B'

function A() {
    const [name,setname]=useState("shubham")
  return (
    <div>
        <button onClick={()=>{setname("Shubham jadav")}}>chnage</button>
      <h1>Hello i am A : {name}</h1>
      <B name={name} setname={setname}/>
    </div>
  )
}

export default A
