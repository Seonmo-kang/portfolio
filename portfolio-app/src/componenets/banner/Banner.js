import React, { useState, useEffect, useRef }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './banner.scss';
import useScript from './useScript';
import AnimatedLetters from './AnimatedLetters';
import resume from '../../img/resume/Seonmo_Kang_Resume.pdf';

const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = ["Software Engineer", "Web Developer", "Full-Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState( 200 - Math.random()*100 );
    const period = 2000;

    useEffect( () =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta);

        return() =>{ clearInterval(ticker)};
    }, [text]);

    const tick = () =>{
        let i = loopNum% toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);
        
        // isDeleting is true = Do deleting.
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        // isDeleting is false and updatedText is Completed
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    /* Mouse trail */
    const url=undefined;
    useScript(url);
    // const ballons = [
    //     '../../img/mouseMotion/yellow_ballon_removebgred_ballon-preview.png',
    //     '../../img/mouseMotion/red_ballon_removebgred_ballon-preview.png',
    //     '../../img/mouseMotion/green_ballon_removebgred_ballon-preview.png',
    //     '../../img/mouseMotion/blue_ballon_removebgred_ballon-preview.png',
    //     '../../img/mouseMotion/orange_ballon_removebgred_ballon-preview.png',
    //     '../../img/mouseMotion/purple_ballon_removebgred_ballon-preview.png'];
    // const [mousePosition, setMousePosition] = useState({
    //     x:null,
    //     y:null,
    // })
    // const [ ballonPosition,setBallonPosition ] = useState(new Array(5).fill(
    //     {
    //     x:null,
    //     y:null,
    //     ballon: null,
    //     speed: null
    //     }));
    
    // function randomInt(min,max){
    //     return Math.floor((Math.random()*(max-min)+min));
    // }
    // function animate(){
    //     // the second one follows the first.
    //     const chase = (target, follower) =>{
    //         return {
    //             x: (target.x+follower.x*10)/11,
    //             y: (target.y+follower.y*10)/11,
    //             ballon: randomInt(0,ballons.length),
    //             speed: randomInt(1,5)
    //         }
    //     }

    //     const positions = [];
    //     // first ballon
    //     positions.push(chase(mousePosition,ballonPosition[0]));
    //     let t = mousePosition;
    //     // rest of ballons
    //     ballonPosition.forEach(pos=>{
    //         positions.push(chase(t,pos));
    //         t=pos;
    //     })
    //     setBallonPosition(positions);
    // }

    // const timer = useRef(null);
    // useEffect(()=>{
    //     timer.current = setInterval(()=> animate(),100);
    //     return () => clearInterval(timer.current);
    // })
    
    // useEffect(()=>{
    //     const trackMouse = e =>{
    //         setMousePosition({ x: e.clientX, y: e.clientY });
    //         console.log(mousePosition);
    //     }
    //     window.addEventListener('mousemove', trackMouse);
    //     return ()=> window.removeEventListener('mousemove',trackMouse);
    // });
    // set up the ballon position

    /* letter animate */
    const [letterClass, setLetterClass] = useState('text-animate');
    const array = ['H','i','!',' ','I',"'",'m',' ','S','e','o','n','m','o'," ",":",")"];
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    return (
        <section className='banner' id="home">
                <canvas id='canvas'/>
                {/* { ballonPosition.map((ballon,index)=>(
                    <Ballon key={index} x={ballon.x} y={ballon.y} image={ballon.image} speed={ballon.speed} ballons={ballons}></Ballon>
                ))} */}
                <a style={{ display :"none" }} href="https://kor.pngtree.com/free-backgrounds'">Pngtree.com</a>
                <Container className='banner-container d-flex flex-wrap flex-direction-row align-items-center'>
                    <Row className='banner-box'>
                        <Col xs={12} md={6} xl={5} className='banner-text'>
                            <span className='tagline'>Welcome to my Portfolio!</span>
                            <h1>
                                <AnimatedLetters
                                letterClass={letterClass}
                                strArray={array}
                                idx={15} />
                            </h1>
                            <h1><span className='wrap' id='rotate-wrap'>{text}</span></h1>
                            <h5> Software Engineer / Web Developer / Full-Stack Developer </h5>
                        </Col>
                        <Col xs={12} md={6} xl={7} className='banner-description mt-md-0 mt-3 align-end'>
                            <p>I'm living in NJ, USA. I enjoy creating things that live on the internet. I keep learning new skills and technology for my goal.</p>
                        </Col>
                        <Col className="mt-5 text-center" xs={12} md={6}>
                            <a className="flat-button blue" href="#contact">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Contact  Me
                            </a>
                        </Col>
                        <Col className="mt-5 text-center" xs={12} md={6}>
                            <a className="flat-button yellow" href={resume} download>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                My resume
                            </a>
                        </Col>
                    </Row>
                </Container>
        </section>
    )
}

export default Banner