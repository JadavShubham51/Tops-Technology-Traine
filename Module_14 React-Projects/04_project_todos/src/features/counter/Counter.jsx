import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';


function Counter() {
  // name same hase reducer ma to thase
    const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
