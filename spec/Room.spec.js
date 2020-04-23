import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import Room from '../client/src/components/Room.jsx';

configure({ adapter: new Adapter() });

describe('Room Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Room />);
    expect(wrapper.exists()).toBe(true);
  });
});
