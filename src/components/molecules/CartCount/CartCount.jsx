import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaShoppingBag } from 'react-icons/lib/fa';

import Icon from '../../atoms/Icon/Icon';
import { color, fontFamily, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.span`
  .svg {
    width: 5em;
    height: 5em;
  }
`;

Wrapper.Count = styled.span`
  padding: .2em .6em;
  color: crimson;
  border-radius: 1em;
  background-color: ${color.WHITE};
  border: none;
  font-size: .9em;
  font-weight: ${fontWeight.BOLD};
  font-family: ${fontFamily.OPEN_SANS};
  position: relative;
  right: .75em;
  bottom: .6em;

  :hover {
    cursor: pointer;
    background-color: ${color.CRIMSON};
    color: ${color.WHITE};
  }
`;

const CartCount = ({ itemCount, handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Icon color="LAVENDER">
      <FaShoppingBag />
    </Icon>
    <Wrapper.Count>{ itemCount }</Wrapper.Count>
  </Wrapper>
);

CartCount.propTypes = {
  itemCount: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

CartCount.defaultProps = {
  handleClick: () => true,
};

export default CartCount;
