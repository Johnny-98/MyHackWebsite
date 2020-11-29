import React from 'react';
import programmer from '../media/programmer.gif'


const About = () => (
    <div className="default">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                
                <div className="col-lg-6 col-md-12 order-first">
                    <img src={programmer} alt="Look at him go!" style={{width: "95%"}} />
                </div>


                <div className="col-lg-6 col-md-12 order-last">
                <div className="title">ABOUT ME</div>
                    <p className="main-text">
                    Hello, my name is Peter Dzhonov and I am a graduate student in the department of Computer Science at the University of Surrey in Guildford UK graduating in May 2021. I enjoy working with ReactJS and Python and I hope to become a good web-developer with a background in artificial intelligence. My process is iterative; I approach each problem as a learning experience. Currently I am working on little projects to put on my GitHub while searching for graduate and entry level jobs. 
                    </p>
                </div>
               
            </div>
        </div>
    </div>
);

export default About;