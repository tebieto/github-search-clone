import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from '.';

it('renders correctly', () => {
  const tree = shallow(
    <Pagination
      itemsLength={100}
      setCurrentPage={() => null}
      currentPage={0}
      maxItemPerPage={10}
    />,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
