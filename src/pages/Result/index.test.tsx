import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Result from '.';
import { BrowserRouter } from 'react-router-dom';
import { client } from '../../graphql';
import { ApolloProvider } from '@apollo/client';

it('renders correctly', () => {
  const tree = mount(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Result />
      </BrowserRouter>
    </ApolloProvider>,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
