import React from 'react';

class AmenitiesModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div> <h1>This is the 'All Amenities' modal</h1> </div>
    );
  }
}

export default AmenitiesModal;