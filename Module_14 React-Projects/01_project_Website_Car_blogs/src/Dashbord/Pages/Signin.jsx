import React from "react";
import Haeder from "../comon_componet/Haeder";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <Haeder />
      <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={5} >
        <Form>
      <h1>Signin Page</h1>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Don't Have an account? <Link to="/signup">Signup</Link></p>
      </Form>
        </Col>
      </Row>
      
      </Container>
    </div>
  );
}

export default Signin;
