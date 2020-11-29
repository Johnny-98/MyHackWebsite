import React, { Component } from 'react'
import '../../css/Terminal.scss'
import Circle from './Circles'
import Terminal from './Terminal'


class Skills extends Component {
    render() {
        return (
            <div className="technicalSkillDiv2" >
                <div class="terminal2_container">
                    <ul className="circles">
                        <Circle bgColor="red" style=" float:right; padding-right:30%;" />
                        <Circle bgColor="yellow" />
                        <Circle bgColor="green" />
                    </ul>
                    <Terminal />
                </div>
            </div>
        );
    }
}

export default Skills;