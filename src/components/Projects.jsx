import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';


import hackhackers from "../media/challenges/hackhackers.gif"
import hackforgood from "../media/challenges/hackforgood.gif"
import onehack from "../media/challenges/onehack.png"
import ultimateisolation from "../media/challenges/ultimateisolation.png"
import whatthehack from "../media/challenges/whatthehack.png"
import '../css/Projects.css'


import '../css/App.css'

const Projects = () => {

    return (
        <div>
            <div className="title">MY PROJECTS</div>


            <Container fluid>
                
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <div className="pop_effect">
                            <Image src={hackhackers} alt="Hack the hackers challenge" fluid />
                        </div>     
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{ color: "white" }}>Hack the hackers’ hack</h3>
                        <p style={{ color: "white" }}>Have you ever thought “I could come up with a fun challenge”? This is your shot. At the start of the hackathon, we will give you all the opportunity to put in your challenge idea and then vote for your favourites. We’ll then take the most voted category and that will be our 5th challenge for the hackathon.</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={hackforgood} alt="Hack the hackers challenge" fluid />
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <h3 style={{ color: "white" }}>Hack for a good cause</h3>
                        <p style={{ color: "white" }}>What do you believe in? Create an awesome hack that supports a good cause in whichever way you find inspiring. Don’t be afraid to think big - big enough to make a change in something that you believe in. For this one, we want to help the winners further accomplish their mission, so in addition to the prize, we’ll make a donation for a charity supporting the cause they choose.</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <Image src={onehack} alt="One Hack" fluid />
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{ color: "white" }}>One hack to rule them all</h3>
                        <p style={{ color: "white" }}>This one is for the fiction enthusiasts out there - all you have to do is think big. Your hack can be inspired from all kinds of books, movies, TV shows and your imagination is the only limit! Whether your muse is a hobbit with a deadly mission, a clown hanging around in the sewers, a man whose job is to burn all books in sight or an extremely sharp detective, we’d like to see where your creativity takes you!
</p>
                    </Col>
                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto order-lg-2">
                        <Image src={ultimateisolation} alt="Ultimate isolation" fluid />
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center order-lg-1">
                        <h3 style={{ color: "white" }}>The ultimate isolation game</h3>
                        <p style={{ color: "white" }}>The current situation has got us all down, but there’s no reason why we shouldn’t play our favourite games with our friends. For this one, we invite you to create your own version of entertainment - a game that takes your mind off not being able to go out. Fun for the whole hackathon community!
</p>
                    </Col>

                </Row>
                <Row className="p-5">
                    <Col lg={3} xs={12} className="ml-auto mr-auto">
                        <Image src={whatthehack} alt="What the hack?" fluid />
                    </Col>
                    <Col lg={6} xs={12} className="align-self-center">
                        <h3 style={{ color: "white" }}>What the hack?!</h3>
                        <p style={{ color: "white" }}>This one’s for the crazier hackers, who are not afraid to dip their toes into the unknown. It has to work, it has to be creative, but above all it has to blow our minds! This challenge will award the most amazing, surprising project that will leave us with our mouths open. How crazy can you get?
</p>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Projects;