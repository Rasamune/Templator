import classes from './Header.module.css';
import Container from './Container';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const jumpToSection = e => {
    e.preventDefault();
    const element = e.target.getAttribute('href');
    const elementToScrollTo = document.getElementById(element);
    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView();
    }
    window.history.replaceState(
      'Templator',
      'Templator',
      `http://localhost:3000/${element}`
    );
  };

  return (
    <header>
      <Container>
        <HamburgerMenu />
        <div className={classes['header-wrapper']}>
          <div className={classes.logo}>
            <a href="home" onClick={jumpToSection}>
              Templator
            </a>
          </div>
          <div className={classes.pages}>
            <a href="features" onClick={jumpToSection}>
              Features
            </a>
            <a href="projects" onClick={jumpToSection}>
              Projects
            </a>
            <a href="about" onClick={jumpToSection}>
              About
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
