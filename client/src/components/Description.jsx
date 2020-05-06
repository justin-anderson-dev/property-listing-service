import React from 'react';
import styles from '../styles/Description.css';

const Description = (props) => (
  <div className = "listing-description">
    <div className="description-preview">
      {props.description.slice(0, 220)}...<a href="#">read more</a>
    </div>
    <div className="contact-link">
      <a href="#">Contact host</a>
    </div>
  </div>
);

export default Description;