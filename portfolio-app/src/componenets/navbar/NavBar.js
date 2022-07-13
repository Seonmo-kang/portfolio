import React, {useState, useEffect, useRef} from 'react';
import {Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Github, Linkedin } from 'react-bootstrap-icons';
import './navbar.css';

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [scrollPosition,setScrollPosition] = useState(0);

    useEffect(()=>{
      const onScroll = () =>{
        // if (window.scrollY>50){
        //   setScrolled(true);
        // }else{
        //   setScrolled(false);
        // }
        if (scrollPosition < window.scrollY){
          setScrolled(true);
        }else{
          setScrolled(false);
        }
        setScrollPosition(window.scrollY);
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
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          {/* <Navbar.Collapse  className="link-list" id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href='#home' className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href='#project' className={activeLink === 'project'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Project</Nav.Link>
              <Nav.Link href='#skills' className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href='#contact' className={activeLink === 'contact'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          <Navbar.Offcanvas
              className="bg-dark"
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton variant="light">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='#home' className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href='#project' className={activeLink === 'project'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Project</Nav.Link>
                  <Nav.Link href='#skills' className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href='#contact' className={activeLink === 'contact'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <Nav className='social-links'>
                  <Nav.Item className='social-link'><a className='social-github px-2' href="https://github.com/seonmo-kang" target="_blank" rel="noopener noreferrer"><Github bg="light"></Github></a></Nav.Item>
                  <Nav.Item className='social-link'><a className='social-linkedin px-2' href="https://linkedin.com/seonmo-kang" target="_blank" rel="noopener noreferrer"><Linkedin></Linkedin></a></Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    )
}

export default NavBar