import React, { useState, useEffect } from 'react';

import '../css/BackgroundEffect.scss';

const BackgroundEffect = () => {
    const size = useWindowSize();
    var stars = [];

    for (var i = 0; i < 100 + Math.floor(Math.random() * 100); i++) {
        var xposition = Math.random();
        var yposition = Math.random();
        var star_type = Math.floor((Math.random() * 3) + 1);
        var position = {
            "x" : size.width * xposition,
            "y" : size.height * yposition,
        };

        var newStar = (<div className={"star star-type" + star_type} key={"star "+i} style={{top: position.y, left: position.x}}></div>);

        stars.push(newStar);
    }

    return (
        <div className='galaxy'>
            {stars}
        </div>
    );
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }
  


export default BackgroundEffect;