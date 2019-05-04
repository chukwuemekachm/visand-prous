import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors, fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.p`
  font-size: 1.1em;
  font-weight: ${fontWeight.LIGHT};
  font-family: ${fontFamily.OPEN_SANS};
  color: ${({ color }) => (colors[color])};
  text-align: justify;
`;

const Text = ({ children, color }) => (
  <Wrapper color={color}>{ children }</Wrapper>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: ProcessingInstruction.string,
};

Text.defaultProps = {
  color: colors.DIM_GREY,
};

export default Text;
