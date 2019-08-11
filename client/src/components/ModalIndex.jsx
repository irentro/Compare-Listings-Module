import React from 'react';
import styles from '../../style/style.css';

class ModalIndex extends React.Component {
  constructor(props) {
    super(props)

  }
  
  render() {
    return(
      <div>
        <div className={styles.modalIndexContainer}>
          {this.props.data.map(item => 
            <div 
              key={item.id}>
              
              <img 
                className={styles.modalIndexImage}
                src={item.imageUrl}/>
            </div>)}
          <button
            className={styles.compareButton}>
            Compare places
          </button>
        </div>

      </div>
    )
  }
}

export default ModalIndex;