import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from  '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props) => (
  <Row>
    {pricing.map((pricingOption) => (
      <Col md={4} key={pricingOption.id}>
        <OrderOption 
          key={pricingOption.id}
          {...pricingOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options} />
    </Col>
  </Row>
)


OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
}

export default OrderForm