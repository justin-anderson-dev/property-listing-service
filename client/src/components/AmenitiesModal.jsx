import React from 'react';
import styles from '../styles/AmenitiesModal.css';

const AmenitiesModal = (props) => {

  return (
    <div className={props.show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}` }>
      <section className={styles.modalMain}>
        <h1>Here is where we will render the list components</h1>
        <p>{Object.keys(props.amenitiesList)}</p>
        <button onClick={props.handleClose}>
          Close X
        </button>
      </section>
    </div>
  );
};

export default AmenitiesModal;