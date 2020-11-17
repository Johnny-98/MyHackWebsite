import React from 'react';
import Overlay from './Overlay';
import RegisterButton from './RegisterButton';
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
            <RegisterButton />
            <a id="mlh-trust-badge" style={{
                maxWidth: '100px',
                minWidth: '60px',
                width:'10%',
                zIndex: '10000'}}
                href="https://mlh.io/seasons/eu-2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow"
                target="_blank"
                rel="noopener noreferrer"
            >
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg"
                alt="Major League Hacking 2021 Hackathon Season"
                style={{width: '100%'}}
            />
            </a>
        </div>
    </div>
);

const HamburgerHeader = () => (
    <div className="header">
        <a id="mlh-trust-badge" style={{
            maxWidth: '100px',
            minWidth: '60px',
            width:'10%',
            zIndex: '10000'}}
            href="https://mlh.io/seasons/eu-2021/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow"
            target="_blank"
            rel="noopener noreferrer"
        >
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg"
            alt="Major League Hacking 2021 Hackathon Season"
            style={{width: '100%'}}
        />
        </a>
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