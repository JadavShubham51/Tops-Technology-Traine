import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css';
// import 'bootstrap5/dist/index.js'
import 'bootstrap5/src/js/bootstrap.bundle.min.js';
import Main from './layout/Main';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom";
import Desktop from './layout/Desktop';
import Mobile from './layout/Mobile';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Desktop' element={<Desktop/>}/>
        <Route path='/Mobile' element={<Mobile/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
