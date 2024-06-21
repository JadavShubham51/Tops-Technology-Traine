import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Create from "./Component/Create"
import Read from "./Component/Read"

function App() {

  return (
    
    <>
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
