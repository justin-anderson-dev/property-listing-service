import React from 'react';
import styles from '../styles/Description.css';

const Description = (props) => (
  <div className={styles.descriptionContainer}>
    <div className = {styles.listingDescription}>
      <div className = {styles.descriptionSpacer}></div>
      <div className={styles.descriptionPreview}>
        {props.description.slice(0, 220)}...&nbsp; <a href="#">read more</a>
      </div>
      <div className = {styles.descriptionSpacer}></div>
      <button className={styles.contactButton}>
        Contact host
      </button>
    </div>
  </div>
);

export default Description;