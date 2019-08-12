import React from 'react';
import styles from '../../style/style.css';
import PlaceFixed from './PlaceFixed.jsx';
import PlaceCarousel from './PlaceCarousel.jsx';
// import MapContainer from './Map.jsx';
import MapContainer from './Map.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      position: 0
    }

    this.handleModalView=this.handleModalView.bind(this);
    this.handleCarouselMoveRight = this.handleCarouselMoveRight.bind(this);
    this.handleCarouselMoveLeft = this.handleCarouselMoveLeft.bind(this);
  }

  handleModalView(e) {
    this.props.modalView(e)
  }

  handleCarouselMoveRight() {
    if(this.state.position >= -2310) {
      this.setState({
        position: this.state.position - 330
      })
    }
  }

  handleCarouselMoveLeft() {
    if(this.state.position !== 0) {
      this.setState({
        position: this.state.position + 330
      })
    }
  }

  
  render() {
    return (
      <div>
        <div 
          className={styles.iconXcontainer}
          onClick={this.handleModalView}>
          <img 
            className={styles.iconX} 
            onClick={this.handleModalView}
            src='https://rentro-icons.s3-us-west-1.amazonaws.com/icon-x.png'/>
        </div>

        <div className={styles.modalSectionHead}>
          <div className={styles.modalContainerHead}>
            <div 
              className={styles.sectionHeader}>
                Compare places to stay
            </div>
          </div>
        </div>
        <div className={styles.modalSectionOverflow}>
          <div className={styles.modalSectionFilters}>
            <div className={styles.modalContainerFilter}>
              <div className={styles.filterContainer}>
                <button className={styles.filterButton}>
                  Dates
                </button>
                <button className={styles.filterButton}>
                  Price
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
                like={this.props.like}/>
              <PlaceCarousel 
                data={this.props.data}
                like={this.props.like}
                position={this.state.position}/>
              <div 
                className={styles.rightArrow}>
                <img 
                  className={styles.imgArrow}
                  src="https://rentro-icons.s3-us-west-1.amazonaws.com/rightarrow.png"
                  onClick={this.handleCarouselMoveRight}/>      
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <MapContainer data={this.props.mockData}/>
          </div>
        </div>

      </div>
    )
  }

}

export default Modal;

