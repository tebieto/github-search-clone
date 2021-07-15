import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { GitHub } from '@material-ui/icons';

it('renders correctly', () => {
  const tree = shallow(<GitHub />);
  expect(toJson(tree)).toMatchSnapshot();
});
