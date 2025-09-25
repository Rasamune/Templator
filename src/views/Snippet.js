import classes from './Snippet.module.css';
import View from '../components/View';
import Container from '../components/Container';
import Background from '../components/Background';
import Slide from '../components/Slide';
import robotImg from '../assets/robo.png';

const Snippet = () => {
  return (
    <View half="true" expandable="true">
      <div className={classes.snippet}>
        <Container>
          <Slide lazyload="true" wait="250">
            <div className={classes.contents} data-annotation="snippet-content">
              <div className={classes.firstcolumn}>
                <h2>Snippet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque libero non felis dictum malesuada. In efficitur
                  orci ac posuere tempus.
                </p>
              </div>
              <div className={classes.secondcolumn}>
                <div className={classes.robot}>
                  <img src={robotImg} alt="Robot" draggable="false" />
                </div>
              </div>
            </div>
          </Slide>
        </Container>
        <Background>
          <Slide>
            <div className={classes.blackbox} />
          </Slide>
        </Background>
      </div>
    </View>
  );
};

export default Snippet;
