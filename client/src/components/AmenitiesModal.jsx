import React from 'react';
import styles from '../styles/AmenitiesModal.css';
import BasicAmenities from './BasicAmenities.jsx';
import FamilyFeatures from './FamilyFeatures.jsx';
import Facilities from './Facilities.jsx';
import Dining from './Dining.jsx';
import GuestAccess from './GuestAccess.jsx';
import Logistics from './Logistics.jsx';
import BedAndBath from './BedAndBath.jsx';
import SafetyFeatures from './SafetyFeatures.jsx';
import Outdoor from './Outdoor.jsx';
import NotIncluded from './NotIncluded.jsx';

const AmenitiesModal = (props) => {

  return (
    <div className={props.show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}` }>
      <section className={styles.modalMain}>
        <button className={styles.closeButton}
          onClick={props.handleClose}>
          X
        </button>
        <div className={styles.fullAmenitiesList}>
          Amenities
          {props.amenitiesList.basic.length ?
            <BasicAmenities list={props.amenitiesList.basic} /> : null
          }
          {props.amenitiesList.familyFeatures.length ?
            <FamilyFeatures list={props.amenitiesList.familyFeatures} /> : null
          }
          {props.amenitiesList.facilities.length ?
            <Facilities list={props.amenitiesList.facilities} /> : null
          }
          {props.amenitiesList.dining.length ?
            <Dining list={props.amenitiesList.dining} /> : null
          }
          {props.amenitiesList.guestAccess.length ?
            <GuestAccess list={props.amenitiesList.guestAccess} /> : null
          }
          {props.amenitiesList.logistics.length ?
            <Logistics list={props.amenitiesList.logistics} /> : null
          }
          {props.amenitiesList.bedAndBath.length ?
            <BedAndBath list={props.amenitiesList.bedAndBath} /> : null
          }
          {props.amenitiesList.outdoor.length ?
            <Outdoor list={props.amenitiesList.outdoor} /> : null
          }
          {props.amenitiesList.safetyFeatures.length ?
            <SafetyFeatures list={props.amenitiesList.safetyFeatures} /> : null
          }
          {props.amenitiesList.notIncluded.length ?
            <NotIncluded list={props.amenitiesList.notIncluded} /> : null
          }
        </div>
        {/*
        notIncluded: [] */}
      </section>
    </div>
  );
};

export default AmenitiesModal;