import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from '../../../google.config.js';
import styles from '../../style/style.css';
// import Marker from './Marker.jsx';

// ...
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.displayMarkers=this.displayMarkers.bind(this)
  }

  displayMarkers() {
    return this.props.data.map(item => {
      return <Marker 
       style={{width: "30px", height: "30px"}}
       key={item.id} 
       id={item.id}
       label={{
         text: `$${item.price}`,
         fontSize: "16px",
         fontWeight: "Bold",
         fontFamily: "system-ui",
         color: "#484848"
       }}
       icon={'https://rentro-icons.s3-us-west-1.amazonaws.com/marker-white.png'}
       position={{
         lat: item.lat,
         lng: item.lng
       }} />
    })
  }

  render() {

    return (
        <Map 
          style={{
            width:'100%', 
            height:'75%', 
            position:'relative'
          }}
          className={styles.mapContainer}
          google={this.props.google} 
          zoom={17}
          initialCenter={{
            lat: 34.025031,
            lng: -118.487642
          }}>

          {this.displayMarkers()}
        
        </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey:(API)
})(MapContainer);


// {/* <Marker
// icon={iconURL}
// title={'The marker`s title will appear as a tooltip.'}
// name={'SOMA'}
// position={{lat: 40.854885, lng: -88.081807}} /> */}


// {this.props.data.map(item => {
//   <Marker
//   name={'SOMA'}
//   label={{
//     text: item.price,
//     fontFamily: "system-ui",
//     fontSize: "14px",
//   }}
//   icon={'https://rentro-icons.s3-us-west-1.amazonaws.com/heart-filled.png'}
//   position={{lat: 34.025031, lng:-118.487642}} />

// })}