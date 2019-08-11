import React from 'react';
import styles from '../../style/style.css';

const Marker = () => {
  return (
    <div className={styles.markerContainer}>
      <div className={styles.marker}/>
      <div className={styles.markerPointer}/>
    </div>
  );
};

export default Marker;