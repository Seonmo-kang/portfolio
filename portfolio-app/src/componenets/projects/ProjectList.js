import React from 'react'
import redballon from '../../img/mouseMotion/red_ballon-removebg-preview.png';
import './project.scss';
import {Container, Col, Row} from 'react-bootstrap';

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
                <div className='projects-list'>
                    <a className="project-card" href='#projects'>
                        <div className='image-wrap'></div>
                        <div className='project-img'>
                            <img src={redballon} alt="red ballon test"/>
                        </div>
                        <div className='project-text'>
                            <div className='date'> Jul, 14, 2022</div>
                            <div className='subject'>Test subject</div>
                            <div className='description'>Test description</div>
                            <div className='tech'>
                                <span className="tech-list">
                                    <span className='tech-icon'>Test</span>
                                    <span className='tech-icon'>Test2</span>
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
