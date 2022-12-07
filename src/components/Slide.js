import { useEffect, useState } from 'react';
import useIntersect from '../hooks/useIntersect';
import classes from './Slide.module.css';

const Slide = ({
  children,
  xorigin = '0',
  yorigin = '0',
  animationSpeed = 1000,
  intersectOffset = '0%',
}) => {
  const [slideIn, setSlideIn] = useState(false);
  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;
  const [ref, entry] = useIntersect({ rootMargin: intersectOffset });
  const isVisible = entry.isIntersecting;

  console.log(entry);

  useEffect(() => {
    if (isVisible) {
      setSlideIn(true);
    }
  }, [isVisible]);

  return (
    <div
      className={`${classes.slide} ${slideIn ? classes.in : ''}`}
      style={{
        transformOrigin: `${xorigin} ${yorigin}`,
        transitionDuration: durationInSeconds,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Slide;
