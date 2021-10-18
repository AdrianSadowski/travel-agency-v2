import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

class OrderForm extends React.Component {
  render() {
    return (
        <Row>
          <Col xs={12}>
            <OrderSummary />
          </Col>
        </Row>
    )
  }
}

export default OrderForm