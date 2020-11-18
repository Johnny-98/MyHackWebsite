import React from 'react';
import Overlay from './Overlay';
import GithubButton from './GithubButton';
import '../css/Headers.css'
import '../css/App.css'
import '../css/FancyLinks.css';


import logo from '../media/logo.png'



const FullHeader = () => (
    <div className="header">
        <a href="#landingscreen" onClick={() => false}><img src={logo} alt="Logo" style={{maxHeight: "75px"}} /></a>
        <div className="bar">
            <a className="first after fancy" href="#about"><p className="element"> About </p></a>
            <a className="first after fancy" href="#event" onClick={() => false}><p className="element"> Event </p></a>
            <a className="first after fancy" href="#schedule" onClick={() => false}><p className="element"> Schedule </p></a>
            <a className="first after fancy" href="#challenges" onClick={() => false}><p className="element"> Challenges </p></a>
            <a className="first after fancy" href="#faq" onClick={() => false}><p className="element"> FAQ </p></a>
            <a className="first after fancy" href="#committee" onClick={() => false}><p className="element"> Committee </p></a>
            <a className="first after fancy" href="#sponsors" onClick={() => false}><p className="element"> Sponsors </p></a>
            <GithubButton/>
        </div>
    </div>
);

const HamburgerHeader = () => (
    <div className="header">
        <a href="#landingscreen" onClick={() => false}><img src={logo} alt="Logo" style={{maxHeight: "70px", padding: "5px"}} /></a>
        <Overlay>
            <a className="first after fancy" href="#landingscreen"><p className="element-big"> Home </p></a>
            <a className="first after fancy" href="#about"><p className="element-big"> About </p></a>
            <a className="first after fancy" href="#event" onClick={() => false}><p className="element-big"> Event </p></a>
            <a className="first after fancy" href="#schedule" onClick={() => false}><p className="element-big"> Schedule </p></a>
            <a className="first after fancy" href="#challenges" onClick={() => false}><p className="element-big"> Challenges </p></a>
            <a className="first after fancy" href="#faq" onClick={() => false}><p className="element-big"> FAQ </p></a>
            <a className="first after fancy" href="#committee" onClick={() => false}><p className="element-big"> Committee </p></a>
            <a className="first after fancy" href="#sponsors" onClick={() => false}><p className="element-big"> Sponsors </p></a>
            {/*<a className="first after fancy" href="#register" onClick={() => false}><p className="element-big"> Register </p></a>*/}
        </Overlay>
    </div>
);

export {
    FullHeader,
    HamburgerHeader
};