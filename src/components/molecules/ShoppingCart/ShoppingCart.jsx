import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoCloseRound } from 'react-icons/lib/io';

import CartItem from '../CartItem/CartItem';
import SubHeader from '../../atoms/SubHeader/SubHeader';
import Price from '../../atoms/Price/Price';
import Icon from '../../atoms/Icon/Icon';
import Button, { ButtonSize, ButtonType } from '../../atoms/Button/Button';
import { color } from '../../_settings/_variables';
import { getItemsCount, getItemsSubTotal } from '../../../utils';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 2.5em 1em;
  width: 23%;
  box-shadow: 0 0.0625em 0.125em 0 rgba(9, 30, 66, 0.25);
  background-color: ${color.WHITE};
  overflow: scroll;
  display: ${({ displayCart }) => (displayCart ? 'block' : 'none')};

  span svg {
    cursor: pointer;
  }
`;

Wrapper.List = styled.ul`
  margin: 0em;
  padding: 0em;
`;

function ShoppingCart({ items, displayCart, handleCartToggle }) {
  return (
    <Wrapper displayCart={displayCart}>
      <Icon handleClick={handleCartToggle}>
        <IoCloseRound />
      </Icon>
      <SubHeader>
        {getItemsCount(items)}
        {' '}
        item(s) in cart
      </SubHeader>
      <Wrapper.List>
        {
          items.length
            ? items.map(item => (<CartItem key={item.itemId} item={item} />))
            : ''
        }
      </Wrapper.List>
      <SubHeader>
        {'Sub Total '}
        <Price>{getItemsSubTotal(items)}</Price>
      </SubHeader>
      <Link to="/checkout">
        <Button
          type={ButtonType.ROUNDED}
          size={ButtonSize.LARGE}
          handleClick={handleCartToggle}
        >
          Checkout
        </Button>
      </Link>
    </Wrapper>
  );
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  displayCart: PropTypes.bool.isRequired,
  handleCartToggle: PropTypes.func.isRequired,
};

export default ShoppingCart;
