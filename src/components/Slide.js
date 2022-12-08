import React, { Children, useEffect, useState } from 'react';
/* useIntersect hook required to animate slide-in when viewport reaches element */
import useIntersect from '../hooks/useIntersect';
import classes from './Slide.module.css';

const Slide = ({
  children,
  animationSpeed = 1000,
  intersectOffset = '-15%',
  lazyload = false,
  waitfor = true,
}) => {
  const [slideIn, setSlideIn] = useState(false);
  const [loaded, setIsLoaded] = useState(false);
  const [animating, setIsAnimating] = useState(lazyload);
  const [ref, entry, disconnectObserver] = useIntersect({
    rootMargin: `0% 0% ${intersectOffset} 0%`,
  });
  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;
  const isVisible = entry.isIntersecting;
  const InheritedElementType = children.type;
  const inheritedProps = children.props;
  const inheritedClasses = children.props.className;

  const getNestedChildren = children => {
    return Children.map(children, child => {
      if (!React.isValidElement(child)) return child;

      return React.cloneElement(child, {
        ...child.props,
        children: getNestedChildren(child.props.children),
      });
    });
  };

  const nestedChildren = getNestedChildren(children.props.children);

  useEffect(() => {
    /* Slide in when element is intersecting viewport */
    if (isVisible && !slideIn) {
      setSlideIn(true);
      disconnectObserver();
    }

    /* If lazy loading is enabled */
    if (lazyload && isVisible) {
      /* Wait for asset to load */
      if (waitfor && !animating) {
        setIsLoaded(true);
        return;
      }

      /* Animate Lazyloader */
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
    <InheritedElementType
      {...inheritedProps}
      className={`${inheritedClasses} ${slideInClasses} ${lazyLoadClasses}`}
      style={{
        transitionDuration: durationInSeconds,
      }}
      ref={ref}
    >
      {nestedChildren}
    </InheritedElementType>
  );
};

export default Slide;
