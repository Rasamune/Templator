import classes from './Landing.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Slide from '../components/Slide';
import LazyLoad from '../components/LazyLoad';

const Landing = () => {
  return (
    <View id="landing">
      <div className={classes.landing}>
        <Container>
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque venenatis commodo commodo. Mauris tempus aliquet
            vehicula. Etiam sagittis felis quis arcu porta, id gravida nulla
            elementum.
          </p>
          <div className={classes.buttonarea}>
            <Slide>
              <button className={classes.button}>
                <LazyLoad></LazyLoad>
                Click Here
              </button>
            </Slide>
          </div>
        </Container>
        <Background>
          <Slide xorigin="5%">
            <div className={classes.background}></div>
          </Slide>
        </Background>
      </div>
    </View>
  );
};

export default Landing;
