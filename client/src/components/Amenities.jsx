// Amenities component contains all amenities for the displayed property

import React from 'react';

const Amenities = (props) => (
  <div className = "amenities">
    <div className="amenities-header">
      <h2>Amenities</h2>
    </div>
    <div className="amenities-list">
      A bunch of amenities go here, in two columns.
    </div>
    <div className="show-all-amenities">
      <a href="#">Show all <em>X</em> amenities</a>
    </div>
  </div>
);

export default Amenities;