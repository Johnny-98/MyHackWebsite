import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

//this affects the mobile view button 
import '../css/GithubButton.scss';
//
import '../css/FancyButton.css';
import '../css/FancyField.css';

const GithubButton = () => {


    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
      <div>
        {isDesktop ? (
            <a className="first" href="https://github.com/Johnny-98" style={{flexShrink: 0, marginRight: "10px", color: "#f3b24f"}}><p className="element"> Github </p></a>
        ) : (
        <div>
            <a className="button" href="https://github.com/Johnny-98" >
              View My Github!
            </a>
        </div>
        ) 
        }
      </div>
      );
}

export default GithubButton;