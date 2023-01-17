import classes from './HamburgerMenu.module.css';
import { useState, useEffect, useCallback } from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/hamburger-menu.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import Fade from './Fade';

const HamburgerMenu = props => {
  const isMobile = window.innerWidth < 481 ? true : false;
  const [hamburgerVisible, setHamburgerVisible] = useState(isMobile);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrollingDelay, setScrollingDelay] = useState(false);
  const [scrollFreezePosition, setScrollFreezePosition] = useState(0);

  const openHamburgerMenu = () => {
    const windowScrollPosition = window.scrollY;
    setScrollFreezePosition(windowScrollPosition);
    setHamburgerOpen(true);
  };

  const closeHamburgerMenu = () => {
    setHamburgerOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (!isMobile) {
      if (!scrollingDelay && !hamburgerOpen) {
        const windowScrollPosition = window.scrollY;
        const mainSectionHeight =
          document.getElementById('root').getElementsByTagName('section')[0]
            .offsetHeight / 2;

        if (windowScrollPosition >= mainSectionHeight) {
          setHamburgerVisible(true);
        } else if (!hamburgerOpen) {
          setHamburgerVisible(false);
        }

        //Set a short time out so scripts don't run on every mouse wheel/scroll bar movement iteration
        setScrollingDelay(true);

        setTimeout(() => {
          setScrollingDelay(false);
        }, [100]);
      }
    }

    // If Hamburger is Open, freeze scroll position by jumping to the position previously recorded when hamburger was opened
    if (hamburgerOpen) {
      window.scrollTo(0, scrollFreezePosition);
    }
  }, [scrollingDelay, hamburgerOpen, scrollFreezePosition, isMobile]);

  // On href click force the page to reload so that the animations for the section play
  const handleClick = e => {
    e.preventDefault();
    // const element = e.target.getAttribute('href');
    // window.history.pushState({}, '', `${window.location.origin}/${element}`);
    // window.location.reload();
    setScrollFreezePosition(false);
    setHamburgerOpen(false);
    props.onNavigate(e);
  };

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
            <Fade direction="top" animationSpeed="500" wait="800">
              <div
                className={classes['hamburgerclose-button']}
                onClick={closeHamburgerMenu}
              >
                <CloseIcon />
              </div>
            </Fade>
            <ul>
              <Fade direction="top" animationSpeed="500" wait="675">
                <li>
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
              </Fade>
              <Fade direction="top" animationSpeed="500" wait="550">
                <li>
                  <a href="#features" onClick={handleClick}>
                    Features
                  </a>
                </li>
              </Fade>
              <Fade direction="top" animationSpeed="500" wait="425">
                <li>
                  <a href="#projects" onClick={handleClick}>
                    Projects
                  </a>
                </li>
              </Fade>
              <Fade direction="top" animationSpeed="500" wait="300">
                <li>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
