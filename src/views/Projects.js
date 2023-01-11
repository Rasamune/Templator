import classes from './Projects.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Fade from '../components/Fade';
import Slide from '../components/Slide';

const Projects = () => {
  return (
    <View id="projects" expandable="true">
      <div className={classes.projects}>
        <Container>
          <h1>Projects</h1>
          <div className={classes.contents}>
            <Fade>
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Aliquet</h3>
              </div>
            </Fade>
            <Fade>
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Efficitur Orci</h3>
              </div>
            </Fade>
            <Fade>
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Scelerisque </h3>
              </div>
            </Fade>
            <Fade>
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Libero non</h3>
              </div>
            </Fade>
            <Fade>
              <div className={classes.item}>
                <Slide lazyload="true">
                  <div className={classes.projectimage}></div>
                </Slide>
                <h3>Adipiscing</h3>
              </div>
            </Fade>
          </div>
        </Container>
      </div>
    </View>
  );
};

export default Projects;
