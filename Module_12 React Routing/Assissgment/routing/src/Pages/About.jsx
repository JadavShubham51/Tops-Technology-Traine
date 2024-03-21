import React from 'react'
import Header from '../Comon_componet/Header'
import Footer from '../Comon_componet/Footer';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, Outlet } from 'react-router-dom';


function About() {
  return (
    <div>
        <Header/>
      <h1>About page</h1>
      <ButtonGroup className="mb-2">
        <Button as={Link} to='/about/left'>
            Left
        </Button>

        <Button as={Link} to='/about/Middle'>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <Outlet/>
      <Footer   />
    </div>
  )
}

export default About
