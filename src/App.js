import React from 'react';
import Header from './Components/Header';
import Homeitwork from './Components/Homeitwork';
import About from './Components/About';
import Agent from './Components/Agent';
import Properties from './Components/Properties';
import Contact from './Components/Contact';

export default function App() {
  
  return (
    <div className="App">
      <Header />
      <Homeitwork />
      <About />
      <Agent />
      <Properties />
      
      <Contact />
    </div>
  );
  
}

