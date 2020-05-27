import React from 'react';
import AmenityPrev from './AmenityPrev.jsx';
import AmenitiesModal from './AmenitiesModal.jsx';
import styles from '../styles/Amenities.css';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
    this.setState = this.setState.bind(this);
  }

  showModal() {
    this.setState({
      showAll: true
    });
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  }

  hideModal() {
    this.setState({
      showAll: false
    });
  }

  render() {
    return (
      <div className={styles.amenitiesContainer}>
        <div>
          <AmenitiesModal
            show={this.state.showAll}
            handleClose={this.hideModal.bind(this)}
            amenitiesList={this.props.amenitiesList}
            myAmenities={this.props.myAmenities}
          />
        </div>
        <div className = {styles.amenities}>
          <div className={styles.amenitiesHeader}>
            Amenities
          </div>
          <div className={styles.amenitiesList}>
            {this.props.keyAmenities ? this.props.keyAmenities.map((amenity, index) => (
              <AmenityPrev
                idString={amenity}
                key={`keyAmenities_${index}`}
                amenity={this.props.myAmenities.length ? this.props.myAmenities.find(element => element.idString === amenity) : 'not found' }
              />
            )) : null }
          </div>
          <button
            className={styles.allAmenitiesButton}
            onClick={this.showModal.bind(this)}
          >
            Show all { this.props.amenitiesList ? (
              this.props.amenitiesList.basic.length +
              this.props.amenitiesList.bedAndBath.length +
              this.props.amenitiesList.dining.length +
              this.props.amenitiesList.facilities.length +
              this.props.amenitiesList.familyFeatures.length +
              this.props.amenitiesList.guestAccess.length +
              this.props.amenitiesList.logistics.length +
              this.props.amenitiesList.outdoor.length +
              this.props.amenitiesList.safetyFeatures.length
            ) : 'X'
            } amenities
          </button>
        </div>
      </div>
    );
  }
}

export default Amenities;