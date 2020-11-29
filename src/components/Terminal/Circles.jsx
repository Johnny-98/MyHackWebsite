import React, { Component } from 'react';

class Circles extends Component {
    render =()=> {
        var circleStyle = {
            margin:5,
            display:"inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width:15,
            height:15,
        };
        return (
            <div style={circleStyle}>
            </div>
        );
    }
}

export default Circles;

