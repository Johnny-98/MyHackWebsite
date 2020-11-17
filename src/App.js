import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Event from './components/Event';
import Sponsors from './components/Sponsors';
import Partners from './components/Partners.jsx';
import Committee from './components/Committee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SocialPill from './components/SocialPill';
import Schedule from './components/Schedule';
import Challenges from './components/Challenges';

import BackgroundEffect from './components/BackgroundEffect';

import "animate.css/animate.min.css";

/*
import Committee from './components/Committee';
import Footer from './components/Footer';
*/ 

const App = () => (
  <div className="App">
    <BackgroundEffect />
    <div className="App-body" style={{position: 'relative'}}>
      <Navbar />
      <div style={{scrollBehavior: 'smooth'}}>
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="landingscreen"><LandingScreen /></div>
        <div style={{marginBottom: "20vw"}} />
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="about" style={{paddingTop: "5vw"}}><About /></div>
        <div style={{marginBottom: "15vw"}} />
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="event" style={{paddingTop: "15vw"}}><Event /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="schedule" style={{paddingTop: "10vw"}}><Schedule /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="challenges" style={{paddingTop: "10vw"}}><Challenges /></div>

        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="faq" style={{paddingTop: "15vw"}}><FAQ /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="committee" style={{paddingTop: "15vw"}}><Committee /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="sponsors" style={{paddingTop: "15vw"}}><Sponsors /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="partners" style={{paddingTop: "150px"}}><Partners /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "5vw"}} />
        <SocialPill />
        <div style={{marginBottom: "5vw"}} />
        <div id="footer" style={{paddingTop: "5vw"}}><Footer /></div>

      </div>
    </div>
  </div>
);

export default App;
