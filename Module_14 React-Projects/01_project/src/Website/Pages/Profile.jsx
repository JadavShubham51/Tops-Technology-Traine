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

function Profile() {
    // data set all data get karva use
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    image: "",
    status: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

//   get data from frist
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/user/${localStorage.getItem("userid")}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

//   data form in change evenets
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

//   from update in data chnage in from patch use same localstorge as well as
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === "" ||
      data.mobile.trim() === "" ||
      data.image.trim() === ""
    ) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const res = await axios.patch(
        `http://localhost:3000/user/${data.id}`,
        data
      );
      console.log(res);
      if (res.status === 200) {
        setData({
          name: "",
          email: "",
          password: "",
          mobile: "",
          image: "",
        });
        toast.success("User updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Profile Page
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      type="password"
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="mobile-alt me-3" size="lg" />
                    <MDBInput
                      label="Enter your Mobile"
                      id="form4"
                      type="text"
                      name="mobile"
                      value={data.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon far icon="image me-3" size="lg" />
                    <MDBInput
                      label="Enter your Images"
                      id="form5"
                      type="url"
                      name="image"
                      value={data.image}
                      onChange={handleChange}
                    />
                  </div>

                  <MDBBtn to="/" className="mb-4" size="lg" type="submit">
                    Update
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage  src={data.image} fluid />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Profile;
