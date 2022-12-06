import { useState, useEffect } from 'react';
import classes from './LazyLoad.module.css';

const LazyLoad = ({ children, animationSpeed = 1000 }) => {
  const [loaded, setIsLoaded] = useState(false);
  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, animationSpeed);
    }
  }, [loaded, animationSpeed]);

  return (
    <div
      className={`${classes.lazyload} ${loaded ? classes.loaded : ''}`}
      style={{ transitionDuration: durationInSeconds }}
    >
      {children}
    </div>
  );
};

export default LazyLoad;
