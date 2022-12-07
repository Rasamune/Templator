import { useState, useEffect } from 'react';
import classes from './LazyLoad.module.css';

const LazyLoad = ({ children, animationSpeed = 1000, waitfor = true }) => {
  const [loaded, setIsLoaded] = useState(false);
  const [animating, setIsAnimating] = useState(true);

  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;

  useEffect(() => {
    if (waitfor && !animating) {
      setIsLoaded(true);
      return;
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, animationSpeed);
  }, [waitfor, animating, animationSpeed]);

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
