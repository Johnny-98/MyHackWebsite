import React, {useState} from 'react';
import {Modal, Container, Row, Col} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';

import '../css/Sponsors.css'
import '../css/App.css'

import '../css/Committee.css';

import oxwocs from '../media/oxwocs.png';
import surrey_compsoc from '../media/surrey_compsoc.png';
import compsoc from '../media/CompSoc.png';
import stickermule from '../media/sponsors/stickermule.png';
import hackyeah from '../media/Hackyeah logo.jpg';


const Partners = () => {
    const [showOxwocs, setShowOxwocs] = useState(false);

    const handleCloseOxwocs = () => setShowOxwocs(false);
    const handleShowOxwocs = () => setShowOxwocs(true);

    const [showSurrey, setShowSurrey] = useState(false);

    const handleCloseSurrey = () => setShowSurrey(false);
    const handleShowSurrey = () => setShowSurrey(true);

    const [showCompSoc, setShowCompSoc] = useState(false);

    const handleCloseCompSoc = () => setShowCompSoc(false);
    const handleShowCompSoc = () => setShowCompSoc(true);

    const [showHackYeah, setShowHackYeah] = useState(false);

    const handleCloseHackYeah = () => setShowHackYeah(false);
    const handleShowHackYeah = () => setShowHackYeah(true);

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
    <div className="default">
        <div className="title">FRIENDS OF OXFORD HACK</div>
        <div className="committee-row sponsors-row">
            <div className="committee-row">
                <button className="committee-col" style={{
                    maxWidth: "350px",
                    background: "transparent",
                    outline: "none",
                    border: "none"
                }}  onClick={handleShowOxwocs}>
                    <img src={oxwocs} style={{padding: "25px", objectFit: "contain"}} alt="OxWoCS"/>
                </button>
                <button className="committee-col" style={{
                    maxWidth: "250px",
                    background: "transparent",
                    outline: "none",
                    border: "none"
                }}  onClick={handleShowCompSoc}>
                    <img src={compsoc} style={{padding: "25px", objectFit: "contain"}} alt="University of Oxford CompSoc"/>
                </button>
                <button className="committee-col" style={{
                    maxWidth: "350px",
                    background: "transparent",
                    outline: "none",
                    border: "none"
                }}  onClick={handleShowSurrey}>
                    <img src={surrey_compsoc} style={{padding: "25px", objectFit: "contain"}} alt="University of Surrey CompSoc"/>
                </button>
            </div>
            <div className="committee-row">
                <a className="committee-col" style={{
                    maxWidth: "400px",
                    background: "transparent",
                    outline: "none",
                    border: "none"
                }}  href="http://hackp.ac/mlh-stickermule-hackathons">
                    <img src={stickermule} style={{padding: "25px", objectFit: "contain", filter: "brightness(100%)"}} alt="Sticker Mule"/>
                </a>
                <button className="committee-col" style={{
                    maxWidth: "350px",
                    background: "transparent",
                    outline: "none",
                    border: "none"
                }}  onClick={handleShowHackYeah}>
                    <img src={hackyeah} style={{padding: "25px", objectFit: "contain", filter: "brightness(100%)"}} alt="Hack Yeah"/>
                </button>
            </div>
        </div>
        <div style={{textAlign: "center"}}>
            {isDesktop ? "Click" : "Tap"} on the images to find out more about our partners!
        </div>
        <Modal show={showOxwocs} onHide={handleCloseOxwocs} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={oxwocs} className="img-fluid" style={{minWidth: "300px"}} alt="OxWoCS"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                            OxWoCS aims to promote gender diversity in Computer Science. Follow their Facebook page <a href="https://www.facebook.com/OxWoCS">https://www.facebook.com/OxWoCS</a> to keep updated on upcoming seminars, volunteer for outreach events, and many more!

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        <Modal show={showSurrey} onHide={handleCloseSurrey} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={surrey_compsoc} className="img-fluid" style={{minWidth: "300px"}} alt="University of Surrey CompSoc"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                        The University of Surrey Computing Society (CompSoc) is the official Computer Science society of the University of Surrey Students' Union, the official departmental Society of the Department of Computer Science at the University of Surrey, and the official Guildford student chapter of the British Computing Society.

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        <Modal show={showCompSoc} onHide={handleCloseCompSoc} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={compsoc} className="img-fluid" style={{minWidth: "250px", maxWidth: "350px"}} alt="Oxford University CompSoc"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                        The Oxford University Computer Society (CompSoc) exists to promote the use of computers and other technology among members of the university. We welcome everyone into our society and host informative tech talks, as well as weekly social events.
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        <Modal show={showHackYeah} onHide={handleCloseHackYeah} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={hackyeah} className="img-fluid" style={{minWidth: "250px", maxWidth: "350px"}} alt="Hack Yeah"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                        <h5 style={{textAlign: "center", textAlignLast: "center"}}>An online edition of the biggest stationary hackathon in Europe.</h5>
                        <p>Our goal is to gather the brightest minds from all over the world in order to create technological solutions to issues from various fields and win crazy prizes. HackYeah is open for everyone: UXers, programmers, graphic designers, product managers, developers, and all other creative folks!</p>
                        <p>The nearest edition of HackYeah 2020 will be held online, worldwide on 27-29 November. We're still working on tasks, but today we can say that this time we will focus on widely understood health and zero waste issues for sure! The pool prize is now at 150 000 PLN and it grows! Soon, our Partners will provide more tasks and fields to work. The hackathon is powered by GovTech Polska and the Main Partner is Bank Gospodarstwa Krajowego. What is crucial, tickets are for free! :) </p>
                        <p>More details soon on our website and sm channels.</p>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        </div>
    );
}

export default Partners;