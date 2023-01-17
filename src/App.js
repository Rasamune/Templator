import { useEffect } from 'react';
import Header from './components/Header';
import Landing from './views/Landing';
import Features from './views/Features';
import Snippet from './views/Snippet';
import Projects from './views/Projects';
import About from './views/About';
import Footer from './views/Footer';

function App() {
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
    </>
  );
}

export default App;
