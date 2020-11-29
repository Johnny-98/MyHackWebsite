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
                <a className="social-link" href="petiodjonov@yahoo.com" target="_blank">
                    <FaEnvelope/>
                </a>
                <a className="social-link" href="https://github.com/Johnny-98" target="_blank">
                    <FaGithub/>
    </a>
                <a className="social-link" href="https://www.linkedin.com/in/peter-djonov-dzhonov-008037155/" target="_blank">
                    <FaLinkedin/>
                </a>
            </div>
        </div>

    );
}


export default SocialPill;
