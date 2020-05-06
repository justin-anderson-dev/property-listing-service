import React from 'react';
import axios from 'axios';
import styles from '../styles/Header.css';

const API_URL = 'http://localhost:3005';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.id,
      headline: 'loading...',
      stars: 0,
      reviews: 0,
      superHost: false,
      location: 'loading...'
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
      <div className={styles.listingHeader}>
        <div className="headline">
          <h1>{this.state.headline}</h1>
        </div>
        <div className={styles.headerWidgets}>
          <div className={styles.headerInfo}>
            <div className="stars-info">
              {this.state.stars} ({this.state.reviews}) •
            </div>
            <div className={styles.superhostInfo}>
              {this.state.superHost ?
                <div className={styles.superhostInfo}>
                  <div className={styles.superhostBadge}>
                    <img src="http://localhost:3005/assets/superHost.svg" />
                  </div>
                  <div className={styles.superhostStatus}>
                    Superhost •
                  </div>
                </div>
                : null}
            </div>
            <div className="location-info">
              {this.state.location}
            </div>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.shareButton}>
              <img className={styles.shareIcon} src="http://localhost:3005/assets/share.svg" />Share
            </div>
            <div className={styles.saveButton}>
              <img className={styles.saveIcon} src="http://localhost:3005/assets/save.svg" />Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;