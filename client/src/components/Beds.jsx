// Beds component contains a Room component for each room with a bed

import React from 'react';
import Room from './Room.jsx';

const Beds = (props) => (
  <div className = "room-info">
    {/* this component should iterate over the bedrooms in props.bedsData and render a Room component for each one
    */}
    <div className="beds-header">
      <h2>Sleeping arrangements</h2>
    </div>
    <Room />
    <Room />
  </div>
);

export default Beds;