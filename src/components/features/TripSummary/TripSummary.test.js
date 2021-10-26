import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';


const tags=['test', '1234', 'qwerty'];
describe('Component TripSummary', () => {

  it('should generate correct url link', () => {
    const component = shallow(<TripSummary
      id={'abc'}
      tags={tags}
      image={'image'}
      name={'name'}
      days={9}
      cost={'100$'}
    />);
    console.log(component.debug());
    expect(component.find('.link').prop('to')).toEqual('/trip/' + 'abc');
  });

  it('img has correct src and alt', () => {
    const component =shallow(<TripSummary 
      tags={tags}
      image={'image'}
      name={'name'}
      days={9}
      cost={'100$'}
      id={'abc'}
    />);

    expect(component.find('img').prop('src')).toEqual('image');
    expect(component.find('img').prop('alt')).toEqual('name');
    expect(component.find('span').at(0).text()).toBe('9 days');
    expect(component.find('span').at(1).text()).toBe('from 100$');
  });
  it('should throw error without required props', () => {
    expect(() => shallow (<TripSummary />)).toThrow();
  });

});