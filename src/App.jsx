import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </ div>
  );
}

export default App;