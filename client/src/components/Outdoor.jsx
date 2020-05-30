import React from 'react';
import AmenityFull from './AmenityFull.jsx';
import styles from '../styles/AmenitiesModal.css';

const Outdoor = (props) => {

  return (
    <div className={styles.categoryList}>
      <div className={styles.categoryListHead}>
        Outdoor
      </div>
      <div className={styles.categoryListItems}>
        {props.list ? props.list.map((amenity, index) => (
          <AmenityFull
            idString={amenity}
            key={`facilities_${index}`}
            amenity={props.myAmenities.length ? props.myAmenities.find(element => element.idString === amenity) : 'not found' }
          />
        )) : null }
      </div>
    </div>
  );
};

export default Outdoor;