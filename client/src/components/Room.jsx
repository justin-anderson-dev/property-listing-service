
import React from 'react';
import styles from '../styles/Room.css';

const S3_URL = process.env.S3_URL;

const Room = (props) => (
  <div className = {styles.bedroomInfo}>
    <div className={styles.bedIcons}>
      {
        props.kingBeds === 2 ? <div><img src={S3_URL + '/assets/kingBed.png'} /> <img src={S3_URL + '/assets/kingBed.png'} /></div> :
          props.kingBeds === 1 ? <img src={S3_URL + '/assets/kingBed.png'} /> :
            props.queenBeds + props.fullBeds === 2 ? <div><img src={S3_URL + '/assets/queenBed.png'} /> <img src={S3_URL + '/assets/queenBed.png'} /></div> :
              props.queenBeds + props.fullBeds === 1 ? <img src={S3_URL + '/assets/queenBed.png'} /> :
                props.twinBeds === 2 ? <div><img src={S3_URL + '/assets/twinBed.png'} /> <img src={S3_URL + '/assets/twinBed.png'} /></div> :
                  props.twinBeds === 1 ? <img src={S3_URL + '/assets/twinBed.png'} /> :
                    props.sofaBeds === 2 ? <div><img src={S3_URL + '/assets/sofaBed.png'} /> <img src={S3_URL + '/assets/sofaBed.png'} /></div> :
                      props.sofaBeds === 1 ? <img src={S3_URL + '/assets/sofaBed.png'} /> : null
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