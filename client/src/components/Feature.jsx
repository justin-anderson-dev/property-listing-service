import React from 'react';
import styles from '../styles/Feature.css';

const Feature = (props) => (
  <div className={styles.featureBlock}>
    <div className={styles.featureIcon}>
      <img src={props.feature.iconUrl}/>
    </div>
    <div className="feature-text">
      <div className={styles.featureTitle}>
        {props.feature.featureTitle}
      </div>
      <div className="feature-description">
        {props.feature.featureDescr}
      </div>
    </div>
  </div>
);

export default Feature;