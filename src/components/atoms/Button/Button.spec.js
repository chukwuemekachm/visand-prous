import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

describe('Button component', () => {
  test('should render without errors', () => {
    const wrapper = mount(<Button>My Button</Button>);
    expect(wrapper).toBeDefined();
  });
});
