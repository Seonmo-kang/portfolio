import React,{useState, useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 675 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 675, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skills' id="skills">
        <Container>
            <Row className='skill-section mx-md-3'>
                <Col className='px-sm-3 p-0'>
                    <div className='skill-bx p-md-3'>
                        <h2 className='skill-subject'>Skills</h2>
                        <div className='skill-desciption'>
                            <p>You can find the list of my top skills below.</p>
                            <p>I'm also open to learn more about related frameworks, libraries, languages, etc!</p>
                        </div>
                    </div>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img alt="image of circle and keep moving"/>
                            <h5>Web Development</h5>
                            <p>HTML,JavaScript,CSS,ReactJS,Redux</p>
                        </div>
                        <div className='item'>
                            <img alt="image of circle and keep moving"/>
                            <h5>REST APIs</h5>
                            <p>HTTPS protocol, Web Socket</p>
                        </div>
                        <div className="item">
                            <img alt="image of circle and keep moving"/>
                            <h5>Program languages</h5>
                            <p>Java, Python, JavaScript</p>
                        </div>
                        <div className='item'>
                            <img alt="image of circle and keep moving"/>
                            <h5>SQL</h5>
                            <p>MySQL</p>
                        </div>
                        <div className="item">
                            <img alt="image of circle and keep moving"/>
                            <h5>DevOps</h5>
                            <p>AWS, NGINX, Firebase</p>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skills