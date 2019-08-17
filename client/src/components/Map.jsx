import React from 'react';
import API from '../../../google.config.js';
import styles from '../../style/style.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverItem: this.props.hoverItem
    }    
    this.displayMarkers=this.displayMarkers.bind(this);
    this.handleMoveMap=this.handleMoveMap.bind(this);
  }

  handleMoveMap() {
    console.log('Map props', this.props)
    this.props.moveMap();
  }

  displayMarkers() {
    return this.props.data.map(item => {
      if(this.props.hoverItem === item.id) {
        return <Marker 
          key={item.id} 
          label={{
            text: `$${item.price}`,
            fontSize: "16px",
            fontWeight: "Bold",
            fontFamily: "system-ui",
            color: "#ffffff",
            paddingTop: "25px"
          }}
          icon={'https://rentro-icons.s3-us-west-1.amazonaws.com/marker-blue4.png'}
          position={{
            lat: item.lat,
            lng: item.lng
          }} 
        />
      }
      else {
        return <Marker 
         style={{width: "30px", height: "30px"}}
         key={item.id} 
         label={{
           text: `$${item.price}`,
           fontSize: "16px",
           fontWeight: "Bold",
           fontFamily: "system-ui",
           color: "#484848",
           paddingbBttom: "20px"
         }}
         icon={'https://rentro-icons.s3-us-west-1.amazonaws.com/marker-white4.png'}
         position={{
           lat: item.lat,
           lng: item.lng
         }} />
      }
    })
  }

  render() {
    const y = this.props.positions ? -700 : 100;
    const detailsPosition = {
      transition: `0.5s`,
      transform: `translateY(${y}px)`
    }

    return (
      <div 
        className={styles.modalInnerWrapper}
        style={detailsPosition}>
        <div className={styles.iconMapCaretContainer}>
          <img 
          className={styles.iconMapCaret}
          onClick={this.handleMoveMap}
          src='https://rentro-icons.s3-us-west-1.amazonaws.com/downarrow.png'/>
        </div>        
        <Map 
          style={{
            width:'100%', 
            height:'60%', 
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:(API)
})(MapContainer);