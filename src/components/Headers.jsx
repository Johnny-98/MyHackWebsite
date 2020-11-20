import React from 'react';
import Overlay from './Overlay';
import GithubButton from './GithubButton';
import '../css/Headers.css'
import '../css/App.css'
import '../css/FancyLinks.css';


import logo from '../media/logo.png'



const FullHeader = () => (
    <div className="header">
        <a href="#landingscreen"></a>
        <div className="bar">
            <a className="first after fancy" href="#landingscreen"><p className="element"> Home </p></a>
            <a className="first after fancy" href="#about"><p className="element"> About </p></a>
            <a className="first after fancy" href="#schedule" onClick={() => false}><p className="element"> Skills </p></a>
            <a className="first after fancy" href="#projects" onClick={() => false}><p className="element"> Projects </p></a>
            <GithubButton/>
        </div>
    </div>
);

const HamburgerHeader = () => (
    <div className="header">
        <a href="#landingscreen"></a>
        <Overlay>
            <a className="first after fancy" href="#landingscreen"><p className="element-big"> Home </p></a>
            <a className="first after fancy" href="#about"><p className="element-big"> About </p></a>
            <a className="first after fancy" href="#schedule" onClick={() => false}><p className="element-big"> Skills </p></a>
            <a className="first after fancy" href="#projects" onClick={() => false}><p className="element-big"> Projects </p></a>
            {/*<a className="first after fancy" href="#register" onClick={() => false}><p className="element-big"> Register </p></a>*/}
        </Overlay>
    </div>
);

export {
    FullHeader,
    HamburgerHeader
};