import React from 'react';

import {Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import hackhackers from "../media/challenges/hackhackers.gif"
import hackforgood from "../media/challenges/hackforgood.gif"
import onehack from "../media/challenges/onehack.png"
import ultimateisolation from "../media/challenges/ultimateisolation.png"
import whatthehack from "../media/challenges/whatthehack.png"

import vmware from '../media/sponsors/vmware.png';
import here from '../media/sponsors/here.png';
import echoAR from '../media/sponsors/echoAR.png';
import mathworks from '../media/sponsors/mathworks_logo.png';

import googlecloud from '../media/sponsors/GoogleCloud.png';
import datastax from '../media/sponsors/datastax.jpg';
import domaincom from '../media/sponsors/domaincom.svg';

import '../css/App.css'

const Challenges = () => {

    return (
        <div>
            <div className="title">CHALLENGES BY OXFORD HACK</div>
            <p className="main-text">
                Here are the challenges that we, the Oxford Hack committee, will be judging.
            </p>
            <Container fluid>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <Image src={hackhackers} alt="Hack the hackers challenge" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{color: "white"}}>Hack the hackers’ hack</h3>
                        <p style={{color: "white"}}>Have you ever thought “I could come up with a fun challenge”? This is your shot. At the start of the hackathon, we will give you all the opportunity to put in your challenge idea and then vote for your favourites. We’ll then take the most voted category and that will be our 5th challenge for the hackathon.</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={hackforgood} alt="Hack the hackers challenge" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <h3 style={{color: "white"}}>Hack for a good cause</h3>
                        <p style={{color: "white"}}>What do you believe in? Create an awesome hack that supports a good cause in whichever way you find inspiring. Don’t be afraid to think big - big enough to make a change in something that you believe in. For this one, we want to help the winners further accomplish their mission, so in addition to the prize, we’ll make a donation for a charity supporting the cause they choose.</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <Image src={onehack} alt="One Hack" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{color: "white"}}>One hack to rule them all</h3>
                        <p style={{color: "white"}}>This one is for the fiction enthusiasts out there - all you have to do is think big. Your hack can be inspired from all kinds of books, movies, TV shows and your imagination is the only limit! Whether your muse is a hobbit with a deadly mission, a clown hanging around in the sewers, a man whose job is to burn all books in sight or an extremely sharp detective, we’d like to see where your creativity takes you!
</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={ultimateisolation} alt="Ultimate isolation" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <h3 style={{color: "white"}}>The ultimate isolation game</h3>
                        <p style={{color: "white"}}>The current situation has got us all down, but there’s no reason why we shouldn’t play our favourite games with our friends. For this one, we invite you to create your own version of entertainment - a game that takes your mind off not being able to go out. Fun for the whole hackathon community! 
</p>
                    </Col>
                    
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <Image src={whatthehack} alt="What the hack?" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{color: "white"}}>What the hack?!</h3>
                        <p style={{color: "white"}}>This one’s for the crazier hackers, who are not afraid to dip their toes into the unknown. It has to work, it has to be creative, but above all it has to blow our minds! This challenge will award the most amazing, surprising project that will leave us with our mouths open. How crazy can you get?
