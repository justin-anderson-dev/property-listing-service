import React from 'react';
import Feature from './Feature.jsx';
import styles from '../styles/Summary.css';

const Summary = (props) => (
  <div className={styles.listingSummary}>
    <div className={styles.infoAndAviContainer}>
      <div className={styles.summaryHeadInfo}>
        <div className={styles.summaryHeadHeadline}>
          <h2>{`${props.typeOfRoom} hosted by ${props.hostName}`}</h2>
        </div>
        <div className="summary-head-stats">
          {props.guestCapacity} guests • {props.totalBedrooms > 0 ? `${props.totalBedrooms} bedrooms • ` : null} {props.totalBeds} beds • {props.totalBaths} baths
        </div>
      </div>
      <div className={styles.summaryHeadAvi}>
        <img src={props.avatarUrl}/>
      </div>
    </div>
    <div className={styles.summaryFeatures}>
      { props.topFeatures ? props.topFeatures.map((feature, index) => (
        <Feature
          idString={feature}
          key={`topFeatures_${index}`}
          feature={props.myFeatures[0] ? props.myFeatures.find(element => element.idString === feature) : 'not found' }
        />
      )) : null}
    </div>
    <div className={styles.reserveModule}>
      {/* <img className={styles.contain} src="http://localhost:3005/assets/reservation-mock.png"/> */}
    </div>
  </div>
);

export default Summary;