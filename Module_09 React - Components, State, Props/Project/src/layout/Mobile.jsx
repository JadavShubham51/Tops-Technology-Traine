import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Mobile1 from './Mobile1';
import Mobile2 from './Mobile2';

function Mobile(props) {
    return (
     <>
        <Navbar/>
        <Mobile1/>
        <Mobile2/>
        <Footer/>
     </>    
    );
}

export default Mobile;