import classes from './About.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Fade from '../components/Fade';
import Slide from '../components/Slide';

const About = () => {
  return (
    <View id="about" half="true">
      <div className={classes.about} data-annotation="view-wrapper">
        <Container>
          <Fade>
            <h1>ABOUT</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque venenatis commodo commodo. Mauris tempus aliquet
              vehicula. Etiam sagittis felis quis arcu porta, id gravida nulla
              elementum.
            </p>
            <Slide lazyload={true} wait="350">
              <button className={classes.button}>Button</button>
            </Slide>
          </Fade>
        </Container>
        <Background>
          <div className={classes.greybox} />
        </Background>
      </div>
    </View>
  );
};

export default About;
