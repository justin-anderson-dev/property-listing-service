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
    {/* {console.log(props)} */}
    <Header
      headline={props.listing.headline}
      stars={props.listing.stars}
      reviews={props.listing.reviews}
      superHost={props.listing.superHost || false}
      neighborhood={props.listing.location ? props.listing.location.neighborhood : null}
      city={props.listing.location ? props.listing.location.city : null}
      state={props.listing.location ? props.listing.location.State : null}
    />

    <Photos />
    <Summary
      subHead={props.listing.subHeadline}
      guestCapacity={props.listing.guestCapacity}
      totalBedrooms={props.listing.totalBedrooms}
      totalBeds={props.listing.totalBeds}
      totalBaths={props.listing.totalBaths}
      topFeatures={props.topFeatures ? props.topFeatures : null}
      myFeatures={props.features ? props.features : null} // need to filter props.features: if props.topFeatures includes thisFeature.idString
    />
    <Description description={props.listing.descriptionText ? props.listing.descriptionText : 'placeholder'}/>
    <Beds bedsData={props.listing}/>
    <Amenities
      amenitiesData={props.listing}
      featuresData={props.features}
    />
  </div>
);

export default ListingDetail;