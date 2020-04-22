import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import Description from '../client/src/components/Description.jsx';

configure({ adapter: new Adapter() });

describe('Description Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists()).toBe(true);
  });
});
