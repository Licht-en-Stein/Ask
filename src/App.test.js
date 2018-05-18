import React from 'react';
import App from './App';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('should display a text input to fill question', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button to send a question to the App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toBe(1);
});

it('should not display any answer by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.answer').length).toBe(0);
});




