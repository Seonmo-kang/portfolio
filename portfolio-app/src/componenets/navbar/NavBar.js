import React, {useState, useEffect, useRef} from 'react';
import {Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Github, Linkedin } from 'react-bootstrap-icons';
import './navbar.scss';
import resume from '../../img/resume/Seonmo_Kang_Resume.pdf';

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const scrollPosition = useRef();

    useEffect(()=>{
      const onScroll = () =>{
        if (scrollPosition.current < window.scrollY){
          setScrolled(true);
        }else{
          setScrolled(false);
        }
        scrollPosition.current=window.scrollY;
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value)=>{
      setActiveLink(value);
    }

    return (
      <Navbar collapseOnSelect expand="md" fixed="top" className={ scrolled ? 'navbar scrolled' : 'navbar'} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='logo' href="#home">
            Seonmo Kang
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
              bg='dark' variant='dark'
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='#home' className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href='#projects' className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                  <Nav.Link href={resume} download className={activeLink === 'resume'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Resume</Nav.Link>
                  <Nav.Link href='#contact' className={activeLink === 'contact'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <Nav className='social-links'>
                  <Nav.Item className='social-link'><a className='social-github px-2' href="https://github.com/seonmo-kang" target="_blank" rel="noopener noreferrer"><Github bg="light"></Github></a></Nav.Item>
                  <Nav.Item className='social-link'><a className='social-linkedin px-2' href="https://linkedin.com/in/seonmo-kang" target="_blank" rel="noopener noreferrer"><Linkedin></Linkedin></a></Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    )
}

export default NavBar