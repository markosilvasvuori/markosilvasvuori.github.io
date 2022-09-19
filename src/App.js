import './App.scss';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
