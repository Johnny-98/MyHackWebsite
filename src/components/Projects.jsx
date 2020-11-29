import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/Project.css';
import ContentItem from './ContentCard'
import BookHub from '../media/projects/BookHub.png'
import MunchMoney from '../media/projects/MunchMoney.png'
import SpicyChess from '../media/projects/Spicy-Chess.png'
import CarGame from '../media/projects/They-See-Me-Stalling.png'



const Projects = () => (
    <div >
        <div className="title">MY PROJECTS</div>
        <Tabs defaultActiveKey="ALL" id="uncontrolled-tab-schedule"
            style={{ width: "min(500px, 100%)", margin: "0 auto", paddingBottom: "1px", border: "none" }}>

            <Tab eventKey="ALL" title="ALL">
                <div className="project-row">
                    <div className="project-sec">
                        <ContentItem
                            src={MunchMoney}
                            text1='MunchMoney'
                            text2='AndroidStudio'
                        />
                        <ContentItem
                            src={BookHub}
                            text1='BookHub'
                            text2='React.js'
                        />
                        <ContentItem
                            src={SpicyChess}
                            text1='SpicyChess'
                            text2='React.js'
                        />

                    </div>
                    <div className="project-sec">

                        <ContentItem
                            src={CarGame}
                            text1='They-See-Me-Stalling'
                            text2='React.js'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="React" title="React.js">
                <div className="project-row">
                    <div className="project-sec">

                        <ContentItem
                            src={BookHub}
                            text1='BookHub'
                            text2='React.js'
                        />
                        <ContentItem
                            src={SpicyChess}
                            text1='SpicyChess'
                            text2='React.js'
                        />
                        <ContentItem
                            src={CarGame}
                            text1='They-See-Me-Stalling'
                            text2='React.js'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="Other" title="Other">
                <div className="project-row">
                    <div className="project-sec">

                        <ContentItem
                            src={MunchMoney}
                            text1='MunchMoney'
                            text2='AndroidStudio'
                        />
                    </div>
                </div>
            </Tab>

        </Tabs>

    </div>

);


export default Projects;