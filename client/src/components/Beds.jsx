import React from 'react';
import Room from './Room.jsx';
import styles from '../styles/Beds.css';

const Beds = (props) => (
  <div className = {styles.sleepingInfo}>
    <div className={styles.bedroomsHeader}>
      Sleeping arrangements
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