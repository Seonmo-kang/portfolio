import React,{useState, useEffect, useRef} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
// import Loader from 'react-loaders';
import AnimatedLetters from '../banner/AnimatedLetters';
import "./contact.scss";
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
        .sendForm(
            'service_v90wu1r',
            'template_ixwr73d',
            refForm.current,
            'BYkXhq53QjAbtK2e7'
        )
        .then(
            (response)=>{
                alert('Message successfully sent!');
                window.reload(false);
            },
            (error)=>{
                alert('Failed to send the message',error);
            }
        )
    }
    return (
        <React.Fragment>
            <section className="contact" id="contact">
                <Container>
                    <Row className='contact-section mx-1 mx-md-2 mx-lg-5'>
                        <Col className='px-sm-3 pt-5'>
                            <div className='contact-bx p-md-3'>
                                <h2 className='contact-subject'>
                                    <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={['G','e','t',' ','I','n',' ','T','o','u','c','h','!']}
                                    idx={15} />
                                </h2>
                                <div className='contact-desciption'>
                                <span>my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! I don't bite!</span>
                                </div>
                            </div>
                            <div className='contact-form'>
                                <form ref={refForm} onSubmit={sendEmail}>
                                    <ul>
                                        <li className='half'>
                                            <input type="text" placeholder="Name" name='name' required/>
                                        </li>
                                        <li className='half'>
                                            <input type="email" placeholder="Email" name='email' required/>
                                        </li>
                                        <li >
                                            <input type="text" placeholder="Subject" name='subject' required/>
                                        </li>
                                        <li >
                                            <textarea placeholder="Message" name='message' required/>
                                        </li>
                                        <li>
                                            <button type="submit" className='flat-button yellow'>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                SEND
                                            </button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
        
        
    )
}

export default Contact