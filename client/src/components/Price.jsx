import React from 'react';
import { Range } from 'react-range';
import styles from '../../style/style.css';

class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [145]
    }

    this.handleClosePriceModal=this.handleClosePriceModal.bind(this);
    this.handleUpdateTargetPrice=this.handleUpdateTargetPrice.bind(this);
  }  

  handleClosePriceModal(e) {
    e.preventDefault();
    this.props.priceView();
    this.handleUpdateTargetPrice();
  }

  handleUpdateTargetPrice() {
    this.props.targetPrice(this.state.values[0]);
  }

  render() {
    return(
      <div>
        <div className={styles.priceModalContainer}>
          <div className={styles.priceLabel}>
            Set your target price:
          </div>
          <div className={styles.priceRangeContainer}>
            <Range
              step={1}
              min={0}
              max={500}
              values={this.state.values}
              onChange={values => this.setState({ values })}s
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '6px',
                    width: '100%',
                    backgroundColor: '#026C70'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    borderRadius: '100%',
                    backgroundColor: 'white',
                    borderWidth: '.5px',
                    borderStyle: 'solid',
                    borderColor: '#026C70'
                  }}
                />
              )}
            />
          </div>
          <div className={styles.priceValueContainer}>
            <div className={styles.priceOutputContainer}>  
              {`$${this.state.values[0]}`}
            </div>
            <div 
              className={styles.priceSave}
              onClick={this.handleClosePriceModal}>
              Save
            </div>

          </div>
        </div>
        <div className={styles.priceModalBackground}></div>
      </div>


    )
  }
}

export default Price;