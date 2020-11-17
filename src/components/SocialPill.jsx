import React from 'react';

import '../css/SocialPill.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive';



const SocialPill = () => {

    const isDesktop = !useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div style={!isDesktop ? { position: "absolute", left: "50%", transform: "translateX(-50%)" } : {}} >
            <div className="hover social" style={!isDesktop ? { position: "unset" }: {}} >
                <span>Follow us</span>
                <a className="social-link" href="https://www.facebook.com/oxfordhack2020" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a className="social-link" href="https://medium.com/@OxfordHack" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'medium']} />
    </a>
                <a className="social-link" href="https://www.youtube.com/channel/UCEwhr5k4KNnkKgTEbh62p1Q" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                </a>
            </div>
        </div>

    );
}


export default SocialPill;
