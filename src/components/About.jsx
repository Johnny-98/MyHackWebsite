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
                    The history of textbooks dates back to ancient civilizations. For example, Ancient Greeks wrote educational texts. The modern textbook has its roots in the mass production made possible by the printing press. Johannes Gutenberg himself may have printed editions of Ars Minor, a schoolbook on Latin grammar by Aelius Donatus. Early textbooks were used by tutors and teachers (e.g. alphabet books), as well as by individuals who taught themselves.
                    </p>
                </div>
               
            </div>
        </div>
    </div>
);

export default About;