import { shallow } from 'enzyme';
import React from 'react';

import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should return empty object if called withour required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  const expectedType ='type';
  const expectedName ='name';
  const component = shallow(<OrderOption type={expectedType} name={expectedName}  />);

  it('should render props', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct props name', () => {
    const renderedComponentName = component.find('.title').text();

    expect(renderedComponentName).toEqual(expectedName);
    console.log(component.debug());

  });
});