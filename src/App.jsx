import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <NavBar />

      <section className = "section section-grey">
        <Hero />
      </section>

      <section className = "section section-white">
        <Projects />
      </section>

      <section className = "section section-grey">
        <Skills />
      </section>
      
      <section className = "section section-white">
        <Education />
      </section>

      <section classname = "section section-grey">
        <Contact />
      </section>

      <section classname = "section section-dark_grey">
        <Footer />
      </section>
    </div>
  );
}

export default App;
