import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ULogin() {

    const redirect =  useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {
            // redirect('/')
        }
    })

    const [formvalue,setformvalue]= useState({
        email:"",
        password:"",
    });

    const getform=(e)=>{
        setformvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        const { email, password } = formvalue;

        if (!email.trim() || !password.trim()) {
            toast.error('Email and Password fields are required');
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);
            if (res.data.length === 0) {
                toast.error("Email does not exist");
                return;
            }

            const user = res.data[0];
            if (user.password !== password) {
                toast.error("Incorrect password");
                return;
            }

            if (user.status !== "unblock") {
                toast.error("Account blocked. Please contact support.");
                return;
            }

            localStorage.setItem('userid', user.id);
            localStorage.setItem('uname', user.name);
            toast.success('Login successful');
            redirect('/')
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Error during login. Please try again later.");
        }
    }
  return (
    <div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <form  onSubmit={submitHandle}>
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <h1 className=" mb-0 me-3">Sign in</h1>
            </div>

            <div className="divider d-flex align-items-center my-4"></div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              name="email"
              value={formvalue.email}
              onChange={getform}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              name="password"
              value={formvalue.password}
              onChange={getform}
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/usignup" className="link-danger">
                  Register
                </Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
}

export default ULogin;
