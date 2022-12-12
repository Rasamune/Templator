import React, { Children, useState, useEffect } from "react";
import useIntersect from "../hooks/useIntersect";
import classes from "./Fade.module.css";

const Fade = ({
  children,
  animationSpeed = 1000,
  intersectOffset = "-15%",
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [ref, entry, disconnectIntersectObserver] = useIntersect({
    rootMargin: `0% 0% ${intersectOffset} 0%`,
  });
  const durationInSeconds = `${animationSpeed.toString().slice(0, 1)}s`;

  /* Get element and props from children to be inherited by a new element with the Slide props */
  const isVisibleInViewport = entry.isIntersecting;
  const InheritedElementType = children.type;
  const inheritedProps = children.props;
  const inheritedClasses = children.props.className
    ? children.props.className
    : "";

  const getNestedChildren = (children) => {
    return Children.map(children, (childNode) => {
      if (!React.isValidElement(childNode)) return childNode;

      return React.cloneElement(childNode, {
        ...childNode.props,
        children: getNestedChildren(childNode.props.children),
      });
    });
  };

  const nestedChildren = getNestedChildren(children.props.children);

  useEffect(() => {
    if (isVisibleInViewport && !fadeIn) {
      setFadeIn(true);
      disconnectIntersectObserver();
    }
  }, [fadeIn, isVisibleInViewport, disconnectIntersectObserver]);

  const fadeInClasses = `${classes.fade} ${fadeIn ? classes.fadein : ""}`;

  return (
    <InheritedElementType
      {...inheritedProps}
      className={`${inheritedClasses} ${fadeInClasses}`}
      style={{
        transitionDuration: durationInSeconds,
      }}
      ref={ref}
    >
      {nestedChildren}
    </InheritedElementType>
  );
};

export default Fade;
