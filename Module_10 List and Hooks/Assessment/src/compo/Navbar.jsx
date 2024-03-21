import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Gujarati from './01Gujarati';
import Panjabi from './02Panjabi';
import Chines from './03Chines';
import State from './State';


function Navbar(props) {
  const data = {'/gujarti':'Gujarati','/panjabi':'Panjabi','/chines':'Chines','/State':'State'}
  const returndata = Object.entries(data).map((res)=>{console.log(res);
    return <li className='nav-item'>
      <Link className='nav-link' to={res[0]}>{res[1]}</Link>
    </li> 
   
  })
  return (
    <Router>
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand">
        <img src="first.png" alt="" className='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">

        
        {returndata}
       
      </ul>
    </div>
  </div>
</nav>

<Routes>
  <Route path='/gujarti' element={<Gujarati/>}></Route>
  <Route path='/Panjabi' element={<Panjabi/>}></Route>
  <Route path='/Chines' element={<Chines/>}></Route>
  <Route path='/State' element={<State/>}></Route>


</Routes>
    </>
    </Router>
  );
}

export default Navbar;