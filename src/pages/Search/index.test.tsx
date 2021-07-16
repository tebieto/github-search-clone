import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '.';

it('renders correctly', () => {
  const tree = shallow(<Search />);
  expect(toJson(tree)).toMatchSnapshot();
  expect(tree.contains('Search Github')).toEqual(true);
});
