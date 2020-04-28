// top-line property info with location, host, key features

import React from 'react';
import Feature from './Feature.jsx';

const Summary = (props) => (
  <div className="listing-summary">
    <div className="summary-head">
      <div className="summary-head-info">
        <div className="summary-head-headline">
          <h2>{props.subHead}</h2>
        </div>
        <div className="summary-head-stats">
          {props.guestCapacity} guests • {props.totalBedrooms} bedrooms • {props.totalBeds} beds • {props.totalBaths} baths
        </div>
      </div>
      <div className="summary-head-avi">
        host avatar goes here
      </div>
    </div>
    <div className="summary-info">
      <div className="summary-features">

        { props.topFeatures ? props.topFeatures.map((feature, index) => (
          console.log(`${props.myFeatures}`),
          <Feature
            idString={feature}
            key={`topFeatures_${index}`}
            feature={props.myFeatures[0] ? props.myFeatures.find(element => element.idString === feature) : 'null' }
          />
        )) : null}
      </div>
      <div className="reservation-service">
        <img src="http://localhost:3005/assets/reservation-mock.png"/>
      </div>
    </div>
  </div>
);

export default Summary;