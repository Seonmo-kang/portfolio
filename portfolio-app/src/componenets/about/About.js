import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './about.scss';

const About = () => {
  return (
    <section className='about' id="about">
        <Container>
            <Row className="about-section">
                <Col className='p-md-3 p-0'>
                    <div className='about-bx p-md-3'>
                      About me
                    </div>
                    <div className='description'>
                      <p>Hello, I am Seonmo! </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About