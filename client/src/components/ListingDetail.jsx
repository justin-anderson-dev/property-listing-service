// main app component
import React from 'react';
import Summary from './Summary.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import Beds from './Beds.jsx';
import axios from 'axios';
import styles from '../styles/listing-detail.css';

const API_URL = 'http://localhost:3005';

class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.id,
      listingData: {
        subHeadline: 'loading...',
        guestCapacity: 0,
        totalBedrooms: 0,
        totalBeds: 0,
        totalBaths: 0,
        descriptionText: 'loading...',
        sleepArrangements: {}
      },
      topFeatures: [],
      keyAmenities: [],
      allAmenities: {
        basic: [],
        familyFeatures: [],
        facilities: [],
        dining: [],
        guestAccess: [],
        logistics: [],
        bedAndBath: [],
        outdoor: [],
        safetyFeatures: [],
        notIncluded: []
      },
      featuresData: []
    };
  }

  filterFeatures(list) {
    // console.log(`filterFeatures invoked`);
    var filteredList = [];
    Object.keys(list).forEach((key) => {
      if (list[key] === true) {
        filteredList.push(key);
      }
    });
    return filteredList;
  }

  fetchListingDetails(id) {
    const self = this;
    // axios get request to /id
    return axios.get(`${API_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got listing data for listing ${listing.data.listingId}`);
        self.setState({
          listingData: {
            subHeadline: listing.data.subHeadline,
            guestCapacity: listing.data.guestCapacity,
            totalBedrooms: listing.data.totalBedrooms,
            totalBeds: listing.data.totalBeds,
            totalBaths: listing.data.totalBaths,
            descriptionText: listing.data.descriptionText,
            sleepArrangements: listing.data.sleepArrangements
          },
          topFeatures: self.filterFeatures(listing.data.topFeatures),
          keyAmenities: self.filterFeatures(listing.data.keyAmenities),
          allAmenities: {
            basic: self.filterFeatures(listing.data.allAmenities.basic),
            familyFeatures: self.filterFeatures(listing.data.allAmenities.familyFeatures),
            facilities: self.filterFeatures(listing.data.allAmenities.facilities),
            dining: self.filterFeatures(listing.data.allAmenities.dining),
            guestAccess: self.filterFeatures(listing.data.allAmenities.guestAccess),
            logistics: self.filterFeatures(listing.data.allAmenities.logistics),
            bedAndBath: self.filterFeatures(listing.data.allAmenities.bedAndBath),
            outdoor: self.filterFeatures(listing.data.allAmenities.outdoor),
            safetyFeatures: self.filterFeatures(listing.data.allAmenities.safetyFeatures),
            notIncluded: self.filterFeatures(listing.data.allAmenities.notIncluded)
          }
        });
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  fetchFeaturesData() {
    const self = this;
    axios.get(`${API_URL}/features/all`)
      .then((features) => {
        self.setState({featuresData: features.data});
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  componentDidMount() {
    return this.fetchListingDetails(this.props.id)
      .then(() => this.fetchFeaturesData())
      .then(() => console.log('ListingDetail component mounted'))
      .catch(err => new Error(err));
  }

  render () {
    return (
      <div className = {styles.fullListing}>
        <Summary
          subHead={this.state.listingData.subHeadline}
          guestCapacity={this.state.listingData.guestCapacity}
          totalBedrooms={this.state.listingData.totalBedrooms}
          totalBeds={this.state.listingData.totalBeds}
          totalBaths={this.state.listingData.totalBaths}
          topFeatures={this.state.topFeatures}
          myFeatures={this.state.featuresData}
        />
        <Description description={this.state.listingData.descriptionText}/>
        <Beds bedrooms={Object.entries(this.state.listingData.sleepArrangements).filter(element => element[1].exists)}/>
        <Amenities
          amenitiesList={this.state.allAmenities}
          myAmenities={this.state.featuresData}
          keyAmenities={this.state.keyAmenities}
        />
      </div>
    );
  }
}

export default ListingDetail;