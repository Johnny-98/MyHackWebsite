import React from 'react';
import '../css/LandingScreen.css';
import '../css/App.css'
import { useMediaQuery } from 'react-responsive';
import GithubButton from './GithubButton';
import HomeArrow from './HomeArrow';

import User from './User_Icon'


const HomeScreen = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div className="home">
            <div className="home"  >
                <User />
            </div>
            <p className="coding">
                LET YOUR IDEAS TAKE FLIGHT, <br/>
                SLEEP ALL DAY AND CODE ALL NIGHT!
            </p>

            {/*TODO:why do we only allow this for mobile??*/}
            {!isDesktop && <GithubButton place="front" />}
            <HomeArrow />
        </div>
    );
}

export default HomeScreen;