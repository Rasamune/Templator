import classes from './Projects.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Fade from '../components/Fade';
import Slide from '../components/Slide';

const Projects = () => {
  return (
    <View id="projects" expandable="true">
      <div className={classes.projects}>
        <Container>
          <h1>Projects</h1>
          <div className={classes.contents}>
            <Fade animationSpeed="750">
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Aliquet</h3>
              </div>
            </Fade>
            <Fade animationSpeed="750" wait="300">
              <div className={classes.item}>
                <Slide lazyload="true" wait="300">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Efficitur Orci</h3>
              </div>
            </Fade>
            <Fade animationSpeed="750">
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Scelerisque</h3>
              </div>
            </Fade>
            <Fade animationSpeed="750" wait="300">
              <div className={classes.item}>
                <Slide lazyload="true" wait="300">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Libero non felis</h3>
              </div>
            </Fade>
            <Fade animationSpeed="750">
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Adipiscing</h3>
              </div>
            </Fade>
          </div>
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

export default Projects;
