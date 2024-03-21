import React from 'react'
import Haeder from '../comon_componet/Haeder'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";


function Signup() {
  return (
    <div>
        <Haeder/>
      {/* <h1>Signup page</h1> */}
      <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={5} >
        <Form>
      <h1>Signup Page</h1>
      <Form.Group  className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formBasicmobile">
          <Form.Label>Mobile no</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile" />
          
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        {/* <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="URL" placeholder="Enter your imge" />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Col>
      </Row>
      
      </Container>
    </div>
  )
}

export default Signup
