/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/index.jsx';

describe('APP COMPONENT', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });
});