import classes from './Header.module.css';
import Container from './Container';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={classes['header-wrapper']}>
          <div className={classes.logo}>
            <a href="/landing">Templator</a>
          </div>
          <div className={classes.pages}>
            <a href="/features">Features</a>
            <a href="/testimonials">Projects</a>
            <a href="/about">About</a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
