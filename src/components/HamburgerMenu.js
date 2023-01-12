import classes from './HamburgerMenu.module.css';
import { useState } from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/hamburger-menu.svg';

const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const openHamburgerMenu = () => {
    setHamburgerOpen(true);
  };

  const hamburgerClasses = `${classes.hamburger} ${
    hamburgerOpen ? classes.open : null
  }`;

  return (
    <div className={hamburgerClasses}>
      <div className={classes.bounds}>
        <div
          className={classes['hamburger-button']}
          onClick={openHamburgerMenu}
        >
          <HamburgerIcon />
        </div>
      </div>
      <div className={classes['hamburger-menu']}></div>
    </div>
  );
};

export default HamburgerMenu;
