import React from 'react';
import MockData from '../../../database/mockdata.js';
import styles from '../../style/style.css';
import Modal from './Modal.jsx';

class ModalIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPlace: [MockData[0]],
      data: MockData.slice(1),
      compareModalView: false
    }   

    this.handleCompareModalView=this.handleCompareModalView.bind(this);
    this.handleLikeItem = this.handleLikeItem.bind(this);
  }

  handleCompareModalView(e) {
    e.preventDefault();
    this.setState({
      compareModalView: !this.state.compareModalView
    })
  }

  handleLikeItem(value) {
    if(this.state.currentPlace[0].id === Number(value)) {
      let updatedRecord = this.state.currentPlace;
      updatedRecord[0].favorited = !updatedRecord[0].favorited;
      updatedRecord[0].favorited ? updatedRecord[0].votes++ : updatedRecord[0].votes--;
      this.setState({
        currentPlace: updatedRecord
      }) 
    }
    else {
      for(var i = 0; i < this.state.data.length; i++) {
        if(this.state.data[i].id === Number(value)) {
          let updatedRecord = this.state.data;
          updatedRecord[i].favorited = !updatedRecord[i].favorited;
          updatedRecord[i].favorited ? updatedRecord[i].votes++ : updatedRecord[i].votes--;
                   
          this.setState({
            data: updatedRecord
          }) 
        }
      }
    }
  }

  render() {
    return(
      <div>
        {this.state.compareModalView ? 
          <div className={styles.modalBackground}>
            <Modal 
              current={this.state.currentPlace}
              data={this.state.data}
              modalView={this.handleCompareModalView}
              mockData={MockData}
              like={this.handleLikeItem}/>
          </div> : 
          console.log('Main modal turned off')
        }
        <div className={styles.modalIndexContainer}>
          {this.state.data.map(item => 
            <div 
              key={item.id}>             
              <img 
                className={styles.modalIndexImage}
                src={item.imageUrl}/>
            </div>)}
          <button
            className={styles.compareButton}
            onClick={this.handleCompareModalView}>
            Compare places
          </button>
        </div>

      </div>
    )
  }
}

export default ModalIndex;