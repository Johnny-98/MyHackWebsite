import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Navbar from './components/Navbar'; 
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Footer from './components/Footer';
import SocialPill from './components/SocialPill';
import Projects from './components/Projects';
import Terminal from './components/Terminal/Skills';


import BackgroundEffect from './components/BackgroundEffect';
import "./css/animate.min.css";


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
        <div id="about" style={{paddingTop: "10vw"}}><About /></div>
        <div style={{marginBottom: "15vw"}} />
        </ScrollAnimation>

        <div style={{marginBottom: "5vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="projects" style={{paddingTop: "10vw"}}><Projects /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <ScrollAnimation animateIn='animate__fadeIn'
          animateOut='animate__fadeOut'>
        <div id="skills" style={{paddingTop: "10vw"}}><Terminal /></div>
        </ScrollAnimation>
        <div style={{marginBottom: "15vw"}} />
        <SocialPill />
        <div style={{marginBottom: "5vw"}} />
        <div id="footer" style={{paddingTop: "5vw"}}><Footer /></div>

      </div>
    </div>
  </div>
);

export default App;
