import React from 'react'
import Header from '../Layout/Comomon_componet/Header'
import { Link, Outlet } from 'react-router-dom'

function Main_Use() {
  return (
    <div>
        <Header/>
        <h1>Main Props How to driling and short to use UseContext Hook and easy driling path</h1>
      <h4><Link to="/propdriling/Propsd">Props Driling</Link></h4>
      <hr />
      <h4><Link to="/propdriling/propsusecontext" >Props_useContext</Link></h4>
      <Outlet/>
    </div>
  )
}

export default Main_Use
