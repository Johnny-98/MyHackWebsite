import React from 'react';
import Crossfade from './Crossfade';

import PeterSmol from '../media/committee/Peter1.png'
import PeterBig from '../media/committee/Peter2.jpg'

import '../css/User_Icon.css';
import '../css/App.css';

const User = () => (
    <div className="user-col">
            <Crossfade img1={PeterSmol} img2={PeterBig}/>
            <div className="title">Peter Dzhonov</div>
    </div>
);



export default User;