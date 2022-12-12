import classes from "./Landing.module.css";
import View from "../components/View";
import Container from "../components/Container";
import Background from "../components/Background";
import Fade from "../components/Fade";
import Slide from "../components/Slide";
import mapImage from "../assets/map.png";

const Landing = () => {
  return (
    <>
      <View />
      <View id="landing">
        <div className={classes.landing}>
          <Container>
            <Fade>
              <h1>ABOUT</h1>
            </Fade>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque venenatis commodo commodo. Mauris tempus aliquet
              vehicula. Etiam sagittis felis quis arcu porta, id gravida nulla
              elementum.
            </p>
            <Slide lazyload={true}>
              <button className={classes.button}>Click Here</button>
            </Slide>
          </Container>
          <Background>
            <Slide>
              <div className={classes.greybox} />
            </Slide>
            <Slide>
              <div className={classes.blackbox} />
            </Slide>
            <Slide lazyload={true}>
              <div className={classes.mapimage}>
                <img src={mapImage} alt="map" />
              </div>
            </Slide>
          </Background>
        </div>
      </View>
      <View />
    </>
  );
};

export default Landing;
