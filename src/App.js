import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-gradient animate-gradient">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
