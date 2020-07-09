import React from 'react';
import styles from '../styles/AmenityPrev.css';

const AmenityPrev = (props) => (
  <div className={styles.amenityShort}>
    <div className={styles.amenityIcon}>
      <img src={props.data.icon_url}/>
    </div>
    <div className={styles.amenityTitle}>
      {props.data.feature_title}
    </div>
  </div>
);

export default AmenityPrev;
