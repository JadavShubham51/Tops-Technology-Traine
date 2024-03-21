import React, { useContext } from 'react'
// frist allways import in top data provider use 
import { data1 } from './Chida';

function ChildC() {
    const {name,setname} = useContext(data1);
  return (
    <div>
      <button onClick={()=>{setname("sujal")}}>click</button>
       <h1>Hello i am child C:- {name}</h1>
    </div>
  )
}

export default ChildC;
