import React from 'react';
import styles from '../styles/Feature.css';

const Feature = (props) => (
  <div className={styles.featureBlock}>
    <div className={styles.featureIcon}>
      <img src={props.feature.icon_url}/>
    </div>
    <div className="feature-text">
      <div className={styles.featureTitle}>
        {props.feature.feature_title}
      </div>
      <div className={styles.featureDescription}>
        {props.feature.feature_descr}
      </div>
    </div>
  </div>
);

export default Feature;
