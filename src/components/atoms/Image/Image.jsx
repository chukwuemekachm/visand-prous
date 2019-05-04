import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.img`
  width: 100%;
  height: auto;
`;

const Image = ({ src }) => (<Wrapper src={src} />);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
