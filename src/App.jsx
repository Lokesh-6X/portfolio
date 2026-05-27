import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./components/Footer/Footer";
import ContactModal from "./components/ContactModal/ContactModal";
import Projects from "./components/Projects/Projects";

import "./App.css";


function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app">
      <ParticlesBackground />

      <ContactModal 
        isOpen={isContactOpen}
  setIsOpen={setIsContactOpen} />

      <Navbar setIsContactOpen={setIsContactOpen} />
      <Hero setIsContactOpen={setIsContactOpen} />
      <Skills />
      <Projects/>
      <Footer />
    </ div>
  );
}

export default App;