import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.img`
  width: 100%;
  height: auto;
`;

const Image = ({ src, handleClick }) => (<Wrapper onClick={handleClick} src={src} />);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Image.defaultProps = {
  handleClick: () => true,
};

export default Image;
