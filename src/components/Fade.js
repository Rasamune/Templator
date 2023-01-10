import { useState, useEffect } from 'react';
import useIntersect from '../hooks/useIntersect';
import classes from './Fade.module.css';

const Fade = ({
  children,
  animationSpeed = 1000,
  intersectOffset = '0%',
  direction = 'bottom',
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [ref, entry, disconnectIntersectObserver] = useIntersect({
    rootMargin: `0% 0% ${intersectOffset} 0%`,
  });
  const durationInSeconds =
    animationSpeed >= 1000
      ? `${animationSpeed.toString().slice(0, 1)}s`
      : `.${animationSpeed.toString().slice(0, 1)}s`;

  /* Get element and props from children to be inherited by a new element with the Slide props */
  const isVisibleInViewport = entry.isIntersecting;

  useEffect(() => {
    if (isVisibleInViewport && !fadeIn) {
      setFadeIn(true);
      disconnectIntersectObserver();
    }
  }, [fadeIn, isVisibleInViewport, disconnectIntersectObserver]);

  const fadeInClasses = `${classes.fade} ${classes[direction]} ${
    fadeIn ? classes.animate : ''
  }`;

  const fadeProps = {
    className: fadeInClasses,
    style:
      animationSpeed === 1000
        ? null
        : { transitionDuration: durationInSeconds },
    ref: ref,
  };

  return <div {...fadeProps}>{children}</div>;
};

export default Fade;
