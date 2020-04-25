// top-line property info with location, host, key features

import React from 'react';

const Summary = (props) => (
  <div className = "listing-summary">
    <div className="summary-head">
      <div className="summary-head-info">
        <div className="summary-head-headline">
          <h2>{props.summaryData.subHeadline}</h2>
        </div>
        <div className="summary-head-stats">
          {props.summaryData.guestCapacity} guests • {props.summaryData.totalBedrooms} bedrooms • {props.summaryData.totalBeds} beds • {props.summaryData.totalBaths} baths
        </div>
      </div>
      <div className="summary-head-avi">
        host avatar goes here
      </div>
    </div>
    <div className="summary-info">
      <div className="summary-features">
        Key Features go here
      </div>
      <div className="reservation-service">
        <img src="http://localhost:3005/assets/reservation-mock.png"/>
      </div>
    </div>
  </div>
);

export default Summary;