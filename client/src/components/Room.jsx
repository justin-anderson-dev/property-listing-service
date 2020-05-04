// Room component displays info and icons for sleeping arrangements for a given room in the listing

import React from 'react';

const Room = (props) => (
  <div className = "bedroom-info">
    <div className="bed-icons">
      <img src="http://localhost:3005/assets/queenBed.svg" />
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
        props.kingBeds > 0 ? props.kingBeds + ' king bed' :
          props.queenBeds > 0 ? props.queenBeds + ' queen bed' :
            props.fullBeds > 0 ? props.fullBeds + ' full bed' :
              props.twinBeds > 0 ? props.twinBeds + ' single bed' :
                props.sofaBeds > 0 ? props.sofaBeds + ' couch' : '0 beds'
      }
    </div>
  </div>
);

export default Room;