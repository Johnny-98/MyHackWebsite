import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/Project.css';
import ContentItem from './ContentCard'
import Peter from '../media/Icons/Peter2.jpg'


const Projects = () => (
    <div >
        <div className="title">MY PROJECTS</div>
        <Tabs defaultActiveKey="ALL" id="uncontrolled-tab-schedule"
            style={{ width: "min(500px, 100%)", margin: "0 auto", paddingBottom: "1px", border: "none" }}>

            <Tab eventKey="ALL" title="ALL">
                <div className="project-row">
                    <div className="project-sec">
                        <ContentItem
                            src={Peter}
                            text1='Project 1'
                            text2='Test'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 2'
                            text2='Test 2'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 3'
                            text2='Test 3'
                        />

                    </div>
                    <div className="project-sec">

                        <ContentItem
                            src={Peter}
                            text1='Project 4'
                            text2='Test 4'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 5'
                            text2='Test 5'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 6'
                            text2='Test 6'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="React" title="React.js">
                <div className="project-row">
                    <div className="project-sec">

                        <ContentItem
                            src={Peter}
                            text1='Project 1'
                            text2='Test'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 2'
                            text2='Test'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Project 3'
                            text2='Test'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="Other" title="Other">
                <div className="project-row">
                    <div className="project-sec">

                        <ContentItem
                            src={Peter}
                            text1='Project Peter'
                            text2='Hire me plis'
                        />
                    </div>
                </div>
            </Tab>

        </Tabs>

    </div>

);


export default Projects;