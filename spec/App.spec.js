import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });
});
