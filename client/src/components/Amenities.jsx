// Amenities component contains all amenities for the displayed property

import React from 'react';

const Amenities = (props) => (
  <div className = "all-amenities">
    <h3>This is the Amenities component.</h3>
    A list of the top few amenities goes here.
    There will be a 'show all <em>X</em> amenities' link that opens a modal overlay with all amenities.
  </div>
);

export default Amenities;