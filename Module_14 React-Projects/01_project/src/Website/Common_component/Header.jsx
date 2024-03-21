import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const redirect = useNavigate();

  // Delete Session
  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("uname");
    toast.success("Logout Success");
    redirect("/");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand to="/" as={NavLink} className="text-white">
            Home
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-white">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs1" className="text-white">
                Blogs
              </Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link to="/ulogin" as={NavLink} className="text-white">Login</Nav.Link>
              <Nav.Link to="/usignup" as={NavLink}  className="text-white" >
                Signup
              </Nav.Link>
            </Nav> */}
            {/* name dekhva session work */}
             {(
              ()=>{
                // use session
                if(localStorage.getItem('userid')){
                  return(
                    // <Nav.Link to="/profile" as={NavLink} className="text-white">profile </Nav.Link>
                    <Nav.Link to="/profile" as={NavLink} className="text-white">hi ...{localStorage.getItem('uname')}</Nav.Link>
                  )
                }
              }
             )()}
            {/* login thaypu hoy tp logut option and logout same line button */}
            {(() => {
              if (localStorage.getItem("userid")) {
                return (
                  <>
                    <a
                      href="javascript:void(0)"
                      onClick={logout}
                      className="btn rounded-pill text-white py-2 px-4 ms-3 d-none d-lg-block"
                    >
                      Logout
                    </a>
                  </>
                );
              } else {
                return (
                  <>
                    <Nav.Link as={NavLink}
                      to="/ulogin"
                      className="btn rounded-pill py-2 px-4 ms-3 d-none text-white d-lg-block"
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link to="/usignup" as={NavLink}  className="text-white" >
                Signup
              </Nav.Link>
                  </>
                );
              }
            })()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
