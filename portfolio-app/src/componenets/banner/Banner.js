import React, { useState, useEffect }  from 'react';
import './banner.css';

const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Web Developer", "Full-Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState( 200 - Math.random()*100 );
    const period = 2000;

    useEffect( () =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return() =>{ clearInterval(ticker)};
    }, [text])

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

    return (
        <section className='banner' id="home">
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Seonmo `}</h1>
            <h1><span className='wrap' id='rotate-wrap'>{text}</span></h1>
        </section>
    )
}

export default Banner