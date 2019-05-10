import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, fontWeight } from '../../_settings/_variables';

export const PriceSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Wrapper = styled.p`
  font-size: ${({ size }) => (size === PriceSize.MEDIUM ? '1.48em' : '2em')};
  font-family: 'Montserrat', sans-serif;
  font-weight: ${fontWeight.BOLD};
  color: ${color.CRIMSON};
  margin: .2em;
`;

const Price = ({ size, children }) => (
  <Wrapper size={size}>
    { `$${children}` }
  </Wrapper>
);

Price.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Price.defaultProps = {
  size: PriceSize.MEDIUM,
};

export default Price;
