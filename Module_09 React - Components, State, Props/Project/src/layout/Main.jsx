import React from 'react';
import Navbar from './Navbar';
import First from './First';
import Products from './Products';
import Section2 from './Section2';
import Droplist from './Droplist';
import Social from './Social';
import Slider from './Slider';
import Footer from './Footer';
import './layout.css';
import './Media.css';

function Main(props) {
    return (
        <>
            <Navbar/>
            <First/>
            <Products/>
            <Section2/>
            <Droplist/>
            <Social/>
            <Slider/>
            <Footer/>
        </>
    );
}

export default Main;