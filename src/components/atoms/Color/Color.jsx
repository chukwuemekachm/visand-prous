import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors } from '../../_settings/_variables';

const Wrapper = styled.span`
  display: inline-flex;
  height: 1.5em;
  width: 1.5em;
  border-radius: 3.2em;
  border: .1em solid ${({ checked, color }) => (checked ? color : colors.WHITE)};
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;

  :hover {
    cursor: pointer;
  }
`;

Wrapper.Inner = styled.span`
  align-self: center;
  margin: auto;
  display: inline-block;
  line-height: 1.2em;
  border-radius: 1.2em;
  position: relative;
  height: 1.2em;
  width: 1.2em;
  background-color: ${({ color }) => color};
`;

function Color({ color, handleClick, checked }) {
  return (
    <Wrapper checked={checked} color={color}>
      <Wrapper.Inner color={color} onClick={handleClick} />
    </Wrapper>
  );
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
};

Color.defaultProps = {
  handleClick: () => true,
  checked: false,
};

export default Color;
