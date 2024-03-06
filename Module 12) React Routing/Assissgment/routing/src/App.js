import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle';  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import Left from "./Pages/Left";
import Middle from "./Pages/Middle";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><About /></>} >
          <Route path="/about/left" element={<><Left/></>} />
          <Route path="/about/middle" element={<><Middle/></>} />
        </Route>
        
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="/help" element={<><Help /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 