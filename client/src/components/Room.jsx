
import React from 'react';
import styles from '../styles/Room.css';

const API_URL = process.env.API_URL;
const SERVER_URL = process.env.SERVER_URL;

const Room = (props) => (
  <div className = {styles.bedroomInfo}>
    <div className={styles.bedIcons}>
      {
        props.kingBeds === 2 ? <div><img src={SERVER_URL + "/assets/kingBed.svg"} /> <img src={SERVER_URL + "/assets/kingBed.svg"} /></div> :
          props.kingBeds === 1 ? <img src={SERVER_URL + "/assets/kingBed.svg"} /> :
            props.queenBeds + props.fullBeds === 2 ? <div><img src={SERVER_URL + "/assets/queenBed.svg"} /> <img src={SERVER_URL + "/assets/queenBed.svg"} /></div> :
              props.queenBeds + props.fullBeds === 1 ? <img src={SERVER_URL + "/assets/queenBed.svg"} /> :
                props.twinBeds === 2 ? <div><img src={SERVER_URL + "/assets/twinBed.svg"} /> <img src={SERVER_URL + "/assets/twinBed.svg"} /></div> :
                  props.twinBeds === 1 ? <img src={SERVER_URL + "/assets/twinBed.svg"} /> :
                    props.sofaBeds === 2 ? <div><img src={SERVER_URL + "/assets/sofaBed.svg"} /> <img src={SERVER_URL + "/assets/sofaBed.svg"} /></div> :
                      props.sofaBeds === 1 ? <img src={SERVER_URL + "/assets/sofaBed.svg"} /> : null
      }
    </div>
    <div className="bedroom-title">
      {
        props.name === 'bedroom1' ? 'Bedroom 1' :
          props.name === 'bedroom2' ? 'Bedroom 2' :
            props.name === 'bedroom3' ? 'Bedroom 3' :
              props.name === 'bedroom4' ? 'Bedroom 4' :
                props.name === 'commonRooms' ? 'Shared spaces' : 'Room'
      }
    </div>
    <div className="bedroom-beds">
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