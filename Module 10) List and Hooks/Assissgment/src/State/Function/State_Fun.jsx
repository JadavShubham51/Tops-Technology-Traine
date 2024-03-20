
/*
React components has a built-in state object.

The state object is where you store property values that belong to the 
component.

When the state object changes, the component re-renders.

=======================================
In class Component

constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }

{this.state.brand}  

wann change then use this.setState(brand:"BMW") built in

========================================

iN fUNC COMPONENT

 const [number,setNumber]=useState(1)

  const [data,setData]=useState({
      name:"Raj Nagar",
      isImage:true
  });

  <button onClick={() => setNumber(number + 1)}>+</button>
  <h1>{number}</h1>
 
  <button onClick={() => setData({ ...data, name: "Akash Nagar" })}>Change</button>
  <h1>{data.name}</h1>

*/
import React, { useState } from 'react'
import Func_img from './Func_img';


function State_Fun() {

    // this is a useState hook use in function only state can be chnage values value secound setvalue
    const [number,setnumber]=useState(1);
    const [name1,setname1]=useState("shubham")

    const[data,setdata]=useState({
        name : "shubham jadav",
        isImges : true
    })
  return (
    <div>

      <h1>Like_Func</h1>

    <button onClick={()=>{setnumber(number+1)}}>+</button>
    <h2>{number}</h2>
    <button onClick={()=>{setnumber(number-1)}}>-</button>
    <h1></h1>

{/* only single values object cahnge */}
    <h1>{name1}</h1>
    <button onClick={()=>{setname1("hello shubham")}}>Chnage</button>


{/* this is time we have multiple values change is how to this type */}
<hr />

    <button onClick={()=>{setdata({...data,name:"hello shubham"})}}>Chanage_name</button>
    <h2>{data.name}</h2>

    <button onClick={()=>{setdata({...data,isImges:false})}}>Hide</button>
    <button onClick={()=>{setdata({...data,isImges:true})}}>show</button>
    {/* {data.isImges? <Func_img/> : true} */}
    
    <button onClick={()=>{setdata({...data,isImges:!data.isImges})}}>Toggle</button>

    {data.isImges? <Func_img/> : null}
    </div>

  )
}

export default State_Fun
