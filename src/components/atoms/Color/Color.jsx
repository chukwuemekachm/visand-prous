import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors } from '../../_settings/_variables';

const Wrapper = styled.span`
  padding: .4em;
  border-radius: 3em;
  border: .02em solid ${colors.BLACK};
`;

Wrapper.Inner = styled.span`
  padding: .04em .6em;
  border-radius: 3em;
  background-color: ${({ color }) => color};
`;

const Color = ({ color }) => (
  <Wrapper>
    <Wrapper.Inner color={color} />
  </Wrapper>
);

Color.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;
