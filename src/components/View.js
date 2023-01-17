import classes from './View.module.css';

const View = ({
  children,
  id = undefined,
  half = false,
  expandable = false,
  heightauto = false,
}) => {
  const viewClasses = `${classes.view} ${half ? classes.half : null} ${
    expandable ? classes.expandable : null
  } ${heightauto ? classes.auto : null}`;

  return (
    <section id={id} className={viewClasses}>
      {children}
    </section>
  );
};

export default View;
