import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily, fontWeight, color as colors } from '../../_settings/_variables';

export const Wrapper = styled.h3`
  font-family: ${fontFamily.OPEN_SANS};
  font-size: 1em;
  font-weight: ${fontWeight.BOLD};
  letter-spacing: 0em;
  color: ${({ color }) => color};
`;

const Title = ({ children, color }) => (<Wrapper color={color}>{ children }</Wrapper>);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Title.defaultProps = {
  color: colors.BLACK,
};

export default Title;
