import React from 'react';
import '../css/Navbar.css';
import '../css/App.css'


import { useMediaQuery } from 'react-responsive'

import { FullHeader, HamburgerHeader } from './Headers';


const Navbar = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
        <div className="navbar" id="myNavbar">
            {isDesktop ? (<FullHeader />) : (<HamburgerHeader /> )}
        </div>
    );
}

export default Navbar;