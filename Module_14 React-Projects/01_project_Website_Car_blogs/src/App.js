import React from "react";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About1 from "./Website/Pages/About1";
import Blogs2 from "./Website/Pages/Blogs2";
import Pno from "./Website/Pages/Pno";
import Adddata from "./Dashbord/Pages/Adddata";
import ULogin from "./Website/Pages/ULogin";
import USignup from "./Website/Pages/USignup";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Dashboard pages
import View from "./Dashbord/Pages/View";
import Dashbord from "./Dashbord/Pages/Dashbord";
import Signin from "./Dashbord/Pages/Signin";
import Signup from "./Dashbord/Pages/Signup";
import Header from "./Website/Common_component/Header";
import Footer from "./Website/Common_component/Footer";
import Profile from "./Website/Pages/Profile";





function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <ToastContainer/>
      <BrowserRouter>
          <Routes>
            {/* website */}
            <Route path="/" index element={<Home></Home>}></Route>
            <Route path="/about" element={<About1/>}></Route>
            <Route path="/blogs1" element={<Blogs2></Blogs2>}></Route>
            <Route path="/ulogin" element={<><Header/><ULogin/><Footer/></>}></Route>
            <Route path="/usignup" element={<><Header/><USignup/><Footer/></>}></Route>
            <Route path="/profile" element={<><Header/><Profile/><Footer/></>}></Route>
            <Route path="*" element={<Pno></Pno>}></Route>
            

            {/* Dashboard login */}
            <Route path="/Dashboard" element={<Dashbord />}></Route>
            <Route path="/Adddata" element={<Adddata />}></Route>
            <Route path="/View" element={<View />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
