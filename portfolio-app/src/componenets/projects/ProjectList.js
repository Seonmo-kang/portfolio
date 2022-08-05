import React from 'react'
import redballon from '../../img/mouseMotion/red_ballon-removebg-preview.png';
import './project.scss';
import {Container, Col, Row} from 'react-bootstrap';
import chatApp from '../../img/projects/chatApp.png';
import randomMachine from '../../img/projects/randomMachine.png';
import e_commerce from '../../img/projects/e-commerce.png';

/* 
    Project list in project section
    parameter :
        project image,
        Date,
        project name,
        project description,
        project tech list
 */
const ProjectList = () => {

  return (
    <Container>
        <Row>
            <Col xs={12} md={6} xl={4}>
                <div className='projects-list mb-4 mb-md-3'>
                    <a className="project-card" href='https://github.com/Seonmo-kang/chatApp'>
                        <div className='image-wrap'></div>
                        <div className='project-img'>
                            <img src={chatApp} alt="Chat app build with React Express image"/>
                        </div>
                        <div className='project-text'>
                            <div className='date'> Jul, 14, 2022</div>
                            <div className='subject'>Chat app</div>
                            <div className='description'>Chat app using websocket.io</div>
                            <div className='tech'>
                                <span className="tech-list">
                                    <span className='tech-icon'>React</span>
                                    <span className='tech-icon'>Express</span>
                                    <span className='tech-icon'>Socket.io</span>
                                    <span className='tech-icon'>Rest API</span>
                                    <span className='tech-icon'>SCSS</span>
                                    <span className='tech-icon'>MongoDB</span>
                                </span>
                                <span>Read more →</span>
                            </div>
                        </div>
                    </a>
                </div> 
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className='projects-list mb-4 mb-md-3'>
                    <a className="project-card" href='https://github.com/Seonmo-kang/Random-Quote-Machine'>
                        <div className='image-wrap'></div>
                        <div className='project-img'>
                            <img src={randomMachine} alt="Random Quote Machine"/>
                        </div>
                        <div className='project-text'>
                            <div className='date'> Jul, 01, 2022</div>
                            <div className='subject'>Random Quote Machine</div>
                            <div className='description'>Random Quote site build with React</div>
                            <div className='tech'>
                                <span className="tech-list">
                                    <span className='tech-icon'>React</span>
                                    <span className='tech-icon'>SCSS</span>
                                </span>
                                <span>Read more →</span>
                            </div>
                        </div>
                    </a>
                </div> 
            </Col>
            <Col xs={12} md={6} xl={4}>
                <div className='projects-list mb-4 mb-md-3'>
                    <a className="project-card" href='https://github.com/Seonmo-kang/e-commerce'>
                        <div className='image-wrap'></div>
                        <div className='project-img'>
                            <img src={e_commerce} alt="E-commerce website image"/>
                        </div>
                        <div className='project-text'>
                            <div className='date'> Jun, 03, 2022</div>
                            <div className='subject'>E commerce</div>
                            <div className='description'>E commerce site build with Django</div>
                            <div className='tech'>
                                <span className="tech-list">
                                    <span className='tech-icon'>Django</span>
                                    <span className='tech-icon'>Bootstrap</span>
                                    <span className='tech-icon'>Oauth 2.0</span>
                                    <span className='tech-icon'>Bootstrap</span>
                                    <span className='tech-icon'>AJAX</span>
                                </span>
                                <span>Read more →</span>
                            </div>
                        </div>
                    </a>
                </div> 
            </Col>
        </Row>
    </Container>
 
  )
}

export default ProjectList
