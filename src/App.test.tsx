import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

jest.mock('./utils/auth');

const waitForComponentToPaint = async (wrapper: { update: { (): void } }) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve));
    wrapper.update();
  });
};

describe('App', () => {
  it('renders correctly', () => {
    const tree = mount(<App />);
    waitForComponentToPaint(tree);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
