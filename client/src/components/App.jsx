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

  fetchListingData(id) {
    const self = this;
    // axios get request to /id
    axios.get(`${API_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got listing data: ${Object.keys(listing)}`);
        self.setState({listingData: listing});
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  fetchFeaturesData() {
    const self = this;
    axios.get(`${API_URL}/features`)
      .then((features) => {
        console.log(`got features data for ${features.length} features`);
        self.setState({featuresData: features});
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
        <h3>This is the main App component.</h3>
        It renders the ListingDetail component.
        <ListingDetail
          listing={this.state.listingData}
          features={this.state.featuresData}
        />
      </div>
    );
  }
}

export default App;