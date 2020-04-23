import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import Summary from '../client/src/components/Summary.jsx';

configure({ adapter: new Adapter() });

describe('Summary Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Summary />);
    expect(wrapper.exists()).toBe(true);
  });
});
