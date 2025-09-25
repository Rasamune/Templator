import { useEffect, useState } from 'react';
import Header from './components/Header';
import Landing from './views/Landing';
import Features from './views/Features';
import Snippet from './views/Snippet';
import Projects from './views/Projects';
import About from './views/About';
import Footer from './views/Footer';
import TechShowcase from './components/TechShowcase';
import TechShowcaseToggle from './components/TechShowcaseToggle';

function App() {
  const [showTechAnnotations, setShowTechAnnotations] = useState(true);

  // If Page Section is includew in Path, automatically jump to the specified section
  useEffect(() => {
    const path = window.location.hash.slice(1);
    const elementToScrollTo = document.getElementById(path);
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <Features />
      <Snippet />
      <Projects />
      <About />
      <Footer />
      <TechShowcase enabled={showTechAnnotations} />
      <TechShowcaseToggle 
        enabled={showTechAnnotations} 
        onToggle={() => setShowTechAnnotations(!showTechAnnotations)}
      />
    </>
  );
}

export default App;
