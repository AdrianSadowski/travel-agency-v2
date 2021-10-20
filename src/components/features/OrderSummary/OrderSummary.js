import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';
// import { calculateTotal } from '../../../utils/calculateTotal';
// import { formatPrice } from '../../../utils/formatPrice';
// import pricing from '../data/pricing.json';



const OrderSummary = ({cost}) =>(
  <h2 className={styles.component}>Total:  
    <strong>{cost}</strong>
    {/* <strong>{formatPrice(calculateTotal(cost, ))}</strong> */}
  </h2>

)


OrderSummary.propTypes = {
  cost: PropTypes.string,
}

export default OrderSummary