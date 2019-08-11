import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from '../../../google.config.js';
import styles from '../../style/style.css';

// ...
 
export class MapContainer extends React.Component {

  render() {

    return (
      <Map 
        className = {styles.mapContainer} 
        google={this.props.google} 
        zoom={14}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}>
          <Marker
          className={styles.marker}
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 40.854885, lng: -88.081807}} />
      
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey:(API)
})(MapContainer);


{/* <Marker
icon={iconURL}
title={'The marker`s title will appear as a tooltip.'}
name={'SOMA'}
position={{lat: 40.854885, lng: -88.081807}} /> */}