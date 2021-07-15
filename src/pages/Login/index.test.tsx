import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '.';

it('renders correctly', () => {
  const tree = shallow(<Login />);
  expect(toJson(tree)).toMatchSnapshot();
});
