import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';


const tags=['test', '1234', 'qwerty'];
const emptyTags=[];
let component = shallow(<TripSummary 
  tags={tags}
  image={'image'}
  name={'name'}
  days={9}
  cost={'100$'}
  id={'abc'}
/>);

describe('Component TripSummary', () => {
  it('should generate correct url link', () => {
    console.log(component.debug());
    expect(component.find('.link').prop('to')).toEqual('/trip/' + 'abc');
  });

  it('img has correct src and alt', () => {
    expect(component.find('img').prop('src')).toEqual('image');
    expect(component.find('img').prop('alt')).toEqual('name');
    expect(component.find('span').at(0).text()).toBe('9 days');
    expect(component.find('span').at(1).text()).toBe('from 100$');
  });

  it('should throw error without required props', () => {
    expect(() => shallow (<TripSummary />)).toThrow();
  });

  it('should render tags in correct order', () => {
    expect(component.find('.tag').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(tags[2]); //jak napisać to sprytniej? Bo klepanie prawie tego samego jest bez sensu :)
  });

  it('should not render div .tags without tags', () => {
    component = shallow(<TripSummary   
      tags={emptyTags}
      image={'image'}
      name={'name'}
      days={9}
      cost={'100$'}
      id={'abc'}
    />);
    expect(component.exists('.tags')).toEqual(false);
  });
});