</p>
                    </Col>
                </Row>
            </Container>

            <div style={{minHeight: "5vw"}} />

            <div className="title">SPONSOR CHALLENGES</div>
            <p className="main-text">
                These are the challenges from our amazing sponsors.
            </p>

            <Container fluid>
                <Row className="p-5">
                    <Col lg={4} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={mathworks} style={{margin: "20px 0"}} alt="MATHWORKS" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <p className="main-text">
                            <em>Topic 1:</em> "Enhancing the online education/lab experience" <br/>
                            {/*<em>Awards:</em> £150 allocated for prizes per team member*/}
                        </p>
                        <p className="main-text">
                            <em>Topic 2:</em> "Best Use of MATHLAB " <br/>
                            {/*<em>Awards:</em> £50 amazon vouchers*/}
                        </p>
                    </Col>
                </Row>

                <Row className="p-5">
                    <Col lg={4} xs={12} className="ml-auto mr-auto">
                        <Image src={vmware} style={{margin: "20px 0"}} alt="VMWare" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                    {/*<h3 style={{color: "white"}}>Mini Challenge - Dial It Down: Sustainability Engineering</h3> */}
                    <p className="main-text">At VMware, when we envision the future, we imagine a sustainable, interconnected world that is technologically advanced, resilient, and accessible to all. It’s a bold vision and one that will require an equally bold desire to tackle some of the world’s most complex challenges. For your hacking, we challenge you to contribute to this vision by thinking how to engineer sustainability into software: propose (and/or implement) a modification of popular open-source software, and demonstrate its impact in terms of energy efficiency or saving.</p>

                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={here} style={{margin: "20px 0"}} alt="Here Technologies" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <p className="main-text">
                            <em>Topic:</em> Our challenge to you is to bring new ideas and create a public transit solution to improve city systems, decrease congestion and improve consumer experience using our Developer Suite.<br/>
                            {/*<em>Awards:</em> £250 amazon voucher*/}
                        </p>
                    </Col>
                </Row>
            </Container>

            <div style={{minHeight: "5vw"}} />

            <div className="title">CHALLENGES FROM <Image style={{maxWidth: "120px", margin: "25px"}} fluid src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg" /></div>
            <p className="main-text">
                Here are challenges from our partners at MLH.
            </p>

            <Container fluid>
                <Row className="p-5">
                    <Col lg={4} xs={12} className="align-self-center ml-auto mr-auto">
                        <Image src={domaincom} alt="Domain.com" style={{backgroundColor: "whitesmoke", margin: "20px 0", padding: "10px"}} fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{color: "white"}}>Best Domain Registered with Domain.com</h3>
                        <p style={{color: "white"}}>Register a .tech, .space, or .online domain name using Domain.com during the weekend. Each team may submit one entry per person on the team. Each winning team member will receive a PowerSquare Qi Wireless Phone Charger and Domain.com Backpack.</p>
                        <p style={{color: "white"}}><strong>Prizes:</strong> PowerSquare Qi Wireless Phone Charger & Domain.com Backpack</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={4} xs={12} className="align-self-center ml-auto mr-auto order-lg-2">
                        <Image src={googlecloud} style={{backgroundColor: "whitesmoke", margin: "20px 0"}} alt="Google Cloud" fluid/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <h3 style={{color: "white"}}>Best use of Google Cloud</h3>
                        <p style={{color: "white"}}>Build your hackathon project with a suite of secure storage, powerful compute, and integrated data analytics products provided by Google Cloud. See full list of products here: <a href="g.co/cloud">g.co/cloud</a>. Each winning team member will receive a Google Home Mini.</p>
                        <p style={{color: "white"}}><strong>Prizes:</strong> Google Home Mini</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={4} xs={12} className="align-self-center ml-auto mr-auto">
                        <Image src={datastax} alt="DataStax" fluid style={{margin: "20px 0"}}/>
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{color: "white"}}>Best use of DataStax Astra</h3>
                        <p style={{color: "white"}}>Leverage DataStax Asta's powerful cloud database service in your project this weekend for a chance to win YubiKey Security Keys. Getting started in minutes with 10 GB free, no credit card needed.</p>
                        <p style={{color: "white"}}><strong>Prizes:</strong> YubiKey 5 Security Keys</p>

                    </Col>  
                </Row>
                <Row className="p-5">
                    <Col lg={8} xs={12} className="ml-auto mr-auto align-self-center">
                        <h3 style={{color: "white"}}>Best Hardware Hack (Sponsored by Digi-Key)</h3>
                        <p style={{color: "white"}}>Using your preferred hardware or hardware emulator, build a hack for your chance to win a Grove Beginner Kit, with Arduino Uno R3 included. 1 prize for each winning team member with 2 winning teams per event!</p>
                        <p style={{color: "white"}}><strong>Prizes:</strong> Grove Beginner Kits</p>

                    </Col>
                </Row>
                
            </Container>
        </div>
        
    )
}

export default Challenges;