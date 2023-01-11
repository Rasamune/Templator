import React, { Children, useEffect, useState } from 'react';
/* useIntersect hook required to animate slide-in when viewport reaches element */
import useIntersect from '../hooks/useIntersect';
import classes from './Slide.module.css';

const Slide = ({
  children,
  animationSpeed = 1000,
  intersectOffset = '-15%',
  lazyload = false,
  wait = 0,
}) => {
  const [waitTimer, setWaitTimer] = useState(wait);
  const [slideIn, setSlideIn] = useState(false);
  const [lazyLoaderAnimating, setLazyLoaderAnimating] = useState(lazyload);
  const [imageLoading, setImageLoading] = useState(lazyload);
  const [assetLoaded, setAssetLoaded] = useState(false);
  const [ref, entry, disconnectIntersectObserver] = useIntersect({
    rootMargin: `0% 0% ${intersectOffset} 0%`,
  });
  const durationInSeconds =
    animationSpeed >= 1000
      ? `${animationSpeed.toString().slice(0, 1)}s`
      : `.${animationSpeed.toString().slice(0, 1)}s`;
  let hasImageElement = false;

  /* Get element and props from children to be inherited by a new element with the Slide props */
  const isVisibleInViewport = entry.isIntersecting;
  const InheritedElementType = children.type;
  const inheritedProps = children.props;
  const inheritedClasses = children.props.className;

  const getNestedChildren = children => {
    return Children.map(children, childNode => {
      if (!React.isValidElement(childNode)) return childNode;

      let childProps = { ...childNode.props };

      /* If lazyload and child is an IMG element, do not render the element immediately, wait for intersect */
      if (lazyload && childNode.type === 'img' && !isVisibleInViewport) {
        hasImageElement = true;
        return;
      }

      if (lazyload && childNode.type === 'img') {
        hasImageElement = true;
        childProps = {
          ...childNode.props,
          onLoad: () => {
            setImageLoading(false);
          },
        };
      }

      return React.cloneElement(childNode, {
        ...childProps,
        children: getNestedChildren(childNode.props.children),
      });
    });
  };

  const nestedChildren = getNestedChildren(children.props.children);

  useEffect(() => {
    if (isVisibleInViewport && !waitTimer) {
      /* Element is visible in the viewport and waitTimer is done (or waitTimer is not set) */
      disconnectIntersectObserver();

      // Slide element in
      if (!slideIn) {
        setSlideIn(true); // Enabling this dynamically adds the "slideIn" class to the CSS
        return;
      }

      // If lazy loading is enabled
      if (lazyload) {
        // Wait for slide-in animation to finish
        if (!lazyLoaderAnimating) {
          // If assets are loading, wait for them
          if (!imageLoading || !hasImageElement) {
            setAssetLoaded(true); // Enabling this dynamically adds the "loaded" class to the CSS
            return;
          }
        }

        /* Set timer to the animation speed of slide-in
        and then set lazy loader animating to true */
        if (lazyLoaderAnimating) {
          setTimeout(() => {
            setLazyLoaderAnimating(false);
          }, +animationSpeed);
        }
      }
    } else if (isVisibleInViewport) {
      /* Element is visible in viewport and waitTimer is set, start the timer based on the "wait" variable defined */
      setTimeout(() => {
        setWaitTimer(false);
      }, +wait);
    }
  }, [
    disconnectIntersectObserver,
    isVisibleInViewport,
    waitTimer,
    slideIn,
    lazyLoaderAnimating,
    imageLoading,
    wait,
    lazyload,
    animationSpeed,
    hasImageElement,
  ]);

  const slideInClasses = `${classes.slide} ${slideIn ? classes.animate : ''}`;
  const lazyLoadClasses = `${lazyload ? classes.lazyload : ''} ${
    assetLoaded ? classes.loaded : ''
  }`;

  const slideProps = {
    ...inheritedProps,
    className: `${inheritedClasses} ${slideInClasses} ${lazyLoadClasses}`,
    style:
      animationSpeed === 1000
        ? null
        : { transitionDuration: durationInSeconds },
    ref: ref,
  };

  return (
    <InheritedElementType {...slideProps}>
      {nestedChildren}
    </InheritedElementType>
  );
};

export default Slide;
