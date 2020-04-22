import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow } from 'enzyme';
import ListingDetail from '../client/src/components/ListingDetail.jsx';

configure({ adapter: new Adapter() });

describe('ListingDetail Component', () => {
  it('renders', () => {
    const wrapper = shallow(<ListingDetail />);
    expect(wrapper.exists()).toBe(true);
  });
});
