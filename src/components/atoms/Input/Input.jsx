import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.span`
  width: 100%;
`;

Wrapper.Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: .5em;
  border: none;
  outline: none;
  font-family: ${fontFamily.OPEN_SANS};
  font-weight: ${fontWeight.BASE};
  letter-spacing: .1em;
  background-color: transparent;
`;

function Input(props) {
  const {
    value, handleChange, placeHolder, handleEnter, name, required, type,
  } = props;
  return (
    <Wrapper>
      <Wrapper.Input
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onKeyUp={handleEnter}
        name={name}
        required={required}
        type={type}
      />
    </Wrapper>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string,
  handleEnter: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  handleChange: () => true,
  placeHolder: 'Search',
  handleEnter: () => true,
  name: 'search',
  required: false,
  type: 'text',
};


export default Input;
