import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Create from "./Component/Create"

function App() {

  return (
    
    <>
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
