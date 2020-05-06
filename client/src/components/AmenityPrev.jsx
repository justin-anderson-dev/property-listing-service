import React from 'react';
import styles from '../styles/AmenityPrev.css';

const AmenityPrev = (props) => (
  <div className={styles.amenityShort}>
    <div className={styles.amenityIcon}>
      <img src={props.amenity.iconUrl}/>
    </div>
    <div className="amenity-title">
      {props.amenity.featureTitle}
    </div>
  </div>
);

export default AmenityPrev;