import React from 'react';
import styles from './OrderSummary.module.scss';
//import PropTypes from 'prop-types';


class OrderSummary extends React.Component {
  render () {
    //const cost = this.props;
    return (
      <h2 className={styles.component}>"Total:"<strong>$123,450</strong></h2>
    )
  }
}


export default OrderSummary