import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserResultLists from '.';

it('renders correctly', () => {
  const tree = shallow(<UserResultLists user={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
