// Amenities component contains all amenities for the displayed property

import React from 'react';

const Amenities = (props) => (
  <div className = "amenities">
    <div className="amenities-header">
      <h2>Amenities</h2>
    </div>
    <div className="amenities-list">
      A bunch of amenities go here, in two columns.
    </div>
    <div className="show-all-amenities">
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