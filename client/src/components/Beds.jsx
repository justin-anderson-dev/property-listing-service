import React from 'react';
import Room from './Room.jsx';
import styles from '../styles/Beds.css';

const Beds = (props) => (
  <div className = "sleeping-info">
    <div className="bedrooms-header">
      <h2>Sleeping arrangements</h2>
    </div>
    <div className={styles.bedroomsList}>
      {props.bedrooms ? props.bedrooms.map((room, index) => (
        <Room
          name={room[0]}
          key={`bedrooms_${index}`}
          childBeds={room[1].childBed}
          cribs={room[1].crib}
          fullBeds={room[1].fullBed}
          twinBeds={room[1].twinBed}
          queenBeds={room[1].queenBed}
          kingBeds={room[1].kingBed}
          sofaBeds={room[1].sofaBed}
        />
      )) : null}
    </div>
  </div>
);

export default Beds;