// renders icon, title, description for features and amenities

import React from 'react';

const Feature = (props) => (
  <div className="feature-block">
    <div className="feature-icon">
      <img src={props.feature.iconUrl}></img>
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