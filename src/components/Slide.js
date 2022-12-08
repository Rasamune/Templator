import { useEffect, useState } from 'react';
/* useIntersect hook required to animate when viewport reaches element */
import useIntersect from '../hooks/useIntersect';
import classes from './Slide.module.css';

const Slide = ({
  children,
  animationSpeed = 1000,
  intersectOffset = '0%',
  lazyload = false,
  waitfor = true,
}) => {
  const [slideIn, setSlideIn] = useState(false);
  const [loaded, setIsLoaded] = useState(false);
  const [animating, setIsAnimating] = useState(lazyload);

  const [ref, entry] = useIntersect({ rootMargin: intersectOffset });

  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;
  const isVisible = entry.isIntersecting;

  console.log(children);

  useEffect(() => {
    /* Slide in when element is intersecting viewport */
    if (isVisible) {
      setSlideIn(true);
    }

    /* If lazy loading is enabled */
    if (lazyload) {
      /* Wait for asset to load */
      if (waitfor && !animating) {
        setIsLoaded(true);
        return;
      }

      /* Animated Lazyloader */
      setTimeout(() => {
        setIsAnimating(false);
      }, animationSpeed);
    }
  }, [isVisible, waitfor, animating, lazyload, animationSpeed]);

  const slideInClasses = `${classes.slide} ${slideIn ? classes.animate : ''}`;
  const lazyLoadClasses = `${lazyload ? classes.lazyload : ''} ${
    loaded ? classes.loaded : ''
  }`;

  return (
    <div
      className={`${slideInClasses} ${lazyLoadClasses}`}
      style={{
        transitionDuration: durationInSeconds,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Slide;
