import React from 'react';
import MockData from '../../../database/mockdata.js';
import styles from '../../style/style.css';
import MapContainer from './Map2.jsx';
import ModalIndex from './ModalIndex.jsx';

class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      data: MockData,
      addedToCompare: false,
      compareModalView: false
    }

    this.handleAddtoCompare = this.handleAddtoCompare.bind(this);
  }

  handleAddtoCompare(e) {
    e.preventDefault();
    this.setState({
      addedToCompare: !this.state.addedToCompare
    });
    console.log('state', this.state.addedToCompare)
  }

  render() {
    const buttonState = this.state.addedToCompare;

    return (
      <div>
        <div className={styles.mainButtonContainer}>
          {this.state.addedToCompare ? 
            <button 
              className={styles.mainButton}
              onClick={this.handleAddtoCompare}>
              Added to Compare
            </button> :
            <button 
              className={styles.mainButton}
              onClick={this.handleAddtoCompare}>
              Add to Compare
            </button>       
          }
        </div>
        {this.state.addedToCompare ? 
          <ModalIndex  data={this.state.data}/> : console.log('ModelIndex turned off')}
        <MapContainer />
      </div>
    )
  }
}

export default App;