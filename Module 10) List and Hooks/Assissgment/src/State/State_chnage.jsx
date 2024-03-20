import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Layout/Comomon_componet/Header'

function State_chnage() {
  return (
    <div>
        <Header/>
        <h1>State_change_how_to_from_class_and function</h1>
        <hr />
      <Link to="/state/statefun">Class_component</Link>
        <br />
      <Link to="/state/Statec">Funtion compont</Link>
      <Outlet/>
      
    </div>
  )
}

export default State_chnage
