import React from 'react';
import styles from '../../style/style.css';
import PlaceFixed from './PlaceFixed.jsx';
import PlaceCarousel from './PlaceCarousel.jsx';
import MapContainer from './Map.jsx';
import Price from './Price.jsx';
import Chat from './Chat.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      position: 0,
      priceView: false,
      chatView: false,
      targetPrice: 150,
      positionY: false
    }
     
    this.handleModalView=this.handleModalView.bind(this);
    this.handleCarouselMoveRight = this.handleCarouselMoveRight.bind(this);
    this.handleCarouselMoveLeft = this.handleCarouselMoveLeft.bind(this);
    this.handleHover=this.handleHover.bind(this);
    this.displayMap=this.displayMap.bind(this);
    this.handlePriceView=this.handlePriceView.bind(this);
    this.handleChatView=this.handleChatView.bind(this);
    this.handleUpdateTargetPrice=this.handleUpdateTargetPrice.bind(this);
    this.handleMoveMap=this.handleMoveMap.bind(this);
  }

  handleModalView(e) {
    this.props.modalView(e)
  }

  handleCarouselMoveRight() {
    if(this.state.position >= -2345) {
      this.setState({
        position: this.state.position - 335
      })
    }
  }

  handleCarouselMoveLeft() {
    if(this.state.position !== 0) {
      this.setState({
        position: this.state.position + 335
      })
    }
  }

  handleHover(value) {
    this.setState({
      hoverItem: value
    }), () => {this.displayMap()};
  }

  handlePriceView() {
    this.setState({
      priceView: !this.state.priceView
    })
  }

  handleChatView() {
    this.setState({
      chatView: !this.state.chatView
    })
    console.log('Modal chatview state', this.state.chatView)
  }

  handleUpdateTargetPrice(value) {
    this.setState({
      targetPrice: value
    })
  }

  handleMoveMap() {
    this.setState({
      positionY: !this.state.positionY
    })
    console.log('Modal positionY', this.state.positionY)
  }

  displayMap() { 
    return <MapContainer 
      data={this.props.mockData}
      hoverItem={this.state.hoverItem}
      positions={this.state.positionY}
      moveMap={this.handleMoveMap}/>
  }
 
  render() {
    return (
      <div className={styles.modalContainer}>
        <div 
          className={styles.iconXcontainer}
          onClick={this.handleModalView}>
          <img 
            className={styles.iconX} 
            onClick={this.handleModalView}
            src='https://rentro-icons.s3-us-west-1.amazonaws.com/icon-x.png'/>
        </div>
        <div className={styles.modalSectionHead} >
          <div className={styles.modalSectionHeadInner}>
            <div className={styles.modalContainerHead}>
              <div 
                className={styles.sectionHeader}>
                  Compare places to stay
              </div>
              <div className={styles.collaborateContainer}>
                <div className={styles.avatarContainer}>
                  <img 
                    className={styles.iconAvatar} 
                    src='https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar1B.png'/>
                  <img 
                    className={styles.iconAvatar} 
                    src='https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar2B.png'/>
                  <img 
                    className={styles.iconAvatar} 
                    src='https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar3B.png'/>              
                  <img 
                    className={styles.iconAvatar} 
                    src='https://rentro-icons.s3-us-west-1.amazonaws.com/Avatar5B.png'/>
                  <img 
                    className={styles.iconAvatar} 
                    src='https://rentro-icons.s3-us-west-1.amazonaws.com/icon-add-blue.png'/>
                </div>
                <img 
                  className={styles.iconComment} 
                  onClick={this.handleChatView}
                  src='https://rentro-icons.s3-us-west-1.amazonaws.com/icon-comment-blue.png'/>
              </div>
            </div>
          </div>                
        </div>

        {this.state.chatView ? 
          <Chat chatView={this.handleChatView}/> :
          console.log('Chat turned off')}

        <div className={styles.modalSectionOverflow}>
          <div className={styles.modalSectionFilters}>
            {this.state.priceView ? 
              <Price 
                priceView={this.handlePriceView}
                targetPrice={this.handleUpdateTargetPrice}/> : 
              console.log('Price modal turned off')}
            <div className={styles.modalContainerFilter}>
              <div className={styles.filterContainer}>
                <button className={styles.filterButtonFilled}>
                  Dates: Sep 6-9
                </button>
                <button 
                  className={styles.filterButtonFilled}
                  onClick={this.handlePriceView}>
                  {`Budget: $${this.state.targetPrice}`}
                </button>
                <button className={styles.filterButton}>
                  Guests
                </button>
              </div>
            </div>
          </div>
          <div className={styles.modalSectionList}>
            <div className={styles.modalContainerList}>
              <div 
              className={styles.leftArrow}>
              <img 
                className={styles.imgArrow}
                src="https://rentro-icons.s3-us-west-1.amazonaws.com/leftarrow.png"
                onClick={this.handleCarouselMoveLeft}/>  
              </div>
              <PlaceFixed 
                current={this.props.current}
                like={this.props.like}
                hover={this.handleHover}
                targetPrice={this.state.targetPrice}/>
              <PlaceCarousel 
                data={this.props.data}
                like={this.props.like}
                hover={this.handleHover}
                targetPrice={this.state.targetPrice}
                position={this.state.position}/>
              <div 
                className={styles.rightArrow}>
                <img 
                  className={styles.imgArrow}
                  src="https://rentro-icons.s3-us-west-1.amazonaws.com/rightarrow.png"
                  onClick={this.handleCarouselMoveRight}/>      
              </div>
            </div>
            <div className={styles.mapLabel}>
              <div 
                className={styles.mapLabelText}
                onClick={this.handleMoveMap}>
                View places on map
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          {this.displayMap()}
        </div>
      </div>
    )
  }
}

export default Modal;
