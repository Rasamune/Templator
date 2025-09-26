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
import TechNavigator from './components/TechNavigator';

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
      <TechShowcase enabled={showTechAnnotations} />
      <Header />
      <TechNavigator annotationIds={['lazy-background','hero-animation']} />
      <Landing />
      <TechNavigator annotationIds={['view-component','svg-icons', 'fade-animation']} />
      <Features />
      <TechNavigator annotationIds={['snippet-slide']} />
      <Snippet />
      <TechNavigator annotationIds={['project-grid','project-card']} />
      <Projects />
      <TechNavigator annotationIds={['view-pattern']} />
      <About />
      <Footer />
      
      <TechShowcaseToggle 
        enabled={showTechAnnotations} 
        onToggle={() => setShowTechAnnotations(!showTechAnnotations)}
      />
    </>
  );
}

export default App;
