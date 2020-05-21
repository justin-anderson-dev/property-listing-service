import React from 'react';
import AmenityPrev from './AmenityPrev.jsx';
import styles from '../styles/Amenities.css';

const Amenities = (props) => (
  <div className={styles.amenitiesContainer}>
    <div className = {styles.amenities}>
      <div className={styles.amenitiesHeader}>
        Amenities
      </div>
      <div className={styles.amenitiesList}>
        {props.keyAmenities ? props.keyAmenities.map((amenity, index) => (
          <AmenityPrev
            idString={amenity}
            key={`keyAmenities_${index}`}
            amenity={props.myAmenities.length ? props.myAmenities.find(element => element.idString === amenity) : 'not found' }
          />
        )) : null }
      </div>
      <button className={styles.allAmenitiesButton}>
        Show all <strong>{ props.amenitiesList ? (
          props.amenitiesList.basic.length +
          props.amenitiesList.bedAndBath.length +
          props.amenitiesList.dining.length +
          props.amenitiesList.facilities.length +
          props.amenitiesList.familyFeatures.length +
          props.amenitiesList.guestAccess.length +
          props.amenitiesList.logistics.length +
          props.amenitiesList.outdoor.length +
          props.amenitiesList.safetyFeatures.length
        ) : 'X'
        }</strong> amenities
      </button>
    </div>
  </div>
);

export default Amenities;