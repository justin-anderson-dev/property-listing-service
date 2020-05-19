import React from 'react';
import axios from 'axios';
import styles from '../styles/header.css';

const API_URL = process.env.API_URL;
const SERVER_URL = process.env.SERVER_URL;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.id,
      hostId: 1,
      headline: 'loading...',
      stars: 0,
      reviews: 0,
      superHost: false,
      location: 'loading...'
    };
  }

  fetchHeaderData(id) {
    const self = this;
    console.log(`listing service endpoint is ${SERVER_URL}`);
    return axios.get(`${SERVER_URL}/listings/${id}`)
      .then((listing) => {
        console.log(`got header data for listing ${id}`);
        self.setState({
          headline: listing.data.headline,
          stars: listing.data.stars,
          reviews: listing.data.reviews,
          superHost: listing.data.superHost, // should get this from Anush's service?
          location: listing.data.location
        });
      })
      .catch((error) => {
        return new Error(`error getting header data: ${error}`);
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
        <div className={styles.headline}>
          <h1 className={styles.headlineText}>{this.state.headline}</h1>
        </div>
        <div className={styles.headerWidgets}>
          <div className={styles.headerInfo}>
            <div className={styles.starsInfo}>
              <div className={styles.starsBadge}>
                <img src={SERVER_URL + '/assets/star.png'} />
              </div>
              <div className={styles.starsStatus}>
                {this.state.stars} ({this.state.reviews}) •
              </div>
            </div>
            <div className={styles.superhostInfo}>
              {this.state.superHost ?
                <div className={styles.superhostInfo}>
                  <div className={styles.superhostBadge}>
                    <img src={SERVER_URL + '/assets/superIcon.png'} />
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
              <img className={styles.shareIcon} src={SERVER_URL + '/assets/share.svg'} />Share
            </div>
            <div className={styles.saveButton}>
              <img className={styles.saveIcon} src={SERVER_URL + '/assets/save.svg'} />Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;