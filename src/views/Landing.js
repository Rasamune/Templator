import { useEffect, useState } from 'react';
import classes from './Landing.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Slide from '../components/Slide';

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const buttonClickHandler = () => {
    console.log('click');
  };

  useEffect(() => {
    if (!imageLoaded) {
      setTimeout(() => {
        setImageLoaded(true);
      }, 2000);
    }
  }, [imageLoaded]);

  return (
    <>
      <View />
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
            <Slide intersectOffset="-30%" lazyload={true} waitfor={imageLoaded}>
              <button className={classes.button} onClick={buttonClickHandler}>
                Click Here
              </button>
            </Slide>
          </Container>
          <Background>
            <Slide>
              <div className={classes.background} />
            </Slide>
          </Background>
        </div>
      </View>
    </>
  );
};

export default Landing;
