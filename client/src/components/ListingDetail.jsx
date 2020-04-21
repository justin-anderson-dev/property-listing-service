// main app component
import React from 'react';
import Summary from './Summary.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import Beds from './Beds.jsx';

const ListingDetail = (props) => (
  <div className = "full-listing">
    <h3>This is the ListingDetail component.</h3>
    It renders the Summary, Description, Amenities, and Beds components.
    <Summary />
    <Description />
    <Amenities />
    <Beds />
  </div>
);

export default ListingDetail;