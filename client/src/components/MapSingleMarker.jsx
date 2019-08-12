import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from '../../style/style.css';
import API from '../../../google.config.js';
import Marker from './Marker.jsx';


class MapContainer extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      center: {
        lat: 34.025031,
        lng: -118.487642
      },
      zoom: 16
    }
    console.log('MapContainer', this.props)
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
              lat={this.state.center.lat} 
              lng={this.state.center.lng}
              text="My Marker"
            />                     


          {/* {this.props.data.map(item => {
            <Marker
              positions={{lat:item.lat, lng:item.lng}}
              key={item.lat}
              text="My Marker"
            /> 
          })} */}

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;

// {this.props.data.map(item => {
//   <Marker
//     positions={{lat:item.lat, lng:item.lng}}
//     lat={item.lat}
//     lng={item.lng}
//     text="My Marker"
//   /> 
// })}