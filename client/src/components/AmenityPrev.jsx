import React from 'react';

const AmenityPrev = (props) => (
  <div className="amenity-short">
    <div className="amenity-icon">
      <img src={props.amenity.iconUrl}/>
    </div>
    <div className="amenity-title">
      {props.amenity.featureTitle}
    </div>
  </div>
);

export default AmenityPrev;