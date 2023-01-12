import { useEffect } from 'react';
import Landing from './views/Landing';
import Features from './views/Features';
import Snippet from './views/Snippet';
import Projects from './views/Projects';
import About from './views/About';

function App() {
  // If Page Section is includew in Path, automatically jump to the specified section
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    const elementToScrollTo = document.getElementById(path);
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Landing />
      <Features />
      <Snippet />
      <Projects />
      <About />
    </>
  );
}

export default App;
