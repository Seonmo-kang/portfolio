import React,{ useState,useEffect,useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AnimatedLetters from '../banner/AnimatedLetters';
import './project.scss';
import ProjectList from './ProjectList';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(()=>{
        const timeoutId = setInterval(()=>{
            setLetterClass('text-animate-hover');
        },4000);
        return ()=>{ clearInterval(timeoutId)};
    })

  return (
    <React.Fragment>
    <section className="projects" id="projects">
        <Container>
            <Row className='projects-section mx-1 mx-md-2 mx-lg-5'>
                <Col className='px-sm-3 pt-5'>
                    <div className='projects-bx p-md-3'>
                        <h2 className='projects-subject'>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['F','e','a','t','u','r','e','d',' ','P','r','o','j','e','c','t','s']}
                            idx={15} />
                        </h2>
                        <ProjectList/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
</React.Fragment>

  )
}

export default Projects