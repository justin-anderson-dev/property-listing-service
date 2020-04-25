import React from 'react';
/*
still need to solve:
- logic for displaying features with value 'true'
- why can't I get nested properties? (props.headerData.location.city)
- urls for icons
*/
const Header = (props) => (
  <div className="listing-header">
    <div className="headline">
      <h1>{props.headerData.headline}</h1>
    </div>
    <div className="header-widgets">
      <div className="header-info">
        <div className="stars-info">
          {props.headerData.stars} ({props.headerData.reviews}) •
        </div>
        <div className="superhost-info">
          superhost •
        </div>
        <div className="location-info">
          neighborhood, city, state
        </div>
      </div>
      <div className="header-actions">
        <div className="share-button">
          Share
        </div>
        <div className="save-button">
          Save
        </div>
      </div>
    </div>
  </div>
);

export default Header;