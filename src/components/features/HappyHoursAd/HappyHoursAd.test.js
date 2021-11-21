import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHoursAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHoursAd', () => {
  it('should reder without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render title and  description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
});
