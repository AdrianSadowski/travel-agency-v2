import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (
  <div className={styles.component}>
    {required ? ('') : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name="times-circle" />
      </div>
    )}
    {values.map((value) => {
      return (
        <div
          key={value.id}
          className={value.id === currentValue ? styles.iconActive : styles.icon}
          onClick={() => setOptionValue(value.id)}
        >
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      );
    })}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;