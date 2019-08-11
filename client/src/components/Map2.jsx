import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from '../../style/style.css';
import API from '../../../google.config.js';
import Marker from './Marker.jsx';


class MapContainer extends React.Component {
  constructor() {
    super() 
    this.state = {
      center: {
        lat: 34.025031,
        lng: -118.487642
      },
      zoom: 16
    }
  }

  render() {
    return (
      <div className={styles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={34.025031}
            lng={-118.487642}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;

