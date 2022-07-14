import React from 'react';
import './App.css';
import Banner from './componenets/banner/Banner';
import NavBar from './componenets/navbar/NavBar';
import Skills from './componenets/skills/Skills';
import About from './componenets/about/About';
import Contact from './componenets/contact/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Projects from './componenets/projects/Projects';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
