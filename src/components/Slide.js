import { useEffect, useState } from 'react';
import classes from './Slide.module.css';

const Slide = ({
  children,
  xorigin = '0',
  yorigin = '0',
  animationSpeed = 1000,
}) => {
  const [slideIn, setSlideIn] = useState(false);
  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div
      className={`${classes.slide} ${slideIn ? classes.in : ''}`}
      style={{
        transformOrigin: `${xorigin} ${yorigin}`,
        transitionDuration: durationInSeconds,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
