import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors, fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.p`
  font-size: .8em;
  font-weight: ${fontWeight.LIGHT};
  font-family: ${fontFamily.OPEN_SANS};
  color: ${({ color }) => (colors[color])};
  text-align: justify;
`;

function Text({ children, color }) {
  return <Wrapper color={color}>{ children }</Wrapper>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  color: colors.DIM_GREY,
};

export default Text;
