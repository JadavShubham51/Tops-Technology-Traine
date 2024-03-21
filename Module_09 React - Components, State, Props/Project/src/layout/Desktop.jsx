import React from 'react';
import Navbar from './Navbar';
import Desk1 from './Desk1';
import Footer from './Footer';
import Desk2 from './Desk2';
import Desk3 from './Desk3';

function Desktop(props) {
    return (
        <>
            <Navbar/>
            <Desk1/>
            <Desk2/>
            <Desk3/>
            <Footer/>
        </>
    );
}

export default Desktop;
