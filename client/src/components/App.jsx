import React from 'react';
import ReactDom from 'react-dom';
import ListingDetail from './ListingDetail.jsx';
import axios from 'axios';
const Promise = require('bluebird');

const API_URL = 'http://localhost:3005';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingData: {},
      featuresData: []
    };
  }

  filterFeatures(collection) {
    // console.log(`filterFeatures invoked`);
    var filteredList = [];
    Object.keys(collection).forEach((key) => {
      if (collection[key] === true) {
        filteredList.push(key);
      }
    });
    return filteredList;
  }

  fetchListingData(id) {
    const self = this;
    // axios get request to /id
    return axios.get(`${API_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got listing data for listing ${id}: ${Object.keys(listing.data)}`);
        self.setState({
          listingData: listing.data,
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
    const featureList = [];
    featureList.concat(this.state.topFeatures, this.state.allAmenities.basic, ); // TODO: finish this list, then write new API endpoint that GETs only specified feature data
    axios.get(`${API_URL}/features/all`)
      .then((features) => {
        console.log(`got features data for ${features.data.length} features`);
        self.setState({featuresData: features.data});
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  componentDidMount() {
    Promise.resolve(this.fetchListingData(this.props.id))
      .then(() => this.fetchFeaturesData())
      .catch(err => new Error(err));
  }

  render() {
    return (
      <div className="main">
        <ListingDetail
          listing={this.state.listingData}
          features={this.state.featuresData}
        />
      </div>
    );
  }
}

export default App;