import React from 'react';
import styles from '../../style/style.css';

class Marker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.markerContainer}>
        <div 
          className={styles.marker}>Hello</div>
        <div className={styles.markerPointer}/>
      </div>
    );
  }
};

export default Marker;