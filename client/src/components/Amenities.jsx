// Amenities component contains all amenities for the displayed property

import React from 'react';
import AmenityPrev from './AmenityPrev.jsx';

const Amenities = (props) => (
  <div className = "amenities">
    <div className="amenities-header">
      <h2>Amenities</h2>
    </div>
    <div className="amenities-list">
      {props.keyAmenities ? props.keyAmenities.map((amenity, index) => (
        <AmenityPrev
          idString={amenity}
          key={`keyAmenities_${index}`}
          amenity={props.myAmenities.length ? props.myAmenities.find(element => element.idString === amenity) : 'not found' }
        />
      )) : null }
    </div>
    <div className="show-all-amenities-link">
      <a href="#">Show all <strong>{ props.amenitiesList ? (
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
      }</strong> amenities</a>
    </div>
  </div>
);

export default Amenities;