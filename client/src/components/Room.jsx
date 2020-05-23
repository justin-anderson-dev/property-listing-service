import React from 'react';
import styles from '../styles/Room.css';

const Room = (props) => (
  <div className = {styles.bedroomInfo}>
    <div className={styles.bedIcons}>
      {
        props.kingBeds === 2 ? <div><img src="http://localhost:3005/assets/kingBed.svg" /> <img src="http://localhost:3005/assets/kingBed.svg" /></div> :
          props.kingBeds === 1 ? <img src="http://localhost:3005/assets/kingBed.svg" /> :
            props.queenBeds + props.fullBeds === 2 ? <div><img src="http://localhost:3005/assets/queenBed.svg" /> <img src="http://localhost:3005/assets/queenBed.svg" /></div> :
              props.queenBeds + props.fullBeds === 1 ? <img src="http://localhost:3005/assets/queenBed.svg" /> :
                props.twinBeds === 2 ? <div><img src="http://localhost:3005/assets/twinBed.svg" /> <img src="http://localhost:3005/assets/twinBed.svg" /></div> :
                  props.twinBeds === 1 ? <img src="http://localhost:3005/assets/twinBed.svg" /> :
                    props.sofaBeds === 2 ? <div><img src="http://localhost:3005/assets/sofaBed.svg" /> <img src="http://localhost:3005/assets/sofaBed.svg" /></div> :
                      props.sofaBeds === 1 ? <img src="http://localhost:3005/assets/sofaBed.svg" /> : null
      }
    </div>
    <div className={styles.bedroomTitle}>
      {
        props.name === 'bedroom1' ? 'Bedroom 1' :
          props.name === 'bedroom2' ? 'Bedroom 2' :
            props.name === 'bedroom3' ? 'Bedroom 3' :
              props.name === 'bedroom4' ? 'Bedroom 4' :
                props.name === 'commonRooms' ? 'Shared spaces' : 'Room'
      }
    </div>
    <div className={styles.bedroomBeds}>
      {
        props.kingBeds > 1 ? props.kingBeds + ' king beds' :
          props.kingBeds === 1 ? '1 king bed' :
            props.queenBeds > 1 ? props.queenBeds + ' queen beds' :
              props.queenBeds === 1 ? '1 queen bed' :
                props.fullBeds > 1 ? props.fullBeds + ' double beds' :
                  props.fullBeds === 1 ? '1 double bed' :
                    props.twinBeds > 1 ? props.twinBeds + ' single bed' :
                      props.twinBeds === 1 ? '1 single bed' :
                        props.sofaBeds > 1 ? props.sofaBeds + ' couches' :
                          props.sofaBeds === 1 ? '1 couch' : 'no beds'
      }
    </div>
  </div>
);

export default Room;