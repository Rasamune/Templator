import classes from './View.module.css';

const View = ({ children, id = undefined }) => {
  return (
    <section id={id} className={classes.view}>
      {children}
    </section>
  );
};

export default View;
