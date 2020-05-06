import React from 'react';
import Feature from './Feature.jsx';
import styles from '../styles/listing-detail.css';

const Summary = (props) => (
  <div className="listing-summary">
    <div className={styles.summaryHead}>
      <div className={styles.infoAndAviContainer}>
        <div className={styles.summaryHeadInfo}>
          <div className="summary-head-headline">
            <h2>{props.subHead}</h2>
          </div>
          <div className="summary-head-stats">
            {props.guestCapacity} guests • {props.totalBedrooms > 0 ? `${props.totalBedrooms} bedrooms • ` : null} {props.totalBeds} beds • {props.totalBaths} baths
          </div>
          <div className={styles.summaryInfo}>
            <div className="summary-features">
              { props.topFeatures ? props.topFeatures.map((feature, index) => (
                <Feature
                  idString={feature}
                  key={`topFeatures_${index}`}
                  feature={props.myFeatures[0] ? props.myFeatures.find(element => element.idString === feature) : 'not found' }
                />
              )) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="summary-head-avi">
        <h2> host avatar goes here </h2>
      </div>
      <div className="reservation-service">
        <img src="http://localhost:3005/assets/reservation-mock.png"/>
      </div>
    </div>

  </div>
);

export default Summary;