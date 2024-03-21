import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function USignup() {

    const redireact = useNavigate();
    useEffect(()=>{
        // localstordage.getItem as database work in website storge
        if(localStorage.getItem('userid'))
        {
            redireact("/");
        }
    });

    // all fromvalue in sigle useSate as object
    const [fromvalue,setformvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        image:"",
        status:""
    });

    // hnadle form change use
    const HandleChange=(e)=>{
        // save value last and id newdate_convertstring,[e.target.name] : e.target.value
        setformvalue({...fromvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value});
        console.log(fromvalue)
    }

    const submitHandle=async(e)=>{
        // page refresh na kare
        e.preventDefault()
        if(
            fromvalue.name.trim() === "" || fromvalue.email.trim() === ""
            || fromvalue.password.trim() === "" || fromvalue.mobile.trim() === ""
            || fromvalue.image.trim() === ""
        )
        {
            toast.error("All Filds are required!")
            return;
        }
        try {
            const res = await axios.post(`http://localhost:3000/user`,fromvalue);
            console.log(res);
            if(res.status === 201){
                setformvalue({
                    name:"",
                    email:"",
                    password:"",
                    mobile:"",
                    image:"",
                });
                toast.success("User Add Successfuly")
            }
        } catch (error) {
            console.error("Error submitting form:",error);
            toast.error("Error Adding user")
        }
    }
    

  return (
    <div>
        {/*        match karne ke liye change form liye
          value={fromvalue.name}
                    onChange={HandleChange} */}
      <MDBContainer fluid >
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form onSubmit={submitHandle}>
            <MDBRow>
              <MDBCol
                md="10" 
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="name"
                    value={fromvalue.name}
                    onChange={HandleChange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2"name="email"
                    value={fromvalue.email}
                    onChange={HandleChange} type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3"
                  name="password"
                  value={fromvalue.password}
                  onChange={HandleChange} type="password" />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="mobile-alt me-3" size="lg" />
                  <MDBInput
                    label="Enter your Mobile"
                    id="form4"
                    type="text"
                    name="mobile"
                    value={fromvalue.mobile}
                    onChange={HandleChange}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon far icon="image me-3" size="lg"/>
                  <MDBInput
                    label="Enter your Imges"
                    id="form5"
                    type="url"
                    name="image"
                    value={fromvalue.image}
                    onChange={HandleChange}
                  />
                </div>

                <MDBBtn className="mb-4" size="lg">
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default USignup;
