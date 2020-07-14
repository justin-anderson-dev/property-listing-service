import React from 'react';
import styles from '../styles/Description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullDescr: false
    };
    this.setState = this.setState.bind(this);
  }

  toggleDescription() {
    this.setState({showFullDescr: !this.state.showFullDescr});
  }

  // TODO: Method to handle scrolling down to Host module
  handleContactHost(e) {
    e.preventDefault();
    const host = document.getElementById('host');
    host.scrollIntoView();
  }

  render() {
    return (
      <div className={styles.descriptionContainer}>
        <div className = {styles.listingDescription}>
          <div className = {styles.descriptionSpacer}></div>
          <div className={
            !this.state.showFullDescr ? `${styles.descriptionPreview} ${styles.displayGridArea}` : `${styles.descriptionPreview} ${styles.displayNone}`
          }>
            {this.props.description.slice(0, 220)}...&nbsp; <span><button onClick={this.toggleDescription.bind(this)} className={styles.textButton}>read more</button></span>
          </div>
          <div className={
            this.state.showFullDescr ? `${styles.descriptionFull} ${styles.displayGridArea}` : `${styles.descriptionFull} ${styles.displayNone}`
          }>
            {this.props.description.split(`\n`).map((paragraph, index) => (
              <p key={index} className={styles.descriptionGraf}>{paragraph}</p>
            ))} &nbsp;
            <span>
              <button
                onClick={this.toggleDescription.bind(this)}
                className={styles.textButton}
              >read less
              </button>
            </span>
          </div>
          <div className = {styles.descriptionSpacer}></div>
          <button
            onClick = {this.handleContactHost.bind(this)}
            className={styles.contactButton}
          >
            Contact host
          </button>
        </div>
      </div>
    );
  }
}

export default Description;
