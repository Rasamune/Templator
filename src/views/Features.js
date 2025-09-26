import classes from './Features.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Fade from '../components/Fade';
import Slide from '../components/Slide';

import { ReactComponent as Icon1 } from '../assets/open-box.svg';
import { ReactComponent as Icon2 } from '../assets/person-book.svg';
import { ReactComponent as Icon3 } from '../assets/mobile.svg';

const Features = () => {
  return (
    <View id="features" expandable="true">
      <div className={classes.features} >
        <Container>
          <h1 data-annotation="viewtitle">FEATURES</h1>
          <div className={classes.featureslist}>
            <Fade>
              <div className={classes.featureitem}>
                <div className={classes.featureicon} data-annotation="featureicon">
                  <Icon1 />
                </div>
                <h3>Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit ac urna aliquet imperdiet. Etiam ultrices felis dolor,
                  at commodo nisi aliquet a.
                </p>
              </div>
            </Fade>
            <Fade>
              <div className={classes.featureitem} data-annotation="featureitem">
                <div className={classes.featureicon}>
                  <Icon2 />
                </div>
                <h3>Pellentesque</h3>
                <p>
                  Pellentesque cursus tempus condimentum. Ut purus quam,
                  scelerisque eget nisi ac, luctus aliquet velit. In imperdiet
                  ipsum ex, eget elementum lacus accumsan sit amet.
                </p>
              </div>
            </Fade>
            <Fade>
              <div className={classes.featureitem}>
                <div className={classes.featureicon}>
                  <Icon3 />
                </div>
                <h3>Nullam</h3>
                <p>
                  Nullam molestie sagittis urna et lobortis. Fusce neque augue,
                  facilisis eget est sed, efficitur egestas metus. Nunc neque
                  risus, condimentum vitae rutrum ac, mattis non dui.
                </p>
              </div>
            </Fade>
          </div>
          <Slide
            intersectOffset="0px"
            lazyload="true"
            wait="300"
            animationSpeed="750"
          >
            <button>Button</button>
          </Slide>
        </Container>
        <Background>
          <Slide>
            <div className={classes.pinkbox} data-annotation="pinkbox" />
          </Slide>
          <Slide wait="500">
            <div className={classes.blackbox} />
          </Slide>
        </Background>
      </div>
    </View>
  );
};

export default Features;
