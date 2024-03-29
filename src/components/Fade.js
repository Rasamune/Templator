import { useState, useEffect } from 'react';
import useIntersect from '../hooks/useIntersect';
import classes from './Fade.module.css';

const Fade = ({
  children,
  animationSpeed = 1000,
  intersectOffset = '0%',
  direction = 'bottom',
  wait = 0,
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [waitTimer, setWaitTimer] = useState(wait);
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
    /* Element is visible in the viewport and waitTimer is done (or waitTimer is not set) */
    if (isVisibleInViewport && !waitTimer) {
      disconnectIntersectObserver();

      // Fade element in
      if (!fadeIn) {
        setFadeIn(true); // Enabling this dynamically adds the "animate" class to the CSS
      }
    } else if (isVisibleInViewport) {
      /* Element is visible in viewport and waitTimer is set, start the timer based on the "wait" variable defined */
      setTimeout(() => {
        setWaitTimer(false);
      }, +wait);
    }
  }, [
    fadeIn,
    waitTimer,
    isVisibleInViewport,
    disconnectIntersectObserver,
    wait,
  ]);

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
