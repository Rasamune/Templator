import classes from './Landing.module.css';
import { useState } from 'react';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Fade from '../components/Fade';
import Slide from '../components/Slide';
import landingImage from '../assets/landing-img.jpg';
import landingimageloading from '../assets/landing-img-loading.jpg';

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageLoadHandler = () => {
    console.log('test');
    setImageLoaded(true);
  };

  const imageClasses = `${classes.loadingimage} ${
    imageLoaded ? classes.imageloaded : ''
  }`;

  return (
    <View id="home">
      <div className={classes.landing}>
        <Container >
          <Fade>
            <div className={classes.contents} data-annotation="hero-text">
              <h1>Templator</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                elit ac urna aliquet imperdiet. Etiam ultrices felis dolor, at
                commodo nisi aliquet a. Sed mollis venenatis lacinia. Sed nec
                est tortor.
              </p>
              <Slide lazyload="true" wait="1000" animationSpeed="500">
                <button>Click Here</button>
              </Slide>
            </div>
          </Fade>
        </Container>
        <Background>
          <div className={classes['background-img']} data-annotation="landing-background">
            <img
              src={landingimageloading}
              className={imageClasses}
              alt="Landing Load"
            />
            <img src={landingImage} onLoad={imageLoadHandler} alt="Landing" />
          </div>
          <Container>
            <div className={classes.arrow}>Scroll down</div>
          </Container>
        </Background>
      </div>
    </View>
  );
};

export default Landing;
