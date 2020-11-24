import React from 'react';
import '../css/SocialPill.scss'; 
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';






const SocialPill = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={!isDesktop ? { position: "absolute", left: "50%", transform: "translateX(-50%)" } : {}} >
            <div className="hover social" style={!isDesktop ? { position: "unset" }: {}} >
                <span>Contacts</span>
                <a className="social-link" href="https://www.facebook.com/oxfordhack2020" target="_blank">
                    <FaEnvelope/>
                </a>
                <a className="social-link" href="https://medium.com/@OxfordHack" target="_blank">
                    <FaGithub/>
    </a>
                <a className="social-link" href="https://www.youtube.com/channel/UCEwhr5k4KNnkKgTEbh62p1Q" target="_blank">
                    <FaLinkedin/>
                </a>
            </div>
        </div>

    );
}


export default SocialPill;
