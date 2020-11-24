import React from 'react';
import '../css/Crossfade.css';
import '../css/App.css';
import { useMediaQuery } from 'react-responsive'

const Crossfade = (props) => {
    const isDesktop = !useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div>
            {isDesktop?(
                <div className="cf">
                    <img src={props.img2} alt={props.alt} className="default-image bottom"/>
                    <img src={props.img1} alt={props.alt} className="default-image top"/>
                </div>
                
                ):(
                <div className="cf_small" >
                    <img src={props.img2} className="small-image bottom"/>
                </div>
                )}
        </div>
        
    );
}

export default Crossfade;