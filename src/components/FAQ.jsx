import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import '../css/FAQ.css';
import '../css/App.css';
import ContextAwareToggle from './ContextAwareToggle';
import twoo_faq from '../media/twoo_faq.webm';
import twoo_faq_back from '../media/twoo_faq.gif';
import {useMediaQuery} from 'react-responsive';
import {isSafari} from 'react-device-detect';


const FAQ = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="container" style={{textJustify: "center"}}>

            <div className="row align-items-center justify-content-center">
                 <Accordion className="default col-lg-6 col-md-12 order-lg-first order-last" style={{marginBottom: "2.5rem"}}>
                  <div className="title">FREQUENTLY ASKED QUESTIONS</div>
                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="0">
                        <p>What is Oxford Hack?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="main-text">
                        <p>
                        Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 36 hours. We give you all the resources you need, from hardware and APIs to workshops, sponsors and volunteers who can help you with whatever questions you might have. In a few words, you attend to have fun, learn things you didn’t even know existed and see your ideas come to life. This year we are moving everything digitally - for more information about what is going to change, check out the Event page.                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="1">
                        <p>What is a digital Oxford Hack going to look like?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="main-text">
                        <p>
                        Oxford Hack 2020 will be the same as ever - only online! We won’t be meeting in person and we will have workshops, meal breaks and other activities virtually. Don’t worry, we will still do our best to engage our hackers and provide you with innovative ways to meet the other people.                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="2">
                        <p>What makes Oxford Hack special?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body className="main-text">
                        <p>
                        Oxford Hack is an inclusive and encouraging event, providing a unique opportunity to hone your skills in any technical field you like. We don’t impose any restrictions on the product your team makes, so you can be as experimental and disciplined as you like. We’ve got some wonderful sponsors, who’ll be arranging their own prize categories and workshops.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="3">
                        <p>Can I participate in Oxford Hack?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body className="main-text">
                        <p>
                        Students at all levels of study are welcome to attend.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="4">
                        <p>Do I need to have a team beforehand?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body className="main-text">
                        <p>
                        No - we’ll help you e-meet everyone and find people with the same interests as you.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="5">
                        <p>Do I need to pay to participate?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body className="main-text">
                        <p>
                        No - Oxford Hack is completely free to attend.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="6">
                        <p>What do I need to have to participate?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body className="main-text">
                        <p>
                        You’ll need to have a computer to work on and a good internet connection to participate in the workshops
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="7">
                        <p>How many people can be in a team?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body className="main-text">
                        <p>
                        You can have up to 4 people in a team.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="8">
                        <p>Can I start working on my project before the event?</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body className="main-text">
                        <p>
                        No - because we want our event to be fair, everyone has the same starting line, so all projects have to be created from scratch during the 36 hours of the hackathon.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Body className="faq-question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="9">
                        <p>Error 404 question not found</p>
                      </ContextAwareToggle>
                    </Card.Body>
                    <Accordion.Collapse eventKey="9">
                      <Card.Body className="main-text">
                        <p>
                        Have more questions? Contact us at committee@oxfordhack.co.uk.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

            </Accordion>

            <p className="col-lg-6 col-md-12 order-lg-first order-last" style={{width: '100%'}}>
              {
                !isSafari ? (
                  <video autoPlay loop width={isDesktop ? '75%' : '40%'}>
                    <source src={twoo_faq}
                                type="video/webm"/>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                ) : (
                  <img src={twoo_faq_back} alt="He's just sittin' there..." style={{width: isDesktop ? '75%' : '40%'}}/>
                )
              }
                
                </p>
            </div>
        </div>
    )

}

export default FAQ;