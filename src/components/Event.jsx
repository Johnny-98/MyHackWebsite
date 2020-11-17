import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {isSafari} from 'react-device-detect';

import '../css/Description.css'
import '../css/App.css'
import event_video from '../media/oxhack-twoo-2020.webm'
import event_gif from '../media/oxhack-twoo-2020.gif'

const Description = () => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });
    
    return (
    <div className="default">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                
                <div className="col-lg-6 col-md-12 order-first">
                {isDesktop && (
                    !isSafari ? (
                        <video autoPlay loop muted width={'75%'}>
                            <source src={event_video}
                                    type="video/webm"/>

                            Sorry, your browser doesn't support embedded videos.
                        </video>) : (
                            <img src={event_gif} alt="Look at him go!" style={{width: "75%"}} />
                    ))}
                </div>
                <div className="col-lg-6 col-md-12 order-last">
                    <div className="title">OXFORD HACK 2020 ONLINE</div>
                    <p className="main-text">
                        Oxford Hack 2020 will be the official Oxford student hackathon this year. We want to bring together as many like minded people together with the purpose of creating cool things. Though we can’t be together in person, in 36 hours we will provide our hackers with APIs, mentoring and prize categories to provide direction. We also want to stay engaged with our community despite the distance, so we will run unrelated but fun activities. The aim of these is to help teams come together, provide a break from work and simulate the random interactions that happen when a Hackathon is physical.
                    </p>
                </div>
            </div>
        </div>
    </div>
);}

export default Description;