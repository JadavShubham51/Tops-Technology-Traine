import React from 'react'

function D({name,setname}) {
  return (
    <div>
        <button onClick={()=>{setname("shubham jadav")}}>click</button>
      <h1>Hello i am D : {name}</h1>
    </div>
  )
}

export default D
