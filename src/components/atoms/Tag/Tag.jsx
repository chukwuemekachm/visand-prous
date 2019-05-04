import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontWeight, fontFamily, color } from '../../_settings/_variables';

export const TagTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const Wrapper = styled.label`
  padding: .3em 1em;
  border-radius: .1em;
  font-size: 1.3em;
  font-weight: ${fontWeight.BOLD};
  border: none;
  background-color: ${({ theme }) => (theme === TagTheme.PRIMARY ? color.CRIMSON : color.DARK_TURQUOISE)};
  color: ${color.WHITE};
  font-family: ${fontFamily.OPEN_SANS};
  letter-spacing: .02em;
`;

const Tag = ({ theme, children }) => (<Wrapper theme={theme}>{ children }</Wrapper>);

Tag.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tag.defaultProps = {
  theme: TagTheme.PRIMARY,
};

export default Tag;
