import React, { useState } from 'react';
import '../css/Overlay.css'
import '../css/App.css'

import {Animate} from 'react-simple-animate';
import {HamburgerButton} from 'react-hamburger-button';

const Overlay = (props) => {
    const [play, setPlay] = useState();
    
    return (
        <div>
            <div style={{zIndex: "120", position: "relative", padding: "15px"}}>
                <HamburgerButton
                    open={play}
                    onClick={() => setPlay(!play)}
                    width={26}
                    height={18}
                    strokeWidth={3}
                    color='#ffffff'
                    animationDuration={0.5}
                />
            </div>

            <Animate
                play={play}
                start={{
                    transform: "translateX(20vw) translateY(-20vw)"
                }}
                end={{
                    transform: "translateX(-100vw) translateY(-20vw)"
                }}
            >
                <div style={{minHeight: "120vh", minWidth: "calc(100vw + 60px)", backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: "100", position: "fixed", display: "table"}}>
                    <div style={{display: "table-cell", verticalAlign: "top", textAlign: "right", padding: "130px 50px 0px 0px"}}>
                        { React.Children.map(props.children, (child => React.cloneElement( child, { onClick: () => setPlay(!play) } ))) }
                    </div>
                </div>
            </Animate>
        </div>
    );
}

/*

class Overlay extends Component {

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();

        this.state = {
            open: false,
        };
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open');
        this.setState({
            open: !this.state.open
        });
    }


    render() {
        return (
            <div className="wrapper" >
                <div className="nav">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    <div ref={this.wrapperRef} className="nav__body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis optio repellat sit unde voluptatum?
                    </div>
                </div>
            </div>
        )
    }
} */

export default Overlay;