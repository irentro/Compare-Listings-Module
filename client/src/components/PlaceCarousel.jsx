import React from 'react';
import styles from '../../style/style.css';

class PlaceCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.handleLikeItem = this.handleLikeItem.bind(this);
  }

  handleLikeItem(e) {
    this.props.like(e.target.getAttribute('name'));
  }


  render() {
    const x = this.props.position;
    const position = {
      transition: `0.5s`,
      transform: `translateX(${x}px)`
    }

    return(
      <div className={styles.listCarouselContainer}>
        <div className={styles.labelList}>
          Saved places for comparison:
        </div>
        <div className={styles.listCarousel}>
          {this.props.data.map(item =>
            <div 
              className={styles.listCards}
              key={item.id}
              style={position}
              >
      
              <div 
                className={styles.heartClick}
                name={item.id}>
                <img 
                    className={styles.imgX}
                    name={item._id}
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/iconX-card.png"/>
              </div>
              <img
                className={styles.listItemImage}
                src={item.imageUrl}        
              />

              <div 
                className={styles.listItemDetailWrapper}>
                <div className={styles.listItemCategory}>
                  <div>
                    {item.roomType}
                  </div>
                  <div className={styles.listItemCity}>
                    {item.city}
                  </div>
                </div>
                <div className={styles.listItemTitle}>
                  {item.title}
                </div>
                {item.availability ? 
                  <button className={styles.bookButton}>Book</button> :
                  <button className={styles.unavailableButton}>Unavailable</button>
                }
              </div>

              <div className={styles.listRowShade}>
                <div className={styles.listItemPrice}>
                  {`$${item.price}/night`}
                </div>
              </div>
              <div className={styles.listRow}>
                <div className={styles.listItemReviewWrapper}>
                  <div className={styles.listItemStarWrapper}>
                    <img 
                      className={styles.listItemStar} 
                      src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                    <img 
                      className={styles.listItemStar}
                      src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                    <img 
                      className={styles.listItemStar}
                      src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                    <img 
                      className={styles.listItemStar} 
                      src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                    <img 
                      className={styles.listItemStar} 
                      src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                  </div>
                  <div className={styles.listItemReviewCount}>
                    {item.reviewCount}
                  </div>
                </div>
              </div>
              <div className={styles.listRowShade}>
                <div className={styles.listItem}>
                  {item.amenities}
                </div>
              </div>
              <div className={styles.listRow}>
                <div className={styles.listItem}>
                  {`${item.guests} guests max`}
                </div>
              </div>              
              <div className={styles.listRowShade}>
                <div className={styles.listItem}>
                  {`${item.bedrooms} bedrooms • ${item.beds} • ${item.baths} baths`}
                </div>
              </div>
              <div className={styles.listRow}>
                <div 
                className={styles.heartClick}
                name={item.id}
                onClick={this.handleLikeItem}>
                {item.favorited ? 
                  (<img 
                    className={styles.imgHeart}
                    name={item.id}
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-filled.png"/>) : 
                  (<img 
                    className={styles.imgHeart}
                    name={item.id}
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-unfilled.png"/>)}
                </div>
                <div className={styles.listItem}>
                  {item.votes}
                </div>
              </div>  
            </div>
          )}
        </div>

      </div>
    )
  }
}

export default PlaceCarousel;