import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import Price from '../../atoms/Price/Price';
import { color } from '../../_settings/_variables';

const Item = styled.li`
  list-style-type: none;
  border-bottom: .05em solid ${color.CRIMSON};

  :first-child {
    border-top: .05em solid ${color.CRIMSON};
  }
`;

Item.View = styled.span``;

function CartItem({ item: { name, subtotal, quantity } }) {
  return (
    <Item>
      <Item.View>
      </Item.View>
      <Item.View>
        <Title>{name}</Title>
      </Item.View>
      <Item.View>
        <Text>
          Quantity
          {' '}
          {quantity}
        </Text>
      </Item.View>
      <Item.View>
        <Price>{subtotal}</Price>
      </Item.View>
    </Item>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
