import classes from './Footer.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import { ReactComponent as Twittericon } from '../assets/twitter.svg';
import { ReactComponent as Facebookicon } from '../assets/facebook.svg';
import { ReactComponent as Linkedinicon } from '../assets/linkedin.svg';
import { ReactComponent as Instagramicon } from '../assets/instagram.svg';

const Footer = () => {
  return (
    <View heightauto="true">
      <footer>
        <Container>
          <div className={classes.socials}>
            <ul>
              <li>
                <a href="http://twitter.com" rel="noreferrer" target="_blank">
                  <Twittericon />
                </a>
              </li>
              <li>
                <a href="http://facebook.com" rel="noreferrer" target="_blank">
                  <Facebookicon />
                </a>
              </li>
              <li>
                <a href="http://instagram.com" rel="noreferrer" target="_blank">
                  <Instagramicon />
                </a>
              </li>
              <li>
                <a href="http://linkedin.com" rel="noreferrer" target="_blank">
                  <Linkedinicon />
                </a>
              </li>
            </ul>
          </div>
          <p>© Templator 2023</p>
        </Container>
        <Background>
          <div className={classes.background} />
        </Background>
      </footer>
    </View>
  );
};

export default Footer;
