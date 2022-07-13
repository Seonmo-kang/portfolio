import React, { useRef, useEffect } from 'react'
import './banner.css';
import redBallon from '../../img/mouseMotion/red_ballon-removebg-preview.png'

const Ballon = ({ x,y,image,speed, ballons }) => {
    const ref = useRef(null);
    useEffect(()=>{
        ref.current.style.top = `${x}px`;
        ref.current.style.left = `${y}px`;
    },[x,y]);

    return (
    <div id='ballon' ref={ref}/>
  )
}

export default Ballon