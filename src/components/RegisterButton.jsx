import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'


import Mailchimp from 'react-mailchimp-form';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import '../css/RegisterButton.scss';
import '../css/FancyButton.css';
import '../css/FancyField.css';

const CustomForm = ({ status, message, onValidated }) => {
    let email, fname, lname;
    const submit = () =>
      email &&
      fname &&
      lname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value
      });
  
    return (
      <div
        style={{
          borderRadius: 2,
          padding: "10px",
          display: "flex",
          width: "100%",
          textAlign: "center",
          flexDirection: "column"
        }}
      >
        <div className="field">
          <input ref={node => (fname = node)}
            type="text"
            placeholder="First Name"/>
          <div className="line"></div>
        </div>
        <div className="field">
          <input ref={node => (lname = node)}
            type="text"
            placeholder="Last Name"/>
          <div className="line"></div>
        </div>
        <div className="field">
          <input ref={node => (email = node)}
            type="email"
            placeholder="Your email"/>
          <div className="line"></div>
        </div>
        <button className="fancy-button" onClick={submit} style={{margin: "20px"}}>
          Subscribe!
        </button>
        <small style={{color: "white", textAlign: "justify"}}>We use MailChimp as our marketing platform. By clicking subscribe, you acknowledge that your information will be transferred to MailChimp for processing. Learn more about MailChimp's privacy practices <a href="https://mailchimp.com/legal/">here</a>. You can unsubscribe at any time by clicking the link in the footer of our emails. </small>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    );
  };

const url = "https://oxfordhack.us17.list-manage.com/subscribe/post?u=6d21f884b8201af11f1246c51&amp;id=1d61d1ba22";

const RegisterButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
      <div>
        {isDesktop ? (
            <a className="first" href="https://app.oxfordhack.co.uk" style={{flexShrink: 0, marginRight: "10px", color: "#f3b24f"}}><p className="element"> Register here! </p></a>
        ) : (
        <div>
            <a className="button" href="https://app.oxfordhack.co.uk" >
              Register here!
            </a>
        </div>
        ) 
        }
      </div>
      );
}

export default RegisterButton;