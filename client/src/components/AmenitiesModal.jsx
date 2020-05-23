import React from 'react';
import styles from '../styles/AmenitiesModal.css';

const AmenitiesModal = (props) => {
  const toggleClassName = props.show ? 'modal displayBlock' : 'modal displayNone';

  return (
    <div className={styles.toggleClassName}>
      <section className={styles.modalMain}>
        <h1>Here is where we will render the list components</h1>
        <p>`${props.amenitiesList}`</p>
        <button onClick={this.props.handleClose}>
          Close X
        </button>
      </section>
    </div>
  );
};

export default AmenitiesModal;