import React from 'react';
import styles from './HappyHoursAd.module.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  render() {
    let {promoDescription, title} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>

    );
  }
}


HappyHourAd.propTypes = {
  promoDescription: PropTypes.string,
  title: PropTypes.string,
};

export default HappyHourAd;