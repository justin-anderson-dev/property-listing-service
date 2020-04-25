// main app component
import React from 'react';
import Header from './Header.jsx';
import Photos from './Photos.jsx';
import Summary from './Summary.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import Beds from './Beds.jsx';

const ListingDetail = (props) => (
  <div className = "full-listing">
    <Header headerData={props.listing}/>
    <Photos />
    <Summary
      summaryData={props.listing}
      featuresData={props.features}
    />
    <Description description={props.listing}/>
    <Beds bedsData={props.listing}/>
    <Amenities
      amenitiesData={props.listing}
      featuresData={props.features}
    />
  </div>
);

export default ListingDetail;