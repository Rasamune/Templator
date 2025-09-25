import React from 'react';
import classes from './TechShowcaseToggle.module.css';

const TechShowcaseToggle = ({ enabled, onToggle }) => {
  return (
    <div className={classes.toggleContainer}>
      <button 
        className={`${classes.toggleBtn} ${enabled ? classes.active : ''}`}
        onClick={onToggle}
        title={enabled ? 'Hide tech annotations' : 'Show tech annotations'}
      >
        <span className={classes.icon}>{enabled ? '👁️' : '👁️‍🗨️'}</span>
        <span className={classes.text}>
          {enabled ? 'Tech View ON' : 'Tech View OFF'}
        </span>
      </button>
    </div>
  );
};

export default TechShowcaseToggle;