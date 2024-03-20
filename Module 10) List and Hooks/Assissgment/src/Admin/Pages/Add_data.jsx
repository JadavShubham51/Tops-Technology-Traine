import React, { useState } from "react";
import AHeader from "../Comon_componet/AHeader";
import AFooter from "../Comon_componet/AFooter";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Add_data() {

  // npm install --save react-toastify  cmd run
  // $ npm install --save react-toastify

  // add user in from so value UseState 
  const [fromvalue,setfromvalue]=useState({
    username:"",
    email:"",
    password:"",
    mobile:""
  })

  const changeHandel=(e)=>{
    // this from is value change in react from that way use
    setfromvalue({...fromvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
    console.log(fromvalue)
  }

  // data submit add user banava
  const submitHandel=async(e)=>{
    e.preventDefault();
    if(
      fromvalue.username.trim() === "" || fromvalue.email.trim() === "" ||
      fromvalue.password.trim() === "" ||
      fromvalue.mobile.trim() === ""
    ){
      toast.error("All filds are required!")
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/users`, fromvalue);
      console.log(res);
      if (res.status === 201) {
        setfromvalue({
          username: "",
          email: "",
          password: "",
          mobile: "",
        });
        toast.success("User Add Success");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error adding user");
    }
  }

 
  

  return (
    <div>
      <AHeader />
      <div className="container mt-3">
        <h1>Add user Here</h1>
        <form action="" onSubmit={submitHandel}>
          <div className="mb-3 mt-3">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="username"
              value={fromvalue.username}
              onChange={changeHandel}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={fromvalue.email}
              onChange={changeHandel}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={fromvalue.password}
              onChange={changeHandel}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile"
              name="mobile"
              value={fromvalue.mobile}
              onChange={changeHandel}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="btn btn-dark ms-2" to="/dashboard">
            Back
          </Link>
        </form>
      </div>
      <AFooter />
    </div>
  );
}

export default Add_data;
