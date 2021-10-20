import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = (props) => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} />
    </Col>
  </Row>
)


OrderForm.propTypes = {
  tripCost: PropTypes.string,
}

export default OrderForm