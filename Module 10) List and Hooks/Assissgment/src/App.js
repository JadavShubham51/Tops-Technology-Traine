import React from "react";
// import Func_compo from "./Component/Func_compo";
// import Class_compo from "./Component/Class_compo";
// import Css from "./Css/Css";
// import Jsx_comp from "./Jsx_compo/Jsx_compo";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Not from "./Layout/Pages/Not";
import Props from "./Props/Props";
import State_Fun from "./State/Function/State_Fun";
import State_class from "./State/Class/State_class";
import State_chnage from "./State/State_chnage";
import Life_cycle from "./LifeCycle/Life_cycle";
import Func_life from "./LifeCycle/Function/Func_life";
import Life_class from "./LifeCycle/Class/Life_class";
import Main_loading from "./LazyLoading/Main_loading";
import Main_driling from "./UseContext_props/PropsDriling/Main_driling";
import Main_Use from "./UseContext_props/Main_Use";
import Main_UseContext from "./UseContext_props/Prop_useContext/Main_UseContext";
import Dashbord from "./Admin/Pages/Dashbord";
import Add_data from "./Admin/Pages/Add_data";
// import Custom from "./Custom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "./Admin/Pages/Edit";

function App() {
  return (
    <div className="App">
      <>
      <ToastContainer/>
        {/* <h1>Hello shubham</h1> */}
        {/* <Custom /> */}
        {/* <Func_compo/> */}
        {/* <Class_compo/> */}
        {/* <Css/> */}
        {/* <Jsx_comp/> */}
        {/* <Home/> */}
        {/* <About/> */}
        {/* <Contact/> */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/about" element={<><About /></>} />
            <Route path="/contact" element={<><Contact /></>} />
            <Route path="/props" element={<><Props /></>} />
            <Route path="/state" element={<><State_chnage /></>} >
              <Route path="/state/statefun" element={<><State_Fun/></>} />
              <Route path="/state/Statec" element={<><State_class /></>} />
            </Route>
            <Route path="/lifecycle" element={<><Life_cycle /></>} >
              <Route path="/lifecycle/life_fun" element={<><Func_life/></>} />
              <Route path="/lifecycle/life_class" element={<><Life_class /></>} />
            </Route>
            <Route path="/Layloding" element={<><Main_loading /></>} />
            <Route path="/propdriling" element={<><Main_Use /></>} >
            <Route path="/propdriling/Propsd" element={<><Main_driling/></>} />
              <Route path="/propdriling/propsusecontext" element={<><Main_UseContext /></>} />
            </Route>
            <Route path="*" element={<><Not /></>} />




            {/* --------------------this for admin_panel/dashbord ------------------------- */}
            <Route path="/Dashboard" element={<><Dashbord /></>} />
            <Route path="/adddata" element={<><Add_data /></>} />
            <Route path="/edit/:id" element={<><Edit /></>} />
            
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
