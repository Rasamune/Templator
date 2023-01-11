import classes from './Features.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Fade from '../components/Fade';
import Slide from '../components/Slide';

const Features = () => {
  return (
    <View id="features">
      <div className={classes.features}>
        <Container>
          <h1>FEATURES</h1>
          <Fade>
            <div className={classes.featureslist}>
              <div className={classes.featureitem}>
                <div className={classes.featureicon}></div>
                <h3>Lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit ac urna aliquet imperdiet. Etiam ultrices felis dolor,
                  at commodo nisi aliquet a.
                </p>
              </div>
              <div className={classes.featureitem}>
                <div className={classes.featureicon}></div>
                <h3>Pellentesque</h3>
                <p>
                  Pellentesque cursus tempus condimentum. Ut purus quam,
                  scelerisque eget nisi ac, luctus aliquet velit. In imperdiet
                  ipsum ex, eget elementum lacus accumsan sit amet.
                </p>
              </div>
              <div className={classes.featureitem}>
                <div className={classes.featureicon}></div>
                <h3>Nullam</h3>
                <p>
                  Nullam molestie sagittis urna et lobortis. Fusce neque augue,
                  facilisis eget est sed, efficitur egestas metus. Nunc neque
                  risus, condimentum vitae rutrum ac, mattis non dui.
                </p>
              </div>
            </div>
            <Slide
              intersectOffset="0px"
              lazyload="true"
              wait="300"
              animationSpeed="750"
            >
              <button>See More</button>
            </Slide>
          </Fade>
        </Container>
        <Background>
          <Slide>
            <div className={classes.pinkbox} />
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
