import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useIsMobile } from './useIsMobile';
import classes from './TechShowcase.module.css';

const TechShowcase = ({ enabled = true }) => {
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const [annotationPositions, setAnnotationPositions] = useState({});
  const annotationRefs = useRef({});

  const isMobile = useIsMobile();

  const annotations = useMemo(() => [
    // LANDING VIEW ANNOTATIONS
    {
      id: 'landing-view',
      targetSelector: '[data-annotation="landing-view"]',
      title: 'Landing View Component',
      description: 'Dynamic height calculation for perfect viewport fitting',
      code: `const height = 
  document.documentElement.clientHeight + "px";
<View id="landing" height={height}>`,
      offset: { x: -100, y: 20 },
      position: 'center',
      highlights: ['Full viewport height on load', 'Responsive to window resize', 'Smooth scrolling support']
    },
    {
      id: 'lazy-background',
      targetSelector: '[data-annotation="landing-background"]',
      title: 'Lazy-Loaded Hi-Res Image',
      description: 'Performance-optimized background loading',
      code: `const imageLoadHandler = () => {
    setImageLoaded(true);
};

<img onLoad={imageLoadHandler} ... />`,
      dropdownPosition: 'right',
      offset: { x: -150, y: 100 },
      highlights: ['Reduces initial load time', 'Intersection Observer API', 'Progressive enhancement']
    },
    {
      id: 'hero-animation',
      targetSelector: '[data-annotation="hero-text"]',
      title: 'Staggered Hero Animations',
      description: 'Sequential fade-in animations for visual hierarchy',
      code: `<Fade>
  <h1>{title}</h1>
  <p>{subtitle}</p>
</Fade>
<Slide wait="1000" animationSpeed="500">
    ...`,
        position: 'left',
        dropdownPosition: 'left',
      offset: { x: 40, y: 120 },
      highlights: ['Customizable delays', 'GPU-accelerated', 'Accessible animations']
    },

    // FEATURES VIEW ANNOTATIONS (existing ones)
    {
      id: 'view-component',
      targetSelector: '[data-annotation="viewtitle"]',
      title: 'Expandable View Component',
      description: 'Reusable view wrapper with flexible height options',
      code: `<View id="features" expandable="true">
    ...`,
      offset: { x: 0, y: -20 },
      position: 'center',
      highlights: ['Semantic HTML5 sections', 'Built-in scroll animations', 'Performance optimized']
    },
    {
      id: 'fade-animation',
      targetSelector: '[data-annotation="featureitem"]',
      title: 'Fade Animation Component',
      description: 'Intersection Observer-based fade animations',
      code: `import useIntersect (...)

const Fade = ({
  ...
  animationSpeed = 1000,
  intersectOffset = '0%',
  direction = 'bottom',
  wait = 0,
}) => {...}`,
      offset: { x: 0, y: 200 },
      position: 'center',
      highlights: ['Lazy-loaded animations', 'GPU-accelerated transforms', 'Configurable thresholds']
    },
    {
      id: 'svg-icons',
      targetSelector: '[data-annotation="featureicon"]',
      title: 'SVG as React Components',
      description: 'Optimized SVG imports for better performance',
      code: `import { ReactComponent as Icon }`,
      offset: { x: 0, y: 30 },
      position: 'center',
      dropdownPosition: 'left',
      highlights: ['Tree-shakeable imports', 'Customizable with CSS', 'Smaller bundle size']
    },

    // SNIPPET VIEW ANNOTATIONS
    {
      id: 'snippet-container',
      targetSelector: '#snippet',
      title: 'Code Snippet Container',
      description: 'Dedicated view for displaying code examples',
      code: `<View id="snippet">
  <Container>
    {/* Code display logic */}
  </Container>
</View>`,
      offset: { x: -100, y: 20 },
      highlights: ['Syntax highlighting ready', 'Copy-to-clipboard support', 'Responsive code blocks']
    },
    {
      id: 'snippet-slide',
      targetSelector: '[data-annotation="snippet-content"]',
      title: 'Preset Views for Snippets',
      description: 'Fixed view dimensions for content presentation',
      code: `<View half="true" expandable="true">
  ...`,
      offset: { x: 0, y: 100 },
      position: 'center',
      highlights: ['Direction control', 'Smooth transitions', 'Mobile-optimized']
    },

    // PROJECT VIEW ANNOTATIONS
    {
      id: 'project-grid',
      targetSelector: '#projects',
      title: 'Reusable Background Animation',
      description: 'Reusable background layers with slide animations',
      code: `<Background>
    <Slide>
        <div className={classes.pinkbox} />
    </Slide>
    <Slide wait="500">
        <div className={classes.blackbox} />
    </Slide>
</Background>`,
      offset: { x: 0, y: 100 },
      position: 'center',
      highlights: ['Reusable component', 'Configurable animations', 'Multiple layers']
    },
    {
      id: 'project-card',
      targetSelector: '[data-annotation="project-card"]',
      title: 'Composable React Components',
      description: 'Composable React components to build cards',
      code: `<Fade animationSpeed="750">
    ...
    <Slide lazyload="true">
        <button></button>
    </Slide>
    ...
</Fade>`,
      offset: { x: 50, y: 50 },
      position: 'center',
      highlights: ['Reusable Components', 'Stackable Components', 'Link optimization']
    },

    // COMPONENT ARCHITECTURE ANNOTATIONS
    {
      id: 'container-pattern',
      targetSelector: '[data-annotation="container"]',
      title: 'Container Component Pattern',
      description: 'Consistent max-width and padding across all views',
      code: `<Container>
  {/* Max-width: 1200px */}
  {/* Responsive padding */}
</Container>`,
      offset: { x: -150, y: 30 },
      highlights: ['Reusable wrapper', 'Consistent spacing', 'Mobile-first design']
    },
    {
      id: 'background-pattern',
      targetSelector: '[data-annotation="background-layer"]',
      title: 'Background Layer System',
      description: 'Separate z-index layer for decorative elements',
      code: `<Background>
  {/* z-index: -1 */}
  {/* Position: absolute */}
</Background>`,
      offset: { x: -100, y: 50 },
      highlights: ['Performance isolation', 'Parallax-ready', 'Clean separation']
    },
    {
      id: 'animation-system',
      targetSelector: '[data-annotation="fade-component"]',
      title: 'Unified Animation System',
      description: 'Consistent animation components used across all views',
      code: `// Reusable across entire app
<Fade threshold={0.1} duration="1s">
<Slide direction="up" distance="50px">`,
      offset: { x: -150, y: 30 },
      highlights: ['DRY principle', 'Configurable timing', 'Performance optimized']
    },
    {
      id: 'view-pattern',
      targetSelector: '[data-annotation="view-wrapper"]',
      title: 'View Component Architecture',
      description: 'Modular view system for easy page creation',
      code: `const View = ({
  ...
  half = false,
  expandable = false,
  heightauto = false,
}) => {...}`,
      offset: { x: 50, y: 50 },
      position: 'left',
      dropdownPosition: 'left',
      highlights: ['Modular design', 'Easy to add new sections', 'Consistent structure']
    },
    {
        id: 'hamburger-menu',
        targetSelector: '[data-annotation="hamburger-menu"]',
        title: 'Hamburger Menu',
        description: 'Accessible, animated hamburger menu for responsive navigation',
        code: `const [open, setOpen] = useState(false);
    <button
    aria-label="Open navigation"
    aria-expanded={open}
    onClick={() => setOpen(v => !v)}
    >
    <span className="hamburger-icon" />
    </button>
{open && <nav>...</nav>}`,
        offset: { x: -200, y: 50 },
        position: 'right',
        dropdownPosition: 'right',
        highlights: [
            'Visible on scroll',
            'Animated transitions',
            'Keyboard and screen reader support'
        ]
    }
  ], []);

  useEffect(() => {
    if (!enabled) return;

    const updatePositions = () => {
      const newPositions = {};

      annotations.forEach(annotation => {
        const element = document.querySelector(annotation.targetSelector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollY = window.pageYOffset;
          const scrollX = window.pageXOffset;
          
          // Check if element is in viewport
          const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (inViewport) {
            let startPosition;
            switch (annotation.position) {
                case 'left': startPosition = rect.left + scrollX; break;
                case 'center': startPosition = rect.left + scrollX + rect.width/2; break;
                default: startPosition = rect.right + scrollX; break;
            }

            // Calculate position relative to element
            newPositions[annotation.id] = {
              left: startPosition + (annotation.offset?.x || 0),
              top: rect.top + scrollY + (annotation.offset?.y || 0),
              visible: true
            };
          }
        }
      });
      
      setAnnotationPositions(newPositions);
    };

    // Update on scroll and resize
    window.addEventListener('scroll', updatePositions);
    window.addEventListener('resize', updatePositions);
    
    // Initial check
    setTimeout(updatePositions, 100);

    return () => {
      window.removeEventListener('scroll', updatePositions);
      window.removeEventListener('resize', updatePositions);
    };
  }, [enabled, annotations]);

  if (!enabled) return null;

  return (
    <div className={classes.techShowcase}>
      {annotations.map(annotation => {
        const position = annotationPositions[annotation.id];
        if (!position?.visible) return null;
        
        return (
          <div
            data-annotation-id={annotation.id}
            key={annotation.id}
            ref={el => annotationRefs.current[annotation.id] = el}
            className={`${classes.annotationPoint} ${activeAnnotation === annotation.id ? classes.active : ''}`}
            style={{
              position: 'absolute',
              left: `${position.left}px`,
              top: `${position.top}px`
            }}
            onClick={() => setActiveAnnotation(annotation.id)}
            onFocus={() => setActiveAnnotation(annotation.id)}
            onMouseEnter={() => setActiveAnnotation(annotation.id)}
            onMouseLeave={() => setActiveAnnotation(null)}
            onBlur={() => setActiveAnnotation(null)}
            tabIndex={0}
            aria-label={annotation.title}
          >
            <div className={classes.pulseRing}></div>
            <div className={classes.centerDot}></div>
            
            <div 
                className={classes.annotationContent}
                style={{
                    opacity: activeAnnotation === annotation.id ? 1 : 0,
                    pointerEvents: activeAnnotation === annotation.id ? 'auto' : 'none',
                    visibility: activeAnnotation === annotation.id ? 'visible' : 'hidden',
                    transition: 'opacity 0.2s',
                    ...(isMobile
                        ?   {
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 9999
                            }
                        : {
                            top: 50,
                            ...(annotation.dropdownPosition === 'left'
                                ? { left: 0, transform: 'none' }
                                : annotation.dropdownPosition === 'right'
                                ? { left: '100%', transform: 'translateX(-100%)' }
                                : { left: '50%', transform: 'translateX(-50%)' } // center (default)
                            )
                        }
                    )
                }}
                >
                <button 
                    className={classes.closeBtn}
                    onClick={e => {
                    e.stopPropagation();
                    setActiveAnnotation(null);
                    }}
                >
                    ×
                </button>
                <h3>{annotation.title}</h3>
                <p>{annotation.description}</p>
                <pre className={classes.codeSnippet}>
                    <code>{annotation.code}</code>
                </pre>
                <ul className={classes.highlights}>
                    {annotation.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                    ))}
                </ul>
                </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechShowcase;