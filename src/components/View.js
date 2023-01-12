import classes from './View.module.css';

const View = ({
  children,
  id = undefined,
  half = false,
  expandable = false,
}) => {
  // let classes = [];

  // if (half) {
  //   styles = {
  //     style: {
  //       height: '50vh',
  //       minHeight: '24.5rem',
  //     },
  //   };
  // }

  // if (expandable) {
  //   styles = {
  //     style: {
  //       height: 'auto',
  //       minHeight: '45rem',
  //     },
  //   };
  // }

  const viewClasses = `${classes.view} ${half ? classes.half : null} ${
    expandable ? classes.expandable : null
  }`;

  return (
    <section id={id} className={viewClasses}>
      {children}
    </section>
  );
};

export default View;
