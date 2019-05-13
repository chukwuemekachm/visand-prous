import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color as colors } from '../../_settings/_variables';

const Wrapper = styled.span`
  padding: .36em .3em;
  border-radius: 4em;
  border: .05em solid ${({ checked }) => (checked ? colors.DARK_SLATE_GREY : colors.WHITE)};

  :hover {
    cursor: pointer;
  }
`;

Wrapper.Inner = styled.span`
  padding: .05em .7em .05em .6em;
  border-radius: 3.2em;
  background-color: ${({ color }) => color};
`;

function Color({ color, handleClick, checked }) {
  return (
    <Wrapper checked={checked}>
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
