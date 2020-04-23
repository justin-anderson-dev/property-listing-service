import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import Beds from '../client/src/components/Beds.jsx';

configure({ adapter: new Adapter() });

describe('Beds Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Beds />);
    expect(wrapper.exists()).toBe(true);
  });
});
