/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

console.error = err => {
  throw new Error(err);
};

configure({ adapter: new Adapter() });