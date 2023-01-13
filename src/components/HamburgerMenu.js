import classes from './HamburgerMenu.module.css';
import { useState, useEffect, useCallback } from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/hamburger-menu.svg';

const HamburgerMenu = () => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const openHamburgerMenu = () => {
    setHamburgerOpen(true);
  };
  const [scrollingDelay, setScrollingDelay] = useState(false);

  const handleScroll = useCallback(() => {
    if (!scrollingDelay) {
      const windowScrollPosition = window.scrollY;
      const mainSectionHeight =
        document.getElementById('root').getElementsByTagName('section')[0]
          .offsetHeight / 2;

      if (windowScrollPosition >= mainSectionHeight) {
        setHamburgerVisible(true);
      } else if (!hamburgerOpen) {
        setHamburgerVisible(false);
      }

      setScrollingDelay(true);

      setTimeout(() => {
        setScrollingDelay(false);
      }, [100]);
    }
  }, [scrollingDelay, hamburgerOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const hamburgerClasses = `${classes.hamburger} ${
    hamburgerOpen ? classes.open : null
  }`;

  const hamburgerButtonClasses = `${classes['hamburger-button']} ${
    hamburgerVisible ? classes.visible : null
  }`;

  return (
    <>
      <div className={hamburgerClasses}>
        <div className={classes.bounds}>
          <div className={hamburgerButtonClasses} onClick={openHamburgerMenu}>
            <HamburgerIcon />
          </div>
          <div className={classes['hamburger-menu']}>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="features">Features</a>
              </li>
              <li>
                <a href="projects">Projects</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
