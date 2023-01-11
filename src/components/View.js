import classes from './View.module.css';

const View = ({
  children,
  id = undefined,
  half = false,
  expandable = false,
}) => {
  let styles = {};

  if (half) {
    styles = {
      style: {
        height: '50vh',
        minHeight: '24.5rem',
      },
    };
  }

  if (expandable) {
    styles = {
      style: {
        height: 'auto',
        minHeight: '45rem',
      },
    };
  }

  return (
    <section id={id} className={classes.view} {...styles}>
      {children}
    </section>
  );
};

export default View;
