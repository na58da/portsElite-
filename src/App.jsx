import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // تحميل GSAP للتحريك المتقدم
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);
      window.gsap = gsap;
    };
    loadGSAP();
  }, []);

  return (
    <div className="App">
      <Header />
  <Hero />
  <Services />

  <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;