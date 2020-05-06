import React from 'react';
import styles from '../styles/listing-detail.css';

const Feature = (props) => (
  <div className="feature-block">
    <div className={styles.featureIcon}>
      <img src={props.feature.iconUrl}/>
    </div>
    <div className="feature-text">
      <div className="feature-title">
        {props.feature.featureTitle}
      </div>
      <div className="feature-description">
        {props.feature.featureDescr}
      </div>
    </div>
  </div>
);

export default Feature;