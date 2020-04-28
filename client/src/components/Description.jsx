// Description component includes host-provided description of property

import React from 'react';

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