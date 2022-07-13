import React from 'react';
import './App.css';
import Banner from './componenets/banner/Banner';
import NavBar from './componenets/navbar/NavBar';
import Skills from './componenets/skills/Skills';
import About from './componenets/about/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </>
  );
}

export default App;
