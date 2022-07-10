import React from 'react';
import './App.css';
import Banner from './componenets/banner/Banner';
import NavBar from './componenets/navbar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar_test from './componenets/navbar/Navbar_test';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  );
}

export default App;
