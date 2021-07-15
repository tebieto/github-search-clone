import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RepositoryResultLists from '.';

it('renders correctly', () => {
  const tree = shallow(<RepositoryResultLists repository={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
