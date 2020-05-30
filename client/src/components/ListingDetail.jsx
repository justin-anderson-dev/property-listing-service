// main app component
import React from 'react';
import Summary from './Summary.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import Beds from './Beds.jsx';
import axios from 'axios';
import styles from '../styles/ListingDetail.css';

const SERVER_URL = process.env.SERVER_URL;
const S3_URL = process.env.S3_URL;
const HOST_API_URL = process.env.HOST_API_URL;

// TODO:
// Add superHost to state, pass down to Summary
// Make rendering of superHost overlay conditional on props.superHost

class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.id,
      listingData: {
        guestCapacity: 0,
        totalBedrooms: 0,
        totalBeds: 0,
        totalBaths: 0,
        descriptionText: 'loading...',
        sleepArrangements: {}
      },
      typeOfRoom: 'loading...',
      hostId: 1,
      hostName: 'VaporBnB Host',
      superHost: false,
      avatarUrl: S3_URL + '/assets/graziella.jpg',
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
    return axios.get(`${SERVER_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got listing data for listing ${listing.data.listingId}`);
        self.setState({
          listingData: {
            guestCapacity: listing.data.guestCapacity,
            totalBedrooms: listing.data.totalBedrooms,
            totalBeds: listing.data.totalBeds,
            totalBaths: listing.data.totalBaths,
            descriptionText: listing.data.descriptionText,
            sleepArrangements: listing.data.sleepArrangements
          },
          typeOfRoom: listing.data.typeOfRoom,
          hostId: listing.data.hostId,
          superHost: listing.data.superHost,
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
    axios.get(`${SERVER_URL}/features/all`)
      .then((features) => {
        self.setState({featuresData: features.data});
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  fetchHostData() {
    const self = this;
    console.log(`host service url is: ${HOST_API_URL}`);
    // if time: refactor this to get host data by listingId
    axios.get(`${HOST_API_URL}/hosts/${self.state.hostId}`)
      .then((host) => {
        console.log(`got host data for host ${host.data[0].name}`);
        self.setState({
          hostName: host.data[0].name,
          avatarUrl: host.data[0].avatarUrl
        });
      })
      .catch((error) => {
        return new Error(`error getting host data: ${error}`);
      });
  }

  componentDidMount() {
    return this.fetchListingDetails(this.props.id)
      .then(() => this.fetchFeaturesData())
      .then(() => this.fetchHostData(this.props.hostId))
      .then(() => console.log('ListingDetail component mounted'))
      .catch(err => new Error(err));
  }

  render() {
    return (
      <div className = {styles.fullListing}>
        <Summary
          typeOfRoom={this.state.typeOfRoom}
          hostName={this.state.hostName}
          superHost={this.state.superHost}
          avatarUrl={this.state.avatarUrl}
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