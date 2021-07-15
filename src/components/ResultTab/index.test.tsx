import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResultTab from '.';

it('renders correctly', () => {
  const props = {
    setActive: () => null,
    active: '',
    users: [],
    repositories: [],
  };
  const tree = shallow(<ResultTab {...props} />);
  expect(toJson(tree)).toMatchSnapshot();
});
