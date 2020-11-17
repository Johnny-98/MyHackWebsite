import React from 'react';
import '../css/Crossfade.css';
import '../css/App.css';

const Crossfade = (props) => (
    <div className="cf">
        <img src={props.img2} alt={props.alt} className="default-image bottom"/>
        <img src={props.img1} alt={props.alt} className="default-image top"/>
    </div>
);

export default Crossfade;