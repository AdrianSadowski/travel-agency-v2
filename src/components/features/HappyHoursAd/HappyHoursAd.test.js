import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHoursAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'titleMockProps',
  promoDescription: 'promoDescriptionMockProps',
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

  it('should render title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toBe(mockProps.title);
  });
});

describe('Component HappyHourdAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';

  const mockDate = class extends Date{
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
    // next STEP:
    // Podmiana klasy Date TEST: 4
  };
});