import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3005';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.id,
      headline: 'loading',
      stars: 0,
      reviews: 0,
      superHost: false,
      location: 'loading'
    };
  }

  fetchHeaderData(id) {
    const self = this;
    return axios.get(`${API_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got listing data for listing ${id}`);
        self.setState({
          headline: listing.data.headline,
          stars: listing.data.stars,
          reviews: listing.data.reviews,
          superHost: listing.data.superHost,
          location: listing.data.location
        });
      })
      .catch((error) => {
        return new Error(error);
      });
  }

  componentDidMount() {
    return this.fetchHeaderData(this.props.id)
      .then(() => console.log('Header component mounted'))
      .catch(err => new Error(err));
  }

  render() {
    return (
      <div className="listing-header">
        <div className="headline">
          <h1>{this.state.headline}</h1>
        </div>
        <div className="header-widgets">
          <div className="header-info">
            <div className="stars-info">
              {this.state.stars} ({this.state.reviews}) •
            </div>
            <div className="superhost-info">
              {this.state.superHost ?
                <div>
                  <div className="superhost-badge">
                    <img src="/assets/superHost.svg" />
                  </div>
                  <div className="superhost-status">
                    Superhost •
                  </div>
                </div>
                : null}
            </div>
            <div className="location-info">
              {this.state.location}
            </div>
          </div>
          <div className="header-actions">
            <div className="share-button">
              <img className="share-icon" src="http://localhost:3005/assets/share.svg" />Share
            </div>
            <div className="save-button">
              <img className="save-icon" src="http://localhost:3005/assets/save.svg" />Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;