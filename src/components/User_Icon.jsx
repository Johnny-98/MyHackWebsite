import React from 'react';
import Crossfade from './Crossfade';
import PeterZoom from '../media/Icons/Peter1.png'
import Peter from '../media/Icons/Peter2.jpg'

import '../css/User_Icon.css';
import '../css/App.css';

const User = () => (
    <div className="user-col">
            <Crossfade img1={Peter} img2={PeterZoom}/>
            <div className="title">Peter Dzhonov</div>
    </div>
);



export default User;