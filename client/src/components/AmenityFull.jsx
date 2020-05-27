import React from 'react';
import styles from '../styles/AmenityFull.css';

const AmenityFull = (props) => (
  <div className={styles.amenityShort}>
    <div className={styles.wrapper}>
      <div className={styles.amenityTitle}>
        {props.amenity.featureTitle}
      </div>
      <div className={styles.amenityDescr}>
        {props.amenity.featureDescr ? props.amenity.featureDescr : null}
      </div>
    </div>
  </div>
);

export default AmenityFull;