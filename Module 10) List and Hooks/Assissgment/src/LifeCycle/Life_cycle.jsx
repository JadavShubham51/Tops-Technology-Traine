import React from 'react'
import Header from '../Layout/Comomon_componet/Header'
import { Link, Outlet } from 'react-router-dom'

function Life_cycle() {
  return (
    <div>
        <Header/>
      <h1>Life-cycle_from_class_and function</h1>

      <Link to="/lifecycle/life_fun">Life_cycle_function</Link><br />
      <Link to="/lifecycle/life_class">Life_cycle_class</Link>
      <Outlet/>
      <hr />
    </div>
  )
}

export default Life_cycle
