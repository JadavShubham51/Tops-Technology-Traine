import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
      <h1>Hello i am B :{name}</h1>
      <C name={name} setname={setname}/>
    </div>
  )
}

export default B
