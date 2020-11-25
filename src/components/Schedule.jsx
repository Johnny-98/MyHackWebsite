import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content'
import '../css/App.css';
import '../css/table.css';
import ContentItem from './ContentCard'
import Peter from '../media/Icons/Peter2.jpg'





const Schedule = () => (
    <div >
        <div className="title">MY PROJECTS</div>
        <Tabs defaultActiveKey="ALL" id="uncontrolled-tab-schedule"
            style={{ width: "min(500px, 100%)", margin: "0 auto", paddingBottom: "1px", border: "none" }}>

            <Tab eventKey="ALL" title="ALL">
                <div className="committee-row">
                    <div className="committee-sec">
                        <ContentItem
                            src={Peter}
                            text1='Alexandra Manciu'
                            text2='HACKATHON DIRECTO'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Alexandra Manciu'
                            text2='HACKATHON DIRECTOR'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Sonia Jakubiak'
                            text2='SPONSORSHIP DIRECTOR'
                        />

                    </div>
                    <div className="committee-sec">

                        <ContentItem
                            src={Peter}
                            text1='Jonny Elkin'
                            text2='MARKETING DIRECTOR'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Ilia Manolov'
                            text2='MARKETING DIRECTOR'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Deniz de Barros'
                            text2='DESIGN DIRECTOR'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="React" title="React.js">
                <div className="committee-row">
                    <div className="committee-sec">

                        <ContentItem
                            src={Peter}
                            text1='Alexandra Manciu'
                            text2='HACKATHON DIRECTO'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Alexandra Manciu'
                            text2='HACKATHON DIRECTOR'
                        />
                        <ContentItem
                            src={Peter}
                            text1='Sonia Jakubiak'
                            text2='SPONSORSHIP DIRECTOR'
                        />
                    </div>
                </div>
            </Tab>



            <Tab eventKey="Other" title="Other">
                <div className="committee-row">
                    <div className="committee-sec">

                        <ContentItem
                            src={Peter}
                            text1='Alexandra Manciu'
                            text2='HACKATHON DIRECTO'
                        />
                    </div>
                </div>
            </Tab>

        </Tabs>

    </div>

);


export default Schedule;