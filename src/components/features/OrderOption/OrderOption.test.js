import { shallow } from 'enzyme';
import React from 'react';

import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render props', () => {
    const component = shallow(<OrderOption type='type' name='name'  />);
    expect(component).toBeTruthy();
  });
});