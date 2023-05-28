import { useState } from 'react';

import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Projects from './Components/Project-Section/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Seglogo from './images/SegLogo.png';
import ImagenT from './images/Technologies.png';
import Developer from './images/Developer.png';

import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`App text-primary h-screen bg-secondary`}>
      <Navbar Open={isOpen} funcOpen={() => setIsOpen(!isOpen)} logo={Seglogo} />
      <Main Open={isOpen} funcOpen={() => setIsOpen(!isOpen)} img={Developer} />
      <About Open={isOpen} funcOpen={() => setIsOpen(!isOpen)} imagen={ImagenT} />
      <Projects Open={isOpen} funcOpen={() => setIsOpen(!isOpen)} />
      <Contact 
        Open={isOpen} funcOpen={() => setIsOpen(!isOpen)}
        Github='https://github.com/Santi2007939' 
        Link='https://www.linkedin.com/in/fabrizio-alonso-santi-guerrero-562a3125a/'
        Mail='Mailto:fabrizioprogramador939@gmail.com'
        Twitter='https://twitter.com/Jonas62837530'
        />
      <Footer autor='Fabrizio Santi' año='2023'/>
    </div>
  )
}

export default App
