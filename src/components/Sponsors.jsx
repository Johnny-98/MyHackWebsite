import React, {useState} from 'react';
import {Modal, Container, Row, Col} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';
import '../css/Sponsors.css'
import '../css/App.css'

import '../css/Committee.css';

import vmware from '../media/sponsors/vmware.png';
import here from '../media/sponsors/here.png';
import echoAR from '../media/sponsors/echoAR.png';
import mathworks from '../media/sponsors/mathworks_logo.png';


const Sponsors = () => {
    const [showVMWare, setShowVMWare] = useState(false);

    const handleCloseVMWare = () => setShowVMWare(false);
    const handleShowVMWare = () => setShowVMWare(true);

    const [showHere, setShowHere] = useState(false);

    const handleCloseHere = () => setShowHere(false);
    const handleShowHere = () => setShowHere(true);

    const [showEcho, setShowEcho] = useState(false);

    const handleCloseEcho = () => setShowEcho(false);
    const handleShowEcho = () => setShowEcho(true);

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
    <div className="default">
        <div className="title">SPONSORS</div>
        <p className="main-text">Oxford Hack is grateful to be supported by a range of wonderful sponsors. {isDesktop ? "Click" : "Tap"} on their logos to find out more about them! </p>
        <div className="committee-row sponsors-row">
            <button className="committee-col" style={{
                maxWidth: "400px",
                background: "transparent",
                outline: "none",
                border: "none"
            }}  onClick={handleShowVMWare}>
                <img src={vmware} style={{padding: "25px", objectFit: "contain"}} alt="VMWare"/>
            </button>
            <button className="committee-col" style={{
                maxWidth: "300px",
                background: "transparent",
                outline: "none",
                border: "none"
            }}  onClick={handleShowHere}>
                <img src={here} style={{padding: "25px", objectFit: "contain"}} alt="Here"/>
            </button>
            <button className="committee-col" style={{
                maxWidth: "400px",
                minHeight: "200px",
                background: "transparent",
                outline: "none",
                border: "none"
            }}  onClick={handleShowEcho}>
                <img src={echoAR} style={{padding: "25px", objectFit: "contain"}} alt="EchoAR"/>
            </button>
            <a className="committee-col" style={{
                maxWidth: "400px",
                minHeight: "200px",
                background: "transparent",
                outline: "none",
                border: "none"
            }}  href="https://www.mathworks.com/">
                <img src={mathworks} style={{padding: "25px", objectFit: "contain"}} alt="MATHWORKS "/>
            </a>
        </div>
        <Modal show={showVMWare} onHide={handleCloseVMWare} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={vmware} className="img-fluid" style={{minWidth: "300px"}} alt="VMWare"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                            VMware software powers the world’s complex digital infrastructure. The company’s cloud, networking and security, and digital workspace offerings provide a dynamic and efficient digital foundation to customers globally, aided by an extensive ecosystem of partners. Headquartered in Palo Alto, California, VMware is committed to being a force for good, from its breakthrough innovations to its global impact. For more information, please visit <a href="https://www.vmware.com/company.html">https://www.vmware.com/company.html</a>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        <Modal show={showHere} onHide={handleCloseHere} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={here} className="img-fluid" style={{minWidth: "300px"}} alt="Here"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                            We are making sense of the world through the lens of location. We help people achieve better outcomes - whether
                            it's helping the driver move to their destination safely, a municipality manage its infrastructure smartly or
                            a business optimize the utility of its assets.
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
        <Modal show={showEcho} onHide={handleCloseEcho} centered style={{color: "white"}} size="lg">
            <Modal.Body style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center" style={{padding: "25px"}}>
                            <img src={echoAR} className="img-fluid" style={{minWidth: "300px"}} alt="EchoAR"/>
                        </Col>
                        <Col style={{textAlign: "right", textAlignLast: "right", marginTop: "auto", marginBottom: "auto"}}>
                        echoAR is a cloud platform for augmented and virtual reality (AR/VR) that provides tools and server-side infrastructure to help developers & companies quickly build and deploy AR/VR apps and experiences.

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    </div>
);}

export default Sponsors;