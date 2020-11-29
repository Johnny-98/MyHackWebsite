import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css'
import { useMediaQuery } from 'react-responsive';
import {isSafari} from 'react-device-detect';
import GithubButton from './GithubButton';
import LandingArrow from './LandingArrow';

import User from './User_Icon'


const LandingScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="landing">
            <div className="landing"  >
                <User />
            </div>
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/*TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <GithubButton place="front" />}
            <LandingArrow />
        </div>
    );
}

export default LandingScreen;