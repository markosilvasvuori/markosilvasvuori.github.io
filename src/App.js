import { useState } from 'react';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import Hero from './components/Sections/Hero';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Welcome from './components/Welcome/Welcome';

function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  setTimeout(() => {
    setWelcomeDone(true);
  }, 2150);

  return (
    <>
      {!welcomeDone &&
        <Welcome />
      }
      {welcomeDone &&
        <>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      }
    </>
  );
}

export default App;
