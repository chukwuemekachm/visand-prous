import React from 'react';
import styled from 'styled-components';

import { color } from '../../_settings/_variables';

const Wrapper = styled.div`
  width: 100%;
  border-top: .1em solid ${color.LAVENDER};
`;

const Divider = () => (<Wrapper />);

export default Divider;
