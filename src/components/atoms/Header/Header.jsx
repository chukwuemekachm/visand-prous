import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Wrapper = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: ${({ size }) => (size === HeaderSize.MEDIUM ? '4.1em' : '4.7em')};
`;

const Header = ({ size, children }) => (<Wrapper size={size}>{ children }</Wrapper>);

Header.propTypes = {
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Header.defaultProps = {
  size: HeaderSize.MEDIUM,
};

export default Header;
