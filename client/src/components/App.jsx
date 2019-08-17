import React from 'react';
import styles from '../../style/style.css';
import ModalIndex from './ModalIndex.jsx';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
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
  }
  
  render() {
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
          <ModalIndex /> : console.log('ModelIndex turned off')
        }
      </div>
    )
  }
}

export default App;