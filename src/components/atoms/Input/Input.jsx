import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.span`
  width: 100%;
`;

Wrapper.Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: .5em;
  border: none;
  outline: none;
  font-family: sans-serif;
  font-weight: 600;
  letter-spacing: .1em;
  background-color: transparent;
`;

const Input = ({ value, handleChange, placeHolder, handleEnter }) => (
  <Wrapper>
    <Wrapper.Input
      value={value}
      onChange={handleChange}
      placeholder={placeHolder}
      onKeyUp={handleEnter}
    />
  </Wrapper>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string,
  handleEnter: PropTypes.func,
};

Input.defaultProps = {
  handleChange: () => true,
  placeHolder: 'Search',
  handleEnter: () => true,
};


export default Input;
