import React from 'react';
import './App.css';
import Navbar2 from './components/Navbar2';
import About from './components/About';
import Whoweare from './components/Whoweare';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar2 />
        <br />
        <Navbar />
        <br />
        <About />
        <Whoweare />
        <Services />
        <Team />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
