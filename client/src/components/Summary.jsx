import React from 'react';
import Feature from './Feature.jsx';
import styles from '../styles/Summary.css';

const Summary = (props) => {

  function handleContactHost(e) {
    e.preventDefault();
    const host = document.getElementById('host');
    host.scrollIntoView();
  }

  return (
    <div className={styles.listingSummary}>
      <div className={styles.infoAndAviContainer}>
        <div className={styles.summaryHeadInfo}>
          <div className={styles.summaryHeadHeadline}>
            <h2>{`${props.typeOfRoom} hosted by ${props.hostName}`}</h2>
          </div>
          <div className={styles.summaryHeadStats}>
            {props.guestCapacity} guests • {props.totalBedrooms > 0 ? `${props.totalBedrooms} bedrooms • ` : null} {props.totalBeds} beds • {props.totalBaths} baths
          </div>
        </div>
        <div className={styles.summaryHeadAvi}>
          <button className={styles.invisibleButton}
            onClick={handleContactHost}
          >
            <div className={styles.aviWrapper}>
              <div className={styles.avi}>
                <img src={props.avatarUrl}/>
              </div>
              {props.superHost ?
                <div className={styles.superhostOverlay}>
                  <img src='https://listing-service-images.s3-us-west-1.amazonaws.com/assets/superhostOverlay.png'/>
                </div> : null}
            </div>
          </button>
        </div>
      </div>
      <div className={styles.summaryFeatures}>
        { props.topFeatures ? props.topFeatures.map((feature, index) => (
          <Feature
            idString={feature}
            key={`topFeatures_${index}`}
            feature={props.myFeatures[0] ? props.myFeatures.find(element => element["id_string"] === feature) : 'not found' }
          />
        )) : null}
      </div>
      <div className={styles.reserveModule}>
        <img className={styles.cover} src='https://listing-service-images.s3-us-west-1.amazonaws.com/assets/reservation-mock.png'/>
      </div>
    </div>
  );
};

export default Summary;
