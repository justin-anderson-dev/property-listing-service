import React from 'react';
import styles from '../styles/AmenityFull.css';

const AmenityFull = (props) => (
  <div className={styles.amenityShort}>
    <div className={styles.wrapper}>
      <div className={styles.amenityTitle}>
        {props.amenity.feature_title}
      </div>
      <div className={styles.amenityDescr}>
        {props.amenity.feature_descr ? props.amenity.feature_descr : null}
      </div>
    </div>
  </div>
);

export default AmenityFull;
