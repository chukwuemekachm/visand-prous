import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App component', () => {
  test('should render without errors', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });
});
